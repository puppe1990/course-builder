import courseManifest from "./course.manifest.mjs";

export function getLocaleEntries() {
  return courseManifest.locales;
}
