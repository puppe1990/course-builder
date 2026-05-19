import { createCourseManifest } from "../shared/create-course-manifest.mjs";

export default createCourseManifest({
  title: "Learn Harness Engineering",
  description: "Fixture course for CI validation.",
  locales: [
    {
      key: "en",
      label: "English",
      lang: "en",
      labels: {
        lectures: "Modules",
        projects: "Projects",
        resources: "Resources",
        skills: "Guides",
        resourceLibrary: "Resource Library",
        tryHarness: "Open repository ↗",
      },
    },
  ],
  curriculum: {
    en: {
      lectures: [
        { text: "Welcome", link: "/en/" },
        { text: "Module 1", link: "/en/lectures/module-01/" },
      ],
      projects: [
        { text: "Overview", link: "/en/projects/" },
        { text: "Project 1", link: "/en/projects/project-01/" },
      ],
      resources: [
        { text: "Overview", link: "/en/resources/" },
        { text: "Templates", link: "/en/resources/templates/" },
        { text: "Reference", link: "/en/resources/reference/" },
        { text: "Advanced", link: "/en/resources/openai-advanced/" },
      ],
      skills: [{ text: "Guides", link: "/en/skills/" }],
    },
  },
});
