import React, { useEffect, useMemo, useState } from 'react';
import { Block } from './HausaufgabenBloecke';
import { endrissHandschriften } from '../data/endriss-handschriften.js';

const BASE = `${import.meta.env.BASE_URL}endriss/quellen/`;
const FAECHER = { alle:'Alle Fächer', ao:'Abgabenordnung / FGO', ust:'Umsatzsteuer', erbst:'Erbschaftsteuer / Bewertung', kst:'Körperschaftsteuer', est:'Einkommensteuer / Lohnsteuer', gewst:'Gewerbesteuer', istr:'Internationales Steuerrecht', bilanz:'Bilanzierung', persg:'Personengesellschaften', umwstr:'Umwandlungssteuerrecht', quer:'Fachübergreifende Mitschriften / Markierungen' };
const INITIAL = [
  { id:'istr-hinzurechnung', title:'Beispiel Hinzurechnungsbesteuerung', fach:'istr', art:'mitschrift', driveId:'1VAZgmlSjnr_IZqs7Tf8bNxB2vJj8Mc99', importedPages:4 },
  { id:'lst-mitschrift', title:'Lohnsteuervideo · Mitschrift', fach:'est', art:'mitschrift', driveId:'1_pq7S0hPgWxnJb92toX_iS43YfSUd3Li', importedPages:24 },
  { id:'lst-korrektur', title:'Korrektur der letzten Lohnsteuerberechnung', fach:'est', art:'mitschrift', driveId:'1c3sKXOHq10Hc64yEtQ2pWvJiEvoBiYWW', importedPages:1 },
];
const nativeFor = id => endrissHandschriften[id] || [];
const textOf = value => typeof value === 'string' ? value : Array.isArray(value) ? value.map(textOf).join(' ') : value && typeof value === 'object' ? Object.values(value).map(textOf).join(' ') : '';
function useJSON(url) {
  const [state, setState] = useState({ data:null, error:null, loading:true });
  useEffect(() => {
    const controller = new AbortController();
    setState({ data:null, error:null, loading:true });
    fetch(url, { signal:controller.signal }).then(response => { if (!response.ok) throw new Error(`HTTP ${response.status}`); return response.json(); }).then(data => setState({ data, error:null, loading:false })).catch(error => { if (error.name !== 'AbortError') setState({ data:null, error:error.message, loading:false }); });
    return () => controller.abort();
  }, [url]);
  return state;
}
function Seitenansicht({ quelle }) {
  const { data, error, loading } = useJSON(`${BASE}sources/${quelle.id}.json`);
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [imageError, setImageError] = useState(false);
  useEffect(() => { setIndex(0); setZoom(false); }, [quelle.id]);
  useEffect(() => setImageError(false), [index, quelle.id]);
  if (loading) return <p role="status">Originalseiten werden geladen …</p>;
  if (error) return <p role="alert">Die Originalseiten konnten nicht geladen werden ({error}). Die Textübertragung bleibt verfügbar; die Quelldatei kann über den Drive-Link geöffnet werden.</p>;
  if (!Array.isArray(data?.pages) || !data.pages.length) return <p>Keine eingebundenen Originalseiten für diese Quelle.</p>;
  const position = Math.min(index, data.pages.length - 1);
  const page = data.pages[position];
  return <section className="endriss-originale" aria-label="Originalseiten">
    <div className="endriss-seitennavigation">
      <button type="button" disabled={position === 0} onClick={() => setIndex(position - 1)}>← Vorherige</button>
      <label>Seite / Archivblatt <select value={position} onChange={event => setIndex(Number(event.target.value))}>{data.pages.map((p, i) => <option value={i} key={`${p.member || ''}-${p.page}-${i}`}>{i+1} / {data.pages.length} · {p.member ? `${p.member} · ` : ''}PDF-/Bildseite {p.page}</option>)}</select></label>
      <button type="button" disabled={position + 1 === data.pages.length} onClick={() => setIndex(position + 1)}>Nächste →</button>
      <button type="button" aria-pressed={zoom} onClick={() => setZoom(!zoom)}>{zoom ? 'An Breite anpassen' : 'Großansicht'}</button>
    </div>
    <p className="endriss-quellenhinweis">Originalabbildung {position+1} von {data.pages.length}{page.member ? ` · Archivdatei: ${page.member}` : ''} · Quellenseite {page.page}. Farbliche Markierungen und Handschrift bleiben in der Abbildung erhalten.</p>
    <div className={`endriss-bildfenster${zoom ? ' endriss-bildfenster--gross' : ''}`}>
      {imageError ? <p role="alert">Diese Abbildung konnte nicht geladen werden. Bitte die Originalquelle öffnen.</p> : <img src={`${BASE}${page.image}`} width={page.width} height={page.height} alt={`${quelle.title} · ${page.member || 'Original'} · Seite ${page.page}`} onError={() => setImageError(true)} decoding="async" />}
    </div>
    {page.text && <details><summary>Extrahierte Textebene dieser Seite (nicht als geprüfte Transkription gewertet)</summary><p className="endriss-quellenhinweis">Die automatische Textebene kann Handschrift, Markierungen oder Normzitate unvollständig wiedergeben. Maßgeblich ist die Originalabbildung.</p><pre className="endriss-rohtext">{page.text}</pre></details>}
    <details><summary>Herkunft und Integritätsnachweis</summary><dl><dt>Drive-Datei</dt><dd>{data.driveId}</dd><dt>Quelldatei SHA-256</dt><dd>{data.sha256}</dd><dt>Abbildung SHA-256</dt><dd>{page.imageSha256}</dd><dt>Übertragungsstatus</dt><dd>{data.status}</dd></dl></details>
  </section>;
}
function Dokument({ quelle, zurueck }) {
  const native = nativeFor(quelle.id);
  return <article>
    <button type="button" onClick={zurueck}>← Zur Quellenübersicht</button>
    <header className="pagehead"><div><span className="kicker">{FAECHER[quelle.fach] || quelle.fach}</span><h1>{quelle.title}</h1><p>{quelle.importedPages || '—'} eingebundene Originalseiten · {native.length} aufbereitete Textabschnitte</p></div></header>
    <p className="endriss-quellenhinweis">Quellenstand unverändert übernommen. Keine Rechtsstandsprüfung. Eine Originalabbildung ist nicht automatisch eine vollständig transkribierte oder fachlich abgeglichene Lernseite.</p>
    <p><a href={`https://drive.google.com/file/d/${quelle.driveId}/view`} target="_blank" rel="noreferrer">Originalquelle in Google Drive öffnen</a></p>
    {native.length > 0 ? <section aria-label="Übertragene Inhalte">{native.map(kapitel => <details className="panel endriss-kapitel" key={kapitel.id} open><summary>{kapitel.title}</summary><div><p className="endriss-quellenhinweis">Quellenseiten: {kapitel.pages.join(', ')}</p><div className="tags">{(kapitel.normen || []).map(norm => <span className="norm" key={norm}>{norm}</span>)}</div>{kapitel.bloecke.map((element,i) => <Block key={i} element={element} />)}</div></details>)}</section> : <p className="panel">Der vollständige Bildbestand ist unten lesbar. Die native Textübernahme bzw. der Abgleich mit vorhandenen Lernmodulen ist für diese Quelle noch gesondert zu dokumentieren.</p>}
    <details className="panel" open={!native.length}><summary>Originalseiten mit Handschrift und Markierungen anzeigen</summary><Seitenansicht quelle={quelle} /></details>
  </article>;
}
export default function EndrissNachtraege({ fach }) {
  const { data, error, loading } = useJSON(`${BASE}index.json`);
  const [auswahl, setAuswahl] = useState(fach in FAECHER ? fach : 'alle');
  const [suche, setSuche] = useState('');
  const [offen, setOffen] = useState(null);
  const sources = data?.sources || INITIAL;
  const filtered = useMemo(() => {
    const q = suche.trim().toLocaleLowerCase('de');
    return sources.filter(s => (auswahl === 'alle' || s.fach === auswahl || s.fach === 'quer') && (!q || textOf([s.title,s.art,s.searchText,nativeFor(s.id)]).toLocaleLowerCase('de').includes(q)));
  }, [sources, auswahl, suche]);
  if (offen) return <Dokument key={offen.id} quelle={offen} zurueck={() => setOffen(null)} />;
  return <main>
    <div className="pagehead"><div><span className="kicker">Endriss · Quellenbestand und Nachträge</span><h1>Unterlagen-Nachträge</h1><p className="lead">Handschriftliche Lösungen, Mitschriften, Unterrichtseinheiten, Fact Sheets und entpackte Markierungsarchive. Übertragene Texte und Originalseiten sind getrennt ausgewiesen.</p></div></div>
    {loading && <p role="status">Quellenverzeichnis wird geladen …</p>}
    {error && <p role="status">Das vollständige Quellenverzeichnis ist derzeit nicht verfügbar. Bereits enthaltene Textnachträge werden unten angezeigt.</p>}
    {data?.stats && <section className="panel"><strong>{data.stats.sources} Quelldateien · {data.stats.pages} eingebundene Seiten / Archivblätter</strong><p>Diese Zahlen messen den zugänglichen Originalbestand, nicht den Abschluss der nativen Textübernahme. Quelle und Lernmodul werden im Abgleichsprotokoll separat bewertet.</p></section>}
    <section className="endriss-filter" aria-label="Quellen filtern"><label>Fach<select value={auswahl} onChange={event => setAuswahl(event.target.value)}>{Object.entries(FAECHER).map(([id,label]) => <option key={id} value={id}>{label}</option>)}</select></label><label>Quelle oder übertragenen Text suchen<input type="search" value={suche} onChange={event => setSuche(event.target.value)} placeholder="z. B. Fact Sheets, Fahrtenbuch, ErbSt …" /></label></section>
    <p>{filtered.length} von {sources.length} Quellen. Fachübergreifende Unterlagen werden zusätzlich angezeigt.</p>
    <div className="endriss-quellenliste">{filtered.map(s => <button className="panel endriss-quellenkarte" type="button" key={s.id} onClick={() => { setOffen(s); window.scrollTo(0,0); }}><span className="kicker">{FAECHER[s.fach] || s.fach}</span><strong>{s.title}</strong><span>{s.importedPages || '—'} Originalseiten · {nativeFor(s.id).length ? `${nativeFor(s.id).length} Textabschnitte` : 'Originalbestand / Textabgleich offen'}</span></button>)}</div>
    {!filtered.length && <p>Keine Quelle entspricht der Auswahl.</p>}
  </main>;
}
