import React, { useEffect, useMemo, useState } from 'react';
import Block from './EndrissQuellenBlock';
import { combineEndrissSources, nativeFor } from '../data/endriss-native-register.js';

const BASE = `${import.meta.env.BASE_URL}endriss/quellen/`;
const FAECHER = { alle:'Alle Fächer', ao:'Abgabenordnung / FGO', ust:'Umsatzsteuer', erbst:'Erbschaftsteuer / Bewertung', kst:'Körperschaftsteuer', est:'Einkommensteuer / Lohnsteuer', gewst:'Gewerbesteuer', istr:'Internationales Steuerrecht', bilanz:'Bilanzierung', persg:'Personengesellschaften', umwstr:'Umwandlungssteuerrecht', quer:'Fachübergreifende Mitschriften / Markierungen' };
const textOf = value => typeof value === 'string' ? value : Array.isArray(value) ? value.map(textOf).join(' ') : value && typeof value === 'object' ? Object.values(value).map(textOf).join(' ') : '';
const sourcePageCount = source => Number.isInteger(source.physicalPages) ? source.physicalPages : null;
const imagePageCount = source => Number.isInteger(source.importedPages) ? source.importedPages : null;
const validImagePath = value => typeof value === 'string' && /^images\/[a-f0-9]{24,64}\.(?:webp|png|jpe?g)$/.test(value);

function useJSON(url) {
  const [state, setState] = useState({ data:null, error:null, loading:true });
  useEffect(() => {
    const controller = new AbortController();
    setState({ data:null, error:null, loading:true });
    fetch(url, { signal:controller.signal })
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(data => {
        if (!controller.signal.aborted) setState({ data, error:null, loading:false });
      })
      .catch(error => {
        if (!controller.signal.aborted) setState({ data:null, error:error.message, loading:false });
      });
    return () => controller.abort();
  }, [url]);
  return state;
}

function Seitenansicht({ quelle }) {
  const { data, error, loading } = useJSON(`${BASE}sources/${encodeURIComponent(quelle.id)}.json`);
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [imageError, setImageError] = useState(false);
  useEffect(() => { setIndex(0); setZoom(false); }, [quelle.id]);
  useEffect(() => setImageError(false), [index, quelle.id]);
  if (loading) return <p role="status">Originalseiten werden geladen …</p>;
  if (error) return <p role="alert">Die Originalseiten konnten nicht geladen werden ({error}). Vorhandene Textübertragungen bleiben verfügbar. Die Quelldatei kann über den Drive-Link geöffnet werden.</p>;
  if (!Array.isArray(data?.pages) || !data.pages.length) return <p>Keine eingebundenen Originalseiten für diese Quelle.</p>;
  const position = Math.min(index, data.pages.length - 1);
  const page = data.pages[position];
  if (!page || !validImagePath(page.image)) return <p role="alert">Die Referenz dieser Originalabbildung ist ungültig. Bitte die Quelldatei in Google Drive öffnen.</p>;
  return <section className="endriss-originale" aria-label="Originalseiten">
    <div className="endriss-seitennavigation">
      <button type="button" disabled={position === 0} onClick={() => setIndex(position - 1)}>← Vorherige</button>
      <label>Seite / Archivblatt <select aria-label="Seite / Archivblatt" value={position} onChange={event => setIndex(Number(event.target.value))}>{data.pages.map((p, i) => <option value={i} key={`${p.member || ''}-${p.page}-${i}`}>{i+1} / {data.pages.length} · {p.member ? `${p.member} · ` : ''}PDF-/Bildseite {p.page}</option>)}</select></label>
      <button type="button" disabled={position + 1 === data.pages.length} onClick={() => setIndex(position + 1)}>Nächste →</button>
      <button type="button" aria-pressed={zoom} onClick={() => setZoom(!zoom)}>{zoom ? 'An Breite anpassen' : 'Großansicht'}</button>
    </div>
    <p className="endriss-quellenhinweis">Originalabbildung {position+1} von {data.pages.length}{page.member ? ` · Archivdatei: ${page.member}` : ''} · Quellenseite {page.page}. Farbliche Markierungen und Handschrift sind Teil der Abbildung.</p>
    <div className={`endriss-bildfenster${zoom ? ' endriss-bildfenster--gross' : ''}`}>
      {imageError ? <p role="alert">Diese Abbildung konnte nicht geladen werden. Bitte die Originalquelle öffnen.</p> : <img src={`${BASE}${page.image}`} width={page.width} height={page.height} alt={`${quelle.title} · ${page.member || 'Original'} · Seite ${page.page}`} onError={() => setImageError(true)} decoding="async" />}
    </div>
    {page.text && <details><summary>Extrahierte Textebene dieser Seite (nicht als geprüfte Transkription gewertet)</summary><p className="endriss-quellenhinweis">Die automatische Textebene kann Handschrift, Markierungen oder Normzitate unvollständig wiedergeben. Maßgeblich ist die Originalabbildung.</p><pre className="endriss-rohtext">{page.text}</pre></details>}
    <details><summary>Herkunft und Integritätsnachweis</summary><dl><dt>Drive-Datei</dt><dd>{data.driveId}</dd><dt>Quelldatei SHA-256</dt><dd>{data.sha256}</dd><dt>Abbildung SHA-256</dt><dd>{page.imageSha256}</dd><dt>Übertragungsstatus</dt><dd>{data.status}</dd></dl></details>
  </section>;
}

function OriginalQuellen({ quelle }) {
  const [sichtbar, setSichtbar] = useState(false);
  // Große Bildbestände werden erst nach ausdrücklichem Öffnen geladen.
  return <details className="panel" onToggle={event => setSichtbar(event.currentTarget.open)}>
    <summary>Originalseiten mit Handschrift und Markierungen laden</summary>
    {sichtbar && <Seitenansicht quelle={quelle} />}
  </details>;
}

export function EndrissDokument({ quelle, zurueck }) {
  const native = nativeFor(quelle.id);
  const sourcePages = sourcePageCount(quelle);
  const imagePages = imagePageCount(quelle);
  const jumpToChapter = event => {
    const chapter = document.getElementById(event.target.value);
    if (!chapter) return;
    chapter.open = true;
    chapter.scrollIntoView({ block: 'start' });
    chapter.querySelector('summary')?.focus({ preventScroll: true });
  };
  return <article data-endriss-source={quelle.id}>
    <button type="button" onClick={zurueck}>← Zur Quellenübersicht</button>
    <header className="pagehead"><div><span className="kicker">{FAECHER[quelle.fach] || quelle.fach}</span><h1>{quelle.title}</h1><p>{sourcePages === null ? 'Quellenumfang siehe Originaldatei' : `${sourcePages} PDF-Seiten in der Quelle`} · {native.length} aufbereitete Textabschnitte{imagePages === null ? ' · Bildbestand nicht bestätigt' : ` · ${imagePages} Abbildungen im Quellenverzeichnis`}</p></div></header>
    <p className="endriss-quellenhinweis">Quellenstand unverändert übernommen. Keine Rechtsstandsprüfung. Eine Originalabbildung ist nicht automatisch eine vollständig transkribierte oder fachlich abgeglichene Lernseite.</p>
    <p><a href={`https://drive.google.com/file/d/${encodeURIComponent(quelle.driveId)}/view`} target="_blank" rel="noreferrer">Originalquelle in Google Drive öffnen</a></p>
    {native.length > 30 && <nav className="endriss-seitennavigation" aria-label="Textabschnitte"><label>Zu einem Textabschnitt springen<select aria-label="Zu einem Textabschnitt springen" defaultValue="" onChange={jumpToChapter} style={{ maxWidth: '100%' }}><option value="" disabled>Abschnitt auswählen</option>{native.map(chapter => <option key={chapter.id} value={chapter.id}>PDF-S. {chapter.pages.join(', ')} · {chapter.title}</option>)}</select></label></nav>}
    {native.length > 0 ? <section aria-label="Übertragene Inhalte">{native.map(kapitel => <details className="panel endriss-kapitel" id={kapitel.id} key={kapitel.id} open><summary>{kapitel.title}</summary><div><p className="endriss-quellenhinweis">Quellenseiten: {kapitel.pages.join(', ')}</p><div className="tags">{(kapitel.normen || []).map(norm => <span className="norm" key={norm}>{norm}</span>)}</div>{kapitel.bloecke.map((element,i) => <Block key={i} element={element} />)}</div></details>)}</section> : <p className="panel">Für diese Quelle ist noch keine native Textübernahme registriert. Ein gegebenenfalls vorhandener Bildbestand lässt sich unten öffnen; der Abgleich mit den Lernmodulen bleibt gesondert zu dokumentieren.</p>}
    <OriginalQuellen key={quelle.id} quelle={quelle} />
  </article>;
}

export default function EndrissNachtraege({ fach }) {
  const { data, error, loading } = useJSON(`${BASE}index.json`);
  const [auswahl, setAuswahl] = useState(fach in FAECHER ? fach : 'alle');
  const [suche, setSuche] = useState('');
  const [offen, setOffen] = useState(null);
  useEffect(() => { setAuswahl(fach in FAECHER ? fach : 'alle'); setOffen(null); }, [fach]);
  // Das Bildverzeichnis ergänzt das native Register, ersetzt es aber niemals.
  const sources = useMemo(() => combineEndrissSources(data?.sources), [data?.sources]);
  const filtered = useMemo(() => {
    const q = suche.trim().toLocaleLowerCase('de');
    return sources.filter(s => (auswahl === 'alle' || s.fach === auswahl || s.fach === 'quer') && (!q || textOf([s.title,s.art,s.searchText,nativeFor(s.id)]).toLocaleLowerCase('de').includes(q)));
  }, [sources, auswahl, suche]);
  if (offen) return <EndrissDokument key={offen.id} quelle={offen} zurueck={() => setOffen(null)} />;
  return <main>
    <div className="pagehead"><div><span className="kicker">Endriss · Quellenbestand und Nachträge</span><h1>Unterlagen-Nachträge</h1><p className="lead">Handschriftliche Lösungen, Mitschriften, Unterrichtseinheiten, Fact Sheets und entpackte Markierungsarchive. Übertragene Texte und Originalseiten sind getrennt ausgewiesen.</p></div></div>
    {loading && <p role="status">Zusätzliches Quellenverzeichnis wird geladen. Registrierte Textnachträge sind bereits verfügbar.</p>}
    {error && <p role="status">Das zusätzliche Quellenverzeichnis ist derzeit nicht verfügbar. Die registrierten Textnachträge werden unabhängig davon angezeigt.</p>}
    {data?.stats && <section className="panel"><strong>{data.stats.sources} Quelldateien · {data.stats.pages} Abbildungen im Quellenverzeichnis</strong><p>Diese Zahlen messen den verzeichneten Bildbestand, nicht den Abschluss der nativen Textübernahme. Quelle und Lernmodul werden im Abgleichsprotokoll separat bewertet.</p></section>}
    <section className="endriss-filter" aria-label="Quellen filtern"><label>Fach<select aria-label="Fach" value={auswahl} onChange={event => setAuswahl(event.target.value)}>{Object.entries(FAECHER).map(([id,label]) => <option key={id} value={id}>{label}</option>)}</select></label><label>Quelle oder übertragenen Text suchen<input type="search" value={suche} onChange={event => setSuche(event.target.value)} placeholder="z. B. Fact Sheets, Fahrtenbuch, ErbSt …" /></label></section>
    <p>{filtered.length} von {sources.length} Quellen. Fachübergreifende Unterlagen werden zusätzlich angezeigt.</p>
    <div className="endriss-quellenliste">{filtered.map(s => <button className="panel endriss-quellenkarte" type="button" key={s.id} data-endriss-source={s.id} onClick={() => { setOffen(s); window.scrollTo(0,0); }}><span className="kicker">{FAECHER[s.fach] || s.fach}</span><strong>{s.title}</strong><span>{sourcePageCount(s) === null ? 'Quellenumfang siehe Originaldatei' : `${sourcePageCount(s)} PDF-Seiten in der Quelle`} · {nativeFor(s.id).length ? `${nativeFor(s.id).length} Textabschnitte` : 'Textabgleich offen'}{imagePageCount(s) === null ? '' : ` · ${imagePageCount(s)} Abbildungen im Verzeichnis`}</span></button>)}</div>
    {!filtered.length && <p>Keine Quelle entspricht der Auswahl.</p>}
  </main>;
}
