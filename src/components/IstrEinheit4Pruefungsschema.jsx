import React, { useMemo, useState } from "react";
import "./istr-einheit2.css";

const farben = {
  ansatz: "var(--rot)",
  bewertung: "var(--orange)",
  technik: "var(--gruen)",
  hinweis: "var(--magenta)",
  neutral: "var(--tinte)",
};

export const istrEinheit4Schemata = [
  {
    id: "istr4-schema-kette",
    titel: "Hinzurechnungsbesteuerung – die Kette §§ 7 bis 12 AStG",
    fokus: "§ 1 Abs. 1 S. 1 EStG · § 7 · § 8 Abs. 5 · § 8 Abs. 1 · § 8 Abs. 2–4 · § 9 · § 10 · § 12 · § 11",
    quelle: "Hinzurechnungsbesteuerung.pdf · Frames 1–89",
    bloecke: [
      { titel: "1. Persönlicher Steuerzugriff zuerst", ton: "ansatz", inhalt: [
        { typ: "schritt", nummer: "1", label: "§ 1 Abs. 1 S. 1 EStG", text: "Natürliche Person mit Wohnsitz (§ 8 AO) oder gewöhnlichem Aufenthalt (§ 9 AO) im Inland. Rechtsfolge: Welteinkommensprinzip nach § 2 Abs. 1 EStG, vorbehaltlich DBA." },
        { typ: "hinweis", text: "§ 7 AStG steht im Grundschema als Nebenprüfpunkt neben DBA (AAVV), § 34c EStG / § 32d Abs. 5 EStG falls kein DBA, § 2a EStG und § 1a EStG – nie als Einstieg." },
      ] },
      { titel: "2. Zurechnungstatbestand", ton: "bewertung", inhalt: [
        { typ: "schritt", nummer: "2", label: "§ 7 Abs. 1 S. 1 AStG", text: "Unbeschränkt Steuerpflichtiger beherrscht eine ausländische Gesellschaft (weder Geschäftsleitung noch Sitz im Inland). Zurechnung entsprechend der Beteiligung am Nennkapital." },
        { typ: "schritt", nummer: "3", label: "§ 7 Abs. 2 AStG", text: "Beherrschung am Ende des maßgebenden Wirtschaftsjahres: mehr als die Hälfte der Stimmrechte, der Anteile am Nennkapital oder des Gewinn-/Liquidationsanspruchs – allein oder mit nahestehenden Personen." },
      ] },
      { titel: "3. Zwischengesellschaftseinkünfte", ton: "technik", inhalt: [
        { typ: "schritt", nummer: "4", label: "§ 8 Abs. 5 AStG", text: "Niedrige Besteuerung: weniger als 15 % Ertragsteuerbelastung auf die nach § 10 Abs. 3 AStG ermittelten Einkünfte." },
        { typ: "schritt", nummer: "5", label: "§ 8 Abs. 1 AStG", text: "Aktivkatalog Nr. 1 bis 9 negativ lesen: Zwischengesellschaft für alles, was nicht aufgezählt ist – Vermietung von Grundstücken über Nr. 6 Buchst. b." },
        { typ: "schritt", nummer: "6", label: "§ 8 Abs. 2 bis 4 AStG", text: "Motivtest nur bei Sitz/Geschäftsleitung in EU oder EWR (§ 8 Abs. 3 AStG) und nur bei ausreichendem Auskunftsaustausch (§ 8 Abs. 4 AStG)." },
      ] },
      { titel: "4. Bagatellgrenze und Rechtsfolge", ton: "hinweis", inhalt: [
        { typ: "schritt", nummer: "7", label: "§ 9 AStG", text: "Freigrenze: nicht mehr als ein Drittel der gesamten Bruttoerträge und insgesamt nicht mehr als 100.000 €. Beide Grenzen müssen eingehalten sein." },
        { typ: "schritt", nummer: "8", label: "§ 10 AStG", text: "Hinzurechnungsbetrag; § 10 Abs. 2 S. 1 AStG: Einkünfte i.S.d. § 20 Abs. 1 Nr. 1 EStG, aber nach § 10 Abs. 2 S. 4 AStG ohne § 3 Nr. 40 EStG und ohne § 32d EStG." },
        { typ: "schritt", nummer: "9", label: "§ 12 AStG", text: "Anrechnung der tatsächlich zulasten der ausländischen Gesellschaft erhobenen Steuern; § 12 Abs. 3 AStG verweist auf § 34c Abs. 1 EStG bzw. § 26 KStG." },
        { typ: "schritt", nummer: "10", label: "§ 11 AStG", text: "Bei der späteren Ausschüttung Kürzungsbetrag abziehen, damit derselbe Gewinn nicht zweimal belastet wird." },
        { typ: "verweis", text: "Übungsfall A / A-Limited öffnen", fallId: "istr4-fall-a-limited" },
      ] },
    ],
    modulIds: ["istr4-01","istr4-02","istr4-03","istr4-04","istr4-05","istr4-06","istr4-07","istr4-08"],
    fallIds: ["istr4-fall-a-limited"],
  },
  {
    id: "istr4-schema-7astg",
    titel: "§ 7 AStG – Beherrschung Schritt für Schritt",
    fokus: "Unbeschränkt Steuerpflichtiger · ausländische Gesellschaft · Beherrschung · nahestehende Personen",
    quelle: "Hinzurechnungsbesteuerung.pdf · Frames 11–32",
    bloecke: [
      { titel: "1. Beteiligte", ton: "ansatz", inhalt: [
        { typ: "schritt", nummer: "1", label: "Steuerpflichtiger", text: "Unbeschränkt Steuerpflichtiger nach § 1 Abs. 1 EStG bzw. § 1 KStG. § 7 Abs. 1 S. 5 AStG erstreckt die Sätze 1 bis 3 auf beschränkt Steuerpflichtige mit inländischer Betriebsstätte." },
        { typ: "schritt", nummer: "2", label: "Ausländische Gesellschaft", text: "Körperschaft, Personenvereinigung oder Vermögensmasse i.S.d. KStG ohne Geschäftsleitung und ohne Sitz im Inland, nicht nach § 3 Abs. 1 KStG von der Körperschaftsteuerpflicht ausgenommen." },
      ] },
      { titel: "2. Beherrschungstest", ton: "bewertung", inhalt: [
        { typ: "schritt", nummer: "3", label: "§ 7 Abs. 2 AStG", text: "Maßgebend ist das Ende des Wirtschaftsjahres, in dem die Gesellschaft die Einkünfte erzielt hat. Mehr als die Hälfte der Stimmrechte oder der Anteile am Nennkapital oder Anspruch auf mehr als die Hälfte des Gewinns bzw. Liquidationserlöses." },
        { typ: "schritt", nummer: "4", label: "§ 7 Abs. 3 AStG", text: "Nahestehende Personen i.S.d. § 1 Abs. 2 AStG hinzurechnen; eine Personengesellschaft oder Mitunternehmerschaft kann selbst nahestehende Person sein." },
        { typ: "schritt", nummer: "5", label: "§ 7 Abs. 4 AStG", text: "Zusammenwirken durch abgestimmtes Verhalten; bei Gesellschaftern einer an der Zwischengesellschaft beteiligten Personengesellschaft widerlegbar unterstellt." },
      ] },
      { titel: "3. Umfang und Sperren", ton: "technik", inhalt: [
        { typ: "schritt", nummer: "6", label: "§ 7 Abs. 1 S. 2 AStG", text: "Mittelbare Beteiligungen bleiben unbeachtlich, soweit auf der vermittelnden Stufe bereits eine vergleichbare Hinzurechnungsbesteuerung ohne niedrige Besteuerung stattgefunden hat." },
        { typ: "schritt", nummer: "7", label: "§ 7 Abs. 5 AStG", text: "Vorrang des Investmentsteuergesetzes; die Rückausnahme greift, wenn die Geschäfte zu mehr als einem Drittel mit dem Steuerpflichtigen oder ihm nahestehenden Personen betrieben werden." },
        { typ: "verweis", text: "Zum Modul § 7 AStG", modulId: "istr4-02" },
      ] },
    ],
    modulIds: ["istr4-02"], fallIds: ["istr4-fall-a-limited"],
  },
  {
    id: "istr4-schema-8astg",
    titel: "§ 8 AStG – passiv oder aktiv?",
    fokus: "§ 8 Abs. 5 · Aktivkatalog Nr. 1–9 · Nr. 6 Buchst. b · Motivtest und EU/EWR-Schranke",
    quelle: "Hinzurechnungsbesteuerung.pdf · Frames 24–58 und 89",
    bloecke: [
      { titel: "1. Niedrige Besteuerung", ton: "ansatz", inhalt: [
        { typ: "schritt", nummer: "1", label: "§ 8 Abs. 5 S. 1 AStG", text: "Weniger als 15 % Ertragsteuerbelastung auf die nach § 10 Abs. 3 AStG ermittelten Einkünfte, ohne dass dies auf einem Ausgleich mit anderen Quellen beruht." },
        { typ: "schritt", nummer: "2", label: "§ 8 Abs. 5 S. 2, 3 AStG", text: "Ausschüttungsbezogene Ansprüche einbeziehen; geschuldete, aber tatsächlich nicht erhobene Steuern gelten ebenfalls als niedrige Besteuerung." },
      ] },
      { titel: "2. Aktivkatalog des § 8 Abs. 1 AStG", ton: "bewertung", inhalt: [
        { typ: "liste", punkte: [
          "Nr. 1 Land- und Forstwirtschaft",
          "Nr. 2 Herstellung, Bearbeitung, Verarbeitung, Montage, Energieerzeugung, Bodenschätze",
          "Nr. 3 Versicherungsunternehmen, Kreditinstitute und Finanzdienstleistungsinstitute mit wesentlicher wirtschaftlicher Tätigkeit",
          "Nr. 4 Handel, soweit keine der beiden Rückausnahmen greift",
          "Nr. 5 Dienstleistungen, soweit keine der beiden Rückausnahmen greift",
          "Nr. 6 Vermietung und Verpachtung – Buchst. a Rechte/Pläne/Muster, Buchst. b Grundstücke, Buchst. c bewegliche Sachen",
        ] },
        { typ: "hinweis", text: "Der Katalog ist negativ formuliert: Zwischengesellschaft ist die Gesellschaft für alle niedrig besteuerten Einkünfte, die nicht aus einer Katalognummer stammen." },
      ] },
      { titel: "3. Vermietung von Grundbesitz", ton: "technik", inhalt: [
        { typ: "schritt", nummer: "3", label: "§ 8 Abs. 1 Nr. 6 Buchst. b AStG", text: "Vermietung oder Verpachtung von Grundstücken ist grundsätzlich passiv." },
        { typ: "schritt", nummer: "4", label: "Gegenausnahme", text: "Aktiv nur, wenn der Steuerpflichtige nachweist, dass die Einkünfte nach einem DBA steuerbefreit wären, hätten die nach § 7 beteiligten unbeschränkt Steuerpflichtigen sie unmittelbar bezogen." },
        { typ: "hinweis", text: "Ohne DBA – wie im Verhältnis zu den VAE – ist dieser Nachweis von vornherein unmöglich." },
      ] },
      { titel: "4. Motivtest", ton: "hinweis", inhalt: [
        { typ: "schritt", nummer: "5", label: "§ 8 Abs. 2 AStG", text: "Wesentliche wirtschaftliche Tätigkeit im Sitz-/Geschäftsleitungsstaat: sachliche und personelle Ausstattung, qualifiziertes Personal, selbständige und eigenverantwortliche Ausübung, Fremdvergleichsgrundsatz." },
        { typ: "schritt", nummer: "6", label: "§ 8 Abs. 3 AStG", text: "Der Test gilt nur für Gesellschaften mit Sitz oder Geschäftsleitung in einem EU-Mitgliedstaat oder EWR-Vertragsstaat. Drittstaatengesellschaften sind ausgeschlossen." },
        { typ: "schritt", nummer: "7", label: "§ 8 Abs. 4 AStG", text: "Kein Test, wenn der Sitzstaat keine zur Durchführung der Besteuerung erforderlichen Auskünfte erteilt." },
        { typ: "verweis", text: "Zum Modul Aktivkatalog", modulId: "istr4-04" },
        { typ: "verweis", text: "Zum Modul Motivtest", modulId: "istr4-05" },
      ] },
    ],
    modulIds: ["istr4-03","istr4-04","istr4-05"], fallIds: ["istr4-fall-a-limited"],
  },
  {
    id: "istr4-schema-rechtsfolge",
    titel: "Rechtsfolge: § 9 → § 10 → § 12 → § 11 AStG",
    fokus: "Freigrenze · Hinzurechnungsbetrag · Anrechnung · Kürzungsbetrag",
    quelle: "Hinzurechnungsbesteuerung.pdf · Frames 59–85",
    bloecke: [
      { titel: "1. Freigrenze", ton: "ansatz", inhalt: [
        { typ: "schritt", nummer: "1", label: "§ 9 AStG relativ", text: "Die Zwischeneinkünfte stammen aus nicht mehr als einem Drittel der gesamten Bruttoerträge der Gesellschaft." },
        { typ: "schritt", nummer: "2", label: "§ 9 AStG absolut", text: "Die dem Steuerpflichtigen zuzurechnenden Beträge übersteigen insgesamt 100.000 € nicht." },
        { typ: "hinweis", text: "Freigrenze, nicht Freibetrag: Wird eine der beiden Grenzen überschritten, ist der gesamte Hinzurechnungsbetrag anzusetzen." },
      ] },
      { titel: "2. Hinzurechnungsbetrag", ton: "bewertung", inhalt: [
        { typ: "schritt", nummer: "3", label: "§ 10 Abs. 1 AStG", text: "Die nach § 7 Abs. 1 AStG steuerpflichtigen Einkünfte bilden den Hinzurechnungsbetrag." },
        { typ: "schritt", nummer: "4", label: "§ 10 Abs. 2 S. 1 AStG", text: "Der Hinzurechnungsbetrag gehört zu den Einkünften i.S.d. § 20 Abs. 1 Nr. 1 EStG." },
        { typ: "schritt", nummer: "5", label: "§ 10 Abs. 2 S. 4 AStG", text: "Weder Teileinkünfteverfahren (§ 3 Nr. 40 EStG) noch gesonderter Tarif (§ 32d EStG) – Ansatz mit dem persönlichen Steuersatz." },
        { typ: "schritt", nummer: "6", label: "§ 10 Abs. 3 AStG", text: "Ermittlung der Einkünfte nach deutschem Steuerrecht; dieselbe Größe trägt die 15-%-Prüfung des § 8 Abs. 5 AStG." },
      ] },
      { titel: "3. Doppelbelastung vermeiden", ton: "technik", inhalt: [
        { typ: "schritt", nummer: "7", label: "§ 12 Abs. 1 AStG", text: "Die zulasten der ausländischen Gesellschaft tatsächlich erhobenen Steuern vom Einkommen werden auf die deutsche Einkommen- oder Körperschaftsteuer angerechnet, die auf den Hinzurechnungsbetrag entfällt." },
        { typ: "schritt", nummer: "8", label: "§ 12 Abs. 3 AStG", text: "§ 34c Abs. 1 EStG bzw. § 26 Abs. 1 und 2 S. 1 KStG sind auf den Gesamtbetrag der Anrechnungsbeträge entsprechend anzuwenden." },
        { typ: "schritt", nummer: "9", label: "§ 11 AStG", text: "Erhält der Steuerpflichtige später Bezüge i.S.d. § 20 Abs. 1 Nr. 1 EStG aus der Beteiligung, ist ein Kürzungsbetrag nach Absatz 2 abzuziehen – bei der Summe der Einkünfte bzw. im Rahmen des § 32d EStG bei der Summe der Kapitalerträge." },
        { typ: "verweis", text: "Zum Modul § 10 AStG", modulId: "istr4-07" },
        { typ: "verweis", text: "Zum Modul § 11 / § 12 AStG", modulId: "istr4-08" },
      ] },
    ],
    modulIds: ["istr4-06","istr4-07","istr4-08"], fallIds: ["istr4-fall-a-limited"],
  },
  {
    id: "istr4-schema-fall",
    titel: "Falllösung A / A-Limited – Aufbau am Klausurtext",
    fokus: "Wohnsitz Berlin · 100 % A-Limited · Dubai 9 % · kein DBA · Vermietung von Grundbesitz",
    quelle: "Hinzurechnungsbesteuerung.pdf · Frames 1–6, 14–21, 28–39 und 75–80",
    bloecke: [
      { titel: "1. Steuerpflicht", ton: "ansatz", inhalt: [
        { typ: "schritt", nummer: "I", label: "§ 1 Abs. 1 S. 1 EStG (+)", text: "A ist natürliche Person und hat nach § 8 AO einen Wohnsitz im Inland (Berlin). Für A gilt das Welteinkommensprinzip i.S.d. § 2 Abs. 1 EStG, vorbehaltlich DBA – mit den VAE besteht keines." },
      ] },
      { titel: "2. AStG-Tatbestand", ton: "bewertung", inhalt: [
        { typ: "schritt", nummer: "II", label: "§ 7 Abs. 1 S. 1 AStG (+)", text: "A beherrscht als unbeschränkt Steuerpflichtiger die A-Limited zu 100 %, § 7 Abs. 2 S. 1 AStG. Sitz und Geschäftsleitung liegen in den VAE." },
        { typ: "schritt", nummer: "III", label: "§ 8 Abs. 5 AStG (+)", text: "Niedrige Besteuerung: 9 % Ertragsteuer in den VAE liegen unter 15 %." },
        { typ: "schritt", nummer: "IV", label: "§ 8 Abs. 1 Nr. 6 Buchst. b AStG", text: "Vermietung von Grundbesitz ist passiv; die DBA-Gegenausnahme scheitert mangels DBA mit den VAE. Die A-Limited ist Zwischengesellschaft." },
        { typ: "schritt", nummer: "V", label: "§ 8 Abs. 2, 3 AStG (–)", text: "Der Motivtest ist versperrt: § 8 Abs. 3 AStG lässt ihn nur für EU-/EWR-Gesellschaften zu; die VAE sind Drittstaat." },
        { typ: "schritt", nummer: "VI", label: "§ 9 AStG (–)", text: "Die Freigrenze greift nicht: Der Gewinn nach deutschem Steuerrecht liegt über 100.000 €." },
      ] },
      { titel: "3. Rechtsfolge und Entlastung", ton: "technik", inhalt: [
        { typ: "schritt", nummer: "VII", label: "§ 10 Abs. 1, 2 AStG", text: "Hinzurechnungsbetrag = Einkünfte i.S.d. § 20 Abs. 1 Nr. 1 EStG, § 10 Abs. 2 S. 1 AStG; ohne TEV und ohne § 32d EStG, § 10 Abs. 2 S. 4 AStG. A = 100.000 €, persönlicher Steuersatz." },
        { typ: "schritt", nummer: "VIII", label: "§ 12 Abs. 1, 3 AStG · § 34c Abs. 1 EStG", text: "Anrechnung der in den VAE erhobenen 9 % von 100.000 € = 9.000 € auf die deutsche Einkommensteuer." },
        { typ: "hinweis", text: "Bei einer späteren Ausschüttung ist zusätzlich der Kürzungsbetrag des § 11 AStG zu berücksichtigen." },
        { typ: "verweis", text: "Vollständigen Übungsfall öffnen", fallId: "istr4-fall-a-limited" },
        { typ: "verweis", text: "Zurück zur Gesamtkette §§ 7–12 AStG", schemaId: "istr4-schema-kette" },
      ] },
    ],
    modulIds: ["istr4-01","istr4-02","istr4-03","istr4-04","istr4-05","istr4-06","istr4-07","istr4-08"],
    fallIds: ["istr4-fall-a-limited"],
  },
];

function Querverweis({ element, onSchemaOeffnen, onModulOeffnen, onFallOeffnen }) {
  const ziel = element.schemaId ? "Schema" : element.modulId ? "Modul" : "Fall";
  const onClick = element.schemaId ? () => onSchemaOeffnen?.(element.schemaId)
    : element.modulId ? () => onModulOeffnen?.(element.modulId)
      : () => onFallOeffnen?.(element.fallId);
  return <button type="button" className="istr2-querverweis" onClick={onClick}><span className="kicker">Querverweis · {ziel}</span><span>{element.text}</span></button>;
}

function Inhalt({ element, onSchemaOeffnen, onModulOeffnen, onFallOeffnen }) {
  if (element.typ === "text") return <p className="istr2-schema-text">{element.text}</p>;
  if (element.typ === "hinweis") return <div className="istr2-schema-hinweis"><strong>Beachte:</strong> {element.text}</div>;
  if (element.typ === "liste") return <ul className="liste istr2-schema-liste">{element.punkte.map((p) => <li key={p}>{p}</li>)}</ul>;
  if (element.typ === "verweis") return <Querverweis element={element} onSchemaOeffnen={onSchemaOeffnen} onModulOeffnen={onModulOeffnen} onFallOeffnen={onFallOeffnen} />;
  if (element.typ === "schritt") return <div className="istr2-pruefschritt"><span className="istr2-pruefschritt__nummer">{element.nummer}</span><div><strong>{element.label}</strong><p>{element.text}</p></div></div>;
  if (element.typ === "merkSchritt") return <div className="istr2-pruefschritt istr2-pruefschritt--merk"><span className="istr2-eis-badge">{element.badge}</span><div><strong>{element.label}</strong><p>{element.text}</p></div></div>;
  if (element.typ === "aavvSchritt") return <div className="istr2-pruefschritt"><span className="istr2-aavv-badge" data-aavv-schritt={element.badge}>{element.badge}</span><div><strong>{element.label}</strong><p>{element.text}</p></div></div>;
  return null;
}

function SchemaBlock({ block, onSchemaOeffnen, onModulOeffnen, onFallOeffnen }) {
  return <section className="istr2-schema-block" style={{ borderLeftColor: farben[block.ton] || farben.neutral }}><header className="istr2-schema-block__head"><h3 style={{ color: farben[block.ton] || farben.neutral }}>{block.titel}</h3></header>{block.inhalt.map((element, i) => <Inhalt key={i} element={element} onSchemaOeffnen={onSchemaOeffnen} onModulOeffnen={onModulOeffnen} onFallOeffnen={onFallOeffnen} />)}</section>;
}

function volltext(schema) {
  const teile = [];
  const sammeln = (x) => {
    if (!x) return;
    if (typeof x === "string") { teile.push(x); return; }
    if (Array.isArray(x)) { x.forEach(sammeln); return; }
    if (typeof x === "object") Object.values(x).forEach(sammeln);
  };
  sammeln(schema);
  return teile.join(" ").toLowerCase();
}

export default function IstrEinheit4Pruefungsschema({ suche = "", onModulOeffnen, onFallOeffnen }) {
  const [aktiv, setAktiv] = useState(istrEinheit4Schemata[0].id);
  const q = suche.trim().toLowerCase();
  const sichtbar = useMemo(() => q ? istrEinheit4Schemata.filter((s) => volltext(s).includes(q)) : istrEinheit4Schemata, [q]);
  const schema = sichtbar.find((s) => s.id === aktiv) || sichtbar[0] || null;
  const schemaOeffnen = (id) => setAktiv(id);
  if (!schema) return <section className="panel"><h2>Kein Treffer in den Schemata der Einheit 4</h2></section>;

  return (
    <section className="istr2-schema-portal" data-istr4-schema={schema.id}>
      <div className="istr2-schema-kopf"><div><span className="kicker">IStR · Einheit 4 · digitale Prüfschemata</span><h2>Prüfungsschemata der Hinzurechnungsbesteuerung</h2></div><span className="zaehler">{istrEinheit4Schemata.length} Schemata</span></div>
      <div className="filter istr2-schema-filter">{sichtbar.map((s, i) => <button key={s.id} aria-pressed={s.id === schema.id} onClick={() => setAktiv(s.id)}>{i + 1}. {s.titel}</button>)}</div>
      <article className="panel istr2-schema-panel">
        <header className="istr2-schema-panel__head"><span className="kicker">Prüfungsschema {istrEinheit4Schemata.findIndex((s) => s.id === schema.id) + 1} von {istrEinheit4Schemata.length}</span><h2>{schema.titel}</h2><p>{schema.fokus}</p></header>
        <div className="istr2-schema-panel__body">{schema.bloecke.map((block, i) => <SchemaBlock key={i} block={block} onSchemaOeffnen={schemaOeffnen} onModulOeffnen={onModulOeffnen} onFallOeffnen={onFallOeffnen} />)}</div>
        <footer className="istr2-schema-panel__footer">Quelle: {schema.quelle}</footer>
      </article>
    </section>
  );
}
