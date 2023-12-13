export function getFirstAvailableBook() {
    cy.request({
        method: "GET",
        url: `${Cypress.env('url').book}`
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.writeFile('../fixtures/bookData.json', { bookId: response.body[0].bookId });
    })
}