import { lstSchema, lstSchemaQuelle } from "../src/data/k2-lst-schema.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "Prüfungsschema Lohnsteuer",
  quelle: lstSchemaQuelle,
  kapitel: lstSchema,
  pflichtfelder: ["romisch"],
});
