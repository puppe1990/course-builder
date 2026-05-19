import {
  COURSE_REGISTRY,
  FEATURED_COURSE_SLUG,
} from "./generated-course-data.mjs";

export { COURSE_REGISTRY, FEATURED_COURSE_SLUG };

export const DEFAULT_COURSE_MANIFEST = {
  site: {
    title: "Course Builder",
    description:
      "Reusable VitePress course builder that can publish multiple externally sourced courses in one build.",
    base: "/course-builder/",
    repoTreeUrl: "https://github.com/puppe1990/course-builder/tree/main",
  },
  brand: {
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23111827" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 7.5h15v9h-15z"/><path d="M8 7.5V5h8v2.5"/><path d="M8 12h8"/><path d="M12 7.5V16.5"/></svg>',
  },
  theme: {
    fontStylesheets: [
      "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
    ],
    typography: {
      body: "'Plus Jakarta Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      heading:
        "'Newsreader', ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
      mono: "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
      mermaid: "'Plus Jakarta Sans', sans-serif",
    },
    layout: {
      maxWidth: "1280px",
      sidebarWidth: "280px",
      cardRadius: "14px",
    },
    effects: {
      featureShadow: "0 18px 48px rgba(26, 127, 100, 0.14)",
      featureShadowDark: "0 18px 48px rgba(0, 0, 0, 0.4)",
    },
    colors: {
      light: {
        bg: "#F6FBF8",
        bgAlt: "#ECF5F0",
        bgElevated: "#FFFFFF",
        bgSoft: "#ECF5F0",
        text1: "#142019",
        text2: "#355244",
        text3: "#5B7669",
        brand1: "#1A7F64",
        brand2: "#126A53",
        brand3: "#0B5542",
        brandSoft: "rgba(26, 127, 100, 0.12)",
        divider: "rgba(8, 32, 20, 0.1)",
        sidebarBg: "#ECF5F0",
        navBg: "#F6FBF8",
      },
      dark: {
        bg: "#0E1712",
        bgAlt: "#0A120D",
        bgElevated: "#17221C",
        bgSoft: "#0A120D",
        text1: "#E7F2EC",
        text2: "#B7CEC1",
        text3: "#87A294",
        brand1: "#49AF8B",
        brand2: "#329675",
        brand3: "#24775D",
        brandSoft: "rgba(73, 175, 139, 0.16)",
        divider: "rgba(255, 255, 255, 0.12)",
        sidebarBg: "#0A120D",
        navBg: "#0E1712",
      },
    },
  },
  locales: [],
  curriculum: {},
  homeByLocale: {},
};

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
    DEFAULT_COURSE_MANIFEST
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
