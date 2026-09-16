/* AO-Keyfacts (Dr. Christian Mirbach, Rechtsstand 2025).

   Drei Übersichtsblätter des Lehrgangs zu Außenprüfung, Vollstreckung und
   Erhebungsverfahren. Gliederung, Reihenfolge und Wortlaut der Stichpunkte sind
   1:1 aus den Quell-PDFs übernommen; ergänzt sind nur die Normenchips und die
   Querverweise in die AO-Einheiten. Personenbezogene Wasserzeichen der
   Quell-PDFs sind nicht übernommen.

   Aufbau: je Blatt Abschnitte mit römischer Nummerierung; ein Abschnitt enthält
   entweder Stichpunkte (punkte) oder nummerierte Unterabschnitte (schritte) mit
   eigenen Stichpunkten. */

export const aoKeyfactsQuelle = {
  autor: "Dr. Christian Mirbach",
  stand: "Rechtsstand 2025",
  hinweis:
    "Die Keyfacts sind Übersichtsblätter des Lehrgangs: knappe Merksätze mit Fundstelle, keine ausformulierten Lösungen. Sie eignen sich als letzte Wiederholung vor der Klausur und als Prüfreihenfolge beim Fall.",
};

export const aoKeyfacts = [
  {
    id: "ao-keyfacts-ap",
    titel: "Keyfacts Außenprüfung",
    datei: "B-S25-AO-Keyfacts Aussenpruefung-(Mirbach)-0425.pdf",
    themen: ["Zulässigkeit", "Prüfungsumfang", "Prüfungsanordnung", "Bekanntgabe", "Prüfungsort", "Ende der Prüfung", "Verwertungsverbot"],
    normen: ["§ 193 AO", "§ 194 AO", "§ 196 AO", "§ 197 AO", "§ 200 AO", "§ 201 AO", "§ 202 AO", "§ 171 Abs. 4 AO", "§ 173 Abs. 2 AO", "§ 4 BpO", "§ 6 BpO"],
    abschnitte: [
      {
        titel: "I. Zulässigkeit einer AP (§ 193 AO)",
        punkte: [
          "Abs. 1: Gewerbetreibende, Freiberufler und Einkommensmillionäre dürfen geprüft werden.",
          "Abs. 2: Soweit Steuer einbehalten und abgeführt werden muss (z. B. angestellter Gärtner) oder wenn der Fall im FA nicht sachgerecht geprüft werden kann (AEAO § 193 Nr. 5).",
          "Bei Ehegatten müssen die Voraussetzungen je Ehegatte separat geprüft werden.",
          "Bei PersG muss diese die Voraussetzungen erfüllen; Mitprüfung von Gesellschaftern darf erfolgen, soweit z. B. SBV betroffen ist (§ 171 Abs. 4 AO aber nur bei der PersG). Die Prüfung könnte per eigener PA auf Gesellschafter erstreckt werden, wenn diese § 193 AO erfüllen (§ 194 Abs. 2 AO).",
          "Zufallsauswahlen sind zulässig; Anschlussprüfungen auch („Man ist nie sicher.“).",
          "Vorbehalt der Nachprüfung ist kein Muss (AEAO zu § 193 Nr. 1); § 173 Abs. 1 AO ist ja grundsätzlich möglich.",
        ],
      },
      {
        titel: "II. Umfang einer AP (§ 194 AO)",
        punkte: [
          "Grundsätzlich dürfen sämtliche Besteuerungsmerkmale mit überprüft werden, auch z. B. Einkünfte aus Kapitalvermögen oder Vermietung und Verpachtung.",
          "Bei Ehegatten aber keine übergreifende Prüfung des anderen, außer er erfüllt § 193 AO; dann dürften die beiden PA zusammengefasst werden (§ 122 Abs. 6 und 7 AO).",
          "Bei Mitunternehmerschaften kann SBV problemlos mitgeprüft werden (§ 194 Abs. 1 Satz 3 AO).",
          "Zeitlicher Umfang (§ 194 Abs. 1 Satz 2 AO, § 4 BpO) i. d. R. max. 3 zusammenhängende VZ; Erweiterung aufgrund von Feststellungen oder Anordnung zweiter oder dritter Anschlussprüfung mit jeweils neuer PA zulässig.",
        ],
      },
      {
        titel: "III. Die Prüfungsanordnung (§ 196 AO)",
        punkte: [
          "Schriftlich, sonst nichtig = unwirksam (§ 196 AO → § 125 Abs. 1 AO → § 124 Abs. 3 AO).",
          "Sonstiger VA je Prüfungsjahr und Steuerart; Prüfungsbeginn und Ort auch jeweils sonstiger VA (AEAO zu § 196 Nr. 1) – Beginn und Ort können auch mündlich angeordnet werden (§ 119 Abs. 2 AO); die Festlegung des Prüfers ist kein VA, daher nur per § 83 AO angreifbar (Befangenheitsantrag).",
          "„Keine AP ohne PA“ gilt vor allem für die Ablaufhemmung, siehe AEAO zu § 171 Nr. 3.2.1.",
          "Praxis: Prüfungsergebnisse ohne wirksame PA oder nach Aufhebung einer solchen unterliegen einem Verwertungsverbot. Hierzu müssten aber auch die AP-Bescheide angefochten werden (AEAO zu § 196 Nr. 2). Erfolgte die Festsetzung bisher unter Vorbehalt der Nachprüfung, greift kein Verwertungsverbot durch Rechtswidrigkeit der PA. Beachte zudem: Bis zum Abschluss der AP kann das FA eine fehlende Prüfungsanordnung einfach mit der Wirkung nachholen, dass die bereits begonnene Prüfung rechtmäßig fortgesetzt werden kann. Anfechtung einer formell fehlerhaften PA daher nur dann sinnvoll, wenn die reguläre Festsetzungsfrist zwischenzeitlich abläuft.",
          "Die PA braucht grundsätzlich keine über den Verweis auf § 193 Abs. 1 AO hinausgehende Begründung (AEAO zu § 196 Nr. 1), außer z. B. bei Erweiterung des Prüfungszeitraums (AEAO zu § 194 Nr. 4) oder bei Zweitprüfung für denselben Zeitraum – der Fehler ist aber heilbar nach § 126 Abs. 1 Nr. 2 AO.",
        ],
      },
      {
        titel: "IV. Bekanntgabe einer PA (§ 197 AO)",
        punkte: [
          "Mindestens 2 Wochen vor der AP, § 197 AO, § 5 Abs. 4 BpO (Ausnahme: Erweiterung des Prüfungszeitraums).",
          "Der Steuerpflichtige kann Verschiebung beantragen (§ 197 Abs. 2 AO) → § 171 Abs. 4 Satz 1 Alt. 2 AO.",
          "Ab Bekanntgabe: Sperrgrund für die Selbstanzeige, § 371 Abs. 2 Nr. 1 Buchst. a AO.",
        ],
      },
      {
        titel: "V. Prüfungsort (§ 200 AO)",
        punkte: [
          "Prüfungsort grundsätzlich Geschäftsräume (Plan A) oder Wohnung des Steuerpflichtigen (Plan B) oder alternativ im FA (Plan C), wenn jeweils geeignet; AP in den Kanzleiräumen nur als Plan D, wenn alles andere ungeeignet ist, § 200 Abs. 2 AO, § 6 BpO.",
          "Nicht entscheidend ist, ob der Steuerberater jederzeit zur Beantwortung von Buchhaltungsfragen zur Verfügung steht.",
          "Der Prüfer darf Geschäftsräume betreten und besichtigen, aber nicht durchsuchen, § 200 Abs. 3 Satz 2 AO. Der Steuerpflichtige muss bei der Prüfung mitwirken, § 200 Abs. 1 Satz 2 AO.",
        ],
      },
      {
        titel: "VI. Ende einer AP",
        punkte: [
          "Schlussbesprechung, wenn der Steuerpflichtige nicht verzichtet, § 201 Abs. 1 AO.",
          "Best Case: Nullmitteilung, § 202 Abs. 1 Satz 3 AO (kein VA).",
          "Bad Case: BP-Bericht (§ 202 Abs. 1 Satz 1 und 2 AO; kein VA = keine Bindungswirkung) und infolgedessen Änderungsbescheide.",
          "Der Ausgang ist maßgeblich auch für die Ablaufhemmung, § 171 Abs. 4 Satz 1 und 3 AO.",
          "Anfechtung der BP-Änderungsbescheide ist erfolgversprechend, wenn die Festsetzungsfrist abgelaufen war oder keine Korrekturnorm vorlag. Zudem ist eine Anfechtung erforderlich, wenn keine PA vorlag oder diese rechtswidrig war und ein Verwertungsverbot erlangt werden soll (AEAO zu § 196 Nr. 2).",
          "AP-Bescheide dürfen grundsätzlich ihrerseits nicht nach § 173 AO geändert werden (§ 173 Abs. 2 AO); der Prüfer selbst hat aber keine Probleme mit dieser Anfechtungsbeschränkung.",
        ],
      },
    ],
  },
  {
    id: "ao-keyfacts-vollstreckung",
    titel: "Keyfacts Vollstreckung",
    datei: "B-S25-AO-Keyfacts Vollstreckung-(Mirbach)-0525.pdf",
    themen: ["Vollstreckbarer VA", "Leistungsgebot", "Fälligkeit", "Schonfrist", "Pfändung", "Gewahrsamsvermutung", "Pfändungsverbote", "Drittwiderspruch"],
    normen: ["§§ 249–267 AO", "§ 251 Abs. 1 AO", "§ 254 AO", "§ 257 AO", "§ 259 AO", "§ 262 AO", "§ 263 AO", "§ 281 AO", "§ 286 AO", "§ 295 AO", "§ 309 AO", "§ 1362 BGB", "§ 739 ZPO", "§ 811 ZPO"],
    abschnitte: [
      {
        titel: "I. Rechtsgrundlagen",
        punkte: [
          "§§ 249 bis 267 AO = Allgemeine Voraussetzungen (!)",
          "§§ 281 bis 301 AO = Vollstreckung in bewegliche Sachen (!)",
          "§§ 309 bis 321 AO = Vollstreckung in Forderungen",
          "§§ 322 bis 326 AO = Vollstreckung in unbewegliches Vermögen",
          "§ 1362 BGB i. V. m. § 739 ZPO = Gewahrsamsvermutung bei Ehegatten (!)",
          "§ 811 ZPO = Pfändungsverbote (!)",
          "§ 262 AO i. V. m. §§ 769 ff. ZPO = Drittwiderspruchsklage",
          "VollstrA/VollzA (800a/800b) = Ergänzende innerdienstliche Anweisungen",
        ],
      },
      {
        titel: "II. Allgemeine Voraussetzungen für den Beginn der Vollstreckung",
        schritte: [
          { titel: "1. Vollziehbarer Verwaltungsakt (§ 249 Abs. 1 AO)", punkte: [
            "VA muss wirksam sein (Wiederholung: nicht nichtig + ordnungsgemäße Bekanntgabe).",
            "Forderung einer Geldleistung (z. B. Steuerfestsetzung, Verspätungszuschlag, Haftungsbescheid).",
          ] },
          { titel: "2. Vollstreckbarer Verwaltungsakt (§ 251 Abs. 1 AO)", punkte: [
            "Keine Aussetzung der Vollziehung (§ 361 AO, § 69 FGO).",
          ] },
          { titel: "3. Bekanntgabe des Leistungsgebots (§ 254 AO)", punkte: [
            "Grundsatz: Keine Vollstreckung ohne Leistungsgebot (LG).",
            "LG = Zahlungsaufforderung inkl. Fristsetzung („Bitte zahlen Sie bis zum …“).",
            "LG = eigenständiger sonstiger VA.",
            "LG wird i. d. R. mit dem vollstreckbaren VA verbunden, § 254 Abs. 1 S. 1 + 2 AO.",
            "Beim Erben trotz § 45 AO neues LG erforderlich, § 254 Abs. 1 S. 3 AO.",
            "Ausnahme: Leistungsgebot entbehrlich bei Steueranmeldungen (§ 254 Abs. 1 S. 4 AO) und bei Säumniszuschlägen und Zinsen (§ 254 Abs. 2 S. 1 AO).",
          ] },
          { titel: "4. Fälligkeit des Anspruchs", punkte: [
            "Fälligkeit gem. § 220 Abs. 1 AO, i. V. m. z. B. § 36 Abs. 4 EStG (= 1 Monat nach Bekanntgabe) oder § 18 Abs. 4 UStG (= 1 Monat nach Eingang der USt-Jahreserklärung oder 1 Monat nach Bekanntgabe eines abweichenden USt-Bescheides).",
          ] },
          { titel: "5. Ablauf der Vollstreckungsschonfrist (§ 254 Abs. 1 S. 1 AO)", punkte: [
            "Schonfrist = Bekanntgabe Leistungsgebot + 1 Woche.",
            "I. d. R. abgelaufen, weil die Zahlungsfrist länger ist (1 Monat > 1 Woche).",
            "Schonfrist entbehrlich, wenn das LG entbehrlich ist.",
          ] },
          { titel: "6. Optional: Mahnung (§ 259 AO)", punkte: [
            "Mahnung ist kein VA.",
            "Kein Anspruch auf Mahnung („Service der Finanzverwaltung“).",
          ] },
        ],
        hinweis:
          "Beachte: Fehlt auch nur eine der unter 1. bis 5. genannten Voraussetzungen, ist die einzelne Vollstreckungsmaßnahme rechtswidrig, aber trotzdem wirksam. Daher müsste innerhalb von 1 Monat nach der Pfändung (z. B. der Standuhr) hiergegen Einspruch eingelegt werden; § 356 Abs. 2 AO gilt hier nicht, da die Pfändung meist nicht schriftlich erfolgt. Auch ohne Belehrung nur 1 Monat Einspruchsfrist.",
      },
      {
        titel: "III. Einstellung/Beschränkung der Vollstreckung (§ 257 AO)",
        punkte: [
          "Hintergrund: Es muss möglich sein, die Vollstreckung irgendwie abzuwenden!",
          "§ 257 Abs. 1 Nr. 1: AdV erfolgreich beantragt (§ 361 AO, § 69 FGO).",
          "Nr. 2: Aufhebung/Änderung des VA erwirkt.",
          "Nr. 3: Anspruch erloschen, insbesondere durch Zahlung (§ 47 AO).",
          "Nr. 4: Stundung erwirkt (§ 222 AO).",
        ],
      },
      {
        titel: "IV. Durchführung der Vollstreckung",
        punkte: [
          "Art und Weise hängen von der Art des Vermögens ab.",
          "In bewegliche Wirtschaftsgüter wird durch Pfändung vollstreckt (§ 281 AO), d. h. Wegnahme oder Anbringung eines Pfandsiegels, § 286 AO (= jeweils sonstiger VA).",
          "Voraussetzung ist lediglich Alleingewahrsam, d. h. Besitz des Schuldners, so dass es auf die Eigentumsverhältnisse nicht ankommt. Ausnahme: evidentes Dritteigentum, z. B. Uhren in der Werkstatt des Uhrmachers.",
          "Bei gemeinsamer Wohnung von Ehegatten grundsätzlich kein Alleingewahrsam. Allerdings Gewahrsamsvermutung über § 263 AO → § 1362 BGB → § 739 ZPO. Rückausnahme § 1362 Abs. 2 BGB bei persönlichen Gebrauchsgegenständen, z. B. Halskette.",
          "Der tatsächliche Eigentümer kann Drittwiderspruch erheben, § 262 AO.",
          "In Geldforderungen wird i. d. R. durch Pfändungsverfügung vollstreckt (§ 309 AO).",
          "Vermeidung der Pfändung nur durch Zahlung (§ 292 AO).",
          "Pfändung unpfändbarer Gegenstände (§ 295 AO, § 811 ZPO) ist rechtswidrig, aber wirksam.",
        ],
      },
      {
        titel: "V. Fähnchenkette",
        punkte: [
          "Überprüfung der allgemeinen Vollstreckungsvoraussetzungen: § 249 Abs. 1 → § 251 Abs. 1 → § 361 → § 254 Abs. 1 → § 220 → § 259.",
          "Überprüfung der jeweiligen Vollstreckungsmaßnahme: § 281 Abs. 1 → § 286 → § 263 → § 295 → § 286 Abs. 2.",
          "Aufhebung bereits erfolgter Vollstreckung: § 257 Abs. 2.",
        ],
      },
    ],
  },
  {
    id: "ao-keyfacts-erhebung",
    titel: "Keyfacts Erhebungsverfahren",
    datei: "AO-Erhebung-2025 (Mirbach).pdf",
    themen: ["Entstehung", "Gesamtschuldnerschaft", "Abrechnungsbescheid", "Erstattungsanspruch", "Fälligkeit", "Verzinsung", "Säumniszuschlag", "Verspätungszuschlag"],
    normen: ["§ 38 AO", "§ 44 AO", "§ 45 AO", "§ 47 AO", "§ 37 Abs. 2 AO", "§ 218 AO", "§ 220 AO", "§ 233a AO", "§ 238 AO", "§ 239 AO", "§ 240 AO", "§ 152 AO"],
    fussnote:
      "„Erhebung“ bedeutet, dass entweder das FA einen Anspruch aus dem Steuerschuldverhältnis oder der Steuerpflichtige einen Anspruch auf Erstattung bzw. Vergütung eines solchen Anspruchs hat (Erhebung ≙ Geldfluss).",
    abschnitte: [
      {
        titel: "I. Entstehung von Ansprüchen, § 38 AO",
        punkte: [
          "… i. V. m. dem Einzelsteuergesetz, siehe die Verweise in AEAO zu § 38 Nr. 1.",
          "Wichtig insbesondere für die Anlaufhemmung des § 170 Abs. 2 Nr. 1 2. Alt. AO.",
        ],
      },
      {
        titel: "II. Steuerschuldnerschaft und Erlöschen von Ansprüchen",
        punkte: [
          "§ 44 AO: Gesamtschuldnerschaft möglich, jeder schuldet die volle Leistung (100 %) – z. B. zusammenveranlagte Ehegatten, Haftungs- und Steuerschuldner.",
          "§ 45 AO: Gesamtrechtsnachfolge (§ 1922 BGB) gilt auch steuerlich.",
          "§ 47 AO: Der Anspruch „erlischt“ insbesondere durch Zahlung.",
        ],
      },
      {
        titel: "III. Allgemeine Voraussetzungen für die Erhebung eines Steueranspruchs",
        punkte: [
          "Es genügt nicht, dass ein Steueranspruch lediglich entstanden ist (§ 38 AO).",
          "Vielmehr bedarf es wirksamer Festsetzung z. B. per Steuerbescheid (§ 218 Abs. 1 AO). Ausnahme: Säumniszuschläge i. S. d. § 240 AO brauchen nicht festgesetzt zu werden, es genügt gemäß § 218 Abs. 1 Satz 1 HS. 2 AO die Verwirklichung des gesetzlichen Tatbestandes (d. h. unpünktliche Zahlung). Zur Anfechtung von Säumniszuschlägen muss daher zuerst ein Abrechnungsbescheid (= sonstiger VA) nach § 218 Abs. 2 AO beantragt werden.",
        ],
      },
      {
        titel: "IV. Erstattungsansprüche (§ 37 Abs. 2 AO)",
        punkte: [
          "Ein Erstattungsanspruch i. S. d. § 37 Abs. 2 AO liegt grundsätzlich vor, wenn ein Steuerbetrag festgesetzt wurde, der den zutreffenden Betrag übersteigt (vgl. AEAO zu § 37 Nr. 2).",
          "Daneben kann sich ein Erstattungsanspruch auch infolge der Anrechnung von Steuervorauszahlungen oder Steuerabzugsbeträgen ergeben (§ 36 Abs. 2 Nr. 1 und 2 EStG). Die Anrechnungsverfügung ist eigenständiger sonstiger Verwaltungsakt. Bei Streitigkeiten über die erfolgte Anrechnung erlässt das FA i. d. R. ebenfalls zunächst einen Abrechnungsbescheid (§ 218 AO). Die Anrechnungsverfügung entfaltet für diesen jedoch Bindungswirkung (vgl. AEAO zu § 218 Nr. 3).",
          "Ein Erstattungsanspruch kann nur durchgesetzt werden, wenn ein entgegenstehender wirksamer Verwaltungsakt (z. B. ESt-Bescheid) aufgehoben oder geändert worden ist. Daher setzt die Durchsetzung voraus, dass der Steuerbescheid (per Einspruch oder Korrekturverfahren) beseitigt wird (vgl. AEAO zu § 37 Nr. 2).",
        ],
      },
      {
        titel: "V. Fälligkeit § 220 AO",
        punkte: [
          "Richtet sich grundsätzlich nach den Einzelsteuergesetzen, z. B. § 36 Abs. 1 EStG, § 31 Abs. 1 KStG, § 18 Abs. 1 Satz 4, Abs. 4 UStG.",
          "Zahlungsfrist grundsätzlich 1 Monat nach (ggf. verspäteter) Bekanntgabe (= grundsätzlich wie die Einspruchsfrist).",
          "Erstattungen sind hingegen grundsätzlich sofort mit Bekanntgabe fällig.",
          "USt-Voranmeldungen sind immer am 10. Tag nach Ablauf des Voranmeldungszeitraums fällig, § 18 Abs. 1 UStG.",
        ],
      },
      {
        titel: "VI. Verzinsung von Steuernachforderungen und -erstattungen § 233a AO",
        punkte: [
          "Zinssatz 1,8 % p. a. seit 1.1.2019, § 238 Abs. 1a AO (AdV-Zinsen etc. zurzeit noch 6 % p. a.).",
          "Beginn des Zinslaufs: nach Ablauf der Karenzzeit von 15 Monaten, d. h. ab 1.4. des Folge-Folgejahres nach Steuerentstehung, § 233a Abs. 2 Satz 1 AO (beachte AEAO zu § 233a Nr. 4.1).",
          "Ende des Zinslaufs: mit Wirksamkeit der Steuerfestsetzung, § 233a Abs. 2 Satz 3 AO; es wird also nur der Liquiditätsvorteil abgeschöpft, den der Steuerpflichtige durch die sehr späte Festsetzung hatte.",
          "Bemessungsgrundlage: grundsätzlich die Abschlusszahlung bzw. Erstattung laut Bescheid, § 233a Abs. 3 AO; allerdings abgerundet auf den nächsten durch 50 € teilbaren Betrag, § 238 Abs. 2 AO.",
          "Änderung der Steuerfestsetzung = Änderung der Zinsfestsetzung, § 233a Abs. 5 AO.",
          "Zinsbescheid = gleichgestellter VA, § 239 Abs. 1 AO.",
        ],
      },
      {
        titel: "VII. Säumniszuschläge § 240 AO",
        punkte: [
          "Fallen bei Nichtzahlung zum Fälligkeitszeitpunkt für jeden angefangenen Monat an, haben also Strafcharakter; grundsätzlich ist dann auch Vollstreckung möglich, § 254 Abs. 1 AO.",
          "Nicht auf steuerliche Nebenleistungen, § 240 Abs. 2 AO.",
          "Schonfrist von 3 Tagen, § 240 Abs. 3 AO; bei SEPA nie Säumnis, § 224 Abs. 2 Nr. 3 AO.",
          "Säumniszuschläge bleiben auch nach Änderung der Festsetzung bestehen, § 240 Abs. 1 Satz 4 AO.",
          "Zur Einspruchsmöglichkeit siehe Abschnitt III (Abrechnungsbescheid).",
        ],
      },
      {
        titel: "VIII. Verspätungszuschlag § 152 AO",
        punkte: [
          "§ 152 Abs. 1 AO: verspätete Abgabe einer Steuererklärung (§ 149 Abs. 1 AO, AEAO § 149 Nr. 1).",
          "Wenn die Abgabe verspätet ist: prüfe, ob die Verspätung geringer ist als der Zeitraum des § 152 Abs. 2 AO (s. AEAO zu § 152 Nr. 1) – nur dann bestünde nach § 152 Abs. 1 AO Ermessensspielraum, so dass insbesondere bei erstmaliger Verspätung von einem Verspätungszuschlag abgesehen werden kann.",
          "Wurde die Grenze des § 152 Abs. 2 AO überschritten, muss ein Verspätungszuschlag festgesetzt werden, wenn keine Ausnahme nach § 152 Abs. 3 Nr. 2 und 3 AO (Nullfall, Erstattungsfall) vorliegt.",
          "Höhe § 152 Abs. 5 Satz 2, Abs. 6 AO: je angefangenem Monat 0,25 % der Nachzahlung, aber mindestens 25 €/Monat; bei Feststellungserklärungen pauschal 25 € je angefangenem Monat.",
        ],
      },
    ],
  },
];

export default aoKeyfacts;
