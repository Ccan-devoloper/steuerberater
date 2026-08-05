# Bilanz-Hausaufgaben

Die Lernplattform enthält die neun bereitgestellten Hausaufgaben mit Lösungen als strukturierte, klausurnahe Zusammenfassung.

- eigener Navigationspunkt **Hausaufgaben** direkt nach **Fälle**
- Volltextsuche und Themenfilter
- Aufgaben, Lösungsschwerpunkte sowie Normen und Prüfungshinweise
- automatische Verknüpfung mit den fachlich passenden Lernmodulen
- Rückverweise von Modulseiten zu den passenden Hausaufgaben
- keine Übernahme personenbezogener PDF-Wasserzeichen

Die Quelldateinamen und der Rechtsstand 2025 sind an den Einträgen dokumentiert.

## Aufbau

Die Ansicht ist eine reguläre Ansicht von `App.jsx` (`ansicht === "hausaufgaben"`), kein über die
DOM eingehängtes Portal. Damit gelten dieselben Regeln wie für alle anderen Ansichten: Der
Menüpunkt kommt aus der Liste `ansichten`, ein Klick auf einen anderen Menüpunkt wechselt die
Ansicht, und immer nur ein Menüpunkt trägt `aria-current`.

| Datei | Inhalt |
|---|---|
| `src/components/Hausaufgaben.jsx` | Ansicht, Rückverweisbox `HausaufgabenZuModul`, Icon |
| `src/components/hausaufgaben.css` | Gestaltung, ausschließlich auf den Token aus `index.css` |
| `src/data/hausaufgaben.js` | die neun Fachtermine und `passendeModule()` |
| `src/data/hausaufgaben-meta.js` | Seiten- und Zeichenzahl der Volltexte |
| `src/data/hausaufgaben-volltext.js` | Volltexte, per `import()` erst beim Aufklappen geladen |

Die Verknüpfung zwischen Hausaufgabe und Lernmodul läuft über `moduleKeywords` in
`hausaufgaben.js`; getroffen werden die fünf Module mit den meisten Schlagworttreffern.
Der Sprung in beide Richtungen läuft über den React-Zustand (`oeffnenModul`,
`oeffnenHausaufgabe`), nicht über simulierte Klicks.
