/*
 * ErbSt 1. Einheit - redaktionell aus dem 150-seitigen/Frame-Kurs-PDF
 * "ErbSt, 1. Einheit.pdf" übertragen.
 *
 * Grundsatz wie bei AO: Jede PDF-Seite ist im erbst1Seitenplan genau einem
 * Primärinhalt zugeordnet. Wiederholungs-/Zoomframes bleiben bewusst im
 * Seitenplan, damit die Quelle lückenlos nachvollziehbar ist.
 */

const modul = (daten) => ({
  area: "Modul",
  einheit: 1,
  difficulty: "Grundlage",
  minutes: 30,
  diagram: null,
  sourcePages: [],
  ...daten,
});

export const erbst1Seitenplan = {
  1: 501, 2: 501, 3: 501, 4: 501, 5: 501, 6: 501, 7: 501, 8: 501, 9: 501, 10: 501,
  11: 501, 12: 501, 13: 501, 14: 501, 15: 501, 16: 501, 17: 501, 18: 501, 19: 501, 20: 501,
  21: 501, 22: 501, 23: 501, 24: 501,
  25: 502, 26: 502, 27: 502, 28: 502, 29: 502, 30: 502, 31: 502, 32: 502, 33: 502, 34: 502,
  35: 502, 36: 502, 37: 502, 38: 502, 39: 502, 40: 502, 41: 502, 42: 502, 43: 502, 44: 502,
  45: 502, 46: 502, 47: 502,
  48: 503, 49: 503, 50: 503, 51: 503, 52: 503, 53: 503, 54: 503, 55: 503, 56: 503, 57: 503,
  58: 503, 59: 503, 60: 503, 61: 503, 62: 503, 63: 503, 64: 503, 65: 503, 66: 503, 67: 503, 68: 503,
  69: 503, 70: 503,
  71: 504, 72: 504, 73: 504, 74: 504, 75: 504, 76: 504, 77: 504, 78: 504, 79: 504, 80: 504,
  81: 504, 82: 504, 83: 504, 84: 504, 85: 504, 86: 504, 87: 504,
  88: 505, 89: 505, 90: 505, 91: 505, 92: 505, 93: 505, 94: 505, 95: 505, 96: 505, 97: 505, 98: 505,
  99: 506, 100: 506, 101: 506, 102: 506, 103: 506, 104: 506, 105: 506, 106: 506, 107: 506, 108: 506,
  109: 506, 110: 506, 111: 506, 112: 506, 113: 506,
  114: 507, 115: 507, 116: 507, 117: 507, 118: 507, 119: 507, 120: 507, 121: 507, 122: 507,
  123: 507, 124: 507, 125: 507, 126: 507, 127: 507, 128: 507, 129: 507, 130: 507, 131: 507,
  132: 508, 133: 508, 134: 508, 135: 508, 136: 508, 137: 508, 138: 508, 139: 508, 140: 508,
  141: 508, 142: 508, 143: 508, 144: 508, 145: 508, 146: 508, 147: 508, 148: 508, 149: 508, 150: 508,
};

const inhalte = [
  modul({
    id: 501,
    title: "Arbeitsmittel, Gesetzeszusammenspiel und Kurslogik",
    law: "ErbStG · BewG · ErbStR/ErbStH · Bewertungsrichtlinien/-hinweise",
    difficulty: "Einordnung",
    minutes: 18,
    sourcePages: Array.from({ length: 24 }, (_, i) => i + 1),
    diagram: "erbst-arbeitsmittel",
    intro: [
      "Die ersten 24 Frames eröffnen die Einheit mit den Arbeitsmitteln und der Lernlogik. Gezeigt werden das amtliche Erbschaftsteuer-Handbuch, die Beck-Texte ErbSt/BewG/GrSt, die farbige Reiter-/Lineal-Systematik und anschließend das Zusammenspiel von ErbStG und BewG.",
      "Die Quelle zeichnet ErbStG und BewG als ineinandergreifende Zahnräder: Das ErbStG stellt die erbschaft- bzw. schenkungsteuerliche Frage; für die Bewertung wird in das BewG gewechselt und anschließend in das ErbStG zurückgekehrt.",
      "Die Frames 11/12 und 21–24 sind didaktische Einstiege bzw. Memes/Filmszenen. Sie enthalten keinen zusätzlichen Prüfungstatbestand, werden im Seitenplan aber ausdrücklich mitgeführt, damit keine Quellenseite verloren geht.",
    ],
    goals: [
      "ErbStG, BewG und Richtlinien/Hinweise als getrennte, aber miteinander verzahnte Arbeitsmittel einordnen",
      "bei Bewertungsfragen den Wechsel ErbStG → BewG → ErbStG als feste Fahrtroute verwenden",
      "die in der Quelle genutzten Reiter-/Farbcodes als Navigationshilfe und nicht als eigene Rechtsgrundlage verstehen",
    ],
    scheme: [
      "Erbschaft-/Schenkungsteuerliche Ausgangsfrage im ErbStG lokalisieren.",
      "Soweit ein Wert zu ermitteln ist, über § 12 ErbStG in das BewG wechseln.",
      "Bewertung im BewG durchführen.",
      "Mit dem ermittelten Wert in das ErbStG zurückkehren und die steuerliche Berechnung fortsetzen.",
      "Richtlinien und Hinweise nur als Auslegungs-/Arbeitsmittel neben dem Gesetz heranziehen.",
    ],
    normchain: ["ErbStG", "§ 12 ErbStG", "BewG", "ErbStR/ErbStH"],
    example: {
      title: "Zahnräder der Einheit",
      facts: "Die Quelle zeigt ErbStG und BewG als zwei Zahnräder, die sich gegenseitig antreiben.",
      solution: [
        "Das ErbStG bestimmt, ob und in welchem Umfang ein Erwerb steuerlich relevant ist.",
        "Für die Wertfindung verweist die Einheit in das BewG.",
        "Nach der Bewertung wird mit dem Wert im ErbStG weitergerechnet.",
      ],
      result: "Die Bewertung ist kein isolierter Block: Sie ist in den erbschaftsteuerlichen Lösungsaufbau eingebettet.",
    },
    merksatz: "ErbStG fragt - BewG bewertet - ErbStG rechnet weiter.",
    exam: [
      "Quelle: ErbSt 1. Einheit, PDF-S. 1–24.",
      "PDF-S. 3–10 zeigen die Arbeitsmittel; S. 14–17 die Bewertungsmaßstab-/Reiterhilfe; S. 18–20 die Zahnräder ErbStG/BewG.",
      "Die didaktischen Frames werden nicht künstlich mit Rechtsstoff aufgeladen, bleiben aber vollständig im Seitenplan dokumentiert.",
    ],
    traps: [
      "Bewertungsvorschriften des BewG bereits als Steuerbefreiung behandeln.",
      "Richtlinienhinweise wie selbständige gesetzliche Tatbestände zitieren.",
    ],
  }),

  modul({
    id: 502,
    title: "Lösungsaufbau ErbSt: I. Vorspann",
    law: "§ 1 ErbStG · § 3 ErbStG · § 7 ErbStG · § 2 ErbStG · § 20 ErbStG · § 15 ErbStG · § 9 ErbStG · § 11 ErbStG",
    difficulty: "Grundschema",
    minutes: 34,
    sourcePages: Array.from({ length: 23 }, (_, i) => i + 25),
    diagram: "erbst-vorspann",
    intro: [
      "Ab PDF-S. 25 wird der klausurmäßige Lösungsaufbau handschriftlich aufgebaut. Die Quelle nennt als Arbeitsrichtung sinngemäß: ErbStG für die Steuer, BewG für die Bewertung; Richtlinien/Hinweise dienen als Ergänzung. Die Rundung wird mit H E 10.1 bzw. der Handbuchfundstelle notiert.",
      "Der Vorspann besteht aus fünf festen Prüfpunkten. Die Quelle arbeitet bewusst knapp: sachlicher Vorgang, persönliche Steuerpflicht, Steuerschuldner, Steuerklasse sowie Steuerentstehung/Bewertungsstichtag.",
    ],
    goals: [
      "die fünf Vorspann-Punkte in Originalreihenfolge abrufen",
      "Erwerb von Todes wegen und Schenkung unter Lebenden bereits beim sachlichen Vorgang trennen",
      "unbeschränkte/beschränkte persönliche Steuerpflicht als eigenständige Stufe prüfen",
      "Steuerschuldner und Steuerklasse nicht erst bei der Tarifberechnung nachholen",
      "Steuerentstehung und Bewertungsstichtag als zusammengehöriges Normpaar behandeln",
    ],
    scheme: [
      "1. § 1 ErbStG: sachlichen steuerbaren Vorgang bestimmen; in der Quelle wird auf § 3 ErbStG (Erwerb von Todes wegen) bzw. § 7 ErbStG (Schenkung unter Lebenden; markiert ist insbesondere § 7 Abs. 1 Nr. 1) verzweigt.",
      "2. § 2 ErbStG: persönliche Steuerpflicht - unbeschränkt oder beschränkt. Quellenhinweis: Für die unbeschränkte Steuerpflicht genügt die gesetzliche Anknüpfung bei einer beteiligten Person ('Einer reicht!').",
      "3. § 20 ErbStG: Steuerschuldner bestimmen. Die Mitschrift mahnt, alle einschlägigen Steuerschuldner mitzudenken ('so viele wie möglich').",
      "4. § 15 ErbStG: Steuerklasse I, II oder III festlegen.",
      "5. § 9 ErbStG: Steuerentstehung und § 11 ErbStG: Bewertungsstichtag unmittelbar zusammen prüfen.",
    ],
    normchain: ["§ 1 ErbStG", "§ 3 ErbStG / § 7 ErbStG", "§ 2 ErbStG", "§ 20 ErbStG", "§ 15 ErbStG", "§ 9 ErbStG", "§ 11 ErbStG"],
    example: {
      title: "Der Fünfer-Vorspann",
      facts: "Noch bevor der Wert des Erwerbs berechnet wird, verlangt die Quelle fünf formale Einordnungen.",
      solution: [
        "Sachlichen Vorgang festlegen.",
        "Persönliche Steuerpflicht klären.",
        "Steuerschuldner benennen.",
        "Steuerklasse bestimmen.",
        "Steuerentstehung und Bewertungsstichtag festhalten.",
      ],
      result: "Erst wenn der Vorspann steht, wechselt die Lösung in Einleitung und Ermittlung des steuerpflichtigen Erwerbs.",
    },
    merksatz: "§ 1 - § 2 - § 20 - § 15 - § 9/§ 11: Der Vorspann kommt vor jede Wertrechnung.",
    exam: [
      "Quelle: ErbSt 1. Einheit, PDF-S. 25–47.",
      "S. 31–47 bauen die fünf Punkte schrittweise auf; S. 38–40 visualisieren die drei Steuerklassen; S. 45–47 koppeln § 9 und § 11.",
    ],
    traps: [
      "Steuerklasse erst nach dem steuerpflichtigen Erwerb bestimmen und dadurch Freibeträge/Tarif nicht sauber zuordnen.",
      "Steuerentstehung (§ 9) und Bewertungsstichtag (§ 11) voneinander lösen.",
    ],
  }),

  modul({
    id: 503,
    title: "II. Einleitung: Bereicherung und gemischte Schenkung / Schenkung unter Auflage",
    law: "§ 10 Abs. 1 S. 1–2 ErbStG · R E 7.4 Abs. 1 S. 1–2 · § 12 ErbStG · § 10 Abs. 6 ErbStG",
    difficulty: "Prüfungsrelevant",
    minutes: 36,
    sourcePages: Array.from({ length: 23 }, (_, i) => i + 48),
    diagram: "erbst-einleitung",
    intro: [
      "Die Einleitung wird in der Quelle ausdrücklich als 'Copy & Paste'-Baustein aufgebaut. Gesetzlich ist § 10 Abs. 1 S. 1–2 ErbStG der Ausgangspunkt; als Richtlinienbaustein wird R E 7.4 Abs. 1 S. 1–2 herangezogen.",
      "Die Frames 51–66 zeigen die konkrete Recherche: § 10 ErbStG wird aufgerufen und anschließend R E 7.4 'Gemischte Schenkungen sowie Schenkungen unter einer Auflage'. Die hervorgehobenen Sätze erklären die Bereicherung als Differenz zwischen Leistung des Schenkers und abzugsfähigen Gegenleistungen/Auflagen des Beschenkten.",
    ],
    goals: [
      "§ 10 Abs. 1 ErbStG als Einleitungsnorm sicher an den Beginn der Erwerbsberechnung setzen",
      "bei gemischter Schenkung und Schenkung unter Auflage R E 7.4 als Quellenbaustein erkennen",
      "Leistung des Schenkers und Gegenleistung/Leistungs-, Nutzungs- oder Duldungsauflage getrennt bewerten",
      "die Abzugsbeschränkung des § 10 Abs. 6 ErbStG bereits bei der Einleitung vormerken",
    ],
    scheme: [
      "§ 10 Abs. 1 S. 1 ErbStG: steuerpflichtiger Erwerb = Bereicherung des Erwerbers, soweit nicht steuerfrei.",
      "§ 10 Abs. 1 S. 2 ErbStG: bei Erwerb von Todes wegen Bereicherung aus dem nach § 12 ErbStG bewerteten Vermögensanfall nach Abzug der abzugsfähigen Nachlassverbindlichkeiten bestimmen.",
      "Bei gemischter Schenkung/Schenkung unter Auflage nach R E 7.4 Abs. 1: Steuerwert der Leistung des Schenkers nach § 12 ErbStG ermitteln.",
      "Gegenleistungen sowie übernommene Leistungs-, Nutzungs- und Duldungsauflagen mit ihrem nach § 12 ErbStG ermittelten Wert abziehen.",
      "Abzugsverbote/-beschränkungen des § 10 Abs. 6 ErbStG beachten, insbesondere wenn Steuerbefreiungen oder bereits wertmindernd berücksichtigte Nutzungsrechte betroffen sind.",
    ],
    normchain: ["§ 10 Abs. 1 S. 1–2 ErbStG", "R E 7.4 Abs. 1 S. 1–2", "§ 12 ErbStG", "§ 10 Abs. 6 ErbStG"],
    example: {
      title: "R E 7.4 - Quellenlogik",
      facts: "Eine Zuwendung ist mit einer Gegenleistung oder Auflage verbunden.",
      solution: [
        "Zuerst wird der Steuerwert der Leistung des Schenkers nach § 12 ErbStG festgestellt.",
        "Danach werden die nach der Richtlinie berücksichtigungsfähigen Gegenleistungen/Auflagen bewertet.",
        "Der Abzug erfolgt nur, soweit § 10 Abs. 6 ErbStG ihn nicht beschränkt oder ausschließt.",
      ],
      result: "Die gemischte Schenkung wird als Bereicherung nach § 10 ErbStG berechnet, nicht über einen eigenen Steuertatbestand.",
    },
    merksatz: "Einleitung = § 10 Abs. 1 ErbStG; bei gemischter Schenkung/Auflage den R-E-7.4-Baustein direkt anschließen.",
    exam: [
      "Quelle: ErbSt 1. Einheit, PDF-S. 48–70.",
      "S. 49/67–70 zeigen den 'Copy & Paste'-Baustein; S. 53 zeigt § 10 ErbStG; S. 56–66 R E 7.4 mit markierten Kernaussagen.",
    ],
    traps: [
      "Gegenleistungen ungeprüft vollständig abziehen, obwohl § 10 Abs. 6 ErbStG den Abzug beschränkt.",
      "Bereits bei der Einleitung Steuerklasse oder Tarif anwenden; diese gehören erst in die Steuerberechnung.",
    ],
  }),

  modul({
    id: 504,
    title: "III. Ermittlung des steuerpflichtigen Erwerbs - Schritt 1: WSV, Bewertung, sachliche Befreiungen und zuordenbare Belastungen",
    law: "§ 12 ErbStG · BewG · §§ 13–13d ErbStG · § 10 Abs. 5 Nr. 1–2 ErbStG · R E 7.4 Abs. 1 S. 2 · § 10 Abs. 6, 6a ErbStG",
    difficulty: "Kernschema",
    minutes: 46,
    sourcePages: Array.from({ length: 17 }, (_, i) => i + 71),
    diagram: "erbst-wsv",
    intro: [
      "Die Quelle überschreibt den Hauptblock mit 'III. Ermittlung stpfl. Erwerb' und baut Schritt 1 unter der Abkürzung 'WSV' auf. Die Abkürzung wird in der Mitschrift selbst nicht ausgeschrieben; sie wird deshalb digital bewusst als Quellenkürzel beibehalten.",
      "Das Original arbeitet mit drei Kreisen und Pfeilen: je Wirtschaftsgut zuerst den Wert für das WSV über § 12 ErbStG/BewG ermitteln, danach sachliche Steuerbefreiungen (§§ 13–13d ErbStG) prüfen und die unmittelbar zu diesem Wirtschaftsgut gehörenden Verbindlichkeiten direkt mitbearbeiten.",
    ],
    goals: [
      "für jedes Wirtschaftsgut Bewertung und sachliche Steuerbefreiung getrennt prüfen",
      "§ 12 ErbStG als Sprungnorm in das BewG verwenden",
      "Nachlassverbindlichkeiten sowie Gegenleistungen/Auflagen danach unterscheiden, ob sie einem konkreten Wirtschaftsgut zugeordnet werden können",
      "§ 10 Abs. 6/6a ErbStG als Begrenzungsnormen für den Schuldenabzug beachten",
    ],
    scheme: [
      "Schritt 1: je Wirtschaftsgut den Wert für das WSV ermitteln: § 12 ErbStG → BewG.",
      "Sachliche Steuerbefreiungen nach §§ 13–13d ErbStG prüfen.",
      "Verbindlichkeiten, die zu einem bestimmten Wirtschaftsgut gehören, unmittelbar bei diesem Wirtschaftsgut behandeln.",
      "Als Quellenbelege nennt die Mitschrift insbesondere Nachlassverbindlichkeiten nach § 10 Abs. 5 Nr. 1–2 ErbStG sowie Gegenleistungen/Auflagen nach R E 7.4 Abs. 1 S. 2.",
      "Abzugsfähigkeit begrenzen: wirtschaftlicher Zusammenhang und Steuerbefreiungen nach § 10 Abs. 6/6a ErbStG beachten; die Quelle visualisiert, dass ein Abzug dadurch ganz oder teilweise auf 0 € reduziert werden kann.",
    ],
    normchain: ["§ 12 ErbStG", "BewG", "§§ 13–13d ErbStG", "§ 10 Abs. 5 Nr. 1–2 ErbStG", "R E 7.4 Abs. 1 S. 2", "§ 10 Abs. 6/6a ErbStG"],
    example: {
      title: "Drei-Kreis-Fahrtroute je Wirtschaftsgut",
      facts: "Ein Vermögensgegenstand ist zu bewerten, möglicherweise steuerbefreit und mit einer zuordenbaren Verbindlichkeit belastet.",
      solution: [
        "Wert nach § 12 ErbStG/BewG ermitteln.",
        "Sachliche Steuerbefreiung prüfen.",
        "Direkt zuordenbare Verbindlichkeit im selben Wirtschaftsgut-Block erledigen.",
        "Schuldenabzugsbeschränkung nach § 10 Abs. 6/6a ErbStG kontrollieren.",
      ],
      result: "Bewertung, Befreiung und zuordenbare Belastung werden pro Wirtschaftsgut als Einheit abgearbeitet.",
    },
    merksatz: "Je WG: bewerten → sachliche Befreiung → direkt zuordenbare Belastung → Abzugsbegrenzung.",
    exam: [
      "Quelle: ErbSt 1. Einheit, PDF-S. 71–87.",
      "S. 74–86 enthalten das schrittweise aufgebaute Drei-Kreis-Schema samt Randnotizen 'Belegen / Beachten / Begrenzen'.",
    ],
    traps: [
      "Erst alle Aktiva bewerten und sämtliche Verbindlichkeiten ungeordnet am Ende abziehen; die Quelle verlangt die direkte Zuordnung, soweit möglich.",
      "Sachliche Steuerbefreiung und Bewertung miteinander vermischen.",
    ],
  }),

  modul({
    id: 505,
    title: "Schritt 2: NNAS - nicht direkt zuordenbare Schulden/Lasten proportional verteilen",
    law: "§ 10 Abs. 5 Nr. 1–2 ErbStG · R E 7.4 Abs. 1 S. 2 · § 10 Abs. 6a S. 3 ErbStG",
    difficulty: "Verteilungsschema",
    minutes: 30,
    sourcePages: Array.from({ length: 11 }, (_, i) => i + 88),
    diagram: "erbst-nnas",
    intro: [
      "Nach dem wirtschaftsgutbezogenen Schritt 1 eröffnet die Quelle 'Schritt 2: NNAS'. Auch dieses Kürzel wird in den Frames nicht ausgeschrieben; die inhaltliche Notiz ist dagegen eindeutig: Verbindlichkeiten, die keinem Wirtschaftsgut zugeordnet werden können, sind auf alle Wirtschaftsgüter aufzuteilen.",
      "Als Merkhilfe blendet der Kurs ein Eiscafé mit einem Wert von 45.000 € ein. Das Bild dient ersichtlich der Zuordnungs-/Verteilungslogik, enthält aber keinen vollständig ausformulierten Klausursachverhalt; digital wird deshalb kein zusätzlicher Sachverhalt erfunden.",
    ],
    goals: [
      "direkt zuordenbare und nicht direkt zuordenbare Schulden/Lasten trennen",
      "die proportionale Aufteilung nach § 10 Abs. 6a S. 3 ErbStG als zweiten Verarbeitungsschritt anwenden",
      "Nachlassverbindlichkeiten und Gegenleistungen/Auflagen als mögliche Ausgangsposten erkennen",
    ],
    scheme: [
      "Nach Schritt 1 alle noch nicht erledigten Nachlassverbindlichkeiten (§ 10 Abs. 5 Nr. 1–2 ErbStG) sowie Gegenleistungen/Auflagen (R E 7.4 Abs. 1 S. 2) sammeln.",
      "Prüfen, ob sie einem einzelnen Wirtschaftsgut wirtschaftlich zugeordnet werden können.",
      "Soweit keine Einzelzuordnung möglich ist, die Beträge nach der Quellenlogik auf alle Wirtschaftsgüter verteilen; die Mitschrift verweist hierfür auf § 10 Abs. 6a S. 3 ErbStG.",
      "Erst danach den Erwerbsblock fortführen.",
    ],
    normchain: ["§ 10 Abs. 5 Nr. 1–2 ErbStG", "R E 7.4 Abs. 1 S. 2", "§ 10 Abs. 6a S. 3 ErbStG"],
    example: {
      title: "Quellenbeispiel Eiscafé",
      facts: "Die Quelle zeigt als Merkhilfe ein Eiscafé-Angebot mit 45.000 € und ordnet es in den Übergang zu Schritt 2 ein. Weitere Tatsachen werden im PDF nicht mitgeteilt.",
      solution: [
        "Die Darstellung soll die Frage provozieren, welcher Vermögensgegenstand durch eine Schuld/Last belastet ist.",
        "Fehlt eine konkrete Zuordnung, greift die in der Mitschrift notierte Aufteilung nach § 10 Abs. 6a S. 3 ErbStG.",
      ],
      result: "Nicht zuordenbare Posten bleiben nicht unberücksichtigt, sondern werden nach der gesetzlichen Verteilungsregel verteilt.",
    },
    merksatz: "Was keinem einzelnen WG zugeordnet werden kann, wird nach § 10 Abs. 6a S. 3 verteilt.",
    exam: [
      "Quelle: ErbSt 1. Einheit, PDF-S. 88–98.",
      "S. 89–92 zeigen die Eiscafé-Merkhilfe; S. 93–98 notieren die Verteilungsregel ausdrücklich.",
    ],
    traps: [
      "Nicht zuordenbare Schulden vollständig einem beliebigen steuerpflichtigen Wirtschaftsgut zurechnen.",
      "Aus dem Eiscafé-Bild einen nicht in der Quelle enthaltenen Klausursachverhalt konstruieren.",
    ],
  }),

  modul({
    id: 506,
    title: "Schritt 3: Bereicherung, persönliche Freibeträge und Abrundung zum steuerpflichtigen Erwerb",
    law: "§ 10 Abs. 5 Nr. 3 ErbStG · R E 7.4 Abs. 4 · § 16 ErbStG · § 14 Abs. 1 S. 1 ErbStG · § 17 ErbStG · § 5 ErbStG · § 10 Abs. 1 S. 6 ErbStG",
    difficulty: "Berechnungsschema",
    minutes: 38,
    sourcePages: Array.from({ length: 15 }, (_, i) => i + 99),
    diagram: "erbst-erwerb",
    intro: [
      "Schritt 3 wird in den Frames zunächst mit zwei Abzugsposten eröffnet: Erbfallkosten nach § 10 Abs. 5 Nr. 3 ErbStG und Erwerbsnebenkosten nach R E 7.4 Abs. 4. Die Mitschrift setzt daneben eine deutliche Merknote: nicht auf einzelne Wirtschaftsgüter verteilen, sondern im Erwerbsblock vollständig berücksichtigen, soweit die jeweilige Voraussetzung erfüllt ist.",
      "Anschließend wird die Bereicherung zum steuerpflichtigen Erwerb fortgerechnet: persönlicher Freibetrag, Vorerwerbe innerhalb von zehn Jahren, ggf. Versorgungsfreibetrag/Zugewinnausgleich und am Ende Abrundung auf volle 100 €.",
    ],
    goals: [
      "Erbfallkosten und Erwerbsnebenkosten an der richtigen Stelle des Schemas abziehen",
      "Bereicherung, Vorerwerbe und persönliche Freibeträge in der Reihenfolge der Quelle verrechnen",
      "§ 16, § 17 und § 5 ErbStG als personenbezogene Entlastungen von sachlichen Befreiungen unterscheiden",
      "den steuerpflichtigen Erwerb vor der Tarifanwendung auf volle 100 € abrunden",
    ],
    scheme: [
      "Erbfallkosten nach § 10 Abs. 5 Nr. 3 ErbStG abziehen.",
      "Bei Schenkungen Erwerbsnebenkosten nach R E 7.4 Abs. 4 als eigenen Abzugsposten prüfen; die Quelle behandelt diese nicht wirtschaftsgutbezogen.",
      "Zwischenergebnis: Bereicherung.",
      "Persönlichen Freibetrag nach § 16 ErbStG berücksichtigen.",
      "Vorerwerbe innerhalb von zehn Jahren nach § 14 Abs. 1 S. 1 ErbStG hinzurechnen und den im §-14-Mechanismus maßgeblichen Freibetrag/Steuerabzug sauber behandeln.",
      "Ggf. Versorgungsfreibetrag nach § 17 ErbStG und die in der Quelle markierte Zugewinnregel des § 5 ErbStG berücksichtigen.",
      "Ergebnis = steuerpflichtiger Erwerb; nach § 10 Abs. 1 S. 6 ErbStG auf volle 100 € nach unten abrunden.",
    ],
    normchain: ["§ 10 Abs. 5 Nr. 3 ErbStG", "R E 7.4 Abs. 4", "§ 16 ErbStG", "§ 14 Abs. 1 S. 1 ErbStG", "§ 17 ErbStG", "§ 5 ErbStG", "§ 10 Abs. 1 S. 6 ErbStG"],
    example: {
      title: "Vom Erwerbsblock zum steuerpflichtigen Erwerb",
      facts: "Nach Bewertung, sachlichen Befreiungen und Schuldenzuordnung steht ein Bereicherungsbetrag fest.",
      solution: [
        "Kostenblock nach § 10 Abs. 5 Nr. 3 bzw. R E 7.4 Abs. 4 prüfen.",
        "Persönliche Freibeträge und ggf. Vorerwerbe/weitere persönliche Entlastungen einarbeiten.",
        "Den finalen steuerpflichtigen Erwerb auf volle 100 € abrunden.",
      ],
      result: "Erst der abgerundete steuerpflichtige Erwerb wird in § 19 ErbStG tarifiert.",
    },
    merksatz: "Sachliche Befreiung beim WG - persönliche Freibeträge erst beim Erwerb - Tarif ganz am Ende.",
    exam: [
      "Quelle: ErbSt 1. Einheit, PDF-S. 99–113.",
      "S. 100–108 bauen Erbfallkosten/Erwerbsnebenkosten auf; S. 109–113 zeigen den personenbezogenen Abzugsblock und die Abrundung nach § 10 Abs. 1 S. 6.",
    ],
    traps: [
      "§ 16-Freibetrag bereits pro Wirtschaftsgut abziehen.",
      "Abrundung erst nach Anwendung des Steuersatzes vornehmen.",
    ],
  }),

  modul({
    id: 507,
    title: "IV. Steuerberechnung: § 19 ErbStG und Härteausgleich",
    law: "§ 19 Abs. 1 ErbStG · § 19 Abs. 3 ErbStG",
    difficulty: "Tarif & Rechentabelle",
    minutes: 44,
    sourcePages: Array.from({ length: 18 }, (_, i) => i + 114),
    diagram: "erbst-steuersatz",
    intro: [
      "Mit PDF-S. 114 wechselt die Quelle in die Steuerberechnung und öffnet § 19 ErbStG. Die Tariftabelle wird mehrfach gezoomt, markiert und mit Rechenansätzen versehen. Entscheidend ist: Bemessungsgröße ist der steuerpflichtige Erwerb nach § 10; der Prozentsatz richtet sich nach Wertstufe und Steuerklasse.",
      "Die Frames 127–130 zeigen zusätzlich die amtliche Tabelle der maßgebenden Grenzwerte für den Härteausgleich nach § 19 Abs. 3 ErbStG. Diese Grenzwerte werden digital als eigene Tabelle übernommen, damit der Sprung an einer Tarifstufe nicht pauschal gerechnet wird.",
    ],
    goals: [
      "den §-19-Tarif nach Wertstufe und Steuerklasse sicher lesen",
      "Tarifgrenzen und Prozentwerte nicht miteinander verwechseln",
      "bei Überschreiten einer Wertgrenze den Härteausgleich des § 19 Abs. 3 ErbStG prüfen",
      "die in der Quelle gezeigten amtlichen Härteausgleichs-Grenzwerte verwenden",
    ],
    scheme: [
      "Abgerundeten steuerpflichtigen Erwerb aus § 10 ErbStG übernehmen.",
      "Steuerklasse aus dem Vorspann (§ 15 ErbStG) übernehmen.",
      "Wertstufe in § 19 Abs. 1 ErbStG bestimmen und den zugehörigen Prozentsatz anwenden.",
      "Wird die letztvorhergehende Wertgrenze nur knapp überschritten, § 19 Abs. 3 ErbStG/Härteausgleich prüfen.",
      "Für den Härteausgleich die maßgebenden Grenzwerte der Quellen-Tabelle beachten; nicht jede Überschreitung führt zu einer ungekürzten Mehrsteuer.",
    ],
    normchain: ["§ 19 Abs. 1 ErbStG", "§ 19 Abs. 3 ErbStG"],
    example: {
      title: "Tarifstufe und Härteausgleich",
      facts: "Der steuerpflichtige Erwerb überschreitet eine Wertgrenze des § 19 Abs. 1 ErbStG.",
      solution: [
        "Zunächst den regulären Satz der neuen Wertstufe bestimmen.",
        "Danach prüfen, ob der Erwerb innerhalb des für die Steuerklasse maßgebenden Härteausgleichsbereichs liegt.",
        "Falls ja, die Begrenzungsregel des § 19 Abs. 3 ErbStG statt eines ungeprüften vollen Tarifsprungs anwenden.",
      ],
      result: "§ 19 Abs. 1 liefert den Tarif; § 19 Abs. 3 kann den Belastungssprung an der Tarifgrenze begrenzen.",
    },
    merksatz: "§ 19 Abs. 1 lesen - bei Grenzüberschreitung § 19 Abs. 3 nicht vergessen.",
    exam: [
      "Quelle: ErbSt 1. Einheit, PDF-S. 114–131.",
      "S. 114–126: §-19-Tariftabelle mit Zooms/Rechenmarkierungen. S. 127–130: Tabelle der maßgebenden Grenzwerte für den Härteausgleich. S. 131 ist ein schwarzer Übergangsframe und bleibt im Seitenplan erfasst.",
    ],
    traps: [
      "Steuerklasse aus dem aktuellen Verwandtschaftsverhältnis nicht aus dem Vorspann übernehmen.",
      "Härteausgleich pauschal als eigenen Steuersatz behandeln.",
    ],
  }),

  modul({
    id: 508,
    title: "Vorerwerbe nach § 14 und Master-Fahrtroute der Steuerberechnung",
    law: "§ 14 Abs. 1 ErbStG · § 19 Abs. 1, 3 ErbStG · § 10 ErbStG · § 16 ErbStG · § 17 ErbStG",
    difficulty: "Master-Schema",
    minutes: 42,
    sourcePages: Array.from({ length: 19 }, (_, i) => i + 132),
    diagram: "erbst-master",
    intro: [
      "Die Schlussframes verbinden Steuerberechnung und Vorerwerbe. § 14 ErbStG wird im Gesetz geöffnet und markiert: mehrere innerhalb von zehn Jahren von derselben Person anfallende Vermögensvorteile werden für die Steuerberechnung zusammengerechnet; die Steuer auf den früheren Erwerb wird nach der gesetzlichen Methode wieder abgezogen.",
      "Daneben entsteht die Schlussformel der Mitschrift: steuerpflichtiger Erwerb × Tarif/Härteausgleich, anschließend Abzug der Steuer auf Vorerwerbe. Die letzten Frames zoomen wieder auf die farbige Gesetzes-/Handbuch-Fahrtroute und kreisen die für Vorspann, Einleitung, WSV/NNAS, Freibeträge, Tarif und Vorerwerbe relevanten Reiter ein.",
    ],
    goals: [
      "§ 14 als Steuerberechnungsmechanismus für Vorerwerbe innerhalb von zehn Jahren einordnen",
      "Vorerwerbe nicht mit sachlichen Steuerbefreiungen oder Nachlassverbindlichkeiten vermischen",
      "die gesamte Einheiten-Fahrtroute von § 1 bis § 19 in Klausurreihenfolge abrufen",
      "Querverweise aus jedem Berechnungsblock in das passende Detail-Schema nutzen",
    ],
    scheme: [
      "Aktuellen steuerpflichtigen Erwerb ermitteln und nach § 10 Abs. 1 S. 6 abrunden.",
      "Vorerwerbe derselben Person innerhalb von zehn Jahren nach § 14 Abs. 1 ErbStG in die gesetzliche Zusammenrechnung einbeziehen.",
      "Steuer auf den zusammengerechneten Erwerb nach § 19 Abs. 1 bzw. unter Beachtung von § 19 Abs. 3 ErbStG ermitteln.",
      "Die nach § 14 Abs. 1 vorgesehene Steuer auf den früheren Erwerb abziehen.",
      "Schlusskontrolle anhand der Master-Fahrtroute: Vorspann → Einleitung → WSV → NNAS → Erwerb/Freibeträge → Tarif/Härteausgleich → Vorerwerbe.",
    ],
    normchain: ["§ 14 Abs. 1 ErbStG", "§ 19 Abs. 1, 3 ErbStG", "§ 10 ErbStG", "§ 16 ErbStG", "§ 17 ErbStG"],
    example: {
      title: "Zehn-Jahres-Vorerwerb",
      facts: "Ein Erwerber erhält innerhalb von zehn Jahren mehrere Vermögensvorteile von derselben Person.",
      solution: [
        "Die Erwerbe werden nach § 14 Abs. 1 ErbStG für die Steuerberechnung zusammengerechnet.",
        "Die Steuer wird auf den zusammengerechneten Betrag nach der aktuell maßgeblichen Tariflogik berechnet.",
        "Anschließend wird die gesetzlich bestimmte Steuer auf den früheren Erwerb abgezogen.",
      ],
      result: "§ 14 verhindert, dass die Tarifprogression durch zeitliche Aufteilung mehrerer Erwerbe innerhalb von zehn Jahren umgangen wird.",
    },
    merksatz: "Am Ende: § 19 berechnen - § 14-Vorerwerb abziehen - Fahrtroute einmal vollständig gegenlesen.",
    exam: [
      "Quelle: ErbSt 1. Einheit, PDF-S. 132–150.",
      "S. 133/134 zeigen § 14 ErbStG mit markierter Zehn-Jahres-Zusammenrechnung. S. 135/144–147 notieren die Schlussformel. S. 136–143 und 145–150 bilden die Reiter-/Master-Fahrtroute ab.",
    ],
    traps: [
      "Vorerwerb lediglich zum aktuellen Erwerb addieren, ohne die nach § 14 abzuziehende frühere Steuer zu berücksichtigen.",
      "Nach der Tarifberechnung noch einmal persönliche Freibeträge abziehen.",
    ],
  }),
];

export const ERBST1_TARIF = [
  { bis: "75.000 €", I: "7 %", II: "15 %", III: "30 %" },
  { bis: "300.000 €", I: "11 %", II: "20 %", III: "30 %" },
  { bis: "600.000 €", I: "15 %", II: "25 %", III: "30 %" },
  { bis: "6.000.000 €", I: "19 %", II: "30 %", III: "30 %" },
  { bis: "13.000.000 €", I: "23 %", II: "35 %", III: "50 %" },
  { bis: "26.000.000 €", I: "27 %", II: "40 %", III: "50 %" },
  { bis: "über 26.000.000 €", I: "30 %", II: "43 %", III: "50 %" },
];

export const ERBST1_HAERTEAUSGLEICH = [
  { grenze: "75.000 €", I: "–", II: "–", III: "–" },
  { grenze: "300.000 €", I: "82.600 €", II: "87.400 €", III: "–" },
  { grenze: "600.000 €", I: "332.200 €", II: "359.900 €", III: "–" },
  { grenze: "6.000.000 €", I: "677.400 €", II: "749.900 €", III: "–" },
  { grenze: "13.000.000 €", I: "6.888.800 €", II: "6.749.900 €", III: "10.799.900 €" },
  { grenze: "26.000.000 €", I: "15.260.800 €", II: "14.857.100 €", III: "–" },
  { grenze: "über 26.000.000 €", I: "29.899.900 €", II: "28.437.400 €", III: "–" },
];

export const ERBST1_SEITEN = 150;
export default inhalte;
