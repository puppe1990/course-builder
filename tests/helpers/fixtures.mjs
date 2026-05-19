import { faker } from "@faker-js/faker";

faker.seed(42);

export function createSourceItems() {
  const lectureTitle = faker.lorem.words({ min: 2, max: 4 });
  const projectTitle = faker.lorem.words({ min: 1, max: 3 });
  const resourceTitle = faker.lorem.words({ min: 1, max: 2 });
  const skillTitle = faker.lorem.words({ min: 1, max: 2 });
  const lectureSlug = faker.helpers.slugify(lectureTitle).toLowerCase();

  return {
    lectures: [
      { text: faker.lorem.word(), link: "/en/" },
      { text: lectureTitle, link: `/en/lectures/${lectureSlug}/` }
    ],
    projects: [{ text: projectTitle, link: "/en/projects/" }],
    resources: [{ text: resourceTitle, link: "/en/resources/" }],
    skills: [{ text: skillTitle, link: "/en/skills/" }]
  };
}

export function createLabels(overrides = {}) {
  return {
    lectures: faker.lorem.word(),
    projects: faker.lorem.word(),
    resources: faker.lorem.word(),
    skills: faker.lorem.word(),
    resourceLibrary: faker.lorem.words({ min: 1, max: 2 }),
    tryHarness: `${faker.lorem.words({ min: 1, max: 2 })} ↗`,
    ...overrides
  };
}

export function createEnglishLocaleMeta() {
  return {
    label: faker.location.country(),
    lang: faker.helpers.arrayElement(["en", "en-US", "en-GB"])
  };
}
