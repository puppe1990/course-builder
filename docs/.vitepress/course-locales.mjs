import {
  FEATURED_COURSE_SLUG,
  getCourseManifestBySlug,
} from "./course-registry.mjs";
import { getPrimaryLocaleForManifest } from "./course-routes.mjs";

export function getLocaleEntries(slug = FEATURED_COURSE_SLUG) {
  return getCourseManifestBySlug(slug)?.locales || [];
}

export function getPrimaryLocale(slug = FEATURED_COURSE_SLUG) {
  const manifest = getCourseManifestBySlug(slug);
  if (!manifest) return "en";

  return getPrimaryLocaleForManifest(manifest);
}
