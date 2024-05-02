const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F',
     
    viewportHeight: 1080,
    viewportWidth: 1920,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

});
