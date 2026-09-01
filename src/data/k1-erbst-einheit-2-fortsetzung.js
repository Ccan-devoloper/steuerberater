/*
 * ErbStG, 2. Einheit – Fortsetzung des tatsächlich 457-seitigen Kurs-PDFs.
 * Diese Datei deckt die bislang fehlenden Originalseiten 151–457 ab.
 * Zoom-, Gesetzes-, Leer-, Wiederholungs-, Übergangs- und Fähnchenframes bleiben
 * im Seitenplan bewusst einem Primärinhalt zugeordnet.
 */
const modul=(daten)=>({area:"Modul",einheit:2,difficulty:"Vertiefung",minutes:34,diagram:null,sourcePages:[],...daten});
const fall=(daten)=>({area:"Fall",einheit:2,difficulty:"Originalfall",minutes:30,diagram:null,sourcePages:[],...daten});
const seiten=(von,bis)=>Array.from({length:bis-von+1},(_,i)=>von+i);

export const ERBST2_GESAMTSEITEN=457;
export const ERBST2_FORTSETZUNG_SEITEN=307;
export const erbst2FortsetzungSeitenplan={};
const ordne=(von,bis,id)=>{for(let s=von;s<=bis;s++)erbst2FortsetzungSeitenplan[s]=id;};
ordne(151,176,516);ordne(177,198,517);ordne(199,237,518);ordne(238,271,519);
ordne(272,281,520);ordne(282,302,521);ordne(303,324,522);ordne(325,362,523);
ordne(363,393,524);ordne(394,408,525);ordne(409,423,526);ordne(424,443,527);ordne(444,457,528);

const inhalte=[
modul({
 id:516,title:"§ 10 Abs. 6/6a und NNAS: nicht direkt zuordenbare Schulden vollständig aufteilen",
 law:"§ 10 Abs. 6 ErbStG · § 10 Abs. 6a S. 3, 5, 7, 8 ErbStG · R E 10.10 Abs. 2 S. 2",
 difficulty:"NNAS · Schuldenzuordnung",minutes:50,sourcePages:seiten(151,176),diagram:"erbst2f-nnas",
 intro:[
  "Die Seiten 151–158 schließen zunächst die unmittelbar zuvor begonnene Abzugsbegrenzung ab. Die Quelle stellt weiterhin vollständig steuerbefreite Wirtschaftsgüter (z.B. Familienheim), teilweise steuerbefreite Wirtschaftsgüter (z.B. § 13d) und die markierte Ausnahme für Hausrat/Pkw gegenüber.",
  "Ab Seite 159 beginnt der nächste ausdrücklich überschriebenen Klausurblock NNAS. Die Mitschrift sagt: Alle Verbindlichkeiten, die keinem Wirtschaftsgut direkt zugeordnet werden konnten, sind nach § 10 Abs. 6a S. 3 ErbStG auf alle Wirtschaftsgüter aufzuteilen.",
  "Das Original baut NNAS buchstabenweise auf: N = Nettowerte der einzelnen Wirtschaftsgüter; N = Nettowert aller Wirtschaftsgüter in Summe; A = Aufteilung der Schuld; S = anschließende Schuldenbegrenzung. Die Formel wird mit § 10 Abs. 6a S. 5, 7 und 8 verknüpft."
 ],
 goals:["direkte und nicht direkte Schuldzuordnung strikt trennen","Nettowert je Wirtschaftsgut vor der Verteilung bilden","den Gesamtnettowert als Verteilungsschlüssel bilden","nicht direkt zuordenbare Schuld proportional verteilen","nach der Verteilung die jeweilige Schuldenbegrenzung je Wirtschaftsgut prüfen"],
 scheme:[
  "Vorschritt: direkte Zuordnung vollständig erledigen; verbleibende Verbindlichkeiten sammeln.",
  "N: Nettowert jedes einzelnen WG = Wert des WG ./. Wert der direkt zugehörigen Schuld.",
  "N: Nettowerte aller WG addieren.",
  "A: nicht direkt zuordenbare Schuld nach § 10 Abs. 6a S. 3/5 ErbStG im Verhältnis Nettowert Einzel-WG / Nettowert aller WG aufteilen.",
  "S: den auf jedes WG entfallenden Schuldanteil nach § 10 Abs. 6a S. 7/8 ErbStG begrenzen, soweit das WG steuerbefreit ist.",
  "Quellen-Ausnahme Hausrat/Pkw aus R E 10.10 Abs. 2 S. 2 gesondert beachten."
 ],
 normchain:["§ 10 Abs. 6a S. 3 ErbStG","§ 10 Abs. 6a S. 5 ErbStG","§ 10 Abs. 6a S. 7 ErbStG","§ 10 Abs. 6a S. 8 ErbStG","R E 10.10 Abs. 2 S. 2"],
 example:{title:"NNAS als Vier-Schritt-Merkwort",facts:"Nach der direkten WSV-Zuordnung bleibt eine allgemeine Schuld übrig, die keinem einzelnen WG wirtschaftlich zugeordnet werden kann.",solution:["Nettowert jedes WG bilden.","Gesamtnettowert bilden.","Schuld verhältnismäßig aufteilen.","Den jeweiligen Anteil anschließend auf eine sachliche Steuerbefreiung des zugehörigen WG begrenzen."],result:"Die Schuld wird nicht pauschal vom Gesamterwerb abgezogen, sondern erst verteilt und dann je WG begrenzt."},
 merksatz:"NNAS = Nettowert einzeln – Nettowert gesamt – Aufteilung – Schuldenbegrenzung.",
 exam:["Quelle: ErbStG 2. Einheit, PDF-S. 151–176.","PDF-S. 159–176 bauen den NNAS-Algorithmus Schritt für Schritt handschriftlich auf; PDF-S. 161 zeigt zusätzlich die amtliche Verhältnisformel."],
 traps:["Bei NNAS den Bruttowert statt des Nettowerts als Schlüssel verwenden.","Die Schuldenbegrenzung vor der proportionalen Aufteilung vorwegnehmen."]
}),
modul({
 id:517,title:"Erbfallkosten und Erwerbsnebenkosten: § 10 Abs. 5 Nr. 3 vs. R E 7.4 Abs. 4",
 law:"§ 10 Abs. 5 Nr. 3 ErbStG · R E 7.4 Abs. 4 · H E 10.7",
 difficulty:"Erwerbsblock · Kosten",minutes:46,sourcePages:seiten(177,198),diagram:"erbst2f-kosten",
 intro:[
  "Die Quelle trennt nach Abschluss des WSV/NNAS deutlich zwei Kostenblöcke: links Erbfallkosten nach § 10 Abs. 5 Nr. 3 ErbStG, rechts Erwerbsnebenkosten nach R E 7.4 Abs. 4 und H E 10.7.",
  "Für Erbfallkosten notiert die Mitschrift den Erbfallkosten-Pauschbetrag von 15.000 € und daneben typische tatsächliche Kosten: Bestattung, angemessener Grabstein, Grabpflege, Grundbuch/Testamentseröffnung/Erbschein, Erbschaftsteuererklärung und Wertgutachten.",
  "Bei Schenkungen nennt der rechte Ast insbesondere Notar, Grundbuch und Handelsregister sowie Schenkungsteuererklärung und Wertgutachten. Die eingeblendete Richtlinie grenzt außerdem vor der Schenkung angefallene Steuer-/Rechtsberatung von den allgemeinen Erwerbsnebenkosten ab."
 ],
 goals:["Erbfallkosten und Schenkungs-Erwerbsnebenkosten nicht vermischen","den in der Quelle verwendeten 15.000-€-Pauschbetrag einordnen","typische tatsächliche Kosten dem richtigen Ast zuordnen","R E 7.4 Abs. 4/H E 10.7 als Quellenanker für Schenkungsnebenkosten nutzen"],
 scheme:[
  "Erwerb von Todes wegen? → § 10 Abs. 5 Nr. 3 ErbStG prüfen.",
  "Erbfallkosten-Pauschbetrag laut Quelle: 15.000 €; tatsächliche Kostenpositionen daneben erfassen, soweit im Fall relevant.",
  "Typische Quellenpositionen: Bestattung, angemessener Grabstein, Grabpflege, Grundbuch/Testamentseröffnung/Erbschein, ErbSt-Erklärung, Wertgutachten.",
  "Schenkung? → Erwerbsnebenkosten nach R E 7.4 Abs. 4/H E 10.7 prüfen.",
  "Typische Quellenpositionen: Notar, Grundbuch, Handelsregister; außerdem in der Mitschrift SchenkSt-Erklärung und Wertgutachten.",
  "Vor der Zuwendung veranlasste Steuer-/Rechtsberatung nach der eingeblendeten Richtlinie nicht ungeprüft als allgemeine Erwerbsnebenkosten übernehmen."
 ],
 normchain:["§ 10 Abs. 5 Nr. 3 ErbStG","R E 7.4 Abs. 4","H E 10.7"],
 example:{title:"Kosten-Gabel der Originalmitschrift",facts:"Im Erwerbsblock fallen Kosten rund um einen Erbfall bzw. eine Schenkung an.",solution:["Zuerst Erwerbsart bestimmen.","Erbfallkosten links nach § 10 Abs. 5 Nr. 3 prüfen.","Schenkungs-Erwerbsnebenkosten rechts nach R E 7.4 Abs. 4/H E 10.7 prüfen."],result:"Die Quelle hält die beiden Kostenarten als getrennte Klausuräste fest."},
 merksatz:"Tod = § 10 Abs. 5 Nr. 3; Schenkung = R E 7.4 Abs. 4/H E 10.7.",exam:["Quelle: PDF-S. 177–198; die Seiten 182–198 verdichten die Gegenüberstellung handschriftlich."],traps:["Den Erbfallkosten-Pauschbetrag in einen Schenkungsfall übertragen."]
}),
fall({
 id:518,caseNo:"15",title:"Fall 15: MFH, Ferrari, Spielschuld und Erbfallkosten – vollständige WSV/NNAS/E-Fahrtroute",
 law:"§ 12 ErbStG · § 13 Abs. 1 Nr. 1b ErbStG · § 13d ErbStG · § 10 Abs. 5 Nr. 1, 3 ErbStG · § 10 Abs. 6/6a ErbStG · § 16 ErbStG · § 19 ErbStG",
 difficulty:"Originalfall · Gesamtfall",minutes:72,sourcePages:seiten(199,237),diagram:"erbst2f-fall15",
 intro:[
  "Fall 15 ist der große Gesamtfall der Einheit. V verstirbt am 30.06.2025; seine 30-jährige Tochter T ist Alleinerbin. Im Nachlass stehen ein Mehrfamilienhaus mit festgestelltem Wert von 1,6 Mio. €, eine zugehörige Restschuld von 1,2 Mio. €, ein Ferrari F430 mit gemeinem Wert 200.000 €, Spielschulden von 9.000 €, Bestattungskosten von 10.000 € und laufende Grabpflegekosten von 476 € jährlich.",
  "Die handschriftliche Lösung arbeitet exakt in der bekannten Fahrtroute: III. steuerpflichtiger Erwerb – WSV → NNAS → E. Ferrari und MFH werden getrennt bewertet und befreit; anschließend wird die Spielschuld proportional verteilt und der jeweilige Anteil begrenzt; erst danach folgt der Kosten-/Freibetragsblock."
 ],
 goals:["einen vollständigen Mehr-WG-Fall in WSV → NNAS → E ordnen","Ferrari und MFH getrennt bewerten und sachlich befreien","eine allgemeine Spielschuld über Nettowerte verteilen","Erbfallkosten erst im E-Block berücksichtigen","persönlichen Freibetrag und Tarif erst nach den sachbezogenen Schritten anwenden"],
 scheme:[
  "WSV Ferrari: gemeinen Wert ansetzen; § 13 Abs. 1 Nr. 1b prüfen.",
  "WSV MFH: festgestellten Grundbesitzwert übernehmen; § 13d-Ermäßigung prüfen; zugehörige Restschuld direkt zuordnen und begrenzen.",
  "NNAS: Spielschuld als Nachlassverbindlichkeit prüfen, dann anhand der Nettowerte Ferrari/MFH aufteilen.",
  "S: den MFH-Schuldanteil wegen der teilweisen Steuerbefreiung anteilig begrenzen; den jeweils dargestellten Quellenansatz beibehalten.",
  "E: Bestattung/Grabpflege und Erbfallkosten-Pauschbetrag nach § 10 Abs. 5 Nr. 3 verarbeiten.",
  "Persönlichen Freibetrag nach § 16 abziehen; steuerpflichtigen Erwerb abrunden und Steuerklasse/Tarif nach § 19 anwenden."
 ],
 normchain:["§ 13 Abs. 1 Nr. 1b ErbStG","§ 13d ErbStG","§ 10 Abs. 5 Nr. 1 ErbStG","§ 10 Abs. 6a ErbStG","§ 10 Abs. 5 Nr. 3 ErbStG","§ 16 ErbStG","§ 19 ErbStG"],
 example:{title:"Originalfall 15",facts:"MFH 1.600.000 € mit Restschuld 1.200.000 €; Ferrari F430 200.000 €; Spielschuld 9.000 €; Bestattung 10.000 €; Grabpflege 476 € jährlich; T ist 30-jährige Tochter und Alleinerbin.",solution:["Die Quelle bewertet Ferrari und MFH separat und verarbeitet die sachlichen Befreiungen im WSV.","Die 9.000-€-Spielschuld wird danach über die Nettowerte verteilt; die Mitschrift rechnet mit einem Verhältnis 200.000 zu 400.000 und damit 3.000 € / 6.000 € vor weiterer Begrenzung.","Im E-Block werden die Erbfallkosten und anschließend der persönliche Freibetrag verarbeitet; am Ende folgt § 19."],result:"Fall 15 verbindet nahezu die gesamte bisherige ErbSt-Fahrtroute in einem Rechenfall."},
 merksatz:"Mehr-WG-Fall: erst jedes WG fertig, dann NNAS, dann E, erst ganz am Ende § 16/§ 19.",exam:["Quelle: PDF-S. 199–237. Die Originalrechnung wird über zahlreiche Zoom-/Fortschrittsframes aufgebaut."],traps:["Spielschuld vor der direkten Schuldzuordnung pauschal abziehen.","§ 16 schon auf einzelne Wirtschaftsgüter anwenden."]
}),
modul({
 id:519,title:"§ 12 ErbStG als Türöffner ins BewG: Bewertungs-Fahrtroute",
 law:"§ 12 Abs. 1–7 ErbStG · § 151 Abs. 1, 4 BewG · §§ 1–16 BewG · § 31 BewG",
 difficulty:"BewG · Master-Fahrtroute",minutes:44,sourcePages:seiten(238,271),diagram:"erbst2f-bewg-master",
 intro:[
  "Mit Seite 238 beginnt ausdrücklich das Bewertungsgesetz. Die Mitschrift bezeichnet § 12 ErbStG als 'Türöffner ins BewG' und baut daraus eine Verzweigung nach Vermögensart.",
  "Die Originalgrafik führt insbesondere GmbH-Anteile, inländische Grundstücke und inländisches Betriebs-/Personengesellschaftsvermögen zu gesondert festgestellten Werten nach § 151 Abs. 1 BewG. Für ausländisches Vermögen wird ein eigener Pfad über § 31/§ 9 BewG und § 151 Abs. 4 notiert. In allen anderen Fällen führt die Fahrtroute in die allgemeinen Bewertungsvorschriften §§ 1–16 BewG.",
  "Als typische 'andere Fälle' schreibt die Quelle Pkw, Hausrat, Aktien, Forderungen, Schulden, Wohnrecht, Nießbrauch und Renten in den Kasten."
 ],
 goals:["§ 12 ErbStG als Verweisnorm statt als eigenständige vollständige Bewertungsmethode lesen","Vermögensart vor der Bewertungsnorm bestimmen","gesondert festgestellte Werte von allgemeiner Einzelbewertung unterscheiden","die Original-Reiterfahrtroute in der Klausur wiederfinden"],
 scheme:[
  "§ 12 ErbStG öffnen und Vermögensart bestimmen.",
  "Beteiligung/Grundbesitz/Betriebsvermögen: den in der Quelle markierten speziellen Absatz und den gesondert festgestellten Wert nach § 151 BewG verfolgen.",
  "Ausländisches Vermögen: den gesonderten Quellenpfad über § 31/§ 9 BewG und § 151 Abs. 4 beachten.",
  "Alle anderen Fälle: § 12 Abs. 1 ErbStG → allgemeine Bewertungsvorschriften §§ 1–16 BewG.",
  "Dort die passende Spezialnorm für Wertpapier, Forderung/Schuld oder Nutzung/Leistung auswählen."
 ],
 normchain:["§ 12 ErbStG","§ 151 Abs. 1 BewG","§ 151 Abs. 4 BewG","§§ 1–16 BewG"],
 example:{title:"Türöffner statt Endnorm",facts:"Ein Pkw, eine GmbH-Beteiligung und ein inländisches Grundstück sollen bewertet werden.",solution:["Für jedes WG zunächst den passenden Absatz des § 12 ErbStG bestimmen.","Pkw führt in die allgemeinen §§ 1–16 BewG; Beteiligung und Grundstück folgen den speziell markierten Bewertungs-/Feststellungspfaden."],result:"Die Fahrtroute verhindert, dass für alle Vermögensarten derselbe Bewertungsmaßstab verwendet wird."},
 merksatz:"§ 12 ErbStG öffnet die richtige Tür – bewertet wird im BewG.",exam:["Quelle: PDF-S. 238–271; das handschriftliche Baum-/Kastenschema wird über viele Frames aufgebaut."],traps:["§ 12 ErbStG selbst als gemeinen-Wert-Tatbestand für jedes WG behandeln."]
}),
modul({
 id:520,title:"Allgemeine Bewertung: § 9 BewG als Grundregel/Auffangtatbestand",
 law:"§ 12 Abs. 1 ErbStG · § 9 Abs. 1, 2 BewG · §§ 1–16 BewG",
 difficulty:"BewG · Gemeiner Wert",minutes:30,sourcePages:seiten(272,281),diagram:"erbst2f-gemeiner-wert",
 intro:["Die Quelle überschreibt den Block mit 'Allgemeine Bewertungsvorschriften § 12 Abs. 1 E → §§ 1–16 B' und bezeichnet § 9 BewG als Grundregel/Auffangtatbestand.","§ 9 Abs. 1 liefert den gemeinen Wert; § 9 Abs. 2 konkretisiert ihn mit dem im gewöhnlichen Geschäftsverkehr erzielbaren Preis. In der Klausur nennt die Mitschrift u.a. Pkw, Fahrrad, Hausrat, Schmuck und Goldbarren als typische Fälle."],
 goals:["§ 9 BewG als Auffangmaßstab einordnen","gemeinen Wert mit dem gewöhnlichen Geschäftsverkehr verbinden","vor Anwendung von § 9 eine speziellere Bewertungsnorm ausschließen"],
 scheme:["§ 12 Abs. 1 ErbStG → §§ 1–16 BewG.","Spezialnorm vorhanden? Wenn nein: § 9 BewG als Grundregel/Auffangtatbestand.","Gemeinen Wert nach § 9 Abs. 1/2 anhand des im gewöhnlichen Geschäftsverkehr erzielbaren Preises bestimmen."],
 normchain:["§ 12 Abs. 1 ErbStG","§ 9 Abs. 1 BewG","§ 9 Abs. 2 BewG"],
 example:{title:"Klausurbeispiele der Quelle",facts:"Pkw, Fahrrad, Hausrat, Schmuck oder Goldbarren ohne spezielleren Bewertungsmaßstab.",solution:["Bewertungsweg über § 12 Abs. 1 ErbStG öffnen.","§ 9 BewG als Auffangtatbestand anwenden."],result:"Ansatz mit dem gemeinen Wert nach dem Quellenmaßstab."},merksatz:"Kein Spezialwert? → § 9 BewG.",exam:["Quelle: PDF-S. 272–281."],traps:["§ 9 trotz einer spezielleren Norm aus §§ 11–16 BewG vorziehen."]
}),
modul({
 id:521,title:"Bedingungen und Befristungen §§ 4–8 BewG: Wird heute überhaupt angesetzt?",
 law:"§§ 4–8 BewG · § 12 Abs. 1 ErbStG",
 difficulty:"BewG · Ansatzentscheidung",minutes:40,sourcePages:seiten(282,302),diagram:"erbst2f-bedingungen",
 intro:["Die Mitschrift formuliert die Funktion der §§ 4–8 BewG sehr knapp: Sie entscheiden, ob ein Vorgang heute zu berücksichtigen ist oder nicht.","Das Original zeichnet zwei farbliche Normpärchen: § 4 ↔ § 6 sowie § 5 ↔ § 7. An einem testamentarischen Bedingungsfall wird gezeigt, dass Forderung und korrespondierende Verpflichtung nicht unabhängig voneinander beurteilt werden dürfen."],
 goals:["Bedingung/Befristung vor der Wertberechnung prüfen","§ 4/§ 6 und § 5/§ 7 als korrespondierende Normpärchen merken","Ansatzentscheidung von späterer Wertermittlung trennen"],
 scheme:["Zuerst fragen: Ist Recht/Last am Bewertungsstichtag wegen Bedingung/Befristung überhaupt anzusetzen?","Aufschiebende Bedingung: Quellenpärchen § 4 / § 6 prüfen.","Auflösende Bedingung: Quellenpärchen § 5 / § 7 prüfen.","Erst nach positiver Ansatzentscheidung die Wertnorm anwenden."],
 normchain:["§ 4 BewG","§ 5 BewG","§ 6 BewG","§ 7 BewG","§ 8 BewG"],
 example:{title:"Bedingung vor Bewertung",facts:"Eine testamentarische Zuwendung bzw. korrespondierende Last hängt von einem noch nicht eingetretenen Ereignis ab.",solution:["Bedingung identifizieren.","Ansatz von Recht und Last nach den korrespondierenden §§ 4–7 prüfen.","Erst danach ggf. bewerten."],result:"Die Bedingungsnorm entscheidet zuerst über das Ob des Ansatzes."},merksatz:"§§ 4–8 = heute ja oder nein; Wert erst danach.",exam:["Quelle: PDF-S. 282–302; §4/6 und §5/7 werden als farbige Pärchen gezeichnet."],traps:["Eine bedingte Forderung sofort mit einem Betrag bewerten, ohne zuerst den Ansatz zu prüfen."]
}),
modul({
 id:522,title:"§ 11 BewG: Wertpapiere, nicht notierte Anteile und Investmentzertifikate",
 law:"§ 11 Abs. 1, 2, 4 BewG",
 difficulty:"BewG · Entscheidungsschema",minutes:42,sourcePages:seiten(303,324),diagram:"erbst2f-wertpapiere",
 intro:["Die Quelle startet die besonderen Bewertungsregeln mit einem Dreierbaum: 1. Wertpapiere/Anteile § 11, 2. Forderungen/Schulden § 12, 3. Nutzungen/Leistungen §§ 13–16 BewG.","Für § 11 entsteht anschließend ein echtes Wenn-dann-Schema: Kurswert am Stichtag? Falls ja, § 11 Abs. 1 S. 1. Falls nein: Kurs in den letzten 30 Tagen? Falls auch nein, 'Plan B'. Plan B unterscheidet Forderungspapiere, Anteile an Kapitalgesellschaften und Investmentzertifikate.","Für nicht notierte Kapitalgesellschaftsanteile markiert die Mitschrift den gemeinen Wert nach § 11 Abs. 2 und warnt ausdrücklich vor der Verwechslung von Ertragswert und Substanzwert. Investmentzertifikate führen zum Rücknahmepreis nach § 11 Abs. 4."],
 goals:["Kurswert-Stichtag und 30-Tage-Ersatzwert in der Quellenreihenfolge prüfen","Plan-B-Fälle unterscheiden","nicht notierte Kapitalgesellschaftsanteile nach § 11 Abs. 2 einordnen","Investmentzertifikate zum Rücknahmepreis führen"],
 scheme:["Kurswert am Bewertungsstichtag vorhanden? → § 11 Abs. 1 S. 1 BewG; Quellenhinweis 'Tagestief'.","Kein Stichtagskurs: Kurs innerhalb der letzten 30 Tage vorhanden? → § 11 Abs. 1 S. 2.","Auch kein solcher Kurs: Plan B nach Art des Papiers/Anteils.","Nicht notierter Anteil an Kapitalgesellschaft → gemeiner Wert § 11 Abs. 2.","Investmentzertifikat/Fondsanteil → Rücknahmepreis § 11 Abs. 4."],
 normchain:["§ 11 Abs. 1 BewG","§ 11 Abs. 2 BewG","§ 11 Abs. 4 BewG"],
 example:{title:"Original-Entscheidungsbaum § 11",facts:"Für ein Wertpapier liegt möglicherweise kein Kurs am Stichtag vor.",solution:["Stichtagskurs prüfen.","Dann 30-Tage-Fenster prüfen.","Erst danach den passenden Plan-B-Ast auswählen."],result:"§ 11 wird als Entscheidungsschema statt als bloße Normliste gelernt."},merksatz:"Stichtag → 30 Tage → Plan B.",exam:["Quelle: PDF-S. 303–324."],traps:["Bei nicht notierten GmbH-Anteilen einfach den letzten bekannten Börsenkurs verwenden."]
}),
modul({
 id:523,title:"§ 12 BewG: Kapitalforderungen und Schulden – Nennwert, Uneinbringlichkeit, Zinssonderfälle",
 law:"§ 12 Abs. 1–4 BewG · R B 12.1",
 difficulty:"BewG · Forderungen/Schulden",minutes:54,sourcePages:seiten(325,362),diagram:"erbst2f-forderungen",
 intro:["Die Mitschrift überschreibt den zweiten Ast mit 'Forderungen & Schulden § 12 B'. Grundsatz nach Abs. 1 ist der Nennwert, in der Quelle als Rückzahlungsbetrag erklärt.","Klausurbeispiele sind Bankguthaben, Kaufpreisschuld, rückständige Miete und Darlehen einschließlich bis zum Stichtag aufgelaufener offener Zinsen. Bargeld in Euro wird daneben ausdrücklich als Zählwert abgegrenzt; ausländische Währung wird nach dem Quellenhinweis umgerechnet.","Danach folgen die Ausnahmen: ganz/teilweise uneinbringliche Forderungen, unverzinsliche Forderungen/Schulden mit Restlaufzeit über einem Jahr sowie noch nicht fällige Ansprüche aus bestimmten Versicherungen. Die Mitschrift markiert außerdem hoch-, niedrig- und unverzinsliche Fälle als Vertiefung."],
 goals:["Nennwert als Grundsatz des § 12 Abs. 1 anwenden","offene Zinsen bis zum Stichtag berücksichtigen","Uneinbringlichkeit nach Abs. 2 gesondert prüfen","unverzinsliche Langläufer in Abs. 3 erkennen","Versicherungsansprüche nach Abs. 4 einordnen"],
 scheme:["Kapitalforderung/Schuld identifizieren.","Grundsatz § 12 Abs. 1: Nennwert/Rückzahlungsbetrag.","Offene Zinsen bis zum Bewertungsstichtag nach Quellenbeispiel hinzurechnen.","Uneinbringlich? → § 12 Abs. 2 prüfen.","Unverzinslich und Restlaufzeit > 1 Jahr? → § 12 Abs. 3: Abzinsung mit gesetzlichem Bewertungszins nach Quelle.","Noch nicht fälliger Anspruch aus Renten-/Lebens-/Kapitalversicherung? → § 12 Abs. 4 und Quellenwert beachten.","Hoch-/niedrig verzinst? → Vertiefungsblock der folgenden Seiten verwenden."],
 normchain:["§ 12 Abs. 1 BewG","§ 12 Abs. 2 BewG","§ 12 Abs. 3 BewG","§ 12 Abs. 4 BewG","R B 12.1"],
 example:{title:"Darlehen mit offenen Zinsen",facts:"Die Quelle rechnet bei einem Darlehen zum Stichtag zusätzlich bis dahin aufgelaufene offene Zinsen in den Forderungs-/Schuldenwert ein.",solution:["Nennwert bestimmen.","Stichtagsbezogene offene Zinsen ergänzen.","Erst dann Sondertatbestand Abs. 2–4 prüfen."],result:"§ 12 Abs. 1 bleibt Ausgangspunkt, Sonderregeln werden danach geprüft."},merksatz:"§ 12 BewG: erst Nennwert, dann Sonderfall.",exam:["Quelle: PDF-S. 325–362."],traps:["Bargeld in Euro unnötig über § 12 BewG bewerten.","Bei unverzinslicher Laufzeit über einem Jahr den Nennwert unverändert stehen lassen."]
}),
modul({
 id:524,title:"Vertiefung § 12 BewG: Fälligkeitsdarlehen vs. Tilgungsdarlehen – Tabelle 1 oder 2",
 law:"§ 12 Abs. 1, 3 BewG · R B 12.1",
 difficulty:"BewG · Tabellenfahrroute",minutes:48,sourcePages:seiten(363,393),diagram:"erbst2f-darlehen-tabelle",
 intro:["Die Vertiefung ordnet unverzinsliche bzw. besonders verzinste Forderungen/Schulden über eine große Zweispaltentabelle. Links steht § 12 Abs. 3 – Fälligkeitsdarlehen; rechts § 12 Abs. 1 – Tilgungsdarlehen.","Das Originalschema legt die Rechentechnik fest: Fälligkeitsdarlehen → Restlaufzeit taggenau nach dem Quellenhinweis Rn. 17, Tabelle 1, Vervielfältiger × Nennwert. Tilgungsdarlehen → Anzahl offene Raten / Anzahl Raten p.a., Quellenhinweis Rn. 25, Tabelle 2, Vervielfältiger × Jahresbetrag.","Mehrere Seiten blenden die amtlichen Erläuterungen zur Ermittlung von Lauf-/Aufschubzeiten und den Tabellen ein; diese werden digital als Rechenfahrroute, nicht als frei erfundene Tabelle, wiedergegeben."],
 goals:["Fälligkeits- und Tilgungsdarlehen unterscheiden","richtige Restlaufzeitseinheit bestimmen","Tabelle 1 und Tabelle 2 nicht vertauschen","Vervielfältiger mit der richtigen Bemessungsgröße multiplizieren"],
 scheme:["Unverzinsliche Forderung/Schuld mit Laufzeit > 1 Jahr identifizieren.","Einmalige Fälligkeit? → Fälligkeitsdarlehen / § 12 Abs. 3: Restlaufzeit taggenau, Tabelle 1, Vervielfältiger × Nennwert.","Laufende Tilgungsraten? → Tilgungsdarlehen / § 12 Abs. 1: offene Raten in Jahresanteile umrechnen, Tabelle 2, Vervielfältiger × Jahresbetrag.","Zwischen zwei vollen Tabellenjahren nach der in den Fällen gezeigten linearen Zeitanteilsrechnung interpolieren."],
 normchain:["§ 12 Abs. 3 BewG","§ 12 Abs. 1 BewG","R B 12.1"],
 example:{title:"Original-Zweispaltentabelle",facts:"Die Quelle fragt zuerst nach der Darlehensart und entscheidet daraus über Tabelle und Multiplikationsbasis.",solution:["Fälligkeit oder Tilgung bestimmen.","Restlaufzeit nach dem passenden Originalweg ermitteln.","Tabelle wählen und den Faktor auf Nennwert bzw. Jahresbetrag anwenden."],result:"Die Darlehensart entscheidet die gesamte Rechenroute."},merksatz:"Fälligkeit = Tab. 1 × Nennwert; Tilgung = Tab. 2 × Jahresbetrag.",exam:["Quelle: PDF-S. 363–393; das vollständige Originalschema steht insbesondere auf PDF-S. 392."],traps:["Bei einem Tilgungsdarlehen Tabelle 1 verwenden.","Tabelle 2 mit dem gesamten Nennwert multiplizieren."]
}),
fall({
 id:525,caseNo:"16",title:"Fall 16: unverzinsliche 200.000-€-Forderung – Fälligkeitsdarlehen und Tabelle 1",
 law:"§ 12 Abs. 1 ErbStG · § 12 Abs. 3 BewG",
 difficulty:"Originalfall · Abzinsung",minutes:34,sourcePages:seiten(394,408),diagram:"erbst2f-fall16",
 intro:["Fall 16 setzt am 20.06.2025 eine unverzinsliche Forderung von 200.000 € an, die am 31.10.2030 fällig wird. Die Lösung klassifiziert sie als Fälligkeitsdarlehen und führt über § 12 Abs. 3 BewG in Tabelle 1.","Die Restlaufzeit wird als 5 Jahre, 4 Monate und 11 Tage ermittelt. Die Quelle interpoliert zwischen den Faktoren für fünf Jahre (0,765) und sechs Jahre (0,725) mit 131/360 und erhält gerundet 0,750. Anschließend: 0,750 × 200.000 € = 150.000 €."],
 goals:["Restlaufzeit taggenau ermitteln","Tabelle 1 verwenden","zwischen Tabellenjahren wie in der Quelle interpolieren","Faktor mit Nennwert multiplizieren"],
 scheme:["§ 12 Abs. 1 ErbStG → § 12 Abs. 3 BewG.","Restlaufzeit 20.06.2025 bis 31.10.2030 bestimmen: 5 J. + 4 M. + 11 T.","Tab. 1: Faktor 5 Jahre 0,765; 6 Jahre 0,725.","Differenz 0,040 zeitanteilig mit 131/360 berücksichtigen; Quellenfaktor ≈ 0,750.","0,750 × 200.000 € = 150.000 €."],
 normchain:["§ 12 Abs. 3 BewG"],example:{title:"Originalfall 16",facts:"Unverzinsliche Forderung 200.000 €, Bewertungsstichtag 20.06.2025, Fälligkeit 31.10.2030.",solution:["Restlaufzeit 5 J. 4 M. 11 T.","Tabelle 1 und Interpolation auf 0,750.","Nennwert mit Faktor multiplizieren."],result:"Quellenwert: 150.000 €."},merksatz:"Einmalige Fälligkeit >1 Jahr: Tab. 1 × Nennwert.",exam:["Quelle: PDF-S. 394–408; PDF-S. 405 zeigt die Endrechnung 0,750 × 200.000 = 150.000."],traps:["Monate/Tage einfach auf volle Jahre runden."]
}),
fall({
 id:526,caseNo:"17",title:"Fall 17: unverzinsliche Monatsraten – Tilgungsdarlehen und Tabelle 2",
 law:"§ 12 Abs. 1 ErbStG · § 12 Abs. 1 BewG",
 difficulty:"Originalfall · Tilgungsdarlehen",minutes:38,sourcePages:seiten(409,423),diagram:"erbst2f-fall17",
 intro:["Fall 17 verwendet eine unverzinsliche Forderung mit monatlichen Tilgungsraten bis 31.10.2030. Anders als Fall 16 führt die Quelle deshalb in die rechte Spalte 'Tilgungsdarlehen'.","Die Restlaufzeit wird nicht taggenau als eine einzige Fälligkeit behandelt, sondern über die Zahl der noch offenen Raten in Jahresraten umgerechnet. Die Mitschrift zählt 65 Raten und rechnet 65 : 12 = 5 5/12 Jahre. Tabelle 2: fünf Jahre 4,388; sechs Jahre 5,133; zeitanteilige Interpolation ergibt 4,698."],
 goals:["Tilgungsdarlehen vom Fälligkeitsdarlehen abgrenzen","offene Monatsraten in Jahresanteile umrechnen","Tabelle 2 interpolieren","Faktor mit Jahresbetrag statt Nennwert verbinden"],
 scheme:["Tilgungsstruktur erkennen.","Offene Raten bis zur letzten Rate zählen; Quellenrechnung: 65 Raten.","65 / 12 = 5 5/12 Jahre.","Tab. 2: 5 J. = 4,388; 6 J. = 5,133; Differenz 0,745 × 5/12 = 0,310; Faktor 4,698.","Vervielfältiger × Jahresbetrag nach dem Originalschema."],
 normchain:["§ 12 Abs. 1 BewG"],example:{title:"Originalfall 17",facts:"Unverzinsliche Forderung mit monatlicher Tilgung und letzter Rate am 31.10.2030.",solution:["65 offene Raten bestimmen.","In 5 5/12 Jahre umrechnen.","Tabelle-2-Faktor 4,698 interpolieren und mit Jahresbetrag anwenden."],result:"Fall 17 demonstriert die rechte Spalte des Originalschemas."},merksatz:"Ratenzahlung = Tab. 2, offene Raten / Raten p.a.",exam:["Quelle: PDF-S. 409–423; PDF-S. 415 zeigt die Interpolation 4,388 → 4,698."],traps:["Die Endfälligkeit wie bei Fall 16 taggenau behandeln und Tabelle 1 verwenden."]
}),
fall({
 id:527,caseNo:"18",title:"Fall 18 / Zinssonderfall: niedrig verzinste Kapitalforderung und Zinsverlust",
 law:"§ 12 Abs. 1 BewG · R B 12.1",
 difficulty:"Originalfall · Zinssonderfall",minutes:44,sourcePages:seiten(424,443),diagram:"erbst2f-fall18",
 intro:["Der Schluss der §-12-Vertiefung behandelt hoch bzw. niedrig verzinste Kapitalforderungen/-schulden. Die eingeblendeten amtlichen Erläuterungen und die Handschrift zeigen, dass der Nennwert bei abweichender Verzinsung um den Kapitalwert des jährlichen Zinsvorteils bzw. Zinsnachteils korrigiert wird.","Im gezeigten Fall wird mit einem Nennwert von 200.000 €, einer tatsächlichen Verzinsung von 2 % und einem Vergleichswert von 3 % gerechnet. Der jährliche Zinsverlust beträgt damit 1 % × 200.000 € = 2.000 €. Mit dem aus Tabelle 2 interpolierten Faktor 4,659 ergibt die Quelle 9.318 € Kapitalwert des Zinsverlusts und einen Wert von 190.682 €."],
 goals:["niedrige/hohe Verzinsung als Korrektur des Nennwerts erkennen","jährliche Zinsdifferenz in Euro berechnen","Kapitalwert der Zinsdifferenz mit Tabelle 2 bestimmen","Vorzeichen der Wertkorrektur richtig wählen"],
 scheme:["Nennwert nach § 12 Abs. 1 als Ausgangspunkt.","Tatsächliche Verzinsung mit dem in der Quelle verwendeten Vergleichszins vergleichen.","Jährlichen Zinsvorteil/-verlust = Zinsdifferenz × Nennwert ermitteln.","Laufzeit/Tabelle-2-Faktor nach Quellenmethode bestimmen; gezeigter Faktor 4,659.","Niedrig verzinste Forderung: Kapitalwert des jährlichen Zinsverlusts vom Nennwert abziehen; Quellenrechnung 200.000 − 9.318 = 190.682 €.","Bei hoch verzinster Forderung die spiegelbildliche Erhöhung aus der amtlichen Erläuterung beachten."],
 normchain:["§ 12 Abs. 1 BewG","R B 12.1"],example:{title:"Original-Zinssonderfall",facts:"Nennwert 200.000 €, tatsächliche Verzinsung 2 %, Vergleichszins der Quellenrechnung 3 %, Restlaufzeit 5 J. 4 M. 11 T.",solution:["Zinsverlust 1 % = 2.000 € p.a.","Faktor 4,659.","Kapitalwert 9.318 €.","Vom Nennwert abziehen."],result:"Quellenwert: 190.682 €."},merksatz:"Niedrige Verzinsung: Nennwert minus Kapitalwert Zinsverlust; hohe Verzinsung spiegelbildlich plus.",exam:["Quelle: PDF-S. 424–443; PDF-S. 432/442 zeigen die 2.000-€-Zinsverlust- und 190.682-€-Endrechnung."],traps:["Nur den Jahreszinsverlust einmalig abziehen statt ihn auf die Restlaufzeit zu kapitalisieren."]
}),
modul({
 id:528,title:"Fähnchenkleben / Schlussfahrtroute: ErbStG ↔ BewG und Rückkehr zum WSV",
 law:"§ 12 ErbStG · §§ 1–16 BewG · § 13 ErbStG · § 10 ErbStG",
 difficulty:"Master-Recap",minutes:24,sourcePages:seiten(444,457),diagram:"erbst2f-flags",
 intro:["Die letzten Seiten enthalten keinen neuen isolierten Tatbestand, sondern einen visuellen Rückblick auf die Gesetzes-/Handbuchnavigation. Nach einem blauen Übergangsframe wird die farbige 'Fähnchenkleben'-Ansicht mehrfach gezoomt und mit Kreisen/Pfeilen markiert.","Die letzten drei Seiten kehren nochmals zum Hausrat-/bewegliche-WG-Schema vom Beginn der Einheit zurück. Diese Wiederholung bleibt im Seitenplan erhalten und wird als Abschlusskontrolle der Fahrtroute behandelt, nicht als neues materielles Thema."],
 goals:["ErbStG und BewG in der Prüfung schnell über die Reiterfahrtroute verbinden","nach der Bewertung wieder in WSV/sachliche Befreiung/Verbindlichkeit zurückkehren","Wiederholungsframes als Lernkontrolle nutzen, ohne Doppelstoff zu erzeugen"],
 scheme:["ErbStG: Erwerbstatbestand/Vorspann und WSV öffnen.","§ 12 ErbStG als Bewertungs-Türöffner nutzen.","BewG: passenden allgemeinen oder besonderen Bewertungsast wählen.","Mit dem ermittelten Wert zurück ins ErbStG: sachliche Befreiung § 13, zugehörige Verbindlichkeiten/Begrenzung § 10.","Am Ende persönliche Erwerbs-/Steuerberechnung aus Einheit 1 fortsetzen."],
 normchain:["§ 12 ErbStG","§§ 1–16 BewG","§ 13 ErbStG","§ 10 ErbStG"],
 example:{title:"Navigation statt neue Rechenregel",facts:"Die Schlussframes markieren die Gesetzesreiter und zoomen anschließend nochmals auf das Hausrat-Schema.",solution:["Bewertungspfad im BewG finden.","Wert ins WSV zurücktragen.","Befreiung und Schuldabzug getrennt weiterprüfen."],result:"Die Einheit endet mit einer navigierbaren Gesamtfahrtroute statt mit einem neuen Tatbestand."},merksatz:"ErbStG fragt – § 12 öffnet – BewG bewertet – ErbStG rechnet weiter.",exam:["Quelle: PDF-S. 444–457; Übergangs-, Fähnchen- und Wiederholungsframes sind vollständig zugeordnet."],traps:["Die Schlusswiederholung als neuen, zusätzlichen Freibetragstatbestand missverstehen."]
})
];

export default inhalte;
