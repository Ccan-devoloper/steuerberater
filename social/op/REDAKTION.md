# Redaktionsregeln Instagram (verbindlich, Stand 03.10.2026, ergänzt)

Ergänzt die [Quellenregeln](../QUELLENREGELN.md). Diese gelten unverändert: Unterlagen in `src/data` sind
fachliche Grundlage, nie Vorlage; kein Wortlaut (8 Wörter), keine Gliederung, keine Eigenschöpfungen,
keine Herkunftsangaben, eigene Beispiele und Zahlen, frei ist nur der Rechtsstoff. `bin/op-pruefen.mjs`
prüft jeden gerenderten Tag mit `pruefeBeitrag`; ein Befund verhindert das Ablegen.

## Fachliche Genauigkeit
1. Jede Norm, Zahl, Frist und Fundstelle wird vor der Produktion geprüft (gesetze-im-internet.de, BMF, BFH,
   Richtlinien). Was nicht belegt ist, wird gestrichen.
2. Verwaltungsanweisungen werden zitiert, wo sie eine Klausurfrage entscheiden oder etwas regeln, das nicht im
   Gesetz steht: Richtlinien und Hinweise (EStR/EStH, LStR, KStR, GewStR, ErbStR, BewR …), Anwendungserlasse
   (UStAE, AEAO, UmwStE), BMF-Schreiben, gleich lautende Ländererlasse.
3. **Zitierweise BMF-Schreiben und Erlasse:** Datum und Randnummer, dazu die Fundstelle in den Beck'schen
   Steuererlassen: „BMF vom 02.09.2016, Rn. 33 (Beck-Erlass 1 § 6/12)“. Die Beck-Nummer wird nur angegeben,
   wenn sie belegt ist; sonst Datum und Rn.
4. Gesetze mit Abs., S., Nr., Buchst.; GG und EU-Recht mit Art.
5. **Klausurkonvention zuerst:** Gelöst wird so, wie die Klausur es erwartet, also nach Auffassung der
   Finanzverwaltung (Richtlinien, Anwendungserlasse, BMF-Schreiben, im BStBl II veröffentlichte BFH-Urteile).
   Abweichende BFH-Rechtsprechung, Nichtanwendungserlasse und überholte Richtlinienstellen werden zusätzlich
   genannt („BFH vom …, Az.; R … insoweit überholt“), wo sie den Unterschied ausmachen.

## Karussell (1080×1350)
1. Variante C: Creme, Rahmen in der Klausurfarbe (K1 blau, K2 orange, K3 grün, fachübergreifend lila), Nunito.
2. Höchstens 40 Wörter je Folie, ein Gedanke je Folie; Fließtext ≥ 38 px, nichts unter 30 px, Titel ≥ 60 px
   und nie breiter als die Karte; alles innerhalb der 3:4-Rasterzone.
3. Cover: Schlagzeile ≥ 120 px, ≤ 6 Wörter; Badge = tatsächliches Format; Norm als dritte Zeile mit lila
   Marker (N3), entfällt, wenn der Paragraf schon in der Schlagzeile steht.
4. Einstieg nach Format: Prüfschema „X in n Schritten“, Rechenweg mit Zahl, Mini-Fall mit der Frage des Falls,
   Klausurfalle als Warnung, Gegenüberstellung „A oder B?“. Kein Pflicht-Fall.
5. Normen auf Folgefolien grau direkt unter der jeweiligen Aussage (F3a).
6. „Klausurfalle“ nur bei echten Fallen; Allgemeinwissen wird nicht hervorgehoben.
7. Beispiel → „Jetzt du“ → Lösung auf der nächsten Folie. Jede Person ist eingeführt, bevor sie handelt.
8. Letzte Folie „Im Gesetz markieren“ (Markierungen, Randnotizen, Hinweiskasten); angeteasert auf Cover
   (gelbe Pille), Folie 2 (gelbe Leiste) und Merke-Folie (gelbe Zeile). **Zitiert der Beitrag eine
   Verwaltungsanweisung, die eine Klausurfrage entscheidet, wird sie mitmarkiert** – Standard: Gesetz und
   Verwaltungsanweisung auf derselben Folie (`zweite` in der gesetz-Folie, Titel „Gesetz und Richtlinie/Erlass
   markieren“), so bleibt die Grenze von 10 Folien. Eigene Folie „In der Richtlinie/Im Erlass markieren“ nur,
   wenn Platz ist (≤ 9 Folien) oder die Verwaltungsanweisung die Frage allein entscheidet. Wortlaut nur aus
   amtlicher Quelle bzw. Haufe/NWB-Volltext, Auslassungen „[…]“, Satznummern als „S. 1“. Hinweiskasten für
   BFH-Abweichungen. Hinweis: In der schriftlichen Prüfung sind Textausgaben mit
   Markierungen zulässig, Anmerkungen nicht; in der mündlichen Prüfung keine Richtlinien und Erlasse.
9. Keine Fläche leer, nichts überladen. Figuren nur mit Funktion; die Merke-Folie kommt ohne Figur aus.

## Figuren
Jeder Beitrag hat eigene Figuren (keine Standardbesetzung), innerhalb des Beitrags dieselben Personen im selben
Outfit, höchstens zwei Hauptfiguren, nie dieselbe Figur zweimal am selben Tag, Kleidung nicht in Rahmenfarbe.

## Reel (1080×1920, 30–45 s)
1. Thema ab Bild 0 groß lesbar; keine eingebrannten Wort-für-Wort-Untertitel.
2. Je Moment ein Blickfang (≤ 5–7 Wörter, ≥ 60 px); neue Elemente ersetzen alte.
3. Höchstens eine Norm je Szene als ruhige lila Zeile; alle Fundstellen in der Beschreibung.
4. Übergänge mit Inhalt statt „eins, zwei, drei“. Hook-Stile wechseln (split, kippen, knall); Zittern höchstens
   jedes fünfte Reel. Reel-Typen: Rechnung, Gegensatz, Klausurfalle, Quizfrage, Merksatz.
5. Stimme Laura (ElevenLabs), Geräusche nur Freesound CC0 mit Herkunft. Fläche bis zum sicheren Bereich nutzen.

## Story (1080×1920)
Inhalt nur zwischen y 260 und 1660, Schrift ≥ 46 px, ≤ 25 Wörter, ein Gedanke. Teaser zeigen das echte Cover.
Quiz als Frage/Auflösung (die API setzt keine Sticker).

## Plan
Täglich zwei Karussells und ein Reel; K1, K2, K3 rotieren über die drei Slots, Fächer innerhalb der Klausur
reihum. Formate: Prüfschema, Rechenweg, Mini-Fall, Klausurfalle, Gegenüberstellung, Prüfungsfrage, Spickzettel
(kurz), Klausurtechnik (nur Strategie), Anlass, Wochenrückblick, Lösungsskizze; ab November Kurzvortrag
(mündliche Prüfung). Kein Format „Aktuell“: Rechtsänderungen werden vorab recherchiert und eingeplant.
Thema und Format müssen zusammenpassen. Gerendert wird 14 Tage im Voraus, Texte liegen bis Jahresende vor.
