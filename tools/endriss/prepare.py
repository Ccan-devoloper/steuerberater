#!/usr/bin/env python3
"""Prepare complete source images, without OCR or legal updates.
Raw PDFs/archives remain temporary. Preparation never marks a page as read.
"""
from __future__ import annotations
import argparse
import concurrent.futures
import hashlib
import io
import json
import pathlib
import re
import time
import urllib.request
import zipfile
import fitz
from PIL import Image, ImageOps

LIMIT = 256 * 1024 * 1024
OWNER_MARKERS = ('persönliches pdf für', 'yusuf karaman', '51429 bergisch gladbach')
IMAGE_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff', '.bmp'}

def source_rows(path):
    if path.suffix == '.json':
        return json.loads(path.read_text(encoding='utf-8'))
    rows = []
    for line in path.read_text(encoding='utf-8').splitlines():
        if not line or line.startswith('#'):
            continue
        parts = line.split('|')
        if len(parts) != 6:
            raise ValueError('Source manifest requires six columns')
        slug, drive_id, subject, kind, title, digest = parts
        if not re.fullmatch(r'[a-z0-9-]+', slug):
            raise ValueError('Unsafe source slug')
        if not re.fullmatch(r'[A-Za-z0-9_-]+', drive_id):
            raise ValueError('Invalid Drive ID')
        row = {'id': slug, 'driveId': drive_id, 'fach': subject, 'art': kind, 'title': title}
        if digest:
            row['sha256'] = digest
        if slug == 'est-ks1':
            row['startPage'] = 81
        rows.append(row)
    if len({r['id'] for r in rows}) != len(rows) or len({r['driveId'] for r in rows}) != len(rows):
        raise ValueError('Duplicate manifest source')
    return rows

def acquire(row, cache):
    target = cache / (row['id'] + '.source')
    data = target.read_bytes() if target.exists() else None
    if data is None:
        url = ('https://drive.usercontent.google.com/download?id=' + row['driveId']
               + '&export=download&confirm=t')
        for attempt in range(3):
            try:
                req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=180) as response:
                    data = response.read(LIMIT + 1)
                if len(data) > LIMIT:
                    raise ValueError('Source exceeds size ceiling')
                if not (data.startswith(b'%PDF-') or data.startswith(b'PK') or row['art'] == 'image'):
                    raise ValueError('Provider returned a non-document response')
                target.write_bytes(data)
                break
            except Exception:
                if attempt == 2:
                    raise
                time.sleep(2 * (attempt + 1))
    digest = hashlib.sha256(data).hexdigest()
    if row.get('sha256') and digest != row['sha256']:
        raise ValueError('Source SHA256 changed; manual re-review required')
    return data, digest

def remove_owner_lines(page):
    removed = 0
    for block in page.get_text('dict')['blocks']:
        for line in block.get('lines', []):
            text = ''.join(span['text'] for span in line.get('spans', []))
            if any(marker in text.casefold() for marker in OWNER_MARKERS):
                box = fitz.Rect(line['bbox']) + (-2, -1, 2, 1)
                page.add_redact_annot(box, fill=(1, 1, 1))
                removed += 1
    if removed:
        page.apply_redactions(images=2, graphics=0, text=0)
    return removed

def image_asset(image, output):
    image = ImageOps.exif_transpose(image).convert('RGB')
    if max(image.size) > 2200:
        image.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
    raw = io.BytesIO()
    image.save(raw, format='WEBP', lossless=True, method=4)
    data = raw.getvalue()
    sha = hashlib.sha256(data).hexdigest()
    name = sha[:24] + '.webp'
    target = output / 'images' / name
    if not target.exists():
        target.write_bytes(data)
    return {'image': 'images/' + name, 'imageSha256': sha,
            'width': image.width, 'height': image.height}

def pdf_pages(data, output, member=None, start=1):
    doc = fitz.open(stream=data, filetype='pdf')
    pages = []
    for number in range(start, len(doc) + 1):
        page = doc[number - 1]
        removed = remove_owner_lines(page)
        scale = min(2.0, 2200 / max(page.rect.width, page.rect.height))
        pix = page.get_pixmap(matrix=fitz.Matrix(scale, scale), alpha=False)
        image = Image.frombytes('RGB', (pix.width, pix.height), pix.samples)
        entry = {'page': number, **image_asset(image, output),
                 'text': page.get_text(sort=True).strip(), 'ownerLinesRemoved': removed,
                 'visualReview': 'pending', 'transcription': None}
        if member is not None:
            entry['member'] = member
        pages.append(entry)
    return pages, len(doc)

def process(row, cache, output):
    data, sha = acquire(row, cache)
    pages, unsupported, ignored, raw_members = [], [], [], []
    physical_count = 0
    if row['art'] == 'zip':
        with zipfile.ZipFile(io.BytesIO(data)) as archive:
            infos = archive.infolist()
            if len(infos) > 2000 or sum(i.file_size for i in infos) > LIMIT:
                raise ValueError('Archive member count/expanded size exceeds ceiling')
            for info in sorted(infos, key=lambda x: [int(y) if y.isdigit() else y.lower()
                                                    for y in re.split(r'(\d+)', x.filename)]):
                name = info.filename
                path = pathlib.PurePosixPath(name)
                if info.is_dir() or '__MACOSX' in path.parts or path.name.startswith('.'):
                    ignored.append({'name': name, 'reason': 'Directory or operating-system metadata'})
                    continue
                # Never extract archive paths or execute archive members.
                payload = archive.read(info)
                raw_members.append({'name': name, 'size': len(payload),
                                    'sha256': hashlib.sha256(payload).hexdigest()})
                ext = path.suffix.lower()
                if ext == '.pdf' or payload.startswith(b'%PDF-'):
                    entries, count = pdf_pages(payload, output, member=name)
                    pages.extend(entries)
                    physical_count += count
                elif ext in IMAGE_EXTENSIONS:
                    with Image.open(io.BytesIO(payload)) as image:
                        for frame in range(getattr(image, 'n_frames', 1)):
                            image.seek(frame)
                            pages.append({'page': frame + 1, 'member': name,
                                          **image_asset(image.copy(), output), 'text': '',
                                          'ownerLinesRemoved': 0, 'visualReview': 'pending',
                                          'transcription': None})
                            physical_count += 1
                else:
                    unsupported.append(name)
    elif data.startswith(b'%PDF-'):
        pages, physical_count = pdf_pages(data, output, start=row.get('startPage', 1))
    else:
        with Image.open(io.BytesIO(data)) as image:
            pages = [{'page': 1, **image_asset(image, output), 'text': '',
                      'ownerLinesRemoved': 0, 'visualReview': 'pending', 'transcription': None}]
            physical_count = 1
    result = {**row, 'sha256': sha, 'sourceBytes': len(data), 'physicalPages': physical_count,
              'importedPages': len(pages), 'pages': pages, 'archiveMembers': raw_members,
              'unsupportedMembers': unsupported, 'ignoredMembers': ignored,
              'status': 'prepared-not-reviewed'}
    (output / 'sources' / (row['id'] + '.json')).write_text(
        json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    return {k: v for k, v in result.items() if k != 'pages'}

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--manifest', type=pathlib.Path, default=pathlib.Path(__file__).with_name('quellen.tsv'))
    parser.add_argument('--cache', type=pathlib.Path, default=pathlib.Path('/tmp/endriss-source-cache'))
    parser.add_argument('--out', type=pathlib.Path, default=pathlib.Path('/tmp/endriss-review'))
    parser.add_argument('--only', default='')
    parser.add_argument('--workers', type=int, default=2)
    args = parser.parse_args()
    for path in [args.cache, args.out / 'images', args.out / 'sources']:
        path.mkdir(parents=True, exist_ok=True)
    rows = source_rows(args.manifest)
    if args.only:
        chosen = set(args.only.split(','))
        rows = [r for r in rows if r['id'] in chosen]
        if len(rows) != len(chosen):
            raise ValueError('Requested source is not in manifest')
    results, errors = [], []
    # Isolated processes: PyMuPDF documents are never shared between threads.
    with concurrent.futures.ProcessPoolExecutor(max_workers=max(1, min(args.workers, 4))) as pool:
        pending = {pool.submit(process, row, args.cache, args.out): row for row in rows}
        for future in concurrent.futures.as_completed(pending):
            row = pending[future]
            try:
                result = future.result()
                results.append(result)
                print('PREPARED', row['id'], result['physicalPages'], result['importedPages'], flush=True)
            except Exception as exc:
                errors.append({'id': row['id'], 'errorType': type(exc).__name__, 'message': str(exc)[:300]})
                print('UNAVAILABLE', row['id'], type(exc).__name__, flush=True)
    ordered = {r['id']: i for i, r in enumerate(rows)}
    results.sort(key=lambda r: ordered[r['id']])
    report = {'sources': results, 'errors': errors,
              'note': 'Acquisition and rendering only. No page is automatically marked read or transcribed.'}
    (args.out / 'inventory.json').write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print('PREPARE_TOTAL', len(results), 'ERRORS', len(errors), flush=True)

if __name__ == '__main__':
    main()
