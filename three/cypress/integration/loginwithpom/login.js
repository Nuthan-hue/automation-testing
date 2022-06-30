import logmain from './logmain'
const h=new logmain()
Given("open amazon url",()=>{
    h.navigatetourl()
})
And("click on signin",()=>{
    h.clickonsignin()
})
And("Give mail or mobile number",()=>{
    h.enterphone()
})
And("click on continue",()=>{
    h.continue() 
})
And("give credentials",()=>{
    h.givec()
})
Then("click on signinfull",()=>{
    h.cl()
})
