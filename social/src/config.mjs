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
      4: ["pruefungsfrage", "spickzettel", "schema"],
      5: ["minifall", "pruefungsfrage", "rechenweg"],
      6: ["spickzettel", "klausurtechnik"],
      0: ["wochenrueckblick", "pruefungsfrage"],
    },
    /* Lernschleife: Formate/Fächer/Uhrzeiten nach Insights anpassen (state/strategie.json). */
    lernen: env("IG_LERNEN", "true") === "true",
  },

  /* Faktencheck: zweiter, unabhängiger Prüfaufruf je Beitrag/Reel --------- */
  faktencheck: {
    aktiv: env("IG_FAKTENCHECK", "true") === "true",
  },

  /* Schlüsselwort-Nachrichten: „Kommentiere SCHEMA …“ → Karte per Direktnachricht */
  nachrichten: {
    aktiv: env("IG_NACHRICHTEN", "true") === "true",
    schluesselwort: env("IG_SCHLUESSELWORT", "SCHEMA"),
    maxJeLauf: 25,
  },

  /* Weiterverteilen derselben Inhalte – jeder Kanal ist aktiv, sobald seine Secrets da sind */
  verteilen: {
    threads: { token: env("THREADS_ACCESS_TOKEN", ""), nutzerId: env("THREADS_USER_ID", "") },
    youtube: { clientId: env("YT_CLIENT_ID", ""), clientSecret: env("YT_CLIENT_SECRET", ""), refreshToken: env("YT_REFRESH_TOKEN", "") },
    facebook: { seitenId: env("FB_PAGE_ID", ""), token: env("FB_PAGE_TOKEN", "") },
    tiktok: { clientKey: env("TT_CLIENT_KEY", ""), clientSecret: env("TT_CLIENT_SECRET", ""), refreshToken: env("TT_REFRESH_TOKEN", "") },
    linkedin: { token: env("LI_ACCESS_TOKEN", ""), personUrn: env("LI_PERSON_URN", "") },
  },

  /* Wochenbericht per E-Mail (Montag, erster Lauf) ----------------------- */
  bericht: {
    an: env("BERICHT_EMAIL", ""),
    smtp: { host: env("SMTP_HOST", ""), port: Number(env("SMTP_PORT", 587)), user: env("SMTP_USER", ""), pass: env("SMTP_PASS", ""), von: env("SMTP_FROM", env("SMTP_USER", "")) },
    wochentag: 1,
  },

  /* Claude API ----------------------------------------------------------- */
  ki: {
    /* Beiträge und Reels: Opus 5 (präziseste Texte), Denkaufwand „medium“ –
       „high“ kostete in den ersten Läufen das Mehrfache ohne sichtbaren Gewinn.
       Stories, Recherche und Kommentare: Sonnet 5 (ein Fünftel des Preises).
       Sparmodus: IG_KI_MODELL=claude-sonnet-5 setzt alles auf Sonnet. */
    modell: env("IG_KI_MODELL", "claude-opus-5"),
    modellNeben: env("IG_KI_MODELL_NEBEN", env("IG_KI_MODELL", "claude-sonnet-5")),
    effort: env("IG_KI_EFFORT", "medium"),
    maxVersuche: 3,
  },

  /* Instagram Graph API -------------------------------------------------- */
  instagram: {
    /* Pause zwischen zwei Beiträgen beim Auffüllen. Das Stundenlimit der App
       (~200 Aufrufe) erlaubt bei ~20 Aufrufen je Carousel etwa 7 Beiträge/Stunde. */
    auffuellPauseSekunden: Number(process.env.IG_AUFFUELL_PAUSE || 480),
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
    /* Reels sind standardmäßig aktiv; die Stimme kommt von ElevenLabs (Schlüssel)
       oder kostenlos von Piper (im Workflow installiert). Siehe stimme.mjs. */
    aktiv: env("IG_REELS", "true") === "true",
    elevenlabsKey: env("ELEVENLABS_API_KEY", ""),
    stimme: env("ELEVENLABS_VOICE_ID", "kFoQc0CRFQgSvKiqnxaW"),   // eine natürliche deutsche Stimme; beliebig austauschbar
    modell: env("ELEVENLABS_MODEL", "eleven_v3"),
    fps: 30,
    maxSekunden: 90,
    hintergrundmusik: env("IG_REEL_MUSIK", "true") === "true",  // dezentes, synthetisch erzeugtes Klangbett
    /* Wochentage, an denen der 18-Uhr-Beitrag ein Reel ist (0 = So) – täglich. */
    tage: [0, 1, 2, 3, 4, 5, 6],
    /* Kurz-Reels (20–35 s) an allen Tagen, sonntags ein langes Schema-Reel (bis 60 s). */
    langeTage: [0],
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
