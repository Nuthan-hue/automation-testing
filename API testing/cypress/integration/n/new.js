describe("API testing",()=>{
    it('fetchdetails',()=>{
        cy.request("http://localhost:3000/posts/").then((response) => {
            expect(response.status).to.eq(200)
            cy.log(response.body.id)
        })
    })
    it('post one record',()=>{
        cy.request({
            method:'POST',
            url:'http://localhost:3000/posts',
            body:{
                "id":13,"title": "json-server","author": "typicode6"},
            failOnStatusCode: false
         } ).then(($b)=>{
            expect($b.body).has.property("author","typicode6")
            expect($b.status).to.eq(201);
            expect($b.body).not.to.be.empty;
            expect($b.body).has.property("id",13)
         })
    })
    it('edit using PUT',()=>{
        cy.request({
            method:'PUT',
            url:'http://localhost:3000/posts/1',
            body:{
                "id":8,
                "title": "json-server7",
                "author": "Nuthan Kishore"
            }
        }).then(($a)=>{
            expect($a.body).has.property("author","Nuthan Kishore")
            expect($a.status).to.eq(200)
        })
        
    })
    it("delete a record",()=>{
        cy.request({
        method:"DELETE",
        url:"http://localhost:3000/posts/11",
        failOnStatusCode: false
    }).then((a)=>{
        expect(a.status).to.eq(200)
    })
    })
    it.only(" wrong url",()=>{
        cy.request({
        method:"DELETE",
        url:"http://localhost:3000/posts/",
        failOnStatusCode: false
    }).then((a)=>{
        expect(a.status).to.eq(404)
    })
    })
    it('post duplicate record',()=>{
        cy.request({
            method:'POST',
            url:'http://localhost:3000/posts',
            body:{
                "id":8,"title": "json-server7","author": "typicode6"},
            failOnStatusCode: false
         } ).then(($b)=>{
            expect($b.status).to.eq(500);
         })
    })
})