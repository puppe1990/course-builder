<script setup>
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { useData, useRoute } from "vitepress";
import { getCourseHomeForCourse } from "../../course-content.mjs";
import {
  resolveCourseContextFromPath,
  resolveCourseContextFromRelativePath,
} from "../../course-routes.mjs";

const route = useRoute();
const { page } = useData();
const mermaidHost = ref(null);
let mermaidRenderSequence = 0;

const courseContext = computed(
  () =>
    resolveCourseContextFromRelativePath(page.value.relativePath) ||
    resolveCourseContextFromPath(route.path),
);

const content = computed(() => {
  if (!courseContext.value) return null;

  return getCourseHomeForCourse(
    courseContext.value.slug,
    courseContext.value.locale,
  );
});

async function renderMechanismDiagram() {
  if (typeof window === "undefined" || !mermaidHost.value) return;

  const source = content.value?.mechanismMermaid?.trim();
  if (!source) {
    mermaidHost.value.innerHTML = "";
    return;
  }

  const { default: mermaid } = await import("mermaid");
  mermaid.initialize({ startOnLoad: false });

  const renderId = `course-home-mermaid-${(mermaidRenderSequence += 1)}`;
  const { svg, bindFunctions } = await mermaid.render(renderId, source);

  mermaidHost.value.innerHTML = svg;
  bindFunctions?.(mermaidHost.value);
}

onMounted(() => {
  renderMechanismDiagram();
});

watch(
  () => content.value?.mechanismMermaid,
  async () => {
    await nextTick();
    renderMechanismDiagram();
  },
);
</script>

<template>
  <div v-if="content" class="course-home">
    <h1>{{ content.hero.title }}</h1>

    <p v-for="paragraph in content.hero.intro" :key="paragraph">
      {{ paragraph }}
    </p>

    <ul class="index-list">
      <li v-for="reference in content.hero.references" :key="reference.href">
        <a :href="reference.href" target="_blank" rel="noopener noreferrer">
          {{ reference.label }}
        </a>
      </li>
    </ul>

    <h2>{{ content.sections.start }}</h2>
    <p>{{ content.startText }}</p>

    <div class="card-grid">
      <a
        v-for="card in content.cards"
        :key="card.href"
        :href="card.href"
        class="card"
      >
        <h3>{{ card.title }}</h3>
        <p>{{ card.body }}</p>
      </a>
    </div>

    <h2>{{ content.sections.mechanism }}</h2>
    <p>{{ content.mechanismText }}</p>
    <div ref="mermaidHost" class="mermaid" />

    <h2>{{ content.sections.learn }}</h2>
    <ul class="index-list">
      <li v-for="item in content.learnItems" :key="item">
        {{ item }}
      </li>
    </ul>

    <h2>{{ content.sections.next }}</h2>
    <p>{{ content.nextIntro }}</p>
    <ul class="index-list">
      <li v-for="step in content.nextSteps" :key="step.href">
        <a :href="step.href">{{ step.title }}</a
        >: {{ step.description }}
      </li>
    </ul>
  </div>
</template>
