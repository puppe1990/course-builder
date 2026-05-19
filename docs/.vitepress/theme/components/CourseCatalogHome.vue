<script setup>
import { computed } from "vue";
import { withBase } from "vitepress";
import {
  getFeaturedCourseEntry,
  getCourseCatalog,
} from "../../course-catalog.mjs";

const courses = computed(() => getCourseCatalog());
const featuredCourse = computed(() => getFeaturedCourseEntry());
const hasCourses = computed(() => courses.value.length > 0);

function formatCount(value, singular, plural) {
  return `${value} ${value === 1 ? singular : plural}`;
}

function resolveSitePath(path) {
  return withBase(path);
}
</script>

<template>
  <div class="course-catalog">
    <section class="course-catalog__hero">
      <p class="course-catalog__eyebrow">Course Builder</p>
      <h1>Biblioteca de cursos</h1>
      <p class="course-catalog__lead">
        Esta instalação reúne os cursos disponíveis no mesmo build. Cada card
        aponta para uma rota própria em
        <code>/courses/&lt;slug&gt;/&lt;locale&gt;/</code>, então agora você
        pode navegar entre os cursos sem trocar a configuração do projeto.
      </p>

      <div v-if="featuredCourse" class="course-catalog__active">
        <span class="course-catalog__active-label">Curso em destaque</span>
        <strong>{{ featuredCourse.title }}</strong>
        <a :href="resolveSitePath(featuredCourse.homePath)">Abrir destaque</a>
      </div>
      <div v-else class="course-catalog__active course-catalog__active--empty">
        <span class="course-catalog__active-label"
          >Sem cursos sincronizados</span
        >
        <strong>Nenhum curso disponível no momento</strong>
        <span>
          Adicione conteúdos em
          <code>course-builder-courses</code>
          e rode o sync novamente.
        </span>
      </div>
    </section>

    <section v-if="hasCourses" class="course-catalog__grid">
      <article
        v-for="course in courses"
        :key="course.slug"
        class="course-catalog__card"
        :class="{ 'is-active': course.featured }"
      >
        <div class="course-catalog__card-top">
          <span v-if="course.featured" class="course-catalog__badge"
            >Destaque</span
          >
          <span v-else class="course-catalog__badge is-muted">Curso</span>
          <code>{{ course.slug }}</code>
        </div>

        <h2>{{ course.title }}</h2>
        <p>{{ course.description }}</p>

        <dl class="course-catalog__meta">
          <div>
            <dt>Idiomas</dt>
            <dd>
              {{ course.locales.map((locale) => locale.label).join(", ") }}
            </dd>
          </div>
          <div>
            <dt>Estrutura</dt>
            <dd>
              {{
                [
                  formatCount(course.counts.lectures, "módulo", "módulos"),
                  formatCount(course.counts.projects, "trilha", "trilhas"),
                  formatCount(course.counts.resources, "recurso", "recursos"),
                ].join(" • ")
              }}
            </dd>
          </div>
        </dl>

        <p class="course-catalog__hint">
          Rota inicial:
          <code>{{ course.homePath }}</code>
        </p>

        <div class="course-catalog__actions">
          <a
            :href="resolveSitePath(course.homePath)"
            class="course-catalog__action"
          >
            Entrar no curso
          </a>
          <a
            v-if="course.repoContentUrl"
            :href="course.repoContentUrl"
            class="course-catalog__action is-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver arquivos
          </a>
        </div>
      </article>
    </section>

    <section v-else class="course-catalog__empty">
      <h2>Nenhum curso encontrado</h2>
      <p>
        O builder iniciou corretamente, mas a pasta externa de cursos está
        vazia.
      </p>
      <p>
        Caminho esperado:
        <code>/Users/matheuspuppe/Desktop/estudo/course-builder-courses</code>
      </p>
    </section>
  </div>
</template>
