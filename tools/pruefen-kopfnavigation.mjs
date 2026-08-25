import fs from "node:fs";
import path from "node:path";

/**
 * Prueft die Vor-/Zurueck-Pfeile in der Kopfleiste aller erreichbaren Campusse.
 *
 * Hintergrund: Der gemeinsame Hook useAnsichtVerlauf hat frueher nur die
 * Rail-Ansicht gemerkt. Campusse, die zusaetzlich einen Detailzustand fuehren
 * (geoeffnetes Modul, geoeffnetes Pruefschema), legten den daneben in einem
 * eigenen useState ab. Das Oeffnen eines Details erzeugte dadurch keinen
 * Verlaufsschritt: In UmwStR blieb der Zurueck-Pfeil deaktiviert, in PersG
 * sprang er an der Modulliste vorbei ins Cockpit.
 */

const root = process.cwd();
const assert = (ok, msg) => { if (!ok) throw new Error(`Kopfnavigation: ${msg}`); };
const lies = (p) => {
  const voll = path.join(root, p);
  assert(fs.existsSync(voll), `Datei fehlt: ${p}`);
  return fs.readFileSync(voll, "utf8");
};

const hook = lies("src/lib/ansicht-verlauf.js");
const shell = lies("src/components/CampusShell.jsx");
const kopf = lies("src/components/CampusKopf.jsx");

// 1. Der Hook fuehrt Zustandsobjekte, nicht blosse Ansichts-IDs.
for (const marker of ["alsEintrag", "eintrag", "ersetzen"]) {
  assert(hook.includes(marker), `useAnsichtVerlauf ohne ${marker} – Detailzustand kann nicht in den Verlauf`);
}

// 2. Die Kopfleiste bewirbt Alt+Pfeil, also muss der Hook es auch bedienen.
assert(
  kopf.includes("Alt + Pfeil links") && kopf.includes("Alt + Pfeil rechts"),
  "Kopfleiste bewirbt die Tastenkürzel nicht mehr – dann diese Prüfung anpassen",
);
for (const taste of ["ArrowLeft", "ArrowRight"]) {
  assert(hook.includes(taste), `useAnsichtVerlauf behandelt ${taste} nicht – das beworbene Kürzel liefe ins Leere`);
}

// 3. Campusse mit Detailzustand fuehren ihn im Verlauf, nicht daneben.
const mitDetailzustand = [
  { datei: "src/components/K3UmwStRCampus.jsx", feld: "schemaNr", setter: "setSchemaNr" },
  { datei: "src/components/K3PersGCampus.jsx", feld: "modulId", setter: "setModulId" },
];
for (const { datei, feld, setter } of mitDetailzustand) {
  const quelle = lies(datei);
  assert(
    quelle.includes(`verlauf.eintrag.${feld}`),
    `${path.basename(datei)}: ${feld} kommt nicht aus dem Verlauf – der Zurück-Pfeil überspringt die Detailseite`,
  );
  assert(
    !quelle.includes(setter),
    `${path.basename(datei)}: ${setter} liegt wieder neben dem Verlauf – Detailschritte gehen verloren`,
  );
  assert(
    quelle.includes("verlauf.ersetzen("),
    `${path.basename(datei)}: Suchfeld muss ersetzen() nutzen, sonst entsteht je Tastendruck ein Verlaufsschritt`,
  );
}

// 4. Jeder ueber die Shell erreichbare Campus bekommt echte Navigationsfunktionen.
const erreichbar = [...shell.matchAll(/lazy\(\(\) => import\("(\.\.?)\/([A-Za-z0-9]+)"\)\)/g)]
  .map((m) => ({ name: m[2], pfad: m[1] === ".." ? `src/${m[2]}.jsx` : `src/components/${m[2]}.jsx` }));
assert(erreichbar.length > 0, "keine Campus-Importe in CampusShell gefunden");

const mitKopfleiste = erreichbar
  .filter(({ pfad }) => fs.existsSync(path.join(root, pfad)) && lies(pfad).includes("<CampusTopbar"));

assert(mitKopfleiste.length >= 8, `zu wenige Campusse mit Kopfleiste gefunden: ${mitKopfleiste.length}`);

for (const { name, pfad } of mitKopfleiste) {
  const quelle = lies(pfad);
  assert(
    !/navZurueck=\{\(\)\s*=>\s*\{\}\}/.test(quelle) && !/navVor=\{\(\)\s*=>\s*\{\}\}/.test(quelle),
    `${name}: Kopfleiste bekommt eine leere Navigationsfunktion – die Pfeile wären wirkungslos`,
  );
  assert(
    /zurueckMoeglich=\{(?!false\})/.test(quelle) && /vorMoeglich=\{(?!false\})/.test(quelle),
    `${name}: Pfeile sind fest deaktiviert`,
  );
}

console.log(
  `Kopfnavigation OK: Verlauf führt Zustandsobjekte, Alt+Pfeil greift, ` +
  `${mitKopfleiste.length} Campusse mit funktionsfähigen Kopfpfeilen ` +
  `(${mitKopfleiste.map((c) => c.name).join(", ")}).`,
);
