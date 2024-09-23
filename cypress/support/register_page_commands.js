/// <reference types="cypress"/>
Cypress.Commands.add('saveRegistrer',()=>{    
    cy.get('#btnLogin')
        .click()

})

Cypress.Commands.add('fillEmail',(email)=>{    
    cy.get('#user')
        .should('be.visible')
        .type(email)

})


Cypress.Commands.add('fillPassword',(password)=>{    
    cy.get('#password')
        .should('be.visible')
        .type(password)          

})

Cypress.Commands.add('checkMessage',(message)=>{    
    cy.get('.invalid_input')
        .should('contain.text', message)

     

})