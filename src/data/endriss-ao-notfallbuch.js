/* Notfallbuch (1).pdf: eine tatsächliche PDF-Seite visuell geprüft.
   Die Seite ist eine annotierte Register-/Fahrtroutenübersicht zum AO-Handbuch
   mit FGO- und Vollstreckungsspalten. Keine Rechtsstandsprüfung. */
const p=text=>({text});
const h=text=>({typ:'titel',text});
export const aoNotfallbuchNachtrag=[{
  id:'ao-notfallbuch-01',
  title:'AO-Handbuch · Register, FGO-Klage und Vollstreckung',
  pages:[1],
  normen:['§ 370 AO','§ 153 AO','§ 164 AO','§ 371 AO','§§ 69, 71 AO','§ 166 AO','§§ 171–177 AO','§ 219 AO','§§ 33, 35, 38 FGO','§§ 57, 58, 62 FGO','§ 63 FGO','§§ 40, 41 FGO','§ 44 FGO','§ 40 Abs. 2 FGO','§§ 47, 54 FGO','§§ 64, 65 FGO','§ 52d FGO'],
  bloecke:[
    h('Registerlogik des abgebildeten AO-Handbuchs'),
    p('Die obere Registerreihe ist handschriftlich in „Obj. Tatbest.“, „Subj. T.“ und „Selbstanz.“ gruppiert. Klar lesbare Reiter betreffen insbesondere § 370 AO, § 153 AO, § 164 AO, AEAO-Verweise und § 371 AO. Seitlich ist ein eigener Bereich „Haftung“ markiert; klar lesbar sind dort u. a. §§ 69 und 71 AO.'),
    p('Weitere seitliche AO-Reiter sind u. a. § 166 AO, § 164 AO, §§ 171–177 AO und § 219 AO. Nicht eindeutig lesbare kleine Reiter werden nicht ergänzt oder geraten.'),
    h('FGO-Klage · handschriftliche Normenkette'),
    p('Rechts neben dem Handbuch steht die Kette: § 33 FGO → § 35 FGO → § 38 FGO → §§ 57, 58, 62 FGO → § 63 FGO → §§ 40, 41 FGO → § 44 FGO → § 40 Abs. 2 FGO → § 47 / § 54 FGO → §§ 64, 65 FGO → § 52d FGO.'),
    h('Vollstreckung · gedruckte Zweizeilen-Fahrtroute'),
    p('Allgemeine Vollstreckungsvoraussetzungen: § 249 Abs. 1 AO → § 251 Abs. 1 AO → § 361 AO → § 254 Abs. 1 AO → § 220 AO → § 259 AO.'),
    p('Jeweilige Vollstreckungsmaßnahme: § 281 Abs. 1 AO → § 286 AO → § 263 AO → § 295 AO → § 286 Abs. 2 AO.'),
    p('Abgleich: Die vorhandene AO-Einheit 6 bildet dieselben drei Lernstrukturen bereits nativ als „Handbuch-Reiter“, „Vollstreckung“ und „FGO-Fahrtroute“ ab. Dieser Nachtrag dokumentiert die separate Ein-Seiten-Quelle und vermeidet eine künstliche zweite Musterlösung.')
  ]
}];

export const aoNotfallbuchAudit={
  sourceId:'ao-notfallbuch',
  physicalPages:1,
  reviewedPages:[1],
  nativeTranscription:'complete',
  mappedExistingContent:['ao6-handbuch-reiter','ao6-vollstreckung','ao6-fgo-fahrtroute'],
  legalReview:false,
  personalDeliveryMarksExcluded:true,
};
