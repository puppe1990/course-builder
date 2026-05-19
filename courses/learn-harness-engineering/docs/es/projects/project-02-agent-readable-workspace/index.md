[中文版本 →](../../../zh/projects/project-02-agent-readable-workspace/)

> Lecciones relacionadas: [Lección 03. Convierte el repositorio en tu única fuente de verdad](./../../lectures/lecture-03-why-the-repository-must-become-the-system-of-record/index.md) · [Lección 04. Divide las instrucciones en varios archivos](./../../lectures/lecture-04-why-one-giant-instruction-file-fails/index.md)
> Archivos de plantilla: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/es/resources/templates/)

# Proyecto 02. Haz el proyecto legible y retoma el trabajo donde lo dejaste

## Qué harás

Añade "legibilidad" al repositorio para que un agente nuevo pueda entender rápidamente la estructura del proyecto, conocer el progreso actual y retomar el trabajo. En concreto: implementa importación de documentos, vista de detalle y persistencia local, completado en dos sesiones.

Lo ejecutarás dos veces: primero sin ayuda, y después con `ARCHITECTURE.md`, `PRODUCT.md` y `session-handoff.md` ya colocados en el repositorio.

## Herramientas

- Claude Code o Codex
- Git
- Node.js + Electron

## Mecanismo de harness

Workspace legible para el agente + archivos de estado persistentes
