[中文版本 →](../../../zh/projects/project-03-multi-session-continuity/)

> Lecciones relacionadas: [Lección 05. Mantén vivo el contexto entre sesiones](./../../lectures/lecture-05-why-long-running-tasks-lose-continuity/index.md) · [Lección 06. Inicializa antes de cada sesión del agente](./../../lectures/lecture-06-why-initialization-needs-its-own-phase/index.md)
> Archivos de plantilla: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/es/resources/templates/)

# Proyecto 03. Mantén al agente trabajando tras reiniciar sesiones

## Qué harás

Añade control de alcance y gates de verificación al agente. Implementa particionado de documentos, extracción de metadatos, visualización del progreso de indexación y flujo de Q&A con citas. Usa `feature_list.json` para seguir el estado de las funciones: una función a la vez, sin marcar `pass` sin evidencia de verificación.

Lo ejecutarás dos veces: primero sin restricciones, luego con aplicación estricta de reglas.

## Herramientas

- Claude Code o Codex
- Git
- Node.js + Electron

## Mecanismo de harness

Registro de progreso + handoff de sesión + continuidad multi-sesión
