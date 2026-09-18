/* Amtliche Prüfungsaufgaben Verfahrensrecht und andere Steuerrechtsgebiete (K1).

   Die Original-Aufgabentexte des dritten Prüfungstages der
   Steuerberaterprüfung im amtlichen Wortlaut – ohne Bearbeitung, ohne
   Fortschreibung auf einen neueren Rechtsstand und mit den Jahreszahlen des
   jeweiligen Prüfungsjahrgangs.

   Wichtig und ausdrücklich: Die Quelle enthält zu diesen Klausuren KEINE
   Lösung. Sie ist die reine Aufgabenstellung. Der Lösungsabschnitt jedes
   Eintrags sagt das offen und erfindet nichts; er nennt stattdessen, was die
   Aufgabenstellung selbst vorgibt, und verweist auf die Stellen im Campus, an
   denen dieselben Rechtsfragen mit Musterlösung behandelt sind. Die fehlenden
   Musterlösungen sind in docs/offene-quellen.md, Abschnitt A, vermerkt.

   Die Klausur besteht aus drei Teilen: Abgabenordnung und Finanzgerichts-
   ordnung, Umsatzsteuer und Erbschaftsteuer. Das Feld `fach` ordnet jeden
   Eintrag dem passenden Campus zu ("ao", "ust", "erbst"); jeder Campus zeigt
   nur seine eigenen Einträge.

   Personenbezogene Wasserzeichen des Quell-PDFs sind nicht übernommen.
   Blocktypen wie bei den übrigen Klausurdatensätzen: text | titel | tabelle. */

export const k1PruefungsklausurenQuelle = {
  reihe: "Steuerberaterprüfung · Prüfungsaufgaben aus dem Verfahrensrecht und anderen Steuerrechtsgebieten · amtlicher Wortlaut",
  stand: "Prüfungsjahrgang 2021/2022 · Rechtsstand des Prüfungstages",
  verfasser: "Amtliche Prüfungsaufgabe der Steuerberaterprüfung – ohne Musterlösung",
  didaktik: [
    "Der dritte Prüfungstag dauert sechs Stunden und besteht aus Abgabenordnung und Finanzgerichtsordnung, Umsatzsteuer und Erbschaftsteuer. Der Verfahrensrechtsteil unterscheidet sich von allen anderen Klausuren der Prüfung dadurch, dass er kein Ergebnis in Euro verlangt, sondern ein Rechtsgutachten: Die Aufgabenstellung sagt ausdrücklich „in einem ausführlichen Rechtsgutachten“ und „Gehen Sie dabei auf alle im Sachverhalt enthaltenen verfahrensrechtlichen Probleme angemessen ein“.",
    "Zu diesen Aufgabentexten liegt keine Musterlösung vor. Gerade beim Verfahrensrecht ist das weniger hinderlich, als es klingt: Der Sachverhalt legt die Prüfungspunkte selbst offen, weil er sie in den Schriftsätzen der Beteiligten durchnummeriert. Wer die sechs Einwendungen des Steuerberaters der Reihe nach abarbeitet, hat die Gliederung der Klausur bereits vor sich – und muss nur noch erkennen, welche davon durchgreifen und welche ins Leere gehen.",
    "Die Jahreszahlen sind die des Originaljahrgangs. Der Verfahrensrechtsteil spielt im Jahr 2021 und lebt von Fristen auf den Tag genau; die Aufgabe legt dafür einen Jahreskalender 2021 mit den bayerischen Feiertagen bei. Wer sie heute löst, muss prüfen, was sich seither geändert hat – insbesondere bei der Bekanntgabefiktion des § 122 Abs. 2 AO und bei den Vorschriften über die Außenprüfung, die durch das DAC-7-Umsetzungsgesetz neu gefasst worden sind.",
  ],
};

const KEINE_LOESUNG = "Die Quelle ist die amtliche Prüfungsaufgabe im Wortlaut und enthält keine Lösung. Es wird hier bewusst keine erfunden: Jede Würdigung, die an dieser Stelle stünde, wäre eine eigene Rechtsauffassung und keine Musterlösung. Die fehlenden Lösungen sind in docs/offene-quellen.md, Abschnitt A, vermerkt.";

export const k1Pruefungsklausuren = [
  {
    id: "k1-pk-2021-ao-bayer",
    fach: "ao",
    block: "amtlich",
    blockLabel: "Steuerberaterprüfung · amtliche Prüfungsaufgabe",
    nummer: 1,
    jahrgang: "2021/2022",
    teil: "I",
    wertung: "ohne Punkteangabe in der Quelle",
    title: "Teil I – Dr. Bruno Bayer (Prüfung 2021/2022): zwei Prüfungsanordnungen, ein Einspruch auf einem Werbe-Flyer und eine Zustellung drei Tage vor dem Ausfertigungsdatum",
    thema: "Die Verfahrensrechtsklausur in Reinform: kein einziger Betrag ist auszurechnen, dafür sind drei Rechtsgutachten zu schreiben. Eine Betriebsprüferin gibt am 08.06.2021 eine Prüfungsanordnung an den Arzt selbst zur Post – ohne zu wissen, dass fünf Tage zuvor eine Empfangsvollmacht für den Steuerberater eingegangen, aber noch nicht in den elektronischen Speicher übertragen worden war. Am 29.07. geht ein handschriftlicher, undatierter und nicht unterschriebener „Einspruch“ auf der Rückseite eines Arznei­mittel-Werbeflyers ein. Zur Sicherheit erlässt die Prüferin am 02.08. eine zweite Anordnung an den Steuerberater, trägt als Datum den voraussichtlichen Zustellungstermin 09.08. ein – und der Postbote stellt bereits am 06.08. zu. Am 13.09. legt der Steuerberater per E-Mail Einspruch mit sechs durchnummerierten Einwendungen ein. Und im Keller der geschiedenen Ehefrau liegen die Unterlagen des Jahres 2017",
    rechtsstand: "Rechtsstand des Prüfungsjahrgangs 2021/2022 · Jahr 2021, Prüfungszeitraum 2017–2019",
    quelle: "Steuerberaterprüfung 2021/2022, Prüfungsaufgaben aus dem Verfahrensrecht und anderen Steuerrechtsgebieten, Teil I: Abgabenordnung und Finanzgerichtsordnung · amtlicher Aufgabentext, Bearbeitungszeit 6 Stunden",
    normen: [
      "§ 193 Abs. 1 AO", "§ 356 Abs. 1 AO", "§ 3 BpO",
    ],
    themen: ["Amtliche Prüfungsaufgabe", "Ohne Musterlösung", "Prüfungsanordnung", "Bekanntgabe", "Empfangsvollmacht", "Förmliche Zustellung", "Einspruch", "Rechtsbehelfsbelehrung", "Ermessen", "Auskunfts- und Vorlageverweigerungsrecht"],
    sachverhalt: [
      { typ: "titel", text: "Steuerberaterprüfung 2021/2022 · Prüfungsaufgaben aus dem Verfahrensrecht und anderen Steuerrechtsgebieten · Teil I: Abgabenordnung und Finanzgerichtsordnung" },
      { text: "Bearbeitungszeit: 6 Stunden. Hilfsmittel: Die zugelassenen Hilfsmittel ergeben sich aus den gleich lautenden Erlassen der obersten Finanzbehörden der Länder. Vor der Bearbeitung sind Sachverhalt und Aufgaben vollständig zu lesen." },
      { text: "Dr. Bruno Bayer ist Orthopäde. Er führt seit 1990 seine Praxis für Orthopädie, spezialisiert auf Schulter-, Hüft- und Knieoperationen, in Neu-Ulm, Schwaben-Straße 139 (Finanzamtsbezirk Neu-Ulm). Er selbst wohnt in Ulm, Küfner-Gasse 45 (Finanzamtsbezirk Ulm), in einem ihm gehörenden Einfamilienhaus. Nach seiner Scheidung im Jahr 2019 hat er die Immobilie erworben und ist dort mit seiner neuen Lebensgefährtin eingezogen." },
      { text: "Mit seiner Praxis erzielte Dr. Bayer in den Jahren bis einschließlich 2019 einen durchschnittlichen Gewinn von 500.000 €. Er ist als Mittelbetrieb i. S. d. § 3 BpO eingestuft. Im Jahr 2021 stand er mit seiner Praxis auf dem Prüfungsplan der Betriebsprüfungsstelle des Finanzamts Neu-Ulm." },
      { text: "Die junge Betriebsprüferin Katharina Teuer wird mit der Betriebsprüfung beauftragt. Sie gibt am 08.06.2021 folgende Prüfungsanordnung zur Post (Auszug):" },
      { typ: "tabelle", spalten: ["Feld", "Inhalt"], zeilen: [
        ["Absender", "Finanzamt Neu-Ulm, Nelsonallee 5, 89231 Neu-Ulm"],
        ["Empfänger", "An Herrn Dr. Bruno Bayer, Schwaben-Straße 139, 89231 Neu-Ulm"],
        ["Identifikationsnummer", "9847143078"],
        ["Aktenzeichen", "151/178/45239"],
        ["Durchwahl / Bearbeiterin", "0731/7045-43 · Frau Teuer"],
        ["Datum", "08.06.2021"],
        ["ABNr.", "23/21"],
      ] },
      { text: "„Prüfungsanordnung – Anordnung einer Außenprüfung. Anlagen: 1 Rechte und Pflichten bei der Außenprüfung mit Rechtsbehelfsbelehrung. Sehr geehrter Herr Dr. Bruno Bayer, bei Ihnen wird eine Außenprüfung gem. § 193 Abs. 1 AO angeordnet. Die Außenprüfung erstreckt sich auf Zeitraum Gewinnfeststellungen 2017-2019. Mit der Prüfung ist Frau Katharina Teuer vom Finanzamt Neu-Ulm beauftragt. Die Außenprüfung beginnt am 27.09.2021 um 8:30 Uhr. Als Anlagen erhalten Sie eine Aufstellung Ihrer wesentlichen Pflichten und Rechte bei einer Außenprüfung. (Auf den Abdruck wird hier verzichtet.) Mit freundlichen Grüßen, Martin Huber (SL Bp)“ Es war die unter „Bearbeitungshinweise“ abgedruckte Rechtsbehelfsbelehrung beigefügt." },
      { text: "Katharina Teuer wusste zu diesem Zeitpunkt nicht, dass in der Veranlagungsstelle des für Dr. Bayer zuständigen Bearbeiters am 03.06.2021 eine von Dr. Bayer unterzeichnete Vollmachtsurkunde eingegangen war, in der Steuerberater Horst Mannteufel eine Vollmacht für alle steuerlichen Angelegenheiten von Dr. Bayer und zusätzlich eine ausdrückliche Empfangsvollmacht für alle ihn betreffenden finanzamtlichen Maßnahmen erteilt worden waren. Diese Vollmachten waren noch nicht in den elektronischen Datenspeicher übertragen worden, so dass die Betriebsprüfungsstelle dort nichts finden konnte." },
      { text: "Am 29.07.2021 ging in der Posteingangsstelle des Finanzamts Neu-Ulm ein Kuvert mit einem Werbe-Flyer der Arzneimittelfirma „Union-Pharma“ ein. Auf der Rückseite des Flyers steht mit Kugelschreiber:" },
      { text: "„Dr. Bruno Bayer, Schwaben-Straße 139, 89231 Neu-Ulm, StNr. 151/178/45239 – Einspruch, meine Damen und Herren, und zwar energischen Einspruch. Die bei mir geplante Betriebsprüfung ist ja wohl ein schlechter Scherz. Was wollen Sie denn prüfen? Ich bin 69 Jahre alt, Ende 2021 schließe ich meine Praxis, was wollen Sie denn da holen? Meine Scheidung hat mich viel Geld gekostet, mein Vermögen ist jetzt bei meiner Geschiedenen, ich habe fast nichts mehr. Das riecht nach Schikane, wahrscheinlich sind mir die Beamtenkrämerseelen neidisch. Ich halte von der ganzen Sache nichts, ich habe Ihren ‚Prüfungszettel‘ gleich direkt weggeworfen. Mich interessiert diese Steuerzeug nicht, ich bin Arzt und kein Buchhalter. Sie sollten sich doch eh an meinen Steuerberater halten, warum wohl habe ich dem eine Vollmacht erteilt und Ihnen mitgeteilt, dass Sie alles an den senden sollen?“" },
      { text: "Das Schreiben enthält keine Datumsangabe und ist auch nicht unterschrieben." },
      { text: "Dieses Schreiben wurde von der Veranlagungsstelle an die Betriebsprüferin Katharina Teuer weitergeleitet. Sie rief den Fall im elektronischen Datenspeicher auf und sah daraufhin die mittlerweile eingescannte, oben angesprochene Vollmacht. Sie war sich nicht sicher, ob die Bekanntgabe der Prüfungsanordnung vom 08.06.2021 in Ordnung war, und druckte zur Sicherheit am 02.08.2021 eine neue Prüfungsanordnung aus (Auszug):" },
      { typ: "tabelle", spalten: ["Feld", "Inhalt"], zeilen: [
        ["Absender", "Finanzamt Neu-Ulm, Nelsonallee 5, 89231 Neu-Ulm"],
        ["Empfänger", "„An Herrn Stb. Horst Mannteufel, Günten-Straße 7, 89231 Neu-Ulm – Für Ihren Mandanten Dr. Bruno Bayer, Schwaben-Straße 139, Neu-Ulm“"],
        ["Identifikationsnummer", "9847143078"],
        ["Aktenzeichen", "151/178/45239"],
        ["Durchwahl / Bearbeiterin", "0731/7045-43 · Frau Teuer"],
        ["Datum", "09.08.2021"],
        ["ABNr.", "23/21"],
      ] },
      { text: "Der weitere Inhalt blieb gegenüber der Prüfungsanordnung vom 08.06.2021 unverändert. Diese Prüfungsanordnung ließ Frau Teuer an Steuerberater Mannteufel förmlich mit Postzustellungsurkunde zustellen. Deshalb trug sie als Datum der Erstellung der Prüfungsanordnung nicht das Ausfertigungsdatum ein, sondern das vom Finanzamt als voraussichtlichen Zustellungstermin berechnete Datum vom 09.08.2021." },
      { text: "Der Postbedienstete führte bereits am 06.08.2021 um 10:00 Uhr eine formal ordnungsgemäße Zustellung durch Übergabe an eine Kanzleikraft von Steuerberater Mannteufel aus. Die formgerecht ausgefüllte Zustellungsurkunde wurde an das Finanzamt Neu-Ulm zurückgesandt und dort in der BP-Akte abgelegt." },
      { text: "Am 13.09.2021 ging eine E-Mail von Steuerberater Mannteufel beim Finanzamt Neu-Ulm mit folgender eingescannter Anlage ein: „An das FA Neu-Ulm/Betriebsprüfung. Sehr geehrte Damen und Herren, namens meines Mandanten Dr. Bruno Bayer lege ich Einspruch ein. Begründung:“" },
      { text: "1. Eine Außenprüfung ist immer eine Ermessenssache. Sie haben dieses Ermessen nicht pflichtgemäß ausgeübt, denn ansonsten wäre für Sie klar gewesen, dass bei dem 69-jährigen Dr. Bruno Bayer eine Außenprüfung nie ermessensgerecht sein kann, sie scheitert am Übermaßverbot, wenn sie nicht sogar reine Willkür darstellt." },
      { text: "2. Hätten Sie sich die Mühe gemacht und Ihre Ermessensentscheidung ausreichend begründet, wie es Ihre Pflicht gewesen wäre, dann wäre Ihnen aufgefallen, dass keine Gründe für eine Außenprüfung existieren. Allein schon wegen des Fehlens der die Entscheidung tragenden Begründung ist die Anordnung rechtswidrig und muss aufgehoben werden." },
      { text: "3. Mein Mandant steht kurz vor der Betriebsaufgabe, seine Einkünfte sind mittlerweile gering, da er aufgrund seiner Sehbehinderung durch die Katarakt-Erkrankung seiner Augen (Grauer Star) nicht mehr operieren kann. Mein Mandant war auch nie steuerlich auffällig. Barzahlungen kommen bei seinen in Krankenkassen versicherten Patienten nicht vor. Er ist der sprichwörtliche gläserne Steuerpflichtige." },
      { text: "4. Vor allem ist die Zustellung der Prüfungsanordnung sowieso unwirksam, denn diese Art der Bekanntgabe ist nur zulässig, wenn das gesetzlich vorgeschrieben ist. Damit hat keine Einspruchsfrist begonnen, da es schon an der wirksamen Bekanntgabe mangelt. Außerdem ist Ihre Rechtsbehelfsbelehrung unvollständig, denn von einer Zustellung steht da nichts. Damit gilt gem. § 356 Abs. 1 AO sowieso keine Einspruchsfrist. Sie müssen mir auch erklären, wie eine Anordnung mit dem Ausfertigungsdatum 09.08.2021 bereits am 06.08.2021 zugestellt werden kann, die hat sich ja selbst zeitlich überholt!" },
      { text: "5. Alle genannten Feststellungsbescheide sind ohne Vorbehalt der Nachprüfung ergangen. Damit können Sie schon gar nichts ändern, schließlich sind die Bescheide rechtskräftig. Vor allem ist der Gewinnfeststellungsbescheid 2020 auch schon bestandskräftig geworden, Sie dürfen damit nur die Gewinne 2018 – 2020 prüfen, nicht aber den Gewinn 2017." },
      { text: "6. Die Unterlagen für 2017 können sowieso nicht mehr bei meinem Mandanten eingesehen werden. Diese Unterlagen befinden sich bei der geschiedenen Ehefrau, Barbara Bayer, diese weigert sich, sie herauszugeben. Vielleicht gibt sie diese ja an das Finanzamt heraus, mein Mandant sieht auf jeden Fall für sich keine Chance. Mit freundlichen Grüßen, Dr. Mannteufel" },
      { text: "Daraufhin fordert das Finanzamt Dr. Mannteufel auf, seinen Einspruch zurückzunehmen, da dieser aus mehreren Gründen unzulässig sei, vor allem aber, weil die Einspruchsfrist versäumt worden sei." },
      { text: "Trotz des unerledigten Einspruchsverfahrens begann die Betriebsprüferin am 27.09.2021 in den Praxisräumen von Dr. Bayer tatsächliche Prüfungshandlungen. Sie forderte Dr. Bayer auf, ihr die Geschäftsunterlagen für die zu prüfenden Jahre und die Kontoauszugshefte der betrieblichen Girokonten auszuhändigen." },
      { text: "Dr. Bayer erklärte ihr, dass es ihm unmöglich sei, die Unterlagen für 2017 zu übergeben, diese befänden sich noch im Keller seiner ehemaligen Ehewohnung, zu der ihm seine geschiedene Ehefrau Barbara Bayer den Zutritt verweigere. Er sehe keine Chance, an die Unterlagen zu gelangen." },
      { text: "Frau Teuer überlegt, ob sie von Frau Barbara Bayer die Herausgabe der Unterlagen fordern könne und ob ihr nicht vielleicht ein Auskunftsverweigerungsrecht zustehe. Die Eheleute Bayer sind zur Einkommensteuer 2017 zum letzten Mal zusammenveranlagt worden, die Scheidung erfolgte im Juni 2019." },
    ],
    aufgabe: [
      { text: "Aufgabe 1: Prüfen Sie in einem ausführlichen Rechtsgutachten, ob gegen die von Frau Teuer gegenüber Dr. Bruno Bayer veranlasste/n „Prüfungsanordnung/en“ durch den am 29.07.2021 im Finanzamt Neu-Ulm eingegangenen „Flyer“ und durch die am 13.09.2021 eingegangene E-Mail ein zulässiger Einspruch oder zulässige Einsprüche eingelegt worden sind. Gehen Sie dabei auf alle im Sachverhalt enthaltenen verfahrensrechtlichen Probleme angemessen ein." },
      { text: "Aufgabe 2: Überprüfen Sie unabhängig von der in Frage 1 behandelten Prüfung der Zulässigkeit der Einsprüche die Erfolgsaussichten der gegen die „Prüfungsanordnung“ vorgebrachten Einwendungen in einem umfassenden Rechtsgutachten." },
      { text: "Aufgabe 3: Klären Sie, ob Frau Teuer von Barbara Bayer verlangen kann, die Geschäftsunterlagen 2017 von Dr. Bayer herauszugeben, und ob sie Frau Bayer wegen eines Urkundenvorlageverweigerungsrechts bzgl. der Geschäftsunterlagen 2017 ihres mittlerweile von ihr geschiedenen Ehemannes belehren muss. Begründen Sie bitte Ihre Ergebnisse ausführlich." },
      { typ: "titel", text: "Bearbeitungshinweise: Die beigefügte Rechtsbehelfsbelehrung" },
      { text: "„Rechtsbehelfsbelehrung – Die Prüfungsanordnung kann mit dem Rechtsbehelf des Einspruchs angefochten werden. Der Einspruch ist bei dem vorbezeichneten Finanzamt oder bei der angegebenen Außenstelle schriftlich einzureichen, diesem/dieser elektronisch zu übermitteln oder zur Niederschrift zu erklären." },
      { text: "Ein Einspruch ist jedoch ausgeschlossen, soweit dieser Bescheid einen Verwaltungsakt ändert oder ersetzt, gegen den ein zulässiger Einspruch oder (nach einem zulässigen Einspruch) eine zulässige Klage, Revision oder Nichtzulassungsbeschwerde anhängig ist. In diesem Fall wird der neue Verwaltungsakt Gegenstand des Rechtsbehelfsverfahrens." },
      { text: "Die Frist für die Einlegung eines Rechtsbehelfs beträgt einen Monat. Sie beginnt mit Ablauf des Tages, an dem Ihnen dieser Bescheid bekannt gegeben worden ist. Bei Zusendung durch einfachen Brief gilt die Bekanntgabe mit dem dritten Tag nach Aufgabe zur Post als bewirkt, es sei denn, dass der Bescheid zu einem späteren Zeitpunkt zugegangen ist." },
      { text: "Zu Ihrer Information: Wenn Sie beabsichtigen, einen Einspruch elektronisch einzulegen, wird empfohlen, den Einspruch über „MeinElster“ (www.elster.de) zu übermitteln.“" },
      { typ: "titel", text: "Bearbeitungshinweise: Kalendarium 2021" },
      { text: "Der Aufgabe ist ein vollständiger Jahreskalender 2021 beigefügt. Die für den Sachverhalt maßgeblichen Tage – aus dem Kalender der Quelle entnommen und unabhängig geprüft – sind:" },
      { typ: "tabelle", spalten: ["Datum", "Wochentag", "Vorgang"], zeilen: [
        ["03.06.2021", "Donnerstag", "Eingang der Vollmachtsurkunde in der Veranlagungsstelle"],
        ["08.06.2021", "Dienstag", "Aufgabe der ersten Prüfungsanordnung zur Post"],
        ["29.07.2021", "Donnerstag", "Eingang des „Flyers“ in der Posteingangsstelle"],
        ["02.08.2021", "Montag", "Ausdruck der zweiten Prüfungsanordnung"],
        ["06.08.2021", "Freitag", "Tatsächliche Zustellung an die Kanzleikraft, 10:00 Uhr"],
        ["09.08.2021", "Montag", "In der zweiten Prüfungsanordnung eingetragenes Datum"],
        ["13.09.2021", "Montag", "Eingang der E-Mail des Steuerberaters"],
        ["27.09.2021", "Montag", "Vorgesehener und tatsächlicher Prüfungsbeginn, 8:30 Uhr"],
      ] },
      { text: "Die im Kalendarium aufgeführten Feiertage: 01.01.2021 Neujahrstag, 06.01.2021 Heilige 3 Könige, 02.04.2021 Karfreitag, 05.04.2021 Ostermontag, 01.05.2021 Tag der Arbeit, 13.05.2021 Christi Himmelfahrt, 24.05.2021 Pfingstmontag, 03.06.2021 Fronleichnam, 15.08.2021 Mariä Himmelfahrt, 03.10.2021 Tag der deutschen Einheit, 01.11.2021 Allerheiligen, 25.12.2021 1. Weihnachtsfeiertag, 26.12.2021 2. Weihnachtsfeiertag." },
      { text: "(Redaktioneller Hinweis: Das Kalendarium der Quelle ist eine zwölfspaltige Tagesübersicht; der Textauszug des PDF gibt sie an einer Stelle fehlerhaft wieder – im Oktober steht „26 So 25 Di“ statt „26 Di“. Die oben aufgeführten Wochentage sind deshalb einzeln gegengeprüft. Der 03.06.2021 ist zugleich Fronleichnam und damit in Bayern ein gesetzlicher Feiertag.)" },
    ],
    loesung: [
      { typ: "titel", text: "Keine Musterlösung in der Quelle" },
      { text: KEINE_LOESUNG },
      { text: "Was die Aufgabenstellung selbst vorgibt: Drei Gutachten, und zwar in dieser Reihenfolge und ausdrücklich voneinander unabhängig. Aufgabe 1 betrifft allein die **Zulässigkeit** – und zwar, wie die Formulierung „Prüfungsanordnung/en“ und „ein zulässiger Einspruch oder zulässige Einsprüche“ zeigt, für jede Anordnung und jedes Schreiben gesondert. Aufgabe 2 ist ausdrücklich „unabhängig von der in Frage 1 behandelten Prüfung der Zulässigkeit“ zu lösen, betrifft also die Begründetheit, auch wenn der Einspruch unzulässig sein sollte. Aufgabe 3 betrifft eine dritte Person, die am Verfahren nicht beteiligt ist." },
      { text: "Die Gliederung der Aufgabe 2 gibt der Sachverhalt selbst vor: Der Steuerberater nummeriert seine Einwendungen von 1 bis 6, und diese sechs Punkte sind der Prüfungsstoff – Ermessensausübung und Übermaßverbot, Begründungspflicht, persönliche Verhältnisse des Steuerpflichtigen, Zustellung und Rechtsbehelfsbelehrung, Bestandskraft und Prüfungszeitraum sowie die Unterlagen im Keller der geschiedenen Ehefrau. Der Aufgabentext verlangt in Aufgabe 1 zusätzlich ausdrücklich, „auf alle im Sachverhalt enthaltenen verfahrensrechtlichen Probleme angemessen“ einzugehen." },
      { text: "Mehrere Sachverhaltsangaben sind erkennbar gesetzte Weichen und keine Ausschmückung: dass die Empfangsvollmacht am 03.06. eingegangen, aber noch nicht im elektronischen Speicher erfasst war; dass der Flyer weder Datum noch Unterschrift trägt; dass die zweite Anordnung ein Datum trägt, das drei Tage nach der tatsächlichen Zustellung liegt; dass die Rechtsbehelfsbelehrung nur die Bekanntgabefiktion für einfache Briefe nennt; dass die Einwendung Nr. 5 von einem „Gewinnfeststellungsbescheid 2020“ spricht, während die Prüfungsanordnung die Jahre 2017 bis 2019 nennt; und dass die Eheleute zur Einkommensteuer 2017 zum letzten Mal zusammenveranlagt wurden." },
      { text: "Zeitliche Einordnung: Der Fall spielt im Jahr 2021. Wer ihn nach heutigem Rechtsstand löst, muss prüfen, was sich seither geändert hat – insbesondere die Bekanntgabefiktion des § 122 Abs. 2 AO und die durch das DAC-7-Umsetzungsgesetz neu gefassten Vorschriften über die Außenprüfung. Die Aufgabe ist deshalb hier unverändert mit den Jahreszahlen und dem Kalendarium des Prüfungsjahrgangs wiedergegeben." },
      { text: "Parallelfälle mit vollständiger Musterlösung im Campus: Bekanntgabe und Zustellung von Verwaltungsakten, Empfangsvollmacht, Form und Frist des Einspruchs sowie die Folgen einer unrichtigen Rechtsbehelfsbelehrung nach § 356 AO behandelt der AO-Campus (Klausur 1) in eigenen Einheiten; die Außenprüfung einschließlich Prüfungsanordnung, Prüfungszeitraum und Ablaufhemmung steht dort ebenfalls, und die Originalklausuren der Jahrgänge 2011 bis 2015 enthalten mehrere vollständig ausformulierte Gutachten zu Einspruchsverfahren." },
    ],
  },
];

export default k1Pruefungsklausuren;
