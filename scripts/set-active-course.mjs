import fs from "node:fs";
import {
  externalCoursesDir,
  featuredCourseConfigFile,
  getDocsPath,
  getManifestPath,
} from "./course-source-config.mjs";

function listCourseSlugs() {
  if (!fs.existsSync(externalCoursesDir)) return [];

  return fs
    .readdirSync(externalCoursesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((slug) => fs.existsSync(getManifestPath(slug)))
    .sort();
}

function printUsage() {
  console.log("Usage:");
  console.log("  npm run course:list");
  console.log("  npm run course:activate -- <course-slug>");
  console.log("");
  console.log(
    "Sets the featured course used by compatibility wrappers and catalog ordering.",
  );
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

const courseDocsDir = getDocsPath(slug);

if (!fs.existsSync(courseDocsDir)) {
  console.error(`Course is missing docs directory: ${courseDocsDir}`);
  process.exit(1);
}

fs.writeFileSync(
  featuredCourseConfigFile,
  `${JSON.stringify({ slug }, null, 2)}\n`,
  "utf8",
);
console.log(`Featured course set to: ${slug}`);
