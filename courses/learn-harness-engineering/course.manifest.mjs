const brandLogo =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23D95C41" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12.1" y1="11.9" x2="18.9" y2="8.2" /><line x1="12.1" y1="12.1" x2="20.3" y2="12.9" /><line x1="12.2" y1="12.4" x2="16.6" y2="19.1" /><line x1="11.8" y1="12.4" x2="7.3" y2="19.2" /><line x1="11.9" y1="12.1" x2="3.7" y2="13.3" /><line x1="11.8" y1="11.7" x2="7.8" y2="4.4" /></svg>';

const defaultHome = {
  hero: {
    title: "Welcome to Learn Harness Engineering",
    intro: [
      "Learn Harness Engineering is a course dedicated to the engineering of AI coding agents. We have deeply studied and synthesized the most advanced Harness Engineering theories and practices in the industry.",
      "Through systematic environment design, state management, verification, and control systems, this course teaches you how to make agentic coding tools like Codex and Claude Code truly reliable.",
    ],
    references: [
      {
        label:
          "OpenAI: Harness engineering: leveraging Codex in an agent-first world",
        href: "https://openai.com/index/harness-engineering/",
      },
      {
        label: "Anthropic: Effective harnesses for long-running agents",
        href: "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents",
      },
      {
        label:
          "Anthropic: Harness design for long-running application development",
        href: "https://www.anthropic.com/engineering/harness-design-long-running-apps",
      },
      {
        label: "Awesome Harness Engineering",
        href: "https://github.com/walkinglabs/awesome-harness-engineering",
      },
    ],
  },
  sections: {
    start: "Get started",
    mechanism: "The Core Mechanism of a Harness",
    learn: "What you will learn",
    next: "Next steps",
  },
  startText:
    "Choose your learning path to get started. The course is divided into theoretical lectures, hands-on projects, and a copy-ready resource library.",
  cards: [
    {
      title: "Lectures",
      body: "Understand why strong models still fail and learn the theory behind effective harnesses.",
      href: "./lectures/lecture-01-why-capable-agents-still-fail/",
    },
    {
      title: "Projects",
      body: "Hands-on practice building a reliable agentic environment from scratch.",
      href: "./projects/",
    },
    {
      title: "Resource Library",
      body: "Copy-ready templates (AGENTS.md, feature_list.json) to use in your own repositories.",
      href: "./resources/",
    },
  ],
  mechanismText:
    'A harness does not "make the model smarter"; it establishes a closed-loop working system for the model.',
  mechanismMermaid: `graph TD
    A["Clear Objective<br/>AGENTS.md"] --> B("Initialization<br/>init.sh")
    B --> C{"Run Tasks<br/>AI Agent"}
    C -->|Encounter Issues| D["Runtime Feedback<br/>CLI / Logs"]
    D -->|Auto-fix| C
    C -->|Code Completed| E{"Verify & QA<br/>Test suite"}
    E -->|Failed| D
    E -->|Passed| F["Cleanup & Handoff<br/>claude-progress.md"]

    classDef primary fill:#D95C41,stroke:#C14E36,color:#fff,font-weight:bold;
    classDef process fill:#F4F3EE,stroke:#D1D1D1,color:#1A1A1A;
    classDef check fill:#EAE8E1,stroke:#B3B3B3,color:#1A1A1A;

    class A,F primary;
    class B,D process;
    class C,E check;`,
  learnItems: [
    "Constrain agent behavior with explicit rules and boundaries.",
    "Maintain context across long-running, multi-session tasks.",
    "Stop agents from declaring victory too early.",
    "Verify work using full-pipeline tests and self-reflection.",
    "Make runtime observable and debuggable.",
  ],
  nextIntro:
    "Once you understand the core concepts, these guides help you go deeper:",
  nextSteps: [
    {
      title: "Lecture 01: Why Capable Agents Still Fail",
      description: "Start with the theory behind harness engineering.",
      href: "./lectures/lecture-01-why-capable-agents-still-fail/",
    },
    {
      title: "Project 01: Baseline vs Minimal Harness",
      description: "Walk through your first real task.",
      href: "./projects/project-01-baseline-vs-minimal-harness/",
    },
    {
      title: "Templates",
      description: "Grab the minimal harness pack for your own projects.",
      href: "./resources/templates/",
    },
  ],
};

const localeEntries = [
  {
    key: "en",
    label: "English",
    lang: "en",
    labels: {
      lectures: "Lectures",
      projects: "Projects",
      resources: "Library",
      skills: "Skills",
      resourceLibrary: "Resource Library",
      tryHarness: "Try Harness ↗",
    },
  },
  {
    key: "zh",
    label: "简体中文",
    lang: "zh-CN",
    labels: {
      lectures: "讲义",
      projects: "项目",
      resources: "资料库",
      skills: "技能",
      resourceLibrary: "资料库",
      tryHarness: "Try Harness ↗",
      prev: "上一篇",
      next: "下一篇",
      lastUpdated: "最后更新于",
      returnToTop: "回到顶部",
      sidebarMenu: "菜单",
      darkModeSwitch: "主题",
      lightModeSwitchTitle: "切换到浅色模式",
      darkModeSwitchTitle: "切换到深色模式",
    },
  },
  {
    key: "zh-TW",
    label: "繁體中文",
    lang: "zh-TW",
    labels: {
      lectures: "講義",
      projects: "專案",
      resources: "資源庫",
      skills: "技能",
      resourceLibrary: "資源庫",
      tryHarness: "Try Harness ↗",
      prev: "上一篇",
      next: "下一篇",
      lastUpdated: "最後更新於",
      returnToTop: "回到頂部",
      sidebarMenu: "選單",
      darkModeSwitch: "主題",
      lightModeSwitchTitle: "切換到淺色模式",
      darkModeSwitchTitle: "切換到深色模式",
    },
  },
  {
    key: "ja",
    label: "日本語",
    lang: "ja-JP",
    labels: {
      lectures: "講義",
      projects: "プロジェクト",
      resources: "リソース",
      skills: "スキル",
      resourceLibrary: "リソースライブラリ",
      tryHarness: "Try Harness ↗",
      outline: "このページ",
      prev: "前へ",
      next: "次へ",
      lastUpdated: "最終更新",
      returnToTop: "トップへ戻る",
      sidebarMenu: "メニュー",
      darkModeSwitch: "テーマ",
      lightModeSwitchTitle: "ライトモードに切り替え",
      darkModeSwitchTitle: "ダークモードに切り替え",
    },
  },
  {
    key: "es",
    label: "Español",
    lang: "es-ES",
    labels: {
      lectures: "Lecciones",
      projects: "Proyectos",
      resources: "Biblioteca",
      skills: "Skills",
      resourceLibrary: "Biblioteca de recursos",
      tryHarness: "Try Harness ↗",
      outline: "En esta página",
      prev: "Anterior",
      next: "Siguiente",
      lastUpdated: "Última actualización",
      returnToTop: "Volver arriba",
      sidebarMenu: "Menú",
      darkModeSwitch: "Tema",
      lightModeSwitchTitle: "Cambiar a tema claro",
      darkModeSwitchTitle: "Cambiar a tema oscuro",
    },
  },
  {
    key: "fr",
    label: "Français",
    lang: "fr-FR",
    labels: {
      lectures: "Cours",
      projects: "Projets",
      resources: "Bibliothèque",
      skills: "Skills",
      resourceLibrary: "Bibliothèque de ressources",
      tryHarness: "Try Harness ↗",
      outline: "Sur cette page",
      prev: "Précédent",
      next: "Suivant",
      lastUpdated: "Dernière mise à jour",
      returnToTop: "Retour en haut",
      sidebarMenu: "Menu",
      darkModeSwitch: "Thème",
      lightModeSwitchTitle: "Passer au thème clair",
      darkModeSwitchTitle: "Passer au thème sombre",
    },
  },
  {
    key: "de",
    label: "Deutsch",
    lang: "de-DE",
    labels: {
      lectures: "Lektionen",
      projects: "Projekte",
      resources: "Bibliothek",
      skills: "Skills",
      resourceLibrary: "Ressourcenbibliothek",
      tryHarness: "Try Harness ↗",
      outline: "Auf dieser Seite",
      prev: "Zurück",
      next: "Weiter",
      lastUpdated: "Zuletzt aktualisiert",
      returnToTop: "Nach oben",
      sidebarMenu: "Menü",
      darkModeSwitch: "Theme",
      lightModeSwitchTitle: "Zum hellen Theme wechseln",
      darkModeSwitchTitle: "Zum dunklen Theme wechseln",
    },
  },
  {
    key: "ar",
    label: "العربية",
    lang: "ar-SA",
    labels: {
      lectures: "المحاضرات",
      projects: "المشاريع",
      resources: "المكتبة",
      skills: "المهارات",
      resourceLibrary: "مكتبة الموارد",
      tryHarness: "Try Harness ↗",
      outline: "في هذه الصفحة",
      prev: "السابق",
      next: "التالي",
      lastUpdated: "آخر تحديث",
      returnToTop: "العودة إلى الأعلى",
      sidebarMenu: "القائمة",
      darkModeSwitch: "السمة",
      lightModeSwitchTitle: "التبديل إلى السمة الفاتحة",
      darkModeSwitchTitle: "التبديل إلى السمة الداكنة",
    },
  },
  {
    key: "vi",
    label: "Tiếng Việt",
    lang: "vi-VN",
    labels: {
      lectures: "Bài giảng",
      projects: "Dự án",
      resources: "Tài nguyên",
      skills: "Kỹ năng",
      resourceLibrary: "Thư viện Tài nguyên",
      tryHarness: "Try Harness ↗",
      prev: "Trang trước",
      next: "Trang sau",
      lastUpdated: "Cập nhật lần cuối",
      returnToTop: "Trở lên trên cùng",
      sidebarMenu: "Menu",
      darkModeSwitch: "Giao diện",
      lightModeSwitchTitle: "Chuyển sang chế độ sáng",
      darkModeSwitchTitle: "Chuyển sang chế độ tối",
    },
  },
  {
    key: "ko",
    label: "한국어",
    lang: "ko",
    labels: {
      lectures: "강의",
      projects: "프로젝트",
      resources: "리소스 모음",
      skills: "스킬",
      resourceLibrary: "리소스 모음",
      tryHarness: "Try Harness ↗",
      outline: "이 페이지에서",
      prev: "이전",
      next: "다음",
      lastUpdated: "마지막 업데이트",
      returnToTop: "맨 위로",
      sidebarMenu: "메뉴",
      darkModeSwitch: "테마",
      lightModeSwitchTitle: "라이트 모드로 전환",
      darkModeSwitchTitle: "다크 모드로 전환",
    },
  },
  {
    key: "uz",
    label: "Oʻzbek",
    lang: "uz",
    labels: {
      lectures: "Maʼruzalar",
      projects: "Loyihalar",
      resources: "Kutubxona",
      skills: "Malakalar",
      resourceLibrary: "Resurslar kutubxonasi",
      tryHarness: "Harness'ni sinash ↗",
      outline: "Ushbu sahifada",
      prev: "Oldingi",
      next: "Keyingi",
      lastUpdated: "Oxirgi yangilanish",
      returnToTop: "Yuqoriga qaytish",
      sidebarMenu: "Menyu",
      darkModeSwitch: "Mavzu",
      lightModeSwitchTitle: "Yorugʻ rejimga oʻtish",
      darkModeSwitchTitle: "Qorongʻi rejimga oʻtish",
    },
  },
  {
    key: "ru",
    label: "Русский",
    lang: "ru",
    labels: {
      lectures: "Лекции",
      projects: "Проекты",
      resources: "Материалы",
      skills: "Скиллы",
      resourceLibrary: "Материалы",
      tryHarness: "Try Harness ↗",
      outline: "На этой странице",
      prev: "Предыдущая",
      next: "Следующая",
      lastUpdated: "Последнее обновление",
      returnToTop: "Наверх",
      sidebarMenu: "Меню",
      darkModeSwitch: "Тема",
      lightModeSwitchTitle: "Включить светлую тему",
      darkModeSwitchTitle: "Включить тёмную тему",
    },
  },
];

const sourceItemsByLocale = {
  en: {
    lectures: [
      { text: "Welcome", link: "/en/" },
      {
        text: "Why Capable Agents Still Fail",
        link: "/en/lectures/lecture-01-why-capable-agents-still-fail/",
      },
      {
        text: "What a Harness Actually Is",
        link: "/en/lectures/lecture-02-what-a-harness-actually-is/",
      },
      {
        text: "Why the Repository Must Become the System of Record",
        link: "/en/lectures/lecture-03-why-the-repository-must-become-the-system-of-record/",
      },
      {
        text: "Why One Giant Instruction File Fails",
        link: "/en/lectures/lecture-04-why-one-giant-instruction-file-fails/",
      },
      {
        text: "Why Long-Running Tasks Lose Continuity",
        link: "/en/lectures/lecture-05-why-long-running-tasks-lose-continuity/",
      },
      {
        text: "Why Initialization Needs Its Own Phase",
        link: "/en/lectures/lecture-06-why-initialization-needs-its-own-phase/",
      },
      {
        text: "Why Agents Overreach and Under-Finish",
        link: "/en/lectures/lecture-07-why-agents-overreach-and-under-finish/",
      },
      {
        text: "Why Feature Lists Are Harness Primitives",
        link: "/en/lectures/lecture-08-why-feature-lists-are-harness-primitives/",
      },
      {
        text: "Why Agents Declare Victory Too Early",
        link: "/en/lectures/lecture-09-why-agents-declare-victory-too-early/",
      },
      {
        text: "Why End-to-End Testing Changes Results",
        link: "/en/lectures/lecture-10-why-end-to-end-testing-changes-results/",
      },
      {
        text: "Why Observability Belongs Inside the Harness",
        link: "/en/lectures/lecture-11-why-observability-belongs-inside-the-harness/",
      },
      {
        text: "Why Every Session Must Leave a Clean State",
        link: "/en/lectures/lecture-12-why-every-session-must-leave-a-clean-state/",
      },
    ],
    projects: [
      { text: "Welcome", link: "/en/projects/" },
      {
        text: "Prompt-Only vs. Rules-First",
        link: "/en/projects/project-01-baseline-vs-minimal-harness/",
      },
      {
        text: "Agent-Readable Workspace",
        link: "/en/projects/project-02-agent-readable-workspace/",
      },
      {
        text: "Multi-Session Continuity",
        link: "/en/projects/project-03-multi-session-continuity/",
      },
      {
        text: "Runtime Feedback and Scope Control",
        link: "/en/projects/project-04-incremental-indexing/",
      },
      {
        text: "Self-Verification and Role Separation",
        link: "/en/projects/project-05-grounded-qa-verification/",
      },
      {
        text: "Complete Harness (Capstone)",
        link: "/en/projects/project-06-runtime-observability-and-debugging/",
      },
    ],
    resources: [
      { text: "Overview", link: "/en/resources/" },
      { text: "English Templates", link: "/en/resources/templates/" },
      { text: "English Reference", link: "/en/resources/reference/" },
      { text: "Advanced Pack", link: "/en/resources/openai-advanced/" },
    ],
    skills: [{ text: "Skills Overview", link: "/en/skills/" }],
  },
  ko: {
    lectures: [
      { text: "환영합니다", link: "/ko/" },
      {
        text: "유능한 에이전트가 여전히 실패하는 이유",
        link: "/ko/lectures/lecture-01-why-capable-agents-still-fail/",
      },
      {
        text: "하네스란 무엇인가",
        link: "/ko/lectures/lecture-02-what-a-harness-actually-is/",
      },
      {
        text: "저장소가 시스템 오브 레코드(SoR)가 되어야 하는 이유",
        link: "/ko/lectures/lecture-03-why-the-repository-must-become-the-system-of-record/",
      },
      {
        text: "거대한 단일 지시 파일이 실패하는 이유",
        link: "/ko/lectures/lecture-04-why-one-giant-instruction-file-fails/",
      },
      {
        text: "장기 작업이 연속성을 잃는 이유",
        link: "/ko/lectures/lecture-05-why-long-running-tasks-lose-continuity/",
      },
      {
        text: "초기화가 별도 단계여야 하는 이유",
        link: "/ko/lectures/lecture-06-why-initialization-needs-its-own-phase/",
      },
      {
        text: "에이전트가 과도하게 손대고 끝맺지 못하는 이유",
        link: "/ko/lectures/lecture-07-why-agents-overreach-and-under-finish/",
      },
      {
        text: "기능 목록이 하네스의 기본 단위인 이유",
        link: "/ko/lectures/lecture-08-why-feature-lists-are-harness-primitives/",
      },
      {
        text: "에이전트가 너무 일찍 완료를 선언하는 이유",
        link: "/ko/lectures/lecture-09-why-agents-declare-victory-too-early/",
      },
      {
        text: "엔드투엔드 테스트가 결과를 바꾸는 이유",
        link: "/ko/lectures/lecture-10-why-end-to-end-testing-changes-results/",
      },
      {
        text: "관측 가능성이 하네스 안에 있어야 하는 이유",
        link: "/ko/lectures/lecture-11-why-observability-belongs-inside-the-harness/",
      },
      {
        text: "모든 세션이 클린 상태로 끝나야 하는 이유",
        link: "/ko/lectures/lecture-12-why-every-session-must-leave-a-clean-state/",
      },
    ],
    projects: [
      { text: "환영합니다", link: "/ko/projects/" },
      {
        text: "프롬프트 단독 vs 규칙 우선",
        link: "/ko/projects/project-01-baseline-vs-minimal-harness/",
      },
      {
        text: "에이전트가 읽을 수 있는 작업 공간",
        link: "/ko/projects/project-02-agent-readable-workspace/",
      },
      {
        text: "다중 세션 연속성",
        link: "/ko/projects/project-03-multi-session-continuity/",
      },
      {
        text: "런타임 피드백과 범위 제어",
        link: "/ko/projects/project-04-incremental-indexing/",
      },
      {
        text: "자기 검증과 역할 분리",
        link: "/ko/projects/project-05-grounded-qa-verification/",
      },
      {
        text: "완성형 하네스(캡스톤)",
        link: "/ko/projects/project-06-runtime-observability-and-debugging/",
      },
    ],
    resources: [
      { text: "리소스 모음 개요", link: "/ko/resources/" },
      { text: "한국어 템플릿", link: "/ko/resources/templates/" },
      { text: "한국어 레퍼런스", link: "/ko/resources/reference/" },
      { text: "고급 리소스 팩", link: "/ko/resources/openai-advanced/" },
    ],
    skills: [{ text: "스킬 개요", link: "/ko/skills/" }],
  },
};

const homeByLocale = {
  en: defaultHome,
  ko: {
    ...defaultHome,
    hero: {
      title: "Learn Harness Engineering에 오신 것을 환영합니다",
      intro: [
        "Learn Harness Engineering은 AI 코딩 에이전트의 엔지니어링에 집중하는 강의입니다. 업계에서 가장 앞선 하네스 엔지니어링 이론과 실천을 깊이 정리했습니다.",
        "체계적인 환경 설계, 상태 관리, 검증, 제어 시스템을 통해 Codex와 Claude Code 같은 도구를 실제로 신뢰할 수 있게 만드는 방법을 다룹니다.",
      ],
      references: defaultHome.hero.references,
    },
    sections: {
      start: "시작하기",
      mechanism: "하네스의 핵심 메커니즘",
      learn: "이 강의에서 배우는 것",
      next: "다음 단계",
    },
    startText:
      "학습 경로를 선택해 시작하세요. 강의는 이론 강의, 실습 프로젝트, 즉시 사용 가능한 리소스 모음으로 구성됩니다.",
    cards: [
      {
        title: "강의(Lectures)",
        body: "강력한 모델이 왜 여전히 실패하는지 이해하고, 효과적인 하네스의 이론을 배웁니다.",
        href: "./lectures/lecture-01-why-capable-agents-still-fail/",
      },
      {
        title: "프로젝트(Projects)",
        body: "믿을 수 있는 에이전트 환경을 처음부터 직접 만들어 보는 실습입니다.",
        href: "./projects/",
      },
      {
        title: "리소스 모음(Resource Library)",
        body: "여러분의 저장소에서 바로 쓸 수 있는 복사용 템플릿입니다.",
        href: "./resources/",
      },
    ],
    mechanismText:
      '하네스는 모델을 "더 똑똑하게" 만드는 것이 아니라, 모델을 위한 닫힌 루프 작업 시스템을 만듭니다.',
    learnItems: [
      "명시적인 규칙과 경계로 에이전트 동작을 제약합니다.",
      "장시간·다중 세션 작업에서도 컨텍스트를 유지합니다.",
      "에이전트가 너무 빨리 완료를 선언하지 못하게 합니다.",
      "전체 파이프라인 테스트와 자기 점검으로 결과물을 검증합니다.",
      "런타임을 관측·디버깅 가능하게 만듭니다.",
    ],
    nextIntro:
      "핵심 개념이 익숙해졌다면, 다음 자료로 한 걸음 더 들어가 보세요.",
    nextSteps: [
      {
        title: "강의 01: 유능한 에이전트가 여전히 실패하는 이유",
        description: "하네스 엔지니어링의 이론적 출발점입니다.",
        href: "./lectures/lecture-01-why-capable-agents-still-fail/",
      },
      {
        title: "프로젝트 01: 베이스라인 vs 미니멀 하네스",
        description: "첫 실제 과제를 처음부터 진행해 봅니다.",
        href: "./projects/project-01-baseline-vs-minimal-harness/",
      },
      {
        title: "템플릿(Templates)",
        description: "미니멀 하네스 팩을 자신의 프로젝트에 바로 적용해 보세요.",
        href: "./resources/templates/",
      },
    ],
  },
};

const courseManifest = {
  site: {
    title: "Learn Harness Engineering",
    description:
      "A project-based course on designing the environments, state, verification, and control systems that make Codex and Claude Code reliable.",
    base: "/course-builder/",
    repoTreeUrl: "https://github.com/puppe1990/course-builder/tree/main",
  },
  brand: {
    logo: brandLogo,
  },
  theme: {
    fontStylesheets: [
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap",
    ],
    typography: {
      body: "'Instrument Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      heading:
        "'Fraunces', ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
      mono: "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
      mermaid: "'Instrument Sans', sans-serif",
    },
    layout: {
      maxWidth: "1376px",
      sidebarWidth: "296px",
      cardRadius: "12px",
    },
    effects: {
      featureShadow: "0 18px 48px rgba(217, 92, 65, 0.12)",
      featureShadowDark: "0 18px 48px rgba(0, 0, 0, 0.35)",
    },
    colors: {
      light: {
        bg: "#FAF9F5",
        bgAlt: "#F4F3EE",
        bgElevated: "#FFFFFF",
        bgSoft: "#F4F3EE",
        text1: "#1A1A1A",
        text2: "#4A4A4A",
        text3: "#757575",
        brand1: "#D95C41",
        brand2: "#C14E36",
        brand3: "#A8412B",
        brandSoft: "rgba(217, 92, 65, 0.1)",
        divider: "rgba(0, 0, 0, 0.08)",
        sidebarBg: "#F4F3EE",
        navBg: "#FAF9F5",
      },
      dark: {
        bg: "#1A1A1A",
        bgAlt: "#141414",
        bgElevated: "#242424",
        bgSoft: "#141414",
        text1: "#E5E5E5",
        text2: "#B3B3B3",
        text3: "#808080",
        brand1: "#E07A64",
        brand2: "#D95C41",
        brand3: "#C14E36",
        brandSoft: "rgba(224, 122, 100, 0.15)",
        divider: "rgba(255, 255, 255, 0.1)",
        sidebarBg: "#141414",
        navBg: "#1A1A1A",
      },
    },
  },
  locales: localeEntries,
  curriculum: sourceItemsByLocale,
  homeByLocale,
};

export default courseManifest;
