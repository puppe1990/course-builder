import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import {
  docsCoursesDir,
  externalCoursesDir,
  featuredCourseConfigFile,
  generatedRegistryFile,
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

async function readManifest(slug) {
  const moduleUrl = pathToFileURL(getManifestPath(slug)).href;
  const imported = await import(moduleUrl);
  return imported.default;
}

function ensureDirectory(targetPath) {
  fs.mkdirSync(targetPath, { recursive: true });
}

function clearDirectory(targetPath) {
  fs.rmSync(targetPath, { recursive: true, force: true });
  fs.mkdirSync(targetPath, { recursive: true });
}

function syncCourseDirectory(slug) {
  const source = getDocsPath(slug);
  const target = path.join(docsCoursesDir, slug);

  clearDirectory(target);
  fs.cpSync(source, target, {
    recursive: true,
    force: true,
  });
}

function readFeaturedSlug(courseSlugs) {
  if (!fs.existsSync(featuredCourseConfigFile)) {
    return courseSlugs[0] || null;
  }

  try {
    const { slug } = JSON.parse(
      fs.readFileSync(featuredCourseConfigFile, "utf8"),
    );
    if (courseSlugs.includes(slug)) return slug;
  } catch {
    // Ignore invalid local config and fall back below.
  }

  return courseSlugs[0] || null;
}

function writeFeaturedSlug(slug) {
  fs.writeFileSync(
    featuredCourseConfigFile,
    `${JSON.stringify({ slug }, null, 2)}\n`,
    "utf8",
  );
}

function relativeImport(fromFile, toFile) {
  const relativePath = path
    .relative(path.dirname(fromFile), toFile)
    .replace(/\\/g, "/");
  return relativePath.startsWith(".") ? relativePath : `./${relativePath}`;
}

function buildGeneratedRegistry({ slugs, featuredSlug }) {
  const importLines = slugs.map((slug, index) => {
    const importPath = relativeImport(
      generatedRegistryFile,
      getManifestPath(slug),
    );
    return `import manifest${index} from "${importPath}";`;
  });

  const entries = slugs.map((slug, index) => {
    return `  { slug: "${slug}", manifest: manifest${index} },`;
  });

  return `${importLines.join("\n")}

export const FEATURED_COURSE_SLUG = ${featuredSlug ? `"${featuredSlug}"` : "null"};

export const COURSE_REGISTRY = [
${entries.join("\n")}
];
`;
}

async function main() {
  ensureDirectory(docsCoursesDir);

  const slugs = listCourseSlugs();
  const featuredSlug = readFeaturedSlug(slugs);

  if (featuredSlug) {
    writeFeaturedSlug(featuredSlug);
  }

  clearDirectory(docsCoursesDir);

  for (const slug of slugs) {
    await readManifest(slug);
    syncCourseDirectory(slug);
  }

  fs.writeFileSync(
    generatedRegistryFile,
    buildGeneratedRegistry({ slugs, featuredSlug }),
    "utf8",
  );

  console.log(
    `Synced ${slugs.length} external course directories into docs/courses.`,
  );
  console.log(`Course source directory: ${externalCoursesDir}`);
}

await main();
