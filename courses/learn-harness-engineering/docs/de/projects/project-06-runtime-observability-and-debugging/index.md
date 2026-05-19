[中文版本 →](../../../zh/projects/project-06-runtime-observability-and-debugging/)

> Zugehörige Lektionen: [Lektion 11. Die Runtime des Agenten beobachtbar machen](./../../lectures/lecture-11-why-observability-belongs-inside-the-harness/index.md) · [Lektion 12. Sauberes Handoff am Ende jeder Session](./../../lectures/lecture-12-why-every-session-must-leave-a-clean-state/index.md)
> Vorlagendateien: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/de/resources/templates/)

# Projekt 06. Einen vollständigen Agenten-harness bauen (Capstone)

## Was du tust

Dies ist das Abschlussprojekt. Setze alles zusammen, was du in den ersten fünf Projekten gelernt hast, führe einen vollständigen Benchmark aus und mache danach einen Cleanup-Pass, um zu prüfen, ob die Qualität wartbar bleibt.

Nutze ein festes Multi-Feature-Aufgabenset, das einen vollständigen Produktschnitt abdeckt: Dokumentimport, Indexierung, Q&A mit Zitaten, Runtime-Beobachtbarkeit und einen lesbaren, wiederaufnehmbaren Repository-Zustand. Führe zuerst einen schwachen harness-Baseline-Lauf aus, dann deinen stärksten harness, danach Cleanup und erneuten Lauf. Zum Schluss machst du ein harness-Ablationsexperiment: Entferne jeweils eine Komponente und beobachte, welche wirklich wichtig sind.

## Werkzeuge

- Claude Code oder Codex
- Git
- Node.js + Electron
- Vorlage für Qualitätsdokument
- Evaluator-Rubrik
- Alle harness-Komponenten aus den ersten fünf Projekten

## Harness-Mechanismus

Vollständiger harness: alle Mechanismen + Beobachtbarkeit + Ablationsstudie
