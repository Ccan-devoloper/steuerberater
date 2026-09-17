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
    stil: env("IG_STIL", "bunt"),                          // bunt | kanzlei | klausurbogen | campus (siehe stile.mjs)
    /* true: Kanzlei-Stil wechselt Kachel für Kachel zwischen Schwarz und Weiß
       (Schachbrett im Profil). Für andere Stile ohne Wirkung. */
    stilWechsel: env("IG_STIL_WECHSEL", "true") === "true",
    /* Markenkern „sortiert nach Klausurtag“: jede Kachel trägt die feste Farbe
       ihres Prüfungstags (Tag 1 Blau, Tag 2 Orange, Tag 3 Grün) – farbiger
       Balken oben, Akzente, Pille, Fußzeile. Ersetzt den Schwarz/Weiß-Wechsel. */
    farbeJeKlausur: env("IG_FARBE_JE_KLAUSUR", "true") === "true",
    zeitzone: "Europe/Berlin",
  },

  /* Prüfungstermin für den Countdown (schriftliche Prüfung, bundeseinheitlich). */
  examen: {
    schriftlich: env("IG_EXAMEN_DATUM", "2026-10-06"),     // Tag 1 der Klausuren
    ende: env("IG_EXAMEN_ENDE", "2026-10-08"),
  },

  /* Tagesplan ------------------------------------------------------------ */
  plan: {
    beitraegeWerktag: Number(env("IG_BEITRAEGE_WERKTAG", 2)),
    beitraegeWochenende: Number(env("IG_BEITRAEGE_WOCHENENDE", 2)),
    storiesProTag: Number(env("IG_STORIES_PRO_TAG", 9)),   // Instagram-Limit über die API: 100 Veröffentlichungen / 24 h
    /* Lokale Uhrzeiten (Europe/Berlin), zu denen Beiträge erscheinen. */
    beitragsZeiten: ["09:30", "12:30", "19:30"],   // nur ohne Lernschleife (IG_ZEIT_LERNEN=false); sonst zeiten.mjs
    /* Lernende Uhrzeiten: Der Bot probiert Stunden aus und behält, was
       Reichweite bringt – getrennt nach Reel und Karussell und je Wochentag.
       Siehe zeiten.mjs. */
    zeitLernen: env("IG_ZEIT_LERNEN", "true") === "true",
    zeitFenster: env("IG_ZEIT_FENSTER", "7-22"),         // frühestes und spätestes Erscheinen (lokale Stunden)
    /* Die Untergrenze haengt an der Weckkette, nicht am Geschmack: Der erste
       Lauf des Tages liegt um 05:35 UTC, im Sommer also 07:35 Ortszeit. Ein
       Beitrag um 07:30 geht damit um 07:35 raus - fuenf Minuten spaeter, wie
       jeder andere Slot auch. Ein Beitrag um 06:30 wartete dagegen bis 07:35
       und stand 65 Minuten zu spaet im Feed; genau das ist am 14.09. auf dem
       Steuerkanal passiert. Deshalb 7 und nicht 6 - und nicht 8, denn die
       Sieben ist erreichbar und als Sendezeit zu wertvoll, um sie der
       Lernschleife vorzuenthalten.
       Aendert sich der Cron in .github/workflows/instagram.yml, muss dieser
       Wert mitwandern - ein Test haelt beides zusammen. */
    zeitAbstandStunden: Number(env("IG_ZEIT_ABSTAND", "4")),
    zeitErkundung: Number(env("IG_ZEIT_ERKUNDUNG", "0.35")),   // 0 = nur ausnutzen, größer = mehr ausprobieren
    zeitReifeTage: Number(env("IG_ZEIT_REIFE_TAGE", "2")),     // so alt muss ein Beitrag sein, damit seine Zahlen zählen
    zeitMindestMessungen: Number(env("IG_ZEIT_MESSUNGEN", "8")),   // so viele Beiträge müssen überhaupt Wirkung zeigen, sonst wird nur ausprobiert
    zeitMindestWirkung: Number(env("IG_ZEIT_WIRKUNG", "1")),       // mittlere Punkte je Beitrag, ab denen die Zahlen die Uhrzeit bestimmen
    /* Zeitfenster, über das die Stories verteilt werden. */
    storyFenster: ["07:00", "21:30"],
    /* Ein Thema kommt frühestens nach so vielen Tagen erneut dran. */
    themenSperreTage: 60,
    /* Gewichtung nach Examenspriorität (🔴/🟠/🟢) – wie auf der Webseite. */
    prioritaetGewicht: { hoch: 60, mittel: 25, selten: 15 },
    /* Wöchentlicher Formatplan der Beiträge (0 = Sonntag). Ein Format aus
       autor.mjs → FORMATE. "aktuell" recherchiert im Web. */
    /* Zwei Beiträge je Tag (Tagesbudget 0,25 €); an Reel-Tagen ersetzt das
       Reel den zweiten Beitrag. */
    formateJeWochentag: {
      1: ["pruefungsfrage", "schema"],
      2: ["rechenweg", "minifall"],
      3: ["aktuell", "pruefungsfrage"],
      4: ["spickzettel", "schema"],
      5: ["minifall", "pruefungsfrage"],
      6: ["spickzettel", "klausurtechnik"],
      0: ["wochenrueckblick", "pruefungsfrage"],
    },
    /* Endspurt (letzte 30 Tage vor der Prüfung): Klausurtechnik, Zeitmanagement,
       Dauerbrenner-Wiederholung – Reichweite und Weiterleitungen statt neuer Stoff. */
    formateEndspurt: {
      1: ["klausurtechnik", "pruefungsfrage"],
      2: ["pruefungsfrage", "rechenweg"],
      3: ["aktuell", "klausurtechnik"],
      4: ["spickzettel", "schema"],
      5: ["klausurtechnik", "minifall"],
      6: ["spickzettel", "klausurtechnik"],
      0: ["wochenrueckblick", "pruefungsfrage"],
    },
    endspurtTage: 30,
    /* Lernschleife: Formate/Fächer/Uhrzeiten nach Insights anpassen (state/strategie.json). */
    lernen: env("IG_LERNEN", "true") === "true",
  },

  /* Faktencheck: zweiter, unabhängiger Prüfaufruf je Beitrag/Reel --------- */
  faktencheck: {
    aktiv: env("IG_FAKTENCHECK", "true") === "true",
    /* Streng: Fällt der Faktencheck technisch aus, erscheint der Beitrag
       nicht – ein ungeprüfter Steuerrechtsbeitrag ist teurer als ein
       fehlender. IG_FAKTENCHECK_STRIKT=false lässt ungeprüfte Beiträge durch. */
    strikt: env("IG_FAKTENCHECK_STRIKT", "true") === "true",
    /* Zweitmeinung: Fehlerbefunde des Prüfers beurteilt das stärkere Modell,
       bevor ein Entwurf verworfen wird. IG_FAKTENCHECK_ZWEITMEINUNG=false
       schaltet sie ab; IG_KI_MODELL_ZWEITMEINUNG wählt das Modell. */
    zweitmeinung: env("IG_FAKTENCHECK_ZWEITMEINUNG", "true") === "true",
    zweitmeinungModell: env("IG_KI_MODELL_ZWEITMEINUNG", ""),
  },

  /* Schlüsselwort-Nachrichten: „Kommentiere SCHEMA …“ → Karte per Direktnachricht */
  nachrichten: {
    /* Aus: Beiträge fordern nicht mehr zum Kommentieren auf, um eine Karte per
       Nachricht zu bekommen. Das kommt später über einen Newsletter. */
    aktiv: env("IG_NACHRICHTEN", "false") === "true",
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
    /* Sparbetrieb: Sonnet 5 für alle Texte (Beiträge, Reels, Stories,
       Recherche, Kommentare), Haiku 4.5 für den Faktencheck. Opus 5 wäre
       präziser, kostet aber das Fünffache – IG_KI_MODELL=claude-opus-5 schaltet um.
       Harter Tagesdeckel in USD (0,27 $ ≈ 0,25 €): Ist er erreicht, warten alle
       weiteren Claude-Aufrufe bis zum nächsten Tag (state/kosten.json, „tage“). */
    modell: env("IG_KI_MODELL", "claude-sonnet-5"),
    modellNeben: env("IG_KI_MODELL_NEBEN", env("IG_KI_MODELL", "claude-sonnet-5")),
    modellPruefung: env("IG_KI_MODELL_PRUEFUNG", "claude-haiku-4-5-20251001"),
    /* Der strenge Prüfer für Beiträge, in denen gerechnet wird. Am 14.09. ist
       auf dem Schwesterkanal eine falsche Erbquote durchgelaufen: Haiku prüfte,
       was Sonnet geschrieben hatte, und sah die vertauschte Quote nicht.
       Rechenfolien sind selten (1 von 13 Beiträgen in fünf Tagen), deshalb
       kostet die Eskalation im Schnitt fast nichts – am Tag, an dem sie
       greift, etwa 0,009 $ mehr. */
    modellPruefungStreng: env("IG_KI_MODELL_PRUEFUNG_STRENG", "claude-sonnet-5"),
    effort: env("IG_KI_EFFORT", "low"),   // „low“: etwa halbe Kosten je Entwurf, Faktencheck fängt Fehler ab
    /* Messversuch ab 18.09. (Beschluss des Betreibers): Beiträge und Reels
       schreiben mit „medium", Stories bleiben bei „low". In der Nacht zum
       17.09. brauchte ein Beitrag mit „low" drei Prüfrunden und ein
       Neuschreiben (0,19 $). Ein Entwurf mit „medium" kostet mehr je
       Aufruf, könnte aber Prüfrunden sparen - ob das unterm Strich billiger
       ist, hat nie jemand gemessen. Verglichen wird nach einer Woche über
       state/kosten.json: autor + faktencheck je Tag gegen die Woche davor.
       IG_KI_EFFORT_BEITRAG=low stellt zurück. */
    effortBeitrag: env("IG_KI_EFFORT_BEITRAG", "medium"),
    /* Reels getrennt: In der Nacht zum 18.09. kostete das Reel-Skript mit
       "medium" auf beiden Kanälen mehr als die Obergrenze je Beitrag (0,116 $
       und 0,143 $, 7.800 bzw. 10.100 Ausgabe-Token für 140 Wörter) und wurde
       zurückgestellt. Mit "low" lag es am Vortag bei 0,070 $. */
    effortReel: env("IG_KI_EFFORT_REEL", "low"),
    rechercheSuchen: Number(env("IG_KI_RECHERCHE_SUCHEN", "4")),   // Websuchen je Recherche (je 0,01 $ plus Ergebnis-Tokens)
    maxVersuche: Number(env("IG_KI_VERSUCHE", "2")),
    /* Tagesdeckel. Von 0,27 auf 0,32 $ angehoben, nachdem am 15.09. gemessen
       war, was der strenge Prüfer wirklich kostet: Die Faktenchecks lagen an
       dem Tag bei 0,0528 $ gegen 0,0174 $ am 14.09., als noch überwiegend das
       günstige Modell prüfte - also rund 0,035 $ mehr. Genau dieser Betrag
       fehlte danach für die gezeichneten Motive: 0,2529 $ gingen in Texte und
       Prüfung, für "bild" blieb 0,0000 $, und die Beiträge trugen Icons.
       Beides zusammen geht in 0,27 $ nicht auf. Entschieden wurde für die
       strenge Prüfung ALLER Formate einschließlich der Reels - lieber fünf
       Cent mehr am Tag als ein fachlicher Fehler im Feed. */
    tagesBudgetUsd: Number(env("IG_TAGESBUDGET_USD", "0.32")),
    /* Rücklage für das Reel des Tages: Es soll täglich erscheinen, darf also
       nicht daran scheitern, dass Beiträge und Recherche das Budget vorher
       aufbrauchen. */
    reelReserveUsd: Number(env("IG_REEL_RESERVE_USD", "0.11")),
    /* Obergrenze je Beitrag. Ein normaler Beitrag kostet 0.06-0.085 $; wer
       0.10 $ reisst, hat sich in Korrekturrunden verfangen und wird
       zurueckgestellt, statt den Tag aufzuessen (17.09.: ein Beitrag 0.19 $,
       danach fielen b2 und alle neun Stories aus). */
    maxJeBeitragUsd: Number(env("IG_MAX_JE_BEITRAG_USD", "0.10")),
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
    /* App-ID und App-Geheimnis, nur für die Token-Prüfung. debug_token ist der
       einzige Weg, die Berechtigungen eines Tokens ABZULESEN statt sie zu
       erraten - und der Aufruf verlangt ein App-Token aus beidem. Über
       graph.instagram.com antwortet debug_token mit "Application does not have
       permission for this action"; über graph.facebook.com klappt er.
       Der Bot braucht beides für den Betrieb nicht. Fehlen sie, sagt die
       Prüfung das und verlässt sich auf den Kantentest. */
    appId: env("IG_APP_ID", ""),
    appGeheim: env("IG_APP_SECRET", ""),
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
    stimme: env("ELEVENLABS_VOICE_ID", ""),   // fest eingestellte Stimme; leer = der Bot sucht und lernt selbst
    /* Flash statt v3: halber Verbrauch je Zeichen. Das kostenlose Monatsguthaben
       (10.000 Kredite) trägt damit rund 33 Reels – also den ganzen Monat mit
       einer Stimme, statt Mitte des Monats auf Piper zu wechseln. */
    modell: env("ELEVENLABS_MODEL", "eleven_flash_v2_5"),
    /* Stimmenwahl: Der Bot sucht in der ElevenLabs-Bibliothek deutsche
       Sprecher, probiert drei davon über die Reels aus und behält die, bei der
       die Zahlen stimmen (stimmen.mjs). ELEVENLABS_VOICE_ID + IG_STIMME_LERNEN=false
       stellt stattdessen eine feste Stimme ein. */
    /* Deutsch geht vor Natuerlichkeit: Eine englische Stimme liest „§ 370 AO"
       als „Paragraf 370 ej-ou" und betont deutsche Woerter falsch. Steht keine
       deutschsprachige Stimme zur Verfuegung - im kostenlosen ElevenLabs-Abo
       ist das der Regelfall -, spricht die deutsche Offline-Stimme Piper.
       IG_STIMME_NUR_DEUTSCH=false hebt die Regel auf. */
    nurDeutscheStimme: env("IG_STIMME_NUR_DEUTSCH", "true") === "true",
    /* Zwei Reel-Layouts im Wechsel: „klassisch" ist die bisherige Karte mit
       Animation und Untertiteln, „erklaer" die Buehne mit grosser Figur und
       Stichwort-Plaketten (erklaervideo.mjs). „wechsel" laesst sie sich
       taeglich abloesen, damit die Zahlen sagen koennen, welches traegt. */
    layout: env("IG_REEL_LAYOUT", "wechsel"),
    erklaerMarken: Number(env("IG_REEL_MARKEN", "2")),        // Plaketten je Szene
    erklaerBilder: Number(env("IG_REEL_BILDER", "4")),        // hoechstens so viele Motive je Reel neu zeichnen
    stimmeLernen: env("IG_STIMME_LERNEN", "true") === "true",
    stimmeAnzahl: Number(env("IG_STIMME_ANZAHL", "3")),          // so viele Kandidaten laufen gegeneinander
    stimmeErkundung: Number(env("IG_STIMME_ERKUNDUNG", "0.4")),  // 0 = nur ausnutzen, größer = mehr ausprobieren
    stimmeMessungen: Number(env("IG_STIMME_MESSUNGEN", "6")),    // so viele gemessene Reels je Stimme, bevor entschieden wird
    stimmeVorsprung: Number(env("IG_STIMME_VORSPRUNG", "0.25")), // so viel muss die Beste vor der Zweiten liegen
    stimmeProbeText: env("IG_STIMME_PROBE", "Achtzig Prozent scheitern an dieser Frage. Nach Paragraf 7 Absatz 1 Satz 1 EStG beginnt die Abschreibung im Monat der Anschaffung – nicht im Januar. Merk dir das für Tag 2."),
    fps: 30,
    /* Obergrenze, damit ein entgleistes Skript nicht ein Zehn-Minuten-Video
       baut - nicht die Ziellänge. Die steht in dauerFenster. */
    maxSekunden: 150,
    /* Ziellängen, unter denen die Lernschleife wählt. Ein Reel muss nicht kurz
       sein: Wenn ein Rechenweg 80 Sekunden braucht, bekommt er sie. Welches
       Fenster tatsächlich am besten läuft, misst insights.mjs an den
       veröffentlichten Reels; bis genug Messwerte da sind, rotieren sie. */
    dauerFenster: [[30, 45], [45, 60], [60, 80], [80, 105]],
    /* So viele gemessene Reels braucht ein Fenster, bevor es gegen die anderen
       antritt - darunter wird weiter reihum ausprobiert. */
    dauerMessungen: Number(env("IG_REEL_DAUER_MESSUNGEN", "3")),
    hintergrundmusik: env("IG_REEL_MUSIK", "false") === "true",  // Klangbett aus: der Akkord legte sich stoerend unter die Stimme
    /* Split-Screen: das obere Drittel zeigt eine ruhige Animation, täglich
       rotierend. IG_REEL_ANIMATION=labyrinth|marble|ring legt eine fest. */
    animationen: ["labyrinth", "marble", "ring"],
    animation: env("IG_REEL_ANIMATION", ""),
    /* Hintergrund-Clips (state/hintergrund/*.mp4, 1080×1920, 30 fps, stumm):
       liegt mindestens einer vor, läuft er vollflächig im Hintergrund, der
       Inhalt liegt als Karten darüber; die Clips rotieren täglich.
       IG_REEL_HINTERGRUND=animation erzwingt die Canvas-Animationen. */
    hintergrund: env("IG_REEL_HINTERGRUND", "clip"),
    /* Wochentage, an denen der letzte Beitrag ein Reel ist (0 = So). Standard:
       jeden Tag. Reels tragen die Reichweite, deshalb erscheint täglich eines;
       der zweite Beitrag des Tages ist dann statt eines Carousels ein Reel. */
    tage: (env("IG_REEL_TAGE", "0,1,2,3,4,5,6")).split(",").map(Number),
    /* true: Das Reel kommt zu den Beiträgen dazu – der Tag hat dann drei
       Feed-Veröffentlichungen. false: Es ersetzt den letzten Beitrag, der Tag
       hat zwei.

       Hier false: Der Kanal liegt mit rund 0,20 $ am Tag näher am Deckel von
       0,27 $, und drei Feed-Beiträge konkurrieren um dieselbe Zielgruppe –
       das Reel, das die Reichweite trägt, verlöre am meisten. */
    zusaetzlich: env("IG_REEL_ZUSAETZLICH", "false") === "true",
    /* Kurz-Reels (20–35 s) an allen Tagen, sonntags ein langes Schema-Reel (bis 60 s). */
    langeTage: [0],
  },

  /* Bilder auf der Titelfolie (Pexels) ------------------------------------
     Der Autor liefert je Beitrag eine Szene; bilder.mjs sucht danach. Ohne
     Schlüssel oder ohne Treffer bleibt es bei der Icon-Bühne. */
  bilder: {
    aktiv: env("IG_BILDER", "true") === "true",
    key: env("PEXELS_API_KEY", ""),
    /* Motiv freistellen (rembg) statt als Rechteck aufzukleben – so läuft das
       Bild aus der Kachel heraus statt darauf zu liegen. */
    freistellen: env("IG_BILDER_FREISTELLEN", "true") === "true",
    /* Wenn das Freistellen misslingt: kein Bild (false) oder das Foto doch als
       Karte (true). Standard ist kein Bild – ein halb ausgeschnittenes oder
       aufgeklebtes Motiv fällt sofort auf. */
    rechteckErlaubt: env("IG_BILDER_RECHTECK", "false") === "true",
    /* Motive erzeugen statt suchen. Sobald OPENAI_API_KEY gesetzt ist, wird
       das Motiv zum Thema gezeichnet - freigestellt geliefert, ohne
       Bildnachweis und ohne rembg. Stockfotos passten oft nicht zum Text
       (Atemmasken bei Betrugsstrafbarkeit), und das Freistellen misslang
       regelmässig. IG_BILD_KI=false schaltet zurück auf Pexels. */
    ki: {
      key: env("OPENAI_API_KEY", ""),
      aktiv: env("IG_BILD_KI", "true") === "true" && Boolean(env("OPENAI_API_KEY", "")),
      modell: env("IG_BILD_KI_MODELL", "gpt-image-1-mini"),
      guete: env("IG_BILD_KI_GUETE", "low"),          // low ~0,005 $, medium ~0,04 $ je Bild
      /* Aussehen der Titelbilder: "foto" = fotorealistisch (seit 18.09., auf
         Wunsch des Betreibers - die Cover sollen echt wirken), "flach" =
         Flat-Vector wie bisher. Die Figuren des Erklärvideos bleiben flach;
         das ist dort Teil des Layouts. */
      look: env("IG_BILD_LOOK", "foto"),
      groesse: env("IG_BILD_KI_GROESSE", "1024x1024"),
      /* Preis je Bild für den Tagesdeckel. Die Schnittstelle meldet ihn nicht
         zurück, deshalb wird er hier gesetzt - bewusst über dem Listenpreis. */
      preisUsd: Number(env("IG_BILD_KI_PREIS_USD", "0.01")),
      zeitlimitMs: Number(env("IG_BILD_KI_ZEITLIMIT_MS", "120000")),
      /* Gezeichnete Motive werden aufgehoben und spaeter wiederverwendet -
         aber nur mit deutlichem Abstand. Zweimal dasselbe Bild in einer Woche
         faellt auf, zweimal im Quartal bemerkt niemand. */
      wiederTage: Number(env("IG_MOTIV_WIEDER_TAGE", "90")),
      /* Wie genau die Szene treffen muss, damit ein altes Motiv wieder
         hervorgeholt wird. 0,85 heisst: praktisch dieselbe Szene. */
      aehnlich: Number(env("IG_MOTIV_AEHNLICH", "0.85")),
      /* Der Deckel muss groesser sein als das, was in der Ruhefrist plus einem
         Themenumlauf anfaellt - sonst wirft das Archiv ein Motiv genau dann
         hinaus, wenn es wieder verwendbar waere. Bei zwei bis drei Bildern am
         Tag reichen 1500 fuer rund anderthalb Jahre; als WebP sind das etwa
         45 MB. */
      archivMax: Number(env("IG_MOTIV_ARCHIV_MAX", "1500")),
    },
  },

  /* Interaktion: Kommentare unter den eigenen Beiträgen beantworten -------- */
  /* Postfach: Direktnachrichten beantworten. Braucht am Token die Berechtigung
     instagram_business_manage_messages. Fehlt sie, liefert der Endpunkt nichts
     und der Lauf meldet das - er bricht nicht ab. */
  /* Antworten auf Kommentare und Direktnachrichten: eigener Topf, eigenes
     Modell. Entscheidung vom 15.09.: Die ersten beiden Antworten kamen vom
     günstigen Modell und trugen je ein ungenaues Normzitat - inhaltlich
     vertretbar, im Detail falsch. Bei Rechts- und Steuerfragen muss die
     Antwort beim ersten Mal sitzen; ein Nachbessern gibt es öffentlich nicht.
     Deshalb das starke Modell, und damit es den Beiträgen nichts wegnimmt,
     ein eigener Tagesdeckel, der zum Inhaltsdeckel HINZUKOMMT. Ist er
     erreicht, warten die Antworten bis morgen - die Beiträge nicht. */
  antworten: {
    modell: env("IG_KI_MODELL_ANTWORTEN", "claude-opus-5"),
    aufwand: env("IG_ANTWORT_AUFWAND", "high"),                 // Denktiefe: low | medium | high
    tagesBudgetUsd: Number(env("IG_ANTWORT_BUDGET_USD", "0.25")),
  },

  postfach: {
    aktiv: env("IG_POSTFACH", "true") === "true",
    unterhaltungen: Number(env("IG_POSTFACH_UNTERHALTUNGEN", 25)),  // so viele Unterhaltungen werden je Lauf gelesen
    maxJeLauf: Number(env("IG_POSTFACH_MAX", 10)),                  // so viele Antworten höchstens je Lauf
    maxZeichen: Number(env("IG_POSTFACH_ZEICHEN", 500)),
  },

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
    /* Entdecker-Hashtags: Long-Tail-Tags, die täglich zu zweit rotieren – so
       wird jeder Tag ausprobiert und die Lernschleife sieht, welche neue
       Follower bringen. */
    entdecker: ["#stbexamen2026", "#steuerberaterprüfung2026", "#steuerberateranwärter", "#steuerfachwirt", "#steuerfachangestellte", "#bilanzbuchhalter", "#steuerrechtlernen", "#lernenmitsystem", "#klausurvorbereitung", "#examenszeit", "#steuernlernen", "#steuerberatung", "#buchhaltung", "#bilanzierung", "#umsatzsteuer", "#abgabenordnung", "#einkommensteuer", "#körperschaftsteuer", "#erbschaftsteuer", "#lerngruppe", "#studygram", "#lernmotivation", "#prüfungsvorbereitung", "#steuerwissen"],
    maxJeBeitrag: 14,
  },
};

export default CONFIG;
