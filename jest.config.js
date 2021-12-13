module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  // preset: "@vue/cli-plugin-unit-jest",
  collectCoverageFrom: [
    "**/*.{js,vue}",
    "!**/dist/**",
    "!**/node_modules/**",
    "!**/build/**",
    "!**/config/**",
    // "!**/coverage/**",
    "!**/src/common/**",
    "!**/tests/**",
    "!**/src/store/**",
    "!**/src/router/**",
    "!**/src/router/**",
    "!**/src/middleware/**",
    "!**/src/layouts/**",
    "!jest.config.js",
    "!**/src/main.js"
  ]
};
