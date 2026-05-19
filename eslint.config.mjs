import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

const ignores = [
  "node_modules/**",
  "docs/.vitepress/dist/**",
  ".git-history-backup-20260519/**",
  "projects/**",
  "docs-readme/**",
  "skills/**",
  "docs/courses/**",
];

const jsFiles = [
  "docs/.vitepress/**/*.{js,mjs}",
  "scripts/**/*.{js,mjs}",
  "tests/**/*.{js,mjs}",
];

const tsFiles = ["scripts/**/*.ts", "docs/.vitepress/**/*.ts"];
const browserFiles = ["docs/.vitepress/theme/**/*.{js,mjs,ts}"];

export default [
  { ignores },
  {
    ...js.configs.recommended,
    files: jsFiles,
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    files: browserFiles,
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: tsFiles,
    languageOptions: {
      ...config.languageOptions,
      parserOptions: {
        ...config.languageOptions?.parserOptions,
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.node,
      },
    },
  })),
];
