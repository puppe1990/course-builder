import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const repoRoot = process.cwd();
const coursesDir = path.join(repoRoot, "courses");
const activeCourseFile = path.join(
  repoRoot,
  "docs/.vitepress/active-course.mjs",
);

function listCourseSlugs() {
  if (!fs.existsSync(coursesDir)) return [];

  return fs
    .readdirSync(coursesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((slug) =>
      fs.existsSync(path.join(coursesDir, slug, "course.manifest.mjs")),
    )
    .sort();
}

function buildActiveCourseModule(slug) {
  return `import courseManifest from "../../courses/${slug}/course.manifest.mjs";

export const ACTIVE_COURSE_SLUG = "${slug}";
export const ACTIVE_COURSE_CONTENT_DIR = "../courses/${slug}/docs";
export const ACTIVE_COURSE_REPO_CONTENT_PREFIX = "courses/${slug}/docs";

export default courseManifest;
`;
}

function printUsage() {
  console.log("Usage:");
  console.log("  npm run course:list");
  console.log("  npm run course:activate -- <course-slug>");
}

const args = process.argv.slice(2);

if (args.includes("--list")) {
  const slugs = listCourseSlugs();
  for (const slug of slugs) {
    console.log(slug);
  }
  process.exit(0);
}

const slug = args[0];

if (!slug) {
  printUsage();
  process.exit(1);
}

const availableCourses = listCourseSlugs();

if (!availableCourses.includes(slug)) {
  console.error(`Unknown course slug: ${slug}`);
  console.error("");
  console.error("Available courses:");
  for (const courseSlug of availableCourses) {
    console.error(`- ${courseSlug}`);
  }
  process.exit(1);
}

const courseDocsDir = path.join(coursesDir, slug, "docs");

if (!fs.existsSync(courseDocsDir)) {
  console.error(`Course is missing docs directory: courses/${slug}/docs`);
  process.exit(1);
}

fs.writeFileSync(activeCourseFile, buildActiveCourseModule(slug), "utf8");
console.log(`Active course set to: ${slug}`);
