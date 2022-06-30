
import { When, Then ,And} from "cypress-cucumber-preprocessor/steps";

When("use GET method", () => { 
    cy.request("http://localhost:3000/posts/").then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).not.to.be.empty;
    expect(response.body.length).to.greaterThan(1)
   //expect(response.Headers).has.property("Content-Type","application/json; charset=utf-8")
    //expect(response.body).to.have.property('info')
    //expect(response.body.info).to.have.property('ver','1.3')
})});
Then("use POST method", () => {
    cy.request({
        method:'POST',
        url:'http://localhost:3000/posts',
        body:{
            "id":15,"title": "json-server7","author": "typicode6"},
        failOnStatusCode: false
     } ).then(($b)=>{
        expect($b.body).has.property("author","typicode6")
        expect($b.status).to.eq(201);
        expect($b.body).not.to.be.empty;
        expect($b.body).has.property("id",15)
     })
 });

     
And("edit using PUT method", () => {
    cy.request({
        method:'PUT',
        url:'http://localhost:3000/posts/1',
        body:{
            "id":1,
            "title": "json-server7",
            "author": "Nuthan Kishore"
        }
    }).then(($a)=>{
        expect($a.body).has.property("author","Nuthan Kishore")
        expect($a.status).to.eq(200)
    })
});

And("Delete a row uing DELETE method", () => {
    cy.request({
        method:"DELETE",
        url:"http://localhost:3000/posts/15",
        failOnStatusCode: false
    }).then((a)=>{
        expect(a.status).to.eq(200)
    })
});
Then("use any wrong url", () => {
    cy.request({
        method:"DELETE",
        url:"http://localhost:3000/posts/",
        failOnStatusCode: false
    }).then((a)=>{
        expect(a.status).to.eq(404)
    })
});
