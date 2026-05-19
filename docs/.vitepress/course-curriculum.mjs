import {
  FEATURED_COURSE_SLUG,
  getCourseManifestBySlug,
} from "./course-registry.mjs";
import { getPrimaryLocale } from "./course-locales.mjs";

export function getLocaleSourceItems(locale, slug = FEATURED_COURSE_SLUG) {
  const manifest = getCourseManifestBySlug(slug);
  if (!manifest) return null;

  return (
    manifest.curriculum[locale] || manifest.curriculum[getPrimaryLocale(slug)]
  );
}
