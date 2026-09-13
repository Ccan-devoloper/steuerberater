# K3 · „Schritt für Schritt“ – Lernpfade Personengesellschaften und UmwStR

## Zweck

Die Campusse Personengesellschaften und Umwandlungssteuerrecht in Klausur 3 sind
quellennah aufgebaut (Unterrichtstage, Prüfschemata als Seitenansichten,
Originalfälle). Wer ohne Vorwissen einsteigt, findet dort keine Erklärung, *warum*
etwas so gerechnet wird. Der Reiter **Schritt für Schritt** schließt diese Lücke:
ein linearer Lernpfad, in dem jede Lektion nur die vorherige voraussetzt und der
mit einem Klausurfahrplan endet.

| Campus | Datei | Kapitel | Lektionen | Lernzeit |
| --- | --- | --- | --- | --- |
| Personengesellschaften | `src/data/k3-lernpfad-persg.js` | 7 | 18 | ca. 4,5 Std. |
| UmwStR | `src/data/k3-lernpfad-umwstr.js` | 6 | 16 | ca. 4 Std. |

Gemeinsame Komponente: `src/components/K3Lernpfad.jsx`, Stil: `src/components/k3-lernpfad.css`.
Prüfung: `npm run check:k3-lernpfad` (läuft im Build und im Deploy-Workflow).

## Aufbau einer Lektion

Jede Lektion hat dieselbe Struktur, damit sich der Ablauf einprägt:

1. **Kopf**: Kapitel, Nummer, Lernzeit, Examenspriorität (🔴/🟠/🟢 aus dem Regelwerk
   `src/data/examensprioritaet.js`, ermittelt aus Titel und Normen).
2. **Ziel dieser Lektion** und **Normenkette**.
3. **Blöcke** in beliebiger Reihenfolge: Fließtext, Merke/Klausurfalle/Exkurs,
   Schritte, Liste, Tabelle, Beispiel (Sachverhalt → Schritte → Ergebnis),
   Rechnung, Buchungssatz, Bilanz, **So läuft es in der Klausur**, Querverweise.
4. **Selbstcheck**: Multiple-Choice mit Erklärung nach der Antwort.
5. **Merksatz zum Mitnehmen**.
6. **Steuerung**: Zurück, Haken „Verstanden“, Weiter (setzt den Haken automatisch).

Fortschritt und zuletzt geöffnete Lektion liegen in `localStorage`
(`stb-k3-persg-lernpfad-*`, `stb-k3-umwstr-lernpfad-*`). Die geöffnete Lektion ist
Teil des Campus-Verlaufs (`lektionId` im Eintrag von `useAnsichtVerlauf`), damit die
Vor-/Zurück-Pfeile der Kopfleiste lektionsweise funktionieren.

## Blocktypen (Datenformat)

```js
{ typ: "absatz",   text }
{ typ: "merke",    text, titel? }          // .notiz
{ typ: "falle",    text, titel? }          // .notiz--falle
{ typ: "exkurs",   titel, text }           // .notiz--exkurs
{ typ: "schritte", titel?, punkte: [] }    // nummerierte Schritte
{ typ: "liste",    titel?, punkte: [] }    // Haken-Liste
{ typ: "tabelle",  titel?, kopf: [], zeilen: [[...]] }
{ typ: "beispiel", titel, sachverhalt, schritte: [], ergebnis }
{ typ: "rechnung", titel?, zeilen: [{ text, wert, summe? }], hinweis? }
{ typ: "buchung",  satz: { title, soll: [{konto, betrag}], haben: [...], note? } }
{ typ: "bilanz",   titel, aktiva: [[label, wert]], passiva: [[label, wert]], hinweis? }
{ typ: "klausur",  punkte: [] }
{ typ: "links",    module?, schemata?, faelle?, umwSchemata?, hausaufgaben?, umwstr?, persg? }
```

Querverweise werden vom jeweiligen Campus aufgelöst (`verweise`-Prop):
PersG kennt `module` (Modul-IDs), `schemata` (Schema-IDs), `faelle` (Fall-IDs) und
`umwstr` (Fachwechsel); UmwStR kennt `umwSchemata` (Prüfschema 1–13),
`hausaufgaben` (1–3) und `persg` (Fachwechsel). Unbekannte Schlüssel werden ignoriert.

## Rückverweise

- PersG-Modulseite: Kasten „Grundlagen dazu · Schritt für Schritt“ mit allen
  Lektionen, die auf das Modul verweisen.
- UmwStR-Schemadetail: Kasten „Erklärt im Lernpfad“ mit allen Lektionen, die auf
  das Prüfschema verweisen. Der Check stellt sicher, dass jedes der 13 Prüfschemata
  von mindestens einer Lektion verlinkt ist.
- Beide Cockpits: Einstiegsbanner „Neu hier?“ mit Umfang und Startknopf.

## Inhaltlicher Fahrplan

**Personengesellschaften**: A Erst mal verstehen (Transparenzprinzip, Mitunternehmerschaft,
Abfärbung/Prägung) · B Gewinn ermitteln (zwei Stufen, Kapitalkonten, Gewinnverteilung,
Sondervergütungen) · C Was gehört wem (SBV I/II, korrespondierende Bilanzierung und
Konkurrenz, Ergänzungsbilanzen) · D Wirtschaftsgüter bewegen (Einbringungs-Matrix,
§ 6 Abs. 5 S. 1–7, § 6b) · E Verluste (§ 15a über zwei Jahre) · F Kommen, gehen, auflösen
(§ 16, Realteilung, § 24 UmwStG mit Brutto-/Nettomethode) · G Klausurfahrplan.

**UmwStR**: A Warum gibt es das UmwStG (Grundidee, Landkarte, Kernbegriffe) ·
B KapG wird PersG (§ 3, §§ 4–7, Rechenfall Formwechsel) · C KapG wird KapG (§§ 11–13,
§ 15) · D Betrieb wird KapG (§ 20 Voraussetzungen, § 20 Rechtsfolgen, § 22, § 21, § 25 und
§ 1a KStG, Rechenfall Sachgründung) · E Betrieb wird PersG (§ 24 im Vergleich) ·
F Klausurfahrplan mit Entscheidungsbaum und Fristen-Spickzettel.

Rechtsstand 2025: MoPeG (§ 39 Abs. 2 Nr. 2 AO, § 709 Abs. 3 BGB), § 6 Abs. 5 S. 3 Nr. 4
EStG, § 1a KStG in der Fassung des Wachstumschancengesetzes. Streitfragen (z. B.
Trennungstheorie bei teilentgeltlicher Übertragung) werden mit der Verwaltungsauffassung
gerechnet und als Streit markiert.
