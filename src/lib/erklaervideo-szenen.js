/* Baut aus einem beliebigen Lernmodul die Szenenfolge eines Erklärvideos.
   Es wird kein Text erfunden: Gesprochen und gezeigt wird ausschließlich, was
   im Modul steht. Dadurch bleibt jedes Video automatisch aktuell, sobald der
   Modultext gepflegt wird – und die Funktion trägt über K3, AO, USt und KSt
   hinweg, weil alle Module dieselben Felder benutzen. */

const SATZ_GRENZE = 300;

/* Lange Absätze werden an Satzgrenzen geteilt, damit pro Szene eine
   überschaubare Textmenge steht. Abkürzungen wie "§ 6 Abs. 1 Nr. 3a" dürfen
   dabei nicht als Satzende gelten. */
export function inSaetze(absatz, grenze = SATZ_GRENZE) {
  const text = String(absatz || "").trim();
  if (text.length <= grenze) return text ? [text] : [];
  const roh = text.split(/(?<=[.!?:])\s+(?=[A-ZÄÖÜ„])/);
  const saetze = [];
  let puffer = "";
  for (const teil of roh) {
    const kandidat = puffer ? `${puffer} ${teil}` : teil;
    if (kandidat.length > grenze && puffer) {
      saetze.push(puffer);
      puffer = teil;
    } else {
      puffer = kandidat;
    }
  }
  if (puffer) saetze.push(puffer);
  return saetze;
}

/* Paragraphenzeichen und Kurzformen werden für die Sprachausgabe ausgeschrieben;
   auf dem Bildschirm bleibt die juristische Schreibweise stehen. */
export function alsSprechtext(text) {
  return String(text || "")
    .replace(/§§/g, "Paragrafen")
    .replace(/§/g, "Paragraf")
    .replace(/\bAbs\./g, "Absatz")
    .replace(/\bS\.\s*(\d)/g, "Satz $1")
    .replace(/\bSatz\b/g, "Satz")
    .replace(/\bNr\./g, "Nummer")
    .replace(/\bBuchst\./g, "Buchstabe")
    .replace(/\bi\.\s*V\.\s*m\./g, "in Verbindung mit")
    .replace(/\bi\.\s*H\.\s*v\./g, "in Höhe von")
    .replace(/\bggf\./g, "gegebenenfalls")
    .replace(/\bz\.\s*B\./g, "zum Beispiel")
    .replace(/\bu\.\s*a\./g, "unter anderem")
    .replace(/\bd\.\s*h\./g, "das heißt")
    .replace(/\bTz\./g, "Textziffer")
    .replace(/\bR\s+(\d)/g, "Richtlinie $1")
    .replace(/\bH\s+(\d)/g, "Hinweis $1")
    .replace(/\bEStG\b/g, "E-St-G")
    .replace(/\bKStG\b/g, "K-St-G")
    .replace(/\bUStG\b/g, "U-St-G")
    .replace(/\bGewStG\b/g, "Gew-St-G")
    .replace(/\bErbStG\b/g, "Erb-St-G")
    .replace(/\bHGB\b/g, "H-G-B")
    .replace(/\bAO\b/g, "A-O")
    .replace(/\bEStDV\b/g, "E-St-D-V")
    .replace(/\bEStR\b/g, "E-St-R")
    .replace(/\bBMF\b/g, "B-M-F")
    .replace(/\bBFH\b/g, "B-F-H")
    /* Trennzeichen werden zu Kommas, damit die Stimme eine Pause macht,
       statt sie zu buchstabieren oder zu verschlucken. */
    .replace(/\s*[·•–—]\s*/g, ", ")
    .replace(/\s+/g, " ")
    .trim();
}

function szene(kapitel, text, visual) {
  return { kapitel, text, visual };
}

export function szenenAusModul(m, bereichName = "") {
  if (!m) return [];
  const s = [];
  const istFall = m.area === "Fall";
  const einordnung = m.intro || [];
  const schritte = m.scheme || [];

  /* 1. Titel */
  s.push(szene("Titel",
    `${m.title}. ${m.law || ""}`,
    { typ: "titel", kicker: [bereichName, `Modul ${m.id}`].filter(Boolean).join(" · "), titel: m.title, law: m.law, dauer: m.minutes }));

  /* 2. Einordnung – der Absatz mit dem Schaubild bekommt es an die Seite */
  const absaetze = einordnung.flatMap((p) => inSaetze(p));
  absaetze.forEach((text, i) => {
    s.push(szene("Einordnung", text,
      m.diagram && i === 0 ? { typ: "schaubild", id: m.diagram, text } : { typ: "text", text }));
  });

  /* 3. Lernziele – erscheinen nacheinander in derselben Liste */
  if (m.goals?.length) {
    s.push(szene("Lernziele", `Nach diesem Modul können Sie Folgendes: ${m.goals[0]}`,
      { typ: "liste", titel: "Das können Sie danach", punkte: m.goals, aktiv: 0, stil: "haken" }));
    m.goals.slice(1).forEach((g, i) => {
      s.push(szene("Lernziele", g,
        { typ: "liste", titel: "Das können Sie danach", punkte: m.goals, aktiv: i + 1, stil: "haken" }));
    });
  }

  /* 4. Prüfungsreihenfolge – Kern des Videos, Schritt für Schritt */
  if (schritte.length) {
    schritte.forEach((schritt, i) => {
      const vorspann = i === 0 ? "In der Klausur gehen Sie in dieser Reihenfolge vor. Erstens: " : `${["", "Zweitens", "Drittens", "Viertens", "Fünftens", "Sechstens", "Siebtens", "Achtens"][i] || `Schritt ${i + 1}`}: `;
      s.push(szene("Prüfungsreihenfolge", vorspann + schritt,
        { typ: "liste", titel: "Prüfungsreihenfolge", punkte: schritte, aktiv: i, stil: "schritte" }));
    });
  }

  /* 5. Normenkette */
  if (m.normchain?.length) {
    s.push(szene("Normen", `Die Normenkette für die Klausur lautet: ${m.normchain.join(", ")}.`,
      { typ: "normen", punkte: m.normchain }));
  }

  /* 6. Fall: Sachverhalt, Lösungsschritte, Ergebnis */
  if (m.example?.facts) {
    inSaetze(m.example.facts).forEach((text, i) => {
      s.push(szene(istFall ? "Sachverhalt" : "Beispiel",
        (i === 0 ? `${istFall ? "Zum Sachverhalt" : "Ein Beispiel"}: ` : "") + text,
        { typ: "fall", rolle: "sachverhalt", titel: m.example.title, text }));
    });
    (m.example.solution || []).forEach((zeile, i) => {
      s.push(szene("Lösung", (i === 0 ? "Zur Lösung. " : "") + zeile,
        { typ: "fall", rolle: "loesung", titel: m.example.title, text: zeile, punkte: m.example.solution, aktiv: i }));
    });
    if (m.example.result) {
      s.push(szene("Ergebnis", `Ergebnis: ${m.example.result}`,
        { typ: "fall", rolle: "ergebnis", titel: m.example.title, text: m.example.result }));
    }
  }

  /* 7. Merksatz und typische Fallen als Abschluss */
  if (m.merksatz) {
    s.push(szene("Merksatz", `Zum Merken: ${m.merksatz}`, { typ: "merksatz", text: m.merksatz }));
  }
  (m.traps || []).forEach((falle, i) => {
    s.push(szene("Typische Fallen", (i === 0 ? "Achten Sie auf diese Fallen. " : "") + falle,
      { typ: "falle", text: falle, punkte: m.traps, aktiv: i }));
  });

  return s;
}

/* Ohne Sprachausgabe steuert die Textlänge das Tempo: rund 900 Zeichen je
   Minute Lesegeschwindigkeit, mit Sockel für sehr kurze Zeilen. */
export function anzeigedauer(text, tempo = 1) {
  const zeichen = String(text || "").length;
  return Math.max(2200, 1400 + zeichen * 62) / tempo;
}

export function kapitelListe(szenen) {
  const kapitel = [];
  szenen.forEach((s, i) => {
    const letztes = kapitel[kapitel.length - 1];
    if (!letztes || letztes.name !== s.kapitel) kapitel.push({ name: s.kapitel, start: i, laenge: 1 });
    else letztes.laenge += 1;
  });
  return kapitel;
}
