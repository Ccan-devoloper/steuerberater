/* Gemeinsame DOM-Zustände für die internen Vor-/Zurückverläufe der Campus.
   Aufklappbare Lösungen bleiben beim Verlassen einer Ansicht nicht im DOM.
   Deshalb werden ihre offenen Zustände zusammen mit der Scrollposition in
   einem Verlaufs-Snapshot gespeichert und beim Zurück-/Vorgehen rekonstruiert.
   Erfasst werden native <details> und React-gesteuerte Klapper, die ihren
   Zustand über aria-expanded ausweisen (z. B. die Fallkarten der K3-
   Fallsammlung); Letztere werden beim Wiederherstellen per Klick geöffnet. */

/* Möglichst eindeutiger, zustandsunabhängiger Bezug des umgebenden Artikels:
   Fall-IDs (<code>) vor Kickern vor Überschriften – bloße Falltitel wie
   „Fall 3" wiederholen sich in den Sammlungen. */
function stabilerBezug(element) {
  const container = element.closest("article, section");
  if (!container) return null;
  return (
    container.querySelector("code")?.textContent?.trim()
    || container.querySelector(".kicker")?.textContent?.trim()
    || container.querySelector("h2, h3")?.textContent?.trim()
    || null
  );
}

function detailsKey(details, index) {
  const summary = details.querySelector(":scope > summary")?.textContent?.trim() || "";
  return `${summary}::${stabilerBezug(details) ?? index}`;
}

function klappKey(element, index) {
  return `klapp::${stabilerBezug(element) ?? index}`;
}

export function erfasseSeitenzustand(rootSelector = ".page") {
  const root = document.querySelector(rootSelector);
  const details = root ? Array.from(root.querySelectorAll("details")) : [];
  const klapper = root ? Array.from(root.querySelectorAll("[aria-expanded]")) : [];
  return {
    scrollY: window.scrollY,
    offeneDetails: details
      .map((element, index) => ({ key: detailsKey(element, index), open: element.open }))
      .filter((eintrag) => eintrag.open)
      .map((eintrag) => eintrag.key),
    offeneKlapper: klapper
      .map((element, index) => ({ key: klappKey(element, index), open: element.getAttribute("aria-expanded") === "true" }))
      .filter((eintrag) => eintrag.open)
      .map((eintrag) => eintrag.key),
  };
}

export function stelleSeitenzustandWiederHer(snapshot, rootSelector = ".page") {
  if (!snapshot) {
    window.scrollTo({ top: 0, behavior: "auto" });
    return () => {};
  }

  const offene = new Set(snapshot.offeneDetails || []);
  const offeneKlapper = new Set(snapshot.offeneKlapper || []);
  const zielScroll = Number.isFinite(snapshot.scrollY) ? snapshot.scrollY : 0;
  let beendet = false;
  let observer;
  const timer = [];

  const anwenden = () => {
    if (beendet) return;
    const root = document.querySelector(rootSelector);
    if (!root) return;
    const details = Array.from(root.querySelectorAll("details"));
    details.forEach((element, index) => {
      if (offene.has(detailsKey(element, index)) && !element.open) element.open = true;
    });
    const klapper = Array.from(root.querySelectorAll("[aria-expanded]"));
    klapper.forEach((element, index) => {
      if (element.getAttribute("aria-expanded") === "false" && offeneKlapper.has(klappKey(element, index))) element.click();
    });
  };

  const scrollen = () => {
    if (beendet) return;
    window.scrollTo({ top: zielScroll, behavior: "auto" });
  };

  const starten = () => {
    if (beendet) return;
    anwenden();
    scrollen();
    const root = document.querySelector(rootSelector);
    if (root && typeof MutationObserver !== "undefined") {
      observer = new MutationObserver(() => {
        anwenden();
        requestAnimationFrame(scrollen);
      });
      observer.observe(root, { childList: true, subtree: true });
    }
    [40, 120, 300, 700, 1200].forEach((ms) => {
      timer.push(window.setTimeout(() => {
        anwenden();
        scrollen();
      }, ms));
    });
  };

  const raf = requestAnimationFrame(starten);
  return () => {
    beendet = true;
    cancelAnimationFrame(raf);
    observer?.disconnect();
    timer.forEach((id) => window.clearTimeout(id));
  };
}
