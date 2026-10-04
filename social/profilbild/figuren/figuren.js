/* Exportiert die Open-Peeps-Figuren des Logos als SVG-Fragmente nach figuren.json.
   Open Peeps: Pablo Stanley, CC0 (https://www.openpeeps.com); Bausteine aus dem
   npm-Paket react-peeps (MIT). Einmalig nötig, wenn sich eine Figur ändert:

     npm install --no-save react-peeps react@17 react-dom@17
     node figuren.js

   Koordinaten im 850x1200-Raster der Peeps. Körper und Kopf werden getrennt
   eingefärbt; Flächen, die die Pose sonst in Kleiderfarbe füllen würde (Hals,
   Hände), bekommen Hautfarbe über Polygone, die auf den Konturlinien liegen.

   haltung
     front   Buch frei vor der Brust, gezeichnete Finger an den Kanten
     griff   Pose "Coffee": eine Hand umgreift die linke Buchkante
     lesen   Pose "Paper": beide Hände halten das Buch schräg wie beim Lesen
     hand    Pose "Explaining": Buch steht auf der offenen Hand
   buch    Lage des Buchs im Peeps-Raster (nur griff/lesen/hand)
   vorne   Polygon der Finger, die vor dem Buch liegen
   tx/ty   Verschiebung in der Scheibe (Skala 0,8) */
const React = require('react');
const { renderToStaticMarkup: r } = require('react-dom/server');
const Pose = require('react-peeps/lib/peeps/pose').default;
const Hair = require('react-peeps/lib/peeps/hair').default;
const Face = require('react-peeps/lib/peeps/face').default;
const FacialHair = require('react-peeps/lib/peeps/facialHair').default;
const Accessories = require('react-peeps/lib/peeps/accessories').default;

const LINIE = '#151515';

/* Posen-Geometrie (gemessen am Raster) */
const POSE = {
  ButtonShirt: { hals: '385,470 565,470 560,525 495,668 480,640 388,515' },
  BlazerBlackTee: { hals: '385,460 565,470 555,520 490,636 420,592 380,500' },
  Coffee: {
    haltung: 'griff',
    hals: '382,457 543,457 548,523 501,603 472,636 444,603 387,523',
    haende: '331,893 373,872 406,825 444,792 482,770 515,773 534,787 529,816 543,835 546,863 534,891 524,915 491,929 453,957 397,976 350,997',
    buch: { cx: 624, cy: 858, w: 280, h: 320, winkel: -4 },
  },
  Paper: {
    haltung: 'lesen',
    /* Der Pullover ist in Linienfarbe gezeichnet; Kleiderfarbe Schwarz macht ihn
       einfarbig, Hände und Hals kommen über Polygone in Hautfarbe dazu. */
    hals: '392,428 545,428 543,520 500,532 440,526 395,505',
    vorne: '444,872 529,806 576,778 623,773 652,797 680,787 746,778 770,782 784,844 789,891 756,934 699,948 661,946 604,910 548,938 453,957',
    buch: { cx: 680, cy: 738, w: 250, h: 300, winkel: 9 },
  },
  Explaining: {
    haltung: 'hand',
    hals: '389,457 397,414 538,414 543,476 578,556 571,608 557,641 482,674 378,627 312,556 368,513 387,485',
    haende: '401,806 444,750 463,712 472,773 491,780 529,778 586,764 628,759 661,764 652,787 605,816 571,852 529,886 491,891 435,891 416,844',
    manschette: [401, 806, 435, 891],
    buch: { cx: 570, cy: 656, w: 204, h: 226, winkel: -5 },
  },
};
POSE.Coffee.vorne = POSE.Coffee.haende;
POSE.Paper.haende = POSE.Paper.vorne;

const FIGUREN = {
  /* Haltung "front" - die beiden ersten Entwürfe */
  herr:   { pose: 'ButtonShirt', haar: 'ShortVolumed', gesicht: 'Smile', bart: 'Handlebars', haut: '#c98d63', kleidung: '#f8d775', tx: 114, ty: -2 },
  frau:   { pose: 'BlazerBlackTee', haar: 'Long', gesicht: 'Smile', brille: 'GlassRound', haut: '#f2c6a0', kleidung: '#8fd89a', tx: 134, ty: 16 },
  /* Natürlichere Haltungen, Figuren frei nach dem Examenscampus-Cast */
  nila:   { pose: 'Coffee', haar: 'Bun', haarfarbe: '#6b4226', gesicht: 'Smile', haut: '#d9a27a', kleidung: '#e7b33f', tx: 112, ty: 34 },
  holger: { pose: 'Coffee', haar: 'ShortMessy', haarfarbe: '#a8763e', gesicht: 'SmileBig', haut: '#f0c4a0', kleidung: '#aeb4bd', tx: 112, ty: 0 },
  mia:    { pose: 'Paper', haar: 'LongCurly', gesicht: 'Calm', haut: '#8d5a3b', kleidung: LINIE, tx: 70, ty: 34 },
  erwin:  { pose: 'Paper', haar: 'BaldSides', haarfarbe: '#c9c9c9', gesicht: 'Smile', brille: 'GlassRound', bart: 'MoustacheThin', haut: '#f2c6a0', kleidung: LINIE, tx: 70, ty: 0 },
  vera:   { pose: 'Explaining', haar: 'MediumStraight', haarfarbe: '#c8553d', gesicht: 'Cute', haut: '#f6d2b5', kleidung: '#3cc4b4', tx: 118, ty: 6 },
  dario:  { pose: 'Explaining', haar: 'Pomp', gesicht: 'Cheeky', haut: '#b9805a', kleidung: '#e5533d', tx: 118, ty: 0 },
};

/* Haare in eigener Farbe: Füllfarbe tauschen, schwarze Kontur dazu */
function haare(f) {
  const farbe = f.haarfarbe || LINIE;
  let s = r(React.createElement(Hair, { piece: f.haar, strokeColor: farbe, backgroundColor: f.haut }));
  if (farbe !== LINIE)
    s = s.replace(new RegExp(`fill="${farbe}"( fill-rule="evenodd")? stroke="none"`, 'g'),
                  `fill="${farbe}"$1 stroke="${LINIE}" stroke-width="7" stroke-linejoin="round" paint-order="stroke"`);
  return s;
}

function kopf(f) {
  const teil = (C, p, t) => `<g transform="translate(${t})">${r(React.createElement(C, { piece: p, strokeColor: LINIE, backgroundColor: f.haut }))}</g>`;
  /* wie react-peeps/head: alles um 225 nach rechts versetzt */
  return `<g transform="translate(225 0)"><g>${haare(f)}</g>${teil(Face, f.gesicht, "159 186")}${teil(FacialHair, f.bart || "None", "123 338")}${teil(Accessories, f.brille || "None", "47 241")}</g>`;
}

const koerper = (pose, grund) => r(React.createElement(Pose, { piece: pose, strokeColor: LINIE, backgroundColor: grund }));

const out = {};
for (const [name, f] of Object.entries(FIGUREN)) {
  const p = POSE[f.pose] || {};
  out[name] = {
    haltung: p.haltung || 'front',
    koerper: koerper(f.pose, f.kleidung), koerperLinien: koerper(f.pose, 'none'), kopf: kopf(f),
    haut: f.haut, kleidung: f.kleidung, hals: p.hals || '',
    haende: p.haende || '', vorne: p.vorne || '', manschette: p.manschette || null,
    buch: p.buch || null, tx: f.tx, ty: f.ty,
  };
}
require('fs').writeFileSync(require('path').join(__dirname, 'figuren.json'), JSON.stringify(out));
console.log('figuren.json:', Object.keys(out).join(', '));
