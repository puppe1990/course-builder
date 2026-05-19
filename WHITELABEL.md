# Whitelabel Guide

O repositório agora é apenas o builder. Os cursos devem ficar fora dele e entrar no site por sincronização.

## Estrutura

- builder VitePress: `docs/.vitepress/`
- catálogo inicial: `docs/index.md`
- espelho gerado dos cursos: `docs/courses/`
- configuração da fonte externa: `scripts/course-source-config.mjs`
- sincronização: `scripts/sync-course-docs.mjs`

## Fonte dos cursos

Por padrão, o builder procura cursos em:

```bash
../course-builder-courses
```

Você pode trocar isso com:

```bash
COURSE_SOURCE_DIR=../outro-diretorio npm run docs:dev
```

Cada curso externo precisa ter:

1. `course.manifest.mjs`
2. `docs/`
3. conteúdo por locale compatível com o currículo definido no manifest

## Fluxo

1. Crie ou edite o curso fora deste repo.
2. Rode `npm run courses:sync`.
3. Rode `npm run docs:dev` ou `npm run docs:build`.
4. Se quiser mudar o destaque do catálogo, rode `npm run course:activate -- <slug>`.

## Observações

- `courses/` neste repo está no `.gitignore`.
- `docs/courses/` e `docs/.vitepress/generated-course-data.mjs` são artefatos gerados.
- O site continua servindo múltiplos cursos em `/courses/<slug>/<locale>/...`.
