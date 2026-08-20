import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import K1Fachleiste from "./K1Fachleiste";

export default function K1FachleisteEnhancer({ aktiv = "ust", onWechsel }) {
  const [mount, setMount] = useState(null);
  useEffect(() => {
    const campus = document.querySelector(".kst-campus");
    const klausuren = campus?.querySelector(":scope > .klausuren");
    if (!campus || !klausuren) return undefined;
    let host = campus.querySelector(":scope > [data-k1-fach-mount]");
    if (!host) {
      host = document.createElement("div");
      host.dataset.k1FachMount = "true";
      host.className = "k1-fachleiste-mount";
      klausuren.insertAdjacentElement("afterend", host);
    }
    setMount(host);
    return () => { if (host?.isConnected) host.remove(); };
  }, []);
  return mount ? createPortal(<K1Fachleiste aktiv={aktiv} onWechsel={onWechsel} />, mount) : null;
}
