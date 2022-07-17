class logmain{
    navigatetourl(){
        return cy.visit("/")
    }
    clickonsignin(){
        return cy.get('#nav-link-accountList-nav-line-1').click()
    }
    enterphone(){
        return cy.get('#ap_email')
    }
    continue(){
        return cy.get('.a-button-input').click()//Used class as identifier
    }
    givepassword(){
        //return cy.get('#ap_password').type(password['password1'])
        return cy.get('#ap_password')
    }
    cl(){
        cy.get('#signInSubmit').click()
    }
    valuser(){
        return cy.get("#nav-link-accountList-nav-line-1")
    }
    cllog(){
        return cy.get(':nth-child(31) > .hmenu-item')
    }
    searchbox(){
        return cy.get('#twotabsearchtextbox')
    }
    valfirstitem(){
        return cy.xpath("(//span[contains(@class,'color')][contains(text(),'Samsung')])[1]")
    }
    valseconditem(){
        return cy.xpath("(//span[contains(@class,'color')][contains(text(),'Samsung')])[2]")
    }
    valthirditem(){
       return  cy.xpath("(//span[contains(@class,'color')][contains(text(),'Samsung')])[3]").contains('Samsung')
    }
    contatcout(){
        return cy.xpath('//*[@id="sc-subtotal-label-buybox"]')
    }
    countincart(){
       return cy.get('#nav-cart-count')
    }
    signout(){
        return cy.get('#nav-main > .nav-left').click()
    }
    gotourl(){
        return cy.url()
    }
}
export default logmain