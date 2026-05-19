/// <reference types="node" />
import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import courseConfig from "./course.config.mjs";
import {
  buildFontStylesheetLinks,
  buildMermaidThemeVariables
} from "./course-branding.mjs";
import { getLocaleSourceItems } from "./course-curriculum.mjs";
import { getLocaleEntries } from "./course-locales.mjs";
import { createLocaleDefinition } from "./course-navigation.mjs";

const docsBase = courseConfig.site.base;
const brandLogo = courseConfig.brand.logo;
const githubRepoTreeLink = courseConfig.site.repoTreeUrl;
const fontStylesheetLinks = buildFontStylesheetLinks(courseConfig);

const locales = Object.fromEntries(
  getLocaleEntries().map((entry) => [
    entry.key,
    createLocaleDefinition({
      locale: entry.key,
      label: entry.label,
      lang: entry.lang,
      sourceItems: getLocaleSourceItems(entry.key),
      labels: entry.labels,
      repoTreeUrl: githubRepoTreeLink
    })
  ])
);

export default withMermaid(
  defineConfig({
    base: docsBase,
    title: courseConfig.site.title,
    description: courseConfig.site.description,
    cleanUrls: true,
    srcExclude: ["temp/**"],
    ignoreDeadLinks: true,
    head: [
      ...fontStylesheetLinks,
      ["link", { rel: "icon", type: "image/svg+xml", href: brandLogo }]
    ],
    themeConfig: {
      logo: brandLogo,
      search: {
        provider: "local"
      },
      socialLinks: [{ icon: "github", link: githubRepoTreeLink }]
    },
    markdown: {
      theme: {
        light: "github-light",
        dark: "github-dark"
      }
    },
    mermaid: {
      theme: "base",
      themeVariables: buildMermaidThemeVariables(courseConfig),
      flowchart: {
        nodeSpacing: 40,
        rankSpacing: 56,
        padding: 12
      }
    },
    locales
  })
);
