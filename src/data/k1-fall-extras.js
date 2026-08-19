/* Bündelt Aufgabenstellungen und Quellskizzen aller USt-Einheiten für die
   datengetriebene Darstellung in K1Campus. Ersetzt die früheren DOM-Enhancer:
   Die Inhalte werden regulär gerendert und sind dadurch auch durchsuchbar. */
import k1OriginalfallAufgaben from "./k1-originalfall-aufgaben";
import k1OriginalfallAufgabenEinheit2Nachtrag from "./k1-originalfall-aufgaben-einheit2-nachtrag";
import k1OriginalfallAufgabenEinheit5 from "./k1-originalfall-aufgaben-einheit5";
import k1OriginalfallAufgabenEinheit6 from "./k1-originalfall-aufgaben-einheit6";
import k1OriginalfallAufgabenEinheit7 from "./k1-originalfall-aufgaben-einheit7";
import k1OriginalfallAufgabenEinheit8 from "./k1-originalfall-aufgaben-einheit8";
import k1Einheit2NachtragSkizzen from "./k1-einheit2-nachtrag-skizzen";
import k1Einheit3Skizzen from "./k1-einheit3-skizzen";
import k1Einheit4Skizzen from "./k1-einheit4-skizzen";
import k1Einheit5Skizzen from "./k1-einheit5-skizzen";
import k1Einheit6Skizzen from "./k1-einheit6-skizzen";
import k1Einheit7Skizzen from "./k1-einheit7-skizzen";
import k1Einheit8Skizzen from "./k1-einheit8-skizzen";

export const k1Aufgaben = {
  ...k1OriginalfallAufgaben,
  ...k1OriginalfallAufgabenEinheit2Nachtrag,
  ...k1OriginalfallAufgabenEinheit5,
  ...k1OriginalfallAufgabenEinheit6,
  ...k1OriginalfallAufgabenEinheit7,
  ...k1OriginalfallAufgabenEinheit8,
};

export const k1Quellskizzen = {
  ...k1Einheit2NachtragSkizzen,
  ...k1Einheit3Skizzen,
  ...k1Einheit4Skizzen,
  ...k1Einheit5Skizzen,
  ...k1Einheit6Skizzen,
  ...k1Einheit7Skizzen,
  ...k1Einheit8Skizzen,
};
