import React from "react";
import AOSchemaEinheit1, { aoSchemaIds as ao1SchemaIds } from "./AOSchemata";
import { AO2_SCHEMATA, ao2SchemaIds } from "./AOSchemataEinheit2";
import { AO3_SCHEMATA, ao3SchemaIds } from "./AOSchemataEinheit3";
import AOTortenstueckSchema from "./AOTortenstueckSchema";
import AO3FestsetzungsfristBeginn from "./AO3FestsetzungsfristBeginn";

export default function AOSchema({ id }) {
  if (id === "ao-tortenstueckfehlerlehre") return <AOTortenstueckSchema />;
  if (id === "ao3-ff-beginn") return <AO3FestsetzungsfristBeginn />;
  const Einheit3 = AO3_SCHEMATA[id];
  if (Einheit3) return <Einheit3 />;
  const Einheit2 = AO2_SCHEMATA[id];
  return Einheit2 ? <Einheit2 /> : <AOSchemaEinheit1 id={id} />;
}

export const aoSchemaIds = [...ao1SchemaIds, ...ao2SchemaIds, ...ao3SchemaIds];
