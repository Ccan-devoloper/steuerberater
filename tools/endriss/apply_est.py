"""Integrate the source-checked ESt tail and reusable original-page reader.
Fails on unexpected source structure; repeated runs are safe.
"""
from pathlib import Path
from apply_mirbach import replace_once
ROOT=Path(__file__).resolve().parents[2]

def main():
    path=ROOT/'src/data/est-kurzskript-1.js';s=path.read_text()
    start=s.index('   UNVOLLSTÄNDIG – und zwar nachprüfbar:') if '   UNVOLLSTÄNDIG – und zwar nachprüfbar:' in s else -1
    if start>=0:
        end=s.index('   Blocktypen wie',start)
        s=s[:start]+'''   Nachtrag 29.09.2026: Der vollständige Datei-Download ist verfügbar.
   Die Skriptseiten 80–162 sind jetzt zusätzlich übernommen: Kapitel 3.6/4
   des Gewerbebetriebsteils und alle sechs weiteren Themenblöcke. Tabellen und
   Abbildungen sind nativ übertragen; die 83 Originalseiten sind beim Kapitel
   zur Kontrolle aufklappbar. Quelle SHA-256 und Seitenplan im Nachtragsdatensatz.
   Keine Rechtsstandsprüfung; unveränderter Quellenstand 07/2026.

'''+s[end:]
    s=replace_once(s,'export const estKurzskript1Quelle = {','import { estKurzskript1FortsetzungGewerbe, estKurzskript1Nachtrag } from "./est-kurzskript-1-nachtrag.js";\n\nexport const estKurzskript1Quelle = {')
    s=replace_once(s,'Der Bestand ist noch nicht vollständig: Erfasst sind die Seiten 1 bis 79 des Skripts, weiter gibt der Drive-Connector die Datei nicht aus. Was fehlt, steht im Kopf der Datei und im Quellenabgleich.',
      'Die früher fehlenden Skriptseiten 80 bis 162 sind ergänzt. Alle neun Themenblöcke sind vertreten. Der Nachtrag enthält die aus der vollständigen Datei übernommenen Texte sowie visuell übertragene Tabellen und Schaubilder. Die zugehörigen Originalseiten sind beim Kapitel aufklappbar; keine Rechtsstandsprüfung.')
    old='''export const estKurzskript1 = kapitelRoh.map((kapitel) => ({
  ...kapitel,
  bloecke: kapitel.bloecke.map((block) => (typeof block === "string" ? { text: block } : block)),
}));'''
    new='''const bestandBisSeite79 = kapitelRoh.map((kapitel) => ({
  ...kapitel,
  bloecke: kapitel.bloecke.map((block) => (typeof block === "string" ? { text: block } : block)),
}));
export const estKurzskript1 = [
  ...bestandBisSeite79.map((kapitel) => kapitel.id === estKurzskript1FortsetzungGewerbe.id ? {
    ...kapitel,
    bloecke: [...kapitel.bloecke, ...estKurzskript1FortsetzungGewerbe.bloecke],
    quellenseiten: estKurzskript1FortsetzungGewerbe.quellenseiten,
    quelle: `${kapitel.quelle} · einschließlich Tz. 3.6 (Skript-S. 80)`,
  } : kapitel),
  ...estKurzskript1Nachtrag,
];'''
    s=replace_once(s,old,new);path.write_text(s)
    path=ROOT/'src/components/KurzskriptBloecke.jsx';s=path.read_text()
    s=replace_once(s,'import { Block } from "./HausaufgabenBloecke";','import { Block } from "./HausaufgabenBloecke";\nimport QuellenSeiten from "./QuellenSeiten";')
    s=replace_once(s,'      {(kapitel.loesungen || []).map((loesung) => (','      <QuellenSeiten seiten={kapitel.quellenseiten || []} />\n      {(kapitel.loesungen || []).map((loesung) => (')
    path.write_text(s)
    path=ROOT/'src/components/K2EStCampus.jsx';s=path.read_text()
    s=replace_once(s,'const OFFEN = [\n  "Kurzskript I: Betriebsaufspaltung, gewerblicher Grundstückshandel, Betriebsbeendigung, Einnahmenüberschussrechnung, selbständige Arbeit und Kapitalvermögen (ab Seite 80 des PDF)",\n];','const OFFEN = []; // Kurzskript I: Seiten 80–162 ergänzt am 29.09.2026.')
    s=replace_once(s,
      'aus Vermietung und Verpachtung und der Beginn der Einkünfte aus Gewerbebetrieb. Der Rest\n          des Skripts ist noch nicht erfasst – siehe „Noch nicht eingepflegt“.',
      'aus Vermietung und Verpachtung und Gewerbebetrieb, Betriebsaufspaltung, gewerblicher\n          Grundstückshandel, Betriebsbeendigung, Einnahmenüberschussrechnung, selbständige Arbeit\n          und Kapitalvermögen. Der frühere Abbruch nach Seite 79 ist behoben.')
    s=replace_once(s,
      'Der erste Teil des Lehrgangsskripts von Martin Engelberth im Wortlaut – Einführung in die Einkommensteuer, Einkünfte aus Vermietung und Verpachtung und der Beginn der Einkünfte aus Gewerbebetrieb. Die weiteren Teile des Skripts sind noch nicht erfasst.',
      'Das Lehrgangsskript von Martin Engelberth mit allen neun Themenblöcken und 58 Kapiteln. Die früher fehlenden Skriptseiten 80–162 sind ergänzt: einschließlich Betriebsaufspaltung, Grundstückshandel, Betriebsbeendigung, EÜR, selbständiger Arbeit und Kapitalvermögen. Originalseiten des Nachtrags sind zur Kontrolle aufklappbar.')
    s=replace_once(s,
      '<h2>Noch nicht eingepflegt</h2>',
      '<h2>{OFFEN.length ? "Noch nicht eingepflegt" : "Kurzskripte: Ergänzung abgeschlossen"}</h2>')
    s=replace_once(s,
      '<p>Diese ESt-Unterlagen liegen vor, sind aber noch nicht im Campus abgebildet:</p>',
      '<p>{OFFEN.length ? "Diese ESt-Unterlagen liegen vor, sind aber noch nicht im Campus abgebildet:" : "Der frühere Rest des Kurzskripts I (Seiten 80–162) ist im Reiter Kurzskript I ergänzt. Weitere Quellenstände werden separat im Endriss-Quellenregister geführt."}</p>')
    path.write_text(s)

if __name__=='__main__':main()
