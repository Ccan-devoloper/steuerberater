import React from"react";
import K1ErbStSchemaAlleV2,{erbstSchemaIds as altIds}from"./K1ErbStSchemaAlleV2";
import K1ErbStSchemataEinheit3,{erbst3SchemaIds}from"./K1ErbStSchemataEinheit3";
const SET=new Set(erbst3SchemaIds);export const erbstSchemaIds=[...altIds,...erbst3SchemaIds];
const normalisiere=id=>String(id||"").replace(/^erbst3-schema-/,"erbst3-");
export default function K1ErbStSchemaAlleV3({id}){const ziel=normalisiere(id);return SET.has(ziel)?<K1ErbStSchemataEinheit3 id={ziel}/>:<K1ErbStSchemaAlleV2 id={ziel}/>}
