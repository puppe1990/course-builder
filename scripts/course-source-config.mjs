import path from "node:path";
import process from "node:process";
import fs from "node:fs";

export const repoRoot = process.cwd();
export const defaultExternalCoursesDir = path.resolve(
  repoRoot,
  "../course-builder-courses",
);
export const fallbackFixtureCoursesDir = path.join(
  repoRoot,
  "tests",
  "fixtures",
  "course-source",
);
export const externalCoursesDir = (() => {
  if (process.env.COURSE_SOURCE_DIR) {
    return path.resolve(repoRoot, process.env.COURSE_SOURCE_DIR);
  }

  if (fs.existsSync(defaultExternalCoursesDir)) {
    return defaultExternalCoursesDir;
  }

  return fallbackFixtureCoursesDir;
})();
export const docsCoursesDir = path.join(repoRoot, "docs", "courses");
export const generatedRegistryFile = path.join(
  repoRoot,
  "docs/.vitepress/generated-course-data.mjs",
);
export const featuredCourseConfigFile = path.join(
  repoRoot,
  "docs/.vitepress/featured-course.json",
);

export function getManifestPath(slug) {
  return path.join(externalCoursesDir, slug, "course.manifest.mjs");
}

export function getDocsPath(slug) {
  return path.join(externalCoursesDir, slug, "docs");
}
