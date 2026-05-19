const LOCALE_PREFIX_PATTERN = /^\/(en|zh|vi|ko|uz|ru|ja|es|fr|de|ar|zh-TW)\//;

export function relinkItems(items, locale) {
  return items.map((item) => ({
    ...item,
    link: item.link.replace(LOCALE_PREFIX_PATTERN, `/${locale}/`),
  }));
}

export function buildLocaleThemeConfig({
  locale,
  sourceItems,
  labels,
  repoTreeUrl,
  repoContentPrefix = "docs",
}) {
  const lectures = relinkItems(sourceItems.lectures, locale);
  const projects = relinkItems(sourceItems.projects, locale);
  const resources = relinkItems(sourceItems.resources, locale);
  const skills = relinkItems(sourceItems.skills, locale);

  return {
    nav: [
      {
        text: labels.lectures,
        link: lectures[1].link,
        activeMatch: `^/${locale}/(lectures/.*)?$`,
      },
      {
        text: labels.projects,
        link: projects[0].link,
        activeMatch: `^/${locale}/projects/`,
      },
      {
        text: labels.resources,
        link: `/${locale}/resources/`,
        activeMatch: `^/${locale}/resources/`,
      },
      {
        text: labels.skills,
        link: `/${locale}/skills/`,
        activeMatch: `^/${locale}/skills/`,
      },
      {
        text: labels.tryHarness,
        link: `${repoTreeUrl.replace(/\/tree\/main$/, "/blob/main")}/${repoContentPrefix}/${locale}/resources/templates/index.md`,
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
    sidebar: {
      [`/${locale}/projects/`]: [{ text: labels.projects, items: projects }],
      [`/${locale}/resources/`]: [
        { text: labels.resourceLibrary, items: resources },
      ],
      [`/${locale}/skills/`]: [{ text: labels.skills, items: skills }],
      [`/${locale}/`]: [{ text: labels.lectures, items: lectures }],
    },
    outline: {
      level: [2, 3],
      ...(labels.outline ? { label: labels.outline } : {}),
    },
    docFooter: {
      prev: labels.prev || "Previous",
      next: labels.next || "Next",
    },
    lastUpdated: {
      text: labels.lastUpdated || "Last updated",
    },
    returnToTopLabel: labels.returnToTop || "Return to top",
    sidebarMenuLabel: labels.sidebarMenu || "Menu",
    darkModeSwitchLabel: labels.darkModeSwitch || "Theme",
    lightModeSwitchTitle:
      labels.lightModeSwitchTitle || "Switch to light theme",
    darkModeSwitchTitle: labels.darkModeSwitchTitle || "Switch to dark theme",
    socialLinks: [{ icon: "github", link: repoTreeUrl }],
  };
}

export function createLocaleDefinition({
  locale,
  label,
  lang,
  sourceItems,
  labels,
  repoTreeUrl,
  repoContentPrefix,
}) {
  return {
    label,
    lang,
    link: `/${locale}/`,
    themeConfig: buildLocaleThemeConfig({
      locale,
      sourceItems,
      labels,
      repoTreeUrl,
      repoContentPrefix,
    }),
  };
}
