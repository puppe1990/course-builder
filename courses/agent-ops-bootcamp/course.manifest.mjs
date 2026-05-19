const courseManifest = {
  site: {
    title: "Agent Ops Bootcamp",
    description:
      "A compact course on operating, debugging, and shipping agentic workflows in production teams.",
    base: "/course-builder/",
    repoTreeUrl: "https://github.com/puppe1990/course-builder/tree/main"
  },
  brand: {
    logo:
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%230B6E4F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16"/><path d="M12 4v16"/><circle cx="12" cy="12" r="8"/></svg>'
  },
  theme: {
    fontStylesheets: [
      "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
    ],
    typography: {
      body:
        "'Plus Jakarta Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      heading:
        "'Newsreader', ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
      mono:
        "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
      mermaid: "'Plus Jakarta Sans', sans-serif"
    },
    layout: {
      maxWidth: "1280px",
      sidebarWidth: "280px",
      cardRadius: "14px"
    },
    effects: {
      featureShadow: "0 18px 48px rgba(11, 110, 79, 0.14)",
      featureShadowDark: "0 18px 48px rgba(0, 0, 0, 0.4)"
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
        brand1: "#0B6E4F",
        brand2: "#095A41",
        brand3: "#074734",
        brandSoft: "rgba(11, 110, 79, 0.12)",
        divider: "rgba(8, 32, 20, 0.1)",
        sidebarBg: "#ECF5F0",
        navBg: "#F6FBF8"
      },
      dark: {
        bg: "#0E1712",
        bgAlt: "#0A120D",
        bgElevated: "#17221C",
        bgSoft: "#0A120D",
        text1: "#E7F2EC",
        text2: "#B7CEC1",
        text3: "#87A294",
        brand1: "#39A37F",
        brand2: "#2A8B6A",
        brand3: "#1E7054",
        brandSoft: "rgba(57, 163, 127, 0.16)",
        divider: "rgba(255, 255, 255, 0.12)",
        sidebarBg: "#0A120D",
        navBg: "#0E1712"
      }
    }
  },
  locales: [
    {
      key: "en",
      label: "English",
      lang: "en",
      labels: {
        lectures: "Modules",
        projects: "Labs",
        resources: "Toolkit",
        skills: "Playbooks",
        resourceLibrary: "Toolkit",
        tryHarness: "Open Templates ↗"
      }
    }
  ],
  curriculum: {
    en: {
      lectures: [
        { text: "Welcome", link: "/en/" },
        { text: "Operate Agents with Guardrails", link: "/en/lectures/operate-agents-with-guardrails/" },
        { text: "Debug Long-Running Workflows", link: "/en/lectures/debug-long-running-workflows/" },
        { text: "Ship with Runtime Feedback", link: "/en/lectures/ship-with-runtime-feedback/" }
      ],
      projects: [
        { text: "Overview", link: "/en/projects/" },
        { text: "Incident Drill", link: "/en/projects/incident-drill/" },
        { text: "Release Checklist", link: "/en/projects/release-checklist/" }
      ],
      resources: [
        { text: "Overview", link: "/en/resources/" },
        { text: "Runbooks", link: "/en/resources/templates/" },
        { text: "Reference", link: "/en/resources/reference/" },
        { text: "Advanced Ops", link: "/en/resources/openai-advanced/" }
      ],
      skills: [{ text: "Playbooks", link: "/en/skills/" }]
    }
  },
  homeByLocale: {
    en: {
      hero: {
        title: "Welcome to Agent Ops Bootcamp",
        intro: [
          "Agent Ops Bootcamp focuses on how teams run, observe, and correct agentic systems under production constraints.",
          "The course is intentionally compact: a few modules, a few labs, and a toolkit you can adapt to your own operating model."
        ],
        references: [
          {
            label: "Operational feedback loops",
            href: "https://openai.com/index/harness-engineering/"
          }
        ]
      },
      sections: {
        start: "Start here",
        mechanism: "Operating loop",
        learn: "You will practice",
        next: "Next moves"
      },
      startText:
        "This sample course exists to prove the platform can host a second curriculum with different naming, visual identity, and positioning.",
      cards: [
        {
          title: "Modules",
          body: "Short theory units about operating agents safely.",
          href: "./lectures/operate-agents-with-guardrails/"
        },
        {
          title: "Labs",
          body: "Hands-on operational drills.",
          href: "./projects/"
        },
        {
          title: "Toolkit",
          body: "Runbooks and reusable templates.",
          href: "./resources/"
        }
      ],
      mechanismText:
        "Production agent work improves when runtime feedback and verification are part of the operating loop.",
      mechanismMermaid: `graph LR
        A["Task"] --> B["Run"]
        B --> C{"Observe"}
        C -->|Issues| D["Correct"]
        D --> B
        C -->|Stable| E["Ship"]`,
      learnItems: [
        "Define operator-facing guardrails.",
        "Treat logs and runtime feedback as first-class inputs.",
        "Run lightweight drills before real incidents."
      ],
      nextIntro: "The sample path is intentionally small:",
      nextSteps: [
        {
          title: "Module 1",
          description: "Start with guardrails.",
          href: "./lectures/operate-agents-with-guardrails/"
        },
        {
          title: "Lab 1",
          description: "Run an incident drill.",
          href: "./projects/incident-drill/"
        }
      ]
    }
  }
};

export default courseManifest;
