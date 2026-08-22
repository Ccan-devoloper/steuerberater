import {k1AoHausaufgaben as bisherigeHausaufgaben,k1AoHausaufgabenDidaktik} from "./k1-ao-hausaufgaben.js";
import {k1AoHausaufgabe3,AO_HAUSAUFGABE3_PAGE_PLAN} from "./k1-ao-hausaufgaben-3.js";
import {k1AoHausaufgabe4,AO_HAUSAUFGABE4_PAGE_PLAN} from "./k1-ao-hausaufgaben-4.js";

export {k1AoHausaufgabenDidaktik,AO_HAUSAUFGABE3_PAGE_PLAN,AO_HAUSAUFGABE4_PAGE_PLAN};

export const k1AoHausaufgaben=[...bisherigeHausaufgaben,k1AoHausaufgabe3,k1AoHausaufgabe4];

export const AO_HAUSAUFGABEN_PAGE_PLANS=new Map([
  ["AO-HA-1-2",{1:"didaktik",2:"AO-HA12-1/AO-HA12-2",3:"AO-HA12-3",4:"AO-HA12-4",5:"AO-HA12-1",6:"AO-HA12-1/AO-HA12-2",7:"AO-HA12-2/AO-HA12-3",8:"AO-HA12-3/AO-HA12-4",9:"AO-HA12-4"}],
  ["AO-HA-3",AO_HAUSAUFGABE3_PAGE_PLAN],
  ["AO-HA-4",AO_HAUSAUFGABE4_PAGE_PLAN],
]);

export const AO_HAUSAUFGABEN_BY_MODULE=(()=>{
  const map=new Map();
  for(const termin of k1AoHausaufgaben){
    for(const fall of termin.faelle||[]){
      for(const modulId of fall.querverweise||[]){
        const liste=map.get(modulId)||[];
        liste.push({terminId:termin.id,fachtermin:termin.fachtermin,fallId:fall.id,nummer:fall.nummer,titel:fall.titel});
        map.set(modulId,liste);
      }
    }
  }
  return map;
})();
