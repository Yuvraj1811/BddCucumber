const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '81nyze',
  
  env: {
    OrangeURL: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/**/*.{js,feature}",
    baseUrl: "https://testautomationpractice.blogspot.com/"
  },

});
