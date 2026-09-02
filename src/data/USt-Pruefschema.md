# Prüfschema Umsatzsteuer

*Examenspriorität nach den Musterlösungen 2013–2023 (Neunzig, DStR 2025, 1825): 🔴 am häufigsten (i.g. Erwerb 11/11, § 13b 10/11, § 15a 10/11, § 9 9/11, Reihengeschäft 8/11, Vermietung 8/11, GiG 7/11) · 🟠 mittel (§ 6a 5/11, § 25a und § 19 selten, aber bis 15 bzw. 10 Punkte) · 🟢 selten (§ 25b, Ist-Versteuerung, Ausfuhr, Reise, Beförderung, Fernverkauf, Verfahren). Die Marker an den Überschriften werden aus diesem Befund abgeleitet.*

---

## Teil A — Die Architektur

```
      2.                                    1.
Eingangsumsätze  ────────►   U   ────────►  Ausgangsumsätze
      │                                          │
      │        Prüfschema I.–V. identisch        │
      │                                          │
      ▼                                          ▼
  + VI. Vorsteuerabzug § 15              I.   Steuerbarkeit      § 1
                                         II.  Steuerbefreiung    §§ 4–9
                                         III. Steuersatz         § 12
                                         IV.  Bemessungsgrundl.  § 10
                                         V.   Steuerentstehung   § 13
```

**Zwei Regeln, die den ganzen Aufbau tragen:**

1. **Ausgangsseite zuerst.** Der Vorsteuerabzug hängt nach § 15 Abs. 2/3 davon ab, *wofür* der Unternehmer die Eingangsleistung verwendet. Solange du seine Ausgangsumsätze nicht kennst, kannst du § 15 nicht entscheiden.

2. **Der Eingangsumsatz wird identisch geprüft — nur aus Sicht des Leistenden.** Jeder Eingangsumsatz ist der Ausgangsumsatz eines anderen. § 15 Abs. 1 verlangt eine *gesetzlich geschuldete* Steuer. Ob sie geschuldet ist, ergibt nur die vollständige Prüfung I.–V. beim Leistenden. Wer diesen Schritt überspringt, übersieht § 14c-Fälle, nicht steuerbare Umsätze und falsche Steuersätze — und zieht Vorsteuer aus Beträgen, die niemand schuldet.

**Der dritte Strang.** Diese Architektur erfasst den Leistungsumsatz nach § 1 Abs. 1 **Nr. 1**. Der innergemeinschaftliche Erwerb ist ein eigener steuerbarer Tatbestand nach § 1 Abs. 1 **Nr. 5** mit eigenem Ortsparagrafen (§ 3d statt § 3 Abs. 6/7) und eigenem Befreiungskatalog (§ 4b statt § 4). Er läuft neben den beiden Richtungen her → **Teil E**.

---

## Teil B — Vorfrage: Unternehmereigenschaft, § 2

*Das „U" in der Mitte. Ohne Unternehmer keine der beiden Richtungen.*

| Merkmal | Fundstelle | Stolperstein |
|---|---|---|
| Selbständigkeit | § 2 Abs. 1 S. 1, Abs. 2 | Arbeitnehmer (–), Organgesellschaft (–) |
| Gewerbliche/berufliche Tätigkeit | § 2 Abs. 1 S. 3 | Gewinnerzielungsabsicht **nicht** erforderlich |
| Nachhaltigkeit | § 2 Abs. 1 S. 3 | Einmalige Handlung mit Wiederholungsabsicht genügt |
| Einnahmeerzielungsabsicht | § 2 Abs. 1 S. 3 | Reine Holding, Liebhaberei |

- **Unternehmenseinheit** (§ 2 Abs. 1 S. 2): alle Betriebe einer Person = *ein* Unternehmen → Innenumsätze nicht steuerbar.
- **Organschaft** (§ 2 Abs. 2 Nr. 2): finanzielle, wirtschaftliche und organisatorische Eingliederung → nur der Organträger ist Unternehmer.
- Unternehmereigenschaft beginnt bereits mit **Vorbereitungshandlungen** (wichtig für § 15).
- § 19 Kleinunternehmer hier nur vormerken, Prüfung am Ende.

**Sachverhalt vorher aufbereiten:** Skizze mit Beteiligten und Warenweg (bei Reihengeschäften Warenweg und Rechnungsweg getrennt), Zeitachse für §§ 13 und 15, und Trennungsgrundsatz — jeder Umsatz wird einzeln geprüft.

---

# Teil C — 1. Ausgangsumsätze

## I. Steuerbarkeit — § 1

**§ 1 Abs. 1 Nr. 1 S. 1 hat fünf Merkmale.** Zwei davon (Leistung, Inland) erfordern eine eigene Vorprüfung — das ist die Verzweigung aus der Skizze:

### I.1 Art der Leistung — die Weichenstellung

> Diese Entscheidung bestimmt die Ortsvorschrift. Ein Fehler hier zieht sich durch die ganze Klausur.

| **Strang A — Lieferung, § 3 Abs. 1** | **Strang B — sonstige Leistung, § 3 Abs. 9** |
|---|---|
| Verschaffung der Verfügungsmacht an einem Gegenstand | Alles, was keine Lieferung ist: Tun, Dulden, Unterlassen |
| ↓ Ort nach **§ 3 Abs. 6 / Abs. 7** | ↓ Ort nach **§ 3a** |

**Sonderformen vorab klären:**

- **Werklieferung / Werkleistung** — § 3 Abs. 4: Hauptstoff vom Unternehmer → Lieferung; nur Nebenstoffe → sonstige Leistung.
- **Einheitliche Leistung / Haupt- und Nebenleistung:** Die Nebenleistung teilt das Schicksal der Hauptleistung — bei Ort, Befreiung und Steuersatz.
- **Kommission** — § 3 Abs. 3: Lieferung zwischen Kommittent und Kommissionär.
- **Reihengeschäft** — § 3 Abs. 6a: mehrere Lieferungen, eine Warenbewegung. Nur **eine** bewegte Lieferung, alle übrigen ruhend (§ 3 Abs. 7 S. 2).
- **Vermittlung** (fremder Name, fremde Rechnung) → sonstige Leistung, *nicht* Eigenhandel.
- **Unentgeltliche Wertabgaben** — § 3 Abs. 1b / Abs. 9a: Entnahme, Personalzuwendung, Sachspende. Regelmäßig nur, wenn der Gegenstand zum Vorsteuerabzug berechtigt hat.
- **Innergemeinschaftliches Verbringen** — § 3 Abs. 1a: gilt als Lieferung.
- **Tausch / tauschähnlicher Umsatz** — § 3 Abs. 12: zwei getrennte Leistungen.

### I.2 Ort der Lieferung (Strang A)

Spezialnormen zuerst:

1. **§ 3 Abs. 5a** — Verweisnorm, immer voranstellen
2. **§ 3c** — Fernverkauf, Lieferschwelle 10.000 € (Abs. 4), OSS § 18j
3. **§ 3e** — Lieferung an Bord von Schiff, Flugzeug, Bahn
4. **§ 3g** — Gas, Elektrizität, Wärme, Kälte
5. **§ 3 Abs. 6** — **bewegte** Lieferung: Ort = **Beginn** der Beförderung/Versendung
6. **§ 3 Abs. 7** — **ruhende** Lieferung: Ort = Belegenheit bei Verschaffung der Verfügungsmacht. S. 2: Zuordnung im Reihengeschäft (vor der bewegten Lieferung = Beginn, danach = Ende)
7. **§ 3 Abs. 8** — Einfuhr: Ortsverlagerung ins Inland, wenn der Lieferer Schuldner der EUSt ist

### I.3 Ort der sonstigen Leistung (Strang B)

**Erst die Spezialnormen der Abs. 3–8 und § 3b, dann die Grundregeln.**

| Norm | Fall | Ort |
|---|---|---|
| § 3a Abs. 3 Nr. 1 | Grundstücksleistung | Lage des Grundstücks |
| § 3a Abs. 3 Nr. 2 | kurzfristige Vermietung Beförderungsmittel (≤ 30 Tage, Wasserfahrzeuge ≤ 90) | Übergabeort |
| § 3a Abs. 3 Nr. 3 | kulturelle, künstlerische, wissenschaftliche Leistungen, Restauration, Arbeiten an bewegl. Gegenständen (B2C) | Tätigkeitsort |
| § 3a Abs. 3 Nr. 5 | **Eintrittsberechtigung** zu Veranstaltungen (auch B2B) | Veranstaltungsort |
| § 3a Abs. 3 Nr. 4 | Vermittlung an Nichtunternehmer | Ort des vermittelten Umsatzes |
| § 3a Abs. 4 | Katalogleistungen an Nichtunternehmer im **Drittland** | Empfängerort |
| § 3a Abs. 5 | elektronische, Telekommunikations-, Rundfunkleistungen an Nichtunternehmer | Empfängerort (Schwelle 10.000 €, S. 3) |
| § 3b | Beförderungsleistungen | Abs. 1: Streckenanteil; Abs. 3: ig. Güterbeförderung B2C = Abgangsort |
| **§ 3a Abs. 2** | **Grundregel B2B** | **Sitz/Betriebsstätte des Empfängers** |
| **§ 3a Abs. 1** | **Grundregel B2C** | **Sitz/Betriebsstätte des Leistenden** |

Nachweis für Abs. 2: **USt-IdNr.** des Empfängers. Er muss Unternehmer sein *und* für sein Unternehmen beziehen (Abs. 2 S. 3: auch nichtunternehmerische juristische Personen mit USt-IdNr.).

### I.4 Die übrigen Merkmale des § 1 Abs. 1 Nr. 1

- **Unternehmer** → Teil B
- **im Rahmen seines Unternehmens**
- **gegen Entgelt** — Leistungsaustausch verlangt innere Verknüpfung. Kein Leistungsaustausch bei echtem Schadensersatz, echtem Zuschuss, Mitgliedsbeiträgen ohne konkrete Gegenleistung.

### I.5 Weitere steuerbare Tatbestände

- § 1 Abs. 1 Nr. 4 — **Einfuhr** aus dem Drittland (EUSt)
- § 1 Abs. 1 Nr. 5 — **innergemeinschaftlicher Erwerb**; Tatbestand § 1a, Ort § 3d
- § 1 Abs. 1a — **Geschäftsveräußerung im Ganzen: nicht steuerbar.** Erwerber tritt in die Rechtsposition ein (§ 15a Abs. 10)

> **„Nicht steuerbar" beendet die Prüfung dieses Umsatzes** — aber notiere die Folge für § 15 Abs. 2/3.

---

## II. Steuerbefreiung — §§ 4 bis 9

### II.1 Befreiungstatbestand, § 4

| Norm | Fall | Vorsteuerabzug |
|---|---|---|
| § 4 Nr. 1a i.V.m. § 6 | Ausfuhrlieferung | **bleibt** (§ 15 Abs. 3) |
| § 4 Nr. 1b i.V.m. § 6a | innergemeinschaftliche Lieferung | **bleibt** |
| § 4 Nr. 2 i.V.m. § 8 | Umsätze für die Seeschifffahrt | bleibt |
| § 4 Nr. 8 | Geld-, Kredit-, Wertpapierumsätze | **ausgeschlossen** (§ 15 Abs. 2) |
| § 4 Nr. 9a | Umsätze unter das GrEStG | ausgeschlossen |
| § 4 Nr. 12 | Vermietung/Verpachtung von Grundstücken | ausgeschlossen |
| § 4 Nr. 14 | Heilbehandlung | ausgeschlossen |
| § 4 Nr. 21 | Bildungsleistungen | ausgeschlossen |
| § 4 Nr. 28 | Lieferung von Gegenständen ohne Vorsteuerabzug | ausgeschlossen |

**Echte Befreiung** = Befreiung *und* Vorsteuerabzug bleibt (§ 15 Abs. 3).
**Unechte Befreiung** = Befreiung, aber Vorsteuerausschluss (§ 15 Abs. 2).

**Bei § 6a zusätzlich:** Erwerber ist Unternehmer, verwendet gültige USt-IdNr. eines anderen Mitgliedstaats, Gegenstand gelangt ins übrige Gemeinschaftsgebiet, Beleg- und Buchnachweis (§§ 17a ff. UStDV), **Zusammenfassende Meldung** nach § 18a — materielle Voraussetzung.

### II.2 Verzicht, § 9

Nur wenn II.1 eine **unechte** Befreiung ergeben hat.

- **Abs. 1:** möglich bei § 4 Nr. 8a–g, Nr. 9a, Nr. 12, Nr. 13, Nr. 19 — und nur bei Umsatz **an einen anderen Unternehmer für dessen Unternehmen**
- **Abs. 2:** bei Grundstücksumsätzen zusätzlich: Empfänger verwendet das Grundstück **ausschließlich für vorsteuerunschädliche Umsätze** (Bagatellgrenze 5 %)
- **Abs. 3:** bei § 4 Nr. 9a nur im notariell beurkundeten Vertrag; in der Zwangsversteigerung bis zur Aufforderung zur Abgabe von Geboten

Zweck: den Vorsteuerabzug retten. In der Klausur immer begründen, ob der Verzicht wirtschaftlich sinnvoll ist.

---

## III. Steuersatz — § 12

- **Abs. 1: 19 %** — Regelsteuersatz
- **Abs. 2: 7 %** — abschließende Aufzählung:
  - Nr. 1/2 i.V.m. **Anlage 2**: Lebensmittel, Bücher, Zeitungen, Pflanzen, Kunstgegenstände, Tiere → *Anlage 2 tatsächlich aufschlagen, die Abgrenzung ist detailverliebt*
  - Nr. 7: Eintritt Theater/Konzerte/Museen, Filmvorführungen, Überlassung von Urheberrechten
  - Nr. 8: gemeinnützige Körperschaften (Zweckbetrieb)
  - Nr. 10: Personenbeförderung im Nahverkehr / Schienenbahnverkehr
  - Nr. 11: kurzfristige Beherbergung — **Aufteilungsgebot** für Frühstück und andere Nebenleistungen
- **§ 24** — Durchschnittssätze für Land- und Forstwirtschaft

---

## IV. Bemessungsgrundlage — § 10

- **Abs. 1:** Entgelt = alles, was der Leistungsempfänger aufwendet, **abzüglich der Umsatzsteuer**
  → Aus dem Bruttobetrag herausrechnen: 19 % → × 19/119; 7 % → × 7/107
- **Nicht zum Entgelt:** durchlaufende Posten (Abs. 1 S. 6), echte Zuschüsse
- **Abs. 2:** tauschähnlicher Umsatz — Wert der Gegenleistung
- **Abs. 4:** unentgeltliche Wertabgaben — Einkaufspreis bzw. Selbstkosten (Nr. 1), entstandene Ausgaben (Nr. 2/3)
- **Abs. 5:** Mindestbemessungsgrundlage bei nahestehenden Personen und Personal, begrenzt auf das marktübliche Entgelt

---

## V. Steuerentstehung — § 13 (und Steuerschuldner § 13a/§ 13b)

### V.1 Entstehung, § 13

| Fall | Norm | Entstehung |
|---|---|---|
| Sollversteuerung (Regel) | § 13 Abs. 1 Nr. 1a S. 1 | Ablauf des VAZ der **Ausführung** |
| Anzahlung bei Soll | § 13 Abs. 1 Nr. 1a S. 4 | Ablauf des VAZ der **Vereinnahmung** |
| Istversteuerung | § 13 Abs. 1 Nr. 1b i.V.m. § 20 | Ablauf des VAZ der Vereinnahmung |
| § 13b-Fälle | § 13b Abs. 1/2 | Rechnungsausstellung, spätestens Ablauf des Folgemonats |
| § 14c Abs. 1 | § 13 Abs. 1 Nr. 3 | wie der zugrundeliegende Umsatz |
| § 14c Abs. 2 | § 13 Abs. 1 Nr. 4 | Ausgabe der Rechnung |
| ig. Erwerb | § 13 Abs. 1 Nr. 6 | Rechnungsausstellung, spätestens Ablauf des Folgemonats |

**§ 20 Istversteuerung** auf Antrag: Gesamtumsatz Vorjahr ≤ 800.000 €, oder keine Buchführungspflicht, oder Freiberufler.

### V.2 Steuerschuldner, § 13a / § 13b

- **Grundfall § 13a Abs. 1 Nr. 1:** der leistende Unternehmer
- **§ 13b — Reverse Charge**, wichtigste Fälle:
  - Abs. 1: sonstige Leistung eines im **übrigen Gemeinschaftsgebiet** ansässigen Unternehmers (§ 3a Abs. 2)
  - Abs. 2 Nr. 1: Werklieferung / sonstige Leistung eines im **Ausland** ansässigen Unternehmers
  - Abs. 2 Nr. 4: **Bauleistungen** — nur wenn der Empfänger selbst nachhaltig Bauleistungen erbringt (Abs. 5 S. 2, Nachweis USt 1 TG)
  - Abs. 2 Nr. 7/8: Schrott, Altmetalle, Gebäudereinigung
  - Abs. 2 Nr. 10: Mobilfunkgeräte, Tablets, Spielekonsolen ab **5.000 €**
  - Abs. 5: Empfänger muss Unternehmer oder juristische Person sein
  - **Folge:** Rechnung ohne USt mit Hinweis „Steuerschuldnerschaft des Leistungsempfängers" (§ 14a Abs. 5)
- **§ 14c — Steuer wegen Steuerausweises:**
  - Abs. 1: zu hoher Ausweis (Berichtigung möglich, S. 2 i.V.m. § 17)
  - Abs. 2: unberechtigter Ausweis durch Nichtunternehmer oder für nicht ausgeführte Leistung (Berichtigung nur mit Zustimmung des FA)

### V.3 Rechnung, §§ 14, 14a

Kein eigener Schritt der Skizze, aber Voraussetzung für die Eingangsseite — deshalb hier miterledigen.

**Pflichtangaben § 14 Abs. 4:** Name/Anschrift beider Parteien, Steuernummer oder USt-IdNr. des Leistenden, Ausstellungsdatum, fortlaufende Rechnungsnummer, Menge und Art der Leistung, Zeitpunkt der Leistung, nach Steuersätzen aufgeschlüsseltes Entgelt, im Voraus vereinbarte Entgeltminderungen, Steuersatz und Steuerbetrag *oder* Hinweis auf die Befreiung.

- **§ 14a** — Zusatzangaben: § 13b, ig. Lieferung, §§ 25/25a, „Gutschrift"
- **§ 33 UStDV** — Kleinbetragsrechnung bis 250 €, Steuersatz muss genannt sein
- **E-Rechnungspflicht** im B2B-Inlandsgeschäft seit 2025 mit Übergangsfristen
- **Rechnungsberichtigung** wirkt nach EuGH/BFH **rückwirkend**, wenn das Ursprungsdokument die Mindestangaben enthielt

---

# Teil D — 2. Eingangsumsätze

## Schritte I.–V.: identisch

**Jeden Eingangsumsatz vollständig durch I.–V. schicken — aus der Sicht des Leistenden.**

Das ist keine Fleißarbeit, sondern die Vorfrage des § 15 Abs. 1: Vorsteuer gibt es nur für die **gesetzlich geschuldete** Steuer. Was diese Prüfung aufdeckt:

| Ergebnis der Prüfung I.–V. beim Leistenden | Folge für den Vorsteuerabzug |
|---|---|
| Umsatz **nicht steuerbar** (z. B. Ort im Ausland, § 1 Abs. 1a) | Ausgewiesene Steuer ist § 14c-Steuer → **kein** Vorsteuerabzug |
| Umsatz **steuerfrei**, aber USt ausgewiesen | § 14c Abs. 1 → **kein** Vorsteuerabzug |
| Leistender ist **kein Unternehmer** | § 14c Abs. 2 → **kein** Vorsteuerabzug |
| **Falscher Steuersatz** (19 % statt 7 %) | Vorsteuer nur in Höhe der geschuldeten 7 % |
| **§ 13b** greift | Empfänger schuldet die Steuer selbst, Abzug nach § 15 Abs. 1 S. 1 Nr. 4 |
| Steuer noch nicht **entstanden** (§ 13) | Abzug frühestens im VAZ der Entstehung |

Merke: **Zu viel ausgewiesene Steuer schuldet der Leistende (§ 14c), der Empfänger bekommt sie aber nicht als Vorsteuer.** Genau diesen Bruch findet man nur, wenn man den Eingangsumsatz durchprüft.

---

## VI. Vorsteuerabzug — § 15

*Der Schritt, der auf der Eingangsseite hinzukommt.*

### VI.1 Voraussetzungen, § 15 Abs. 1 S. 1 Nr. 1

1. **Unternehmer** (§ 2)
2. **Leistung für sein Unternehmen** — Zuordnungsentscheidung; bei gemischter Nutzung mindestens **10 %** unternehmerisch (Abs. 1 S. 2), Zuordnung zeitnah dokumentieren
3. **gesetzlich geschuldete Steuer** → Ergebnis der Prüfung I.–V.
4. **ordnungsgemäße Rechnung** i.S.d. §§ 14, 14a
5. **Leistung ausgeführt** — bei Anzahlungen genügen Rechnung *und* Zahlung (Abs. 1 S. 1 Nr. 1 S. 3)

**Weitere Tatbestände:** Nr. 2 Einfuhrumsatzsteuer, Nr. 3 Erwerbsteuer, Nr. 4 § 13b-Steuer (**ohne** Rechnungserfordernis), Nr. 5 § 13a Abs. 1 Nr. 6.

### VI.2 Ausschlüsse

- **Abs. 1a:** Aufwendungen i.S.d. § 4 Abs. 5 S. 1 Nr. 1–4, 7 EStG (Geschenke > 50 €, Gästehäuser, Jagd, unangemessene Aufwendungen). **Bewirtung ist nicht ausgeschlossen** — die 30-%-Kürzung des EStG gilt umsatzsteuerlich nicht.
- **Abs. 1b:** Grundstücke, soweit nichtunternehmerisch genutzt
- **Abs. 2:** Ausschluss bei Verwendung für steuerfreie Umsätze → **hier zahlt sich Teil C aus**
- **Abs. 3:** Rückausnahme — echte Befreiungen (§ 4 Nr. 1–7) und Auslandsumsätze, die im Inland steuerpflichtig wären
- **Abs. 4:** Aufteilung bei gemischter Verwendung; Umsatzschlüssel nur, wenn keine präzisere Zuordnung möglich (S. 3)

---

# Teil E — Der dritte Strang: innergemeinschaftlicher Warenverkehr

Eine Warenbewegung, **zwei Steuertatbestände in zwei Mitgliedstaaten**. Beim Lieferer eine steuerfreie Lieferung, beim Erwerber ein steuerpflichtiger Erwerb. Das Steueraufkommen wandert damit ins Bestimmungsland.

```
Mitgliedstaat A                          Mitgliedstaat B
   Lieferer  ──────── Ware ────────►   Erwerber
      │                                    │
 ig. Lieferung                        ig. Erwerb
 § 1 I Nr. 1 steuerbar                § 1 I Nr. 5 steuerbar
 § 4 Nr. 1b i.V.m. § 6a steuerfrei    § 1a Tatbestand, § 3d Ort
 → Vorsteuerabzug bleibt (§ 15 III)   → § 15 I 1 Nr. 3 Vorsteuer
```

---

## E.1 Ausgangsseite: innergemeinschaftliche Lieferung

Läuft durch das normale Schema I.–V., nur mit diesen Besonderheiten:

**I. Steuerbarkeit** — Lieferung nach § 3 Abs. 1, Ort nach § 3 Abs. 6 (Beginn der Beförderung im Inland) → steuerbar nach § 1 Abs. 1 Nr. 1.

**II. Steuerbefreiung — § 4 Nr. 1 Buchst. b i.V.m. § 6a.** Voraussetzungen des § 6a Abs. 1:

| Nr. | Voraussetzung |
|---|---|
| 1 | Gegenstand gelangt in das übrige Gemeinschaftsgebiet |
| 2 | Abnehmer ist Unternehmer, der für sein Unternehmen erwirbt, oder juristische Person (bei **neuen Fahrzeugen**: jeder Erwerber, Abs. 1 Nr. 2c) |
| 3 | Erwerb unterliegt beim Abnehmer im anderen Mitgliedstaat der **Erwerbsbesteuerung** |
| 4 | Abnehmer verwendet eine **gültige USt-IdNr.** eines anderen Mitgliedstaats |

**Zwei materielle Voraussetzungen, die gern als bloße Formalie missverstanden werden:**
- die **USt-IdNr.** des Abnehmers (§ 6a Abs. 1 Nr. 4) — seit 2020 Tatbestandsmerkmal, nicht nur Nachweis
- die richtige und fristgerechte **Zusammenfassende Meldung** (§ 4 Nr. 1 Buchst. b i.V.m. § 18a) — fehlt sie oder ist sie unrichtig, entfällt die Befreiung rückwirkend; Berichtigung wirkt auf den ursprünglichen Meldezeitraum zurück (§ 18a Abs. 10)

**Nachweise:** Belegnachweis §§ 17a–17c UStDV (Gelangensbestätigung; Gelangensvermutung nach Art. 45a MwStVO), Buchnachweis § 17d UStDV.
**Vertrauensschutz:** § 6a Abs. 4 — der Lieferer bleibt befreit, wenn er die Unrichtigkeit der Abnehmerangaben trotz kaufmännischer Sorgfalt nicht erkennen konnte.

**Echte Befreiung** → der Vorsteuerabzug bleibt erhalten (§ 15 Abs. 3 Nr. 1 Buchst. a).

**III./IV.** entfallen praktisch, weil steuerfrei.

**V. Rechnung** — § 14a Abs. 3: Hinweis auf die Steuerbefreiung, USt-IdNr. beider Beteiligter. Dazu die Zusammenfassende Meldung nach § 18a.

---

## E.2 Eingangsseite: innergemeinschaftlicher Erwerb

### 1. Steuerbarkeit — § 1 Abs. 1 Nr. 5 i.V.m. § 1a

**§ 1a Abs. 1 — Grundtatbestand:**

| Nr. | Voraussetzung |
|---|---|
| 1 | Gegenstand gelangt bei einer Lieferung an den Abnehmer aus einem Mitgliedstaat in einen anderen |
| 2 | Erwerber ist **Unternehmer, der für sein Unternehmen erwirbt**, oder juristische Person, die nicht Unternehmer ist |
| 3 | Lieferer ist Unternehmer, liefert gegen Entgelt im Rahmen seines Unternehmens und ist **kein Kleinunternehmer** |

**Erweiterungen und Ausnahmen:**

- **§ 1a Abs. 2** — **innergemeinschaftliches Verbringen** gilt als Erwerb gegen Entgelt. Spiegelbild zu § 3 Abs. 1a. Kein Erwerb bei nur vorübergehender Verwendung.
- **§ 1a Abs. 3 — Schwellenerwerber („Halbunternehmer"):** kein Erwerb bei Unternehmern mit ausschließlich vorsteuerschädlichen Umsätzen, Kleinunternehmern, pauschalierenden Land- und Forstwirten sowie nicht unternehmerischen juristischen Personen, **solange die Erwerbsschwelle von 12.500 € nicht überschritten wird**. Folge: Der Vorgang bleibt beim Lieferer steuerpflichtig bzw. fällt unter § 3c.
- **§ 1a Abs. 4** — Verzicht auf die Erwerbsschwelle; bindet **2 Kalenderjahre**.
- **§ 1b — neue Fahrzeuge:** immer innergemeinschaftlicher Erwerb, **auch bei Privatpersonen**. Kriterien Abs. 3: Landfahrzeuge ≤ 6.000 km oder ≤ 6 Monate; Wasserfahrzeuge ≤ 100 Betriebsstunden oder ≤ 3 Monate; Luftfahrzeuge ≤ 40 Betriebsstunden oder ≤ 3 Monate. Gegenstück beim Verkäufer: § 2a (Fahrzeuglieferer wird wie ein Unternehmer behandelt).

### 2. Ort — § 3d

- **S. 1: Ende der Beförderung oder Versendung** — Bestimmungslandprinzip.
- **S. 2: Sicherungstatbestand.** Verwendet der Erwerber die USt-IdNr. eines anderen Mitgliedstaats, gilt der Erwerb **zusätzlich** dort als bewirkt — solange, bis er die Besteuerung im Bestimmungsland nachweist. Doppelte Erwerbsbesteuerung als Druckmittel.
- **Wichtig:** Aus der Steuer nach § 3d S. 2 gibt es **keinen Vorsteuerabzug** (EuGH *X* und *Facet*). Die Korrektur erfolgt nach § 17 Abs. 2 Nr. 4, sobald der Nachweis geführt ist. Genau hier liegt der Klausurhaken bei Reihen- und Dreiecksgeschäften.

### 3. Steuerbefreiung — § 4b

Erwerbsbefreiungen, u. a. für Gegenstände, deren Lieferung im Inland steuerfrei wäre (§ 4b Nr. 3 i.V.m. § 4 Nr. 8 ff.), und für Gegenstände, die zur steuerfreien Ausfuhr bestimmt sind (Nr. 4).

### 4. Bemessungsgrundlage — § 10 Abs. 1

Entgelt wie beim Leistungsumsatz. **Verbrauchsteuern**, die der Erwerber schuldet, gehören zur Bemessungsgrundlage.

### 5. Steuersatz — § 12

Derselbe Satz, der für die entsprechende Inlandslieferung gälte. Bei Waren der Anlage 2 also 7 %.

### 6. Entstehung — § 13 Abs. 1 Nr. 6

Mit Ausstellung der Rechnung, **spätestens** mit Ablauf des dem Erwerb folgenden Kalendermonats.

### 7. Steuerschuldner — § 13a Abs. 1 Nr. 2

Der Erwerber.

### 8. Vorsteuerabzug — § 15 Abs. 1 S. 1 Nr. 3

Die Erwerbsteuer ist als Vorsteuer abziehbar — **ohne Rechnungserfordernis**, anders als bei Nr. 1. Voraussetzung bleibt die Verwendung für vorsteuerunschädliche Umsätze (§ 15 Abs. 2/3).

> **Ergebnis:** Beim voll vorsteuerabzugsberechtigten Erwerber ist der ig. Erwerb ein **Nullsummenspiel** — Erwerbsteuer und Vorsteuer heben sich im selben Voranmeldungszeitraum auf. Trotzdem beide Beträge ausweisen, die Klausur will die Buchung sehen.

---

## E.3 Abgrenzung: Wann liegt *kein* ig. Erwerb vor?

| Konstellation | Rechtsfolge |
|---|---|
| Abnehmer ist **Privatperson** | Kein Erwerb. Lieferung fällt unter **§ 3c** (Fernverkauf), Lieferschwelle 10.000 €, Meldung über **OSS § 18j** |
| Abnehmer ist **Schwellenerwerber unter 12.500 €** | Kein Erwerb (§ 1a Abs. 3) → ebenfalls § 3c |
| **Neues Fahrzeug** | Immer Erwerb, § 1b — auch bei Privatpersonen, § 3c gilt nicht |
| **Abhollieferung** durch den Abnehmer | Weiterhin möglich, aber Nachweisprobleme; § 6a Abs. 1 Nr. 4 zwingend |
| **Reihengeschäft** | Nur die **bewegte** Lieferung (§ 3 Abs. 6a) kann ig. Lieferung sein; alle ruhenden Lieferungen sind Inlandsumsätze im Abgangs- oder Bestimmungsland |
| **Dreiecksgeschäft § 25b** | Vereinfachung: Erwerbsteuer des mittleren Unternehmers **gilt als besteuert** (Abs. 3), die Steuerschuld für seine Lieferung geht auf den letzten Abnehmer über (Abs. 2). Voraussetzung u. a.: Rechnungshinweis nach § 14a Abs. 7 |
| **Verbringen zur vorübergehenden Verwendung** | Kein Erwerb nach § 1a Abs. 2 |

---

## E.4 Spiegelbild-Übersicht

| | Lieferer (Mitgliedstaat A) | Erwerber (Mitgliedstaat B) |
|---|---|---|
| Tatbestand | ig. Lieferung | ig. Erwerb |
| Steuerbarkeit | § 1 Abs. 1 Nr. 1 | § 1 Abs. 1 Nr. 5 i.V.m. § 1a |
| Ort | § 3 Abs. 6 (Beginn) | § 3d S. 1 (Ende) |
| Befreiung | § 4 Nr. 1b i.V.m. § 6a | § 4b |
| BMG / Satz | § 10, § 12 (steuerfrei) | § 10 Abs. 1, § 12 |
| Entstehung | § 13 Abs. 1 Nr. 1a | § 13 Abs. 1 Nr. 6 |
| Schuldner | § 13a Abs. 1 Nr. 1 | § 13a Abs. 1 Nr. 2 |
| Vorsteuer | bleibt, § 15 Abs. 3 Nr. 1a | § 15 Abs. 1 S. 1 Nr. 3 |
| Rechnung | § 14a Abs. 3 | — |
| Meldung | § 18a ZM | Voranmeldung § 18 |

---

# Teil F — Nachgelagerte Prüfungen

## Berichtigungen

**§ 15a — Änderung der Verhältnisse:**
- Berichtigungszeitraum **5 Jahre**, bei Grundstücken **10 Jahre** (Abs. 1)
- auch sonstige Leistungen (Abs. 3/4) und Umlaufvermögen (Abs. 2)
- Bagatellgrenzen § 44 UStDV: Vorsteuer ≤ 1.000 €; Änderung < 10 Prozentpunkte und ≤ 1.000 €
- Veräußerung/Entnahme: Berichtigung in einem Betrag (Abs. 8/9)

**§ 17 — Änderung der Bemessungsgrundlage:** Skonti, Rabatte, Rückgabe, Uneinbringlichkeit, Insolvenz. Korrektur bei **beiden** Beteiligten im VAZ der Änderung, nicht rückwirkend.

## Kleinunternehmer — § 19

Seit 2025 sind Kleinunternehmerumsätze **steuerfrei** gestellt.

- Vorjahresumsatz ≤ **25.000 €** und laufender Umsatz ≤ **100.000 €**
- Überschreiten der 100.000 € wirkt **sofort** — ab dem Umsatz, mit dem die Grenze überschritten wird
- Folge: kein Vorsteuerabzug, kein gesonderter Steuerausweis (sonst § 14c Abs. 2)
- Verzicht nach Abs. 3 bindet **5 Jahre**

## Sonderregelungen — nur bei entsprechendem Sachverhalt

| Norm | Fall | Signal im Sachverhalt |
|---|---|---|
| § 25 | Reiseleistungen | Reisevorleistungen Dritter, Margenbesteuerung, kein Vorsteuerabzug |
| § 25a | Differenzbesteuerung | Gebrauchtwaren, Wiederverkäufer, Erwerb ohne USt-Ausweis |
| § 25b | ig. Dreiecksgeschäft | drei Unternehmer, drei Mitgliedstaaten, eine Warenbewegung |
| § 24 | Land- und Forstwirtschaft | Durchschnittssätze |
| § 18j / § 18k | OSS / IOSS | Fernverkäufe, elektronische Leistungen an Private |
| § 3 Abs. 3a | Schnittstellenfiktion | Marktplatzbetreiber, Drittlandsware |

## Verfahren — §§ 16, 18

- **§ 16 Abs. 1** — Besteuerungszeitraum ist das Kalenderjahr
- **§ 18 Abs. 1** — Voranmeldung bis zum 10. Tag nach Ablauf des VAZ
- **§ 18 Abs. 2** — VAZ: Quartal (Regel), Monat bei Vorjahressteuer > 9.000 €, keine Voranmeldung bei ≤ 2.000 €
- **§ 46 UStDV** — Dauerfristverlängerung, Sondervorauszahlung 1/11
- **§ 18a** — Zusammenfassende Meldung bei ig. Lieferungen und § 3a Abs. 2-Leistungen in die EU

---

# Merkzettel

**Die vier häufigsten Fehler**
1. Eingangsseite zuerst geprüft — dann fehlt für § 15 Abs. 2/3 die Information, wofür die Leistung verwendet wird.
2. Vorsteuer aus der Rechnung übernommen, ohne den Eingangsumsatz durchzuprüfen → § 14c übersehen.
3. Ortsvorschrift des falschen Strangs angewendet (§ 3a auf eine Lieferung).
4. Bruttobetrag als Bemessungsgrundlage angesetzt, statt die Steuer herauszurechnen.

**Formulierungsmuster**
> „A ist Unternehmer i.S.d. § 2 Abs. 1 S. 1 UStG, da er die Tätigkeit selbständig und nachhaltig zur Erzielung von Einnahmen ausübt. Die Übergabe der Maschine ist eine Lieferung nach § 3 Abs. 1 UStG, weil A dem B Verfügungsmacht verschafft. Der Ort bestimmt sich nach § 3 Abs. 6 S. 1 UStG und liegt in Köln, da die Beförderung dort beginnt. Der Umsatz ist damit nach § 1 Abs. 1 Nr. 1 S. 1 UStG steuerbar."

Immer mit **Absatz, Satz und Nummer** zitieren. Jedes Zwischenergebnis in einem Satz festhalten, bevor die nächste Stufe beginnt.

**Der Ablauf in einer Zeile**
§ 2 → **Ausgangsumsätze:** I. § 1 (mit § 3 / § 3a) → II. §§ 4–9 → III. § 12 → IV. § 10 → V. § 13 → **Eingangsumsätze:** I.–V. identisch → VI. § 15 → **ggf. dritter Strang:** § 1 Abs. 1 Nr. 5, § 1a, § 3d, § 4b, § 13 Abs. 1 Nr. 6, § 15 Abs. 1 S. 1 Nr. 3 → **Rest:** §§ 15a, 17, 19, Sondernormen, § 18

**Der EU-Fall in drei Fragen**
1. Ist der Abnehmer Unternehmer mit gültiger USt-IdNr. aus einem anderen Mitgliedstaat? → wenn nein: § 3c prüfen, nicht § 6a
2. Gelangt die Ware nachweislich über die Grenze? → Gelangensbestätigung
3. Wurde die Zusammenfassende Meldung richtig und fristgerecht abgegeben? → sonst fällt die Befreiung weg
