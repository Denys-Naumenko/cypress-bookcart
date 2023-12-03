export function userRegisterApi() {
    cy.request({
        method: "POST",
        url: Cypress.env('url').register,
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
        url: Cypress.env('url').login,
        body: {
            username: Cypress.env('userData').username,
            password: Cypress.env('userData').password
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        token = response.body.token;
        cy.writeFile('../fixtures/userData.json', { userId: response.body.userDetails.userId });
    })
}

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