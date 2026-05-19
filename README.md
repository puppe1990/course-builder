# course-builder

Whitelabel VitePress course builder with multi-course manifest support.

This repository is no longer only the `Learn Harness Engineering` course. It now contains:

- a reusable VitePress course platform
- one active course selected at build time
- multiple course manifests under `courses/`
- isolated course content under `courses/<slug>/docs`

## Current structure

- active course selector: [docs/.vitepress/active-course.mjs](/Users/matheuspuppe/Desktop/estudo/course-builder/docs/.vitepress/active-course.mjs:1)
- active-course wrapper: [docs/.vitepress/course.manifest.mjs](/Users/matheuspuppe/Desktop/estudo/course-builder/docs/.vitepress/course.manifest.mjs:1)
- builder shell: [docs/.vitepress/config.mts](/Users/matheuspuppe/Desktop/estudo/course-builder/docs/.vitepress/config.mts:1)
- course manifests:
  - [courses/learn-harness-engineering/course.manifest.mjs](/Users/matheuspuppe/Desktop/estudo/course-builder/courses/learn-harness-engineering/course.manifest.mjs:1)
  - [courses/agent-ops-bootcamp/course.manifest.mjs](/Users/matheuspuppe/Desktop/estudo/course-builder/courses/agent-ops-bootcamp/course.manifest.mjs:1)
- course content roots:
  - [courses/learn-harness-engineering/docs](/Users/matheuspuppe/Desktop/estudo/course-builder/courses/learn-harness-engineering/docs:1)
  - [courses/agent-ops-bootcamp/docs](/Users/matheuspuppe/Desktop/estudo/course-builder/courses/agent-ops-bootcamp/docs:1)

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
npm run course:new -- my-new-course "My New Course"
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

The VitePress layer reads the active manifest and points `srcDir` at that course's own `docs` directory. Nav, sidebar, branding, homepage, and markdown content all come from the active course.

## Creating a new course

1. Create `courses/<slug>/course.manifest.mjs`.
2. Or scaffold both manifesto and docs with `npm run course:new -- <slug> "Course Title"`.
3. Create `courses/<slug>/docs/` if you did not use the scaffold command.
4. Define the course `site`, `brand`, `theme`, `locales`, `curriculum`, and `homeByLocale`.
5. Add markdown content under `courses/<slug>/docs/<locale>/...` to match the curriculum.
6. Switch to it with `npm run course:activate -- <slug>`.

## Current limitations

- only one course is active per build
- the current manifest format is code-first, not CMS-driven
- only one course is active per build

## Validation

The repo currently validates:

- manifest loading
- branding token generation
- locale-aware navigation generation
- alternate course manifest loading
- full VitePress production build

## Notes

The second course, `agent-ops-bootcamp`, exists mainly as an architectural proof that the platform can host distinct branding and curriculum in the same repo.
