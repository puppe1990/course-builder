import {
  COURSE_REGISTRY,
  FEATURED_COURSE_SLUG,
} from "./generated-course-data.mjs";

export { COURSE_REGISTRY, FEATURED_COURSE_SLUG };

export function getAllCourses() {
  return [...COURSE_REGISTRY];
}

export function getCourseEntryBySlug(slug) {
  return COURSE_REGISTRY.find((course) => course.slug === slug) || null;
}

export function getCourseManifestBySlug(slug) {
  return getCourseEntryBySlug(slug)?.manifest || null;
}

export function getFeaturedCourseManifest() {
  return (
    getCourseManifestBySlug(FEATURED_COURSE_SLUG) ||
    COURSE_REGISTRY[0]?.manifest ||
    null
  );
}

export function getPlatformConfig() {
  const sharedBase =
    COURSE_REGISTRY.find((course) => course.manifest.site.base)?.manifest.site
      .base || "/course-builder/";
  const sharedRepoTreeUrl =
    COURSE_REGISTRY.find((course) => course.manifest.site.repoTreeUrl)?.manifest
      .site.repoTreeUrl ||
    "https://github.com/puppe1990/course-builder/tree/main";

  return {
    site: {
      title: "Course Builder",
      description:
        "Reusable VitePress course builder that can publish multiple externally sourced courses in one build.",
      base: sharedBase,
      repoTreeUrl: sharedRepoTreeUrl,
    },
    brand: {
      logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23111827" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 7.5h15v9h-15z"/><path d="M8 7.5V5h8v2.5"/><path d="M8 12h8"/><path d="M12 7.5V16.5"/></svg>',
    },
  };
}

export function getAllFontStylesheets() {
  return [
    ...new Set(
      COURSE_REGISTRY.flatMap(
        (course) => course.manifest.theme.fontStylesheets || [],
      ),
    ),
  ];
}
