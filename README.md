# course-builder

Reusable VitePress course builder. The repository contains the builder only; course source content can live outside the repo and is mirrored into `docs/courses/` during local dev and build.

## How it works

- external course source directory: `../course-builder-courses` by default
- override source directory: `COURSE_SOURCE_DIR=/absolute/or/relative/path`
- manifest contract per course: `<course-dir>/course.manifest.mjs`
- markdown content per course: `<course-dir>/docs/<locale>/...`
- generated mirror used by VitePress: `docs/courses/<slug>/`
- generated runtime registry: `docs/.vitepress/generated-course-data.mjs`

The published site exposes:

- root catalog at `/`
- one route tree per course at `/courses/<slug>/<locale>/...`

## Commands

```bash
npm install
npm run courses:sync
npm test
npm run docs:dev
npm run docs:build
```

Useful course commands:

```bash
npm run course:list
npm run course:new -- my-course "My Course"
npm run course:activate -- my-course
```

## External course layout

Each external course directory should look like:

```text
course-builder-courses/
  my-course/
    course.manifest.mjs
    docs/
      index.md
      en/
        index.md
        lectures/
        projects/
        resources/
        skills/
```

## Notes

- `courses/` inside this repo is ignored and should not be used as the source of truth.
- `docs/courses/` and generated registry files are local build artifacts and are ignored.
- `npm test`, `npm run docs:dev`, and `npm run docs:build` sync external courses before running.
