/* ==========================================================================
   Prüfungsphase: Vorabend, die drei Klausurtage und der Tag danach.

   Vorgabe des Betreibers (29.09.2026): Am Abend vor Tag 1 und an den drei
   Klausurtagen nichts Inhaltliches – nur Motivation, kleine Tipps und
   Zitate, insgesamt weniger Beiträge. Am Tag danach „Ihr habt es
   geschafft“, anschließend wieder Normalbetrieb.

   Die Daten folgen CONFIG.examen.schriftlich (Tag 1); Tag 2 und 3 sind die
   beiden Folgetage. Zitate nur mit gesicherter Herkunft.
   ========================================================================== */

import { CONFIG } from "./config.mjs";

const plus = (d, n) => {
  const x = new Date(d + "T12:00:00Z");
  x.setUTCDate(x.getUTCDate() + n);
  return x.toISOString().slice(0, 10);
};

const ZITATE = {
  seneca: { text: "„Nicht weil es schwer ist, wagen wir es nicht, sondern weil wir es nicht wagen, ist es schwer.“", von: "Seneca" },
  epiktet: { text: "„Nicht die Dinge selbst beunruhigen die Menschen, sondern ihre Meinungen über die Dinge.“", von: "Epiktet" },
  goethe: { text: "„Es ist nicht genug zu wissen, man muss auch anwenden; es ist nicht genug zu wollen, man muss auch tun.“", von: "Johann Wolfgang von Goethe" },
};

const HASHTAGS = ["#steuerberaterexamen", "#steuerberaterprüfung", "#examensvorbereitung", "#kopfsache"];

function karussell({ titel, badge, text, punkte, zitat, cta, caption }) {
  return {
    format: "anlass",
    fach: "mindset",
    klausur: 0,
    fachLabel: "Kopfsache",
    themaId: null,
    pruefungsphase: true,
    folien: [
      { art: "titel", titel, coverBadge: badge, coverBildAuslassen: true },
      { art: "text", titel: "Für heute", text, punkte },
      ...(zitat ? [{ art: "merke", titel: zitat.von, text: zitat.text }] : []),
      { art: "cta", titel: cta.titel, punkte: cta.punkte, icons: ["haken", "uhr", "buch"] },
    ],
    caption,
    hashtags: HASHTAGS,
    kurztitel: titel,
    coverBadge: badge,
    coverBildAuslassen: true,
    quellen: ["Examenskalender"],
  };
}

function storyKarte(ueberzeile, titel, text) {
  return { art: "merksatz", fach: "mindset", klausur: 0, fachLabel: "Kopfsache", ueberzeile, titel, text, pruefungsphase: true };
}

const zitatStory = (z) => storyKarte("Zitat", z.von, z.text);

export function pruefungsphaseTage(tag1 = CONFIG.examen.schriftlich) {
  return {
    vorabend: plus(tag1, -1),
    tag1,
    tag2: plus(tag1, 1),
    tag3: plus(tag1, 2),
    danach: plus(tag1, 3),
  };
}

/* Liefert für einen Tag der Prüfungsphase, was ersetzt wird:
   - art "pruefungstag": der ganze Tag (ein Beitrag + Stories)
   - art "vorabend"/"danach": ein Slot (slotIndex) des normalen Tages;
     inhaltsStoriesAb/-Vor entfernen fachliche Stories ab bzw. vor dieser
     Uhrzeit. */
export function pruefungsphaseTag(datum, tag1 = CONFIG.examen.schriftlich) {
  const t = pruefungsphaseTage(tag1);

  if (datum === t.vorabend) {
    return {
      art: "vorabend",
      slotIndex: 2,
      inhaltsStoriesAb: "18:00",
      beitrag: {
        zeit: "19:00",
        inhalt: karussell({
          titel: "Morgen geht es los – und du bist bereit",
          badge: "Vorabend",
          text: "Heute Abend zählt nicht mehr, was du noch lernen könntest. Es zählt, dass du ausgeruht und ruhig in den Prüfungsraum gehst.",
          punkte: [
            "Tasche packen: Ausweis, Einladung, zugelassene Gesetzestexte, Stifte",
            "Nichts Neues mehr aufschlagen – höchstens ein Schema überfliegen",
            "Früh ins Bett, Wecker doppelt stellen, Anfahrt einplanen",
          ],
          zitat: ZITATE.seneca,
          cta: { titel: "Wir drücken dir die Daumen", punkte: ["Schick das deiner Lerngruppe", "Leg das Handy heute früh weg", "Morgen früh: frühstücken, durchatmen, loslegen"] },
          caption: "Morgen beginnt die schriftliche Prüfung. Heute Abend nichts mehr lernen, sondern Kraft sammeln. Du hast monatelang vorbereitet – das trägt dich durch die drei Tage. 💪",
        }),
      },
      stories: [],
    };
  }

  const tage = [
    {
      datum: t.tag1, nr: 1, zitat: ZITATE.seneca,
      titel: "Tag 1: Ruhe schlägt Perfektion",
      text: "Heute sind Verfahrensrecht, Umsatzsteuer und Erbschaftsteuer dran. Du musst nicht alles wissen – du musst sammeln, was du kannst.",
      punkte: [
        "Sachverhalt zweimal lesen, die Fragen markieren",
        "Zeit pro Teil vorher einteilen und dich daran halten",
        "Jede Aussage kurz mit der Norm begründen – auch Teilschritte bringen Punkte",
      ],
      tipp: "Hängst du fest? Den Lösungsweg kurz notieren und weitermachen. Folgerichtiges Weiterarbeiten bringt trotzdem Punkte.",
    },
    {
      datum: t.tag2, nr: 2, zitat: ZITATE.epiktet,
      titel: "Tag 2: Gestern abhaken, heute neu punkten",
      text: "Heute geht es um die Ertragsteuern. Der erste Tag ist geschrieben und zählt nicht mehr für deine Laune von heute.",
      punkte: [
        "Erst einordnen (Steuerpflicht, Einkunftsart), dann rechnen",
        "Nebenrechnungen sauber und nachvollziehbar darstellen",
        "Kurze Pause einbauen: trinken, strecken, weiter",
      ],
      tipp: "Nicht über gestern grübeln und keine Lösungen vergleichen. Heute ist eine neue Klausur mit neuen Punkten.",
    },
    {
      datum: t.tag3, nr: 3, zitat: ZITATE.goethe,
      titel: "Tag 3: Die letzte Etappe",
      text: "Heute ist Buchführung und Bilanzwesen dran – der letzte Tag. Noch einmal alles geben, dann ist es geschafft.",
      punkte: [
        "Bei jedem Sachverhalt: Bilanzposten, Buchung, Gewinnauswirkung",
        "Technikpunkte sichern, auch wenn das Ergebnis wackelt",
        "Konzentration bis zur letzten Minute – der Schluss zählt mit",
      ],
      tipp: "Heute Abend nichts nachrechnen. Du hast drei Klausurtage hinter dir – das darf gefeiert werden.",
    },
  ];
  const k = tage.find((x) => x.datum === datum);
  if (k) {
    return {
      art: "pruefungstag",
      beitrag: {
        zeit: "07:30",
        inhalt: karussell({
          titel: k.titel,
          badge: `Klausurtag ${k.nr}`,
          text: k.text,
          punkte: k.punkte,
          zitat: k.zitat,
          cta: { titel: "Du schaffst das", punkte: ["Schick das deiner Lerngruppe", "Tief durchatmen", "Heute Abend: abschalten"] },
          caption: `Klausurtag ${k.nr}. Kein neuer Stoff mehr – nur Ruhe, Technik und ein klarer Kopf. Wir denken an dich! 🍀`,
        }),
      },
      stories: [
        { zeit: "07:45", inhalt: zitatStory(k.zitat) },
        { zeit: "18:30", inhalt: storyKarte("Tipp", `Nach Tag ${k.nr}`, k.tipp) },
      ],
    };
  }

  if (datum === t.danach) {
    return {
      art: "danach",
      slotIndex: 0,
      inhaltsStoriesVor: "09:00",
      beitrag: {
        zeit: "09:00",
        inhalt: karussell({
          titel: "Ihr habt es geschafft!",
          badge: "Geschafft",
          text: "Drei Tage, drei Klausuren. Ganz egal, wie es sich angefühlt hat: Ihr dürft richtig stolz auf euch sein.",
          punkte: [
            "Durchatmen und ausschlafen",
            "Lösungen erst vergleichen, wenn du wirklich bereit bist",
            "Feiern – der Mut, angetreten zu sein, zählt heute",
          ],
          zitat: null,
          cta: { titel: "Erzähl uns, wie es dir geht", punkte: ["Schreib es in die Kommentare", "Schick das deiner Lerngruppe", "Gönn dir eine Pause"] },
          caption: "Die schriftliche Prüfung ist vorbei. Monate der Vorbereitung, drei harte Tage – das ist eine riesige Leistung. Ihr dürft stolz sein! 🎉",
        }),
      },
      stories: [
        { zeit: "09:15", inhalt: storyKarte("Geschafft", "Ihr dürft stolz sein", "Das Ergebnis kommt später. Heute zählt, was ihr geleistet habt: Monate der Vorbereitung und drei Tage volle Konzentration.") },
      ],
    };
  }
  return null;
}
