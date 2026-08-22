import React from "react";
import AOSchemaEinheit1, { aoSchemaIds as ao1SchemaIds } from "./AOSchemata";
import { AO2_SCHEMATA, ao2SchemaIds } from "./AOSchemataEinheit2";
import { AO3_SCHEMATA, ao3SchemaIds } from "./AOSchemataEinheit3";
import { AO4_SCHEMATA, ao4SchemaIds } from "./AOSchemataEinheit4";
import { AO5_SCHEMATA, ao5SchemaIds } from "./AOSchemataEinheit5";
import { AO6_SCHEMATA, ao6SchemaIds } from "./AOSchemataEinheit6";
import { AO7_SCHEMATA, ao7SchemaIds } from "./AOSchemataEinheit7";
import { AO8_SCHEMATA, ao8SchemaIds } from "./AOSchemataEinheit8";
import AO5NeueTatsachenSchema from "./AO5NeueTatsachenSchema";
import AOTortenstueckSchema from "./AOTortenstueckSchema";
import AO3FestsetzungsfristBeginn from "./AO3FestsetzungsfristBeginn";
import AO3AblaufhemmungenSchema from "./AO3AblaufhemmungenSchema";
import "./AOShortSkript2025Auto";

export default function AOSchema({ id }) {
  if (id === "ao-tortenstueckfehlerlehre") return <AOTortenstueckSchema />;
  if (id === "ao3-ff-beginn") return <AO3FestsetzungsfristBeginn />;
  if (id === "ao3-ablaufhemmungen") return <AO3AblaufhemmungenSchema />;
  if (id === "ao5-173") return <AO5NeueTatsachenSchema />;
  const Einheit8 = AO8_SCHEMATA[id];
  if (Einheit8) return <Einheit8 />;
  const Einheit7 = AO7_SCHEMATA[id];
  if (Einheit7) return <Einheit7 />;
  const Einheit6 = AO6_SCHEMATA[id];
  if (Einheit6) return <Einheit6 />;
  const Einheit5 = AO5_SCHEMATA[id];
  if (Einheit5) return <Einheit5 />;
  const Einheit4 = AO4_SCHEMATA[id];
  if (Einheit4) return <Einheit4 />;
  const Einheit3 = AO3_SCHEMATA[id];
  if (Einheit3) return <Einheit3 />;
  const Einheit2 = AO2_SCHEMATA[id];
  return Einheit2 ? <Einheit2 /> : <AOSchemaEinheit1 id={id} />;
}

export const aoSchemaIds = [...ao1SchemaIds, ...ao2SchemaIds, ...ao3SchemaIds, ...ao4SchemaIds, ...ao5SchemaIds, ...ao6SchemaIds, ...ao7SchemaIds, ...ao8SchemaIds];
