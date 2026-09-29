/* Visuelle Transkription der beiden bereitgestellten Mirbach-Lösungsblätter.
   Sechs von sechs PDF-Seiten gelesen; keine Rechtsstandsprüfung. */
const STAND = "Unveränderter Quellenstand · visuell übertragen am 29.09.2026";
export const mirbachLoesungen = {
  "erbst-fs-m-02": [
    {
      id: "mirbach-lsg-09", title: "Fall 9 – handschriftlicher Lösungsweg",
      quelle: "Loesung Fall 9 und 14.pdf · Drive 1jwrR7DwPn38ZYexSXejnz8IJRN_DIC8s", sourcePages: [1], rechtsstand: STAND,
      bloecke: [
        { typ: "titel", text: "I. Vorspann" },
        { text: "Steuerpflichtiger Vorgang durch Erwerb von Todes wegen: B → T, § 1 Abs. 1 Nr. 1, § 3 Abs. 1 Nr. 1 ErbStG, § 1922 BGB. § 2 Abs. 1 Nr. 1 ErbStG ist erfüllt. Steuerschuldnerin nach § 20 Abs. 1 Satz 1 ErbStG: T." },
        { text: "Steuerklasse: Grundsätzlich gilt nach § 6 Abs. 2 Satz 1 ErbStG die Steuerklasse nach dem Verhältnis T zu B: Steuerklasse II, § 15 Abs. 1 Steuerklasse II Nr. 3 ErbStG. Auf Antrag nach § 6 Abs. 2 Satz 2 ErbStG – gilt als gestellt, da günstiger – ist das Verhältnis T zu V maßgebend: Steuerklasse I, § 15 Abs. 1 Steuerklasse I Nr. 2 ErbStG." },
        { text: "Steuerentstehung und Bewertungsstichtag: 30.06.2025, § 9 Abs. 1 Nr. 1 Buchstabe h, § 11 ErbStG." },
        { typ: "titel", text: "II. Einleitung" },
        { text: "Die Handschrift verweist mit „Copy + Paste“ auf § 10 Abs. 1 Sätze 1 und 2 ErbStG; sie enthält hier keinen ausformulierten weiteren Absatz." },
        { typ: "titel", text: "III. Steuerpflichtiger Erwerb" },
        { typ: "tabelle", spalten: ["Position laut Lösungsblatt", "Betrag"], zeilen: [
          ["Vermögen nach Steuerbefreiungen", "600.000 €"],
          ["Mindestpauschale, § 10 Abs. 5 Nr. 3 ErbStG", "−15.000 €"],
          ["Bereicherung", "585.000 €"],
          ["Persönlicher Freibetrag, § 16 Abs. 1 Nr. 2 ErbStG", "−400.000 €"],
          ["Kein § 17 Abs. 2 ErbStG: T ist zu alt", "–"],
          ["Steuerpflichtiger Erwerb; Rundung entfällt", "185.000 €"]
        ] },
        { typ: "titel", text: "IV. Steuer" },
        { text: "185.000 € × 11 % = 20.350 €." },
        { text: "Transkriptionshinweis: Abkürzungen der Handschrift sind ausgeschrieben; die Beträge und der dargestellte Quellenweg sind unverändert. Es wurde keine neue Musterlösung verfasst." }
      ]
    },
    {
      id: "mirbach-lsg-14", title: "Fall 14 – Vier-Etagen-Skizze und Schuldzuordnung",
      quelle: "Loesung Fall 9 und 14.pdf · Drive 1jwrR7DwPn38ZYexSXejnz8IJRN_DIC8s", sourcePages: [2], rechtsstand: STAND,
      bloecke: [
        { text: "Die Skizze zeigt vier Etagen zu jeweils 100 qm. Von oben nach unten: bisher vom Erblasser V bewohnt; vom Erben S unentgeltlich bewohnt; leerstehende Wohnung zur Vermietung; vermieteter Kiosk. Die rechten Spalten sind in der Handschrift mit W, S und V bezeichnet. Die Beträge sind dort in Tausend Euro notiert und hier in Euro ausgeschrieben." },
        { typ: "tabelle", spalten: ["Etage / Nutzung", "Wert (W)", "Steuerbefreiung (S)", "Schuldanteil → Abzug (V)"], zeilen: [
          ["3. OG: Erblasser V, anschließend Einzug des S", "200.000 €", "−200.000 €", "50.000 € → 0 €"],
          ["2. OG: Erbe S, unentgeltlich", "200.000 €", "–", "50.000 € → −50.000 €"],
          ["1. OG: Wohnung leer, zur Vermietung", "200.000 €", "−20.000 €", "50.000 € → −45.000 €"],
          ["EG: Vermietung Kiosk", "200.000 €", "–", "50.000 € → −50.000 €"],
          ["Summen der Skizze", "800.000 €", "−220.000 €", "−145.000 €"]
        ] },
        { text: "Randvermerk zur Verbindlichkeit: § 10 Abs. 5 Nr. 1 ErbStG; Ausgangsbetrag 200.000 €. Das Blatt enthält diese Zuordnungsrechnung, aber keine darüber hinausgehende vollständige Steuerfestsetzung. Eine solche wird nicht als Original-Lösung ergänzt." }
      ]
    }
  ],
  "erbst-fs-m-04": [
    {
      id: "mirbach-lsg-28-abw2", title: "Fall 28, Abwandlung 2 – Erbbaurecht mit und ohne Koeffizienten",
      quelle: "ErbSt Loesung Abw Fall 28.pdf · Drive 1b60K4kuKkryqC1l0DTLEQ_XJsJhDothY", sourcePages: [1, 2, 3, 4], rechtsstand: STAND,
      bloecke: [
        { typ: "titel", text: "Seite 1: Erbbaurechtsfälle – §§ 192–194 BewG" },
        { typ: "tabelle", spalten: ["Wirtschaftliche Einheit", "Mit Koeffizient", "Ohne Koeffizient"], zeilen: [
          ["Erbbaurecht einschließlich eigenem Gebäude: § 193 BewG", "§ 193 Abs. 1 BewG", "§ 193 Abs. 2–5 BewG"],
          ["Belastetes Erbbaugrundstück mit Erbbauzins: § 194 BewG", "§ 194 Abs. 1 BewG", "§ 194 Abs. 2–5 BewG"]
        ] },
        { typ: "titel", text: "Abwandlung 2 a – mit Erbbaurechtskoeffizient" },
        { text: "Erbbaurecht ist Grundbesitz, § 176 Abs. 1 Nr. 2 BewG. Einstieg wie im Grundfall; Art „Erbbaurecht“, §§ 192, 193 BewG. Bewertung gemäß § 193 Abs. 1 BewG, da ein Koeffizient vorliegt. Wert des unbelasteten Grundstücks: Einfamilienhaus, § 181 Abs. 2 BewG; Sachwertverfahren wie im Grundfall." },
        { typ: "tabelle", spalten: ["Rechenschritt", "Betrag / Faktor"], zeilen: [
          ["Wert des unbelasteten Grundstücks", "702.451 €"], ["Erbbaurechtskoeffizient", "× 0,9"],
          ["Wert des Erbbaurechts laut Handschrift, H B 177", "632.205 €"]
        ] },
        { typ: "titel", text: "Seite 2: Abwandlung 2 b – ohne Koeffizient" },
        { text: "Erbbaurecht ist Grundbesitz, § 176 Abs. 1 Nr. 2 BewG. Art „Erbbaurecht“, §§ 192, 193 BewG. Bewertung mangels Koeffizient gemäß § 193 Abs. 2–5 BewG. Quellenverweis: Erl. 200 § 177/1, Rn. 68." },
        { typ: "tabelle", spalten: ["Rechenschritt / Quellenverweis", "Betrag / Faktor"], zeilen: [
          ["Wert unbelastetes Grundstück ohne Erbbaurecht", "702.451 €"], ["Bodenwert", "−250.000 €"],
          ["§ 193 Abs. 3 Satz 1 Nr. 1 BewG", "452.451 €"], ["Bodenwertverzinsung: 250.000 € × 3 %", "7.500 €"],
          ["Erbbauzins pro Jahr", "−4.000 €"], ["Differenz", "3.500 €"], ["Anlage 21: 3 %, 35 Jahre", "× 21,4872"],
          ["§ 193 Abs. 3 Satz 1 Nr. 2, Abs. 4 BewG", "75.205 €"],
          ["Finanzmathematischer Wert: 452.451 € + 75.205 €", "527.656 €"],
          ["Erbbaurechtsfaktor, § 193 Abs. 2 BewG", "× 1,1"],
          ["Wert des Erbbaurechts laut Handschrift, H B 177", "580.421 €"]
        ] },
        { typ: "titel", text: "Seiten 3–4: Ausführliche Herleitung des unbelasteten Grundstückswerts" },
        { text: "Einfamilienhaus, § 181 Abs. 2 BewG. Mangels Vergleichswert Bewertung im Sachwertverfahren: § 182 Abs. 2 Nr. 3, Abs. 4 Nr. 1 BewG → §§ 189–191 BewG. Gebäudesachwert und Bodenwert getrennt ermitteln, § 189 Abs. 1 BewG. Außenanlagen grundsätzlich abgegolten, § 189 Abs. 4 Satz 1 BewG." },
        { typ: "tabelle", spalten: ["Bodenwert / Gebäudesachwert", "Ansatz laut Handschrift"], zeilen: [
          ["Bodenwert, § 179, § 189 Abs. 2 BewG: 500 qm × 500 €/qm", "250.000 €"],
          ["Regelherstellungskosten, § 190 Abs. 1–2 BewG, Anlage 24 (1.12, Standard 4)", "880 €/qm"],
          ["Bruttogrundfläche", "× 600 qm"],
          ["Baupreisindex: Verweis § 190 Abs. 3 Satz 2 / Abs. 4 BewG; Erl. 200 § 190/1", "× 1,833"],
          ["Durchschnittliche Herstellungskosten Gebäude", "967.824 €"],
          ["Regionalfaktor, § 190 Abs. 3 Satz 1, Abs. 5 BewG", "× 1,0"],
          ["Gesamtnutzungsdauer, Anlage 22 BewG", "80 Jahre"], ["Alter: 2025 − 1964", "61 Jahre"],
          ["Rechnerische Restnutzungsdauer", "19 Jahre"], ["Mindest-Restnutzungsdauer: 30 % × 80 Jahre", "24 Jahre"],
          ["Alterswertminderungsfaktor: 24 / 80, § 190 Abs. 3 Satz 1, Abs. 6 BewG", "× 0,300"],
          ["Gebäudesachwert laut Handschrift", "290.347 €"], ["Bodenwert", "+250.000 €"],
          ["Vorläufiger Sachwert, § 189 Abs. 3 BewG", "540.347 €"],
          ["Wertzahl, § 189 Abs. 3, § 191 BewG, Anlage 25", "× 1,3"], ["Sachwert laut Handschrift", "702.451 €"]
        ] },
        { text: "Seite 4 führt daran anschließend dieselbe Rechnung der Variante 2 b noch einmal vollständig fort: 702.451 € − 250.000 € = 452.451 €; (7.500 € − 4.000 €) × 21,4872 = 75.205 €; 452.451 € + 75.205 € = 527.656 €; × 1,1 = 580.421 € laut Handschrift." },
        { text: "Quellentreue: Die auf volle Euro ausgewiesenen Zwischen- und Endbeträge sowie die Verweise werden wie geschrieben übernommen. Die Wiederholung auf den Seiten 3–4 ist als ausführliche Herleitung dokumentiert, nicht als zusätzliche Fallvariante." }
      ]
    }
  ]
};
