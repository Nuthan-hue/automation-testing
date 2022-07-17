import logmain from '../loginwithpom/logmain'
import {Then,When,And,Given} from "cypress-cucumber-preprocessor/steps"
import password from '/Users/shiyad/Documents/autotesting/automation-testing/three/cypress/integration/password.json'
import p from '/Users/shiyad/Desktop/untitled folder/nuthan/pwd.json'
const obj=new logmain()
// const fs=require("fs");
// const a='/Users/shiyad/Documents/autotesting/automation-testing/three/cypress/integration/password.json'
// const data=fs.readFile(a)
// console.log(data)
// cy.log(data)
// password["password1"]="asdfgh"
Given("open amazon url",()=>{
    obj.navigatetourl()

})
And("click on signin",()=>{
   // cy.get('#nav-link-accountList-nav-line-1').click()
   obj.clickonsignin()
})

Then("Give mail or mobile number {string}",(username)=>{
    obj.enterphone().type(username)
})
And("click on continue",()=>{
    obj.continue()
})
And("give credentials",()=>{
    // cy.fixture('pas').then(function(data){
    //     h.givepassword().type(data.password1);
    //   })
    obj.givepassword().type(p['password']);
})
Then("click on signinfull",()=>{
    obj.cl()
    cy.wait(1000)
})