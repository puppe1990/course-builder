function buildLogo(hex = "%231A7F64") {
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${hex}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18L12 6l6 12"/><path d="M8.5 13h7"/></svg>`;
}

function buildTheme(brand1, brand2, brand3) {
  return {
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
        brand1,
        brand2,
        brand3,
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
  };
}

function buildHome(locale, title) {
  return {
    hero: {
      title,
      intro: [
        `Intro for ${title} (${locale}).`,
        "This course fixture exists to validate the builder in CI.",
      ],
      references: [
        {
          label: "Builder repository",
          href: "https://github.com/puppe1990/course-builder",
        },
      ],
    },
    sections: {
      start: "Start here",
      mechanism: "Course map",
      learn: "You will cover",
      next: "Next steps",
    },
    startText: "This is a compact fixture course.",
    cards: [
      {
        title: "Modules",
        body: "Core lessons for the course.",
        href: "./lectures/module-01/",
      },
      {
        title: "Projects",
        body: "Applied work and exercises.",
        href: "./projects/",
      },
      {
        title: "Resources",
        body: "Templates and references.",
        href: "./resources/",
      },
    ],
    mechanismText: "Concept, practice, and reference move together.",
    mechanismMermaid: `graph LR
      A["Concept"] --> B["Practice"]
      B --> C["Reference"]`,
    learnItems: [
      "Understand the course structure.",
      "Navigate modules and projects.",
      "Use the reference material.",
    ],
    nextIntro: "Continue through the sections below.",
    nextSteps: [
      {
        title: "Module 1",
        description: "Begin with the first lesson.",
        href: "./lectures/module-01/",
      },
      {
        title: "Project 1",
        description: "Apply the core idea.",
        href: "./projects/project-01/",
      },
    ],
  };
}

export function createCourseManifest({
  title,
  description,
  locales,
  curriculum,
  homeByLocale,
  brandHex = "%231A7F64",
  brand1 = "#1A7F64",
  brand2 = "#126A53",
  brand3 = "#0B5542",
}) {
  const resolvedHomeByLocale = Object.fromEntries(
    locales.map((locale) => [
      locale.key,
      homeByLocale?.[locale.key] || buildHome(locale.key, title),
    ]),
  );

  return {
    site: {
      title,
      description,
      base: "/course-builder/",
      repoTreeUrl: "https://github.com/puppe1990/course-builder/tree/main",
    },
    brand: {
      logo: buildLogo(brandHex),
    },
    theme: buildTheme(brand1, brand2, brand3),
    locales,
    curriculum,
    homeByLocale: resolvedHomeByLocale,
  };
}
