const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile:"Cypress/support/e2e.js",
    defaultCommandTimeout: 30000, // dalam milisecond,
    baseUrl : "https://www.saucedemo.com/v1"

  },
});
