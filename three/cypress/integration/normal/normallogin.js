describe("login",()=>{
    it("sucessful login",()=>{
        cy.visit('/')
        cy.get('#ap_email').type("9381518678")
        cy.get('.a-button-inner > #continue').click()
        cy.get('#ap_password').type("skyNuthan23!!")
        cy.get('#signInSubmit').click()
        cy.get('#twotabsearchtextbox').click().type("fruit")
        cy.get('.s-image').click

    });
})