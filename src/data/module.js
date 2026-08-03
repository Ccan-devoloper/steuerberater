import basisA from "./module-basis-a";
import basisB from "./module-basis-b";
import vertiefungA from "./module-vertiefung-a";
import vertiefungB from "./module-vertiefung-b";
import vertiefungC from "./module-vertiefung-c";
import vertiefungD from "./module-vertiefung-d";
import faelle from "./modules-faelle"; // unveränderte Fallsammlung aus den Kursmitschriften

/* Reihenfolge: erst Grundlagen und Vertiefung, dann die Originalfälle. */
export const module = [...basisA, ...basisB, ...vertiefungA, ...vertiefungB, ...vertiefungC, ...vertiefungD, ...faelle];

export const bereiche = [
  { id: "alle", label: "Alle Module" },
  { id: "EU", label: "Einzelunternehmen" },
  { id: "PersG", label: "Personengesellschaft" },
  { id: "KapG", label: "Kapitalgesellschaft" },
  { id: "Technik", label: "Klausurtechnik" },
  { id: "Fall", label: "Originalfälle" },
];

export const bereichName = {
  EU: "Einzelunternehmen",
  PersG: "Personengesellschaft",
  KapG: "Kapitalgesellschaft",
  Technik: "Klausurtechnik",
  Fall: "Originalfall",
};

/* ---------------------------------------------------------------------------
   Normenregister: wird aus den normchain- und law-Feldern aller Module erzeugt.
   Sortiert nach Gesetz und Paragraf.
   --------------------------------------------------------------------------- */
const gesetzReihenfolge = ["HGB", "EStG", "EStDV", "EStR", "EStH", "AO", "KStG", "UStG", "UStAE", "KStR", "BMF", "Sonstiges"];

function gesetzVon(norm) {
  const treffer = gesetzReihenfolge.find((g) => norm.includes(g));
  if (treffer) return treffer;
  if (norm.startsWith("R ")) return "EStR";
  if (norm.startsWith("H ")) return "EStH";
  return "Sonstiges";
}

function paragrafVon(norm) {
  const m = norm.match(/§+\s*(\d+)([a-z]?)/) || norm.match(/^[RH]\s*(\d+)\.?(\d*)/);
  if (!m) return [999, ""];
  return [parseInt(m[1], 10), m[2] || ""];
}

export function normenregister() {
  const karte = new Map();
  for (const m of module) {
    const normen = m.normchain || [];
    for (const n of normen) {
      if (!karte.has(n)) karte.set(n, []);
      const liste = karte.get(n);
      if (!liste.some((x) => x.id === m.id)) liste.push({ id: m.id, title: m.title, area: m.area });
    }
  }
  const gruppen = new Map();
  for (const [norm, treffer] of karte) {
    const g = gesetzVon(norm);
    if (!gruppen.has(g)) gruppen.set(g, []);
    gruppen.get(g).push({ norm, treffer });
  }
  return gesetzReihenfolge
    .filter((g) => gruppen.has(g))
    .map((g) => ({
      gesetz: g,
      eintraege: gruppen.get(g).sort((a, b) => {
        const [pa, sa] = paragrafVon(a.norm);
        const [pb, sb] = paragrafVon(b.norm);
        return pa - pb || sa.localeCompare(sb) || a.norm.localeCompare(b.norm, "de");
      }),
    }));
}

export default module;
