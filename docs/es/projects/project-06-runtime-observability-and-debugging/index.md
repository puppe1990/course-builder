[中文版本 →](../../../zh/projects/project-06-runtime-observability-and-debugging/)

> Lecciones relacionadas: [Lección 11. Haz observable el runtime del agente](./../../lectures/lecture-11-why-observability-belongs-inside-the-harness/index.md) · [Lección 12. Handoff limpio al final de cada sesión](./../../lectures/lecture-12-why-every-session-must-leave-a-clean-state/index.md)
> Archivos de plantilla: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/es/resources/templates/)

# Proyecto 06. Construye un harness completo para agentes (capstone)

## Qué harás

Este es el proyecto final. Ensambla todo lo aprendido en los primeros cinco proyectos, ejecuta un benchmark completo y luego haz una pasada de limpieza para verificar que la calidad sea mantenible.

Usa un conjunto fijo de tareas multi-función que cubra una porción completa del producto: importación de documentos, indexación, Q&A con citas, observabilidad de runtime y estado de repositorio legible y reiniciable. Primero ejecuta con un baseline de harness débil, luego con tu harness más fuerte, después limpia y vuelve a ejecutar. Finalmente, realiza un experimento de ablación del harness: elimina un componente cada vez y observa cuáles importan realmente.

## Herramientas

- Claude Code o Codex
- Git
- Node.js + Electron
- Plantilla de documento de calidad
- Rúbrica de evaluación
- Todos los componentes de harness acumulados en los primeros cinco proyectos

## Mecanismo de harness

Harness completo: todos los mecanismos + observabilidad + estudio de ablación
