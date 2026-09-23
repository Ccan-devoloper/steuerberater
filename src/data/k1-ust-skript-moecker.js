/* USt-Skript (Moecker), Blöcke 1 bis 13 mit Arbeitspapieren – Umsatzsteuer,
   Lehrgang Steuerberater:in, Udo Moecker, Diplom-Finanzwirt.

   Wortlautgetreue Übernahme der Skriptblöcke aus dem Ordner „Umsatzsteuer“
   des zweiten Drive-Baums (neun PDF-Dateien, zusammen 1.071 Seiten). Die
   Blöcke tragen unterschiedliche Stände zwischen Juli 2025 und Juni 2026;
   jeder Block führt seinen eigenen Stand.

   Aufbau: Jeder Block ist ein Teil mit eigener Kapitelzählung; ein Kapitel
   entspricht einem Abschnitt der Gliederung des Blocks. Die Daten eines
   Blocks liegen in einer eigenen Datei unter `k1-ust-moecker/`.

   STAND DER ÜBERNAHME: in Arbeit – Block 1 (Einführung in das Umsatzsteuer-
   recht) vollständig, Block 2 (Leistungen im Leistungsaustausch) vollständig.
   Der Campus weist den Stand aus.

   HINWEIS ZUR QUELLE: Der Text ist unmittelbar aus den PDF-Dateien
   extrahiert (pypdf). Das personenbezogene Wasserzeichen der Vorlage ist
   entfernt. Schaubilder, die die Textextraktion zeilenweise zerlegt, sind als
   Tabellen oder Aufzählungen in ihre Ordnung zurückgebracht und jeweils als
   solche ausgewiesen. */

import { block01 } from "./k1-ust-moecker/block01.js";
import { block02 } from "./k1-ust-moecker/block02.js";

export const ustSkriptMoeckerQuelle = {
  reihe: "Umsatzsteuer · Skript Blöcke 1 bis 13 mit Arbeitspapieren · Udo Moecker",
  stand: "Stände 07/2025 bis 06/2026 (je Block ausgewiesen)",
  verfasser: "Udo Moecker",
  didaktik: [
    "Wortlautgetreue Übernahme des Lehrgangsskripts; eigene Ergänzungen sind durchgehend als solche gekennzeichnet, Fehler der Quelle mit „(so in der Quelle)“ markiert.",
    "Jeder Block steht als eigener Teil mit eigener Kapitelzählung; die Kapitel folgen der Gliederung des jeweiligen Blocks.",
    "Die Blöcke folgen dem Prüfungsaufbau der Umsatzsteuer: vom Steuergegenstand über Leistungsaustausch, Unternehmer und Leistungsort bis zu Steuerbefreiungen, Bemessungsgrundlage, Vorsteuerabzug und Besteuerungsverfahren.",
  ],
};

export const ustSkriptMoecker = [...block01, ...block02];

export default ustSkriptMoecker;
