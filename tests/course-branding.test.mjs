import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

import featuredCourseManifest from "../docs/.vitepress/course.manifest.mjs";
import {
  ACTIVE_COURSE_CONTENT_DIR,
  ACTIVE_COURSE_REPO_CONTENT_PREFIX,
  ACTIVE_COURSE_SLUG,
} from "../docs/.vitepress/active-course.mjs";
import courseConfig from "../docs/.vitepress/course.config.mjs";
import {
  getCourseCatalog,
  getFeaturedCourseEntry,
} from "../docs/.vitepress/course-catalog.mjs";
import {
  buildCourseCssTokens,
  buildFontStylesheetLinks,
  buildMermaidThemeVariables,
} from "../docs/.vitepress/course-branding.mjs";
import {
  getCourseHome,
  getCourseHomeForCourse,
  resolveCourseLocale,
} from "../docs/.vitepress/course-content.mjs";
import {
  buildGlobalNav,
  buildGlobalSidebar,
  buildLocaleThemeConfig,
  createLocaleDefinition,
} from "../docs/.vitepress/course-navigation.mjs";
import { getLocaleSourceItems } from "../docs/.vitepress/course-curriculum.mjs";
import { getPrimaryLocale } from "../docs/.vitepress/course-locales.mjs";
import {
  FEATURED_COURSE_SLUG,
  getAllCourses,
  getCourseManifestBySlug,
  getPlatformConfig,
} from "../docs/.vitepress/course-registry.mjs";
import {
  getCourseLocaleBasePath,
  resolveCourseContextFromPath,
} from "../docs/.vitepress/course-routes.mjs";
import {
  createEnglishLocaleMeta,
  createLabels,
  createSourceItems,
} from "./helpers/fixtures.mjs";

test("course config exposes the minimum shared platform surface", () => {
  assert.equal(typeof courseConfig.site.title, "string");
  assert.equal(typeof courseConfig.site.description, "string");
  assert.equal(typeof courseConfig.site.base, "string");
  assert.equal(typeof courseConfig.brand.logo, "string");
  assert.ok(Array.isArray(courseConfig.theme.fontStylesheets));
});

test("featured course manifest remains available for compatibility", () => {
  const primaryLocale = getPrimaryLocale();

  assert.equal(
    featuredCourseManifest.site.title,
    getCourseManifestBySlug(FEATURED_COURSE_SLUG).site.title,
  );
  assert.ok(Array.isArray(featuredCourseManifest.locales));
  assert.ok(featuredCourseManifest.curriculum[primaryLocale]);
  assert.ok(featuredCourseManifest.homeByLocale[primaryLocale]);
  assert.equal(ACTIVE_COURSE_SLUG, FEATURED_COURSE_SLUG);
  assert.match(ACTIVE_COURSE_CONTENT_DIR, /^\.\/courses\/.+$/);
  assert.equal(
    ACTIVE_COURSE_REPO_CONTENT_PREFIX,
    `docs/courses/${ACTIVE_COURSE_SLUG}`,
  );
});

test("platform registry exposes multiple courses in one build", () => {
  const platformConfig = getPlatformConfig();
  const courses = getAllCourses();

  assert.equal(platformConfig.site.title, "Course Builder");
  assert.ok(courses.length >= 4);
  assert.equal(
    courses.some((course) => course.slug === "autismo"),
    true,
  );
});

test("featured course content path resolves to a real course docs tree", () => {
  const primaryLocale = getPrimaryLocale();
  const repoRoot = path.resolve(import.meta.dirname, "..");
  const featuredCourseDocsRoot = path.resolve(
    repoRoot,
    "docs",
    ACTIVE_COURSE_CONTENT_DIR,
  );

  assert.equal(
    fs.existsSync(path.join(featuredCourseDocsRoot, primaryLocale)),
    true,
  );
  assert.equal(
    fs.existsSync(path.join(featuredCourseDocsRoot, "index.md")),
    true,
  );
});

test("platform can load a second course manifest with distinct branding and curriculum", () => {
  const bootcampManifest = getCourseManifestBySlug("agent-ops-bootcamp");

  assert.equal(bootcampManifest.site.title, "Agent Ops Bootcamp");
  assert.equal(bootcampManifest.site.base, "/course-builder/");
  assert.equal(bootcampManifest.locales[0].labels.lectures, "Modules");
  assert.equal(
    bootcampManifest.curriculum.en.projects[1].text,
    "Incident Drill",
  );
  assert.equal(bootcampManifest.homeByLocale.en.cards[0].title, "Modules");
});

test("buildFontStylesheetLinks converts font urls into VitePress head tags", () => {
  const links = buildFontStylesheetLinks(courseConfig);

  assert.ok(links.length > 0);
  assert.deepEqual(links[0], [
    "link",
    {
      rel: "stylesheet",
      href: courseConfig.theme.fontStylesheets[0],
    },
  ]);
});

test("buildCourseCssTokens maps branding into CSS custom properties", () => {
  const manifest = getCourseManifestBySlug(FEATURED_COURSE_SLUG);
  const tokens = buildCourseCssTokens(manifest);

  assert.equal(tokens["--course-font-body"], manifest.theme.typography.body);
  assert.equal(
    tokens["--course-font-heading"],
    manifest.theme.typography.heading,
  );
  assert.equal(
    tokens["--course-light-brand-1"],
    manifest.theme.colors.light.brand1,
  );
  assert.equal(
    tokens["--course-dark-brand-1"],
    manifest.theme.colors.dark.brand1,
  );
  assert.equal(
    tokens["--course-sidebar-width"],
    manifest.theme.layout.sidebarWidth,
  );
});

test("buildMermaidThemeVariables uses course colors and fonts", () => {
  const manifest = getCourseManifestBySlug(FEATURED_COURSE_SLUG);
  const mermaidTheme = buildMermaidThemeVariables(manifest);

  assert.equal(mermaidTheme.primaryColor, manifest.theme.colors.light.bgAlt);
  assert.equal(
    mermaidTheme.primaryTextColor,
    manifest.theme.colors.light.text1,
  );
  assert.equal(mermaidTheme.lineColor, manifest.theme.colors.light.text3);
  assert.equal(mermaidTheme.fontFamily, manifest.theme.typography.mermaid);
});

test("resolveCourseLocale falls back to primary locale when locale is missing", () => {
  const primaryLocale = getPrimaryLocale();

  assert.equal(
    resolveCourseLocale(FEATURED_COURSE_SLUG, primaryLocale),
    primaryLocale,
  );
  assert.equal(
    resolveCourseLocale(FEATURED_COURSE_SLUG, "unknown-locale"),
    primaryLocale,
  );
});

test("getCourseHome returns localized course landing content", () => {
  const primaryLocale = getPrimaryLocale();
  const primaryHome = getCourseHome(primaryLocale);

  assert.equal(
    primaryHome.hero.title,
    featuredCourseManifest.homeByLocale[primaryLocale].hero.title,
  );
  assert.ok(primaryHome.cards.length >= 3);
  assert.equal(
    Array.isArray(primaryHome.nextSteps) ||
      typeof primaryHome.nextSteps === "object",
    true,
  );
});

test("getCourseHomeForCourse resolves a different course independently", () => {
  const home = getCourseHomeForCourse("autismo", "pt-BR");

  assert.equal(
    home.hero.title,
    getCourseManifestBySlug("autismo").homeByLocale["pt-BR"].hero.title,
  );
});

test("course catalog exposes all courses and marks the featured one", () => {
  const catalog = getCourseCatalog();
  const featuredCourse = getFeaturedCourseEntry();

  assert.ok(catalog.length >= 4);
  assert.equal(catalog[0].featured, true);
  assert.equal(featuredCourse.slug, FEATURED_COURSE_SLUG);
  assert.equal(
    catalog.some((course) => course.slug === "autismo"),
    true,
  );
  assert.equal(
    catalog.every((course) => typeof course.title === "string"),
    true,
  );
  assert.equal(
    catalog.every((course) => course.homePath.startsWith("/courses/")),
    true,
  );
});

test("buildLocaleThemeConfig creates course-prefixed nav and sidebar", () => {
  const sourceItems = createSourceItems();
  const labels = createLabels({
    lectures: "강의",
    projects: "프로젝트",
    resources: "리소스",
    skills: "스킬",
    resourceLibrary: "리소스 모음",
    tryHarness: "실습하기 ↗",
  });

  const themeConfig = buildLocaleThemeConfig({
    slug: "learn-harness-engineering",
    locale: "ko",
    sourceItems,
    labels,
    repoTreeUrl: courseConfig.site.repoTreeUrl,
  });

  const localeBasePath = getCourseLocaleBasePath(
    "learn-harness-engineering",
    "ko",
  );

  assert.equal(themeConfig.nav[0].text, "강의");
  assert.equal(
    themeConfig.nav[0].link,
    sourceItems.lectures[1].link.replace("/en/", localeBasePath),
  );
  assert.equal(
    themeConfig.sidebar[`${localeBasePath}projects/`][0].text,
    "프로젝트",
  );
  assert.equal(themeConfig.nav[4].link, courseConfig.site.repoTreeUrl);
});

test("createLocaleDefinition wraps locale metadata with generated theme config", () => {
  const sourceItems = createSourceItems();
  const labels = createLabels({
    lectures: "Lectures",
    projects: "Projects",
    resources: "Library",
    skills: "Skills",
    resourceLibrary: "Resource Library",
    tryHarness: "Try Harness ↗",
  });

  const localeDefinition = createLocaleDefinition({
    slug: "agent-ops-bootcamp",
    locale: "en",
    ...createEnglishLocaleMeta(),
    sourceItems,
    labels,
    repoTreeUrl: courseConfig.site.repoTreeUrl,
  });

  assert.equal(localeDefinition.label.length > 0, true);
  assert.equal(localeDefinition.link, "/courses/agent-ops-bootcamp/en/");
  assert.equal(localeDefinition.themeConfig.nav[1].text, labels.projects);
});

test("buildGlobalNav and buildGlobalSidebar expose multi-course navigation", () => {
  const nav = buildGlobalNav();
  const sidebar = buildGlobalSidebar();

  assert.equal(nav[0].link, "/");
  assert.equal(typeof sidebar["/courses/autismo/pt-BR/"][0].text, "string");
});

test("getLocaleSourceItems returns course structure by locale with fallback", () => {
  const primaryLocale = getPrimaryLocale();
  const primary = getLocaleSourceItems(primaryLocale);
  const fallback = getLocaleSourceItems("unknown-locale");

  assert.equal(
    primary.lectures[1].text,
    featuredCourseManifest.curriculum[primaryLocale].lectures[1].text,
  );
  assert.equal(
    fallback.skills[0].text,
    featuredCourseManifest.curriculum[primaryLocale].skills[0].text,
  );
});

test("resolveCourseContextFromPath identifies course and locale from route", () => {
  const context = resolveCourseContextFromPath(
    "/courses/autismo/pt-BR/resources/",
  );

  assert.equal(context.slug, "autismo");
  assert.equal(context.locale, "pt-BR");
});
