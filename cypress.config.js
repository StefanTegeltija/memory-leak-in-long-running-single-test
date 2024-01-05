const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;
const { readFileSync } = require('fs');

module.exports = defineConfig({
  experimentalMemoryManagement: true,
  e2e: {
    // baseUrl, etc
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      const envName = config.env.name;
      const text = readFileSync(`./${envName}.json`);
      const values = JSON.parse(text);

      config.env = {
        ...values.env,
      };
      // IMPORTANT: return the config object
      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
  },
});
