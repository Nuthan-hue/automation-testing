import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import HomePage from '../PageObjects/HomePage';
import CheckoutPage from '../PageObjects/CheckoutPage';
import BillingPage from '../PageObjects/BillingPage';

//Object Creation for PageObject Page Class and assigning it to a constant variable

const homePage=new HomePage();
const checkoutPage= new CheckoutPage();
const billingPage=new BillingPage();
    
//test steps 
Given('I open the Account Page for Tools QA', () => {
cy.visit(Cypress.env('https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fb%3Fnode%3D15325111031%26pf_rd_r%3DC4KKJV0H7QD5TRRB6TNV%26pf_rd_p%3D9557d215-29ca-4b57-9dcd-a5505f5bbd4a%26pd_rd_r%3D5d44dc2c-0929-424e-a39e-67eaa519a6cd%26pd_rd_w%3DUjlDO%26pd_rd_wg%3Dn1QJ5%26ref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&'));

And('I do the login for my user by entering email address as {string} and password as {string}', (Email , Password) => {
homePage.getEmail().type(Email);
homePage.getPassword().type(Password);
})

And ('I do the assertions for Register Button and Register successfully by entering new password as {string}', (NewPassword) => {
//homePage.getRegisterButton().should('have.attr','disabled','disabled');
//homePage.getRegisterButton().should('be.disabled');
//homePage.getPassword().type(NewPassword);
homePage.getRegisterButton().click();
})

When ('I do the search for shirts with below specifications', datatable => {
    datatable.hashes().forEach(row => {
    cy.selectProduct(row.ShirtSpec,row.Size,row.Color);
    })
})

Then ('I do the verification on the Cart Page that it contains {string} and {string} and do the checkout successfully' , (ProductText1 , ProductText2) => {
    //End to End Test Completion including Checkout and Placing Order
    checkoutPage.getCartButton().click();
    //Validate if the items we added are successfully there in the cart using should and expect together.
    checkoutPage.getProducts().should(($p) => {
    expect($p).to.have.length(2); // There should be 2 items in cart.
    expect($p.first()).to.contain(ProductText1); // First Element should have blue denim
    expect($p).to.contain(ProductText2); // Verifying that playboy shirt should also be there
    });
    checkoutPage.getCheckoutButton().click();
})

And ('I do the login with same credentials used above {string} and {string}',(Email , Password) => {
    billingPage.getShowLogin().click();
    billingPage.getLoginUserName().type(Email);
    billingPage.getLoginPassword().type(Password);
    billingPage.getLoginButton().click();
})

And ('I enter all the billing details and then place the order', datatable => {
    datatable.hashes().forEach(row => {
    billingPage.getBillingFirstName().clear().type(row.BillingFirstName);
    billingPage.getBillingLastName().clear().type(row.BillingLastName);
    billingPage.getBillingAddress().clear().type(row.StreetAddress);
    billingPage.getStateDropdown().click().then(function(){
        billingPage.getStateSearchBox().clear().type('Haryana').type('{enter');
    });
    billingPage.getBillingCity().clear().type(row.City);
    billingPage.getBillingPostCode().clear().type(row.PostalCode);
    billingPage.getBillingPhone().clear().type(row.Phone);

    //Placing the Order button click by selecting the checkbox

    billingPage.getTermsCheckbox().click();
    billingPage.getPlaceOrderButton().click();
})
})

And ('I verify that order has been successfully placed',() => {
    billingPage.getOrderPlacedText().then(function(element){
    expect(element.text().includes("Thank you")).to.be.true;
})
})
})