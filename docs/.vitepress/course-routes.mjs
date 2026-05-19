import { getAllCourses, getCourseEntryBySlug } from "./course-registry.mjs";

export function getPrimaryLocaleForManifest(manifest) {
  return manifest.locales[0]?.key || "en";
}

export function getCourseBasePath(slug) {
  return `/courses/${slug}/`;
}

export function getCourseLocaleBasePath(slug, locale) {
  return `${getCourseBasePath(slug)}${locale}/`;
}

export function getDefaultCoursePath(slug) {
  const course = getCourseEntryBySlug(slug);
  if (!course) return getCourseBasePath(slug);

  return getCourseLocaleBasePath(
    slug,
    getPrimaryLocaleForManifest(course.manifest),
  );
}

export function matchCourseRoute(routePath = "/") {
  return (
    getAllCourses().find((course) => {
      const basePath = getCourseBasePath(course.slug);
      return routePath === basePath || routePath.startsWith(basePath);
    }) || null
  );
}

export function resolveCourseContextFromPath(routePath = "/") {
  const course = matchCourseRoute(routePath);
  if (!course) return null;

  const basePath = getCourseBasePath(course.slug);
  const locale =
    course.manifest.locales.find((entry) =>
      routePath.startsWith(getCourseLocaleBasePath(course.slug, entry.key)),
    )?.key || getPrimaryLocaleForManifest(course.manifest);

  return {
    ...course,
    locale,
    basePath,
    localeBasePath: getCourseLocaleBasePath(course.slug, locale),
  };
}

export function resolveCourseContextFromRelativePath(relativePath = "") {
  const normalized = relativePath.replace(/\\/g, "/");
  const match = normalized.match(/^courses\/([^/]+)\/([^/]+)\//);
  if (!match) return null;

  const [, slug, locale] = match;
  const course = getCourseEntryBySlug(slug);
  if (!course) return null;

  return {
    ...course,
    locale,
    basePath: getCourseBasePath(slug),
    localeBasePath: getCourseLocaleBasePath(slug, locale),
  };
}
