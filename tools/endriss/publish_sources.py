#!/usr/bin/env python3
"""Publish immutable page images from the existing authorized review artifacts.
This is a source reader, not a declaration of completed native transcription.
"""
from __future__ import annotations
import argparse, concurrent.futures, hashlib, io, json, pathlib, re
from PIL import Image
from prepare import source_rows

def digest(data):
    return hashlib.sha256(data).hexdigest()

def convert(item):
    source, target_dir, expected = item
    raw = source.read_bytes()
    if digest(raw) != expected:
        raise ValueError('Review artifact image digest mismatch: ' + str(source))
    with Image.open(io.BytesIO(raw)) as im:
        image = im.convert('RGB')
        # Preserve the full prepared resolution; only change the container encoding.
        out = io.BytesIO()
        image.save(out, 'WEBP', quality=92, method=4)
        payload = out.getvalue()
        sha = digest(payload)
        target = target_dir / (sha[:24] + '.webp')
        if not target.exists():
            target.write_bytes(payload)
        return expected, {'image':'images/' + target.name, 'imageSha256':sha,
                          'preparedImageSha256':expected, 'width':image.width, 'height':image.height}

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
    with concurrent.futures.ProcessPoolExecutor(max_workers=2) as pool:
        assets = dict(pool.map(convert, jobs.values(), chunksize=20))
    index = []
    for row in expected:
        data = prepared[row['id']]
        if row.get('sha256') and row['sha256'] != data['sha256']:
            raise ValueError('Source version mismatch')
        for page in data['pages']:
            page.update(assets[page['imageSha256']])
            page['visualReview'] = 'not-asserted-by-publisher'
            page['transcription'] = None
        data['status'] = 'original-pages-published; native-transcription-separate'
        data['legalReview'] = False
        (args.out/'sources'/(data['id']+'.json')).write_text(json.dumps(data, ensure_ascii=False, separators=(',',':'))+'\n')
        index.append({k:data[k] for k in ['id','driveId','fach','art','title','sha256','sourceBytes','physicalPages','importedPages','status']})
    size = sum(p.stat().st_size for p in pathlib.Path('public').rglob('*') if p.is_file())
    if size > 850*1024*1024:
        raise ValueError('Public assets exceed the 850 MiB deployment budget: '+str(size))
    report = {'sources':index,'stats':{'sources':len(index),'pages':sum(s['importedPages'] for s in index),'uniqueImages':len(assets),'publicBytes':size},'legalReview':False,'note':'Original pages published; no automatic assertion of native completeness or visual review.'}
    (args.out/'index.json').write_text(json.dumps(report, ensure_ascii=False, indent=2)+'\n')
    pathlib.Path('docs/endriss-originalbestand.json').write_text(json.dumps(report, ensure_ascii=False, indent=2)+'\n')
    print('SOURCE_PUBLISH', json.dumps(report['stats']), flush=True)

if __name__ == '__main__':
    main()
