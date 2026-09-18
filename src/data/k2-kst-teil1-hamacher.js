/* KSt Teil I – Allgemeines und verdeckte Einlage (K2), Hamacher, Stand 04/2026.

   Wortlautgetreue Übernahme des Lehrgangsskripts „Körperschaftsteuer, Teil I:
   Allgemeines und verdeckte Einlage (2026)“ aus den Lehrgangsunterlagen. Das
   Skript hat vier Kapitel: 1 Steuerpflicht, 2 Einkommensermittlung, 3 verdeckte
   Einlage und 4 Tarif. Gegliedert wird hier nach den Abschnitten der Quelle;
   jeder Abschnitt steht als eigener Eintrag.

   STAND DER ÜBERNAHME: Eingepflegt sind bislang die Abschnitte 1.1 bis 1.4
   (Steuerpflicht von der unbeschränkten Steuerpflicht bis zum Ende der
   Steuerpflicht). Die übrigen Abschnitte folgen nach demselben Verfahren; der
   Campus weist den Stand aus.

   Die Fußnoten der Quelle stehen im PDF am Seitenfuß und werden von der
   Textextraktion zwischen die Absätze gemischt. Sie sind hier nicht als eigene
   Blöcke übernommen; die Fundstellen, auf die sie verweisen, stehen im Feld
   `normen` des jeweiligen Abschnitts. Die im PDF durch den Blocksatz
   entstandenen Trennstriche ("Körperschaft- steuer") sind zusammengeführt.

   Blocktypen wie in den übrigen Beständen: text | titel | tabelle.

   Personenbezogene Wasserzeichen des Quell-PDFs sind nicht übernommen. */

export const kstTeil1Quelle = {
  reihe: "Körperschaftsteuer · Teil I: Allgemeines und verdeckte Einlage (2026) · Hamacher",
  stand: "Stand 04/2026",
  verfasser: "Hamacher",
  didaktik: [
    "Das Skript beginnt mit dem Satz, der die ganze Systematik trägt: Die Körperschaftsteuer ist vereinfachend die „Einkommensteuer der Kapitalgesellschaften“. Das KStG enthält nur die Spezialregelungen; alles Übrige holt § 8 Abs. 1 Satz 1 KStG aus dem EStG. Wer das verinnerlicht hat, sucht in der Klausur an der richtigen Stelle.",
    "Der Aufbau folgt dem des EStG: zuerst die persönliche Steuerpflicht. Das KStG kennt dafür zwei Arten – die unbeschränkte nach § 1 KStG, die schon an einem einzigen inländischen Anknüpfungspunkt hängt (Sitz **oder** Geschäftsleitung), und die beschränkte nach § 2 KStG, die das Skript in zwei Spielarten zerlegt: die klassische des § 2 Nr. 1 KStG für Steuerausländer und die besondere des § 2 Nr. 2 KStG, die in der Praxis fast nur juristische Personen des öffentlichen Rechts mit ihren Kapitalerträgen trifft.",
    "Besonders prüfungsnah ist der Abschnitt zum Beginn der Steuerpflicht, weil er drei Zeitspannen unterscheidet, die auseinanderzuhalten sind: Vorgründungsgesellschaft (keine Körperschaftsteuerpflicht, Einkünfte werden den Gesellschaftern zugerechnet), Vorgesellschaft (Körperschaftsteuerpflicht beginnt, sofern die Eintragung später tatsächlich erfolgt) und die eingetragene Kapitalgesellschaft. Das Beispiel der Baumaschinen-GmbH führt alle drei an einem einzigen Sachverhalt vor.",
  ],
};

const VERFASSER = "Hamacher";
const RECHTSSTAND = "Stand 04/2026";

export const kstTeil1 = [
  {
    id: "kst-t1-01",
    kapitel: "1",
    abschnittNr: "1.1",
    title: "1.1 Unbeschränkte Steuerpflicht",
    thema: "Die Anknüpfung an Sitz oder Geschäftsleitung – und warum schon einer der beiden inländischen Orte genügt. Dazu die abschließende Aufzählung der körperschaftsteuerpflichtigen Gebilde in § 1 Abs. 1 KStG, der Typenvergleich bei ausländischen Kapitalgesellschaften einschließlich der britischen Ltd. nach dem Brexit, die optierende Gesellschaft nach § 1a KStG und das Welteinkommensprinzip mit seiner Einschränkung durch Doppelbesteuerungsabkommen",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil I (Hamacher), Abschnitt 1.1 · Stand 04/2026",
    verfasser: VERFASSER,
    normen: [
      "§ 1 Abs. 1 Nr. 1 bis 6, Abs. 2 KStG", "§ 1a Abs. 1 KStG", "§ 2 KStG",
      "§ 4 KStG", "§ 8 Abs. 1 Satz 1 und Satz 4 KStG",
      "§ 10 AO", "§ 11 AO",
      "BFH vom 23.06.1992, BStBl. II 1992, 972", "R 1.1 Abs. 1 KStR",
      "H 1.1 „Ausländische Körperschaften, Typenvergleich“",
      "BMF vom 12.01.2024, BStBl. I 2024, 175", "BFH-Beschluss vom 13.10.2021, I B 31/21",
      "BMF vom 10.11.2021, BStBl. I 2021, 2212, Tz. 54",
    ],
    themen: ["Unbeschränkte Steuerpflicht", "Geschäftsleitung", "Sitz", "Typenvergleich", "Britische Limited", "Optierende Gesellschaft", "Welteinkommen", "Betriebsstätte"],
    bloecke: [
      { typ: "titel", text: "1.1 Unbeschränkte Steuerpflicht" },
      { typ: "titel", text: "1.1.1 Voraussetzungen" },
      { text: "Die Körperschaftsteuer wird vereinfachend auch als „Einkommensteuer der Kapitalgesellschaften“ bezeichnet. Dabei sind eine Vielzahl der Regelungen des EStG auch für körperschaftsteuerliche Zwecke anwendbar, was auch bereits der Verweis in § 8 Abs. 1 Satz 1 KStG verdeutlicht. Das Körperschaftsteuergesetz beinhaltet lediglich Spezialregelungen, die ausschließlich für die Besteuerung von Körperschaften bedeutend sind. Der Aufbau des KStG ähnelt dabei grundsätzlich dem des EStG. Steht bei der Einkommensteuer zunächst immer auch die Prüfung der persönlichen Steuerpflicht an erster Stelle, gilt selbiges auch für die Körperschaftsteuer. Das KStG unterscheidet diesbezüglich zwei Arten der Steuerpflicht, nämlich die" },
      { text: "• unbeschränkte Körperschaftsteuerpflicht (§ 1 KStG) und" },
      { text: "• beschränkte Körperschaftsteuerpflicht (§ 2 KStG)." },
      { text: "Nach § 1 Abs. 1 KStG sind Körperschaften, Personenvereinigungen oder Vermögensmassen im Inland unbeschränkt steuerpflichtig, wenn sie ihre Geschäftsleitung oder ihren Sitz im Inland haben:" },
      { text: "• Als Geschäftsleitung wird der Ort bezeichnet, an welchem sich der Mittelpunkt der geschäftlichen Oberleitung befindet (siehe § 10 AO). Dieser wird häufig auch als „Verwaltungssitz“ bezeichnet." },
      { text: "• Der Sitz der Gesellschaft wird im Gesellschaftsvertrag bestimmt (siehe § 11 AO). Bei Kapitalgesellschaften deutscher Rechtsform befindet sich der sog. statuarische Sitz immer im Inland." },
      { text: "Die unbeschränkte Körperschaftsteuerpflicht hängt aber nur von der Inlandsbelegenheit eines dieser beiden Orte ab. Sämtliche Körperschaften unterliegen damit bereits der inländischen Steuerpflicht, wenn deren Geschäftstätigkeit aufgrund der inländischen Geschäftsleitung im Wesentlichen von und in Deutschland heraus ausgeübt wird. Damit ist insbesondere auch eine ausländische Kapitalgesellschaft unbeschränkt steuerpflichtig, wenn diese über eine inländische Geschäftsleitung verfügt." },
      { text: "Beispiel: Der niederländische Tulpenpflücker Wim Douwens gründet in Amsterdam eine niederländische Kapitalgesellschaft (B.V., entspricht einer deutschen GmbH). Um seine Produkte auch auf dem deutschen Markt verkaufen zu können, mietet er sich in Aachen ein Büro an, von wo aus sämtliche für die Gesellschaft wesentlichen Unternehmensentscheidungen getroffen werden (Warenbezug, Logistik, Verwaltung etc.)." },
      { text: "Lösung: Die niederländische Kapitalgesellschaft ist nach § 1 Abs. 1 Nr. 1 KStG in Deutschland unbeschränkt körperschaftsteuerpflichtig, da sie ihre Geschäftsleitung im Inland hat. Denn das inländische Büro begründet nach § 10 AO eine inländische Geschäftsleitung." },
      { typ: "titel", text: "1.1.2 Körperschaftsteuerpflichtige Gebilde" },
      { text: "Im weiteren Verlauf zählt § 1 Abs. 1 KStG abschließend auf, welche Körperschaften darunter fallen können:" },
      { text: "Nr. 1: Kapitalgesellschaften (insbesondere z. B. AG, GmbH, KGaA und die europäische (Aktien)Gesellschaft (SE)) einschließlich optierender Gesellschaften i. S. des § 1a KStG" },
      { typ: "titel", text: "a) Ausländische Kapitalgesellschaften" },
      { text: "Unter § 1 Abs. 1 Nr. 1 KStG werden auch die nach ausländischem Recht gegründeten Kapitalgesellschaften erfasst, deren Geschäftsleitung sich im Inland befindet. Voraussetzung ist hierfür jedoch, dass die ausländische Gesellschaftsform mit einer nach deutschem Recht gegründeten Kapitalgesellschaft vergleichbar und als solche rechtsfähig ist (sog. Typenvergleich)." },
      { text: "Dazu zählt ab dem 01.01.2021 unverändert auch eine in Großbritannien satzungsmäßig ansässige Gesellschaft (z. B. Ltd.), auch wenn diese nach dem Brexit in einem Drittstaat ansässig ist und in Deutschland eigentlich nicht mehr rechtsfähig ist. Verfügt diese Gesellschaft aber über eine inländische Geschäftsleitung, begründet sich die unbeschränkte Steuerpflicht unverändert nach § 1 Abs. 1 Nr. 1 KStG. Denn für ertragsteuerliche Zwecke ist es unerheblich, ob die Auslandsgesellschaft zivilrechtlich als rechtsfähig angesehen werden kann (siehe auch § 8 Abs. 1 Satz 4 KStG). Entscheidend ist letztlich wiederum nur das Ergebnis des o. g. Typenvergleichs." },
      { typ: "titel", text: "b) Optierende Gesellschaften" },
      { text: "Für sämtliche Personen(handels)- bzw. Partnerschaftsgesellschaften besteht die Möglichkeit, auf unwiderruflichen Antrag hin zur Körperschaftsbesteuerung zu optieren (§ 1a Abs. 1 KStG). Diese Gesellschaften unterliegen ertragsteuerlich danach auch der Körperschaftsteuerpflicht, obwohl diese zivilrechtlich unverändert die Rechtsform einer Personengesellschaft besitzen. § 1 Abs. 1 Nr. 1 KStG listet daher ausdrücklich auch diese Gesellschaften auf, sofern sich Sitz oder Geschäftsleitung im Inland befindet. Zu den weiteren Auswirkungen der Option siehe auch unter 1.6." },
      { text: "Beispiel: Die in Freiburg ansässige Z-GmbH & Co KG optiert mit Wirkung zum 01.01.2026 nach § 1a KStG zur Körperschaftsbesteuerung." },
      { text: "Lösung: Durch die wirksam vorgenommene Option i. S. des § 1a Abs. 1 KStG wird die Z-GmbH & Co KG (optierende Gesellschaft) aufgrund ihres inländischen Sitzes mit Wirkung ab dem Wj. 2026 unbeschränkt körperschaftsteuerpflichtig i. S. des § 1 Abs. 1 Nr. 1 KStG." },
      { text: "Nur Hinweis: Nr. 2: Erwerbs- und Wirtschaftsgenossenschaften (auch die europäische Genossenschaft (SCE)) · Nr. 3: Versicherungsvereine auf Gegenseitigkeit · Nr. 4: sonstige juristische Personen des privaten Rechts (z. B. in das Vereinsregister eingetragene Vereine) · Nr. 5: nichtrechtsfähige Vereine, Anstalten, Stiftungen · Nr. 6: Betriebe gewerblicher Art von juristischen Personen des öffentlichen Rechts (i. S. des § 4 KStG)" },
      { text: "In den Fällen des § 1 Abs. 1 KStG unterliegt die Körperschaft mit ihrem Welteinkommen der Steuerpflicht (§ 1 Abs. 2 KStG). Dieser Grundsatz gilt jedoch nicht uneingeschränkt, weil der Bundesrepublik Deutschland das Besteuerungsrecht an den ausländischen Einkünften durch ein Doppelbesteuerungsabkommen (DBA) wieder entzogen oder eingeschränkt werden kann. Auch in den Fällen einer optierenden Gesellschaft i. S. des § 1a KStG werden abkommensrechtlich die „Kapitalgesellschaftsgrundsätze“ angewendet, d. h. nach dem DBA gilt auch diese als „juristische Person“ und entsprechend ihrer inländischen Geschäftsleitung als in Deutschland ansässig." },
      { text: "Nur in den Fällen, in denen mit dem ausländischen Staat kein DBA abgeschlossen wurde oder das entsprechende DBA eine Anrechnungsverpflichtung der ausländischen Steuer in Deutschland vorsieht, werden die ausländischen Einkünfte im Rahmen der deutschen Einkommensermittlung erfasst." },
      { text: "Beispiel: Die in Aachen ansässige Z-GmbH unterhält in Eindhoven (Niederlande) eine Betriebsstätte." },
      { text: "Lösung: Die Z-GmbH unterliegt aufgrund ihres inländischen Sitzes der unbeschränkten Steuerpflicht nach § 1 Abs. 1 Nr. 1 KStG. Die Steuerpflicht erstreckt sich nach § 1 Abs. 2 KStG auf das Welteinkommen. Dabei ist zu beachten, dass das deutsche Besteuerungsrecht an den ausländischen Betriebsstätteneinkünfte aber gemäß Art. 5 DBA-NL ausschließlich dem Betriebsstättenstaat Niederlande zusteht. In Deutschland werden diese Betriebsstätteneinkünfte freigestellt (Art. 22 Abs. 1 DBA NL)." },
      { text: "Merke: Eine Kapitalgesellschaft unterliegt nach § 1 Abs. 1 Nr. 1 KStG der unbeschränkten Steuerpflicht, wenn diese entweder über einen inländischen Sitz oder eine inländische Geschäftsleitung verfügt. Sie unterliegt dabei grundsätzlich mit ihrem Welteinkommen der Besteuerung." },
    ],
  },
  {
    id: "kst-t1-02",
    kapitel: "2",
    abschnittNr: "1.2",
    title: "1.2 Beschränkte Steuerpflicht (nur Hinweis)",
    thema: "Zwei Spielarten: die klassische beschränkte Steuerpflicht des § 2 Nr. 1 KStG für Körperschaften ohne inländischen Anknüpfungspunkt – und die besondere des § 2 Nr. 2 KStG, die fast nur juristische Personen des öffentlichen Rechts mit ihren Kapitalerträgen trifft, damit die Beteiligung der Stadt an einer AG nicht unversteuert bleibt",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil I (Hamacher), Abschnitt 1.2 · Stand 04/2026",
    verfasser: VERFASSER,
    normen: [
      "§ 2 Nr. 1, Nr. 2 KStG", "§ 1 Abs. 1 Nr. 6 KStG", "§ 1a KStG", "§ 4 KStG",
      "§ 8 Abs. 1 Satz 1 KStG", "§ 31 Abs. 1 KStG", "§ 32 Abs. 1 Nr. 2, Abs. 3 KStG",
      "§ 20 Abs. 1 Nr. 1, Nr. 10 EStG", "§ 43 EStG", "§ 44a Abs. 8 EStG", "§ 49 EStG",
      "H 1.1 „Ausländische Körperschaften, Typenvergleich“",
      "BMF vom 10.11.2021, BStBl. I 2021, 2212, Tz. 4",
    ],
    themen: ["Beschränkte Steuerpflicht", "Typenvergleich", "Betrieb gewerblicher Art", "Juristische Person des öffentlichen Rechts", "Kapitalertragsteuer", "Abgeltungswirkung", "Wertpapierdarlehen"],
    bloecke: [
      { typ: "titel", text: "1.2 Beschränkte Steuerpflicht (nur Hinweis)" },
      { typ: "titel", text: "1.2.1 Klassische beschränkte Steuerpflicht" },
      { text: "§ 2 Nr. 1 KStG behandelt die „klassische“ beschränkte Steuerpflicht. Darunter fallen Körperschaften, die weder ihre Geschäftsleitung noch ihren Sitz im Inland haben (typische Steuerausländer). Dafür ist aber zwingende Voraussetzung, dass es sich bei dem „Gebilde“ überhaupt um eine Körperschaft handelt, was nach dem sog. Typenvergleich zu überprüfen ist. Gleiches gilt in den Fällen der Option i. S. des § 1a KStG auch bei einer ausländischen Personenhandelsgesellschaft, weil auch diese Gesellschaften optionsfähig sind." },
      { text: "Für die beschränkte Steuerpflicht wird im Inland grundsätzlich eine Veranlagung nach herkömmlichen Grundsätzen vorgenommen (siehe § 31 Abs. 1 KStG). Dafür ist Voraussetzung, dass die Körperschaft in Deutschland nach § 8 Abs. 1 Satz 1 KStG i. V. mit § 49 EStG inländische Einkünfte erzielt. Nur bei Beteiligungserträgen, die außerhalb einer Betriebsstätte anfallen, kommt es nach § 32 Abs. 1 Nr. 2 KStG durch den Kapitalertragsteuerabzug bereits zu einer Abgeltungswirkung." },
      { text: "Die weiteren Auswirkungen und Inhalte der beschränkten Steuerpflicht der steuerausländischen Körperschaft werden im Unterrichtsfach „Internationales Steuerrecht“ behandelt." },
      { typ: "titel", text: "1.2.2 Besondere beschränkte Steuerpflicht" },
      { text: "§ 2 Nr. 2 KStG erweitert die beschränkte Steuerpflicht auch auf Körperschaften, die – nicht nach § 1 KStG unbeschränkt steuerpflichtig sind; – nicht nach § 2 Nr. 1 KStG beschränkt steuerpflichtig sind – und dem (Kapitalertrag)Steuerabzug unterliegende Einkünfte erzielen." },
      { text: "Diese Voraussetzungen erfüllen in aller Regel nur inländische juristische Personen des öffentlichen Rechts mit ihren Einkünften aus Kapitalvermögen i. S. des § 20 EStG, die dem Kapitalertragsteuerabzug i. S. des § 43 EStG unterliegen. Dadurch erfolgt eine Gleichstellung mit den Steuerpflichtigen, deren Kapitalerträge ebenfalls der Besteuerung unterliegen. Denn eine juristische Person des öffentlichen Rechts unterliegt der unbeschränkten Körperschaftsteuerpflicht nur mit den Einkünften, welche diese im Rahmen eines Betriebs der gewerblichen Art (BgA) i. S. des § 4 KStG erzielt (siehe § 1 Abs. 1 Nr. 6 KStG). Eine Vermögensverwaltung in Form des Haltens einer Beteiligung oder der Kapitalanlage begründet für sich betrachtet aber noch keinen BgA." },
      { text: "Daher werden im Rahmen der beschränkten Steuerpflicht i. S. des § 2 Nr. 2 KStG u. a. folgende Einnahmen erfasst: – Gewinnausschüttungen i. S. des § 20 Abs. 1 Nr. 1 EStG aus Eigengesellschaften der jPdÖR; – Bezüge i. S. des § 20 Abs. 1 Nr. 10 EStG, z. B. Gewinne und verwendete Rücklagen bzw. verdeckte Gewinnausschüttungen aus einem Betrieb gewerblicher Art i. S. des § 4 KStG." },
      { text: "Die Körperschaftsteuer ist dabei durch den Steuerabzug bereits abgegolten (§ 32 Abs. 1 Nr. 2 KStG). Der Steuerpflichtige kann aber gemäß § 44a Abs. 8 EStG beantragen, die Kapitalertragsteuer nur in Höhe von 3/5 (von 25 % = 15 %) zu erheben." },
      { text: "Etwas anderes gilt hingegen, wenn die Kapitalerträge i. S. des § 20 Abs. 1 Nr. 1 EStG bereits in einem BgA anfallen, weil die Beteiligung diesem zutreffend zugeordnet worden ist. Die Einnahmen unterliegen dann bereits im BgA der unbeschränkten Körperschaftsteuerpflicht nach § 1 Abs. 1 Nr. 6 KStG, ohne dass die Abgeltungswirkung des § 32 Abs. 1 KStG eintreten würde. Davon zu unterscheiden ist aber die nachfolgende Verwendung der Gewinne des BgA zugunsten der JPdÖR, die dann wiederum bei dieser zu Bezügen i. S. des § 20 Abs. 1 Nr. 10 EStG führen können, die im Rahmen der beschränkten Steuerpflicht i. S. des § 2 Nr. 2 KStG erfasst werden." },
      { text: "Beispiel: Die Stadt Hamburg ist an einer inländischen AG beteiligt (nicht in einem BgA gehalten) und erhält von dieser in 2026 eine Gewinnausschüttung von 50.000 €. Die AG stellt der Stadt folgende Ausschüttungsbescheinigung aus:" },
      { typ: "tabelle", spalten: ["Position", "Betrag"], zeilen: [
        ["Bruttodividende", "50.000,00 €"],
        ["– Kapitalertragssteuer (15 %, reduziert)", "-7.500,00 €"],
        ["– Solidaritätszuschlag (5,5 %)", "-412,50 €"],
        ["= Auszahlung", "42.087,50 €"],
      ] },
      { text: "Lösung: Die Stadt ist mit dem Halten der Beteiligung grundsätzlich nicht nach § 1 Abs. 1 KStG unbeschränkt steuerpflichtig, weil dadurch kein Betrieb gewerblicher Art (§ 4 KStG) begründet wird." },
      { text: "Die Einkünfte aus der Gewinnausschüttung i. S. des § 20 Abs. 1 Nr. 1 EStG werden aber im Rahmen der beschränkten Steuerpflicht nach § 2 Nr. 2 KStG erfasst, weil diese einem Steuerabzug in Form der Kapitalertragsteuer unterlegen haben. Dadurch tritt insoweit eine Abgeltungswirkung ein (§ 32 Abs. 1 Nr. 2 KStG). Gemäß § 44a Abs. 8 EStG ist die Kapitalertragsteuer in diesen Fällen nur in Höhe von 3/5 (von 25 %) zu erheben, damit die steuerliche Belastung der Kommune dem Körperschaftsteuersatz von 15 % entspricht." },
      { text: "Daneben regelt § 2 Nr. 2 (2. Halbsatz a – c) KStG weitere Tatbestände. Dies betrifft die Einnahmen aufgrund von Wertpapierdarlehen bzw. -pensionsgeschäften, bei denen nach § 32 Abs. 3 KStG ebenfalls eine Abzugsteuerpflicht besteht." },
    ],
  },
  {
    id: "kst-t1-03",
    kapitel: "3",
    abschnittNr: "1.3 und 1.4",
    title: "1.3 Beginn und 1.4 Ende der Steuerpflicht",
    thema: "Die drei Zeitspannen der Gründung, die auseinanderzuhalten sind: Vorgründungsgesellschaft ohne Körperschaftsteuerpflicht, Vorgesellschaft mit Beginn der Steuerpflicht – sofern die Eintragung später tatsächlich erfolgt – und die eingetragene Kapitalgesellschaft. Dazu die abweichende Behandlung bei der Gewerbesteuer und das Ende der Steuerpflicht erst nach Sperrjahr und Erfüllung aller steuerlichen Pflichten",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil I (Hamacher), Abschnitte 1.3 und 1.4 · Stand 04/2026",
    verfasser: VERFASSER,
    normen: [
      "§ 1a KStG", "§ 11 KStG", "§ 2 Abs. 2 Satz 1 GewStG",
      "§ 41 AktG", "§ 278 AktG", "§ 11 Abs. 1 GmbHG", "§ 60 GmbHG", "§ 73 GmbHG",
      "§ 179 f. AO", "§ 1 Abs. 1 Nr. 3 GrEStG",
      "H 1.1 „Vorgründungsgesellschaft“, „Beginn der Steuerpflicht“, „unechte Vorgesellschaft“",
      "BFH vom 29.01.2000, BFH/NV 2001 S. 573", "EuGH vom 29.04.2002, Rs C-137/02",
      "BFH vom 18.03.2010, BStBl. II 2010, 991", "BFH vom 24.01.2017, BStBl. II 2017, 1071",
      "BFH vom 17.10.2001, BStBl. II 2002, 210", "H 2.5 Abs. 2 GewStH 2016 „Vorgesellschaft“",
    ],
    themen: ["Beginn der Steuerpflicht", "Vorgründungsgesellschaft", "Vorgesellschaft", "Verunglückte Gründung", "Handelsregistereintragung", "Gewerbesteuerpflicht", "Ende der Steuerpflicht", "Sperrjahr", "Liquidationsbesteuerung"],
    bloecke: [
      { typ: "titel", text: "1.3 Beginn der Steuerpflicht" },
      { text: "Bei einer optierenden Gesellschaft i. S. des § 1a KStG beginnt die Körperschaftsteuerpflicht unabhängig von den nachfolgenden Darstellungen bereits mit dem Beginn des Wirtschaftsjahres, für welches die Option erstmals erfolgen soll. In den Fällen einer herkömmlichen Kapitalgesellschaft sind diesbezüglich Besonderheiten zu beachten. Zwar erlangt die Körperschaft zivilrechtlich erst mit deren Eintragung in das Handelsregister ihre Rechtsfähigkeit (sog. konstitutive Wirkung der Registereintragung). Für Zwecke der Körperschaftsteuerpflicht gilt abweichend davon aber ein anderer Zeitpunkt, weswegen die Unterscheidung zwischen der Vorgründungs- und der Vorgesellschaft entscheidend ist." },
      { typ: "titel", text: "1.3.1 Vorgründungsgesellschaft" },
      { text: "Als Vorgründungsgesellschaft bezeichnet man die Zeitspanne zwischen dem erstmaligen Zusammentritt der Gesellschafter bis zum Abschluss des notariellen Gesellschaftsvertrages. Die Vorgründungsgesellschaft besitzt i. d. Regel die Rechtsform einer Gesellschaft bürgerlichen Rechts (GbR) bzw. eines Einzelunternehmens (bei einer zukünftigen Ein-Mann-GmbH), die einzig darauf ausgerichtet ist, die Gründung der Kapitalgesellschaft herbeizuführen. Sie gilt daher als reine „Transfergesellschaft“, da ihr Vermögen nachfolgend auf die formwirksam errichtete Kapitalgesellschaft verlagert werden soll. Werden daher Wirtschaftsgüter der Vorgründungsgesellschaft auf die Kapitalgesellschaft übertragen, handelt es sich dabei m. E. um Veräußerungen (gegen Gewährung von Gesellschaftsrechten) bzw. verdeckte Einlagen. Zwischen der Vorgründungsgesellschaft und der später entstehenden Kapitalgesellschaft besteht nämlich keine Identität, so dass sich z. B. auch ein der Vorgründungsgesellschaft zuzurechnender Verlust nicht auf die nachfolgende Kapitalgesellschaft verlagert." },
      { text: "Die Einkünfte der Vorgründungsgesellschaft werden daher den Gesellschaftern selbst zugerechnet, welche sich aus der durchzuführenden gesonderten und einheitlichen Feststellung der Einkünfte nach § 179 f AO ergeben. Gleiches gilt für den Einzelunternehmer, weswegen dieser eine eigene Gewinnermittlung erstellen muss." },
      { text: "Auch wenn die Vorgründungsgesellschaft lediglich die Tätigkeit der zu gründenden Kapitalgesellschaft vorbereitet und daher keine weiteren unternehmerischen Aktivitäten entfaltet, ist diese umsatzsteuerlich selbst zum Vorsteuerabzug berechtigt." },
      { text: "Merke: Die Vorgründungsgesellschaft ist nicht körperschaftsteuerpflichtig. Diese umfasst die Zeitspanne bis zum Abschluss des notariell beurkundeten Gesellschaftsvertrags." },
      { typ: "titel", text: "1.3.2 Vorgesellschaft" },
      { text: "Die Vorgesellschaft entsteht sodann nachfolgend mit Abschluss des notariellen Gesellschaftsvertrages oder der Feststellung der Satzung. Sofern es tatsächlich auch zur Registereintragung kommt, werden die Vorgesellschaft und die spätere Kapitalgesellschaft bereits als Einheit behandelt. Die Körperschaftsteuerpflicht beginnt daher bereits mit Errichtung der Vorgesellschaft. Trägt das Registergericht die Gesellschaft hingegen nicht ein (z. B. wegen formeller Bedenken des Registergerichtes), wird das „Gebilde“ nicht körperschaftsteuerpflichtig. In diesem Fall wird auch die „Vorgesellschaft“ wieder wie eine Personengesellschaft bzw. Einzelunternehmen behandelt (sog. verunglückte Gründung)." },
      { text: "Hinsichtlich der Begründung der Gewerbesteuerpflicht ist grundsätzlich die Handelsregistereintragung maßgebend. Ausnahmsweise kann sich diese auch auf die Vorgesellschaft erstrecken, wofür aber nach der BFH-Rechtsprechung erforderlich ist, dass die Vorgesellschaft auch Tätigkeiten ausübt, die über bloße Vorbereitungshandlungen hinausgehen. Diese Handlungen müssen nicht originär gewerblich sein, sondern hierfür genügen auch lediglich vermögensverwaltende Tätigkeiten. Die nach § 2 Abs. 2 Satz 1 GewStG bei einer formwirksam errichteten Kapitalgesellschaft fingierte Gewerbesteuerpflicht erstreckt sich damit nicht immer automatisch auch auf die Vorgesellschaft, kann mit dieser nach den o. g. Grundsätzen dann aber einen einheitlichen Steuergegenstand darstellen." },
      { text: "Merke: Die Körperschaftsteuerpflicht beginnt bereits mit der Vorgesellschaft, sofern die spätere Kapitalgesellschaft auch tatsächlich in das Handelsregister eingetragen wird. Dafür ist das Datum des notariell beurkundeten Gesellschaftsvertrags maßgebend." },
      { typ: "titel", text: "1.3.3 Kapitalgesellschaft" },
      { text: "Die Kapitalgesellschaft wird zivilrechtlich erst mit deren Eintragung in das Handelsregister wirksam errichtet. Diese Eintragung hat aber auf den Beginn der Steuerpflicht grundsätzlich keine Auswirkung, sondern bestätigt lediglich einen bereits bestehenden Rechtszustand." },
      { text: "Wird die Eintragung nicht vollzogen, kann das neben den o. g. Auswirkungen auf die (verunglückte Begründung der) Körperschaftsteuerpflicht auch grunderwerbsteuerliche Konsequenzen nach sich ziehen. Denn hinsichtlich des bereits vorhandenen Grundbesitzes kann dies beim Gründungsgesellschafter einen Erwerbstatbestand i. S. des § 1 Abs. 1 Nr. 3 GrEStG auslösen." },
      { text: "Beispiel: Müller und Maier entschlossen sich am 12.02.2025, eine Baumaschinen-GmbH (Sitz: Augsburg) zu gründen. Am 15.02.2025 verpflichteten sie sich durch einen formgerechten Vorvertrag zum Abschluss eines Gesellschaftsvertrags. Ab diesem Zeitpunkt wurde auch das gemeinsame Geschäftsgrundstück angemietet und der Geschäftsbetrieb bereits zum 01.03.2025 begonnen. Aufgrund der terminlich angespannten Lage kamen die Gesellschafter erst am 15.11.2025 dazu, einen Notar aufzusuchen, welcher den Gesellschaftsvertrag aufsetzte. Noch am 16.11.2025 meldeten sie die Eintragung beim zuständigen Registergericht an, welches die Eintragung aber erst am 05.01.2026 vornahm." },
      { text: "Aus den Aufzeichnungen der Gesellschafter ist ersichtlich, dass diese in 2025 folgende Einkünfte erzielten:" },
      { typ: "tabelle", spalten: ["Zeitraum", "Einkünfte"], zeilen: [
        ["15.02. – 01.03.2025", "- 10.500,00 € (Betriebsausgaben)"],
        ["02.03. – 14.11.2025", "30.000,00 €"],
        ["15.11. – 31.12.2025", "70.000,00 €"],
      ] },
      { text: "Lösung: In der Zeit vom 15.02.2025 bis zum 14.11.2025 handelt es sich um die Vorgründungsgesellschaft. Die erzielten Einkünfte von 19.500 € im Rahmen einer gesonderten und einheitlichen Feststellung der Einkünfte bei den Gesellschaftern im Rahmen ihrer eigenen Einkommensteuererklärungen erfasst (so in der Quelle; im Satz fehlt das Prädikat „werden“), da lediglich eine Personengesellschaft vorliegt." },
      { text: "Ab dem 15.11.2025 handelt es sich um die Vorgesellschaft. Die ab diesem Zeitpunkt erzielten Einkünfte von 70.000 € werden bereits der Körperschaftsteuer unterworfen, da es auch tatsächlich zur Eintragung in das Handelsregister gekommen ist. Dass die Eintragung erst im VZ 2026 erfolgte, ist für die bereits zu begründende Körperschaftsteuerpflicht in 2025 unerheblich, weil letztlich dafür nur der tatsächliche Eintragungsvorgang entscheidend ist." },
      { typ: "titel", text: "1.4 Ende der Steuerpflicht" },
      { text: "Die KSt-Pflicht endet mit der Löschung der Kapitalgesellschaft im Handelsregister (§ 60 GmbHG). Voraussetzung dafür ist aber insbesondere: – tatsächliche Beendigung der geschäftlichen Betätigung; – Beendigung der Vermögensverteilung – und Ablauf des gesetzlich vorgeschriebenen Sperrjahres (§ 73 GmbHG)." },
      { text: "Zur Beendigung der geschäftlichen Betätigung gehört auch, dass die Gesellschaft sämtliche steuerlichen Pflichten (z. B. Abgabe von Steuererklärungen, Leistung von Zahlungen u. a.) erfüllt hat. Das Finanzamt wird einer Löschung daher erst dann zustimmen, wenn alle Verwaltungstätigkeiten abgeschlossen sind. Ansonsten könnten nach Löschung der Kapitalgesellschaft keine Verwaltungsakte mehr bekanntgegeben werden." },
      { text: "Die KSt-Pflicht endet daher grundsätzlich erst dann, wenn die beendete Kapitalgesellschaft sämtliche Pflichten erledigt hat. Im Rahmen der Beendigung kommt es zu einer besonderen Gewinnermittlung i. S. des § 11 KStG (sog. Liquidationsbesteuerung)." },
    ],
  },
];

export default kstTeil1;
