#!/usr/bin/env python3
"""ESt-Skriptseiten 80–162 quellentreu und reproduzierbar importieren.
Extraktion aus der fixierten Textebene; native Tabellen und Abbildungen nach
visueller Transkription. Kein OCR und keine Rechtsstandsprüfung.
"""
from __future__ import annotations
import argparse
import hashlib
import io
import json
import pathlib
import re
import unicodedata
import fitz
from PIL import Image
from est_abbildungen import FIGURES, EXTRAS
from est_tabellen import TABLES

ROOT = pathlib.Path(__file__).resolve().parents[2]
SHA = '94ae8633d4b04c3134d6e80ea4dbb2314555d83fafa21233a7c549f8a58c6f4f'
PARTS = {
 'gew': ('§ 15 EStG','Einkünfte aus Gewerbebetrieb',['§ 15 EStG','§ 3 Nr. 72 EStG']),
 'ba': ('Betriebsaufspaltung','Betriebsaufspaltung',['§ 15 EStG','§ 3c EStG']),
 'gg': ('Grundstückshandel','Gewerblicher Grundstückshandel',['§ 15 EStG','§ 23 EStG']),
 'be': ('Betriebsbeendigung','Betriebsbeendigung',['§ 16 EStG','§ 34 EStG']),
 'euer': ('EÜR','Einnahmenüberschussrechnung',['§ 4 Abs. 3 EStG','§ 11 EStG']),
 'sa': ('§ 18 EStG','Einkünfte aus selbständiger Arbeit',['§ 18 EStG']),
 'kap': ('§ 20 EStG','Einkünfte aus Kapitalvermögen',['§ 20 EStG','§ 32d EStG']),
}
# Printed page, exact heading top, part, chapter, native source heading.
CUTS = [
 (80,60,'gew',3,'3.6 Überführungen zwischen Betriebs- und Privatvermögen'),
 (80,389,'gew',4,'4 Steuerbefreiung bei Photovoltaik-Anlagen, § 3 Nr. 72 EStG'),
 (82,60,'ba',1,'1 Allgemeines'),(83,202,'ba',2,'2 Beginn und Beendigung der Betriebsaufspaltung'),
 (85,60,'ba',3,'3 Sachliche Verflechtung'),(86,60,'ba',4,'4 Personelle Verflechtung'),
 (90,114,'ba',5,'5 Teilabzugsverbot'),(91,213,'ba',6,'6 Mitunternehmerische Betriebsaufspaltung'),
 (94,60,'gg',1,'1 Überblick'),(94,658,'gg',2,'2 Bedingte Veräußerungsabsicht („Drei-Objekt-Grenze“)'),
 (97,526,'gg',3,'3 Unbedingte Veräußerungsabsicht'),(98,60,'gg',4,'4 Sonderfälle'),
 (100,60,'gg',5,'5 Beginn, Umfang und Beendigung'),(101,292,'gg',6,'6 Gewinnermittlung'),
 (104,60,'be',1,'1 Grundfall'),(105,60,'be',2,'2 Wesentliche Betriebsgrundlagen'),
 (106,474,'be',3,'3 Betriebsveräußerung im Ganzen'),(107,506,'be',4,'4 Betriebsaufgabe im Ganzen'),
 (110,60,'be',5,'5 Teilbetriebsveräußerung und Teilbetriebsaufgabe'),(112,60,'be',6,'6 Veräußerung und Aufgabe eines Mitunternehmeranteils'),
 (113,60,'be',7,'7 Unentgeltliche Betriebsübertragung'),(113,498,'be',8,'8 Veräußerungs- bzw. Aufgabegewinn'),
 (118,182,'be',9,'9 Betriebsverpachtung im Ganzen/Betriebsunterbrechung'),
 (123,60,'euer',1,'1 Grundsätze'),(123,487,'euer',2,'2 Einzelfälle'),(128,398,'euer',3,'3 Wechsel der Gewinnermittlungsart'),
 (133,60,'sa',1,'1 Allgemeine Voraussetzungen'),(133,282,'sa',2,'2 Tatbestände'),
 (134,264,'sa',3,'3 Abgrenzung zur gewerblichen Tätigkeit'),(135,131,'sa',4,'4 Besteuerung'),
 (137,60,'kap',1,'1 Systematik'),(141,60,'kap',2,'2 Einzelne laufende Kapitalerträge'),
 (150,60,'kap',3,'3 Veräußerungsvorgänge'),(154,529,'kap',4,'4 Sparer-Pauschbetrag'),
 (155,275,'kap',5,'5 Verluste/Verlustausgleichsbeschränkungen, § 20 Abs. 6 EStG'),
 (158,60,'kap',6,'6 Ausnahmen vom Abgeltungsteuersatz, § 32d Abs. 2 EStG')
]

def normalize(value):
    value = unicodedata.normalize('NFC', value).replace('\u00ad', '')
    value = re.sub(r'-\n(?=(?:und|oder)\b)', '- ', value)
    value = re.sub(r'(\w)-\n(?=[a-zäöüß])', r'\1', value)
    value = re.sub(r'\s+', ' ', value).strip()
    # Ausschließlich anhand der dargestellten Originalseiten bestätigte
    # Schriftkodierungsverluste. Keine Korrektur von Rechtsaussagen.
    replacements = {
      'Zusammenrechnung on': 'Zusammenrechnung von',
      'roblematisch ist': 'Problematisch ist',
      'atbestandsmerkmal „keine Verm gens erwaltung“, 1 . ESt .': 'Tatbestandsmerkmal „keine Vermögensverwaltung“, H 15.7 EStH.',
      'Be in te eräußerun s sic t „ rei-Objekt-Grenze“)': 'Bedingte Veräußerungsabsicht („Drei-Objekt-Grenze“)',
      '„ rei-Objekt-Grenze“': '„Drei-Objekt-Grenze“',
      'iernach stellt': 'Hiernach stellt',
      'Nicht berschreiten': 'Nichtüberschreiten',
      'Grundst ckshandel or': 'Grundstückshandel vor',
      'che ätigkeit': 'che Tätigkeit',
      'Grundst ckshandel': 'Grundstückshandel',
      'aus bt.': 'ausübt.',
      'erstmals berschritten': 'erstmals überschritten',
      'In nkenntnis': 'In Unkenntnis',
      'Grundst ckshan dels': 'Grundstückshandels',
      'Grundst ckshandels': 'Grundstückshandels',
      'Grundst cksh an': 'Grundstückshan',
      'Beweis anzeichen': 'Beweisanzeichen',
      '„normale“ gewerb liche': '„normale“ gewerbliche',
      '„Fußstapfentheo rie“': '„Fußstapfentheorie“',
      '„Drei-Objekt- Grenze“': '„Drei-Objekt-Grenze“',
      '„erzeugen“, 4. Abs. 6 ESt .': '„erzeugen“, R 4.5 Abs. 6 EStR.',
      '„risikolosen arkt erzinsung“': '„risikolosen Marktverzinsung“',
      '„norm e“ Zinsen': '„normale“ Zinsen',
      'die osition des echts orgängers': 'die Position des Rechtsvorgängers',
      'aber orrangig': 'aber vorrangig',
      'spricht man on gesonderten „Verlust errechnungst pfen“': 'spricht man von gesonderten „Verlustverrechnungstöpfen“',
    }
    for old,new in replacements.items(): value=value.replace(old,new)
    return value

def asset(page, dest, printed):
    # Retain the complete page. The ESt source has no personal watermark.
    name = f'p-{printed:03}.webp'
    if (dest/name).exists():
        raw=(dest/name).read_bytes()
        with Image.open(io.BytesIO(raw)) as cached:
            width,height=cached.size
        return {'druckseite':printed,'pdfSeite':printed+1,'src':f'endriss/est-ks1/{name}',
                'alt':f'ESt-Kurzskript I · Original-Skriptseite {printed}','width':width,'height':height,
                'sha256':hashlib.sha256(raw).hexdigest()}
    pix = page.get_pixmap(matrix=fitz.Matrix(2,2), alpha=False)
    image = Image.frombytes('RGB',(pix.width,pix.height),pix.samples)
    data = io.BytesIO(); image.save(data, format='WEBP', lossless=True, method=4)
    raw = data.getvalue(); name = f'p-{printed:03}.webp'
    (dest/name).write_bytes(raw)
    return {'druckseite':printed,'pdfSeite':printed+1,
            'src':f'endriss/est-ks1/{name}','alt':f'ESt-Kurzskript I · Original-Skriptseite {printed}',
            'width':image.width,'height':image.height,'sha256':hashlib.sha256(raw).hexdigest()}

def region_blocks(page, number):
    regions=[]
    substantive = [b for b in page.get_text('dict')['blocks'] if b['type']==1 and b['bbox'][1]<780 and b['bbox'][3]-b['bbox'][1]>40]
    for i,b in enumerate(substantive):
        key=f'{number}-{i}'
        if key not in FIGURES: raise ValueError('Untranscribed figure '+key)
        caption,blocks=FIGURES[key]
        regions.append({'bbox':b['bbox'],'caption':caption,'blocks':blocks, 'figureId':key})
    for r in EXTRAS.get(number, []):
        regions.append({'bbox': r['rect'], 'caption': r['title'], 'blocks': r['blocks'], 'figureId': f'{number}-vector'})
    regions.extend(r for r in TABLES if r['page']==number)
    return regions

def items_for_page(page, number):
    regions=region_blocks(page,number)
    items=[]
    for region in regions:
        x0,y0,x1,y1=region['bbox']
        for i,block in enumerate(region['blocks']):
            items.append((y0+i*.001, {**block,'quellenSeite':number,'pdfSeite':number+1,
                           'abbildung':region.get('caption','')}))
    for bi,b in enumerate(page.get_text('dict')['blocks']):
        if b['type']!=0: continue
        lines=[]
        for line in b['lines']:
            value=''.join(s['text'] for s in line['spans']).strip()
            if not value: continue
            x0,y0,x1,y1=line['bbox']
            if y0<60 or y0>785: continue
            cx,cy=(x0+x1)/2,(y0+y1)/2
            if any(fitz.Rect(r['bbox']).contains(fitz.Point(cx,cy)) for r in regions): continue
            size=max(s['size'] for s in line['spans'])
            lines.append([y0,y1,x0,x1,value,size])
        merged=[]
        for line in sorted(lines,key=lambda l:(round(l[0],1),l[2])):
            if merged and abs(merged[-1][0]-line[0])<1.8:
                merged[-1][4]+=' '+line[4]
                merged[-1][1]=max(merged[-1][1],line[1]); merged[-1][3]=max(merged[-1][3],line[3])
                merged[-1][5]=max(merged[-1][5],line[5])
            else: merged.append(line)
        para=[]
        def flush():
            if not para:return
            value=normalize('\n'.join(l[4] for l in para))
            typ='titel' if para[0][5]>=11.9 or re.fullmatch(r'(?:Beispiel(?:\s+\d+)?|Abwandlung(?:\s+\d+)?|Ergänzung(?:\s+\d+)?|Hinweis|Beachte|Bearbeitungshinweis):?',value) else None
            block={'text':value,'quellenSeite':number,'pdfSeite':number+1}
            if typ: block['typ']=typ
            items.append((para[0][0],block));para.clear()
        for line in merged:
            label=bool(re.match(r'^(?:Beispiel|Abwandlung|Ergänzung|Hinweis|Beachte|Bearbeitungshinweis)(?:\s+\d+)?:',line[4]))
            bullet=line[4].startswith(('•','- ','– '))
            if para and (line[0]-para[-1][1]>5 or (line[5]>=11.9)!=(para[-1][5]>=11.9) or label or bullet): flush()
            para.append(line)
        flush()
    return sorted(items,key=lambda p:p[0])

def generate(source):
    raw=source.read_bytes()
    if hashlib.sha256(raw).hexdigest()!=SHA: raise ValueError('Original source SHA256 mismatch')
    doc=fitz.open(stream=raw,filetype='pdf')
    if len(doc)!=163: raise ValueError('Expected cover + 162 numbered pages')
    out=ROOT/'public/endriss/est-ks1';out.mkdir(parents=True,exist_ok=True)
    chapters=[]
    for page,y,part,number,title in CUTS:
        label,part_title,norms=PARTS[part]
        chapters.append({'id':f'est-ks1-{part}-{number:02}', 'teil':part,'teilLabel':label,'teilTitel':part_title,
          'kapitel':str(number),'title':title,'thema':part_title+' · '+re.sub(r'^\d+(?:\.\d+)?\s+','',title),
          'rechtsstand':'Stand 07/2026 · Quellenstand unverändert',
          'quelle':f'ESt Kurzskript I (Engelberth) · {part_title}, Kapitel {number}',
          'verfasser':'Martin Engelberth','normen':norms,'bloecke':[],'quellenseiten':[]})
    inventory=[]; cuts=[(p,y) for p,y,*_ in CUTS]
    for number in range(80,163):
        page=doc[number]; evidence=asset(page,out,number);inventory.append(evidence)
        for y,block in items_for_page(page,number):
            ci=max(i for i,c in enumerate(cuts) if c <= (number,y+.2))
            chapters[ci]['bloecke'].append(block)
            if not any(p['druckseite']==number for p in chapters[ci]['quellenseiten']):
                chapters[ci]['quellenseiten'].append(evidence)
    for chapter in chapters:
        if not chapter['bloecke']:raise ValueError('Empty chapter '+chapter['id'])
        first,last=chapter['quellenseiten'][0]['druckseite'],chapter['quellenseiten'][-1]['druckseite']
        chapter['quelle']+=f' · Skript-S. {first}–{last}'
    addition=chapters.pop(0)
    content='/* Generiert durch tools/endriss/generate_est.py; Quelle per SHA-256 fixiert.\n   Keine Rechtsstandsprüfung. Bildtabellen sind visuell übertragen. */\n'
    content+='export const estKurzskript1FortsetzungGewerbe = '+json.dumps(addition,ensure_ascii=False,indent=2)+';\n\n'
    content+='export const estKurzskript1Nachtrag = '+json.dumps(chapters,ensure_ascii=False,indent=2)+';\n'
    content+='export const estKurzskript1NachtragAudit = '+json.dumps({'driveId':'1DdIbwtK4vfHU4w15uayCsg_VdaD7Afft','sha256':SHA,'pdfPages':163,'printedPages':162,'addedPrintedPages':list(range(80,163)),'nativeChaptersAdded':len(chapters),'rasterFiguresTranscribed':len(FIGURES),'vectorRegionsTranscribed':len(EXTRAS),'nativeTableRegions':len(TABLES),'legalReview':False},ensure_ascii=False,indent=2)+';\n'
    (ROOT/'src/data/est-kurzskript-1-nachtrag.js').write_text(content,encoding='utf-8')
    (out/'seiten.json').write_text(json.dumps(inventory,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print('ESt:',len(chapters),'new chapters;',len(inventory),'source pages;',len(FIGURES),'raster figures;',len(TABLES),'table regions')

if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('source',type=pathlib.Path);args=p.parse_args();generate(args.source)
