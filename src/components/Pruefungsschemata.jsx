import { PrioBadge } from "./Prioritaet";
import React, { useRef, useState } from "react";
import "./pruefungsschema-gesetzbuecher.css";

const farben = {
  ansatz: "var(--rot)",
  bewertung: "var(--orange)",
  technik: "var(--gruen)",
  hinweis: "var(--magenta)",
  neutral: "var(--tinte)",
};

export const schemata = [
  {
    id: "vermoegensgegenstand-wirtschaftsgut",
    titel: "Prüfungsschema Vermögensgegenstand (HB) / Wirtschaftsgut (StB)",
    bloecke: [
      {
        titel: "Ansatz:", ton: "ansatz", inhalt: [
          { typ: "untertitel", text: "I. Zurechnung" },
          { typ: "text", text: "Das Wirtschaftsgut ist XYZ gemäß § 246 Abs. 1 S. 2 … HGB, § 39 … AO ab … zuzurechnen, da er … Eigentümer ist." },
          { typ: "untertitel", text: "II. Zuordnung" },
          { typ: "text", text: "Das Wirtschaftsgut stellt (notwendiges) betriebliches … dar, § 246 Abs. 1 S. 1, § 247 Abs. 2 HGB (i.U.), § 5 Abs. 1 S. 1 Hs. 1 EStG. Bei gewillkürtem BV R 4.2 Abs. 1 S. 3 EStR; bei gemischt genutzten WG R 4.2 Abs. 1 S. 4 ff. EStR; bei Gebäudeteilen R 4.2 Abs. 3 S. 3 … EStR; bei IWG § 248 Abs. 2 S. … HGB und § 5 Abs. 2 EStG; bei Beteiligungen § 271 Abs. 1 HGB" },
        ],
      },
      {
        titel: "Bewertung:", ton: "bewertung", inhalt: [
          { typ: "untertitel", text: "I. (fortgeführte) Ak / Hk / der an deren Stelle tretende Wert (= Einlagewert)" },
          { typ: "text", text: "Die Bewertung erfolgt gemäß § 253 Abs. 1 S. 1 HGB, § 6 Abs. 1 Nr. … EStG mit den (fortgeführten) Ak / Hk / der an deren Stelle tretende Wert (= Einlagewert)." },
          { typ: "untertitel", text: "II. Ermittlung der Ak / Hk / des Einlagewerts (= „Einbuchungswert“)" },
          { typ: "text", text: "Nach § 255 Abs. … HGB, § 5 Abs. 1 S. 1 Hs. 1 EStG (§§ 4 Abs. 1 S. 8, 6 Abs. 1 Nr. 5 EStG bei Einlagen, § 6 Abs. 6 S. 1 EStG bei Tausch, R 6.5 EStR bei Zuschuss; Bewertungsvereinfachung § 256 … HGB, § 6 Abs. 1 Nr. 2a EStG, R 6.9 Abs. 1 EStR) betragen die Ak / Hk bzw. der Einlagewert … . Die nach § 15 Abs. 1 S. 1 Nr. 1 UStG abziehbare VSt gehört nicht zu den Ak / Hk, § 9b Abs. 1 EStG." },
          { typ: "untertitel", text: "III. Fortgeführte = Abschreibung" },
          { typ: "nummern", punkte: [
            "Regel AfA HB § 253 Abs. 3 S. 1, 2 HGB",
            "Steuerliche Sonderabschreibung (§ 6b EStG, R 6.6, § 7b EStG, § 7g EStG)",
            "Regel AfA StB § 7 Abs. 1 / § 7 Abs. 2 EStG; bei Gebäuden § 7 Abs. 4 / Abs. 5a EStG",
            "Außerplanmäßige Abschreibung / Teilwertabschreibung (R 6.7 S. 2, 5 EStR, § 6/12 Rn. …)",
          ] },
          { typ: "hinweis", text: "Beachte: AfA-BMG wenn vorher AfA bei Überschusseinkünften => § 7 Abs. 1 S. 5 EStG (§ 7 Abs. 4 S. 1 Hs. 2 EStG)" },
          { typ: "untertitel", text: "IV. Bilanzansatz 31.12. …" },
        ],
      },
      {
        titel: "Wichtig:", ton: "hinweis", inhalt: [
          { typ: "text", text: "Bei Abweichung zwischen HB und StB Korrektor mitteilen, warum die Abweichung bestehen darf:" },
          { typ: "liste", punkte: ["Steuerliches Wahlrecht § 5 Abs. 1 S. 1 Hs. 2 EStG mit gesondertem Verzeichnis § 5 Abs. 1 S. 2 und 3 EStG"] },
        ],
      },
      {
        titel: "Buchungssätze:", ton: "technik", inhalt: [
          { typ: "text", text: "Überleitungsrechnung nach § 60 Abs. 2 S. 1 EStDV § 5b Abs. 1 S. 2 EStG oder eigenständige StB (Regelfall) nach § 60 Abs. 2 S. 2 EStDV mit einheitlichem oder getrennten Buchungskreisen?" },
        ],
      },
      {
        titel: "Außerbilanzielle Hinzurechnungen bzw. Kürzungen (= Korrekturen):", ton: "technik", inhalt: [
          { typ: "liste", punkte: ["z.B. § 6b Abs. 7 EStG (Gewinnzuschlag); § 6b Abs. 10 S. 2, 3 EStG; § 3 Nr. 40 a) EStG/§ 3c Abs. 2 S. 1 EStG"] },
        ],
      },
      {
        titel: "Bei KapG:", ton: "neutral", inhalt: [
          { typ: "text", text: "Gewinn in HB < als in StB => Aktivierungswahlrecht („kann“) für aktive latente Steuern in HB" },
          { typ: "text", text: "Gewinn in HB > als in StB => Passivierungsgebot passive latente Steuern nur in der HB." },
        ],
      },
    ],
  },
  {
    id: "verbindlichkeit",
    titel: "Prüfungsschema Verbindlichkeit",
    bloecke: [
      {
        titel: "Ansatz:", ton: "ansatz", inhalt: [
          { typ: "text", text: "Die Verbindlichkeit ist als Betriebsschuld gemäß §§ 246 Abs. 1 S. 1 und 3 HGB, § 5 Abs. 1 S. 1 Hs. 1 EStG anzusetzen." },
          { typ: "hinweis", text: "Beachte: steuerlicher Ansatzvorbehalt § 5 Abs. 2a EStG (Rangrücktritt)" },
          { typ: "text", text: "=> falls auch aus „sonstigen freiem Vermögen“ zu tilgen, KEIN § 5 Abs. 2a EStG, da im Gesetz das Wort „nur“ steht" },
        ],
      },
      {
        titel: "Bewertung:", ton: "bewertung", inhalt: [
          { typ: "untertitel", text: "HB:" },
          { typ: "text", text: "Die Bewertung erfolgt nach § 253 Abs. 1 S. 2 HGB mit dem Erfüllungsbetrag." },
          { typ: "hinweis", text: "Beachte: Fremdwährung => immer Umrechnung zum Devisenkassamittelkurs am Bilanzstichtag, § 256a S. 1 HGB, auch wenn Gewinn entsteht, § 256a S. 2 HGB." },
          { typ: "untertitel", text: "StB:" },
          { typ: "text", text: "In der StB Bewertung identisch, § 6 Abs. 1 Nr. 3, Nr. 2 EStG" },
          { typ: "text", text: "Nicht bei Fremdwährung: Fremdwährung StB => Umrechnungskurs bei Entstehung, BMF § 6/12, Rn. 31, Wechselkursschwankung grds. egal, § 6/12, Rn. 33" },
          { typ: "text", text: "Aber: Teilwertzuschreibung (= Verlustantizipation) wenn € im Wert gesunken ist bei Vblk. des lfd. Geschäftsverkehrs möglich, BMF § 6/12, Rn. 34" },
          { typ: "untertitel", text: "Bilanzansatz 31.12. …" },
        ],
      },
      {
        titel: "Wichtig:", ton: "hinweis", inhalt: [
          { typ: "text", text: "Bei Abweichung zwischen HB und StB Korrektor mitteilen, warum die Abweichung bestehen darf:" },
          { typ: "liste", punkte: [
            "Steuerliches Wahlrecht § 5 Abs. 1 S. 1 Hs. 2 EStG",
            "Durchbrechung der Maßgeblichkeit § 5 Abs. 6 EStG",
          ] },
        ],
      },
      {
        titel: "Buchungssätze:", ton: "technik", inhalt: [
          { typ: "text", text: "Überleitungsrechnung nach § 60 Abs. 2 S. 1 EStDV § 5b Abs. 1 S. 2 EStG oder eigenständige StB (Regelfall) nach § 60 Abs. 2 S. 2 EStDV mit einheitlichem oder getrennten Buchungskreisen?" },
        ],
      },
      {
        titel: "Außerbilanzielle Hinzurechnungen bzw. Kürzungen (= Korrekturen):", ton: "technik", inhalt: [
          { typ: "liste", punkte: ["z.B. § 4 Abs. 4a EStG; vGA § 8 Abs. 3 S. 2 KStG iVm. R 8.5 Abs. 1 KStR; vE § 8 Abs. 3 S. 3 KStG iVm. R 8.9 Abs. 1 + Abs. 4 KStR"] },
        ],
      },
      {
        titel: "Bei KapG:", ton: "neutral", inhalt: [
          { typ: "text", text: "Gewinn in HB < als in StB => Aktivierungswahlrecht („kann“) für aktive latente Steuern in HB" },
          { typ: "text", text: "Gewinn in HB > als in StB => Passivierungsgebot passive latente Steuern nur in der HB." },
        ],
      },
    ],
  },
  {
    id: "rueckstellung",
    titel: "Prüfungsschema Rückstellung",
    bloecke: [
      {
        titel: "Ansatz:", ton: "ansatz", inhalt: [
          { typ: "text", text: "Die Rückstellung gemäß §§ 249 Abs. 1 …HGB, § 5 Abs. 1 S. 1 Hs. 1 EStG zu passivieren, weil… nach R 5.7 Abs. 2 …EStR … ." },
          { typ: "hinweis", text: "Beachte: steuerlicher Ansatzvorbehalt § 5 Abs. 2a, 3, 4, 4a, 4b, 7, § 6a EStG" },
        ],
      },
      {
        titel: "Bewertung:", ton: "bewertung", inhalt: [
          { typ: "text", text: "Die Bewertung erfolgt nach § 253 Abs. 1 S. 2 HGB mit dem notwendigen Erfüllungsbetrag (Zukunftswert) inklusive ratierlicher Ansammlung." },
          { typ: "liste", punkte: [{
            text: "Bei RLZ > 1 Jahr muss Abzinsung erfolgen, § 253 Abs. 2 S. 1 HGB (Zinssatz steht in Klausur)",
            formel: "Erfüllungsbetrag / (1 + Zinssatz)^Restlaufzeit",
          }] },
          { typ: "text", text: "In der StB ist die Rückstellung grds. nach Maßgabe § 6 Abs. 1 Nr. 3a EStG zu bewerten:" },
          { typ: "untertitel", text: "Insbesondere:" },
          { typ: "liste", punkte: [
            "§ 6 Abs. 1 Nr. 3a d) EStG = ratierlich (= wirtschaftliche Verursachung)",
            {
              text: "§ 6 Abs. 1 Nr. 3a e) EStG = Abzinsung: Erlass 6/19 Tabelle 2 mit Vervielfältiger suchen (= interpolieren) oder rechnen",
              formel: "Erfüllungsbetrag / (1 + 0,055)^Restlaufzeit",
              /* Die Ausnahmen gehören allein zur Abzinsung nach Buchstabe e)
                 und stehen deshalb eingerückt in diesem Punkt – nicht zwischen
                 den Buchstaben e) und f). */
              unterblock: [
                { typ: "untertitel", text: "Ausnahmen der Abzinsung:" },
                { typ: "liste", punkte: ["Verzinslich; Laufzeit < 12 Monate; Anzahlung"] },
                { typ: "hinweis", text: "Beachte: Bei Sachleistungsverpflichtungen Zeitraum bis Beginn der Erfüllung maßgeblich, § 6 Abs. 1 Nr. 3a e) S. 2 EStG, falls < 12 Monate, keine Abzinsung" },
              ],
            },
            "§ 6 Abs. 1 Nr. 3a f) EStG = Stichtagsprinzip (Abweichung zu HB)",
          ] },
          { typ: "text", text: "→ maximal Wert laut HB R 6.11 Abs. 3 S. 1 EStR" },
          { typ: "untertitel", text: "Bilanzansatz 31.12. …" },
        ],
      },
      {
        titel: "Wichtig:", ton: "hinweis", inhalt: [
          { typ: "text", text: "Bei Abweichung zwischen HB und StB Korrektor mitteilen, warum die Abweichung bestehen darf:" },
          { typ: "liste", punkte: ["Bewertungsvorbehalt § 5 Abs. 6 EStG"] },
        ],
      },
      {
        titel: "Buchungssätze:", ton: "technik", inhalt: [
          { typ: "text", text: "Überleitungsrechnung nach § 60 Abs. 2 S. 1 EStDV § 5b Abs. 1 S. 2 EStG oder eigenständige StB (Regelfall) nach § 60 Abs. 2 S. 2 EStDV mit einheitlichem oder getrennten Buchungskreisen?" },
        ],
      },
      { titel: "Außerbilanzielle Hinzurechnungen bzw. Kürzungen (= Korrekturen):", ton: "technik", inhalt: [] },
      {
        titel: "Bei KapG:", ton: "neutral", inhalt: [
          { typ: "text", text: "Gewinn in HB < als in StB => Aktivierungswahlrecht („kann“) für aktive latente Steuern in HB" },
          { typ: "text", text: "Gewinn in HB > als in StB => Passivierungsgebot passive latente Steuern nur in der HB." },
        ],
      },
    ],
  },
  {
    id: "arap-prap",
    titel: "Prüfungsschema ARAP/PRAP",
    bloecke: [
      {
        titel: "Ansatz:", ton: "ansatz", inhalt: [
          { typ: "text", text: "§ 250 Abs. … HGB, § 5 Abs. 5 S. … EStG; kein Ansatz nach § 5 Abs. 5 S. 2 EStG" },
        ],
      },
      {
        titel: "Bewertung:", ton: "bewertung", inhalt: [
          { typ: "text", text: "ARAP/PRAP sind keine WG § 6 EStG und werden nicht bewertet, sind nicht einlage- oder entnahmefähig." },
          { typ: "untertitel", text: "Bilanzansatz 31.12. …" },
        ],
      },
      {
        titel: "Buchungssätze:", ton: "technik", inhalt: [
          { typ: "text", text: "Überleitungsrechnung nach § 60 Abs. 2 S. 1 EStDV oder eigenständige StB (Regelfall) nach § 60 Abs. 2 S. 2 EStDV mit einheitlichem oder getrennten Buchungskreisen?" },
        ],
      },
      {
        titel: "Außerbilanzielle Hinzurechnungen bzw. Kürzungen (= Korrekturen):", ton: "technik", inhalt: [
          { typ: "text", text: "§ 4 Abs. 4a EStG bei Zinsen" },
        ],
      },
      {
        titel: "Bei KapG:", ton: "neutral", inhalt: [
          { typ: "text", text: "Gewinn in HB < als in StB => Aktivierungswahlrecht („kann“) für aktive latente Steuern in HB" },
          { typ: "text", text: "Gewinn in HB > als in StB => Passivierungsgebot passive latente Steuern nur in der HB." },
        ],
      },
      {
        titel: "Prüfungsschema Betriebsausgaben/Betriebseinnahmen (z.B. Verkauf; lfd. Erträge; Ausscheiden eines WG)", ton: "ansatz", inhalt: [
          { typ: "untertitel", text: "Ansatz/ Bewertung:" },
          { typ: "text", text: "Betriebsausgabe nach § 4 Abs. 4 EStG" },
          { typ: "text", text: "Betriebseinnahme nach § 252 Abs. 1 Nr. 4, Nr. 5 HGB, § 5 Abs. 1 S. 1 Hs. 1 EStG" },
          { typ: "text", text: "Bei Dividenden: § 20 Abs. 1 Nr. 1, § 20 Abs. 8 EStG, § 15 Abs. 1 S. 1 Nr. … EStG, § 43 Abs. 1 S. 1 Nr. 1 EStG, § 43a Abs. 1 S. 1 Nr. 1 EStG 25% + 5,5% SolZ § 4 SolzG § 44 Abs. 1 S. 3 EStG; wegen § 43 Abs. 5 S. 2 EStG keine Abgeltungswirkung" },
          { typ: "text", text: "KapESt = PE § 12 Nr. 3 EStG, weil anrechenbar § 36 Abs. 2 Nr. 2 EStG, § 4 Abs. 1 S. 2 EStG" },
          { typ: "hinweis", text: "WICHTIG: Bei Verkauf kein A und B, stattdessen prüfen wir § 6b!" },
          { typ: "hinweis", text: "WICHTIG: Bei Ausscheiden eines WG durch Feuer, Unfall etc. § 253 Abs. 3 S. 5 HGB und § 7 Abs. 1 S. 7 EStG (bei Gebäude § 7 Abs. 4 S. 3 EStG) und Prüfung R 6.6 EStR!" },
          { typ: "untertitel", text: "Buchungssätze:" },
          { typ: "text", text: "Überleitungsrechnung nach § 60 Abs. 2 S. 1 EStDV § 5b Abs. 1 S. 2 EStG oder eigenständige StB (Regelfall) nach § 60 Abs. 2 S. 2 EStDV mit einheitlichem oder getrennten Buchungskreisen?" },
          { typ: "untertitel", text: "Außerbilanzielle Hinzurechnungen bzw. Kürzungen (= Korrekturen):" },
          { typ: "text", text: "§ 3 Nr. 40 a) EStG iVm § 3c Abs. 2 S. 1 EStG, § 3 Nr. 40 d) EStG oder § 8b KStG" },
          { typ: "untertitel", text: "Bei KapG:" },
          { typ: "text", text: "Gewinn in HB < als in StB => Aktivierungswahlrecht („kann“) für aktive latente Steuern in HB" },
          { typ: "text", text: "Gewinn in HB > als in StB => Passivierungsgebot passive latente Steuern nur in der HB" },
        ],
      },
    ],
  },
  {
    id: "entnahme",
    titel: "Prüfungsschema Entnahme",
    bloecke: [
      {
        titel: "Ansatz:", ton: "ansatz", inhalt: [
          { typ: "text", text: "§ 4 Abs. 1 S. 2 EStG (bei Überführung in ausl. Betriebsstätte § 4 Abs. 1 S. 3 EStG)" },
        ],
      },
      {
        titel: "Bewertung:", ton: "bewertung", inhalt: [
          { typ: "liste", punkte: [
            "Grundsatz: Bewertung mit dem Teilwert, § 6 Abs. 1 Nr. 4 EStG",
            "Bei § 4 Abs. 1 S. 3 EStG mit dem gem. Wert",
            { text: "Nutzungsentnahme private Fahrten PKW § 6 Abs. 1 Nr. 4 S. 2 EStG: 1% des BLP und Abrundung auf volle 100 €; BMF § 6/23, Rn. 10 oder BMF § 6/33, Rn. 12", kinder: [
              "ggf. geviertelter BLP bei Elektrofahrzeugen mit BLP bis 60.000 €, § 6 Abs. 1 Nr. 4 S. 2 Nr. 3 EStG",
              "ggf. halbierter BLP bei Elektro-/Hybridelektrofahrzeugen, § 6 Abs. 1 Nr. 4 S. 2 Nr. 4 EStG",
            ] },
            "oder § 6 Abs. 1 Nr. 4 S. 3 EStG: Fahrtenbuchmethode",
            "Entnahme Wirtschaftsgut für Spende § 6 Abs. 1 Nr. 4 S. 4 EStG: Buchwert",
            "Nutzungsentnahme betriebliches Fahrrad § 6 Abs. 1 Nr. 4 S. 6 EStG: steuerfrei",
          ] },
        ],
      },
      {
        titel: "Beachte Umsatzsteuer (siehe UStAE 15.23 Abs. 5):", ton: "hinweis", inhalt: [
          { typ: "liste", punkte: [
            "UWA nach § 3 Abs. 1b S. 1 Nr. 1 oder § 3 Abs. 9a Nr. 1 UStG",
            "BMG nach § 10 Abs. 4 S. 1 Nr. 1 oder § 10 Abs. 4 S. 1 Nr. 2 UStG, soweit VSt gezogen",
            "Zum PKW siehe UStAE 15.23 Abs. 5 S. 4 Nr. 1 a) S. 3: 20% Abschlag für nicht mit VSt belasteten Kosten bei Nutzungsentnahme PKW",
          ] },
          { typ: "hinweis", text: "Wichtig: Keine HALBIERUNG oder VIERTELUNG vom BLP in der USt!" },
          { typ: "hinweis", text: "USt erhöht nach § 12 Nr. 3 EStG den Wert der Entnahme!" },
        ],
      },
      {
        titel: "Buchungssätze:", ton: "technik", inhalt: [
          { typ: "text", text: "Überleitungsrechnung nach § 60 Abs. 2 S. 1 EStDV § 5b Abs. 1 S. 2 EStG oder eigenständige StB (Regelfall) nach § 60 Abs. 2 S. 2 EStDV mit einheitlichem oder getrennten Buchungskreisen?" },
        ],
      },
      {
        titel: "Außerbilanzielle Hinzurechnungen bzw. Kürzungen (= Korrekturen):", ton: "technik", inhalt: [
          { typ: "liste", punkte: [
            "§ 4 Abs. 5 S. 1 Nr. 6 S. 3 EStG: Fahrten Wohnung-Betriebsstätte sowie Kostendeckelung BMF § 6/23 Rn. 18",
            "§ 3 Nr. 40 a) EStG iVm § 3c Abs. 2 S. 1 EStG bei Entnahme Beteiligung KapG",
          ] },
        ],
      },
    ],
  },
  {
    id: "bilanzberichtigung-kapitalanpassung",
    titel: "Prüfungsschema Bilanzberichtigung/Kapitalanpassung",
    bloecke: [
      {
        titel: "Vorüberlegung:", ton: "hinweis", inhalt: [
          { typ: "text", text: "Zu einer Bilanzberichtigung durch den Steuerpflichtigen kommt es, weil in einer bereits beim FA eingereichten Steuerbilanz etwas „falsch“ gelaufen ist. Die Bilanzberichtigung ist durch den Steuerpflichtigen selbst durchzuführen (H 4.4 „Bilanzberichtigung“ 1. Spiegelstrich EStH)." },
          { typ: "text", text: "Wenn die BP den Fehler festgestellt hat, werden die Prüfungsschritte 1 und 2 bereits vom Prüfer vorgenommen. Dann sind nur noch die Schritte ab 3. vorzunehmen." },
        ],
      },
      {
        titel: "Vergangenheit", ton: "ansatz", inhalt: [
          { typ: "nummernKomplex", punkte: [
            { text: "Rechtliche Beurteilung des Fehlers mit §§ und Begründung" },
            { text: "Bilanzberichtigung", kinderBuchstaben: [
              "HB ist nur bei schwerwiegenden Fehlern zu berichtigen, die zur Nichtigkeit des Jahresabschlusses führen. (= in der Klausur NIE)\n\nDie HB ist daher in der laufenden Buchführung grds. erfolgswirksam zu berichtigen. (Vgl. IDW RS HFA 6)",
              "Die StB ist zu berichtigen, wenn sie den Grundsätzen ordnungsgemäßer Buchführung nicht entspricht, § 4 Abs. 2 S. 1 EStG, § 153 Abs. 1 S. 1 Nr. 1 AO.",
              "Grds. ist an der Fehlerquelle zu berichtigen. Da das Jahr … nicht mehr geändert werden kann, ist der Fehler in der Schlussbilanz des ersten offenen Jahres … zu korrigieren, R 4.4 Abs. 1 S. 9 EStR",
              { text: "Weil ein", kinder: [
                "erfolgswirksamer R 4.4 Abs. 1 S. 9 EStR",
                "erfolgsneutraler H 4.4 „Unterlassene Bilanzierung“ + „Unterlassene Erfassung einer Entnahme“ EStH",
                "oder",
                "ein reiner AfA-Fehler H 7.4 „Unterlassene/überhöhte AfA EStH) vorliegt, erfolgt die Bilanzberichtigung in … .",
              ] },
            ] },
          ] },
        ],
      },
      {
        titel: "Gegenwart", ton: "technik", inhalt: [
          { typ: "nummernKomplex", start: 3, punkte: [
            { text: "Anpassung der Anfangsbilanz der laufenden Buchführung durch Kapitalangleichungsbuchungen, § 252 Abs. 1 Nr. 1 HGB, § 5 Abs. 1 S. 1 Hs. 1 EStG, § 4 Abs. 1 S. 1 EStG" },
            { text: "ABBA (was bereits unter Prüfungspunkt 1. angesprochen wurde, kann weggelassen werden)" },
          ] },
        ],
      },
      {
        titel: "Vergangenheit", ton: "bewertung", inhalt: [
          { typ: "nummernKomplex", start: 5, punkte: [
            { text: "ggf. Prüfung Bilanzänderung § 4 Abs. 2 S. 2 EStG in Vergangenheit (aus richtig wird richtig)" },
          ] },
        ],
      },
    ],
  },
];

/* Die beiden Gesetzbücher, die das erste Schema tragen, mit den Zetteln, die
   oben aus ihnen herausragen. Die Farbe sagt, für welchen Prüfungsschritt ein
   Zettel steht; `marken` sind die kleinen Stichwortzettel, die im Buch oben auf
   dem jeweiligen Streifen kleben. */
export const GESETZBUECHER = [
  {
    id: "wirtschaftsgesetze",
    stil: "nwb",
    gesetz: "HGB",
    band: "Textausgabe",
    jahr: "2026",
    titel: ["Wichtige", "Wirtschaftsgesetze"],
    auflage: "39. Auflage",
    register: [
      "AktG", "EGAktG", "AnfG", "BGB", "DMBilG", "DrittelbG", "EWIV-VO", "EWIV-AG",
      "GenG", "GmbHG", "EGGmbHG", "HGB", "EGHGB", "InsO", "MgVG", "MitbestG",
      "PartGG", "PublG", "SchG", "SE-VO", "SEAG", "SpruchG", "UmwG", "WG", "WpHG",
    ],
    fuss: { links: "Drittes Buch · Handelsbücher", rechts: "§§ 238 – 342e HGB" },
    reiter: [
      {
        ton: "ansatz",
        paragraph: "246",
        zeilen: ["§ 246 (1) 2"],
        schritt: "Ansatz I – Zurechnung",
      },
      {
        ton: "ansatz",
        paragraph: "246",
        zeilen: ["§ 246 (1) 1", "§ 247 (2)"],
        schritt: "Ansatz II – Zuordnung",
        marken: [
          { text: "Beteiligung", zeilen: ["Beteili-", "gung"], paragraph: "271", titel: "§ 271 Abs. 1 HGB – Beteiligungen" },
        ],
      },
      {
        ton: "bewertung",
        paragraph: "253",
        zeilen: ["§ 253 (1) 1"],
        schritt: "Bewertung I – Maßstab",
      },
      {
        ton: "bewertung",
        paragraph: "255",
        zeilen: ["§ 255"],
        schritt: "Bewertung II – Höhe",
        marken: [
          { text: "BVE § 256", zeilen: ["BVE", "§ 256"], paragraph: "256", titel: "§ 256 HGB – Bewertungsvereinfachung" },
        ],
      },
      {
        ton: "bewertung",
        paragraph: "253",
        zeilen: ["§ 253 (3)", "S. 1 + 2"],
        schritt: "Bewertung III – Fortführung",
      },
    ],
  },
  {
    id: "steuergesetze",
    stil: "beck",
    gesetz: "EStG",
    band: "Beck'sche Textausgaben",
    titel: ["Steuergesetze"],
    fuss: { links: "Einkommensteuergesetz", rechts: "EStG" },
    /* Reihenfolge, Form und Beschriftung wie im Buch: breite Zettel sind quer
       beschriftet, schmale Streifen hochkant. */
    reiter: [
      {
        ton: "ansatz",
        paragraph: "5",
        zeilen: ["§ 5 (1) 1", "Hs. 1"],
        schritt: "Ansatz – Maßgeblichkeit",
      },
      {
        ton: "bewertung",
        paragraph: "6",
        breit: 1.3,
        zeilen: ["§ 6 (1)", "Bewertung"],
        schritt: "Bewertung I und II",
        marken: [
          { text: "§ 6 (6) 1", zeilen: ["§ 6 (6) 1"], paragraph: "6", titel: "§ 6 Abs. 6 S. 1 EStG – Tausch" },
          { text: "§ 6 (1) Nr. 1b", zeilen: ["§ 6 (1)", "Nr. 1b"], paragraph: "6", titel: "§ 6 Abs. 1 Nr. 1b EStG – Wahlrecht bei den Herstellungskosten" },
        ],
      },
      {
        ton: "bewertung",
        paragraph: "9b",
        zeilen: ["VStA", "§ 9b (1)"],
        schritt: "Bewertung II – Vorsteuerabzug",
        marken: [
          { text: "§ 15 (1) 1 Nr. 1 UStG", reihe: 2, zeilen: ["§ 15 (1) 1", "Nr. 1", "UStG"], gesetz: "UStG", paragraph: "15", titel: "§ 15 Abs. 1 S. 1 Nr. 1 UStG – Vorsteuerabzug" },
        ],
      },
      {
        ton: "sonder",
        paragraph: "7g",
        quer: true,
        breit: 1.6,
        zeilen: ["Sonder-AfA", "§ 7g (5) / (6)"],
        schritt: "Bewertung III – Sonderabschreibung",
        marken: [
          { text: "1 + 3 KapErhStG", ton: "hinweis", zeilen: ["1 + 3", "KapErhStG"], gesetz: "KapErhStG", paragraph: "1", titel: "§§ 1 und 3 KapErhStG – Kapitalerhöhung aus Gesellschaftsmitteln" },
        ],
        streifen: [
          { text: "§ 7b", zeilen: ["§ 7b"], paragraph: "7b", titel: "§ 7b EStG – Sonderabschreibung Mietwohnungsneubau" },
          { text: "§ 7 (2a)", zeilen: ["§ 7 (2a)"], paragraph: "7", titel: "§ 7 Abs. 2a EStG" },
          { text: "§ 6b (6)", zeilen: ["§ 6b (6)"], paragraph: "6b", titel: "§ 6b Abs. 6 EStG – Übertragung stiller Reserven" },
        ],
      },
      {
        ton: "sonder",
        paragraph: "7a",
        zeilen: ["§ 7a (9)"],
        schritt: "Sonderabschreibungen – Restwert-AfA",
      },
      {
        ton: "bewertung",
        paragraph: "7",
        breit: 1.25,
        zeilen: ["AfA", "§ 7 (1)"],
        schritt: "Bewertung III – Regel-AfA",
        marken: [
          { text: "§ 11c (2) 1 EStDV", reihe: 2, zeilen: ["§ 11c (2) 1", "EStDV", "Gebäude"], gesetz: "EStDV", paragraph: "11c", titel: "§ 11c Abs. 2 S. 1 EStDV – AfA bei Gebäuden" },
          { text: "§ 7 (2), (4), (5a)", zeilen: ["(2) (4)", "(5a)"], paragraph: "7", titel: "§ 7 Abs. 2, Abs. 4 und Abs. 5a EStG" },
        ],
      },
      {
        ton: "hinweis",
        paragraph: "5",
        zeilen: ["§ 5 (1) 1 Hs. 2", "S. 2 + 3"],
        schritt: "Merke – steuerliches Wahlrecht mit Verzeichnis",
      },
      {
        ton: "ausserbilanz",
        paragraph: "3",
        zeilen: ["§ 3 Nr. 40", "§ 3c (2) 1"],
        schritt: "Außerbilanzielle Korrektur",
      },
    ],
    /* Diese Zettel stecken nicht oben, sondern am Vorderschnitt - sie ragen
       nach rechts aus dem Buch. */
    reiterRechts: [
      {
        ton: "ansatz",
        paragraph: "4",
        zeilen: ["§ 4 (1) 8"],
        schritt: "Einlage",
        marken: [
          { text: "§ 6 (1) Nr. 5", zeilen: ["§ 6 (1) Nr. 5"], ton: "bewertung", paragraph: "6", titel: "§ 6 Abs. 1 Nr. 5 EStG – Bewertung der Einlage" },
          { text: "§ 7 (1) 5, (4) 1 Hs. 1", zeilen: ["§ 7 (1) 5,", "(4) 1 Hs. 1"], ton: "bewertung", paragraph: "7", titel: "§ 7 Abs. 1 S. 5, Abs. 4 S. 1 Hs. 1 EStG – AfA-Bemessungsgrundlage nach Einlage" },
        ],
      },
      {
        ton: "ansatz",
        paragraph: "4",
        zeilen: ["§ 4 (1) 2"],
        schritt: "Entnahme",
        marken: [
          { text: "§ 6 (1) Nr. 4", zeilen: ["§ 6 (1) Nr. 4"], ton: "bewertung", paragraph: "6", titel: "§ 6 Abs. 1 Nr. 4 EStG – Bewertung der Entnahme" },
          { text: "§ 12 Nr. 3", zeilen: ["§ 12 Nr. 3"], ton: "bewertung", paragraph: "12", titel: "§ 12 Nr. 3 EStG – nicht abziehbare Steuern" },
        ],
      },
      {
        /* Die Umsatzsteuer zur Entnahme steht in einem anderen Gesetz und
           steckt daher weiter hinten im Block. */
        ton: "bewertung",
        reihe: 2,
        gesetz: "UStG",
        paragraph: "3",
        zeilen: ["§ 3 (1b) 1,", "S. 2 UStG"],
        schritt: "Unentgeltliche Wertabgabe",
        marken: [
          { text: "§ 3 (9a) Nr. 1 UStG", reihe: 2, zeilen: ["§ 3 (9a) Nr. 1"], gesetz: "UStG", paragraph: "3", titel: "§ 3 Abs. 9a Nr. 1 UStG – unentgeltliche Wertabgabe" },
        ],
      },
      {
        ton: "ausserbilanz",
        paragraph: "4",
        zeilen: ["§ 4 (5) 1", "Nr. 6 S. 3"],
        schritt: "Außerbilanziell – Fahrten Wohnung/Betrieb",
      },
      {
        ton: "ansatz",
        paragraph: "4",
        zeilen: ["§ 4 (4)"],
        schritt: "Betriebsausgaben",
      },
    ],
  },
];

/* Nur das erste Schema hat die Gesetzbuchansicht - dort steckt die ganze
   Ansatz-/Bewertungsstrecke, die in den Büchern als Zettel klebt. */
export const GESETZBUCH_SCHEMA = "vermoegensgegenstand-wirtschaftsgut";

const TON_BESCHRIFTUNG = {
  ansatz: "Ansatz",
  bewertung: "Bewertung",
  sonder: "Sonder-AfA",
  ausserbilanz: "Außerbilanziell",
  hinweis: "Merke",
};

function normUrl(gesetz, paragraph) {
  return `https://dejure.org/gesetze/${gesetz}/${paragraph}.html`;
}

function Zeilen({ zeilen }) {
  return zeilen.map((zeile, i) => (
    <React.Fragment key={i}>{i > 0 && <br />}{zeile}</React.Fragment>
  ));
}

/* Auf dem Zettel steht die nackte Norm - das Paragrafenzeichen kostet nur
   Platz. Tooltip und Vorlesetext behalten es. */
const PARAGRAFZEICHEN = /§{1,2}\s*/g;

function Zettelzeilen({ zeilen }) {
  return <Zeilen zeilen={zeilen.map((zeile) => zeile.replace(PARAGRAFZEICHEN, ""))} />;
}

function Zettel({ reiter, gesetz, rechts = false }) {
  /* Auf dem Zettel steht das Gesetz nicht - im Tooltip und für Screenreader
     gehört es dazu. */
  const beschriftung = `${reiter.zeilen.join(" ")} ${reiter.gesetz || gesetz}`;
  const inhalt = <Zettelzeilen zeilen={reiter.zeilen} />;
  return (
    <div className={`buch-reiter${rechts ? " buch-reiter--rechts" : ""}`} style={{ "--breit": reiter.breit }}>
      {reiter.marken?.length > 0 && (
        <div className="buch-marken">
          {reiter.marken.map((marke) => (
            <Nebenzettel key={marke.text} zettel={marke} ton={reiter.ton} gesetz={gesetz} />
          ))}
        </div>
      )}
      <a
        className={`buch-zettel buch-zettel--${reiter.ton}${reiter.quer ? " buch-zettel--quer" : ""}${reiter.streifen ? " buch-zettel--kopf" : ""}`}
        style={reiter.reihe ? { "--reihe": reiter.reihe } : undefined}
        href={normUrl(reiter.gesetz || gesetz, reiter.paragraph)}
        target="_blank"
        rel="noopener noreferrer"
        title={`${beschriftung} · ${reiter.schritt}`}
        aria-label={`${beschriftung} – ${reiter.schritt}. Norm auf dejure.org öffnen`}
      >
        {reiter.quer || rechts ? inhalt : <span className="buch-zettel-hochkant">{inhalt}</span>}
      </a>
      {reiter.streifen?.length > 0 && (
        <div className="buch-streifen">
          {reiter.streifen.map((streifen) => (
            <Nebenzettel key={streifen.text} zettel={streifen} ton={reiter.ton} gesetz={gesetz} />
          ))}
        </div>
      )}
    </div>
  );
}

/* Die kleinen Zettel, die oben auf einem Streifen kleben oder ihn unten
   ergänzen - immer quer beschriftet, mit eigenem Ton und Gesetz. */
function Nebenzettel({ zettel, ton, gesetz }) {
  return (
    <a
      className={`buch-zettel buch-zettel--marke buch-zettel--${zettel.ton || ton}`}
      style={zettel.reihe ? { "--reihe": zettel.reihe } : undefined}
      href={normUrl(zettel.gesetz || gesetz, zettel.paragraph)}
      target="_blank"
      rel="noopener noreferrer"
      title={zettel.titel}
      aria-label={`${zettel.text} – ${zettel.titel}`}
    >
      <Zettelzeilen zeilen={zettel.zeilen} />
    </a>
  );
}

const RUHELAGE = { kipp: 3.5, dreh: 0 };

function begrenzen(wert, min, max) {
  return Math.min(max, Math.max(min, wert));
}

/* Das Buch lässt sich mit der Maus greifen und drehen. Dabei treten die Zettel
   der hinteren Reihe hervor - sie stecken tiefer im Buchblock. */
function Gesetzbuch({ buch }) {
  const [lage, setLage] = useState(RUHELAGE);
  const [zieht, setZieht] = useState(false);
  const griff = useRef(null);
  const bewegt = useRef(false);

  const beiPointerDown = (event) => {
    if (event.button !== 0 && event.pointerType === "mouse") return;
    griff.current = { x: event.clientX, y: event.clientY, ...lage };
    bewegt.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
    setZieht(true);
  };

  const beiPointerMove = (event) => {
    if (!griff.current) return;
    const dx = event.clientX - griff.current.x;
    const dy = event.clientY - griff.current.y;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) bewegt.current = true;
    setLage({
      dreh: begrenzen(griff.current.dreh + dx * 0.32, -58, 58),
      kipp: begrenzen(griff.current.kipp - dy * 0.26, -14, 58),
    });
  };

  const beiPointerUp = () => {
    griff.current = null;
    setZieht(false);
  };

  /* Ein gezogenes Buch soll keinen Zettel öffnen. */
  const beiClickCapture = (event) => {
    if (!bewegt.current) return;
    event.preventDefault();
    event.stopPropagation();
    bewegt.current = false;
  };

  const beiKeyDown = (event) => {
    const schritt = event.shiftKey ? 12 : 5;
    const tasten = {
      ArrowLeft: { dreh: -schritt }, ArrowRight: { dreh: schritt },
      ArrowUp: { kipp: schritt }, ArrowDown: { kipp: -schritt },
    };
    if (event.key === "Escape" || event.key === "Home") {
      setLage(RUHELAGE);
      event.preventDefault();
      return;
    }
    const zug = tasten[event.key];
    if (!zug) return;
    event.preventDefault();
    setLage((alt) => ({
      dreh: begrenzen(alt.dreh + (zug.dreh || 0), -58, 58),
      kipp: begrenzen(alt.kipp + (zug.kipp || 0), -14, 58),
    }));
  };

  return (
    <div
      className={`buch-buehne buch-buehne--${buch.stil}`}
      style={{
        "--zettel-anzahl": buch.reiter.length,
        /* Breite Zettel zählen mehrfach, damit die Reihe auf den Deckel passt. */
        "--zettel-breiten": buch.reiter.reduce((summe, r) => summe + (r.breit || 1), 0),
        "--kipp": `${lage.kipp}deg`,
        "--dreh": `${lage.dreh}deg`,
      }}
      data-zieht={zieht ? "" : undefined}
      onPointerDown={beiPointerDown}
      onPointerMove={beiPointerMove}
      onPointerUp={beiPointerUp}
      onPointerCancel={beiPointerUp}
      onClickCapture={beiClickCapture}
      onDoubleClick={() => setLage(RUHELAGE)}
      onKeyDown={beiKeyDown}
      tabIndex={0}
      role="group"
      aria-label={`${buch.titel.join(" ")} drehen – Pfeiltasten kippen und drehen, Escape stellt zurück`}
    >
      <div className="buch-koerper">
        <div className="buch-reiterleiste">
          {buch.reiter.map((reiter) => (
            <Zettel key={reiter.zeilen.join(" ")} reiter={reiter} gesetz={buch.gesetz} />
          ))}
        </div>
        <div className="buch-stapel">
          {buch.reiterRechts?.length > 0 && (
            <div className="buch-reiterleiste buch-reiterleiste--rechts">
              {buch.reiterRechts.map((reiter) => (
                <Zettel key={reiter.zeilen.join(" ")} reiter={reiter} gesetz={buch.gesetz} rechts />
              ))}
            </div>
          )}
          {/* Rückdeckel, Schnittflächen und Oberkante machen aus dem Deckel
              einen Körper mit Dicke. */}
          <div className="buch-block" aria-hidden="true" />
          <div className="buch-kante buch-kante--links" aria-hidden="true" />
          <div className="buch-kante buch-kante--rechts" aria-hidden="true" />
          <div className="buch-kante buch-kante--oben" aria-hidden="true" />
          <div className="buch-deckel">
            <div className="buch-band">{buch.band}</div>
            {buch.jahr && <div className="buch-jahr">{buch.jahr}</div>}
            <div className="buch-titel">
              <b><Zeilen zeilen={buch.titel} /></b>
              {buch.auflage && <span>{buch.auflage}</span>}
            </div>
            <div className="buch-fuss">
              <b>{buch.fuss.links}</b>
              <span>{buch.fuss.rechts}</span>
            </div>
            {buch.register && (
              <div className="buch-register" aria-hidden="true">
                {buch.register.map((gesetz) => (
                  <span key={gesetz} className={gesetz === buch.gesetz ? "ist-aktiv" : undefined}>{gesetz}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Bildet das Schema allein über die Gesetzestexte ab: die Zettel, die oben aus
   den beiden Textausgaben ragen. */
function GesetzbuchAnsicht() {
  const toene = [...new Set(GESETZBUECHER.flatMap((buch) => [...buch.reiter, ...(buch.reiterRechts || [])].flatMap(
    (r) => [r.ton, ...[...(r.marken || []), ...(r.streifen || [])].map((z) => z.ton || r.ton)],
  )))];
  return (
    <div className="buch-ansicht">
      <div className="buch-regal">
        {GESETZBUECHER.map((buch) => <Gesetzbuch key={buch.id} buch={buch} />)}
      </div>
      <p className="buch-legende">
        {toene.map((ton) => (
          <span key={ton} className={`buch-legende--${ton}`}>{TON_BESCHRIFTUNG[ton]}</span>
        ))}
        Dasselbe Schema, allein über die Gesetzestexte gelesen. Jeder Zettel öffnet seine Norm; die Bücher lassen sich ziehend drehen, Doppelklick stellt sie zurück.
      </p>
    </div>
  );
}

/* Rechenschritt eines Listenpunkts: Mono-Schrift, eigener Rahmen, „^“ wird als
   echter Exponent hochgestellt. */
function Formel({ text, beschriftung = "Formel" }) {
  const teile = text.split(/\^([^\s)]+)/);
  return (
    <span className="schema-formel">
      <span className="schema-formel__label">{beschriftung}</span>
      <span className="schema-formel__term">
        {teile.map((teil, i) => (i % 2 === 1 ? <sup key={i}>{teil}</sup> : <span key={i}>{teil}</span>))}
      </span>
    </span>
  );
}

function Listenpunkt({ punkt }) {
  if (typeof punkt === "string") return <li>{punkt}</li>;
  return (
    <li className={punkt.unterblock?.length > 0 ? "hat-einzug" : undefined}>
      {punkt.text}
      {punkt.formel && <Formel text={punkt.formel} beschriftung={punkt.formelBeschriftung} />}
      {punkt.kinder?.length > 0 && (
        <ul style={{ marginTop: 8 }}>
          {punkt.kinder.map((kind, i) => <Listenpunkt key={i} punkt={kind} />)}
        </ul>
      )}
      {punkt.unterblock?.length > 0 && (
        <div className="schema-einzug">
          {punkt.unterblock.map((element, i) => <Inhalt key={i} element={element} />)}
        </div>
      )}
    </li>
  );
}

function KomplexerPunkt({ punkt }) {
  return (
    <li>
      <span style={{ whiteSpace: "pre-line" }}>{punkt.text}</span>
      {punkt.kinderBuchstaben?.length > 0 && (
        <ol type="a" style={{ marginTop: 10 }}>
          {punkt.kinderBuchstaben.map((kind, i) => (
            <li key={i} style={{ marginBottom: 10 }}>
              {typeof kind === "string" ? (
                <span style={{ whiteSpace: "pre-line" }}>{kind}</span>
              ) : (
                <>
                  <span>{kind.text}</span>
                  <ul style={{ marginTop: 8 }}>
                    {kind.kinder.map((x, j) => <li key={j}>{x}</li>)}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ol>
      )}
    </li>
  );
}

function Inhalt({ element }) {
  if (element.typ === "untertitel") return <h4 style={{ margin: "14px 0 6px", fontFamily: "var(--serif)" }}>{element.text}</h4>;
  if (element.typ === "text") return <p style={{ margin: "0 0 10px", whiteSpace: "pre-line" }}>{element.text}</p>;
  if (element.typ === "hinweis") {
    return (
      <div style={{ borderLeft: `4px solid ${farben.hinweis}`, padding: "10px 12px", margin: "10px 0", background: "var(--feld)" }}>
        <strong style={{ whiteSpace: "pre-line" }}>{element.text}</strong>
      </div>
    );
  }
  if (element.typ === "liste") {
    /* Sobald ein Punkt einen eingerückten Unterblock trägt, bekommen alle
       Punkte dieser Ebene einen eigenen, kräftigen Aufzählungspunkt – so
       bleibt erkennbar, welche Punkte gleichrangig sind. */
    const gestuft = element.punkte.some((p) => p?.unterblock?.length > 0);
    return (
      <ul className={gestuft ? "liste liste--gestuft" : "liste"} style={{ marginTop: 8 }}>
        {element.punkte.map((p, i) => <Listenpunkt key={i} punkt={p} />)}
      </ul>
    );
  }
  if (element.typ === "nummern") {
    return <ol style={{ paddingLeft: 24, margin: "8px 0 12px" }}>{element.punkte.map((p, i) => <li key={i} style={{ marginBottom: 6 }}>{p}</li>)}</ol>;
  }
  if (element.typ === "nummernKomplex") {
    return (
      <ol start={element.start || 1} style={{ paddingLeft: 26, margin: "8px 0 12px" }}>
        {element.punkte.map((p, i) => <KomplexerPunkt key={i} punkt={p} />)}
      </ol>
    );
  }
  return null;
}

function SchemaBlock({ block }) {
  return (
    <section
      style={{
        border: "1px solid var(--linie)",
        borderLeft: `6px solid ${farben[block.ton] || farben.neutral}`,
        background: "var(--papier)",
        padding: "16px 18px",
        marginBottom: 12,
      }}
    >
      <h3 style={{ margin: "0 0 12px", color: farben[block.ton] || farben.neutral }}>{block.titel}</h3>
      {block.inhalt.map((element, i) => <Inhalt key={i} element={element} />)}
    </section>
  );
}

/* `aktiv` und `onWechsel` können von außen gesetzt werden. Dadurch weiß
   SchemaPostitEnhancer, wann sich der angezeigte Text geändert hat, und braucht
   keinen MutationObserver mehr, um das selbst herauszufinden. Ohne die Props
   verhält sich die Komponente wie bisher. */
export default function Pruefungsschemata({ aktiv: aktivVonAussen, onWechsel, nurHgb: nurHgbVonAussen, onHgbWechsel }) {
  const [aktivIntern, setAktivIntern] = useState(schemata[0].id);
  const [nurHgbIntern, setNurHgbIntern] = useState(false);
  const aktiv = aktivVonAussen ?? aktivIntern;
  const setAktiv = onWechsel ?? setAktivIntern;
  const schema = schemata.find((s) => s.id === aktiv) || schemata[0];
  const hatReiter = schema.id === GESETZBUCH_SCHEMA;
  const nurHgb = hatReiter && (nurHgbVonAussen ?? nurHgbIntern);
  const setNurHgb = onHgbWechsel ?? setNurHgbIntern;

  return (
    <section className="abschnitt">
      <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 12 }}>
        <div>
          <span className="kicker">Sechs Originalschemata</span>
          <h2 style={{ margin: "4px 0 0" }}>Ausformulierte Prüfungsschemata</h2>
        </div>
        <span className="zaehler">6 Schemata</span>
      </div>

      <div className="filter" style={{ marginBottom: 14 }}>
        {schemata.map((s, i) => (
          <button key={s.id} aria-pressed={aktiv === s.id} onClick={() => setAktiv(s.id)}>
            {i + 1}. {s.titel.replace("Prüfungsschema ", "")} <PrioBadge fach="bilanz" inhalt={{ title: s.titel }} typ="schema" id={s.id} kompakt nurBeiTreffer />
          </button>
        ))}
      </div>

      <article className="panel" style={{ padding: 0, overflow: "hidden" }}>
        <header style={{ padding: "20px 22px", borderBottom: "1px solid var(--linie)", background: "var(--feld)" }}>
          {/* Ein einziger Textknoten: das normalize() im Cleanup von
              SchemaPostitEnhancer würde mehrere Knoten verschmelzen und damit
              Reacts Referenz auf die Zahl kappen - der Zähler bliebe stehen. */}
          <span className="kicker">{`Prüfungsschema ${schemata.findIndex((s) => s.id === schema.id) + 1} von 6`}</span>
          <h2 style={{ margin: "6px 0 0" }}>{schema.titel}</h2>
          <div className="prio-kopfzeile"><PrioBadge fach="bilanz" inhalt={{ title: schema.titel }} typ="schema" id={schema.id} mitThema nurBeiTreffer /></div>
          {hatReiter && (
            <div className="buch-schalter" role="group" aria-label="Darstellung des Schemas">
              <button type="button" aria-pressed={!nurHgb} onClick={() => setNurHgb(false)}>Ausformuliert</button>
              <button type="button" aria-pressed={nurHgb} onClick={() => setNurHgb(true)}>Nur Gesetze</button>
            </div>
          )}
        </header>
        <div style={{ padding: "18px" }}>
          {nurHgb
            ? <GesetzbuchAnsicht />
            : schema.bloecke.map((block, i) => <SchemaBlock key={i} block={block} />)}
        </div>
        <footer style={{ padding: "10px 18px", borderTop: "1px solid var(--linie)", fontSize: 12, color: "var(--ink-weich)" }}>
          Quelle: © Markus Nöthen · B-S25-Bilanz-Termin 1-Schema-(Noethen)-0425
        </footer>
      </article>
    </section>
  );
}
