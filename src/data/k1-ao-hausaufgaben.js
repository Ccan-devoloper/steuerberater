export const k1AoHausaufgabenDidaktik = [
  "Zu jedem Unterrichtstermin wird eine Hausaufgabe ausgegeben. Sie soll die wesentlichen Inhalte des Fachtermins anhand einer oder mehrerer Fallgestaltungen abfragen und aufarbeiten.",
  "Die Fälle sollen zeitnah zum Unterricht gelöst und anschließend mit einer ausführlichen Fehleranalyse nachbereitet werden. Nach dem Hinweis der Unterlage kann die gewissenhafte Bearbeitung der Fälle das aufwendige Lesen umfangreicher Skripte regelmäßig ersetzen und die Nacharbeit effizienter machen.",
  "Fragen zu den Fällen können im nachfolgenden Unterrichtstermin mit dem Dozenten besprochen werden."
];

export const AO_HAUSAUFGABEN_PAGE_PLAN = {
  1: "didaktik",
  2: "AO-HA12-1/AO-HA12-2",
  3: "AO-HA12-3",
  4: "AO-HA12-4",
  5: "AO-HA12-1",
  6: "AO-HA12-1/AO-HA12-2",
  7: "AO-HA12-2/AO-HA12-3",
  8: "AO-HA12-3/AO-HA12-4",
  9: "AO-HA12-4"
};

export const k1AoHausaufgaben = [
  {
    id: "AO-HA-1-2",
    fachtermin: "1. + 2.",
    rechtsstand: "2025",
    seiten: 9,
    quellentitel: "Hausaufgabe mit Lösung · Abgabenordnung · 1. + 2. Fachtermin",
    quelle: "Steuer-Fachschule Dr. Endriss · Hans-Jürgen Jacobs",
    faelle: [
      {
        id: "AO-HA12-1",
        nummer: "1",
        titel: "Eheleute M und F: zusammengefasster Steuerbescheid und Einzelbekanntgabe",
        seiten: "Aufgabe S. 2 · Lösung S. 5–6",
        sourcePages: [2, 5, 6],
        themen: ["verbundener Verwaltungsakt", "zusammengefasster Steuerbescheid", "Ehegatten", "Bekanntgabe"],
        aufgabe: [
          "Die Eheleute M und F werden einkommensteuerrechtlich zusammen veranlagt und geben ihre gemeinsame Einkommensteuererklärung für das Jahr 01 im Mai 02 ab. Der zuständige Sachbearbeiter S erkennt Unklarheiten und bittet um Rücksprache.",
          "Im Juli 02 erscheinen M und F persönlich. Während des Gesprächs geraten sie in einen intensiven Streit und werfen sich in Gegenwart des S gegenseitig die Vernachlässigung ihrer steuerlichen Pflichten vor. Sie erklären, zwar noch unter gemeinsamer Anschrift zu leben, aber ständig insbesondere über finanzielle Angelegenheiten zu streiten; die Trennung sei absehbar. Am 13.08.02 wird ein zusammengefasster Einkommensteuerbescheid 01 an die noch bestehende gemeinsame Anschrift zur Post gegeben.",
          "Aufgabe 1: Erläutern Sie die Begriffe „verbundener Verwaltungsakt“ und „zusammengefasster Steuerbescheid“.",
          "Aufgabe 2: Wurde der Einkommensteuerbescheid 01 wirksam bekanntgegeben?"
        ],
        loesung: [
          {
            titel: "Aufgabe 1 · Begriffe",
            texte: [
              "Verbundene Verwaltungsakte sind rechtlich selbständige Verwaltungsakte mit unterschiedlichen Regelungsgehalten, die äußerlich bzw. körperlich mit Steuerbescheiden i.S.d. §§ 155 Abs. 1, 157 Abs. 1 AO verknüpft sind. Sie stehen lediglich im selben Schriftstück und sind hinsichtlich Wirksamkeit, Anfechtbarkeit und nachträglicher Korrigierbarkeit getrennt zu würdigen.",
              "Zusammengefasste Steuerbescheide können nach § 155 Abs. 3 AO an mehrere Steuerschuldner ergehen, soweit sie die Steuer als Gesamtschuldner nach § 44 AO schulden. Es handelt sich um mehrere inhaltsgleiche Verwaltungsakte, die grundsätzlich jedem Steuerschuldner einzeln bekanntzugeben wären. Hauptanwendungsfall ist die Zusammenfassung zweier selbständiger Einkommensteuerbescheide bei Zusammenveranlagung von Ehegatten nach §§ 26, 26b EStG."
            ]
          },
          {
            titel: "Aufgabe 2 · Bekanntgabe",
            texte: [
              "Der zusammengefasste Einkommensteuerbescheid 01 wurde nach der Quellenlösung nicht wirksam bekanntgegeben. Der Erlass eines zusammengefassten Steuerbescheides ist nach § 155 Abs. 3 S. 1 AO zwar zulässig; M und F sind als zusammenveranlagte Ehegatten Gesamtschuldner i.S.d. § 44 AO.",
              "Für die Bekanntgabe gilt § 122 Abs. 7 AO. Eine Ausfertigung unter gemeinsamer Anschrift genügt grundsätzlich, wenn die Voraussetzungen des § 122 Abs. 7 S. 1 AO vorliegen.",
              "Eine Einzelbekanntgabe ist erforderlich, wenn keine gemeinsame Anschrift und kein Einverständnis nach § 122 Abs. 6 AO bestehen, wenn die Ehegatten dies nach § 122 Abs. 7 S. 3 Alt. 1 AO beantragt haben oder wenn ernstliche Meinungsverschiedenheiten bestehen und dies dem Finanzamt bekannt ist (§ 122 Abs. 7 S. 3 Alt. 2 AO).",
              "Hier waren dem Finanzamt die ernstlichen Meinungsverschiedenheiten durch das Gespräch vor Erlass des Bescheids bekannt. Daher hätte es jedem Ehegatten eine eigene Ausfertigung in getrennter Briefsendung bekanntgeben müssen.",
              "Wird in dieser Situation nur eine Ausfertigung an beide Ehegatten bekanntgegeben, ist der gesamte Bekanntgabevorgang unwirksam. Der Einkommensteuerbescheid erlangt mangels ordnungsgemäßer Bekanntgabe keine Wirksamkeit nach § 124 Abs. 1 AO. Eine wirksame Einzelbekanntgabe kann innerhalb der Festsetzungsfrist nachgeholt werden."
            ]
          }
        ],
        ergebnis: "Der zusammengefasste Einkommensteuerbescheid ist als Bescheidsform zulässig, wurde hier wegen der dem Finanzamt bekannten ernstlichen Meinungsverschiedenheiten aber nicht wirksam bekanntgegeben.",
        normen: ["§ 155 Abs. 1 AO", "§ 155 Abs. 3 AO", "§ 157 Abs. 1 AO", "§ 44 AO", "§ 122 Abs. 6 AO", "§ 122 Abs. 7 AO", "§ 124 Abs. 1 AO"],
        querverweise: [305, 307, 312]
      },
      {
        id: "AO-HA12-2",
        nummer: "2",
        titel: "Ursula Middendorf: Inhaltsadressat, Bekanntgabeadressat und Empfänger",
        seiten: "Aufgabe S. 2 · Lösung S. 6–7",
        sourcePages: [2, 6, 7],
        themen: ["Inhaltsadressat", "Bekanntgabeadressat", "Empfänger", "Empfangsvollmacht"],
        aufgabe: [
          "Frau Ursula Middendorf betreibt einen Friseursalon. Sie hat ihre Steuerberaterin Anne Ludwig mit der Wahrnehmung ihrer steuerlichen Angelegenheiten beauftragt und bevollmächtigt, für sie alle Verfahrenshandlungen – insbesondere die Entgegennahme von Verwaltungsakten – gegenüber dem Finanzamt vorzunehmen. Die schriftliche Vollmacht liegt dem Finanzamt vor.",
          "Frau Ludwig übermittelt die Umsatzsteuerjahresanmeldung 11 für Frau Middendorf am 16.04.12. Das Finanzamt möchte von der Anmeldung abweichen und einen Umsatzsteuerbescheid für 11 erlassen.",
          "Aufgabe: Entscheiden Sie mit kurzer Begründung, wen das Finanzamt als Inhaltsadressat, Bekanntgabeadressat und Empfänger des Umsatzsteuerbescheides bezeichnen muss."
        ],
        loesung: [
          {
            titel: "Adressaten und Empfänger",
            texte: [
              "Inhaltsadressatin des Umsatzsteuerbescheides ist Frau Ursula Middendorf, weil sich der Bescheid an sie als Schuldnerin der Umsatzsteuer richtet.",
              "Der Bescheid ist Frau Middendorf nach § 122 Abs. 1 S. 1 AO bekanntzugeben; sie ist damit die Bekanntgabeadressatin.",
              "Aufgrund der Empfangsvollmacht ist der Bescheid der Steuerberaterin Anne Ludwig als Empfängerin zu übermitteln.",
              "Die Übermittlung an die Bevollmächtigte steht nach § 122 Abs. 1 S. 3 AO grundsätzlich im Ermessen des Finanzamts. Nach der Quellenlösung ist dieses Ermessen hier gemäß § 122 Abs. 1 S. 4 AO auf Null reduziert, weil die schriftliche Vollmacht dem Finanzamt vorliegt; die Unterlage verweist ergänzend auf AEAO zu § 122 Nr. 1.7.3 S. 3."
            ]
          }
        ],
        ergebnis: "Inhalts- und Bekanntgabeadressatin ist Ursula Middendorf; Empfängerin des Bescheides ist wegen der vorliegenden schriftlichen Empfangsvollmacht Steuerberaterin Anne Ludwig.",
        normen: ["§ 122 Abs. 1 S. 1 AO", "§ 122 Abs. 1 S. 3 AO", "§ 122 Abs. 1 S. 4 AO", "AEAO zu § 122 Nr. 1.7.3 S. 3"],
        querverweise: [307, 312]
      },
      {
        id: "AO-HA12-3",
        nummer: "3",
        titel: "Bekanntgabe und Beginn der Einspruchsfrist: drei Varianten",
        seiten: "Aufgabe S. 3 · Lösung S. 7–8",
        sourcePages: [3, 7, 8],
        themen: ["Zugang", "Bekanntgabefiktion", "Heilung", "elektronische Bekanntgabe", "Einspruchsfrist"],
        aufgabe: [
          "Entscheiden Sie in jeder Variante, ob und gegebenenfalls wann der Einkommensteuerbescheid wirksam geworden ist und welcher Zeitpunkt für den Beginn der Einspruchsfrist maßgebend ist.",
          "Variante 1: Max Roland verbringt vom 03.08. bis 27.08.12 Urlaub in Norwegen. Der am 03.08.12 zur Post gegebene ESt-Bescheid 11 wird am 04.08.12 in seinen Briefkasten eingeworfen. Die Nachbarin legt den Brief am 05.08.12 auf den Küchentisch; Roland findet ihn erst am Tag seiner Rückkehr.",
          "Variante 2: Der richtig adressierte, am 09.05.12 (Montag) mit einfachem Brief zur Post gegebene ESt-Bescheid 11 des Alexander Uhlen wird am 11.05.12 versehentlich in den Briefkasten des Nachbarn eingeworfen. Dieser leitet ihn am 15.05.12 (Sonntag) ungeöffnet an Uhlen weiter.",
          "Variante 3: Herr Müller übermittelt seine ESt-Erklärung 11 über ELSTER und beantragt elektronische Bekanntgabe. Am 28.08.12 wird er per E-Mail über die Bereitstellung des Bescheides zum Datenabruf benachrichtigt und erhält die Mail am selben Tag. Wegen einer Computermesse ruft er den Bescheid erst am 04.09.12 ab."
        ],
        loesung: [
          {
            titel: "Variante 1 · Urlaub und Briefkasten",
            texte: [
              "Der Bescheid ist Herrn Roland tatsächlich am 04.08.12 zugegangen, weil er mit dem Einwurf in den Hausbriefkasten in seinen Machtbereich gelangt ist. Die Urlaubsabwesenheit ändert nach der Quelle den Zugang unter gewöhnlichen Umständen nicht.",
              "Nach dem für den Fall verwendeten Rechtsstand der Quelle wird der Bescheid aufgrund der damaligen Bekanntgabefiktion nach §§ 122 Abs. 2 Nr. 1, 124 Abs. 1 AO am 07.08.12 bekanntgegeben und wirksam. Dieser Zeitpunkt ist nach § 355 Abs. 1 S. 1 AO für den Beginn der Einspruchsfrist maßgeblich.",
              "Die Einspruchsfrist beginnt nach § 108 Abs. 1 AO i.V.m. § 187 Abs. 1 BGB am 08.08.12 um 0:00 Uhr bzw. mit Ablauf des 07.08.12."
            ]
          },
          {
            titel: "Variante 2 · Fehlzustellung an den Nachbarn",
            texte: [
              "Der Einwurf in den Briefkasten des Nachbarn ist ein Bekanntgabefehler. Nach der Quellenlösung wird der Fehler mit der Weiterleitung an Uhlen analog § 8 VwZG geheilt.",
              "Der Bescheid wird mit dem tatsächlichen Zugang bei Uhlen am 15.05.12 nach §§ 124 Abs. 1, 122 Abs. 1 AO wirksam bekanntgegeben. Dass der Tag ein Sonntag ist, ändert den Bekanntgabezeitpunkt nicht; die Quelle behandelt die Heilung als Termin und nicht als Frist i.S.d. § 108 Abs. 3 AO.",
              "Die Bekanntgabe am 15.05.12 ist das fristauslösende Ereignis nach § 355 Abs. 1 S. 1 AO. Die Einspruchsfrist beginnt am 16.05.12 um 0:00 Uhr bzw. mit Ablauf des 15.05.12."
            ]
          },
          {
            titel: "Variante 3 · elektronische Bekanntgabe",
            texte: [
              "Bei der elektronischen Bekanntgabe gilt der Bescheid nach der Quelle am vierten Tag nach Absendung der Benachrichtigungs-Mail über die Bereitstellung der Daten als bekanntgegeben (§ 122a Abs. 4 S. 1 AO).",
              "Die Mail wurde am 28.08.12 versandt und empfangen. Der spätere Abruf am 04.09.12 ist unerheblich. Der Bescheid gilt daher am 01.09.12 als wirksam bekanntgegeben (§§ 124 Abs. 1, 122a Abs. 4 S. 1, 108 Abs. 1 AO i.V.m. §§ 187 Abs. 1, 188 Abs. 1 BGB).",
              "Die Einspruchsfrist beginnt am 02.09.12 um 0:00 Uhr bzw. mit Ablauf des 01.09.12."
            ]
          }
        ],
        ergebnis: "Entscheidend sind Bekanntgabeart und der gesetzlich maßgebliche Bekanntgabezeitpunkt; tatsächliche Kenntnisnahme und Abruf können davon abweichen.",
        normen: ["§ 122 Abs. 1 AO", "§ 122 Abs. 2 Nr. 1 AO", "§ 122a Abs. 4 S. 1 AO", "§ 124 Abs. 1 AO", "§ 8 VwZG", "§ 355 Abs. 1 S. 1 AO", "§ 108 AO", "§§ 187, 188 BGB"],
        querverweise: [307, 313, 314, 319]
      },
      {
        id: "AO-HA12-4",
        nummer: "4",
        titel: "Franz Brumm: Festsetzungsfrist, Bekanntgabefiktion und fehlende Rechtsbehelfsbelehrung",
        seiten: "Aufgabe S. 4 · Lösung S. 8–9",
        sourcePages: [4, 8, 9],
        themen: ["Festsetzungsfrist", "Anlaufhemmung", "Vorbehalt der Nachprüfung", "Bekanntgabefiktion", "Rechtsbehelfsbelehrung"],
        aufgabe: [
          "Franz Brumm ist Inhaber einer Fahrschule. Auf Antrag verlängert das Finanzamt die Frist zur Abgabe der Einkommensteuererklärung 01 bis 28.02.03. Weil Brumm weiterhin nicht abgibt, schätzt das Finanzamt nach § 162 AO und setzt die Einkommensteuer mit Bescheid vom 19.07.03 unter Vorbehalt der Nachprüfung (§ 164 Abs. 1 AO) auf 52.000 € fest.",
          "Brumm reicht die Einkommensteuererklärung 01 erst im August 07 ein. Mit Datum 12.10.07 (Mittwoch; Tag der Aufgabe zur Post) erlässt das Finanzamt einen nach § 164 Abs. 2 AO geänderten Einkommensteuerbescheid 01. Der Vorbehalt der Nachprüfung bleibt bestehen; die Einkommensteuer beträgt 40.000 €. Der Bescheid wird am 13.10.07 (Donnerstag) in Brumms Briefkasten eingelegt und enthält eine ordnungsgemäße Rechtsbehelfsbelehrung.",
          "Aufgabe 1: Berechnen Sie die für die Einkommensteuer 01 maßgebende Festsetzungsfrist.",
          "Aufgabe 2: Erläutern Sie, wann der mit einfachem Brief übersandte Einkommensteuerbescheid 01 vom 12.10.07 als bekanntgegeben gilt und wann die Einspruchsfrist endet.",
          "Aufgabe 3: Welche Rechtsfolgen wären für Wirksamkeit und Frist möglicher Einwendungen zu beachten, wenn der Bescheid ohne Rechtsbehelfsbelehrung bekanntgegeben worden wäre?"
        ],
        loesung: [
          {
            titel: "Aufgabe 1 · Festsetzungsfrist",
            texte: [
              "Nach der Quellenlösung beginnt die Festsetzungsfrist gemäß § 170 Abs. 2 S. 1 Nr. 1 AO i.V.m. § 149 Abs. 1 AO und § 36 Abs. 1 EStG mit Ablauf des Jahres 04. Maßgebend ist die höchstzulässige Anlaufhemmung von drei Jahren, weil die Einkommensteuererklärung 01 erst im Jahr 07 eingereicht wurde.",
              "Die Schätzung der Besteuerungsgrundlagen im Jahr 03 ist für den Fristbeginn nach der Quellenlösung unbeachtlich. Bei einer regulären vierjährigen Festsetzungsfrist nach § 169 Abs. 2 Nr. 2 AO endet die Festsetzungsfrist für ESt 01 mit Ablauf des Jahres 08."
            ]
          },
          {
            titel: "Aufgabe 2 · Bekanntgabe und Einspruchsfrist",
            texte: [
              "Die Quellenlösung weist ausdrücklich auf die Fassung für ab 01.01.2025 zur Post gegebene Verwaltungsakte hin: Ein mit einfachem Brief übersandter Steuerbescheid gilt nach § 122 Abs. 2 Nr. 1 AO am vierten Tag nach Aufgabe zur Post als bekanntgegeben.",
              "Ausgehend von der Postaufgabe 12.10.07 endet die Viertagesfrist nach der im Fall vorgegebenen Wochentagslage am Sonntag, 16.10.07. Nach § 108 Abs. 3 AO verschiebt sich das Ende auf Montag, 17.10.07. Der Bescheid gilt daher nach der Quellenlösung am 17.10.07 als bekanntgegeben.",
              "Der tatsächliche frühere Zugang am 13.10.07 ist für die Berechnung der Einspruchsfrist unbeachtlich. Die einmonatige Einspruchsfrist endet nach § 355 Abs. 1 S. 1 AO i.V.m. §§ 187 Abs. 1, 188 Abs. 2 BGB mit Ablauf des 17.11.07."
            ]
          },
          {
            titel: "Aufgabe 3 · fehlende Rechtsbehelfsbelehrung",
            texte: [
              "Ein ohne Rechtsbehelfsbelehrung erlassener Einkommensteuerbescheid bleibt nach der Quellenlösung formell rechtmäßig. Die Rechtsbehelfsbelehrung ist trotz § 157 Abs. 1 S. 3 AO kein Bestandteil des Verwaltungsakts Steuerbescheid und hat daher keine Auswirkung auf seine Wirksamkeit oder Rechtmäßigkeit.",
              "Ohne ordnungsgemäße Rechtsbehelfsbelehrung wird die Einspruchsfrist nach § 356 Abs. 1 AO nicht in Lauf gesetzt. Nach § 356 Abs. 2 AO muss der Einspruch jedoch innerhalb eines Jahres nach Bekanntgabe eingelegt werden.",
              "Die Quellenlösung berechnet das Ende dieser Ausschlussfrist mit Ablauf des 17.10.08 (§ 108 Abs. 1 AO i.V.m. §§ 187 Abs. 1, 188 Abs. 2 BGB)."
            ]
          }
        ],
        ergebnis: "Nach der Quelle endet die Festsetzungsfrist mit Ablauf 2008; der Änderungsbescheid gilt am 17.10.07 als bekanntgegeben. Mit ordnungsgemäßer Rechtsbehelfsbelehrung endet die Monatsfrist am 17.11.07, ohne Belehrung gilt die Jahresfrist des § 356 Abs. 2 AO bis 17.10.08.",
        normen: ["§ 162 AO", "§ 164 Abs. 1 AO", "§ 164 Abs. 2 AO", "§ 169 Abs. 2 Nr. 2 AO", "§ 170 Abs. 2 S. 1 Nr. 1 AO", "§ 122 Abs. 2 Nr. 1 AO", "§ 108 Abs. 3 AO", "§ 355 Abs. 1 S. 1 AO", "§ 356 Abs. 1 AO", "§ 356 Abs. 2 AO", "§ 157 Abs. 1 S. 3 AO", "§§ 187, 188 BGB"],
        querverweise: [313, 314, 319, 329, 346]
      }
    ]
  }
];

export const AO_HAUSAUFGABEN_BY_MODULE = (() => {
  const map = new Map();
  for (const termin of k1AoHausaufgaben) {
    for (const fall of termin.faelle) {
      for (const modulId of fall.querverweise || []) {
        const liste = map.get(modulId) || [];
        liste.push({ terminId: termin.id, fachtermin: termin.fachtermin, fallId: fall.id, nummer: fall.nummer, titel: fall.titel });
        map.set(modulId, liste);
      }
    }
  }
  return map;
})();
