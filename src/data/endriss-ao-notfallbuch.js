const p = text => ({ text });
const h = text => ({ typ:'titel', text });
const t = (spalten, zeilen) => ({ typ:'tabelle', spalten, zeilen });

export const aoNotfallbuch = [{
  id:'ao-notfallbuch-01',
  title:'Notfallbuch AO/FGO · Handbuch, Haftung, FGO und Vollstreckung',
  pages:[1],
  normen:[
    '§ 370 Abs. 1 Nr. 1 AO','§ 370 Abs. 1 Nr. 2 AO','§ 153 Abs. 1 AO','§ 149 Abs. 1 AO','§ 164 AO','§ 235 AO','§ 378 Abs. 1 AO','§ 369 Abs. 2 AO','§ 371 AO',
    '§ 69 AO','§ 71 AO','§ 74 AO',
    '§ 33 FGO','§ 35 FGO','§ 38 FGO','§§ 57, 58, 62 FGO','§ 63 FGO','§§ 40, 41 FGO','§ 44 FGO','§ 40 Abs. 2 FGO','§§ 47, 54 FGO','§§ 64, 65 FGO','§ 52d FGO',
    '§ 249 Abs. 1 AO','§ 251 Abs. 1 AO','§ 361 AO','§ 254 Abs. 1 AO','§ 220 AO','§ 259 AO','§ 281 Abs. 1 AO','§ 286 AO','§ 263 AO','§ 295 AO','§ 286 Abs. 2 AO'
  ],
  bloecke:[
    h('Amtliches AO-Handbuch 2025 · Registersystem der Quelle'),
    p('Die einzige Quellseite zeigt das Amtliche AO-Handbuch 2025 mit handschriftlich beschrifteten Registerreitern und den Gruppen „Obj. Tatbest.“, „Subj. T.“ und „Selbstanz.“. Die folgenden gut lesbaren Reiter werden quellengetreu übernommen; sehr kleine oder verdeckte Seitentabs werden nicht geraten.'),
    t(['Bereich','Gut lesbare Quellenmarker','Vorhandene Campus-Zuordnung'], [
      ['Oberer Registerrand','§ 370 (1) Nr. 1 · § 370 (1) Nr. 2 · § 153 (1) / § 149 (1) · § 370 (1)+(4) · § 164 · AEAO § 235, 4.1.2 / 4.1.3 · § 370 (4) · § 378 (1) / § 369 (2) · AEAO 153, 2.6 / 2.7 · § 371','AO Prüfschema: Handbuch/Register, Steuerstrafrecht und Selbstanzeige'],
      ['Haftung','§ 69 · § 71 · § 74','AO Prüfschema: Haftungsfahrtroute sowie § 69 / § 71 / § 74'],
      ['Lesbarkeit','Weitere kleine Seitenreiter sind teils verdeckt bzw. nicht sicher lesbar.','Nicht ergänzt; Originalabbildung bleibt für den visuellen Kontext erreichbar.'],
    ]),
    h('FGO-Klage · handschriftliche Randliste'),
    t(['Reihenfolge der Quelle','Normen'], [
      ['1','§ 33 FGO'],['2','§ 35 FGO'],['3','§ 38 FGO'],['4','§§ 57, 58, 62 FGO'],['5','§ 63 FGO'],['6','§§ 40, 41 FGO'],['7','§ 44 FGO'],['8','§ 40 (2) FGO'],['9','§ 47 / § 54 FGO'],['10','§§ 64, 65 FGO'],['11','§ 52d FGO'],
    ]),
    p('Die Liste ist als Quellenrandnotiz „FGO / Zul. Klage“ erkennbar und wird auf die bereits vorhandene FGO-Fahrtroute abgebildet. Eine eigene Rechtsstandsprüfung findet nicht statt.'),
    h('Vollstreckung · zwei Pfeilketten der Quelle'),
    t(['Schemaabschnitt','Quellenfolge'], [
      ['Überprüfung allgemeine Vollstreckungsvoraussetzungen','§ 249 (1) → § 251 (1) → § 361 → § 254 (1) → § 220 → § 259'],
      ['Überprüfung der jeweiligen Vollstreckungsmaßnahme','§ 281 (1) → § 286 → § 263 → § 295 → § 286 (2)'],
    ]),
    p('Diese beiden Ketten sind im AO-Campus bereits als Vollstreckungsschema vorhanden. Die Notfallbuch-Seite wird daher als quellengebundene Zuordnung geführt, nicht als zweite, unabhängig gepflegte Rechtsdarstellung.'),
  ],
}];

export const aoNotfallbuchAudit = {
  sourceId:'ao-notfallbuch',
  driveId:'1i0ZTLaEYMK2uMqkvu_50s8zV-hpOnQOy',
  sourceBytes:668115,
  physicalPages:1,
  reviewedPages:[1],
  legalReview:false,
  ownSolutionsAdded:false,
  mappedCampusTargets:['ao-schema-handbuch','ao-schema-vollstreckung','ao-schema-fgo','ao-schema-haftung','ao-schema-69','ao-schema-71','ao-schema-74'],
  status:'native-source-mapping-complete; unreadable-small-tabs-explicitly-not-guessed',
  method:'Die einzige PDF-Seite direkt visuell gelesen. Gut lesbare Register, die FGO-Randliste und beide Vollstreckungsketten quellengetreu übertragen; kleine bzw. verdeckte Registerbeschriftungen nicht rekonstruiert. Bestehende AO/FGO-Schemata werden als Zielmapping genutzt; keine Rechtsstandsprüfung.',
};
