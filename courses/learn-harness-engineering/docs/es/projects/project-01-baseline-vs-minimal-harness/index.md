[中文版本 →](../../../zh/projects/project-01-baseline-vs-minimal-harness/)

> Lecciones relacionadas: [Lección 01. Los modelos fuertes no significan ejecución fiable](./../../lectures/lecture-01-why-capable-agents-still-fail/index.md) · [Lección 02. Qué significa realmente harness](./../../lectures/lecture-02-what-a-harness-actually-is/index.md)
> Archivos de plantilla: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/es/resources/templates/)

# Proyecto 01. Solo prompt vs reglas primero: cuánta diferencia produce

## Qué harás

Construye el esqueleto mínimo de una aplicación Electron de base de conocimiento: una ventana con lista de documentos a la izquierda, panel de Q&A a la derecha y un directorio de datos local. La tarea no es compleja. Lo complejo es cómo consigues que el agente la complete.

La ejecutarás dos veces. Primera vez: solo un prompt, sin preparación. Segunda vez: con `AGENTS.md`, `init.sh` y `feature_list.json` ya colocados en el repositorio. Luego compara.

El núcleo de este proyecto no es escribir código, sino descubrir cuánta distancia hay entre "dedicar 15 minutos a preparar reglas primero" y "dejar que el agente avance sin más".

## Herramientas

- Claude Code o Codex (elige uno y úsalo en ambas ejecuciones)
- Git (gestionar ramas y comparar)
- Node.js + Electron (stack del proyecto)
- Un temporizador (registrar la duración de cada ejecución)

## Mecanismo de harness

Harness mínimo: `AGENTS.md` + `init.sh` + `feature_list.json`
