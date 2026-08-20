import React from "react";
import AOSchemaEinheit1, { aoSchemaIds as ao1SchemaIds } from "./AOSchemata";
import { AO2_SCHEMATA, ao2SchemaIds } from "./AOSchemataEinheit2";
import AOTortenstueckSchema from "./AOTortenstueckSchema";

export default function AOSchema({ id }) {
  if (id === "ao-tortenstueckfehlerlehre") return <AOTortenstueckSchema />;
  const Einheit2 = AO2_SCHEMATA[id];
  return Einheit2 ? <Einheit2 /> : <AOSchemaEinheit1 id={id} />;
}

export const aoSchemaIds = [...ao1SchemaIds, ...ao2SchemaIds];
