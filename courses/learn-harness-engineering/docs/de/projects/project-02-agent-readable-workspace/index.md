[中文版本 →](../../../zh/projects/project-02-agent-readable-workspace/)

> Zugehörige Lektionen: [Lektion 03. Mache das Repository zur einzigen Quelle der Wahrheit](./../../lectures/lecture-03-why-the-repository-must-become-the-system-of-record/index.md) · [Lektion 04. Teile Anweisungen auf mehrere Dateien auf](./../../lectures/lecture-04-why-one-giant-instruction-file-fails/index.md)
> Vorlagendateien: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/de/resources/templates/)

# Projekt 02. Das Projekt lesbar machen und dort weiterarbeiten, wo du aufgehört hast

## Was du tust

Füge dem Repository "Lesbarkeit" hinzu, damit ein neuer Agent die Projektstruktur schnell versteht, den aktuellen Fortschritt kennt und Arbeit aufnehmen kann. Konkret: Implementiere Dokumentimport, Detailansicht und lokale Persistenz über zwei Sessions hinweg.

Du führst es zweimal aus: zuerst ohne Hilfe, dann mit bereits abgelegten `ARCHITECTURE.md`, `PRODUCT.md` und `session-handoff.md`.

## Werkzeuge

- Claude Code oder Codex
- Git
- Node.js + Electron

## Harness-Mechanismus

Agent-lesbarer Workspace + persistente Zustandsdateien
