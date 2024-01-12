import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('Launch OrangeHRM application URL', ()=> {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
});

Then('Enter the Valid username', ()=> {
    cy.get("[name='username']").type('Admin')
});

And('Enter the Valid password', ()=> {
    cy.get("[name='password']").type('admin123')
});

Then('Click on Login button', ()=> {
    cy.get("[type='submit']").click()
});

And('Verify login is successful', ()=> {
    cy.get('.oxd-text--h6').should('contain', "Dashboard")
    cy.get('.oxd-text--h6').should("be.visible")
});