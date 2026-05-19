[中文版本 →](../../../zh/projects/project-04-incremental-indexing/)

> Zugehörige Lektionen: [Lektion 07. Klare Aufgabengrenzen für Agenten ziehen](./../../lectures/lecture-07-why-agents-overreach-and-under-finish/index.md) · [Lektion 08. Feature-Listen nutzen, um Agentenarbeit zu begrenzen](./../../lectures/lecture-08-why-feature-lists-are-harness-primitives/index.md)
> Vorlagendateien: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/de/resources/templates/)

# Projekt 04. Runtime-Feedback nutzen, um Agentenverhalten zu korrigieren

## Was du tust

Füge Runtime-Beobachtbarkeit hinzu, etwa Startlogs, Import-/Indexierungslogs und Fehlerzustände, sowie Architekturregeln, um Verstöße zwischen Schichten zu verhindern. Baue einen Runtime-Bug ein, den der Agent beheben soll.

Du führst es zweimal aus: zuerst ohne Logs oder Regeln, dann mit passenden Werkzeugen und Regeln.

## Werkzeuge

- Claude Code oder Codex
- Git
- Node.js + Electron

## Harness-Mechanismus

Runtime-Feedback + Scope-Kontrolle + inkrementelle Indexierung
