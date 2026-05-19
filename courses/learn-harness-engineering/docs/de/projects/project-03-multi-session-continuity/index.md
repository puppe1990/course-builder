[中文版本 →](../../../zh/projects/project-03-multi-session-continuity/)

> Zugehörige Lektionen: [Lektion 05. Kontext über Sessions hinweg lebendig halten](./../../lectures/lecture-05-why-long-running-tasks-lose-continuity/index.md) · [Lektion 06. Vor jeder Agenten-Session initialisieren](./../../lectures/lecture-06-why-initialization-needs-its-own-phase/index.md)
> Vorlagendateien: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/de/resources/templates/)

# Projekt 03. Den Agenten über Session-Neustarts hinweg weiterarbeiten lassen

## Was du tust

Füge dem Agenten Scope-Kontrolle und Verifikationsgates hinzu. Implementiere Dokument-Chunking, Metadatenextraktion, Indexierungsfortschritt und einen Q&A-Flow mit Zitaten. Nutze `feature_list.json`, um Feature-Status zu verfolgen: ein Feature nach dem anderen, kein `pass` ohne Verifikationsnachweis.

Du führst es zweimal aus: zuerst ohne Einschränkungen, dann mit strikter Durchsetzung.

## Werkzeuge

- Claude Code oder Codex
- Git
- Node.js + Electron

## Harness-Mechanismus

Fortschrittslog + Session-Handoff + Multi-Session-Kontinuität
