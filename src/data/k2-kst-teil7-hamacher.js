/* KSt Teil VII – Liquidation (§ 11 KStG), Hamacher, 21. Auflage,
   Stand Juni 2025.

   Wortlautgetreue Übernahme des Lehrgangsskripts „Körperschaftsteuer, Teil VII:
   Liquidation (§ 11 KStG)“ aus den Lehrgangsunterlagen (28 Seiten). Das Skript
   hat zwei Kapitel: 1 Zivilrechtlicher Hintergrund und 2 Steuerliche Behandlung
   der Liquidation. Gegliedert wird hier nach den Abschnitten der Quelle; jeder
   Abschnitt steht als eigener Eintrag.

   STAND DER ÜBERNAHME: Kapitel 1 – der zivilrechtliche Hintergrund mit
   Auflösungsgründen, Ablauf der Auflösung, Liquidation und Löschung (1.1 bis
   1.3) – ist VOLLSTÄNDIG übernommen. Es folgt Kapitel 2 zur steuerlichen
   Behandlung. Der Campus weist den Stand aus.

   HINWEIS ZUM RECHTSSTAND: Dieses Skript trägt den Stand Juni 2025.

   HINWEIS ZUR QUELLE: Der Text ist unmittelbar aus der PDF-Datei extrahiert
   (pypdf, 28 Seiten), weil die Textausgabe des Drive-Readers bei umfangreichen
   PDF-Dateien ohne Fehlermeldung abbrechen kann. Das personenbezogene
   Wasserzeichen der Vorlage ist auf allen 28 Seiten entfernt. */

const VERFASSER = "Hamacher";
const RECHTSSTAND = "Stand 06/2025";

export const kstTeil7Quelle = {
  reihe: "Körperschaftsteuer · Teil VII: Liquidation (§ 11 KStG) · Hamacher",
  stand: "Stand 06/2025 (21. Auflage)",
  verfasser: "Hamacher",
  didaktik: [
    "Wortlautgetreue Übernahme des Lehrgangsskripts; eigene Ergänzungen sind durchgehend als solche gekennzeichnet.",
    "Jeder Abschnitt der Quelle steht als eigener Eintrag; die Nummerierung folgt dem Inhaltsverzeichnis des Skripts.",
    "Sämtliche Zahlen der Beispiele sind unabhängig nachgerechnet; Abweichungen und Eigenheiten der Quelle sind mit „(so in der Quelle)“ gekennzeichnet.",
  ],
};

export const kstTeil7 = [
  {
    id: "kst-t7-1",
    kapitel: "1",
    abschnittNr: "1.1.1",
    title: "1.1.1 Auflösungsgründe",
    thema: "Der Liquidation ist die Auflösung vorgeschaltet; ihre Gründe ergeben sich aus dem Gesellschaftsvertrag oder aus § 60 Abs. 1 GmbHG bzw. §§ 262, 263 AktG",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil VII (Hamacher), Abschnitt 1.1.1 · Stand 06/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 60 Abs. 1 GmbHG",
      "§§ 262 – 263 AktG",
    ],
    themen: ["Auflösung", "Auflösungsgründe", "Gesellschafterbeschluss", "Insolvenz", "Vermögenslosigkeit"],
    bloecke: [
      { typ: "titel", text: "1. Zivilrechtlicher Hintergrund" },
      { typ: "titel", text: "1.1 Auflösung" },
      { typ: "titel", text: "1.1.1 Auflösungsgründe" },
      { text: "Dem eigentlichen **Liquidations- bzw. Abwicklungsverfahren** einer Kapitalgesellschaft ist zunächst deren **Auflösung vorgeschaltet**. Die Auflösungsgründe ergeben sich dabei entweder aus dem **Gesellschaftsvertrag** oder sind **gesetzlich** geregelt (für GmbH: § 60 Abs. 1 GmbHG, für Aktiengesellschaften: §§ 262 – 263 AktG). Die wichtigsten Gründe dafür sind insbesondere:" },
      { text: "– Ablauf der im Gesellschaftsvertrag/Satzung bestimmten **Zeit**;" },
      { text: "– **Beschluss der Gesellschafter** mit einer qualifizierten Mehrheit;" },
      { text: "– Eröffnung des **Insolvenzverfahrens**;" },
      { text: "– Rechtskräftiger Beschluss über die **Abweisung eines Antrags auf Eröffnung des Insolvenzverfahrens mangels Masse**;" },
      { text: "– **Verfügung des Registergerichtes**;" },
      { text: "– **Löschung der Gesellschaft wegen Vermögenslosigkeit**." },
      { text: "Anmerkung zur Zweistufigkeit (eigene Ergänzung): Der erste Satz enthält die Grundunterscheidung des ganzen Skripts: **Auflösung** und **Abwicklung** sind zwei verschiedene Vorgänge. Die Auflösung ist das auslösende Ereignis – ein Beschluss, ein Zeitablauf, ein Insolvenzereignis –, die Abwicklung das sich anschließende Verfahren, in dem das Vermögen verwertet und verteilt wird. Steuerlich knüpft § 11 KStG gerade an diese Abfolge an: Er verlangt, dass eine aufgelöste Gesellschaft **abgewickelt** wird (Abschnitt 2.3.2). Die Aufzählung zeigt zugleich, dass die Auflösung keineswegs immer freiwillig ist – drei der sechs Gründe beruhen auf Insolvenz oder gerichtlichem Handeln." },
    ],
  },
  {
    id: "kst-t7-2",
    kapitel: "2",
    abschnittNr: "1.1.2",
    title: "1.1.2 Ablauf der Auflösung",
    thema: "Die aufgelöste Gesellschaft besteht fort, nur ihr Zweck wechselt zur Abwicklung; an die Stelle der Geschäftsführung tritt der Liquidator mit den steuerlichen Pflichten des § 34 AO",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil VII (Hamacher), Abschnitt 1.1.2 · Stand 06/2025",
    verfasser: VERFASSER,
    normen: [
      "§§ 60, 70 GmbHG",
      "§ 66 Abs. 2 – 3 GmbHG",
      "§ 67 GmbHG",
      "§ 70 GmbHG",
      "§ 71 GmbHG",
      "§ 71 Abs. 4 GmbHG",
      "§ 265 AktG",
      "§ 265 Abs. 4 AktG",
      "§ 266 AktG",
      "§ 268 AktG",
      "§ 268 Abs. 2 AktG",
      "§ 270 AktG",
      "§ 34 Abs. 1 AO",
      "§ 34 Abs. 3 AO",
      "§ 69 AO",
      "Lutter/Hommelhoff, GmbHG, 15. Aufl., § 70 Rn. 14",
    ],
    themen: ["Auflösung", "Liquidator", "Abwickler", "Gesellschaftszweck", "steuerliche Pflichten", "Eröffnungsbilanz"],
    bloecke: [
      { typ: "titel", text: "1.1.2 Ablauf der Auflösung" },
      { text: "Die „**Auflösung**“ ist **nicht gleichbedeutend** mit der „**Beendigung**“ der Gesellschaft. Denn diese bleibt auch nach Auflösung **rechtlich existent**, es ändert sich lediglich ihr **Gesellschaftszweck**. Denn die Tätigkeit der aufgelösten Gesellschaft besteht nunmehr ausschließlich in ihrer **Abwicklung** und der **Schlussverteilung** des liquidierten Gesellschaftsvermögens. Aus diesem Grund – und daher auch für jeden außenstehenden Dritten erkennbar – führt die Gesellschaft nunmehr auch den Zusatz „**i.A.**“ (in Auflösung) oder „**i.L.**“ (in Liquidation)." },
      { typ: "titel", text: "Der Liquidator bzw. Abwickler" },
      { text: "Mit der Auflösung **verliert** auch der bisherige Geschäftsführer seine **Vertretungsbefugnis**; gleiches gilt für den Vorstand einer Aktiengesellschaft. Diese Position wird zukünftig durch den **Liquidator** (§§ 60, 70 GmbHG) bzw. **Abwickler** (§ 265 AktG) übernommen, welcher in aller Regel mit dem bisherigen Geschäftsführer bzw. dem Vorstand **identisch** ist. Durch Beschluss der Gesellschafterversammlung oder der Hauptversammlung kann dazu auch eine andere Person bestimmt werden. In Ausnahmefällen kann die Bestellung des Liquidators bzw. Abwicklers auch durch das **Gericht** erfolgen (§ 66 Abs. 2 – 3 GmbHG; § 265 Abs. 4 AktG)." },
      { text: "Der Liquidator bzw. Abwickler ist anschließend dem **Handelsregister** zur Eintragung anzumelden (§ 67 GmbHG, § 266 AktG). Zu den Pflichten des Liquidators bzw. Abwicklers: siehe § 70 GmbHG bzw. § 268 AktG. Er muss dabei insbesondere eine **Eröffnungsbilanz** erstellen und **jährlich** während des Liquidationszeitraums einen entsprechenden **Jahresabschluss** aufstellen (§ 71 GmbHG, § 270 AktG). Im weiteren Verfahren hat der Liquidator bzw. der Abwickler **dieselben Rechte wie der Geschäftsführer** (§ 71 Abs. 4 GmbHG) bzw. der Vorstand (§ 268 Abs. 2 AktG)." },
      { text: "Die Auflösung der Gesellschaft ist durch den Liquidator bzw. Abwickler dem Handelsregister zur Eintragung mitzuteilen, soweit die Eintragung nicht bereits **von Amts wegen** erfolgt (z.B. Eröffnung des Insolvenzverfahrens)." },
      { typ: "titel", text: "Grenzen der Geschäftstätigkeit" },
      { text: "Der Liquidator bzw. Abwickler darf **neue Geschäfte allein** zur **Beendigung schwebender** oder dem **Zweck der Abwicklung dienender** Rechtsgeschäfte abschließen. Eine Rolle spielt dabei, welche Art der Unternehmensverwertung dem Liquidator bzw. Abwickler den **größten Erfolg** verspricht; eine **Veräußerung des gesamten Unternehmens** kann daher u.U. den Abschluss **umfangreicher Neugeschäfte** erfordern (vgl. Lutter/Hommelhoff, Kommentar zum GmbH-Gesetz, 15. Auflage, § 70 GmbHG Rn. 14). In Fällen **pflichtwidriger und evidenter Überschreitungen** des Liquidationszweckes können unter Umständen **Schadensersatzansprüche** der Geschäftspartner gegen einen pflichtwidrig handelnden Liquidator bzw. Abwickler entstehen." },
      { typ: "titel", text: "Steuerliche Pflichten des Liquidators" },
      { text: "Gemäß **§ 34 Abs. 3 AO** hat der Liquidator auch die **steuerlichen Pflichten** zu erfüllen, soweit seine Befugnisse bei der Vermögensverwaltung reichen. Nach **§ 34 Abs. 1 AO** hat er insbesondere dafür zu sorgen, dass die **Steuern aus den Mitteln, die er verwaltet**, auch zutreffend entrichtet werden. Mit den Rechten und Pflichten eines Geschäftsführers ausgestattet hat er **Erklärungs- und Buchführungspflichten** zu erfüllen und kann darüber hinaus auch zur **Abgabe der Steuererklärungen für Zeiträume vor der Auflösung** herangezogen werden. Gemäß § 71 Abs. 4 GmbHG hat er insbesondere auch dafür zu sorgen, dass die **Buchführung ordnungsgemäß** durchgeführt wird." },
      { text: "Im Rahmen der Abwicklung kommen ihm insbesondere die folgenden **Aufgaben** zu:" },
      { typ: "tabelle", spalten: ["Aufgabe des Liquidators bzw. Abwicklers"], zeilen: [
        ["Beendigung der laufenden Geschäfte der aufgelösten Gesellschaft"],
        ["Erfüllung von Verpflichtungen, Einziehung von Forderungen"],
        ["Versilberung des Gesellschaftsvermögens"],
        ["gerichtliche und außergerichtliche Vertretung der Gesellschaft"],
        ["Aufstellung einer Eröffnungsbilanz"],
        ["Aufstellung eines Jahresabschlusses mit Lagebericht zu jedem Jahresende"],
      ] },
      { text: "Anmerkung zum Fortbestand der Gesellschaft (eigene Ergänzung): Der erste Satz ist der Schlüssel für die gesamte Liquidationsbesteuerung. Weil die aufgelöste Gesellschaft **rechtlich fortbesteht** und nur ihr **Zweck** wechselt, bleibt sie auch **steuerpflichtig** – § 11 KStG regelt nicht, **ob** besteuert wird, sondern nur, **wie** das Einkommen während der Abwicklung ermittelt wird. Genau deshalb kann der Besteuerungszeitraum auch mehrere Jahre umfassen (Abschnitt 2.4): Die Gesellschaft existiert in dieser Zeit weiter, nur eben mit dem einzigen Zweck, sich selbst abzuwickeln." },
      { text: "Anmerkung zur Normzitierung beim Liquidator (eigene Ergänzung): Die Quelle stützt die Übernahme der Position durch den Liquidator auf „§§ 60, 70 GmbHG“. § 60 GmbHG enthält jedoch die **Auflösungsgründe** (Abschnitt 1.1.1), § 70 GmbHG die **Aufgaben** der Liquidatoren; die Bestimmung der Liquidatoren selbst regelt **§ 66 GmbHG**, auf dessen Absätze 2 und 3 die Quelle im übernächsten Satz auch verweist. Die Zitierung ist daher unvollständig, das Ergebnis aber zutreffend." },
      { text: "Anmerkung zur steuerlichen Haftung (eigene Ergänzung): Der Hinweis auf § 34 AO ist praktisch bedeutsamer, als seine Stellung vermuten lässt. Der Liquidator ist **gesetzlicher Vertreter** der Gesellschaft und hat die Steuern „aus den Mitteln, die er verwaltet“ zu entrichten. Verletzt er diese Pflicht vorsätzlich oder grob fahrlässig – etwa, indem er vor der Begleichung der Steuerschulden an die Gesellschafter auskehrt –, haftet er nach **§ 69 AO persönlich**. Der Zusammenhang mit dem Sperrjahr des Abschnitts 1.2 ist offensichtlich: Beide Regelungen schützen die Gläubiger, zu denen eben auch das Finanzamt gehört." },
    ],
  },
  {
    id: "kst-t7-3",
    kapitel: "3",
    abschnittNr: "1.2",
    title: "1.2 Liquidation und Abwicklung",
    thema: "In der Abwicklung wird das Vermögen verflüssigt und nach Befriedigung der Gläubiger ausgekehrt; die Schlussverteilung ist erst nach Ablauf des Sperrjahres zulässig",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil VII (Hamacher), Abschnitt 1.2 · Stand 06/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 65 Abs. 1 Satz 2 GmbHG",
      "§ 65 Abs. 2 GmbHG",
      "§ 73 GmbHG",
      "§ 73 Abs. 3 GmbHG",
      "§ 272 Abs. 1 AktG",
      "InsO",
      "BFH vom 09.03.1983, BStBl. II 1983, 433",
      "Baumbach/Hueck, GmbHG, § 74 Rz. 2",
    ],
    themen: ["Abwicklung", "Liquidationszeitraum", "Sperrjahr", "Schlussverteilung", "Insolvenz"],
    bloecke: [
      { typ: "titel", text: "1.2 Liquidation/Abwicklung" },
      { text: "Der Auflösung schließt sich dann die eigentliche **Liquidation bzw. Abwicklung** an. In Fällen eines **Insolvenzverfahrens entfällt eine Abwicklung**, so dass eine entsprechende Anmeldung beim Handelsregister nicht erforderlich ist (z.B. § 65 Abs. 1 Satz 2 GmbHG). Hierfür sind die Vorschriften der **InsO** maßgebend." },
      { text: "In der Abwicklungs-Phase wird das Gesellschaftsvermögen **verflüssigt** und das – nach **Befriedigung der Gesellschaftsgläubiger** – verbleibende Vermögen danach an die **Anteilseigner ausgekehrt**." },
      { typ: "titel", text: "Beginn und Ende des Liquidationszeitraums" },
      { text: "Der **Liquidationszeitraum beginnt** dabei grundsätzlich **mit der Auflösung** der Gesellschaft. Dafür wird in aller Regel bereits im maßgeblichen Gesellschafterbeschluss ein **Termin** festgelegt. Mangelt es an einer solchen Terminfestlegung, wird die Auflösung **mit dem Tag der Beschlussfassung** wirksam (BFH vom 09.03.1983, BStBl. II 1983, 433)." },
      { text: "Die Liquidation **endet mit der Verteilung** des verbleibenden Vermögens an die Gesellschafter. Diese Schlussverteilung jedoch frühestens nach Ablauf eines **Sperrjahres** erfolgen (so in der Quelle; dem Satz fehlt das Modalverb – gemeint ist „darf … erfolgen“) – § 73 GmbHG bzw. § 272 Abs. 1 AktG. Das Sperrjahr **beginnt mit dem Tag**, an dem der **Aufruf an die Gläubiger** bekannt gemacht bzw. veröffentlicht worden ist (§ 65 Abs. 2 GmbHG bzw. § 272 Abs. 1 AktG)." },
      { text: "Ist allerdings im Zeitpunkt des Auflösungsbeschlusses **kein verteilungsfähiges Vermögen** vorhanden, kann die Liquidation bereits **vor Ablauf des Sperrjahres** beendet werden. Das **Zurückbehalten von Vermögen** zur Begleichung von Steuern oder Kosten der Aufbewahrung der Bücher **steht der vorzeitigen Beendigung** der Abwicklung **entgegen** (Baumbach/Hueck, GmbHG, § 74 Rz. 2). Verstößt der Liquidator gegen dieses gesetzliche Sperrjahr, ergibt sich daraus die Pflicht zum **Ausgleich eines daraus entstandenen Schadens** (§ 73 Abs. 3 GmbHG)." },
      { typ: "tabelle", spalten: ["Zeitpunkt", "Ereignis"], zeilen: [
        ["Auflösung (Termin laut Beschluss, sonst Tag der Beschlussfassung)", "Beginn des Liquidationszeitraums"],
        ["Bekanntmachung des Gläubigeraufrufs", "Beginn des Sperrjahres, § 65 Abs. 2 GmbHG"],
        ["Ablauf des Sperrjahres", "frühester Zeitpunkt der Schlussverteilung, § 73 GmbHG"],
        ["Schlussverteilung an die Gesellschafter", "Ende der Liquidation"],
        ["Ausnahme: kein verteilungsfähiges Vermögen", "Beendigung auch vor Ablauf des Sperrjahres möglich"],
      ] },
      { text: "Anmerkung zum Zweck des Sperrjahres (eigene Ergänzung): Das Sperrjahr ist die zivilrechtliche Absicherung der Reihenfolge „erst die Gläubiger, dann die Gesellschafter“. Weil die Gesellschafter bei der Schlussverteilung das **Restvermögen** erhalten, dürfen sie es erst bekommen, wenn feststeht, dass kein Gläubiger mehr Ansprüche geltend macht – und dafür soll das Jahr nach dem öffentlichen Aufruf genügen. Bemerkenswert ist die Klarstellung zur Ausnahme: Wer Vermögen **zurückbehält**, um noch Steuern zu zahlen, hat gerade **noch** verteilungsfähiges Vermögen und kann daher nicht vorzeitig beenden. Für die Besteuerung folgt daraus, dass sich der Abwicklungszeitraum regelmäßig über **mehr als ein Jahr** erstreckt – der Grund für die Dreijahresregel des § 11 Abs. 1 Satz 2 KStG (Abschnitt 2.4.1.1)." },
      { text: "Anmerkung zum Insolvenzfall (eigene Ergänzung): Der Hinweis, im Insolvenzverfahren entfalle eine Abwicklung, ist gesellschaftsrechtlich gemeint: An die Stelle der gesellschaftsrechtlichen Abwicklung durch den Liquidator tritt die **Verwertung durch den Insolvenzverwalter** nach der InsO. Steuerlich ändert das wenig, denn § 11 Abs. 7 KStG erstreckt die Liquidationsbesteuerung ausdrücklich auch auf die Insolvenz, in der eine Abwicklung unterbleibt (Abschnitt 2.2)." },
    ],
  },
  {
    id: "kst-t7-4",
    kapitel: "4",
    abschnittNr: "1.3",
    title: "1.3 Löschung der Gesellschaft",
    thema: "Die Löschung im Handelsregister hat nur deklaratorische Bedeutung; beendet ist die Gesellschaft erst, wenn zusätzlich die Abwicklung abgeschlossen ist – Sonderfall ist die Löschung wegen Vermögenslosigkeit",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil VII (Hamacher), Abschnitt 1.3 · Stand 06/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 74 Abs. 1 GmbHG",
      "§ 273 AktG",
      "§ 60 Abs. 1 Nr. 7 GmbHG",
      "§ 262 Abs. 1 Nr. 6 AktG",
    ],
    themen: ["Löschung", "Schlussrechnung", "Rechtsfähigkeit", "Vermögenslosigkeit", "Widerspruch"],
    bloecke: [
      { typ: "titel", text: "1.3 Löschung der Gesellschaft" },
      { text: "Ist die Liquidation abgeschlossen und hat der Liquidator eine **Schlussrechnung** erstellt, ist der **Abschluss der Liquidation** dem Handelsregister zur Eintragung **anzumelden** (§ 74 Abs. 1 GmbHG, § 273 AktG). Danach wird die Gesellschaft **gelöscht**, diese hat aber nur **deklaratorische Bedeutung** (so in der Quelle; „diese“ bezieht sich dem Wortlaut nach auf die Gesellschaft – gemeint ist die Löschung)." },
      { text: "Sie ist zwar für die Beendigung **erforderlich**, aber zusätzlich muss es auch zur **vorherigen Abwicklung** gekommen sein. Mit der Löschung **verliert die Gesellschaft ihre Rechtsfähigkeit**, wobei das Registergericht die Löschung aber in aller Regel erst dann vornehmen wird, wenn die Gesellschaft **sämtliche Verpflichtungen** (Fußnote der Quelle: z.B. Abgabe von Steuererklärungen oder Tilgung von Steuerschulden) erfüllt hat." },
      { typ: "titel", text: "Löschung wegen Vermögenslosigkeit" },
      { text: "Eine **Besonderheit** ist in diesem Zusammenhang die **Löschung wegen Vermögenslosigkeit** (§ 60 Abs. 1 Nr. 7 GmbHG, § 262 Abs. 1 Nr. 6 AktG). Eine Gesellschaft gilt als **vermögenslos**, wenn **kein verwertbares Aktivvermögen** mehr vorhanden ist, so dass eine Abwicklung ist in diesem Fall nicht mehr durchzuführen ist (so in der Quelle; „ist“ steht zweimal im Satz)." },
      { text: "Das Gericht muss in diesem Fall seine **Löschungsabsicht** den Gesellschaftsvertretern und möglicherweise auch anderen Personen (z.B. Gesellschaftsgläubigern) **bekannt machen**. Diese haben die Möglichkeit, gegen diese Maßnahme des Gerichts **Widerspruch** zu erheben. Durch Löschung ist die Gesellschaft danach **aufgelöst und auch ohne Abwicklung beendet**." },
      { typ: "tabelle", spalten: ["Weg zur Beendigung", "Voraussetzungen"], zeilen: [
        ["Regelfall", "Auflösung, Abwicklung, Schlussrechnung, Anmeldung nach § 74 Abs. 1 GmbHG und Löschung"],
        ["Bedeutung der Löschung im Regelfall", "nur deklaratorisch – beendet ist die Gesellschaft erst mit abgeschlossener Abwicklung"],
        ["Sonderfall Vermögenslosigkeit", "kein verwertbares Aktivvermögen; Bekanntmachung der Löschungsabsicht, Widerspruchsmöglichkeit"],
        ["Wirkung der Löschung im Sonderfall", "Auflösung und Beendigung zugleich, ohne Abwicklung"],
      ] },
      { text: "Anmerkung zur Lehre vom Doppeltatbestand (eigene Ergänzung): Die Aussage, die Löschung sei zwar erforderlich, aber allein nicht ausreichend, weil zusätzlich die Abwicklung abgeschlossen sein müsse, beschreibt die im Gesellschaftsrecht herrschende Auffassung: Die Gesellschaft ist erst beendet, wenn **beides** vorliegt – Löschung **und** Vermögenslosigkeit. Die praktische Folge ist erheblich: Taucht nach der Löschung noch Vermögen auf, etwa ein Erstattungsanspruch gegen das Finanzamt, besteht die Gesellschaft insoweit **fort** und ist nachträglich abzuwickeln. Steuerlich bedeutet das, dass Bescheide auch nach der Löschung noch ergehen können, wenn noch Vermögen oder ein Abwicklungsbedarf besteht." },
      { text: "Anmerkung zur Rolle der Steuern (eigene Ergänzung): Die Fußnote der Quelle nennt als Beispiel für die zu erfüllenden Verpflichtungen ausdrücklich **Steuererklärungen und Steuerschulden**. Das Finanzamt ist damit der typische letzte Gläubiger einer aufgelösten Gesellschaft – nicht zufällig, denn die Liquidationsbesteuerung nach § 11 KStG erfasst gerade den Abwicklungsgewinn, der erst am Ende feststeht. Der Kreis zum Sperrjahr (Abschnitt 1.2) und zur Pflicht des Liquidators nach § 34 AO (Abschnitt 1.1.2) schließt sich damit: Erst wenn die Steuern gezahlt sind, darf verteilt und danach gelöscht werden." },
    ],
  },
];

export default kstTeil7;
