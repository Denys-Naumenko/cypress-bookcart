const { defineConfig } = require("cypress");
const { faker } = require("@faker-js/faker");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://bookcart.azurewebsites.net",
    env: {
      userData: {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        confirmPassword: faker.internet.password(),
        gender: faker.person.sex()
      },
    },
    setupNodeEvents(on, config) {
    },
  },
});