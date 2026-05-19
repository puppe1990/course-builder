<script setup>
import { computed } from "vue";
import { useData } from "vitepress";
import { getCourseHome } from "../../course-content.mjs";

const { lang } = useData();

const locale = computed(() => {
  const raw = lang.value || "en";
  if (raw.startsWith("ko")) return "ko";
  return "en";
});

const content = computed(() => getCourseHome(locale.value));
</script>

<template>
  <div class="course-home">
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
    <pre class="mermaid">{{ content.mechanismMermaid }}</pre>

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
