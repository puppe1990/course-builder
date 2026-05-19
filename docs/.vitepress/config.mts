/// <reference types="node" />
import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import courseConfig from "./course.config.mjs";
import {
  buildFontStylesheetLinks,
  buildMermaidThemeVariables,
} from "./course-branding.mjs";
import {
  getFeaturedCourseManifest,
  getAllFontStylesheets,
} from "./course-registry.mjs";
import { buildGlobalNav, buildGlobalSidebar } from "./course-navigation.mjs";

const docsBase = (() => {
  const configuredBase = process.env.DOCS_BASE_PATH ?? courseConfig.site.base;

  if (!configuredBase.startsWith("/")) {
    return `/${configuredBase.endsWith("/") ? configuredBase : `${configuredBase}/`}`;
  }

  return configuredBase.endsWith("/") ? configuredBase : `${configuredBase}/`;
})();

const featuredCourseManifest = getFeaturedCourseManifest();
const fontStylesheetLinks = buildFontStylesheetLinks({
  theme: { fontStylesheets: getAllFontStylesheets() },
});

export default withMermaid(
  defineConfig({
    srcDir: ".",
    base: docsBase,
    title: courseConfig.site.title,
    description: courseConfig.site.description,
    cleanUrls: true,
    srcExclude: ["temp/**"],
    ignoreDeadLinks: true,
    head: [
      ...fontStylesheetLinks,
      [
        "link",
        {
          rel: "icon",
          type: "image/svg+xml",
          href: courseConfig.brand.logo,
        },
      ],
    ],
    themeConfig: {
      logo: courseConfig.brand.logo,
      nav: buildGlobalNav(),
      sidebar: buildGlobalSidebar(),
      outline: {
        level: [2, 3],
      },
      docFooter: {
        prev: "Previous",
        next: "Next",
      },
      returnToTopLabel: "Return to top",
      sidebarMenuLabel: "Menu",
      darkModeSwitchLabel: "Theme",
      lightModeSwitchTitle: "Switch to light theme",
      darkModeSwitchTitle: "Switch to dark theme",
      search: {
        provider: "local",
      },
      socialLinks: [{ icon: "github", link: courseConfig.site.repoTreeUrl }],
    },
    markdown: {
      theme: {
        light: "github-light",
        dark: "github-dark",
      },
    },
    mermaid: {
      theme: "base",
      themeVariables: buildMermaidThemeVariables(featuredCourseManifest),
      flowchart: {
        nodeSpacing: 40,
        rankSpacing: 56,
        padding: 12,
      },
    },
  }),
);
