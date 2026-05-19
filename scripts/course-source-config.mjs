import path from "node:path";
import process from "node:process";

export const repoRoot = process.cwd();
export const externalCoursesDir = path.resolve(
  repoRoot,
  process.env.COURSE_SOURCE_DIR || "../course-builder-courses",
);
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
