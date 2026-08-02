# KI Use-Case Bewertung & AI Act Klassifizierung

**👉 Direkt starten: https://poeppi.github.io/ki-usecase-bewertung/** — im Browser, ohne Installation. Alle Eingaben bleiben auf dem eigenen Gerät.

Das Werkzeug beantwortet in sieben Schritten eine Frage: Lohnt sich dieses KI-Vorhaben — und was verlangt das Recht dafür? Es kombiniert eine Wertbeitrag-Vorprüfung mit der Risikoklassifizierung nach EU AI Act, einer GPAI-Einordnung, DSGVO-Hinweisen und einem Briefing für Stakeholder.

Entwickelt von **Yvonne Pöppelbaum** · AI Adoption · Regulatory Intelligence
Stand: August 2026 · Version 1.2 · MIT-Lizenz

---

## Was das Tool leistet

- **Vorprüfung Wertbeitrag** in drei Pflichtfragen: Welcher konkrete Nutzen entsteht? Welcher Reifegrad (Standardtool / Anpassung / Eigenentwicklung)? Welche nicht-KI-Alternative wurde geprüft?
- **AI-Act-Risikoklassifizierung** in vier Stufen mit präziser Logik:
  - 🚫 Unzulässig — Art. 5 Abs. 1 vollständig: lit. a–h plus die durch VO (EU) 2026/1744 eingefügten lit. ba und bb (zehn Verbote)
  - ⚠️ Hochrisiko — Anhang III mit Filter Art. 6 Abs. 3 (vier Ausnahmetatbestände, Profiling-Override)
  - 💬 Begrenztes Risiko — Art. 50 mit Offensichtlich-Ausnahme (Abs. 1 Satz 2) und Deepfake-Differenzierung (Abs. 4)
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
- **Keine MDR/IVDR-Prüfung.** Für KI-basierte Medizinprodukte gelten zusätzlich MDR/IVDR und ISO 13485. Das Tool weist darauf hin, ersetzt die Prüfung aber nicht.
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
| 5 | Hochrisiko + Art. 50 + GPAI | Anhang-III-Bereiche, Art.-6-Abs.-3-Ausnahmen, Foundation-Model-Rolle, Transparenzfragen |
| 6 | Governance | Sponsor, Legal, Betriebsrat, Human Oversight |
| 7 | Ergebnis | Klassifizierung, Geltungsdaten-Zeitleiste, nächste Schritte, Briefing, Export |

Bei einem Verbotstreffer in Schritt 4 springt das Tool direkt zum Ergebnis — die nachfolgenden Fragen erübrigen sich.

---

## Klassifizierungslogik

```
1. Art. 5 Abs. 1 lit. a–h, ba, bb Verbote? → UNZULÄSSIG (früher Ausstieg)
2. Anhang III Hochrisiko-Bereich?
   → Filter Art. 6 Abs. 3: Ausnahme angeklickt + kein Profiling? → Klassifizierung fällt
   → sonst: HOCHRISIKO
3. Art. 50 Transparenzpflichten?
   → Interaktion + offensichtlich? → keine Begrenzt-Klassifizierung allein wegen Interaktion
   → GenAI ja oder nicht-offensichtliche Interaktion? → BEGRENZTES RISIKO
4. Sonst → MINIMALES RISIKO
```

GPAI-Status wird parallel zur Klassifikation erhoben und löst eigene Hinweise aus, unabhängig von der Risikoklasse.

DSGVO Art. 22 prüft das Tool heuristisch: Vollautomatisch + personenbezogene Daten + Wirkung auf Personen → eigener Alert mit Schutzpflichten.

---

## Nutzung

### Sofort starten

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
  "meta": { "tool": "KI Use-Case Bewertung", "version": "1.2", "exported_at": "..." },
  "wertbeitrag": { "wertbeitrag": "...", "reifegrad": "...", "alternative": "..." },
  "problem": { "text": "...", "bereich": "...", "nutzer": ["..."], "kpi": "..." },
  "daten": { "personenbezogen": "ja|nein", "arten": ["..."], "verfuegbar": "..." },
  "aiact": {
    "verbotene_praktiken": { "manipulation_lit_a": "...", ..., "csam_lit_bb": "..." },
    "hochrisiko_kategorien": ["..."],
    "art6_abs3_ausnahme": { "a_eng_begrenzte_aufgabe": false, ..., "ausnahme_greift": false },
    "transparenzpflichten": { "interaktion": "...", "interaktion_offensichtlich": "...", "genai": "...", "deepfake": "..." },
    "gpai": { "genutzt": "...", "rolle": "..." },
    "risikoklasse": { "class": "...", "label": "...", "beschreibung": "..." }
  },
  "governance": { "sponsor": "...", "legal": "...", "betriebsrat": "...", "oversight": "..." },
  "naechste_schritte": ["..."],
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

- Stand der Auslegung: August 2026, inklusive der Verordnung (EU) 2026/1744 („Digital Omnibus on AI", in Kraft seit 27.07.2026): zwei neue Verbote (Art. 5 Abs. 1 lit. ba/bb), Hochrisiko-Pflichten für Anhang-III-Systeme verschoben auf 02.12.2027, Anhang I auf 02.08.2028; Art. 50 gilt unverändert seit 02.08.2026.
- Die Kommissions-Leitlinien zur Hochrisiko-Einstufung nach Art. 6 Abs. 5 liegen seit 19.05.2026 als Entwurf vor, sind aber nicht final — das Tool weist darauf hin und empfiehlt restriktive Auslegung.
- Art. 5 Abs. 1 lit. f und g (Emotionserkennung, biometrische Kategorisierung) haben Ausnahmetatbestände (medizinische Zwecke, Sicherheit, Strafverfolgung). Das Tool fragt das nicht im Detail ab.
- Anhang III Nr. 4 und Nr. 5 (Beschäftigung, wesentliche Dienste) hängen am Tatbestand „wesentliche Beeinflussung der Entscheidung". Bei Grenzfällen: Legal hinzuziehen.
- Marktaufsicht prüft die **faktische Wirkung**, nicht die im Tool angegebene Zweckbestimmung.

### Keine automatische Aktualisierung

Statische HTML-Datei. Wenn sich Rechtslage ändert (neue Leitlinien, Digital Omnibus, Delegierte Rechtsakte), muss die Klassifizierungslogik manuell angepasst werden. Versionsstand im Meta-Block des JSON-Exports.

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
- Regulatorische Grundlage: EU AI Act (Verordnung 2024/1689, geändert durch Verordnung (EU) 2026/1744), DSGVO, BetrVG, GPAI Code of Practice (10. Juli 2025)

---

## Versionshistorie

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
