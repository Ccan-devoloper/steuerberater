# Offene Quellen – was noch fehlt und warum

Diese Liste führt mit, was aus dem freigegebenen Drive-Ordner „Unterlagen StB Endriss"
noch **nicht** im Campus steht. Sie unterscheidet zwei Gründe, weil das für das
weitere Vorgehen den Unterschied macht:

- **Technisch blockiert** – die Datei liegt vor, lässt sich über den Drive-Connector
  aber nicht (vollständig) lesen. Diese Teile müssten direkt in den Chat gesendet werden.
- **Noch nicht bearbeitet** – die Quelle ist zugänglich, nur noch nicht an der Reihe.

Stand: siehe Git-Historie dieser Datei.

---

## A. Technisch blockiert – bitte in den Chat senden

**Neuer Stand (September 2026):** Viele Zeilen dieser Tabelle waren nur blockiert, weil die
**Textausgabe** des Connectors bei größeren PDF-Dateien abbricht. Inzwischen wird jede Datei
über den **Download** geholt und lokal mit pypdf ausgewertet; das liefert den vollständigen
Text. Für AO Teil I ist das geprüft: 145 Seiten statt bisher 30. Die Zeilen **ESt-Kurzskript I,
KSt-Kurz-Skript (Breier), AO Teil I bis V (inzwischen alle erledigt), Ertragsteuern 2011–2015 und Bilanzierung 2011–2015**
werden deshalb nachgeholt (siehe Arbeitsliste in Abschnitt B) und hier gestrichen, sobald sie
eingepflegt sind. **Nicht** lösbar bleiben reine Scans ohne Textebene und Handschriften, weil in
dieser Umgebung keine Texterkennung zur Verfügung steht, sowie Lösungen, die im Ordner fehlen.


| Quelle | Was genau fehlt | Grund |
|---|---|---|
| **ESt-Kurzskript I** (Engelberth, Stand 07/2026), Drive-ID `1DdIbwtK4vfHU4w15uayCsg_VdaD7Afft` | Seiten 80–162 (auch der zweite Download-Versuch im September 2026 scheiterte: die Drive-Verbindung bricht ab): Tz. 3.6 und Kapitel 4 der gewerblichen Einkünfte sowie die Teile **Betriebsaufspaltung, Gewerblicher Grundstückshandel, Betriebsbeendigung, Einnahmenüberschussrechnung, Einkünfte aus selbständiger Arbeit, Einkünfte aus Kapitalvermögen** | Der Connector gibt das PDF nur bis Seite 79 aus; der Download der 6,6-MB-Datei lässt die Verbindung abbrechen (dreimal versucht). Kein zweites Exemplar im Ordner (Volltextsuche geprüft). |
| **GewSt-Fallsammlung** (Nöthen) | Der gesamte **Lösungsteil** | Im freigegebenen Ordner liegt nur der Aufgabenteil. Die vier Übungsfälle stehen im Campus ohne Lösung, ausdrücklich gekennzeichnet. |
| **KSt-Übungsfälle Teil 1 und 2** (Nöthen) | Der gesamte **Lösungsteil** zu allen fünf Fällen | Beide Aufgaben-PDFs enden nach der Aufgabenstellung; im Ordner liegt keine Musterlösung. Die Fälle stehen im Campus ohne Lösung, ausdrücklich gekennzeichnet. |
| **KSt-Kurz-Skript** (Breier, Mai 2026), Drive-ID `1y8gIRktpHe5VRBSIX8mTTVmQTypNQYY0` | **Erledigt (September 2026): vollständig heruntergeladen und eingepflegt – alle elf Teile (bis Seite 196, einschließlich Teil 11 „Erwerb und Veräußerung eigener Anteile“) stehen im Datensatz.** | Der Connector gibt das PDF nur bis etwa Seite 90 aus. Die Teile 1 bis 3 und der Anfang von Teil 4 sind lesbar und eingepflegt; ab der Bruchstelle fehlt auch der Rest von Teil 4. |
| **„KStG, 1. bis 7. Einheit"** (Nöthen), Ordner `1bqhD4ayOUTo8A7WBUXgce3otxy5L7YrN` | Alle sieben Dateien vollständig | **Reine Scans ohne Textebene.** Der Connector liefert nur Seitenplatzhalter („Page 1", „Page 2", …), keinen Text. Über den Connector grundsätzlich nicht erfassbar. |
| **ErbStR, 4. und 5. Einheit** (Mitschriften), Ordner `1aIlk9ojzoC9TDklJ3m1QtPZZO41h4Zd6` | Alle vier Dateien vollständig: „ErbStR, 4. Einheit_Teil 1“ (`185fNc_fJW2CCUVfeUD6MaDCQ5EHFAK1O`, 114 Seiten, 14,4 MB), „ErbStR. 4. Einheit_Teil 2“ (`1DTUXD5w5NHs2U4V9tvC1MlbHkdlbu1wV`, 42,5 MB), „ErbStR, 5. Einheit_Teil 1“ (`1ObPFd8dnae_W8WIj1wr6rj8CDFnUMQ7o`, 35,8 MB) und „ErbSt, 5 Einheit - Teil 2“ (`1BbwheGqCbRBMzeNstEcWXlXmAXLWcH6k`, 17,0 MB) | **Reine Scans ohne Textebene.** Der Connector liefert für alle vier nur Seitenplatzhalter („Page 1“, „Page 2“, …), keinen Text. Der Download scheitert am 10-MB-Limit des Connectors (für die kleinste der vier Dateien geprüft: „File too large for download, over limit of 10 MB“). Die Einheiten 1 bis 3 desselben Ordners stehen dagegen vollständig im Campus. |
| **Bilanz Fact Sheets** (Horst, Mai 2026), Drive-ID `1abE85eIrTg5SBxpehBBBdfZTa2vSAVEH` (19,6 MB, im Bilanz-Ordner des zweiten Baums `19RxwMWawVvHEJ975UFmIvdSNcaCQSgJ-`) | Die vollständige Datei | **Reiner Scan ohne Textebene.** Der Connector gibt nur den Wasserzeichentext zurück, einmal je Seite; dasselbe Bild wie bei den PersG Fact Sheets desselben Verfassers. |
| **PersG Fact Sheets** (Horst, April 2025), Drive-ID `179WkR77_ZOKvZAR4fEICG_IM7nXMYL-5` | Die vollständigen 24 Seiten | **Reiner Scan ohne Textebene.** Der Connector gibt aus dem 17,4-MB-PDF nur den Wasserzeichentext zurück, sonst nichts. Der Download bricht am 10-MB-Limit des Connectors ab; eine lokale Texterkennung steht in dieser Umgebung nicht zur Verfügung. |
| **Ertragsteuern · Steuerberaterprüfungen 2011–2015** (März 2026), Drive-ID `1QwClx7BL_66vssgQcF4xq7CIzknvfIcy` | **Erledigt (September 2026): vollständig heruntergeladen und eingepflegt – die Prüfungen 2013, 2014 und 2015 stehen vollständig im Datensatz.** Die Prüfungen **2013, 2014 und 2015** einschließlich ihrer Lösungsvorschläge | Der Connector gibt aus dem 2,3-MB-PDF rund 168.000 Zeichen aus: die Prüfung 2011 vollständig, die Prüfung 2012 vollständig (einschließlich der DBA-Anlagen) und den Anfang der Prüfung 2013 (Klausur E 18) bis Seite 7 von 11, wo er abbricht. |
| **Bilanzierung nach Handels- und Steuerrecht · Steuerberaterprüfungen 2011–2015** (Februar 2026), Drive-ID `1IXnBjpvc8EiQuhxGNAX6EC3jtSh8wOWZ` | **Erledigt (September 2026): vollständig heruntergeladen und eingepflegt – Prüfung 2012 Teil III und die Prüfungen 2013, 2014 und 2015 stehen vollständig im Datensatz.** Aus der Prüfung 2012 die **Lösung des Teils III** (XYZ GmbH & Co. KG, 33 Punkte) – der Sachverhalt dazu liegt vollständig vor – sowie die Prüfungen **2013, 2014 und 2015** vollständig (je drei Aufgabenteile mit 100 Punkten) | Der Connector gibt aus dem 3,3-MB-PDF rund 133.000 Zeichen aus: die Prüfung 2011 vollständig (Sachverhalte und Lösungen zu allen drei Teilen), die Prüfung 2012 mit allen drei Sachverhalten sowie den Lösungen zu Teil I und Teil II. Der Text endet unmittelbar hinter „Teil II gesamt 33 Punkte“; die Lösung zu Teil III und die gesamten Prüfungen 2013–2015 sind nicht mehr enthalten. |
| **Steuerberaterprüfung 2022/2023 – amtliche Prüfungsaufgaben**, Drive-ID `1OIu1EKJ2j5uSv3egnNYjfCqKqDTWiw2h` (Dateititel „2026) (10).pdf“) | Die **Musterlösungen zu sämtlichen Teilen** – die Datei enthält ausschließlich Aufgabentexte. Aus dieser Datei sind damit sämtliche Aufgabentexte aller drei Prüfungstage eingepflegt; es fehlen nur die Lösungen, die die Quelle nicht enthält | Der Connector gibt das 0,5-MB-PDF vollständig aus (rund 82.000 Zeichen, 34 Seiten). Es sind die reinen Prüfungsaufgaben aller drei Prüfungstage ohne jede Lösung. Der Bilanz-Prüfungstag (vier Teile, 100 Wertungspunkte), der vollständige Ertragsteuer-Prüfungstag (ESt 25 + 17 + 18, GewSt 8, KSt 28 + 4 = 100 Wertungspunkte) und der vollständige Verfahrensrechtstag (AO/FGO Monika Beer 35, USt Inge Irlbacher 35, ErbSt Erbfall Schüssel) stehen in den Reitern „Prüfungsklausuren im Original“. Eigene Feststellung: Ab dem Ertragsteuerteil trägt die Datei den Kopf „STEUERBERATERPRÜFUNG 2021/2022“, obwohl das Deckblatt 2022/2023 nennt. |
| **Steuerberaterprüfung 2021/2022 – amtliche Prüfungsaufgaben**, Drive-ID `1fD7j6QKx7MX2zt9gdlKZW7MFQe1UYtC3` | Die **Musterlösungen zu sämtlichen Teilen** – auch diese Datei enthält ausschließlich Aufgabentexte. Der Bilanz-Prüfungstag (Klaus Becker, Mutter-GmbH, Müller-OHG), der vollständige Ertragsteuer-Prüfungstag (ESt mit den Sachverhalten Anne T., Thomas S. und Hanno P.; GewSt MAX-OHG; KSt TIP-AG) und der vollständige Verfahrensrechtstag (AO/FGO Dr. Bruno Bayer; USt Bartel, BB-Baustoffhandels-GmbH und Prager; ErbSt Erbfall Muhr) stehen in den Reitern „Prüfungsklausuren im Original“ des Bilanzen-, des ESt-, des GewSt-, des KSt-, des AO-, des USt- und des ErbSt-Campus. Aus dieser Datei sind damit sämtliche Aufgabentexte aller drei Prüfungstage eingepflegt; es fehlen nur die Lösungen, die die Quelle nicht enthält | Der Connector gibt das 0,7-MB-PDF vollständig aus (rund 90.000 Zeichen, 34 Seiten). |
| **Ordner „Mitschriften_Markierungen“**, Drive-ID `1YkeROsff1n89Qj4T8qs4DMYZ8lxpMSKE` | Sämtliche Inhalte: rund 40 handschriftliche Mitschriften („Notiz …“, „Mitschrift …“, je 2–10 MB) und 13 ZIP-Archive („Markierung Wiegmann/Mirbach …“) | **Gesichtet und technisch nicht verwertbar.** Die Mitschriften sind Fotos bzw. Scans von Handschrift. Der Connector führt zwar eine Texterkennung durch, deren Ergebnis ist aber unbrauchbar: Paragraphenzeichen werden durchgehend als Ziffern gelesen („Genie Wohnsitz 9870“ für § 8 AO, „9970“ für § 9 AO, „92111“ für § 2 Abs. 1 EStG, „4350 1“ für § 35a EStG), Wörter werden verstümmelt („Steuerpflikt“, „Splittenglauf“, „Witwensplitting“ neben „Zahlung dasKto“). Eine wortlautgetreue Übernahme ist daraus nicht möglich; eine Rekonstruktion wäre Erfindung. Die ZIP-Archive kann der Connector überhaupt nicht lesen – das Format gehört nicht zu den unterstützten Typen. |
| **Lohnsteuer – zwei der drei Dateien**, Ordner `1O6alBKmrJsgeQaOyWOTCv6mlDD5zZ8Gv` | „Korrektur allerletzte Berechnung, Rundungsfehler.pdf“ (`1c3sKXOHq10Hc64yEtQ2pWvJiEvoBiYWW`, 0,15 MB) und „Lohnsteuervideo Mitschrift.pdf“ (`1_pq7S0hPgWxnJb92toX_iS43YfSUd3Li`, 3,7 MB, 24 Seiten) vollständig | **Reine Scans ohne Textebene.** Der Connector gibt aus beiden Dateien ausschließlich den Wasserzeichentext zurück – bei der Mitschrift 24 Mal hintereinander, für jede Seite einmal –, sonst nichts. Die dritte Datei des Ordners, das Prüfungsschema Arbeitslohn von Markus Nöthen, ist sauber lesbar und vollständig eingepflegt. |
| **FGO-Blatt**, Drive-ID `1g6C6ngjpPqb2vYjuwyTux3wVSpEC2cjj` (Dateititel „FGO (2).pdf“, 1,8 MB, im Ordner `1WC267jtZkPbcIlRCuVL4hbcr3gWhgmC5`) | Die vollständige Datei | **Gesichtet und technisch nicht verwertbar.** Eine handschriftliche Übersicht zu den Sachurteilsvoraussetzungen der FGO („Zulässigkeits-Fähnchenkette“). Die Texterkennung liefert dieselbe Art unbrauchbarer Ausgabe wie bei den übrigen Handschriften: Paragraphenzeichen werden zu Ziffernketten („33760“ für § 33 FGO, „863 FGO“ für § 63 FGO, „5521FGO“, „SUUFGO“), Wörter verschmelzen („StpflselbstohneBeratermöge“, „Ausm Sprunklage“). Inhaltlich erkennbar ist die Prüfungsreihenfolge Finanzrechtsweg, Zuständigkeit, Beteiligten- und Prozessfähigkeit, Klagegegner, Klageart, Vorverfahren, Klagebefugnis, Klagefrist, Form und Inhalt – dieselbe Kette, die der AO-Teil IV (Jacobs) im Campus vollständig behandelt. |
| **PersG-Folien (Horst)**, Drive-IDs `1hJix2yF-IIb7laLgKG0sRog24c_POqZX` (10,2 MB) und `1UKzwT0Pu7slpR8XpzKQN_d0waycqELOn` (10,2 MB), beide im Ordner `1rt20pjZFTIMajnSpkdFCf-nt_5Mjx4GX` | Beide Dateien vollständig | **Gesichtet und technisch nicht verwertbar.** Zwei Fassungen derselben Foliensammlung von Alexander Horst. Die zweite gibt nur den Wasserzeichentext aus (16 Seiten), die erste eine Texterkennung, die für eine wortlautgetreue Übernahme unbrauchbar ist: Normzitate verstümmeln durchgehend („160 (2) S. 1 ESEDV“ für § 60 Abs. 2 S. 1 EStDV, „121 HGB“, „$15 (2) Nr. 2“ neben „$15 (1) Nr. 2“ für dieselbe Norm, „3¢ EStG“), dazwischen stehen Layout-Reste („п“, „\[VS\]“, „175\]“). Erkennbar ist das zweistufige Gewinnermittlungsschema der Mitunternehmerschaft – das im Campus aus dem PersG-Kurzskript und dem Skript (Melzer) vollständig und im Wortlaut vorliegt. |
| **Lösungsblätter zur Fallsammlung ErbSt/BewR (Mirbach)**, Drive-IDs `1jwrR7DwPn38ZYexSXejnz8IJRN_DIC8s` („Loesung Fall 9 und 14.pdf“, 0,9 MB) und `1b60K4kuKkryqC1l0DTLEQ_XJsJhDothY` („ErbSt Loesung Abw Fall 28.pdf“, 2,6 MB), beide im Ordner `1W4oQOLi9DBC9XVFcijIp1xTDlDZd9F4K` | Beide Dateien vollständig – es sind die **Lösungen zu den Hausaufgabenfällen 9 und 14 sowie zur Abwandlung 2 des Falls 28** der neu eingepflegten Fallsammlung | **Gesichtet und technisch nicht verwertbar.** Handschriftliche Lösungswege; die Texterkennung liefert dieselbe Art unbrauchbarer Ausgabe wie bei den übrigen Handschriften: Normzitate werden zu Ziffernketten („34101 E“, „61215.1 E“, „8176GW2B“, „1936375.1Nr B“), Rechenschritte verschmelzen („1850times120350euro“, „702451 6 times0963205 1“). Erkennbar sind die Struktur der Lösung zu Fall 9 (Vorspann, Steuerklasse, Antrag nach § 6 Abs. 2 ErbStG, Freibetrag, Steuer) und die drei Erbbaurechtsvarianten zu Fall 28, für eine wortlautgetreue Übernahme reicht das nicht. Diese beiden Blätter wären besonders wertvoll, weil die Fallsammlung selbst zu keinem ihrer 31 Fälle eine Lösung enthält. |
| **Bilanz-Fallsammlung laufender Unterricht, Teil 3** (Nöthen), Drive-ID `1BAkRtcO0A3-2YPaUaUfTBLoT3vHRBKhk` | Möglicherweise weitere Sachverhalte hinter dem Sachverhalt 2 | **Unklarer Umfang.** Der Connector gibt aus der 0,25-MB-Datei den allgemeinen Sachverhalt, die Aufgabenstellung, die Hinweise sowie die Sachverhalte 1 (Prüferbilanz) und 2 (Grundstück Reuterstraße und Verkauf Holzgasse) aus und endet dort an einer Seitengrenze. Die Teile 1, 2 und 4 desselben Bestandes geben dagegen jeweils alle Fälle aus. Ob Teil 3 tatsächlich nur zwei Sachverhalte enthält oder ob die Ausgabe abbricht, lässt sich nicht feststellen. Der Campus weist den Stand an Ort und Stelle aus. |
| **Beispiel Hinzurechnungsbesteuerung**, Drive-ID `1VAZgmlSjnr_IZqs7Tf8bNxB2vJj8Mc99` (0,6 MB, im IStR-Ordner `1Xk3jTEYrhvom7Sc1V9cNeO690aowem2X`) | Die vollständige Datei | **Reiner Scan ohne Textebene.** Der Connector gibt vier Zeilen zurück – für jede Seite einmal den Wasserzeichentext –, sonst nichts. Die übrigen sechs Dateien desselben Ordners sind sauber lesbar und eingepflegt. |
| **Notfallbuch**, Drive-ID `1i0ZTLaEYMK2uMqkvu_50s8zV-hpOnQOy` (im Ordner „Abgabenordnung“) | Die vollständige Datei | **Gesichtet und technisch nicht verwertbar.** Ebenfalls eine Handschrift; die Texterkennung liefert dieselbe Art unbrauchbarer Ausgabe („v 370 515347370AEAO GIN1“, „5370 574 Klage 3391N1.1“). Inhaltlich handelt es sich erkennbar um eine Stichwortsammlung zur AO und FGO mit Paragraphenverweisen. |

Sobald diese Teile vorliegen, werden sie nach demselben Verfahren eingepflegt wie der
Rest: wortlautgetreu, mit Kennzeichnung jeder Stelle, an der die Quelle selbst nicht
aufgeht, und mit einem Prüfskript.

---

## B. Noch nicht bearbeitet

### Arbeitsliste nach dem Dublettencheck des zweiten Baums (Reihenfolge der Abarbeitung)

**Zurückgestellt (September 2026, auf Wunsch des Nutzers):** Der Drive-Zugang meldet seit
vielen Runden „session expired“. Alles, was nur über Drive erreichbar ist – die offenen Reste
unter Punkt 1 und die neuen Bestände unter Punkt 2 außer dem USt-Skript (Moecker), das lokal
vorliegt –, wird ausgelassen und am Ende zusammen mit Abschnitt A zur Nachlieferung genannt.

1. **Bisher blockierte Reste nachholen** (jetzt über den Download lesbar): ~~AO Teil I~~ (erledigt,
   vollständig), ~~AO Teil II~~ (erledigt, vollständig), ~~AO Teil III~~
   (erledigt, vollständig), ~~AO Teil IV~~ (erledigt, vollständig), ~~AO Teil V~~
   (erledigt, vollständig) – **das AO-Skript ist damit vollständig**, ESt-Kurzskript I (Seiten 80–162;
   Download scheitert weiterhin), ~~KSt-Kurz-Skript Breier (ab Seite 90)~~ (erledigt, alle elf Teile),
   ~~Ertragsteuer-Prüfungen 2013 bis 2015~~ (erledigt), ~~Bilanz-Prüfungen 2012 Teil III (Lösung)
   und 2013 bis 2015~~ (erledigt).
2. **Neue Bestände aus dem zweiten Baum**, bisher an keiner Stelle im Campus:
   - Umwandlungssteuerrecht (Hamacher, 21. Auflage, Januar 2026): ~~Teil I Allgemeines und
     Umwandlungsarten (`1ZARZWjR7VDA5_groMb6XgdVxZGoxe0ms`)~~ (erledigt, September 2026), ~~Teil II Einbringung in eine
     Kapitalgesellschaft §§ 20 – 23, 25 UmwStG (`13Co6d7aV8oO1c_hymjVKY0WNOb6LfTyn`)~~ (erledigt, September 2026), Teil III
     §§ 11 – 13 UmwStG (`1e0kAdsm1mV0EX8i4JiN3PQv8GqOsK17g`), Teil IV § 15 UmwStG
     (`1AgUXSDoN7x76GyC5aGblDWZ7FMuHZ0ZT`), Teil V Umwandlung einer Kapitalgesellschaft auf eine
     Personengesellschaft §§ 3 – 10, 18 UmwStG (`1mklaRDw0X-0fMF2U_ehmwT3jgYML5vE2`);
   - UmwSt-Kurzskript (Breier, April 2025, `17xQUV4RT0WWL8X6l5UWjPn8O-6Tw1CJt`, 5,3 MB);
   - IStR-Skript inkl. Folien (Grümmer-Holzrichter, März 2026, `1J6nyscsq9ATpbQ7biy_5NA5CZXPLqjQ5`, 4,9 MB);
   - Bilanz-Skript Termin 1 (Melzer, April 2026, `19z9p0I0WgRUbRMbQfYAMaYzKUJNUsIx3`) und die
     Übersichten dazu (`1NtebyaKqbhJBZ_nwF4a55baSVBttWHzM`); die Fallsammlung Melzer samt Lösungen
     V2 (`1VkIpVDdg9th9-O4DMVr2xExhm4dOabt-`, `1Dtvc8BNrLLDRZWMXQc_Lg0aLHAQ32QdW`) gegen die
     90 Fälle der bestehenden Bilanz-Fallsammlung abgleichen, dazu das Änderungsprotokoll
     Bilanzunterlagen 04/26 (`1zYukX6s21OUD9w1tYb6TGBCqf4L2dDNN`);
   - ErbSt-Skript „Erbschaftsteuer 2025-2026 Teil 1“ (Schäfer, Mai 2025,
     `1FmGNS4rzz47vCytIoFQzUZbcVQ_5PuFz`) mit Lösung (`1Efj3NzIrOacwIbzJz_RwYsFBrcLkTcTL`) – der
     Teil 2 (Verschonung) steht bereits vollständig im Campus; dazu prüfen, ob die Übungsfälle
     „Leibrentenverpflichtung“ (`1tUFPpsjhK8NAGnuXDXjBPeFDDCiSUvU8`, Lösung
     `1Wtg88rxCaffJgK1tcYkGvnVpfsimC2Rj`) und „Jahreswertbesteuerung § 23 ErbStG“
     (`1cqNN23uPB_aIuLzSJHrfDLOy1CRdeJkP`) mit den eingepflegten Hausaufgaben übereinstimmen;
   - USt-Skript (Moecker), Blöcke 1 bis 13 – Blöcke 1 bis 7 vollständig, Block 8 Teil I und Teil II vollständig, Block 9 vollständig, Block 10 vollständig, Block 11 vollständig, Block 12 vollständig, Block 13 vollständig – alle 13 Blöcke vollständig, siehe Protokoll.


### Klausur 2 – Einkommensteuer
- vollständig eingepflegt (bis auf den oben genannten, technisch blockierten Teil des
  Kurzskripts I)

### Übungsklausuren (Rechtsstand 2025) – 12 Klausuren, je mit Lösung
Eingepflegt: Einkommensteuer 1, Ertragsteuern 0 und Ertragsteuern 2 (beide mit vollständigem
körperschaftsteuerlichem Aufgabenteil), Körperschaftsteuer (im KSt-Campus) und die
beiden Teilklausuren der Klausur AO/USt (im USt- bzw. AO-Campus), die eigenständige
Klausur Abgabenordnung/FGO (im AO-Campus) sowie Bilanzierung 1 bis 4 (im Bilanzen-Campus
der Klausur 3) sowie die Klausuren AO/USt/ErbSt/BewR 1 und AO/USt/ErbSt/BewR 2, die im
Drive unter den Namen „BewR 1" und „BewR 2" liegen und jeweils alle drei Fachteile
enthalten (AO-, USt- und ErbSt-Teil jeweils im zugehörigen Campus der Klausur 1).

**Damit sind alle 12 Übungsklausuren eingepflegt.** Offen ist hier nichts mehr.

### Klausur 2 – Körperschaftsteuer
- KSt-Kurz-Skript (Breier): vollständig eingepflegt (alle elf Teile, September 2026).
- Eingepflegt sind bereits: KSt-Übungsfälle Teil 1 und 2 (ohne Lösung, s. o.), die fünf
  Prüfungsschemata (Nöthen), das Kurz-Skript im lesbaren Umfang und die Übungsklausur
  Körperschaftsteuer (Breier/Wenger) mit allen vier Sachverhalten und Musterlösung.

### Klausur 3 – Personengesellschaften
- PersG-Skript (Melzer): **vollständig eingepflegt** (Reiter „Skript (Melzer)") – Teil I
  (Grundlagen), Teil II (§ 6 Abs. 5, § 6 Abs. 3, § 6b EStG), Teil III (Gesellschafter-
  wechsel/Ausscheiden), Teil IV (Realteilung, GmbH & Co. KG) und Teil V
  (Umwandlungssteuerrecht, § 24 UmwStG). Weitere Teile enthält der Drive-Ordner nicht.
- Fallsammlung PersG – Lösungen (Melzer): **eingepflegt.** Der Lösungsteil lag im Ordner
  „Personengesellschaften" unter dem nichtssagenden Namen „2026) (9).pdf" und war beim
  ersten Durchgang übersehen worden; er steht jetzt unter jedem Fall der Fallsammlung.
- Fact Sheets (Horst): **technisch blockiert**, siehe Abschnitt A. Das PDF ist ein reiner
  Scan ohne Textebene und zugleich zu groß für den Download über den Connector.
- Damit ist der Drive-Ordner „Personengesellschaften“ bis auf die Fact Sheets abgearbeitet.

### Klausur 1 – Abgabenordnung
- AO-Skript (Jacobs), **Teil I ist vollständig eingepflegt** (Reiter „Skript (Jacobs)“,
  Abschnitte 1 bis 4), zusammen mit dem Hinweisblatt zur Viertagesfrist. Die früher blockierten
  Seiten (Abschnitt 3 ab Seite 31 und der ganze Abschnitt 4) sind über den Datei-Download
  nachgeholt.
- AO-Skript (Jacobs), **Teil II ist vollständig eingepflegt**: Abschnitt 5 (§§ 164, 165, 168
  AO) und Abschnitt 6 (Festsetzungsverjährung) bis zur letzten Seite; die früher blockierten
  Seiten 43 bis 74 (§ 171 Abs. 9, 10, 10a, 14 und 15 AO sowie § 181 Abs. 5 AO) sind über den
  Datei-Download nachgeholt. Dazu der Stoffverteilungsplan mit dem Inhaltsverzeichnis aller
  fünfzehn Abschnitte.
- AO-Skript (Jacobs), **Teil III (Abschnitt 7 – Korrektur von Verwaltungsakten) ist
  vollständig**: Die Seiten 80 bis 118 hinter der früheren Abbruchstelle des Connectors
  (§ 175 Abs. 1 Satz 1 Nr. 2 AO, §§ 175a, 175b, 176, 177, 130 und 131 AO) sind über den
  Datei-Download nachgeholt; die Zeile in Abschnitt A ist gestrichen.
- **AO Teil IV** („2025) (7).pdf“, Drive-ID `177nsS17x67L6LjIOFiQ_t06vrtn4e9oA`): Dieser
  Band ist **vollständig ausgewertet**, soweit der Connector ihn ausgibt – Abschnitt 8
  ganz, Abschnitt 9 inzwischen ebenfalls ganz (Seiten 18 bis 47 über den Datei-Download
  nachgeholt) und Abschnitt 10 (vorläufiger Rechtsschutz) als eigener Teil. **Teil IV ist
  vollständig**; die Zeile in Abschnitt A ist gestrichen.
- **AO Teil VI** („2025) (8).pdf“, Drive-ID `16BvLDqXslOh1SUuI8TBFtDFrg19JjlRc`): Aus
  Abschnitt 14 (Steuerstraf- und Bußgeldrecht) sind der Teil I (Allgemeine Grundlagen) und
  der Teil II einschließlich des Kompensationsverbots und der beiden Übungsfälle
  eingepflegt, einschließlich der Steuerhinterziehung bei Personengesellschaften, der
  Zwei-Säulen-Theorie, des subjektiven Tatbestands und der Berichtigungspflicht nach
  § 153 AO einschließlich des Erbfalls; ebenso der Teil III mit dem zusammenfassenden
  Übungsfall zur Gaststätten- und Großküchen GmbH; aus dem Teil IV sind der Überblick zur
  Selbstanzeige nach § 371 AO, die Berichtigungserklärung und der Zehnjahreszeitraum samt
  Beispielen sowie die Sperrgründe des § 371 Abs. 2 AO einschließlich des Zuschlags nach
  § 398a AO eingepflegt, ebenso die Teile V und VI (leichtfertige Steuerverkürzung als
  Ordnungswidrigkeit, Ablaufhemmung des § 171 Abs. 9 AO). **Der Abschnitt 14 ist damit
  vollständig.** Der **Abschnitt 15** (Vollstreckungsrecht, §§ 249 bis 327 AO) ist ebenfalls
  vollständig eingepflegt: Teil I (rechtliche Grundlagen, Überblick über die gesetzlichen
  Regelungen), Teil II (allgemeine Vollstreckungsvoraussetzungen von § 249 Abs. 1 AO bis zur
  Mahnung nach § 259 AO, einschließlich Übungsfall zur Steueranmeldung), Teil III
  (Einstellung und Beschränkung der Vollstreckung nach § 257 AO), Teil IV (Vollstreckung
  wegen Geldforderungen in bewegliche Sachen, §§ 281ff AO, einschließlich der Vollstreckung
  gegen Ehegatten), Teil V (Einwendungen gegen Vollstreckungsmaßnahmen und Rechtsschutz),
  die Teile VI und VII mit beiden Übungsfällen und ihren Lösungshinweisen sowie die Anlagen
  1 und 2 (Auszüge aus BGB und ZPO). **Damit ist der gesamte Band AO Teil VI abgearbeitet;
  aus dieser Datei ist nichts mehr offen.**
- **AO Teil V** („B-S25-AO-Teil V-(Jacobs)-0425 (1).pdf“, Drive-ID
  `1WHbfjRVc8q5zyXiDhXXVptQ7izxyfanN`) enthält laut Deckblatt die **Abschnitte 11 bis 13**.
  Aus dem Abschnitt 11 (Steuererhebungsverfahren) sind der Teil I (allgemeine Grundlagen
  einschließlich des Beispiels Rumpel-/Grobi-GmbH) und der Teil II (Abrechnungsbescheid
  nach § 218 Abs. 2 AO mit den Fällen Baghira und Leo Lügner sowie § 218 Abs. 3 AO)
  eingepflegt, aus dem Teil III (Erlöschen von Ansprüchen nach § 47 AO) die Übersicht und
  die Aufrechnung nach § 226 AO, § 406 BGB bei abgetretenen Forderungen und die
  Zahlungsverjährung der §§ 228 bis 232 AO sowie die Teile IV und V (Säumniszuschläge nach
  § 240 AO, sämtliche Zinstatbestände der §§ 233 bis 239 AO) eingepflegt. **Der Abschnitt 11
  ist damit vollständig.** Aus dem Abschnitt 12 (Außenprüfung) sind die Teile I (Grundlagen
  und Zulässigkeit nach § 193 AO) , II (Umfang der Außenprüfung), III
  (Prüfungsanordnung einschließlich beider Übungsfälle), IV (Durchführung der Prüfung) und V
  (DAC-7-Neuregelungen) eingepflegt; über den Datei-Download sind inzwischen auch die
  Seiten 28 bis 38 nachgeholt (§ 200a AO, Teile VI bis VIII) – **Abschnitt 12 ist
  vollständig**. Aus dem **Abschnitt 13** (Haftungsrecht) ist inzwischen ebenfalls vollständig eingepflegt (84 Seiten); die Zeile in Abschnitt A ist gestrichen. **Damit ist der Band AO Teil V vollständig.**
- **AO-Short-Skript** (Jacobs), Drive-ID `1fuGSbReWCvFo0ClbWr8G7WaRfYeiRySC`: Der Dateiname
  nennt April 2025 („0425“), das Deckblatt der Datei selbst dagegen **Mai 2025**; es handelt
  sich um dieselbe 49-seitige Arbeitsunterlage, die im Campus bereits als verdichtete
  Overlay-Fassung vorliegt. Ein Abgleich der zitierten Vorschriften zeigte jedoch, dass die
  Overlay-Fassung 48 in der Quelle genannte Normen nicht enthält. Die Datei wird deshalb
  zusätzlich **wortlautgetreu** erfasst (Reiter „Short-Skript (Jacobs)“,
  `src/data/k1-ao-short-skript-jacobs.js`). Eingepflegt ist der Abschnitt 1 des Teils I
  (Klausuraufbau, Klausurtechnik, Hilfsmittel, fundamentale Aufbauregel, Gutachtenstil)
  sowie der **vollständige Abschnitt 2** (Wirksamkeit von Bescheiden, Verhältnis
  Feststellungs-/Steuerbescheide, Festsetzungsverjährung), der Abschnitt 3 (Einspruch) und der
  Abschnitt 4 (Korrekturvorschriften) sowie der **Teil II** mit den Schwerpunkten aller neun
  AO-Klausuren von 2016 bis 2024. **Die Datei ist damit vollständig erfasst und aus dieser
  Quelle steht nichts mehr offen.**
- FGO
- Notfallbuch

### Klausur 1 – Erbschaft- und Schenkungsteuer
- **ErbSt-Fallsammlung** (Schäfer), Ordner `1C96T8I4WDh2wYVnoGyUgHUJVwnPsqr_X`: **begonnen.**
  Eingepflegt sind vier Übungsfälle – **Beckmann**
  (Anteil an einer Kapitalgesellschaft im vereinfachten Ertragswertverfahren),
  **Haßlinghaus** (Einzelunternehmen mit Verschonung nach §§ 13a, 13b ErbStG),
  **Fietze** (drei Grundbesitzwertermittlungen und die Erbschaftsteuer für zwei
  Erwerber) und **Pack** (Substanz- und Ertragswertvergleich mit vollständiger
  Steuerberechnung) – jeweils mit Aufgabe und Lösung im Wortlaut
  (Reiter „Fallsammlung“, `src/data/k1-erbst-fallsammlung.js`). Der Ordner enthält zehn
  Dateien; aus der Fallsammlung selbst steht damit nichts mehr offen.
- **Bewertungsrecht Teil 3** (Schäfer, Stand Oktober 2025): Die Datei „2025) (6).pdf“
  (`1Nf9VVWSkEUHlhWm_y-mQ9XQaAbIKLWWa`) erwies sich als vollständig lesbares
  Unterrichtsskript „Bewertung des Betriebsvermögens; gesonderte Feststellungen“
  (35 Seiten, 80.000 Zeichen, vom Connector vollständig ausgegeben). **Vollständig
  eingepflegt** – der Teil I mit allen sieben Tz. (Allgemeines, Begriff und Umfang,
  Bewertungsverfahren, Substanzwert, vereinfachtes Ertragswertverfahren einschließlich
  Kapitalisierungsfaktor, Personengesellschaften und Kapitalgesellschaften) und der
  Teil II mit den gesonderten Feststellungen nach §§ 151 bis 156 BewG – Reiter
  „Bewertungsrecht (Schäfer)“, `src/data/k1-erbst-bewertung-teil3.js`.
  Drei Musterlösungen liegen im Skript selbst nur als Grafik ohne Textebene vor, ein
  viertes Beispiel lässt das Skript ohne Ergebnis. Alle vier sind aus der zugehörigen
  Lösungsdatei „B-S25-ErbSt-Bewertung 2025-2026 Teil 3-Loesung“
  (`142ZtQKFSpnSZrH6eGLoXh9ZahUJ787mk`) ergänzt, die der Connector vollständig ausgibt.
  **Aus beiden Dateien steht nichts mehr offen.**
- **Bewertungsrecht Teil 1** (Schäfer, Stand Mai 2025), Drive-ID
  `1bKS8GZwHDb2Z4gjFc9WFqJcqTSovSLnY` im Ordner `1dYXMcr-i-IEmXuXurAfIlzo_xgtHvzDG`:
  **vollständig eingepflegt.** Die Abschnitte I (Einführung), II (Bewertungsgegenstand), III (Bedingungen
  und Befristungen) und IV (Bewertungsmaßstab gemeiner Wert) stehen im Reiter
  „Bewertungsrecht (Schäfer)“, `src/data/k1-erbst-bewertung-teil1.js`; aus dem Abschnitt V
  ist der Abschnitt V vollständig eingepflegt. **Die Datei ist damit vollständig erfasst.**
  Die Beispiele des Skripts stehen bis auf eines ohne Lösung; die Musterlösungen liegen in
  der Datei „2025) (6).pdf“ (`1CJ_D5IjjGN9qDrXKFjKORa1YDDjTMlxL`) desselben Ordners und sind
  inzwischen **vollständig ergänzt**. Aus beiden Dateien steht nichts mehr offen. Der Connector gibt die Datei vollständig aus (50.000 Zeichen). Im selben
  Ordner liegt unter dem Namen „2025) (6).pdf“ (`1CJ_D5IjjGN9qDrXKFjKORa1YDDjTMlxL`)
  vermutlich der zugehörige Lösungsteil – noch nicht geöffnet.
- **Bewertungsrecht Teil 2** (Schäfer, Stand August 2025), Ordner
  `1yhRfkjP6VYO0V8a01BY2vqXbOnXilI97`: **begonnen.** Das Skript „Bewertung des
  Grundvermögens“ liegt unter dem Namen „2025) (6).pdf“
  (`1nYoKz99ROMSt8IWAde-zaBHrcmjX-zL5`, 88.000 Zeichen, vom Connector vollständig
  ausgegeben), die Lösungsdatei als
  „B-S25-ErbSt-Bewertung 2025-2026 Teil 2-Loesung-(Schaefer)-0825.pdf“
  (`1KG701MsTDFm91Fp8BBV_Nc3sRUDdN5y0`). Das Skript steht im Reiter
  „Bewertungsrecht (Schäfer)“, `src/data/k1-erbst-bewertung-teil2.js`. Eingepflegt sind
  **alle zwölf Tz.**: Begriff und Umfang, Feststellung der Grundbesitzwerte, unbebaute und
  bebaute Grundstücke mit der Wahl des Bewertungsverfahrens, Vergleichswertverfahren, das
  vollständige Ertrags- und Sachwertverfahren sowie Erbbaurecht,
  Erbbaugrundstück, Gebäude auf fremdem Grund und Boden, Grundstücke im Zustand der
  Bebauung und Nachweis des niedrigeren gemeinen Werts. Die **Lösungsdatei**
  (`1KG701MsTDFm91Fp8BBV_Nc3sRUDdN5y0`) ist ebenfalls eingearbeitet: alle elf
  Musterlösungen stehen in den jeweiligen Kapiteln. **Damit ist dieser Ordner
  abgeschlossen.**
- **Erbschaftsteuer 2025-2026 Teil 2** (Schäfer, Stand Dezember 2025), Drive-ID
  `1TDeGlLDEjaWjMYrxXIz4XsDKldKCwAH6` im Ordner `18BU5Mtf5b0TRVioC1G63ELnXdl2wdYHA`:
  **begonnen.** Das Skript („Steuerbefreiungen, Verschonungsregelungen, Berechnung der
  Steuer“, 57 Seiten, vom Connector vollständig ausgegeben) steht im neuen Reiter
  „Verschonung & Steuerberechnung (Schäfer)“, `src/data/k1-erbst-verschonung.js`.
  Eingepflegt sind der **Abschnitt I** (sachliche Steuerbefreiungen des § 13 ErbStG) und
  der **vollständige Abschnitt II** (Tz. 1 bis 18: Überblick über die Verschonung,
  begünstigungsfähiges und begünstigtes Vermögen, 90-Prozent-Test, vollständiger
  Verwaltungsvermögenskatalog mit Finanzmitteltest, Altersversorgungsverpflichtungen,
  Investitionsklausel, Nettowert, unschädliches Verwaltungsvermögen, Einschränkung der
  Schuldensaldierung, Verbundvermögensaufstellung, Regelverschonung, Abzugsbetrag,
  Weitergabeverpflichtung, Lohnsummenregelung, Behaltensregelung, Familienunternehmen,
  Anzeigepflichten und Optionsverschonung), der **Abschnitt III** (Großerwerbe über
  26 Mio. € mit § 13c ErbStG und der Verschonungsbedarfsprüfung nach § 28a ErbStG) und der
  **Abschnitt IV** (Steuerbefreiung für zu Wohnzwecken vermietete Grundstücke nach § 13d
  ErbStG) sowie aus dem **Abschnitt V** die Tz. 1 bis 3 (Steuerklassen, Freibeträge,
  Steuersätze mit Härteausgleich, Tarifbegrenzung nach § 19a ErbStG und die
  Berücksichtigung früherer Erwerbe) sowie der **Abschnitt VI** (Steuerschuldner,
  Anzeigepflichten, Steuererklärung, Kleinbetragsgrenze und Steuerstundung). **Das Skript
  ist damit vollständig erfasst.** Die **Lösungsdatei**
  (`1LASeajqIfpq5PYMCg1htyXI7voY2EF_4`) ist ebenfalls eingearbeitet: alle zwölf
  Musterlösungen stehen in den jeweiligen Kapiteln.
- **ErbSt-Fallsammlung 4. Termin** (`1HuXWysA6NBRDAltBmHei54XFo3POwOtV`, 2,4 MB, im selben
  Ordner `18BU5Mtf5b0TRVioC1G63ELnXdl2wdYHA`): **vollständig eingepflegt.** Die Datei („Fallsammlungen und
  Lösungen Erbschaftsteuer/Bewertungsrecht, 4. Fachtermin“, Rechtsstand 2025, vom Connector
  vollständig ausgegeben) enthält **neun Klausuren und Übungsaufgaben mit
  Lösungshinweisen**: Ackermann, August Antensteiner, Backhaus, Engelkamp, Glücklich, ein
  weiterer Fall ohne Namensangabe, Müller GmbH, Walter Olfmann und Paul Pollmann.
  Eingepflegt sind bisher die Klausur **Ackermann**, die Übungsaufgabe **August
  Antensteiner** und die Übungsklausur **Backhaus** im Reiter „Fallsammlung“,
  `src/data/k1-erbst-fallsammlung.js`, als neuer Block „Klausuren und Übungsaufgaben ·
  4. Fachtermin“; dazu die sieben Einzelfälle zum begünstigungsfähigen Vermögen des
  § 13b Abs. 1 ErbStG und die Übungsklausuren **Engelkamp**, **Kurt Glücklich** und
  **Morgenrot**, **Müller GmbH**, **Walter Olfmann**, die Schenkung **Paul
  Pollmann**, der Kurzfall zu Tarifbegrenzung und Härteausgleich und zuletzt der
  Schlussabschnitt „Weitergabeverpflichtung, Erbauseinandersetzung, Teilung des Nachlasses,
  Vorausvermächtnis“ mit seinen drei durchgerechneten Beispielen. Damit ist die Datei
  vollständig ausgewertet; aus dem Ordner `18BU5Mtf5b0TRVioC1G63ELnXdl2wdYHA` ist nichts
  mehr offen.
- **ErbStR, 4. und 5. Einheit** – im Ordner `1aIlk9ojzoC9TDklJ3m1QtPZZO41h4Zd6` liegen seit
  September 2026 vier weitere Dateien („ErbStR, 4. Einheit_Teil 1“ und „ErbStR. 4.
  Einheit_Teil 2“, „ErbStR, 5. Einheit_Teil 1“ und „ErbSt, 5 Einheit - Teil 2“). Der Campus
  deckt die Einheiten 1 bis 3 ab. Die vier neuen Dateien sind **geprüft und technisch
  blockiert**: reine Scans ohne Textebene, zugleich zu groß für den Download über den
  Connector – siehe Abschnitt A.

### Übergreifend
- **Originalklausuren** (`1bjpQeoVkx-j6_XC67TEB5NF9IY9EwSTn`, Unterordner von
  `1RsOYiVN08H26klYwJoBOZOiUG50F7rbd`): **begonnen.** Der Ordner enthält acht PDFs mit
  Original-Sachverhalten der Steuerberaterprüfung: ESt (2,3 MB), ErbSt (1,1 MB), Bilanz
  2011–2015 (3,3 MB), KSt (1,0 MB), „Pruefungsklausur Steuerberater 2021-2022“ (0,7 MB)
  sowie drei Dateien mit abgeschnittenen Titeln („2026) .pdf“, „2026) (9).pdf“,
  „2026) (10).pdf“). Ausgewertet ist bisher die Datei **ErbSt**
  (`1KXgD0bYGU9CZOjpeiqsUHNVwbquW-rla`, „Steuerberaterprüfungen 2014 – 2015“, Februar 2026
  mit Rechtsstand 2025, Version 1.0, vom Connector vollständig ausgegeben). Sie enthält
  **zwei Originalklausuren mit Lösungshinweis**: Robert Rundlich 2014 und Robert Rundlich
  2015. **Beide sind eingepflegt** im Reiter „Originalklausuren (Prüfung)“,
  `src/data/k1-erbst-originalklausuren.js`; die ErbSt-Datei ist damit vollständig
  ausgewertet. Offen aus dem Ordner sind die sieben übrigen PDFs, die andere Klausurfächer
  betreffen. Diese sind inzwischen **identifiziert**: „2026)  .pdf“
  (`1OJ04Y1ZPgn5AGKOWOFey1s9gu5q8pEGe`, 1,8 MB) ist die **Abgabenordnung**
  („Steuerberaterprüfungen 2011 – 2015“, Februar 2026) mit fünf Original-Examensklausuren
  des Prüfungsteils Verfahrensrecht – 2011 (Sven Sieger), 2012 (Eheleute Schallhammer),
  2013 (zwei Sachverhalte), 2014 und 2015, jeweils mit Lösungsvorschlag und Randpunkten;
  eingepflegt sind daraus die Klausuren **2011**, **2012**, **2013** (beide Sachverhalte
  als eigene Einträge) im Reiter „Originalklausuren (Examen)“ des AO-Campus,
  `src/data/k1-ao-originalklausuren.js`, dazu die Klausuren **2014** und **2015**. **Damit ist
  die AO-Datei vollständig ausgewertet.** „2026) (9).pdf“
  (`1lIwxxyUdq_FVIqKDhGk1LHPPJm0O8FNo`, 1,4 MB) ist die **Umsatzsteuer** („Original
  Prüfungsklausuren 2011 – 2015 mit Lösungen“, Rechtsstand 2026, April 2026) mit fünf
  Klausuren des Teils II Umsatzsteuer (2011 Trachten Ferstl, 2012 Eheleute Taff, 2013 Terra
  GmbH, 2014 Anton Asam, 2015 Georg Gründlich); eingepflegt sind alle fünf Klausuren
  **2011** bis **2015** im Reiter „Originalklausuren (Prüfung)“ des USt-Campus,
  `src/data/k1-ust-originalklausuren.js`. **Damit ist die USt-Datei vollständig ausgewertet.**
  „2026) (10).pdf“ (`1OIu1EKJ2j5uSv3egnNYjfCqKqDTWiw2h`, 0,5 MB) und
  „Pruefungsklausur Steuerberater 2021-2022-0226.pdf“ (`1fD7j6QKx7MX2zt9gdlKZW7MFQe1UYtC3`,
  0,7 MB) sind die **Prüfungsaufgaben Buchführung und Bilanzierung** der
  Steuerberaterprüfungen 2022/2023 bzw. 2021/2022 – noch offen. Die Datei **ESt**
  (`1QwClx7BL_66vssgQcF4xq7CIzknvfIcy`, 2,3 MB) ist „Ertragsteuern · Steuerberaterprüfungen
  2011 – 2015“ (Rechtsstand 2025, März 2026) mit den Original-Prüfungsaufgaben aus
  Einkommensteuer und Gewerbesteuer; **begonnen** – eingepflegt sind die **Prüfungen 2011
  und 2012** mit je vier Sachverhalten (2011: Mayer GmbH & Co. KG, Bauen Döring KG, Abel &
  Witte GbR, Grundbesitz-Verwaltungs GmbH & Co. KG; 2012: Susi Schön, Peter Panther,
  Steuerpflichtiger R, Wegzug nach Wien) im Reiter „Originalklausuren (Prüfung)“ des
  ESt-Campus, `src/data/k2-est-originalklausuren.js`. **Damit ist alles eingepflegt, was der
  Connector aus dieser Datei ausgibt.** Offen sind die Prüfungen **2013 bis 2015**. **Wichtig:** Der Connector gibt die Datei nur bis etwa zur Hälfte
  der Prüfung 2013 aus (rund 168.000 Zeichen); die Prüfungen 2012 und der Anfang von
  2013 liegen vor, der Rest ist aus dem Drive-Text nicht lesbar und gehört zu den
  blockierten Teilen in Abschnitt A. Die Datei **KSt** (`1M69J_ZCoqrXeBtX-OD83FYkJgiAksMWb`, 1,0 MB)
  ist „Körperschaftsteuer, Umwandlungssteuerrecht und Gewerbesteuer ·
  Steuerberaterprüfungen 2011 – 2015“ (Rechtsstand 2025, Februar 2026, Bearbeiter RA/StB
  Ulrich Breier) mit fünf Original-Prüfungsklausuren samt Lösungshinweisen und Randpunkten;
  der Connector gibt die Datei **vollständig** aus. Eingepflegt sind die
  **Prüfungen 2011** (A-GmbH, 35 Punkte), **2012** (A-UG, 40 Punkte) und **2013**
  (Invest-Deutschland Ltda, 33 Punkte) , **2014** (zwei Sachverhalte, 43 Punkte) und **2015**
  (40 Punkte) im Reiter „Originalklausuren (Prüfung)“ des KSt-Campus,
  `src/data/k2-kst-originalklausuren.js`. **Damit ist die KSt-Datei vollständig
  ausgewertet.** Die Datei **Bilanz 2011–2015**
  (`1IXnBjpvc8EiQuhxGNAX6EC3jtSh8wOWZ`, 3,3 MB) ist „Bilanzierung nach Handels- und
  Steuerrecht · Steuerberaterprüfungen 2011 – 2015“ (Februar 2026; Verfasser Norbert Rott,
  Markus Schmidt und Alexander Horst) mit fünf Klausuren zu je drei Teilen und 100 Punkten;
  **vollständig ausgewertet, soweit der Connector Text ausgibt** – eingepflegt sind die
  **vollständige Prüfung 2011** mit allen drei Teilen (Einzelunternehmen Herbst 34 Punkte,
  X-GmbH 33 Punkte, A-B-GmbH & Co. KG 33 Punkte) sowie aus der **Prüfung 2012** die Teile I
  (Einzelunternehmen Winter, 34 Punkte) und II (Sommer GmbH, 33 Punkte) im Reiter
  „Originalklausuren (Prüfung)“ des Bilanzen-Campus, `src/data/k3-bil-originalklausuren.js`.
  Der Sachverhalt zu Teil III der Prüfung 2012 (XYZ GmbH & Co. KG) liegt ebenfalls vor, die
  zugehörige Lösung gibt der Connector nicht mehr aus; der Text endet unmittelbar hinter
  „Teil II gesamt 33 Punkte“. Diese Lösung und die Prüfungen 2013 bis 2015 gehören zu den
  blockierten Teilen in Abschnitt A.
#### Grunderwerbsteuer und Lohnsteuer – beide erledigt, soweit lesbar
Für beide Gebiete gab es bislang keinen Campus. Beide Ordner sind gesichtet und abgearbeitet:
Die Grunderwerbsteuer hat einen eigenen Campus und ist vollständig eingepflegt; aus dem
Lohnsteuer-Ordner ist die einzige Datei mit Textebene eingepflegt, die beiden übrigen sind
reine Scans und stehen in Abschnitt A:

- **Grunderwerbsteuer**, Ordner `1EUOPd5EtQg3eQ76LGNwfgevbhcV-96kI`, eine Datei
  („2026) (9).pdf“, `1TMZnajkQ6sG-EDJdKia_LmlrDcmZHp_7`, 1,3 MB): das vollständige
  Lehrgangsskript **„Vorbereitung auf die Steuerberaterprüfung · Grunderwerbsteuer“ von
  Dr. Stephan Vossel, Januar 2026** (195.000 Zeichen, vom Connector vollständig ausgegeben).
  **Erledigt:** Das Fachgebiet hat jetzt einen eigenen Campus (Klausur 1, Fachleiste „GrESt“,
  `src/components/K1GrEStCampus.jsx`, Datensatz `src/data/k1-grest-skript.js`). Das Skript ist
  **vollständig** im Wortlaut übernommen – alle neun Abschnitte I bis IX in 20 Kapiteln mit
  488 Abschnitten und 12 Tabellen, einschließlich sämtlicher Beispiele, Lösungen und
  Fundstellen. Aus diesem Ordner ist damit nichts mehr offen.
- **Lohnsteuer**, Ordner `1O6alBKmrJsgeQaOyWOTCv6mlDD5zZ8Gv`, drei Dateien – **eine eingepflegt,
  zwei technisch blockiert**:
  - „Schema LSt StB und Stfw.pdf“ (`1CXkUXmNJRG1AVTi7d6qqokYyafhJFj97`, 0,09 MB) – das
    **Lohnsteuer-Prüfungsschema Arbeitslohn von Markus Nöthen** in fünf Stufen. **Eingepflegt**
    als Reiter „Lohnsteuer-Schema“ im Einkommensteuer-Campus der Klausur 2, Datensatz
    `src/data/k2-lst-schema.js`, Prüfung `npm run check:k2-lst-schema`.
  - „Korrektur allerletzte Berechnung, Rundungsfehler.pdf“ (`1c3sKXOHq10Hc64yEtQ2pWvJiEvoBiYWW`,
    0,15 MB) – **reiner Scan**, siehe Abschnitt A.
  - „Lohnsteuervideo Mitschrift.pdf“ (`1_pq7S0hPgWxnJb92toX_iS43YfSUd3Li`, 3,7 MB) – **reiner
    Scan** über 24 Seiten, siehe Abschnitt A.

#### Ordner „Ergänzungslieferungen“ – existiert nicht
Ein Ordner dieses Namens ist im freigegebenen Drive **nicht vorhanden.** Die Suche über alle
Schreibweisen („Ergänzungslieferung“, „Ergaenzung“, „nzungsliefer“) liefert kein Ergebnis, und
der Ordner „StB Tageslehrgang_online_Komplett“ (`11bUpMhJMJ41hxKqsODTwd6ETBUFBkj5G`) enthält
genau elf Unterordner: Umsatzsteuer, Umwandlungssteuerrecht, Erbschaftsteuer_Bewertungsrecht,
Bilanzierung, Mitschriften_Markierungen, Internationales Steuerrecht, Körperschaftsteuer,
Abgabenordnung, Personengesellschaften, GewSt-Übungsfälle und Einkommensteuer. Die frühere
Notiz, es gebe dort einen Ordner „Ergänzungslieferungen“, war unzutreffend und ist damit
erledigt.

#### Ordner „Mitschriften_Markierungen“ – gesichtet, technisch nicht verwertbar
Siehe Abschnitt A. Der Ordner enthält rund 40 handschriftliche Mitschriften und 13
ZIP-Archive; beides ist über den Connector nicht wortlautgetreu erfassbar.

### Struktur des Drive-Ordners (Stand des Neudurchlaufs)
Der freigegebene Ordner „Unterlagen StB Endriss“ hat neun Unterordner: ErbStR, IStR, USt, AO,
Bilanz, KSt, UmwStG, PersG und „StB Tageslehrgang_online_Komplett“. Letzterer enthält
Lehrgangsunterlagen, Übungsklausuren, Zusatzunterlagen, Ergänzungslieferungen und
Hausaufgaben Tageslehrgang.

Bestätigt hat sich dabei, dass es **zwei verschiedene Unterordner „Einkommensteuer“** gibt.
Beide sind inzwischen vollständig geprüft; aus dem zweiten (unter „Zusatzunterlagen“) fehlt
nichts mehr. Ob es weitere gleichnamige Ordnerpaare gibt, ist für KSt, PersG, AO und ErbSt
noch zu prüfen, bevor diese Gebiete als vollständig gelten können.
