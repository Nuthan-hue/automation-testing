//validating username and search items
import logmain from '../loginwithpom/logmain'
const obj=new logmain()
And("Validate username",()=>{
    obj.valuser().then(function($welcomems){
        cy.log($welcomems.text())
        expect($welcomems.text()).to.match(/Hello.*/)
        //cy.contains(/Hello.*/).click()
    })
})
And("go to search",()=>{
    obj.searchbox().type("samsung{enter}")
    cy.wait(1000)
})

And("validate url",()=>{
    obj.gotourl().should("include","samsung")
}) 

And("validate first item name",()=>{
//cy.xpath("//span[contains(@class='color')][contains(text(),'samsung')")
    obj.valfirstitem()
    .then(function($welcomem){
        cy.log($welcomem.text())
        expect($welcomem.text()).to.match(/Samsung.*/)
    })
})
And("validate second item name",()=>{
    obj.valseconditem()
    .then(function($welcomem){
        cy.log($welcomem.text())
        expect($welcomem.text()).to.match(/Samsung.*/)
    })
})
And("validate third item name and items in cart",()=>{
    obj.valthirditem()
    //cy.xpath("(//span[contains(@class,'color')][contains(text(),'Samsung')])[3]").contains('Samsung')
    obj.countincart().contains(2).click()
    obj.countincart().invoke('text').as('number')
})
Then("Compare items quantity",()=>{
    cy.get("@number").then(($x)=>{
        obj.contatcout().contains($x)
        })
    })