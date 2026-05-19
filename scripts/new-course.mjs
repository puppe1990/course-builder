import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { execSync } from "node:child_process";

const repoRoot = process.cwd();
const coursesDir = path.join(repoRoot, "courses");

function printUsage() {
  console.log("Usage:");
  console.log("  npm run course:new -- <course-slug> [Course Title]");
}

function toTitleCase(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toCourseDescription(title) {
  return `A customizable course built with the course-builder platform for ${title}.`;
}

function escapeForJs(value) {
  return value.replaceAll("\\", "\\\\").replaceAll("'", "\\'");
}

function getRepoTreeUrl() {
  try {
    const remoteUrl = execSync("git remote get-url origin", {
      cwd: repoRoot,
      encoding: "utf8",
    }).trim();

    if (remoteUrl.startsWith("https://github.com/")) {
      return `${remoteUrl.replace(/\.git$/, "")}/tree/main`;
    }

    const sshMatch = remoteUrl.match(/^git@github\.com:(.+?)(?:\.git)?$/);
    if (sshMatch) {
      return `https://github.com/${sshMatch[1]}/tree/main`;
    }
  } catch {
    // Fall back to the placeholder repository URL below.
  }

  return "https://github.com/your-org/course-builder/tree/main";
}

function buildManifest({ title, description, repoTreeUrl }) {
  return `const courseManifest = {
  site: {
    title: '${escapeForJs(title)}',
    description:
      '${escapeForJs(description)}',
    base: '/course-builder/',
    repoTreeUrl: '${escapeForJs(repoTreeUrl)}'
  },
  brand: {
    logo:
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%231A7F64" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18L12 6l6 12"/><path d="M8.5 13h7"/></svg>'
  },
  theme: {
    fontStylesheets: [
      'https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap'
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
      maxWidth: '1280px',
      sidebarWidth: '280px',
      cardRadius: '14px'
    },
    effects: {
      featureShadow: '0 18px 48px rgba(26, 127, 100, 0.14)',
      featureShadowDark: '0 18px 48px rgba(0, 0, 0, 0.4)'
    },
    colors: {
      light: {
        bg: '#F6FBF8',
        bgAlt: '#ECF5F0',
        bgElevated: '#FFFFFF',
        bgSoft: '#ECF5F0',
        text1: '#142019',
        text2: '#355244',
        text3: '#5B7669',
        brand1: '#1A7F64',
        brand2: '#126A53',
        brand3: '#0B5542',
        brandSoft: 'rgba(26, 127, 100, 0.12)',
        divider: 'rgba(8, 32, 20, 0.1)',
        sidebarBg: '#ECF5F0',
        navBg: '#F6FBF8'
      },
      dark: {
        bg: '#0E1712',
        bgAlt: '#0A120D',
        bgElevated: '#17221C',
        bgSoft: '#0A120D',
        text1: '#E7F2EC',
        text2: '#B7CEC1',
        text3: '#87A294',
        brand1: '#49AF8B',
        brand2: '#329675',
        brand3: '#24775D',
        brandSoft: 'rgba(73, 175, 139, 0.16)',
        divider: 'rgba(255, 255, 255, 0.12)',
        sidebarBg: '#0A120D',
        navBg: '#0E1712'
      }
    }
  },
  locales: [
    {
      key: 'en',
      label: 'English',
      lang: 'en',
      labels: {
        lectures: 'Modules',
        projects: 'Projects',
        resources: 'Resources',
        skills: 'Guides',
        resourceLibrary: 'Resource Library',
        tryHarness: 'Open Templates ↗'
      }
    }
  ],
  curriculum: {
    en: {
      lectures: [
        { text: 'Welcome', link: '/en/' },
        { text: 'Module 1', link: '/en/lectures/module-01/' },
        { text: 'Module 2', link: '/en/lectures/module-02/' }
      ],
      projects: [
        { text: 'Overview', link: '/en/projects/' },
        { text: 'Project 1', link: '/en/projects/project-01/' }
      ],
      resources: [
        { text: 'Overview', link: '/en/resources/' },
        { text: 'Templates', link: '/en/resources/templates/' },
        { text: 'Reference', link: '/en/resources/reference/' },
        { text: 'Advanced', link: '/en/resources/openai-advanced/' }
      ],
      skills: [{ text: 'Guides', link: '/en/skills/' }]
    }
  },
  homeByLocale: {
    en: {
      hero: {
        title: 'Welcome to ${escapeForJs(title)}',
        intro: [
          'This is a scaffolded course created by course-builder.',
          'Use this starter to replace the sample modules, projects, and resources with your own curriculum.'
        ],
        references: [
          {
            label: 'Builder repository',
            href: '${escapeForJs(repoTreeUrl.replace(/\/tree\/main$/, ""))}'
          }
        ]
      },
      sections: {
        start: 'Start here',
        mechanism: 'Course map',
        learn: 'You will cover',
        next: 'Next steps'
      },
      startText:
        'This starter course is intentionally minimal so you can adapt it quickly.',
      cards: [
        {
          title: 'Modules',
          body: 'Teach the core ideas in a few compact lessons.',
          href: './lectures/module-01/'
        },
        {
          title: 'Projects',
          body: 'Add hands-on work that proves understanding.',
          href: './projects/'
        },
        {
          title: 'Resources',
          body: 'Keep templates, references, and supporting material together.',
          href: './resources/'
        }
      ],
      mechanismText:
        'A good course structure connects concept, practice, and reusable material.',
      mechanismMermaid: \`graph LR
        A["Concept"] --> B["Practice"]
        B --> C["Reference"]
        C --> D["Iteration"]\`,
      learnItems: [
        'Customize the branding and messaging.',
        'Replace the sample curriculum with your own structure.',
        'Add markdown content under courses/<slug>/docs.'
      ],
      nextIntro: 'Replace these sample entry points with your real course flow.',
      nextSteps: [
        {
          title: 'Module 1',
          description: 'Start by replacing the first module.',
          href: './lectures/module-01/'
        },
        {
          title: 'Project 1',
          description: 'Add the first applied exercise.',
          href: './projects/project-01/'
        }
      ]
    }
  }
};

export default courseManifest;
`;
}

function buildRootIndex() {
  return `---
layout: page
---

<script setup>
if (typeof window !== "undefined") {
  const base = import.meta.env.BASE_URL || "/";
  window.location.replace(\`\${base}en/\`);
}
</script>

<div style="display:flex;min-height:60vh;align-items:center;justify-content:center;">
  <p>Loading...</p>
</div>
`;
}

function buildFileMap(title) {
  return new Map([
    ["index.md", buildRootIndex()],
    ["en/index.md", "<CourseHome />\n"],
    [
      "en/lectures/module-01/index.md",
      `# Module 1

Introduce the first core concept for ${title}.

## Goal

Explain what learners should understand after this module.
`,
    ],
    [
      "en/lectures/module-02/index.md",
      `# Module 2

Use this module to deepen the course after the opening lesson.
`,
    ],
    [
      "en/projects/index.md",
      `# Projects

Use projects to turn the course material into real output.
`,
    ],
    [
      "en/projects/project-01/index.md",
      `# Project 1

Define the first practical exercise for ${title}.
`,
    ],
    [
      "en/resources/index.md",
      `# Resources

Keep templates, references, and extra material here.
`,
    ],
    [
      "en/resources/templates/index.md",
      `# Templates

Add copy-ready assets that students can reuse directly.
`,
    ],
    [
      "en/resources/reference/index.md",
      `# Reference

Store short supporting notes, definitions, and checklists here.
`,
    ],
    [
      "en/resources/openai-advanced/index.md",
      `# Advanced

Use this section for deeper material once the core course is stable.
`,
    ],
    [
      "en/skills/index.md",
      `# Guides

Use this section for operating guides, playbooks, or reusable teaching aids.
`,
    ],
  ]);
}

const args = process.argv.slice(2);
const slug = args[0];
const title = args.slice(1).join(" ").trim() || (slug ? toTitleCase(slug) : "");

if (!slug) {
  printUsage();
  process.exit(1);
}

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error(`Invalid course slug: ${slug}`);
  console.error("Use lowercase letters, numbers, and hyphens only.");
  process.exit(1);
}

const courseDir = path.join(coursesDir, slug);
if (fs.existsSync(courseDir)) {
  console.error(`Course already exists: courses/${slug}`);
  process.exit(1);
}

const docsDir = path.join(courseDir, "docs");
fs.mkdirSync(docsDir, { recursive: true });

for (const [relativePath, contents] of buildFileMap(title)) {
  const targetPath = path.join(docsDir, relativePath);
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, contents, "utf8");
}

fs.writeFileSync(
  path.join(courseDir, "course.manifest.mjs"),
  buildManifest({
    title,
    description: toCourseDescription(title),
    repoTreeUrl: getRepoTreeUrl(),
  }),
  "utf8",
);

console.log(`Created course scaffold: courses/${slug}`);
console.log(`Title: ${title}`);
console.log("");
console.log("Next steps:");
console.log(`- npm run course:activate -- ${slug}`);
console.log(`- edit courses/${slug}/course.manifest.mjs`);
console.log(`- replace the sample markdown under courses/${slug}/docs`);
