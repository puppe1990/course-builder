import { FEATURED_COURSE_SLUG, getAllCourses } from "./course-registry.mjs";
import {
  getCourseBasePath,
  getCourseLocaleBasePath,
  getPrimaryLocaleForManifest,
} from "./course-routes.mjs";

function getCourseRepoContentUrl(slug, repoTreeUrl) {
  if (!repoTreeUrl) return null;
  return repoTreeUrl.replace(/\/$/, "");
}

function getCurriculumSummary(manifest, locale) {
  const curriculum = manifest.curriculum?.[locale] || {};

  return {
    lectures: curriculum.lectures?.length || 0,
    projects: curriculum.projects?.length || 0,
    resources: curriculum.resources?.length || 0,
  };
}

function buildCourseEntry({ slug, manifest }) {
  const primaryLocale = getPrimaryLocaleForManifest(manifest);

  return {
    slug,
    title: manifest.site.title,
    description: manifest.site.description,
    primaryLocale,
    locales: manifest.locales.map((locale) => ({
      key: locale.key,
      label: locale.label,
      lang: locale.lang,
    })),
    counts: getCurriculumSummary(manifest, primaryLocale),
    repoContentUrl: getCourseRepoContentUrl(slug, manifest.site.repoTreeUrl),
    coursePath: getCourseBasePath(slug),
    homePath: getCourseLocaleBasePath(slug, primaryLocale),
    featured: slug === FEATURED_COURSE_SLUG,
  };
}

export function getCourseCatalog() {
  return getAllCourses()
    .map(buildCourseEntry)
    .sort((left, right) => {
      if (left.featured && !right.featured) return -1;
      if (!left.featured && right.featured) return 1;
      return left.title.localeCompare(right.title, "pt-BR");
    });
}

export function getFeaturedCourseEntry() {
  return (
    getCourseCatalog().find((course) => course.featured) ||
    getCourseCatalog()[0]
  );
}
