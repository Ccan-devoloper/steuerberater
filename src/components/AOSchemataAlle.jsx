import React from "react";
import AOSchemaEinheit1, { aoSchemaIds as ao1SchemaIds } from "./AOSchemata";
import { AO2_SCHEMATA, ao2SchemaIds } from "./AOSchemataEinheit2";
import { AO3_SCHEMATA, ao3SchemaIds } from "./AOSchemataEinheit3";
import { AO4_SCHEMATA, ao4SchemaIds } from "./AOSchemataEinheit4";
import { AO5_SCHEMATA, ao5SchemaIds } from "./AOSchemataEinheit5";
import AOTortenstueckSchema from "./AOTortenstueckSchema";
import AO3FestsetzungsfristBeginn from "./AO3FestsetzungsfristBeginn";
import AO3AblaufhemmungenSchema from "./AO3AblaufhemmungenSchema";

export default function AOSchema({ id }) {
  if (id === "ao-tortenstueckfehlerlehre") return <AOTortenstueckSchema />;
  if (id === "ao3-ff-beginn") return <AO3FestsetzungsfristBeginn />;
  if (id === "ao3-ablaufhemmungen") return <AO3AblaufhemmungenSchema />;
  const Einheit5 = AO5_SCHEMATA[id];
  if (Einheit5) return <Einheit5 />;
  const Einheit4 = AO4_SCHEMATA[id];
  if (Einheit4) return <Einheit4 />;
  const Einheit3 = AO3_SCHEMATA[id];
  if (Einheit3) return <Einheit3 />;
  const Einheit2 = AO2_SCHEMATA[id];
  return Einheit2 ? <Einheit2 /> : <AOSchemaEinheit1 id={id} />;
}

export const aoSchemaIds = [...ao1SchemaIds, ...ao2SchemaIds, ...ao3SchemaIds, ...ao4SchemaIds, ...ao5SchemaIds];
