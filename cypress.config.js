const { defineConfig } = require("cypress");
const { faker } = require("@faker-js/faker");


module.exports = defineConfig({
  projectId:"yp4yom",
  e2e: {
    baseUrl: "https://bookcart.azurewebsites.net",
    env: {
      url: {
        register: '/api/User',
        login: '/api/Login',
        wishlist: '/api/Wishlist',
        book: '/api/Book'
      },
      userData: {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        confirmPassword: faker.internet.password(),
        gender: faker.person.sex(),
        userId: ''
      },
    },
    setupNodeEvents(on, config) {
    },
  },
},
  {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: true,
      html: false,
      json: true,
    }
  }
);