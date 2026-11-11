# KI Use-Case Bewertung & AI Act Klassifizierung

**👉 Direkt starten: https://poeppi.github.io/ki-usecase-bewertung/** — im Browser, ohne Installation. Alle Eingaben bleiben auf dem eigenen Gerät.

Das Werkzeug beantwortet in sieben Schritten eine Frage: Lohnt sich dieses KI-Vorhaben — und was verlangt das Recht dafür? Es kombiniert eine Wertbeitrag-Vorprüfung mit der Risikoklassifizierung nach EU AI Act, einer GPAI-Einordnung, DSGVO-Hinweisen und einem Briefing für Stakeholder.

Entwickelt von **Yvonne Pöppelbaum** · AI Adoption · Regulatory Intelligence
Stand: November 2026 · Version 1.3 · MIT-Lizenz

---

## Was das Tool leistet

- **Vorprüfung Wertbeitrag** in drei Pflichtfragen: Welcher konkrete Nutzen entsteht? Welcher Reifegrad (Standardtool / Anpassung / Eigenentwicklung)? Welche nicht-KI-Alternative wurde geprüft?
- **AI-Act-Risikoklassifizierung** in vier Stufen mit präziser Logik:
  - 🚫 Unzulässig — Art. 5 Abs. 1 vollständig: lit. a–h plus die durch VO (EU) 2026/1744 eingefügten lit. ba und bb (zehn Verbote)
  - ⚠️ Hochrisiko — Anhang III mit Filter Art. 6 Abs. 3 (vier Ausnahmetatbestände, Profiling-Override)
  - 💬 Begrenztes Risiko — Art. 50 mit Offensichtlich-Ausnahme (Abs. 1 Satz 2), Deepfake-Differenzierung (Abs. 4 UAbs. 1) und Kennzeichnung KI-generierter Texte zu Themen öffentlichen Interesses (Abs. 4 UAbs. 2, mit Ausnahme bei menschlicher Prüfung und redaktioneller Verantwortung)
  - ✅ Minimales Risiko
- **GPAI-Einordnung** für Foundation Models mit Rollendifferenzierung Deployer / Modifizierer / Provider und Verweis auf den GPAI Code of Practice (10. Juli 2025)
- **DSGVO-Hinweise** bei besonderen Datenkategorien (Art. 9), DSFA-Schwellenwert (Art. 35), automatisierter Einzelentscheidung (Art. 22)
- **§ 87 BetrVG** bei Mitarbeiterbeteiligung
- **Geltungsdaten-Zeitleiste** mit aktuellem Stand: was gilt heute, was kommt
- **Empfohlene nächste Schritte** — kontextspezifisch, abhängig von Risikoklasse, Datenlage und Governance-Status
- **Stakeholder-Briefing** als Template, läuft lokal im Browser ohne API-Aufruf
- **Export** als JSON (maschinenlesbar) und Markdown (menschenlesbar, mit allen Antworten und dem Briefing)
- **Drucken / PDF** über Browser-Druckdialog

---

## Was das Tool nicht leistet

- **Keine Rechtsberatung.** Die Klassifizierung ist eine strukturierte Ersteinschätzung. Hochrisiko-Fälle, Art.-6-Abs.-3-Ausnahmen und unklare GPAI-Konstellationen erfordern juristische Prüfung.
- **Keine Konformitätsbewertung.** Risikomanagement-System (Art. 9), technische Dokumentation (Anhang IV), Konformitätsverfahren (Art. 43), EU-Datenbank-Registrierung (Art. 49, Art. 71) sind eigene Prozesse — das Tool nennt sie, führt sie aber nicht durch.
- **Keine Anhang-I-Prüfung, keine MDR/IVDR-Prüfung.** Das Tool prüft nur Anhang III. KI als Sicherheitsbauteil oder eigenständiges Produkt unter Harmonisierungsrecht (Anhang I, z. B. MDR/IVDR, Maschinen) ist Hochrisiko nach Art. 6 Abs. 1 mit Geltung ab 02.08.2028; seit dem Omnibus gelten reine Unterstützungs- und Qualitätskontrollfunktionen nicht als Sicherheitsbauteil (Art. 6 Abs. 1a bis 1c). Das Tool weist darauf hin, ersetzt die Prüfung aber nicht.
- **Keine inhaltliche Validierung.** Wer „Effizienz steigern" als Wertbeitrag einträgt, bekommt trotzdem eine Bewertung — die Vorprüfung macht die Lücke nur sichtbar.
- **Keine Datenübertragung, Speicherung nur auf Wunsch.** Standardmäßig leben alle Eingaben in der laufenden Browser-Sitzung und sind beim Schließen des Tabs weg — deshalb: vor dem Schließen exportieren. Wer die Zwischenspeicherung aktiviert (Checkbox in Schritt 1), speichert die Bewertung ausschließlich im lokalen Browser-Storage; an Server wird nie etwas übertragen.
- **Kein Ersatz für Stakeholder-Gespräche.** Eine Bewertung in 15 Minuten ist ein Ausgangspunkt, kein Abschluss.

---

## Der Ablauf — sieben Schritte

| Nr. | Schritt | Was abgefragt wird |
|---|---|---|
| 1 | Wertbeitrag | Nutzen, Reifegrad, geprüfte Alternative |
| 2 | Problemdefinition | Geschäftsproblem, Bereich, Nutzer:innen, KPI, Automatisierungsgrad |
| 3 | Datenlage | Personenbezogene Daten ja/nein, Datenkategorien, Verfügbarkeit |
| 4 | Verbotsprüfung | Zehn Praktiken nach Art. 5 Abs. 1 lit. a–h, ba und bb |
| 5 | Hochrisiko + Art. 50 + GPAI | Anhang-III-Bereiche, Art.-6-Abs.-3-Ausnahmen, Foundation-Model-Rolle, Transparenzfragen (Interaktion, KI-Inhalte, Deepfakes, KI-Texte zu Themen öffentlichen Interesses) |
| 6 | Governance | Sponsor, Legal, Betriebsrat, Human Oversight |
| 7 | Ergebnis | Klassifizierung, Geltungsdaten-Zeitleiste, nächste Schritte, Briefing, Export |

Bei einem Verbotstreffer in Schritt 4 springt das Tool direkt zum Ergebnis — die nachfolgenden Fragen erübrigen sich.

---

## Klassifizierungslogik

```
1. Art. 5 Abs. 1 lit. a–h, ba, bb Verbote? → UNZULÄSSIG (früher Ausstieg)
2. Anhang III Hochrisiko-Bereich?
   → Filter Art. 6 Abs. 3: Ausnahme angeklickt + kein Profiling? → Klassifizierung fällt
   → in Beschäftigung (Nr. 4), Bildung (Nr. 3) und wesentlichen Diensten (Nr. 5) zusätzlich: schriftliche Begründung
     mit mindestens 80 Zeichen, sonst bleibt HOCHRISIKO (Plausibilitätsschranke, seit v1.3)
   → sonst: HOCHRISIKO
3. Art. 50 Transparenzpflichten?
   → Interaktion + offensichtlich? → keine Begrenzt-Klassifizierung allein wegen Interaktion
   → nicht-offensichtliche Interaktion → BEGRENZTES RISIKO
   → KI-Inhalte: BEGRENZTES RISIKO nur, wenn die Organisation Anbieter ist (Art. 50 Abs. 2), bei Deepfakes (Abs. 4 UAbs. 1)
     oder bei veröffentlichten Texten zu Themen öffentlichen Interesses ohne menschliche Prüfung (Abs. 4 UAbs. 2).
     Reiner Betreiber mit menschlich geprüften KI-Texten → kein Art.-50-Auslöser, Hinweis auf die Anbieterpflicht
4. Sonst → MINIMALES RISIKO
```

GPAI-Status wird parallel zur Klassifikation erhoben und löst eigene Hinweise aus, unabhängig von der Risikoklasse.

DSGVO Art. 22 prüft das Tool heuristisch: Vollautomatisch + personenbezogene Daten + Wirkung auf Personen → eigener Alert mit Schutzpflichten.

Greift die Ausnahme nach Art. 6 Abs. 3, tragen Ergebnis, Exporte und alle drei Briefings den Vorbehalt: „Diese Einstufung gilt nur unter der Ausnahme nach Art. 6 Abs. 3: ohne dokumentierte Selbsteinschätzung und Registrierung gilt Hochrisiko."

**Nächste Schritte** kommen in drei Kategorien mit Aufwandsklasse: Pflicht (rechtliche Pflicht oder Voraussetzung), Empfohlen (fachlich sinnvoll), Projekt (Projekt-Hygiene); Aufwand Stunden, Tage, Wochen oder Extern. Die Ergebnisseite zeigt fünf Schritte, der Rest ist einklappbar. Rollenpflichten nach Art. 16 bis 27 erscheinen nur bei Hochrisiko.

**Plausibilität** (`pruefeWidersprueche()`): Vor dem Ergebnis prüft das Tool die Antworten gegeneinander, zum Beispiel Bereich HR ohne Anhang III Nr. 4, externe Nutzer:innen ohne personenbezogene Daten, Standardtool mit Rolle Anbieter, Art.-6-Ausnahme bei vollautomatischer Entscheidung, Beschäftigung ohne Betriebsrat. Passt etwas nicht zusammen, erscheint eine Zwischenkarte „Bitte prüfen" mit Sprung zum betroffenen Schritt. Wer bestätigt, bekommt das Ergebnis; die Hinweise stehen dann in Ergebnis, Exporten und Briefings.

**Belastbarkeit der Einstufung** (`belastbarkeit()`): hoch, mittel oder niedrig, neben der Risikoklasse, in der Seitenleiste, in beiden Exporten und in allen Briefings. Abzüge gibt es für Antworten „unklar", für die beanspruchte Ausnahme nach Art. 6 Abs. 3, für Selbsteinschätzungen nach Art. 50 (offensichtliche KI-Natur, menschliche Prüfung), für Schwächen der Vorprüfung und für bestätigte Plausibilitätshinweise. Das Tool sagt damit selbst, wie weit man ihm trauen darf.

**Belege** (`verlinkeArtikel()`): Jeder Verweis auf einen Artikel oder Anhang des EU AI Act in Hinweisen, Schritten und Ergebnis führt zur Artikelseite im AI Act Service Desk der Kommission (konsolidierte Fassung, englisch). Verweise auf DSGVO, BetrVG und AGG bleiben ohne Link; der Markdown-Export nennt zusätzlich die deutsche Fassung auf EUR-Lex.

**Selbstalterung** (`RECHTSSTAND`, `rechtsstandVeraltet()`): Liegt das Systemdatum mehr als sechs Monate nach dem Rechtsstand, zeigt das Tool über der Bewertung einen Hinweis und schreibt ihn in Exporte und Briefings. Bei jedem Rechtsstand-Update `RECHTSSTAND` und `RECHTSSTAND_LABEL` anpassen.

---

## Nutzung

### Sofort starten

Auf der Startseite „Über das Tool" lassen sich drei geprüfte Fälle laden (Mail-Assistent, Bewerbungserfassung mit Art.-6-Ausnahme, Kundenservice-Chatbot). Ein Klick führt zum vollständigen Ergebnis, über „Zurück" ist jeder Schritt einsehbar und änderbar. Die Fälle stammen aus der Beispielsammlung für Workshops.

Beim ersten Aufruf zeigt das Tool die Seite „Über das Tool": was es kann, wie es funktioniert, wo die Grenzen liegen und was beim Menschen bleibt. Der Link im Kopfbereich führt jederzeit dorthin zurück.

**Online:** https://poeppi.github.io/ki-usecase-bewertung/ — der schnellste Weg.

**Offline:** Datei `index.html` herunterladen und per Doppelklick im Browser öffnen — kein Server, keine Installation.

Dann: sieben Schritte durchlaufen, Ergebnis exportieren (JSON oder Markdown), Briefing erstellen, drucken.

### Stakeholder-Briefing

Auf der Ergebnisseite den Button „Briefing erstellen" klicken. Das Tool baut das Briefing sofort aus den Antworten zusammen; es lässt sich kopieren und ist im Markdown-Export enthalten.

Das Briefing ist deterministisch generiert — kein API-Aufruf, keine Halluzinationen, kein Datenabfluss. Wer das gleiche Eingabeset eingibt, bekommt das gleiche Briefing.

### Versionierung

Bewertungen als JSON exportieren und in Git versionieren. So lässt sich nachvollziehen, wie sich ein Use Case über mehrere Iterationen entwickelt — als Dokumentationsspur für Governance.

---

## Aufbau

### Eine Datei

`index.html` — eigenständige Datei ohne Build-Prozess, ohne Server, ohne externe Abhängigkeiten. Es wird nichts von externen Servern geladen, auch keine Schriften: Das Tool nutzt IBM Plex, falls lokal installiert bzw. als woff2-Dateien in `fonts/` abgelegt (vorbereitete `@font-face`-Blöcke im CSS), sonst die Systemschrift.

### Technischer Aufbau

```
state {}                   — zentrales Zustandsobjekt
STEPS []                   — sieben Schritt-Definitionen
NUTZER_LABELS              — Slug-zu-Label-Map (Nutzergruppen)
DATEN_ARTEN_LABELS         — Slug-zu-Label-Map (Datenkategorien)

classifyRisk(a)            — Klassifizierungslogik mit Art. 6(3)-Filter
getNextSteps(risk, a)      — Handlungsempfehlungen, abhängig von Klasse, Daten, GPAI, Governance
pruefeWidersprueche(a)     — Plausibilität: Antworten gegeneinander prüfen, Zwischenkarte vor dem Ergebnis
belastbarkeit(a, risk)     — Stufe hoch/mittel/niedrig mit Gründen
verlinkeArtikel(text)      — Artikel- und Anhangverweise auf den AI Act Service Desk verlinken
rechtsstandVeraltet()      — Selbstalterung, Hinweis sechs Monate nach RECHTSSTAND
BEISPIELE / ladeBeispiel() — drei vorbefüllte Fälle für die Startseite

renderWertbeitrag()        — Schritt 1
renderProblem()            — Schritt 2
renderDaten()              — Schritt 3
renderVerboten()           — Schritt 4 (Art. 5 Abs. 1 lit. a–h, ba, bb)
renderHochrisiko()         — Schritt 5 (Anhang III + Art. 6 Abs. 3 + GPAI + Art. 50)
renderGovernance()         — Schritt 6
renderErgebnis()           — Schritt 7

buildExportData()          — JSON-Struktur
exportJSON() / exportMarkdown() — Downloads
generateBriefing()         — Template-basiertes Stakeholder-Briefing, lokal
```

### Exportformat (JSON, gekürzt)

```json
{
  "meta": { "tool": "KI Use-Case Bewertung", "version": "1.3", "exported_at": "...", "rechtsstand": "November 2026", "rechtsstand_hinweis": null },
  "wertbeitrag": { "wertbeitrag": "...", "reifegrad": "...", "alternative": "..." },
  "problem": { "text": "...", "bereich": "...", "nutzer": ["..."], "kpi": "..." },
  "daten": { "personenbezogen": "ja|nein", "arten": ["..."], "verfuegbar": "..." },
  "aiact": {
    "verbotene_praktiken": { "manipulation_lit_a": "...", ..., "csam_lit_bb": "..." },
    "hochrisiko_kategorien": ["..."],
    "art6_abs3_ausnahme": { "a_eng_begrenzte_aufgabe": false, ..., "profiling": "...", "begruendung": "...", "ausnahme_greift": false },
    "transparenzpflichten": { "interaktion": "...", "interaktion_offensichtlich": "...", "genai": "...", "deepfake": "...", "text_oeffentliches_interesse": "...", "text_menschlich_geprueft": "..." },
    "gpai": { "genutzt": "...", "rolle": "..." },
    "risikoklasse": { "class": "...", "label": "...", "beschreibung": "..." }
  },
  "belastbarkeit": { "stufe": "hoch|mittel|niedrig", "gruende": ["..."] },
  "plausibilitaet": { "hinweise": [{ "titel": "...", "text": "..." }], "bestaetigt": false },
  "governance": { "sponsor": "...", "legal": "...", "betriebsrat": "...", "oversight": "..." },
  "naechste_schritte": [{ "kategorie": "Pflicht|Empfohlen|Projekt", "aufwand": "Stunden|Tage|Wochen|Extern", "text": "..." }],
  "briefing": "..."
}
```

---

## Worauf zu achten ist

### Qualität der Eingaben

- **Wertbeitrag konkret:** „Zwei Stunden pro Vorgang sparen, bei 1.200 Vorgängen pro Monat" schlägt „Effizienz steigern".
- **Automatisierungsgrad ehrlich:** Vollautomatisch oder unterstützend hat große Folgen für Art. 50, Art. 6 Abs. 3 und DSGVO Art. 22.
- **Datenkategorien breit denken:** Kommunikationsinhalte, E-Mail-Texte, Beschwerden sind personenbezogen — nicht nur Namen und Adressen.
- **„Unklar" sparsam einsetzen:** Das Tool lässt Unsicherheit zu, aber eine Bewertung mit fünf „Unklar"-Antworten hat wenig Aussagewert.

### Regulatorische Grenzen

- Stand der Auslegung: November 2026, inklusive der Verordnung (EU) 2026/1744 („Digital Omnibus on AI", in Kraft seit 27.07.2026): zwei neue Verbote (Art. 5 Abs. 1 lit. ba/bb, anwendbar ab 02.12.2026), Hochrisiko-Pflichten für Anhang-III-Systeme verschoben auf 02.12.2027, Anhang I auf 02.08.2028; Art. 50 gilt unverändert seit 02.08.2026, Bestandssysteme haben bei Abs. 2 bis 02.12.2026 Zeit; Art. 4 (KI-Kompetenz) als Förderpflicht formuliert.
- Berücksichtigt sind außerdem: Leitlinien der Kommission zu Art. 50 (20.07.2026), Verhaltenskodex zur Transparenz KI-generierter Inhalte (final 10.06.2026), GPAI Code of Practice (10.07.2025, Unterzeichnerstand 07.10.2026), Durchführungsverordnung (EU) 2026/1755 (GPAI-Durchsetzung durch das AI Office seit 02.08.2026), harmonisierte Norm EN 18286:2026 (Qualitätsmanagement, Art. 17) und in Deutschland das KI-MIG (29.07.2026) mit der Bundesnetzagentur als zentraler Marktüberwachungs- und Beschwerdestelle.
- Die Kommissions-Leitlinien zur Hochrisiko-Einstufung nach Art. 6 Abs. 5 liegen seit 19.05.2026 als Entwurf vor; eine finale Fassung lag im November 2026 nicht vor. Das Tool weist darauf hin und empfiehlt restriktive Auslegung.
- Datumsabhängige Texte: Die Formulierung zu den Verboten lit. ba/bb („gilt ab" bzw. „gilt seit" 02.12.2026) und die Markierung „aktiv / ab dann" in der Zeitleiste richten sich nach dem Systemdatum des Browsers.
- Art. 5 Abs. 1 lit. f und g (Emotionserkennung, biometrische Kategorisierung) haben Ausnahmetatbestände (medizinische Zwecke, Sicherheit, Strafverfolgung). Das Tool fragt das nicht im Detail ab.
- Anhang III Nr. 4 und Nr. 5 (Beschäftigung, wesentliche Dienste) hängen am Tatbestand „wesentliche Beeinflussung der Entscheidung". Bei Grenzfällen: Legal hinzuziehen.
- Marktaufsicht prüft die **faktische Wirkung**, nicht die im Tool angegebene Zweckbestimmung.

### Keine automatische Aktualisierung

Statische HTML-Datei. Wenn sich Rechtslage ändert (neue Leitlinien, Digital Omnibus, Delegierte Rechtsakte), muss die Klassifizierungslogik manuell angepasst werden. Versionsstand und Rechtsstand im Meta-Block des JSON-Exports. Sechs Monate nach dem Rechtsstand zeigt das Tool von selbst einen Hinweis, dass die Grundlage geprüft werden muss.

### Kein Backend, keine Synchronisation

Mehrere Personen können nicht parallel arbeiten. Für kollaborative Nutzung: JSON-Export teilen, einzeln befüllen, am Ende manuell zusammenführen.

---

## Rechtlicher Hinweis

Das Tool stellt keine Rechtsberatung dar. Die Klassifizierungsergebnisse sind Arbeitshypothesen für den internen Einsatz. Für rechtsverbindliche Einschätzungen ist juristische Fachberatung erforderlich.

## Lizenz

MIT-Lizenz — siehe [`LICENSE`](LICENSE). Nutzung, Anpassung und Weitergabe sind mit Namensnennung erlaubt.

---

## Entwickelt mit

- Vanilla JavaScript (kein Framework)
- Schriften: IBM Plex Sans und IBM Plex Mono, selbst gehostet oder Systemschrift-Fallback — kein CDN-Abruf (DSGVO)
- Regulatorische Grundlage: EU AI Act (Verordnung 2024/1689, geändert durch Verordnung (EU) 2026/1744), Leitlinien der Kommission zu Art. 50, Verhaltenskodex zur Transparenz KI-generierter Inhalte, GPAI Code of Practice (10. Juli 2025), EN 18286:2026, DSGVO, BetrVG, AGG, KI-MIG

---

## Versionshistorie

**v1.3 — November 2026**
- Korrektur: Die neuen Verbote Art. 5 Abs. 1 lit. ba/bb gelten ab 02.12.2026, nicht seit dem Inkrafttreten der Omnibus-Verordnung am 27.07.2026 (Art. 113 lit. a n. F.). Texte dazu kippen datumsabhängig von „gilt ab" zu „gilt seit"
- Zeitleisten (Ergebnis-Card, Markdown-Export, Briefing) um 02.12.2026 (neue Verbote, Ende der Übergangsfrist Art. 50 Abs. 2) und 02.08.2027 (Alt-GPAI-Modelle, Art. 111 Abs. 3) ergänzt; Hochrisiko-Hinweise nennen das Geltungsdatum 02.12.2027
- Neue Frage in Schritt 5: KI-generierte Texte zu Themen öffentlichen Interesses (Art. 50 Abs. 4 UAbs. 2) mit Ausnahme bei menschlicher Prüfung und redaktioneller Verantwortung; Auslöser, nächste Schritte, Exporte und Briefing erweitert
- Hinweise ergänzt: Leitlinien zu Art. 50 und Transparenz-Verhaltenskodex, Art. 4 als Förderpflicht, GPAI-Durchsetzung durch das AI Office und Unterzeichnerstand des GPAI-Kodex, Bias-Erkennung mit besonderen Datenkategorien außerhalb Hochrisiko, Bundesnetzagentur und KI-MIG, EN 18286:2026, KI-Reallabor bei Eigenentwicklung
- Medizinprodukte-Hinweis korrigiert: MDR/IVDR läuft über Anhang I, nicht Anhang III
- Rechtsstand im Footer und Versionsstempel auf November 2026; `STORAGE_KEY` bewusst unverändert, damit gespeicherte Bewertungen erhalten bleiben
- Neue Startseite „Über das Tool" (was es kann, wie es funktioniert, Grenzen, was beim Menschen bleibt), erreichbar jederzeit über den Link im Kopfbereich; erscheint beim ersten Aufruf vor Schritt 1
- Farbgebung auf das Blau von poeppelbaum.eu umgestellt (Akzent #1e3a8a, Tinte #0a1530, Papier #f5f2eb); Variablennamen im CSS unverändert
- `logiktest.js`: Node-Testskript ohne Browser (`node logiktest.js index.html`), prüft Klassifizierung, Hinweise, Exporte, Briefing und Zeitleisten; `FAKE_TODAY=2026-12-03` simuliert den Stichtag
- Nach kritischer Prüfung aus KI-Manager- und KMU-Sicht (11.11.2026): Plausibilitätsschranke für Art. 6 Abs. 3 in Beschäftigung, Bildung und wesentlichen Diensten (Begründungspflicht, Warnhinweis mit Anhang-III-Wortlaut); Vorbehalt der Ausnahme in Ergebnis, Exporten und allen Briefings; Rollenpflichten Art. 16 bis 27 nur noch bei Hochrisiko; KI-Inhalte lösen „Begrenzt" nur noch bei Anbieterrolle, Deepfakes oder Texten zu Themen öffentlichen Interesses aus; nächste Schritte mit Kategorie (Pflicht, Empfohlen, Projekt) und Aufwandsklasse, fünf sichtbar, Rest einklappbar; Schwächen-Heuristik erkennt Zahlen und Begründungen; Nummerierung im Management-Briefing dynamisch; GPAI-Anpassung (Prompting, RAG) nicht mehr als Anbieterwechsel nach Art. 25 dargestellt
- Startseite mit ausklappbarem Beispiel „Kundenservice-Chatbot in sieben Schritten"
- Zweite Runde (11.11.2026): Plausibilitätsprüfung mit Zwischenkarte vor dem Ergebnis (15 Regeln); Belastbarkeit der Einstufung in drei Stufen mit Gründen; Artikel- und Anhangverweise als Links auf den AI Act Service Desk der Kommission; Selbstalterung mit Hinweis sechs Monate nach dem Rechtsstand; „Beispiel laden" mit drei geprüften Fällen auf der Startseite; „Zurück" auf der Ergebnisseite; 155 Prüfungen in `logiktest.js` (T1 bis T27), 157 mit simuliertem Datum 01.06.2027; offene Eingaben in Textfeldern und Auswahllisten bleiben erhalten, wenn ein Klick die Karte neu zeichnet; Kopfzeilen-Link heißt „Startseite · Über das Tool"

**v1.2 — August 2026**
- Rechtsstand auf Verordnung (EU) 2026/1744 („Digital Omnibus on AI") gehoben — Geltungsdaten-Zeitleiste aktualisiert: Hochrisiko Anhang III ab 02.12.2027, Anhang I ab 02.08.2028, Art. 50 unverändert seit 02.08.2026 mit viermonatiger Übergangsfrist für Bestandssysteme bei Abs. 2
- Governance und Sanktionen in der Zeitleiste korrekt beim 02.08.2025 einsortiert
- Zwei neue Verbotsfragen in Schritt 4: Art. 5 Abs. 1 lit. ba (nicht-einvernehmliche Intimdarstellungen) und lit. bb (CSAM-Erzeugung), inklusive Klassifizierungslogik und Export
- Hinweis zu den Art.-6-Leitlinien aktualisiert: Kommissions-Entwurf vom 19.05.2026, noch nicht final
- Google-Fonts-CDN entfernt: Schriften laufen über lokale `@font-face`-Blöcke (vorbereitet) mit Systemschrift-Fallback — kein externer Request mehr
- Tastaturbedienung der Ja/Nein-Flächen: fokussierbar, per Enter/Leertaste auslösbar, `aria-pressed`, sichtbarer Fokusring
- MIT-Lizenz ergänzt (`LICENSE`), DSGVO-Art.-22-Link auf EUR-Lex umgestellt
- README korrigiert: Opt-in-Zwischenspeicherung statt „keine Datenpersistenz", IBM Plex Mono statt JetBrains Mono, v2-Verweis entfernt

**v1.1 — Mai 2026**
- Vorstufe Wertbeitrag mit drei Pflichtfragen (Schritt 1)
- Art. 5 vollständig (acht Verbote nach lit. a–h, vorher fünf)
- Filter Art. 6 Abs. 3 mit vier Ausnahmetatbeständen und Profiling-Override
- Anhang-III-Bereiche mit aussagekräftigen Hints zu Unterpunkten
- Art. 50 Offensichtlich-Ausnahme (Abs. 1 Satz 2) und Deepfake-Differenzierung (Abs. 4)
- GPAI-Block mit Rollendifferenzierung (Deployer/Modifizierer/Provider) und Verweis auf Code of Practice
- DSGVO Art. 22 Heuristik (automatisierte Einzelentscheidung)
- Geltungsdaten-Zeitleiste in der Ergebnis-Card
- API-Key-Funktion entfernt, Template-basiertes Briefing eingebaut (läuft lokal)
- Bug-Fix: Code-Slugs durch lesbare Labels in Markdown- und JSON-Export ersetzt
- Sprache: „Annex" → „Anhang", „§ 87 BetrVG", Floskeln entfernt

**v1.0 — vor Mai 2026**
- Erstversion mit sechs Schritten und Anthropic-API-Anbindung für Briefing

---

*Yvonne Pöppelbaum · AI Adoption · Regulatory Intelligence*
