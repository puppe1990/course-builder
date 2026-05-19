[中文版本 →](../../../zh/projects/project-05-grounded-qa-verification/)

> Zugehörige Lektionen: [Lektion 09. Agenten daran hindern, zu früh Erfolg zu melden](./../../lectures/lecture-09-why-agents-declare-victory-too-early/index.md) · [Lektion 10. Nur ein vollständiger Pipeline-Lauf zählt als echte Verifikation](./../../lectures/lecture-10-why-end-to-end-testing-changes-results/index.md)
> Vorlagendateien: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/de/resources/templates/)

# Projekt 05. Den Agenten seine eigene Arbeit verifizieren lassen

## Was du tust

Implementiere Rollentrennung: einen generator für die Umsetzung, einen evaluator für die Prüfung und optional einen planner. Führe drei Läufe durch, um den Effekt jeder zusätzlichen Rolle zu messen.

Wähle eine substanzielle Feature-Erweiterung, etwa Multi-Turn-Konversation, Neugestaltung des Zitat-Panels oder Dokumentfilterung, und halte sie über alle Läufe hinweg konstant.

## Werkzeuge

- Claude Code oder Codex
- Git
- Node.js + Electron

## Harness-Mechanismus

Selbstverifikation + begründete Q&A + evidenzbasierter Abschluss
