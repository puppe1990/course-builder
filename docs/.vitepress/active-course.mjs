import {
  FEATURED_COURSE_SLUG,
  getFeaturedCourseManifest,
} from "./course-registry.mjs";

export const ACTIVE_COURSE_SLUG = FEATURED_COURSE_SLUG;
export const ACTIVE_COURSE_CONTENT_DIR = `./courses/${ACTIVE_COURSE_SLUG}`;
export const ACTIVE_COURSE_REPO_CONTENT_PREFIX = `docs/courses/${ACTIVE_COURSE_SLUG}`;

export default getFeaturedCourseManifest();
