import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

Given('Launch URL', ()=> {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
});

Then('Verify the Page Title', ()=> {
    cy.title().should('include', 'ParaBank')
});