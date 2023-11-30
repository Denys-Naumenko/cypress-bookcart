export function userRegisterApi() {
    cy.request({
        method: "POST",
        url: "/api/User",
        body: {
            firstname: Cypress.env('userData').username,
            lastname: Cypress.env('userData').lastname,
            username: Cypress.env('userData').username,
            password: Cypress.env('userData').password,
            confirmPassword: Cypress.env('userData').password,
            gender: Cypress.env('userData').gender
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
    })
};

export let token;
export function userLoginApi() {
    cy.request({
        method: "POST",
        url: "/api/Login",
        body: {
            username: Cypress.env('userData').username,
            password: Cypress.env('userData').password
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(response.body);
        token = response.body.token;
    })
};

export function setAuthToken() {
    cy.visit('', {
        onBeforeLoad: (content) => {
            content.window.localStorage.setItem('authToken', token)
        }
    })
};

export function verifyUserLogin() {
    cy.get('.mat-button-wrapper').eq(3).should('contain', Cypress.env('userData').username)
}