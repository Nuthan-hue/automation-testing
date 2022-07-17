import {Then,When,And,Given} from "cypress-cucumber-preprocessor/steps"
Given("Non",()=>{
    cy.wait(1000)
    cy.task('readJson','cypress.json')
})
