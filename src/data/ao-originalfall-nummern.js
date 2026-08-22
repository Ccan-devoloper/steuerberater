import aoEinheit1 from "./k1-ao-einheit-1.js";
import aoEinheit2 from "./k1-ao-einheit-2.js";
import aoEinheit3 from "./k1-ao-einheit-3.js";
import aoEinheit4 from "./k1-ao-einheit-4.js";
import aoEinheit5 from "./k1-ao-einheit-5.js";
import aoEinheit6 from "./k1-ao-einheit-6.js";
import aoEinheit7 from "./k1-ao-einheit-7.js";
import aoEinheit8 from "./k1-ao-einheit-8.js";

export const AO_ORIGINALFAELLE=[...aoEinheit1,...aoEinheit2,...aoEinheit3,...aoEinheit4,...aoEinheit5,...aoEinheit6,...aoEinheit7,...aoEinheit8].filter(x=>x.area==="Fall");
export const AO_FALL_BY_ID=new Map(AO_ORIGINALFAELLE.map(f=>[Number(f.id),f]));

function quelltext(f){
  return [f?.title,...(f?.intro||[]),f?.example?.title,...(f?.exam||[])].filter(Boolean).join(" · ");
}
function nummerAusQuelle(f){
  const m=quelltext(f).match(/\b(?:Originalfall|Fall)\s*(\d+)\b/i);
  return m?Number(m[1]):null;
}

export const AO_FALLNUMMER_BY_ID=new Map();
export const AO_FALLID_BY_NUMMER=new Map();
for(const fall of AO_ORIGINALFAELLE){
  const nr=nummerAusQuelle(fall);
  if(!nr)continue;
  AO_FALLNUMMER_BY_ID.set(Number(fall.id),nr);
  if(!AO_FALLID_BY_NUMMER.has(nr))AO_FALLID_BY_NUMMER.set(nr,Number(fall.id));
}

export const aoFallNummer=id=>AO_FALLNUMMER_BY_ID.get(Number(id))??null;
export const aoFallAnzeige=id=>{
  const nr=aoFallNummer(id);
  return nr?`Fall ${nr}`:"Zusatzfall";
};
export const aoOriginalfallAnzeige=id=>{
  const nr=aoFallNummer(id);
  return nr?`Originalfall ${nr}`:"Originalfall · Zusatzfall";
};
