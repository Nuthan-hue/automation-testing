import password from "C:\\Users\\sai\\Desktop\\cypress files\\three\\cypress\\integration\\password.json"
import logmain from '../loginwithpom/logmain'
import {Then,When,And,Given} from "cypress-cucumber-preprocessor/steps"
const h=new logmain()
Given("open amazon url",()=>{
    //h.navigatetourl()
    cy.visit("/")
})
And("click on signin",()=>{
    cy.get('#nav-link-accountList-nav-line-1').click()
})
//And("Give wrong username",()=>{
  //  cy.get('#ap_email').type(9381)
    //h.continue()
    //cy.get('.a-list-item').then(($link)=>{
     //   const text=$link.text();
       // expect(text).to.match(/We cannot find an account with that mobile number*/)
   // })
//})
Then("Give mail or mobile number {string}",(username)=>{
    cy.get('#ap_email').type(username)
})
And("click on continue",()=>{
    //cy.get('.a-button-input').click()//Used class as identifier
    h.continue()
})
And("give wrong credentials",()=>{
    cy.get('#ap_password').type('qdfg')
})
Then("click signinfull",()=>{
    h.cl()
})
And("check whether problem page loaded",()=>{
    cy.get('.a-list-item').then(($link)=>{
        const text=$link.text();
        expect(text).to.match(/Your password is incorrect*/)
    })
    cy.log("Password is wrong,Pls give rt password")
})
And("give credentials",()=>{
    h.givec()
})
Then("click on signinfull",()=>{
    h.cl()
})

And("Validate username",()=>{
    cy.get("#nav-link-accountList-nav-line-1").then(function($welcomems){
        const welocome=$welcomems.text()
        cy.log(welocome)
        expect(welocome).to.match(/Hello.*/)
        //cy.contains(/Hello.*/).click()
    })
})



// cy.get('[data-testid="#nav-link-accountList-nav-line-1"]').should('include.text','Nuthan')
//cy.get("#nav-link-accountList-nav-line-1").should('include.text','Nuthan')

//  const welocome=$welcomems.text()
//  cy.log(welocome)
//  expect(welocome).eq('Hello, Nuthan')