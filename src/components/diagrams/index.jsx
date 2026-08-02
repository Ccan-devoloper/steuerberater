import React from "react";
import AbbaSchema from "./AbbaSchema";
import LatenteSteuern from "./LatenteSteuern";
import DisagioLinear from "./DisagioLinear";
import Zinsstaffel from "./Zinsstaffel";
import LeasingBaum from "./LeasingBaum";
import RueckstellungHbStb from "./RueckstellungHbStb";
import DividendeFluss from "./DividendeFluss";
import Buchungskreise from "./Buchungskreise";
import ForderungEwbPwb from "./ForderungEwbPwb";
import ArapZeitstrahl from "./ArapZeitstrahl";

export const diagrams = {
  abba: AbbaSchema,
  latenteSteuern: LatenteSteuern,
  disagioLinear: DisagioLinear,
  zinsstaffel: Zinsstaffel,
  leasingBaum: LeasingBaum,
  rueckstellungHbStb: RueckstellungHbStb,
  dividendeFluss: DividendeFluss,
  buchungskreise: Buchungskreise,
  forderungEwbPwb: ForderungEwbPwb,
  arapZeitstrahl: ArapZeitstrahl,
};

export default function Diagram({ id }) {
  const Component = diagrams[id];
  return Component ? <Component /> : null;
}

export { AbbaSchema, LatenteSteuern, Buchungskreise };
