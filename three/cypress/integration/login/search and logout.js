import {Then,When,And,Given} from "cypress-cucumber-preprocessor/steps"
And("go to search",()=>{
    cy.get('#twotabsearchtextbox').type("samsung{enter}")
})
And("validate url",()=>{
    cy.url().should("include","samsung")
}) 
And("validate first item name",()=>{
//cy.xpath("//span[contains(@class='color')][contains(text(),'samsung')")
cy.xpath("(//span[contains(@class,'color')][contains(text(),'Samsung')])[1]")
    .then(function($welcomem){
        const welocome=$welcomem.text()
        cy.log(welocome)
        expect(welocome).to.match(/Samsung.*/)
    })
})
And("validate second item name",()=>{
cy.xpath("(//span[contains(@class,'color')][contains(text(),'Samsung')])[2]").contains('Samsung')
})
And("validate third item name",()=>{
    cy.xpath("//div[@data-cel-widget='search_result_4']//span[@class='a-size-medium a-color-base a-text-normal']").contains('Samsung')
    cy.get('#nav-cart-count').contains(2).click()
    cy.get('#nav-cart-count').invoke('text').as('lion')
})
Then("Check items quantity",()=>{
    cy.get("@lion").then(($x)=>{
        cy.xpath('//*[@id="sc-subtotal-label-buybox"]').contains($x)
        })
    })
Then("logout amazon",()=>{
    cy.get('#nav-main > .nav-left').click()
})
Then("go to signout",()=>{
    cy.get(':nth-child(31) > .hmenu-item').click()
})
