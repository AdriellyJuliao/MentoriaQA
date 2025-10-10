const { defineConfig } = require('cypress');
const { setupJUnitPlugin } = require('@saucelabs/cypress-junit-plugin');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      setupJUnitPlugin(on, config, {});
      return config;
    },
  },
});