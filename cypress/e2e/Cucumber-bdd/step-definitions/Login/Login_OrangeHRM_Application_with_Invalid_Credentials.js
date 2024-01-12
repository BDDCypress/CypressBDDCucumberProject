import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Then('Enter the InValid username {string}', (user1)=> {
    cy.get("[Placeholder='Username']").type(user1)
});

And('Verify the error message displayed {string}', (errMessage)=> {
    cy.get('div.oxd-alert-content--error .oxd-text--p')
      .should('contain',errMessage)
    // cy.get('div.oxd-alert-content--error .oxd-text--p')
    //   .should('contain','Invalid credentials')
});