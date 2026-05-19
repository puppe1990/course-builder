import courseManifest from "./course.manifest.mjs";

export function getLocaleSourceItems(locale) {
  return courseManifest.curriculum[locale] || courseManifest.curriculum.en;
}
