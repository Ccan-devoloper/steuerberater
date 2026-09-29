import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import './endriss-nachtraege.css';
const Nachtraege = lazy(() => import('./EndrissNachtraege'));

export default function EndrissRahmen({ fach, children }) {
  const [offen, setOffen] = useState(false);
  const trigger = useRef(null);
  const close = useRef(null);
  const scroll = useRef(0);
  useEffect(() => {
    if (!offen) return undefined;
    close.current?.focus();
    const escape = event => { if (event.key === 'Escape') setOffen(false); };
    window.addEventListener('keydown', escape);
    return () => {
      window.removeEventListener('keydown', escape);
      requestAnimationFrame(() => { window.scrollTo(0, scroll.current); trigger.current?.focus({ preventScroll: true }); });
    };
  }, [offen]);
  return <>
    <div hidden={offen}>{children}</div>
    {!offen && <button ref={trigger} type="button" className="endriss-start" onClick={() => { scroll.current = window.scrollY; setOffen(true); window.scrollTo(0, 0); }}>Unterlagen-Nachträge</button>}
    {offen && <div className="endriss-arbeitsraum">
      <header className="endriss-kopf"><button ref={close} type="button" onClick={() => setOffen(false)}>← Zurück zum Campus</button><strong>Examenscampus · Unterlagen-Nachträge</strong></header>
      <Suspense fallback={<p role="status">Quellenansicht wird geladen …</p>}><Nachtraege fach={fach} /></Suspense>
    </div>}
  </>;
}
