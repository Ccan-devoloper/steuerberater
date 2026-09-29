"""Integrate visually transcribed source answers without changing case statements.
Idempotent; fails when the expected source structure has changed.
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

def replace_once(text, old, new):
    if new in text:
        return text
    if text.count(old) != 1:
        raise ValueError(f'Expected one source anchor: {old[:90]!r}')
    return text.replace(old, new, 1)

def main():
    path = ROOT / 'src/data/k1-erbst-fallsammlung-mirbach.js'
    text = path.read_text(encoding='utf-8')
    old = '''   WICHTIG: Die Quelle enthält KEINE Lösungen. Sie ist eine Arbeitsunterlage
   für den Unterricht; hinter jedem Fall steht nur die Frage, eingeleitet durch
   das Zeichen ▷. Im selben Drive-Ordner liegen zwar zwei Lösungsblätter zu den
   Hausaufgabenfällen 9 und 14 sowie zur Abwandlung 2 des Falls 28 – beide sind
   jedoch Handschrift, deren Texterkennung für eine wortlautgetreue Übernahme
   unbrauchbar ist (siehe docs/offene-quellen.md, Abschnitt A). Es wird hier
   bewusst keine Lösung erfunden; stattdessen verweist jedes Kapitel auf die
   Stellen im Campus, an denen dieselbe Rechtsfrage mit vollständiger
   Musterlösung steht.'''
    new = '''   Das Aufgaben-PDF enthält keine Lösungen. Die zwei zusätzlichen handschriftlichen
   Lösungsblätter zu Fall 9, Fall 14 und Fall 28/Abwandlung 2 sind jetzt separat
   und nach visueller Prüfung aller sechs PDF-Seiten übernommen. Sie stehen als
   aufklappbare Quellenlösungen beim passenden Fallbereich. Für die anderen Fälle
   wird weiterhin keine Original-Lösung vorgetäuscht. Keine Rechtsstandsprüfung.'''
    text = replace_once(text, old, new)
    text = replace_once(text, 'export const erbstFallsammlungMirbachQuelle = {',
                         'import { mirbachLoesungen } from "./k1-erbst-mirbach-loesungen.js";\n\nexport const erbstFallsammlungMirbachQuelle = {')
    text = replace_once(text, 'export const erbstFallsammlungMirbach = [',
                         'const erbstFallsammlungMirbachRoh = [')
    text = replace_once(text, 'export default erbstFallsammlungMirbach;', '''export const erbstFallsammlungMirbach = erbstFallsammlungMirbachRoh.map((kapitel) => ({
  ...kapitel,
  loesungen: mirbachLoesungen[kapitel.id] || [],
}));

export default erbstFallsammlungMirbach;''')
    text = replace_once(text,
        'Zu den Fällen 9 und 14 liegen im Drive-Ordner handschriftliche Lösungsblätter, deren Texterkennung für eine Übernahme unbrauchbar ist; sie stehen in docs/offene-quellen.md, Abschnitt A.',
        'Die zusätzlich bereitgestellten handschriftlichen Lösungsblätter zu Fall 9 und Fall 14 sind visuell übertragen und nachstehend einzeln aufklappbar. Sie gehören nicht zum Aufgaben-PDF; die anderen Fälle dieses Bereichs bleiben ohne Original-Lösung.')
    text = replace_once(text,
        'Zur Abwandlung 2 liegt im Drive-Ordner ein handschriftliches Lösungsblatt, dessen Texterkennung für eine Übernahme unbrauchbar ist (docs/offene-quellen.md, Abschnitt A).',
        'Das zusätzliche vierseitige handschriftliche Lösungsblatt zu Fall 28, Abwandlung 2, ist visuell übertragen und nachstehend aufklappbar. Es enthält beide Varianten und die Herleitung des Werts des unbelasteten Grundstücks.')
    text = replace_once(text,
        'Die Quelle gibt die Lösungen nicht mit; wer sie braucht, findet dieselben Rechtsfragen',
        'Das Aufgaben-PDF gibt die Lösungen nicht mit. Die zusätzlichen Handschriften zu Fall 9, Fall 14 und Fall 28/Abwandlung 2 sind hier beim jeweiligen Fallbereich aufklappbar. Zu den übrigen Fällen findet man dieselben Rechtsfragen')
    path.write_text(text, encoding='utf-8')

    path = ROOT / 'src/components/KurzskriptBloecke.jsx'
    text = path.read_text(encoding='utf-8')
    text = replace_once(text,
        'sammeln([kapitel.title, kapitel.thema, kapitel.normen, kapitel.themen, kapitel.bloecke]);',
        'sammeln([kapitel.title, kapitel.thema, kapitel.normen, kapitel.themen, kapitel.bloecke, kapitel.loesungen]);')
    if 'kapitel.loesungen || []).map' in text:
        path.write_text(text, encoding='utf-8')
        return
    text = replace_once(text, '''        <small>Quelle: {kapitel.quelle}</small>
      </section>
    </article>''', '''        <small>Quelle: {kapitel.quelle}</small>
      </section>
      {(kapitel.loesungen || []).map((loesung) => (
        <details className="istr-fs-details" key={loesung.id} id={loesung.id}>
          <summary>{loesung.title} · Quellenlösung anzeigen</summary>
          <section className="istr-fs-loesung" aria-label={loesung.title}>
            <h4>{loesung.title}</h4>
            <p className="istr-ha-thema">{loesung.rechtsstand}</p>
            {loesung.bloecke.map((element, i) => <Block key={i} element={element} />)}
            <small>Quelle: {loesung.quelle} · PDF-Seiten {loesung.sourcePages.join(", ")}</small>
          </section>
        </details>
      ))}
    </article>''')
    path.write_text(text, encoding='utf-8')

if __name__ == '__main__':
    main()
