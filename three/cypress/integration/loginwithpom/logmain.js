import password from "C:\\Users\\sai\\Desktop\\cypress files\\three\\cypress\\integration\\password.json"
class logmain{
    navigatetourl(){
        return cy.visit("/")
    }
    clickonsignin(){
        return cy.get('#nav-link-accountList-nav-line-1').click()
    }
    enterphone(){
        return cy.get('#ap_email').type(password['username1'])
    }
    continue(){
        return cy.get('.a-button-input').click()//Used class as identifier
    }
    givec(){
        return cy.get('#ap_password').type(password['password1'])
    }
    cl(){
        cy.get('#signInSubmit').click()
    }
}
export default logmain