/* ==========================================================================
   Hooks für Reels: Thema sofort erkennbar, Nutzen sofort klar.

   Der Kanal dient der Steuerberaterpruefung. Deshalb muss eine Hook nicht
   moeglichst laut sein, sondern in der ersten Szene zeigen, welche konkrete
   Steuerfrage, Norm oder Abgrenzung geloest wird. Weiterleitbar wird der
   Inhalt durch Pruefungsnutzen, nicht durch erfundene Punktzahlen oder
   Behauptungen darueber, was "fast alle" falsch machen.
   ========================================================================== */

export const HOOKS = {
  frage: {
    name: "Prüfungsfrage",
    regel: "Stelle die konkrete Steuerfrage, die das Reel beantwortet. Fachbegriff oder Norm gehören in den Bildschirmtext.",
    beispiele: [
      { titel: "§ 173 AO: Änderung möglich?", sprecher: "Die Tatsache wird erst nach dem Bescheid bekannt – wann erlaubt Paragraf 173 AO noch die Änderung?" },
      { titel: "Wer schuldet § 14c UStG?", sprecher: "Umsatzsteuer steht auf der Rechnung, obwohl die Leistung fehlt – wer schuldet den Betrag?" },
    ],
  },
  abgrenzung: {
    name: "Abgrenzung",
    regel: "Stelle zwei klausurrelevante Alternativen gegeneinander. Beide Begriffe müssen auf dem Bildschirm stehen.",
    beispiele: [
      { titel: "Rückstellung oder Verbindlichkeit?", sprecher: "Woran trennst du Rückstellung und sichere Verbindlichkeit in der Steuerbilanz?" },
      { titel: "Betriebsausgabe oder Entnahme?", sprecher: "Eine Zahlung hat privaten und betrieblichen Bezug – welche Einordnung trägt die Rechtsfolge?" },
    ],
  },
  fehler: {
    name: "Konkrete Falle",
    regel: "Benenne einen sachlich belegbaren Zuordnungs- oder Reihenfolgefehler. Keine Behauptung, wie viele ihn machen oder wie viele Punkte er kostet.",
    beispiele: [
      { titel: "Hier kippt § 173 AO", sprecher: "Wenn du Rechtserheblichkeit und grobes Verschulden vermischst, passt der Änderungsaufbau nicht mehr." },
      { titel: "Falscher Zeitpunkt, falsche USt", sprecher: "Bei Anzahlungen entscheidet der Zeitpunkt der Vereinnahmung – nicht erst die spätere Leistung." },
    ],
  },
  reihenfolge: {
    name: "Reihenfolge",
    regel: "Zeige die Stelle, an der eine Prüfungsreihenfolge entscheidet. Formuliere als konkrete 'was zuerst?'-Frage.",
    beispiele: [
      { titel: "Was prüfst du zuerst?", sprecher: "Bei Paragraf 173 AO brauchst du erst die neue Tatsache und danach die Ausschlussgründe." },
      { titel: "Erst Ansatz, dann Bewertung?", sprecher: "In der Bilanz trennt ein sauberer Aufbau Ansatzfrage und Bewertung – genau dort beginnen viele Folgefehler." },
    ],
  },
  fall: {
    name: "Mini-Fall",
    regel: "Beginne mit einem sehr kurzen Sachverhaltsmoment und nenne die Steuerfrage noch in derselben Hook-Szene.",
    beispiele: [
      { titel: "Bescheid da, Tatsache neu", sprecher: "Nach dem Steuerbescheid taucht eine neue Tatsache auf – darf das Finanzamt noch ändern?" },
      { titel: "Rechnung da, Leistung fehlt", sprecher: "Eine Rechnung weist Umsatzsteuer aus, die Leistung wurde nie erbracht – was folgt aus Paragraf 14c?" },
    ],
  },
  norm: {
    name: "Norm-Anker",
    regel: "Nutze eine konkrete Norm als Wiedererkennungsanker und sage, welche Entscheidung an ihr hängt.",
    beispiele: [
      { titel: "§ 15 UStG: welcher Zeitpunkt?", sprecher: "Beim Vorsteuerabzug entscheidet nicht nur die Rechnung, sondern auch der richtige Entstehungszeitpunkt." },
      { titel: "§ 6 EStG: welcher Wert?", sprecher: "Paragraf 6 EStG gibt dir nicht einen Wert für alles – zuerst musst du das Wirtschaftsgut einordnen." },
    ],
  },
  widerspruch: {
    name: "Irrtum korrigieren",
    regel: "Korrigiere nur eine tatsächlich falsche Aussage, die du im Reel fachlich begründen kannst. Kein Strohmann, kein 'alle lernen das falsch'.",
    beispiele: [
      { titel: "Einspruch stoppt Vollziehung?", sprecher: "Nein – Einspruch und Aussetzung der Vollziehung sind zwei verschiedene Schritte." },
      { titel: "Teilwert gleich Marktwert?", sprecher: "Nicht automatisch – der Teilwert folgt einer eigenen steuerlichen Bewertungslogik." },
    ],
  },
  loesung: {
    name: "Konkreter Ablauf",
    regel: "Versprich einen kleinen, klaren Ablauf, den das Reel vollständig liefert. Zahlen nur, wenn genau so viele Schritte folgen.",
    beispiele: [
      { titel: "Drei Schritte zu § 173", sprecher: "Neue Tatsache, Richtung der Änderung, Ausschlussgründe – diese drei Schritte halten den Aufbau sauber." },
      { titel: "So prüfst du Vorsteuer", sprecher: "Leistung, Rechnung, Ausschluss – daraus bauen wir den Vorsteuerabzug in klausurtauglicher Reihenfolge." },
    ],
  },
};

export const HOOK_TYPEN = Object.keys(HOOKS);
const SCHWACHE_OEFFNER = /^\s*(hallo|hi\b|hey|guten (morgen|tag|abend)|willkommen|schön,? dass|heute (geht|zeige|sprechen|schauen|lernen)|in diesem (video|reel|beitrag)|wir (schauen|sprechen|klären)|lass uns|ich (zeige|erkläre) (dir|euch) (heute|jetzt))/i;
const UNBELEGTE_CLAIMS = /fast alle|die meisten|kaum jemand|niemand|jeder macht|häufigste|teuerste|volle punkte|halbe (?:klausur|punkte|textziffer)|prüfer(?::innen|innen)? (?:lieben|erwarten)|garantiert|punktegeschenk/i;
const GENERISCHER_TITEL = /^(kenn(?:st|en) du (?:das|diesen moment)|das stimmt so nicht|schluss mit raten|so nicht,? sondern so|ein halbsatz entscheidet|die reihenfolge ist alles)[!? .]*$/i;
export const HOOK_GRENZEN = { titelWoerter: 7, sprecherWoerter: 20 };

export function hookWaehlen(datum, strategie = null) {
  const gewicht = strategie?.hookGewicht || {};
  const stark = HOOK_TYPEN.filter((t) => (gewicht[t] ?? 1) >= 0.75);
  const auswahl = stark.length ? stark : HOOK_TYPEN;
  const tag = Math.floor(Date.parse(`${datum}T12:00:00Z`) / 86400000);
  return auswahl[((tag % auswahl.length) + auswahl.length) % auswahl.length];
}

export function hookAnleitung(typ) {
  const h = HOOKS[typ] || HOOKS.frage;
  const beispiele = h.beispiele.map((b) => `  · Bildschirm: „${b.titel}“ – gesprochen: „${b.sprecher}“`).join("\n");
  return `## Hook (Szene 1) – Muster „${h.name}“
${h.regel}
Der Bildschirmtext muss OHNE Ton und OHNE Caption verständlich sein: höchstens ${HOOK_GRENZEN.titelWoerter} Wörter, groß lesbar, mit Steuerfrage, Norm oder Abgrenzungsbegriffen statt einer austauschbaren Neugierformel.
Gesprochen ist der Hook EIN Satz mit höchstens ${HOOK_GRENZEN.sprecherWoerter} Wörtern und steht ganz am Anfang – keine Begrüßung und keine Ankündigung.
Kein erfundener Konsens („fast alle“), keine erfundene Punktwirkung, kein Korrektoren-Mindreading. Das Versprechen der Hook-Szene muss das Reel vollständig einlösen.
So klingt das Muster (andere Themen):
${beispiele}`;
}

export function pruefeHook(szene) {
  const fehler = [];
  if (!szene) return ["Erste Szene fehlt – ohne Hook kein Reel"];
  const titel = String(szene.titel || "").trim();
  const sprecher = String(szene.sprecher || "").trim();
  if (!titel) fehler.push("Hook: Der Bildschirmtext der ersten Szene fehlt");
  const titelWoerter = titel.split(/\s+/).filter(Boolean).length;
  if (titelWoerter > HOOK_GRENZEN.titelWoerter) fehler.push(`Hook: Bildschirmtext hat ${titelWoerter} Wörter (höchstens ${HOOK_GRENZEN.titelWoerter})`);
  if (SCHWACHE_OEFFNER.test(sprecher)) fehler.push("Hook: Die ersten Sekunden beginnen mit Ankündigung/Begrüßung statt mit der Sache");
  if (UNBELEGTE_CLAIMS.test(`${titel} ${sprecher}`)) fehler.push("Hook: unbelegte Häufigkeits-, Punkte- oder Korrektorenbehauptung");
  if (GENERISCHER_TITEL.test(titel)) fehler.push("Hook: Bildschirmtext ist ohne Ton zu generisch – Steuerfrage/Begriff muss auf die erste Szene");
  const ersterSatz = sprecher.split(/(?<=[.!?])\s/)[0] || "";
  const satzWoerter = ersterSatz.split(/\s+/).filter(Boolean).length;
  if (satzWoerter > HOOK_GRENZEN.sprecherWoerter) fehler.push(`Hook: gesprochener Aufhänger hat ${satzWoerter} Wörter (höchstens ${HOOK_GRENZEN.sprecherWoerter})`);
  return fehler;
}

export function hookTypErkennen(titel = "", sprecher = "") {
  const t = `${titel} ${sprecher}`;
  if (/\boder\b|vs\.?|unterschied|abgrenz/i.test(titel)) return "abgrenzung";
  if (/was prüfst du zuerst|erst .* dann|reihenfolge/i.test(t)) return "reihenfolge";
  if (/^§|paragraf|§\s*\d/i.test(titel)) return "norm";
  if (/drei schritte|vier schritte|so prüfst|so ordnest/i.test(t)) return "loesung";
  if (/stimmt (?:so )?nicht|nein\b|nicht automatisch|genau umgekehrt/i.test(t)) return "widerspruch";
  if (/fehler|falle|falsch|vertausch|kippt/i.test(t)) return "fehler";
  if (/\?/.test(titel)) return "frage";
  if (/\bdu\b|\bdir\b|bescheid|rechnung|leistung|wirtschaftsgut|finanzamt/i.test(t)) return "fall";
  return "frage";
}
