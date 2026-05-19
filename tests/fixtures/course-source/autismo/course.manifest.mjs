import { createCourseManifest } from "../shared/create-course-manifest.mjs";

export default createCourseManifest({
  title: "Autismo: fundamentos, cuidado e neurodiversidade",
  description: "Fixture course in Portuguese for CI validation.",
  locales: [
    {
      key: "pt-BR",
      label: "Português",
      lang: "pt-BR",
      labels: {
        lectures: "Módulos",
        projects: "Trilhas",
        resources: "Recursos",
        skills: "Guias",
        resourceLibrary: "Biblioteca",
        tryHarness: "Abrir repositório ↗",
      },
    },
  ],
  curriculum: {
    "pt-BR": {
      lectures: [
        { text: "Início", link: "/pt-BR/" },
        { text: "Módulo 1", link: "/pt-BR/lectures/module-01/" },
      ],
      projects: [
        { text: "Visão geral", link: "/pt-BR/projects/" },
        { text: "Projeto 1", link: "/pt-BR/projects/project-01/" },
      ],
      resources: [
        { text: "Visão geral", link: "/pt-BR/resources/" },
        { text: "Templates", link: "/pt-BR/resources/templates/" },
        { text: "Referência", link: "/pt-BR/resources/reference/" },
        { text: "Avançado", link: "/pt-BR/resources/openai-advanced/" },
      ],
      skills: [{ text: "Guias", link: "/pt-BR/skills/" }],
    },
  },
});
