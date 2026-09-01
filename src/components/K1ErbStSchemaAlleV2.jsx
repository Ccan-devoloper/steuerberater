import React from"react";
import K1ErbStSchemaAlle,{erbstSchemaIds as altIds}from"./K1ErbStSchemaAlle";
import K1ErbStSchemaFort,{erbst2fSchemaIds}from"./K1ErbStSchemataEinheit2Fortsetzung";
const SET=new Set(erbst2fSchemaIds);
export const erbstSchemaIds=[...altIds,...erbst2fSchemaIds];
export default function K1ErbStSchemaAlleV2({id}){return SET.has(id)?<K1ErbStSchemaFort id={id}/>:<K1ErbStSchemaAlle id={id}/>}
