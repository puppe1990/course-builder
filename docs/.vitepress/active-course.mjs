import {
  FEATURED_COURSE_SLUG,
  getFeaturedCourseManifest,
} from "./course-registry.mjs";

export const ACTIVE_COURSE_SLUG = FEATURED_COURSE_SLUG;
export const ACTIVE_COURSE_CONTENT_DIR = ACTIVE_COURSE_SLUG
  ? `./courses/${ACTIVE_COURSE_SLUG}`
  : null;
export const ACTIVE_COURSE_REPO_CONTENT_PREFIX = ACTIVE_COURSE_SLUG
  ? `docs/courses/${ACTIVE_COURSE_SLUG}`
  : null;

export default getFeaturedCourseManifest();
