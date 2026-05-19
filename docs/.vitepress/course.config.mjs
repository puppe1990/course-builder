import {
  getFeaturedCourseManifest,
  getPlatformConfig,
} from "./course-registry.mjs";

export default {
  ...getPlatformConfig(),
  theme: getFeaturedCourseManifest().theme,
};
