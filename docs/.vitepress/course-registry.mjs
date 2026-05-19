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

export function getFallbackTheme() {
  return {
    fontStylesheets: [],
    typography: {
      body: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      heading:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      mono: '"SFMono-Regular", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, monospace',
      mermaid:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    },
    layout: {
      maxWidth: "1200px",
      sidebarWidth: "272px",
      cardRadius: "20px",
    },
    effects: {
      featureShadow: "0 20px 60px rgba(15, 23, 42, 0.10)",
      featureShadowDark: "0 20px 60px rgba(2, 6, 23, 0.45)",
    },
    colors: {
      light: {
        bg: "#fffdf8",
        bgAlt: "#f8fafc",
        bgElevated: "#ffffff",
        bgSoft: "#f1f5f9",
        text2: "#334155",
        divider: "#e2e8f0",
        text1: "#0f172a",
        text3: "#475569",
        brand1: "#0f172a",
        brand2: "#1d4ed8",
        brand3: "#0ea5e9",
        brandSoft: "#dbeafe",
        sidebarBg: "rgba(255, 255, 255, 0.92)",
        navBg: "rgba(255, 253, 248, 0.92)",
      },
      dark: {
        bg: "#020617",
        bgAlt: "#0f172a",
        bgElevated: "#111827",
        bgSoft: "#1e293b",
        text1: "#e2e8f0",
        text2: "#cbd5e1",
        text3: "#94a3b8",
        brand1: "#f8fafc",
        brand2: "#60a5fa",
        brand3: "#38bdf8",
        brandSoft: "rgba(96, 165, 250, 0.18)",
        divider: "rgba(148, 163, 184, 0.24)",
        sidebarBg: "rgba(2, 6, 23, 0.88)",
        navBg: "rgba(15, 23, 42, 0.88)",
      },
    },
  };
}
