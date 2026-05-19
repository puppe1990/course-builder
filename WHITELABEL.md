# Whitelabel Guide

O projeto agora está estruturado para suportar múltiplos cursos com um curso ativo definido pela camada VitePress.

## Estrutura atual

- curso ativo: [docs/.vitepress/active-course.mjs](/Users/matheuspuppe/Desktop/estudo/course-builder/docs/.vitepress/active-course.mjs:1)
- manifesto do curso atual: [courses/learn-harness-engineering/course.manifest.mjs](/Users/matheuspuppe/Desktop/estudo/course-builder/courses/learn-harness-engineering/course.manifest.mjs:1)
- wrappers compatíveis com a camada antiga:
  - [docs/.vitepress/course.config.mjs](/Users/matheuspuppe/Desktop/estudo/course-builder/docs/.vitepress/course.config.mjs:1)
  - [docs/.vitepress/course-content.mjs](/Users/matheuspuppe/Desktop/estudo/course-builder/docs/.vitepress/course-content.mjs:1)
  - [docs/.vitepress/course-curriculum.mjs](/Users/matheuspuppe/Desktop/estudo/course-builder/docs/.vitepress/course-curriculum.mjs:1)
  - [docs/.vitepress/course-locales.mjs](/Users/matheuspuppe/Desktop/estudo/course-builder/docs/.vitepress/course-locales.mjs:1)

## O que já está desacoplado

- branding visual do site
- config base do VitePress
- manifesto de locales e labels de UI
- currículo por locale
- conteúdo da homepage por locale
- seleção do curso ativo

## Como criar outro curso

1. Crie uma pasta `courses/<slug>/`.
2. Copie [courses/learn-harness-engineering/course.manifest.mjs](/Users/matheuspuppe/Desktop/estudo/course-builder/courses/learn-harness-engineering/course.manifest.mjs:1) para o novo slug.
3. Edite no manifesto:
   - `site.title`
   - `site.description`
   - `site.base`
   - `site.repoTreeUrl`
   - `brand.logo`
   - `theme.*`
   - `locales`
   - `curriculum`
   - `homeByLocale`
4. Aponte [docs/.vitepress/active-course.mjs](/Users/matheuspuppe/Desktop/estudo/course-builder/docs/.vitepress/active-course.mjs:1) para o novo manifesto.
5. Reescreva o conteúdo real em `docs/<locale>/` para bater com o currículo do novo curso.

Ou use os comandos:

- `npm run course:list`
- `npm run course:activate -- <slug>`

## Limitações atuais

- o conteúdo markdown em `docs/` ainda é do curso `Learn Harness Engineering`
- o manifesto do curso atual ainda concentra muito conteúdo inline
- ainda existe apenas um curso ativo por build
- `README.md` ainda descreve o curso atual, não a plataforma
