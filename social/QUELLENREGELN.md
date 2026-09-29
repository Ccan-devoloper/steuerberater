# Quellenregeln für Social-Inhalte (verbindlich)

Die Lernunterlagen in `src/data` sind **fachliche Grundlage, nie Vorlage**.
Das gilt für Skripte, Kurzskripte, Lehrgangsunterlagen, Fallsammlungen,
Hausaufgaben und Klausuren. Alles, was auf Instagram erscheint, ist
eigenständig formuliert und darf **nicht als Bearbeitung einer bestimmten
Unterlage wiedererkennbar** sein.

Die Regeln stehen als Text in `src/quellenregeln.mjs` (`QUELLENREGELN`).
Diese Fassung ist maßgeblich. Der Autor-Prompt zitiert sie wörtlich, und
`pruefeBeitrag` weist jeden Verstoß zurück. Dieses Dokument erläutert sie.

## Die Regeln

1. **Kein Wortlaut.** Keine Satzfolge aus einer Unterlage übernehmen, auch
   nicht mit ausgetauschten Einzelwörtern. Ab acht aufeinanderfolgenden
   übereinstimmenden Wörtern mit irgendeiner Datei in `src/data` gilt ein Text
   als übernommen. Bei Aufbereitungen gilt schon ab sechs Wörtern gegenüber
   dem eigenen Quellabschnitt „zu nah“. Gesetzeszitate zählen nicht mit.
2. **Keine Gliederung der Unterlage.** Überschriften, Kapitel- und
   Abschnittstitel, Gliederungsnummern (`1.5.2.1`) und Angaben wie „Teil IV“,
   „Kapitel 3“, „Fachtermin 2“ erscheinen nicht. Titel und Aufbau des
   Beitrags sind eigene.
3. **Keine Eigenschöpfungen der Verfasser.** Selbst benannte Schemata,
   Methoden, Merkwörter, Kürzel, Eselsbrücken und Gliederungsetiketten
   („EIS-Methode“, „ABBA-Schema“, „Vorspann“ …) werden weder übernommen noch
   umbenannt oder umschrieben. Erklärt wird der Inhalt in eigener Struktur.
   Bekannte Fälle stehen in `config/eigenbegriffe.json`. Wer beim Aufbereiten
   eine neue Merkhilfe entdeckt, trägt sie dort ein.
4. **Keine Herkunftsangaben.** Keine Namen von Verfassern, Dozenten,
   Anbietern oder Lehrgängen. Keine Seiten-, Folien-, Fall- oder Randnummern.
   Die Verfasserliste wird automatisch aus den `verfasser`-Feldern in
   `src/data` gebildet. Diese Namen sind auch als erfundene Fallnamen gesperrt.
5. **Eigene Beispiele.** Sachverhalte, Namen, Beträge und Zahlenfolgen werden
   frei erfunden. Beispiele und Fälle der Unterlage werden nicht nacherzählt,
   auch nicht mit geänderten Zahlen.
6. **Frei ist der Rechtsstoff.** Normen, Tatbestandsmerkmale, Rechtsfolgen,
   Definitionen aus Gesetz und Rechtsprechung sowie die aus dem Gesetz
   folgende Prüfungsreihenfolge dürfen verwendet werden, in eigenen Worten.

## Wie die Regeln durchgesetzt werden

| Regel | Prüfung | Ort |
|---|---|---|
| 1 Wortlaut | 8-Wort-Shingles gegen ganz `src/data`; 6 Wörter gegen den Quellabschnitt | `pruefung.mjs`, `aufbereitung-pruefung.mjs` |
| 2 Gliederung | Quellüberschriften (≥ 4 Wörter jenseits von Normzitaten) in Titeln, lange auch im Fließtext; Gliederungsnummern; „Teil/Kapitel/Abschnitt …“ | `quellenregeln.mjs` |
| 3 Eigenschöpfungen | Liste `config/eigenbegriffe.json` | `pruefung.mjs` |
| 4 Herkunft | Verfassernamen aus `src/data`, Wörter wie „Lehrgang“, „Kurzskript“, „Dozent“; Quellenbezüge (Seite, Folie, Skript …) | `quellenregeln.mjs`, `pruefung.mjs` |
| 5 Beispiele | Fallnamen aus `src/data` gesperrt; Wortlaut-Prüfung wie Regel 1 | `pruefung.mjs` |

Die Prüfung läuft bei jedem Beitrag, egal ob live erzeugt oder vorproduziert,
und für alle Aufbereitungen in `test/aufbereitung.test.mjs`. Ein Verstoß
blockiert Veröffentlichung und Merge.

## Aufbereitung neuer Unterlagen

Neue Unterlagen kommen **nie direkt** in den Themenpool. Der Weg ist:

1. Die Unterlage liegt als Abschnitte in `src/data` (Feld `verfasser` setzen,
   damit Regel 4 greift) und ist in `src/skripte.mjs` unter `SKRIPT_QUELLEN`
   dem Fach zugeordnet.
2. Offene Abschnitte finden: `node bin/aufbereitung.mjs offen <fach>`.
3. Abschnitt lesen: `node bin/aufbereitung.mjs zeigen <id>`. Lesen und
   verstehen, dann **ohne die Vorlage im Blick** in eigenen Worten schreiben.
4. Eintrag in `aufbereitung/<fach>.json` anlegen (Format in
   `src/skripte.mjs`): eigener Titel, 1–3 Sätze Einordnung, 1–5 Lernziele,
   2–6 Prüfschritte, typische Fehler, optional ein Merksatz.
5. `node bin/aufbereitung.mjs pruefen <fach>` muss ohne Befund durchlaufen.

Der Quellabschnitt liefert nur Metadaten (Normen, Priorität) und die interne
Herkunft (`herkunft` im Pool). Sichtbar wird allein der aufbereitete Text.
