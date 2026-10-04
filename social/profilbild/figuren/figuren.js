/* Exportiert die Open-Peeps-Figuren des Logos als SVG-Fragmente nach figuren.json.
   Open Peeps: Pablo Stanley, CC0 (https://www.openpeeps.com); Bausteine aus dem
   npm-Paket react-peeps (MIT). Einmalig nötig, wenn sich eine Figur ändert:

     npm install --no-save react-peeps react@17 react-dom@17
     node figuren.js

   Körper und Kopf werden getrennt eingefärbt (Kleidung / Haut). "hals" ist eine
   Fläche in Hautfarbe über dem Kragen - die Pose färbt den Hals sonst wie die
   Kleidung. tx/ty verschieben die Figur in der Scheibe (Skala 0,8). */
const React = require('react');
const { renderToStaticMarkup: r } = require('react-dom/server');
const Pose = require('react-peeps/lib/peeps/pose').default;
const Head = require('react-peeps/lib/peeps/head').default;

const LINIE = '#151515';
const FIGUREN = {
  /* wie die Coverfigur mit Schnurrbart und gelbem Hemd */
  herr: { pose: 'ButtonShirt', haar: 'ShortVolumed', gesicht: 'Smile', bart: 'Handlebars', haut: '#c98d63', kleidung: '#f8d775',
          hals: '385,470 565,470 560,525 495,668 480,640 388,515', tx: 114, ty: -2 },
  /* wie die Coverfigur mit Brille und grünem Blazer */
  frau: { pose: 'BlazerBlackTee', haar: 'Long', gesicht: 'Smile', brille: 'GlassRound', haut: '#f2c6a0', kleidung: '#8fd89a',
          hals: '385,460 565,470 555,520 490,636 420,592 380,500', tx: 134, ty: 16 },
};

const teil = (f, kleidung) => ({
  koerper: r(React.createElement(Pose, { piece: f.pose, strokeColor: LINIE, backgroundColor: kleidung })),
  kopf: r(React.createElement(Head, { hairPiece: f.haar, facePiece: f.gesicht, facialHairPiece: f.bart || 'None',
                                      accessoryPiece: f.brille || 'None', strokeColor: LINIE, backgroundColor: f.haut })),
});

const out = {};
for (const [name, f] of Object.entries(FIGUREN)) {
  const voll = teil(f, f.kleidung), linien = teil(f, 'none');
  out[name] = { koerper: voll.koerper, koerperLinien: linien.koerper, kopf: voll.kopf,
                haut: f.haut, kleidung: f.kleidung, hals: f.hals, tx: f.tx, ty: f.ty };
}
require('fs').writeFileSync(require('path').join(__dirname, 'figuren.json'), JSON.stringify(out));
console.log('figuren.json:', Object.keys(out).join(', '));
