import { getFirstAvailableBook } from '../models/book';
import { token } from '../models/userApiRegister';

export function getWishlist() {
    cy.readFile('../fixtures/userData.json').then((userData) => {
        cy.request({
            method: "GET",
            url: `${Cypress.env('url').wishlist}/${userData.userId}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(response.body);
        })
    })
};

export function addItemToWishlist() {
    getFirstAvailableBook();
    cy.readFile('../fixtures/userData.json').then((userData) => {
        cy.readFile('../fixtures/bookData.json').then((bookData) => {
            cy.request({
                method: "POST",
                url: `${Cypress.env('url').wishlist}/ToggleWishlist/${userData.userId}/${bookData.bookId}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((response) => {
                expect(response.status).to.eq(200);
            })
        })
    })
};

export function clearWishlist() {
    cy.readFile('../fixtures/userData.json').then((userData) => {
        cy.request({
            method: "DELETE",
            url: `${Cypress.env('url').wishlist}/${userData.userId}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
        })
    })
};