import {
  FEATURED_COURSE_SLUG,
  getCourseManifestBySlug,
} from "./course-registry.mjs";
import { getPrimaryLocaleForManifest } from "./course-routes.mjs";

export function resolveCourseLocale(slug, locale) {
  const manifest = getCourseManifestBySlug(slug);
  if (!manifest) return locale;

  return manifest.homeByLocale[locale]
    ? locale
    : getPrimaryLocaleForManifest(manifest);
}

export function getCourseHomeForCourse(slug, locale) {
  const manifest = getCourseManifestBySlug(slug);
  if (!manifest) return null;

  return manifest.homeByLocale[resolveCourseLocale(slug, locale)];
}

export function getCourseHome(locale) {
  return getCourseHomeForCourse(FEATURED_COURSE_SLUG, locale);
}
