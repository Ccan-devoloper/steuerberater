from pathlib import Path

path = Path("src/App.jsx")
text = path.read_text(encoding="utf-8")

import_line = 'import Schaubild from "./components/Schaubild";\n'
new_import = import_line + 'import Pruefungsschemata from "./components/Pruefungsschemata";\n'
if 'import Pruefungsschemata from "./components/Pruefungsschemata";' not in text:
    if import_line not in text:
        raise SystemExit("Import-Anker nicht gefunden")
    text = text.replace(import_line, new_import, 1)

schema_anchor = '      <AbbaLeiste />\n\n      <section className="panel">\n        <h2>Schritt für Schritt</h2>'
schema_insert = '      <AbbaLeiste />\n\n      <Pruefungsschemata />\n\n      <section className="panel">\n        <h2>Schritt für Schritt</h2>'
if '<Pruefungsschemata />' not in text:
    if schema_anchor not in text:
        raise SystemExit("Schema-Anker nicht gefunden")
    text = text.replace(schema_anchor, schema_insert, 1)

path.write_text(text, encoding="utf-8")
