#!/usr/bin/env python3
"""Publish immutable page images from the existing authorized review artifacts.
This is a source reader, not a declaration of completed native transcription.
"""
from __future__ import annotations
import argparse, concurrent.futures, hashlib, io, json, pathlib
from PIL import Image
from prepare import source_rows

QUALITY = 85
BUDGET = 850 * 1024 * 1024

def digest(data):
    return hashlib.sha256(data).hexdigest()

def convert(item):
    source, target_dir, expected = item
    raw = source.read_bytes()
    if digest(raw) != expected:
        raise ValueError('Review artifact image digest mismatch: ' + str(source))
    with Image.open(io.BytesIO(raw)) as im:
        image = im.convert('RGB')
        # Preserve every prepared pixel position and the original page order.
        # This is an explicitly lossy delivery derivative, not the original file.
        out = io.BytesIO()
        image.save(out, 'WEBP', quality=QUALITY, method=4)
        payload = out.getvalue()
        sha = digest(payload)
        target = target_dir / (sha[:24] + '.webp')
        if not target.exists():
            target.write_bytes(payload)
        return expected, {'image':'images/' + target.name, 'imageSha256':sha,
                          'preparedImageSha256':expected, 'width':image.width,
                          'height':image.height, 'deliveryEncoding':'WebP lossy',
                          'deliveryQuality':QUALITY}

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', type=pathlib.Path, required=True)
    parser.add_argument('--out', type=pathlib.Path, default=pathlib.Path('public/endriss/quellen'))
    args = parser.parse_args()
    args.out.mkdir(parents=True, exist_ok=True)
    (args.out/'sources').mkdir(exist_ok=True)
    (args.out/'images').mkdir(exist_ok=True)
    expected = source_rows(pathlib.Path(__file__).with_name('quellen.tsv'))
    prepared = {}
    jobs = {}
    for source_file in args.input.rglob('sources/*.json'):
        data = json.loads(source_file.read_text())
        if data['id'] in prepared:
            raise ValueError('Duplicate prepared source: ' + data['id'])
        if data.get('unsupportedMembers'):
            raise ValueError('Unsupported archive member: ' + data['id'])
        if len(data['pages']) != data['importedPages'] or not data['pages']:
            raise ValueError('Incomplete prepared source: ' + data['id'])
        prepared[data['id']] = data
        for page in data['pages']:
            image = pathlib.PurePosixPath(page['image'])
            if len(image.parts) != 2 or image.parts[0] != 'images' or '..' in image.parts:
                raise ValueError('Unsafe image reference')
            jobs.setdefault(page['imageSha256'], (source_file.parent.parent / image, args.out/'images', page['imageSha256']))
    if set(prepared) != {r['id'] for r in expected}:
        raise ValueError('Manifest mismatch: ' + repr({r['id'] for r in expected} - set(prepared)))
    index = []
    for row in expected:
        data = prepared[row['id']]
        if row.get('sha256') and row['sha256'] != data['sha256']:
            raise ValueError('Source version mismatch: ' + row['id'])
        entry = {k:data[k] for k in ['id','driveId','fach','art','title','sha256','sourceBytes','physicalPages','importedPages']}
        entry['status'] = 'prepared; publication-pending; native-transcription-separate'
        index.append(entry)
        print('SOURCE_INVENTORY', json.dumps(entry, ensure_ascii=False), flush=True)
    report = {'sources':index,'stats':{'sources':len(index),'pages':sum(s['importedPages'] for s in index),'uniqueImages':len(jobs)},'publicationComplete':False,'legalReview':False,'note':'Original delivery derivatives; no automatic assertion of native completeness or visual review.'}
    report_path = pathlib.Path('docs/endriss-originalbestand.json')
    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2)+'\n')
    assets = {}
    with concurrent.futures.ProcessPoolExecutor(max_workers=2) as pool:
        for n, (key, value) in enumerate(pool.map(convert, jobs.values(), chunksize=20), 1):
            assets[key] = value
            if n % 200 == 0:
                print('SOURCE_IMAGES', n, '/', len(jobs), flush=True)
    used = {value['image'].split('/')[-1] for value in assets.values()}
    # Remove only stale generated derivatives inside the dedicated image directory.
    for image in (args.out/'images').glob('*.webp'):
        if image.name not in used:
            image.unlink()
    for entry in index:
        data = prepared[entry['id']]
        for page in data['pages']:
            page.update(assets[page['imageSha256']])
            page['visualReview'] = 'not-asserted-by-publisher'
            page['transcription'] = None
        data['status'] = 'original-pages-published; native-transcription-separate'
        data['legalReview'] = False
        (args.out/'sources'/(data['id']+'.json')).write_text(json.dumps(data, ensure_ascii=False, separators=(',',':'))+'\n')
    size = sum(p.stat().st_size for p in pathlib.Path('public').rglob('*') if p.is_file())
    report['stats']['publicBytes'] = size
    report['stats']['budgetBytes'] = BUDGET
    report['deliveryQuality'] = QUALITY
    report['publicationComplete'] = size <= BUDGET
    if report['publicationComplete']:
        for entry in index:
            entry['status'] = 'original-pages-published; native-transcription-separate'
    # Always retain diagnostic evidence, including an over-budget result.
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2)+'\n')
    print('SOURCE_PUBLISH', json.dumps(report['stats']), flush=True)
    if not report['publicationComplete']:
        raise ValueError('Public assets exceed the 850 MiB deployment budget: '+str(size))
    (args.out/'index.json').write_text(json.dumps(report, ensure_ascii=False, indent=2)+'\n')

if __name__ == '__main__':
    main()
