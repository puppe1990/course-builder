# course-builder

Whitelabel VitePress course builder with multi-course manifest support.

This repository is no longer only the `Learn Harness Engineering` course. It now contains:

- a reusable VitePress course platform
- one active course selected at build time
- multiple course manifests under `courses/`

## Current structure

- active course selector: [docs/.vitepress/active-course.mjs](/Users/matheuspuppe/Desktop/estudo/course-builder/docs/.vitepress/active-course.mjs:1)
- active-course wrapper: [docs/.vitepress/course.manifest.mjs](/Users/matheuspuppe/Desktop/estudo/course-builder/docs/.vitepress/course.manifest.mjs:1)
- course manifests:
  - [courses/learn-harness-engineering/course.manifest.mjs](/Users/matheuspuppe/Desktop/estudo/course-builder/courses/learn-harness-engineering/course.manifest.mjs:1)
  - [courses/agent-ops-bootcamp/course.manifest.mjs](/Users/matheuspuppe/Desktop/estudo/course-builder/courses/agent-ops-bootcamp/course.manifest.mjs:1)

## Commands

```bash
npm install
npm test
npm run docs:build
npm run docs:dev
```

To inspect and switch courses:

```bash
npm run course:list
npm run course:activate -- learn-harness-engineering
npm run course:activate -- agent-ops-bootcamp
```

## How it works

Each course manifest defines:

- `site`
- `brand`
- `theme`
- `locales`
- `curriculum`
- `homeByLocale`

The VitePress layer reads the active manifest and builds nav, sidebar, branding, and homepage from it.

## Creating a new course

1. Create `courses/<slug>/course.manifest.mjs`.
2. Start from one of the existing manifests.
3. Define the course `site`, `brand`, `theme`, `locales`, `curriculum`, and `homeByLocale`.
4. Switch to it with `npm run course:activate -- <slug>`.
5. Update `docs/` markdown content so it matches the new curriculum.

## Current limitations

- only one course is active per build
- `docs/` content is still mostly from `Learn Harness Engineering`
- the current manifest format is code-first, not CMS-driven
- the public docs URLs still depend on each course's configured `site.base`

## Validation

The repo currently validates:

- manifest loading
- branding token generation
- locale-aware navigation generation
- alternate course manifest loading
- full VitePress production build

## Notes

The second course, `agent-ops-bootcamp`, exists mainly as an architectural proof that the platform can host distinct branding and curriculum in the same repo.
