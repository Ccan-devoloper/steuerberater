/* ==========================================================================
   Zentrale Einstellungen des Instagram-Bots.
   Alles, was ein Mensch je anfassen müsste, steht hier oder in den Secrets
   (siehe README). Umgebungsvariablen überschreiben die Werte in dieser Datei.
   ========================================================================== */

const env = (name, fallback) => (process.env[name] != null && process.env[name] !== "" ? process.env[name] : fallback);

export const CONFIG = {
  /* Marke -------------------------------------------------------------- */
  marke: {
    /* Bewusst leer: Auf den Kacheln erscheint vorerst kein Name, kein Handle
       und keine Website. Sobald IG_HANDLE gesetzt ist, steht das Handle unten
       links auf jeder Kachel; IG_WEBSITE erscheint dann in den Captions. */
    name: env("IG_MARKE", ""),
    handle: env("IG_HANDLE", ""),
    website: env("IG_WEBSITE", ""),
    stil: env("IG_STIL", "kanzlei"),                       // kanzlei | klausurbogen | campus (siehe stile.mjs)
    /* true: Kanzlei-Stil wechselt Kachel für Kachel zwischen Schwarz und Weiß
       (Schachbrett im Profil). Für andere Stile ohne Wirkung. */
    stilWechsel: env("IG_STIL_WECHSEL", "true") === "true",
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

  /* Reels: kurze Videos aus den Beiträgen mit Sprecherstimme --------------- */
  reel: {
    /* Reels laufen nur, wenn ein ElevenLabs-Schlüssel gesetzt ist (Stimme). */
    aktiv: env("IG_REELS", process.env.ELEVENLABS_API_KEY ? "true" : "false") === "true",
    elevenlabsKey: env("ELEVENLABS_API_KEY", ""),
    stimme: env("ELEVENLABS_VOICE_ID", "kFoQc0CRFQgSvKiqnxaW"),   // eine natürliche deutsche Stimme; beliebig austauschbar
    modell: env("ELEVENLABS_MODEL", "eleven_v3"),
    fps: 30,
    maxSekunden: 75,
    hintergrundmusik: env("IG_REEL_MUSIK", "true") === "true",  // dezentes, synthetisch erzeugtes Klangbett
    /* Wochentage, an denen der 18-Uhr-Beitrag ein Reel ist (0 = So). */
    tage: [2, 4, 6],
  },

  /* Interaktion: Kommentare unter den eigenen Beiträgen beantworten -------- */
  interaktion: {
    aktiv: env("IG_INTERAKTION", "true") === "true",
    maxAntwortenJeLauf: Number(env("IG_MAX_ANTWORTEN", 15)),
    beitraegeZurueck: 12,          // so viele der letzten Beiträge werden auf neue Kommentare geprüft
    maxAlterTage: 14,              // ältere Kommentare bleiben unbeantwortet
  },

  /* Bild-Hosting ----------------------------------------------------------- */
  hosting: {
    /* Instagram braucht öffentlich erreichbare JPEG-URLs. Standard: der Zweig
       "instagram-assets" dieses Repositories über raw.githubusercontent.com. */
    zweig: env("IG_ASSET_BRANCH", "instagram-assets"),
    basisUrl: env("IG_ASSET_BASE_URL", ""),                 // leer = automatisch aus dem git-Remote ableiten
    verzeichnis: env("IG_ASSET_DIR", "assets"),             // lokaler Checkout des Asset-Zweigs
  },

  /* Hashtags: kleiner fester Kern + themenabhängige aus dem Autor. */
  hashtags: {
    kern: ["#steuerberaterexamen", "#steuerberaterprüfung", "#stbexamen", "#steuerberater", "#steuerrecht", "#examensvorbereitung"],
    maxJeBeitrag: 14,
  },
};

export default CONFIG;
