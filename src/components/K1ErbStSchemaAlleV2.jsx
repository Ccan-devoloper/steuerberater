import React from"react";
import K1ErbStSchemaAlle,{erbstSchemaIds as altIds}from"./K1ErbStSchemaAlle";
import K1ErbStSchemaFort,{erbst2fSchemaIds}from"./K1ErbStSchemataEinheit2Fortsetzung";
const SET=new Set(erbst2fSchemaIds);export const erbstSchemaIds=[...altIds,...erbst2fSchemaIds];
const normalisiere=id=>String(id||"").replace(/^erbst2f-schema-/,"erbst2f-").replace(/^erbst2-schema-/,"erbst2-").replace(/^erbst-schema-/,"erbst-");
export default function K1ErbStSchemaAlleV2({id}){const ziel=normalisiere(id);return SET.has(ziel)?<K1ErbStSchemaFort id={ziel}/>:<K1ErbStSchemaAlle id={ziel}/>}
