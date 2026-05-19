[中文版本 →](../../../zh/projects/project-01-baseline-vs-minimal-harness/)

> Zugehörige Lektionen: [Lektion 01. Starke Modelle bedeuten keine zuverlässige Ausführung](./../../lectures/lecture-01-why-capable-agents-still-fail/index.md) · [Lektion 02. Was harness wirklich bedeutet](./../../lectures/lecture-02-what-a-harness-actually-is/index.md)
> Vorlagendateien: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/de/resources/templates/)

# Projekt 01. Nur Prompt vs Regeln zuerst: Wie groß ist der Unterschied?

## Was du tust

Baue das minimale Gerüst einer Electron-Wissensdatenbank-App: ein Fenster mit Dokumentliste links, Q&A-Panel rechts und lokalem Datenverzeichnis. Die Aufgabe selbst ist nicht komplex. Komplex ist, wie du den Agenten dazu bringst, sie zuverlässig abzuschließen.

Du führst sie zweimal aus. Beim ersten Mal: nur ein Prompt, keine Vorbereitung. Beim zweiten Mal: `AGENTS.md`, `init.sh` und `feature_list.json` liegen bereits im Repository. Danach vergleichst du.

Der Kern dieses Projekts ist nicht das Schreiben von Code, sondern herauszufinden, wie groß der Abstand zwischen "15 Minuten Regeln vorbereiten" und "den Agenten einfach loslaufen lassen" ist.

## Werkzeuge

- Claude Code oder Codex (wähle eines und nutze es für beide Läufe)
- Git (Branches verwalten und vergleichen)
- Node.js + Electron (Projektstack)
- Ein Timer (Dauer jedes Laufs erfassen)

## Harness-Mechanismus

Minimaler harness: `AGENTS.md` + `init.sh` + `feature_list.json`
