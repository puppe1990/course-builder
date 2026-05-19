import test from "node:test";
import assert from "node:assert/strict";

import bootcampManifest from "../courses/agent-ops-bootcamp/course.manifest.mjs";
import courseManifest from "../docs/.vitepress/course.manifest.mjs";
import {
  ACTIVE_COURSE_CONTENT_DIR,
  ACTIVE_COURSE_REPO_CONTENT_PREFIX,
  ACTIVE_COURSE_SLUG,
} from "../docs/.vitepress/active-course.mjs";
import courseConfig from "../docs/.vitepress/course.config.mjs";
import {
  buildCourseCssTokens,
  buildFontStylesheetLinks,
  buildMermaidThemeVariables,
} from "../docs/.vitepress/course-branding.mjs";
import {
  getCourseHome,
  resolveCourseLocale,
} from "../docs/.vitepress/course-content.mjs";
import {
  buildLocaleThemeConfig,
  createLocaleDefinition,
} from "../docs/.vitepress/course-navigation.mjs";
import { getLocaleSourceItems } from "../docs/.vitepress/course-curriculum.mjs";
import {
  createEnglishLocaleMeta,
  createLabels,
  createSourceItems,
} from "./helpers/fixtures.mjs";

test("course config exposes the minimum whitelabel surface", () => {
  assert.equal(typeof courseConfig.site.title, "string");
  assert.equal(typeof courseConfig.site.description, "string");
  assert.equal(typeof courseConfig.site.base, "string");
  assert.equal(typeof courseConfig.brand.logo, "string");
  assert.ok(Array.isArray(courseConfig.theme.fontStylesheets));
  assert.equal(typeof courseConfig.theme.typography.body, "string");
  assert.equal(typeof courseConfig.theme.typography.heading, "string");
  assert.equal(typeof courseConfig.theme.typography.mono, "string");
  assert.equal(typeof courseConfig.theme.colors.light.brand1, "string");
  assert.equal(typeof courseConfig.theme.colors.dark.brand1, "string");
});

test("course manifest centralizes product config in one source", () => {
  assert.equal(courseManifest.site.title, courseConfig.site.title);
  assert.ok(Array.isArray(courseManifest.locales));
  assert.ok(courseManifest.curriculum.en);
  assert.ok(courseManifest.homeByLocale.en);
  assert.equal(typeof ACTIVE_COURSE_SLUG, "string");
  assert.match(ACTIVE_COURSE_CONTENT_DIR, /^\.\.\/courses\/.+\/docs$/);
  assert.equal(
    ACTIVE_COURSE_REPO_CONTENT_PREFIX,
    `courses/${ACTIVE_COURSE_SLUG}/docs`,
  );
});

test("platform can load a second course manifest with distinct branding and curriculum", () => {
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
  const tokens = buildCourseCssTokens(courseConfig);

  assert.equal(
    tokens["--course-font-body"],
    courseConfig.theme.typography.body,
  );
  assert.equal(
    tokens["--course-font-heading"],
    courseConfig.theme.typography.heading,
  );
  assert.equal(
    tokens["--course-light-brand-1"],
    courseConfig.theme.colors.light.brand1,
  );
  assert.equal(
    tokens["--course-dark-brand-1"],
    courseConfig.theme.colors.dark.brand1,
  );
  assert.equal(
    tokens["--course-sidebar-width"],
    courseConfig.theme.layout.sidebarWidth,
  );
});

test("buildMermaidThemeVariables uses course colors and fonts", () => {
  const mermaidTheme = buildMermaidThemeVariables(courseConfig);

  assert.equal(
    mermaidTheme.primaryColor,
    courseConfig.theme.colors.light.bgAlt,
  );
  assert.equal(
    mermaidTheme.primaryTextColor,
    courseConfig.theme.colors.light.text1,
  );
  assert.equal(mermaidTheme.lineColor, courseConfig.theme.colors.light.text3);
  assert.equal(mermaidTheme.fontFamily, courseConfig.theme.typography.mermaid);
});

test("resolveCourseLocale falls back to english when locale is missing", () => {
  assert.equal(resolveCourseLocale("en"), "en");
  const activeLocale = courseManifest.homeByLocale.ko ? "ko" : "en";
  assert.equal(resolveCourseLocale(activeLocale), activeLocale);
  assert.equal(resolveCourseLocale("pt-BR"), "en");
});

test("getCourseHome returns localized course landing content", () => {
  const englishHome = getCourseHome("en");

  assert.equal(
    englishHome.hero.title,
    courseManifest.homeByLocale.en.hero.title,
  );
  assert.ok(englishHome.cards.length >= 3);
  assert.ok(englishHome.nextSteps.length >= 2);

  if (courseManifest.homeByLocale.ko) {
    const koreanHome = getCourseHome("ko");
    assert.equal(
      koreanHome.hero.title,
      courseManifest.homeByLocale.ko.hero.title,
    );
  }
});

test("buildLocaleThemeConfig creates nav and sidebar from labels and source items", () => {
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
    locale: "ko",
    sourceItems,
    labels,
    repoTreeUrl: courseConfig.site.repoTreeUrl,
    repoContentPrefix: ACTIVE_COURSE_REPO_CONTENT_PREFIX,
  });

  assert.equal(themeConfig.nav[0].text, "강의");
  assert.equal(
    themeConfig.nav[0].link,
    sourceItems.lectures[1].link.replace("/en/", "/ko/"),
  );
  assert.equal(themeConfig.sidebar["/ko/projects/"][0].text, "프로젝트");
  assert.equal(
    themeConfig.nav[4].link,
    `${courseConfig.site.repoTreeUrl.replace(/\/tree\/main$/, "/blob/main")}/${ACTIVE_COURSE_REPO_CONTENT_PREFIX}/ko/resources/templates/index.md`,
  );
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
    locale: "en",
    ...createEnglishLocaleMeta(),
    sourceItems,
    labels,
    repoTreeUrl: courseConfig.site.repoTreeUrl,
    repoContentPrefix: ACTIVE_COURSE_REPO_CONTENT_PREFIX,
  });

  assert.equal(localeDefinition.label.length > 0, true);
  assert.equal(localeDefinition.link, "/en/");
  assert.equal(localeDefinition.themeConfig.nav[1].text, labels.projects);
});

test("getLocaleSourceItems returns course structure by locale with english fallback", () => {
  const english = getLocaleSourceItems("en");
  const fallback = getLocaleSourceItems("pt-BR");

  assert.equal(
    english.lectures[1].text,
    courseManifest.curriculum.en.lectures[1].text,
  );
  assert.equal(
    fallback.skills[0].text,
    courseManifest.curriculum.en.skills[0].text,
  );

  if (courseManifest.curriculum.ko) {
    const korean = getLocaleSourceItems("ko");
    assert.equal(
      korean.projects[1].text,
      courseManifest.curriculum.ko.projects[1].text,
    );
  }
});
