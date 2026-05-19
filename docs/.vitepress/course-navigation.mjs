import { getAllCourses, getPlatformConfig } from "./course-registry.mjs";
import { getCourseLocaleBasePath } from "./course-routes.mjs";

const LOCALE_PREFIX_PATTERN = /^\/[^/]+\//;

export function relinkItems(items, localeBasePath) {
  return items.map((item) => ({
    ...item,
    link: item.link.replace(LOCALE_PREFIX_PATTERN, localeBasePath),
  }));
}

export function buildLocaleThemeConfig({
  slug,
  locale,
  sourceItems,
  labels,
  repoTreeUrl,
}) {
  const localeBasePath = getCourseLocaleBasePath(slug, locale);
  const lectures = relinkItems(sourceItems.lectures, localeBasePath);
  const projects = relinkItems(sourceItems.projects, localeBasePath);
  const resources = relinkItems(sourceItems.resources, localeBasePath);
  const skills = relinkItems(sourceItems.skills, localeBasePath);
  const repoContentUrl = repoTreeUrl.replace(/\/$/, "");

  return {
    nav: [
      {
        text: labels.lectures,
        link: lectures[1]?.link || localeBasePath,
        activeMatch: `^${localeBasePath}(lectures/.*)?$`,
      },
      {
        text: labels.projects,
        link: projects[0]?.link || `${localeBasePath}projects/`,
        activeMatch: `^${localeBasePath}projects/`,
      },
      {
        text: labels.resources,
        link: `${localeBasePath}resources/`,
        activeMatch: `^${localeBasePath}resources/`,
      },
      {
        text: labels.skills,
        link: `${localeBasePath}skills/`,
        activeMatch: `^${localeBasePath}skills/`,
      },
      {
        text: labels.tryHarness,
        link: repoContentUrl,
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
    sidebar: {
      [`${localeBasePath}projects/`]: [
        { text: labels.projects, items: projects },
      ],
      [`${localeBasePath}resources/`]: [
        { text: labels.resourceLibrary, items: resources },
      ],
      [`${localeBasePath}skills/`]: [{ text: labels.skills, items: skills }],
      [localeBasePath]: [{ text: labels.lectures, items: lectures }],
    },
  };
}

export function buildGlobalSidebar() {
  const sidebar = {};

  for (const course of getAllCourses()) {
    for (const localeEntry of course.manifest.locales) {
      const themeConfig = buildLocaleThemeConfig({
        slug: course.slug,
        locale: localeEntry.key,
        sourceItems:
          course.manifest.curriculum[localeEntry.key] ||
          course.manifest.curriculum[course.manifest.locales[0].key],
        labels: localeEntry.labels,
        repoTreeUrl: course.manifest.site.repoTreeUrl,
      });

      Object.assign(sidebar, themeConfig.sidebar);
    }
  }

  return sidebar;
}

export function buildGlobalNav() {
  const platformConfig = getPlatformConfig();

  return [
    {
      text: "Cursos",
      link: "/",
      activeMatch: "^/$|^/courses/",
    },
    {
      text: "Repositório",
      link: platformConfig.site.repoTreeUrl,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];
}

export function createLocaleDefinition({
  locale,
  label,
  lang,
  sourceItems,
  labels,
  repoTreeUrl,
  slug = "example-course",
}) {
  return {
    label,
    lang,
    link: getCourseLocaleBasePath(slug, locale),
    themeConfig: buildLocaleThemeConfig({
      slug,
      locale,
      sourceItems,
      labels,
      repoTreeUrl,
    }),
  };
}
