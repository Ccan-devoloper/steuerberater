/* ==========================================================================
   Zentrale Einstellungen des Instagram-Bots.
   Alles, was ein Mensch je anfassen müsste, steht hier oder in den Secrets
   (siehe README). Umgebungsvariablen überschreiben die Werte in dieser Datei.
   ========================================================================== */

const env = (name, fallback) => (process.env[name] != null && process.env[name] !== "" ? process.env[name] : fallback);

export const CONFIG = {
  /* Marke -------------------------------------------------------------- */
  marke: {
    name: env("IG_MARKE", "Examenscampus"),
    handle: env("IG_HANDLE", "@examenscampus"),          // wird auf jede Kachel gedruckt
    website: env("IG_WEBSITE", "ccan-devoloper.github.io/steuerberater"),
    claim: env("IG_CLAIM", "Steuerberaterexamen. Jeden Tag ein Stück näher."),
    stil: env("IG_STIL", "kanzlei"),                       // kanzlei | klausurbogen | campus (siehe stile.mjs)
    zeitzone: "Europe/Berlin",
  },

  /* Prüfungstermin für den Countdown (schriftliche Prüfung, bundeseinheitlich). */
  examen: {
    schriftlich: env("IG_EXAMEN_DATUM", "2026-10-06"),     // Tag 1 der Klausuren
    ende: env("IG_EXAMEN_ENDE", "2026-10-08"),
  },

  /* Tagesplan ------------------------------------------------------------ */
  plan: {
    beitraegeWerktag: Number(env("IG_BEITRAEGE_WERKTAG", 3)),
    beitraegeWochenende: Number(env("IG_BEITRAEGE_WOCHENENDE", 2)),
    storiesProTag: Number(env("IG_STORIES_PRO_TAG", 9)),   // Instagram-Limit über die API: 100 Veröffentlichungen / 24 h
    /* Lokale Uhrzeiten (Europe/Berlin), zu denen Beiträge erscheinen. */
    beitragsZeiten: ["07:30", "12:30", "18:00"],
    /* Zeitfenster, über das die Stories verteilt werden. */
    storyFenster: ["07:00", "21:30"],
    /* Ein Thema kommt frühestens nach so vielen Tagen erneut dran. */
    themenSperreTage: 60,
    /* Gewichtung nach Examenspriorität (🔴/🟠/🟢) – wie auf der Webseite. */
    prioritaetGewicht: { hoch: 60, mittel: 25, selten: 15 },
    /* Wöchentlicher Formatplan der Beiträge (0 = Sonntag). Ein Format aus
       autor.mjs → FORMATE. "aktuell" recherchiert im Web. */
    formateJeWochentag: {
      1: ["pruefungsfrage", "fehlerfalle", "schema"],
      2: ["pruefungsfrage", "rechenweg", "minifall"],
      3: ["aktuell", "pruefungsfrage", "vergleich"],
      4: ["pruefungsfrage", "fehlerfalle", "schema"],
      5: ["minifall", "pruefungsfrage", "rechenweg"],
      6: ["pruefungsfrage", "klausurtechnik"],
      0: ["wochenrueckblick", "pruefungsfrage"],
    },
  },

  /* Claude API ----------------------------------------------------------- */
  ki: {
    modell: env("IG_KI_MODELL", "claude-opus-5"),
    effort: env("IG_KI_EFFORT", "high"),
    maxVersuche: 3,
  },

  /* Instagram Graph API -------------------------------------------------- */
  instagram: {
    /* "facebook": graph.facebook.com (Instagram-Konto mit Facebook-Seite verbunden, Page-Token ohne Ablauf)
       "instagram": graph.instagram.com (Instagram-API mit Instagram-Login, 60-Tage-Token mit Auto-Refresh) */
    host: env("IG_GRAPH_HOST", "instagram"),
    version: env("IG_GRAPH_VERSION", "v23.0"),
    kontoId: env("IG_ACCOUNT_ID", ""),
    token: env("IG_ACCESS_TOKEN", ""),
    tokenSchluessel: env("IG_TOKEN_KEY", ""),               // verschlüsselt den aufgefrischten Token im Asset-Zweig
    trockenlauf: env("IG_DRY_RUN", "false") === "true",     // true: alles erzeugen, nichts veröffentlichen
    sicherheitsabstandLimit: 10,                            // Reserve unter dem 100er-Tageslimit
  },

  /* Bild-Hosting ----------------------------------------------------------- */
  hosting: {
    /* Instagram braucht öffentlich erreichbare JPEG-URLs. Standard: der Zweig
       "instagram-assets" dieses Repositories über raw.githubusercontent.com. */
    zweig: env("IG_ASSET_BRANCH", "instagram-assets"),
    basisUrl: env("IG_ASSET_BASE_URL", ""),                 // leer = automatisch aus dem git-Remote ableiten
    verzeichnis: env("IG_ASSET_DIR", "assets"),             // lokaler Checkout des Asset-Zweigs
  },

  /* Fotos (optional): Pexels liefert kostenlose Stockfotos wie bei herrjurist.
     Ohne Schlüssel werden Illustrationen (Icons/Typografie) gerendert. */
  fotos: {
    pexelsKey: env("PEXELS_API_KEY", ""),
  },

  /* Hashtags: kleiner fester Kern + themenabhängige aus dem Autor. */
  hashtags: {
    kern: ["#steuerberaterexamen", "#steuerberaterprüfung", "#stbexamen", "#steuerberater", "#steuerrecht", "#examensvorbereitung"],
    maxJeBeitrag: 14,
  },
};

export default CONFIG;
