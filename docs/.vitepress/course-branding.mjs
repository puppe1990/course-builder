export function buildFontStylesheetLinks(courseConfig) {
  return (courseConfig.theme.fontStylesheets || []).map((href) => [
    "link",
    {
      rel: "stylesheet",
      href,
    },
  ]);
}

export function buildMermaidThemeVariables(courseConfig) {
  const { light } = courseConfig.theme.colors;

  return {
    primaryColor: light.bgAlt,
    primaryBorderColor: light.divider,
    primaryTextColor: light.text1,
    lineColor: light.text3,
    fontFamily: courseConfig.theme.typography.mermaid,
    fontSize: "18px",
  };
}

export function buildCourseCssTokens(courseConfig) {
  const { colors, typography, layout, effects } = courseConfig.theme;

  return {
    "--course-font-body": typography.body,
    "--course-font-heading": typography.heading,
    "--course-font-mono": typography.mono,
    "--course-layout-max-width": layout.maxWidth,
    "--course-sidebar-width": layout.sidebarWidth,
    "--course-card-radius": layout.cardRadius,
    "--course-feature-shadow": effects.featureShadow,
    "--course-feature-shadow-dark": effects.featureShadowDark,
    "--course-light-bg": colors.light.bg,
    "--course-light-bg-alt": colors.light.bgAlt,
    "--course-light-bg-elv": colors.light.bgElevated,
    "--course-light-bg-soft": colors.light.bgSoft,
    "--course-light-text-1": colors.light.text1,
    "--course-light-text-2": colors.light.text2,
    "--course-light-text-3": colors.light.text3,
    "--course-light-brand-1": colors.light.brand1,
    "--course-light-brand-2": colors.light.brand2,
    "--course-light-brand-3": colors.light.brand3,
    "--course-light-brand-soft": colors.light.brandSoft,
    "--course-light-divider": colors.light.divider,
    "--course-light-sidebar-bg": colors.light.sidebarBg,
    "--course-light-nav-bg": colors.light.navBg,
    "--course-dark-bg": colors.dark.bg,
    "--course-dark-bg-alt": colors.dark.bgAlt,
    "--course-dark-bg-elv": colors.dark.bgElevated,
    "--course-dark-bg-soft": colors.dark.bgSoft,
    "--course-dark-text-1": colors.dark.text1,
    "--course-dark-text-2": colors.dark.text2,
    "--course-dark-text-3": colors.dark.text3,
    "--course-dark-brand-1": colors.dark.brand1,
    "--course-dark-brand-2": colors.dark.brand2,
    "--course-dark-brand-3": colors.dark.brand3,
    "--course-dark-brand-soft": colors.dark.brandSoft,
    "--course-dark-divider": colors.dark.divider,
    "--course-dark-sidebar-bg": colors.dark.sidebarBg,
    "--course-dark-nav-bg": colors.dark.navBg,
  };
}
