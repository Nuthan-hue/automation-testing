import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I login', () => {

  cy.loginWith({ email: 'xyz@gmail.com', password: 'my password'})

})

Then('the url is {word}', (url) => {

  cy.url()

    .should('eq', `${Cypress.config().baseUrl}${url}`)

})

Then('I\'m logged in' , () => {

  cy.window().its('localStorage.email')

    .should('eq', 'xyz@gmail.com')

})