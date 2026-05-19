[中文版本 →](../../../zh/projects/project-04-incremental-indexing/)

> Lecciones relacionadas: [Lección 07. Define límites claros de tarea para los agentes](./../../lectures/lecture-07-why-agents-overreach-and-under-finish/index.md) · [Lección 08. Usa listas de funciones para restringir lo que hace el agente](./../../lectures/lecture-08-why-feature-lists-are-harness-primitives/index.md)
> Archivos de plantilla: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/es/resources/templates/)

# Proyecto 04. Usa feedback de runtime para corregir el comportamiento del agente

## Qué harás

Añade observabilidad de runtime, como logs de arranque, logs de importación/indexación y estados de error, además de restricciones arquitectónicas para evitar violaciones entre capas. Introduce un bug de runtime para que el agente lo corrija.

Lo ejecutarás dos veces: primero sin logs ni restricciones, después con herramientas y reglas adecuadas.

## Herramientas

- Claude Code o Codex
- Git
- Node.js + Electron

## Mecanismo de harness

Feedback de runtime + control de alcance + indexación incremental
