import courseManifest from "./course.manifest.mjs";

export function resolveCourseLocale(locale) {
  return courseManifest.homeByLocale[locale] ? locale : "en";
}

export function getCourseHome(locale) {
  return courseManifest.homeByLocale[resolveCourseLocale(locale)];
}
