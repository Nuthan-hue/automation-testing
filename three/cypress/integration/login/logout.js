import {Then,When,And,Given} from "cypress-cucumber-preprocessor/steps"
import logmain from '../loginwithpom/logmain'
const obj=new logmain()
Then("logout amazon",()=>{
    obj.signout()
})
Then("click on signout",()=>{
    obj.cllog().click()
})
