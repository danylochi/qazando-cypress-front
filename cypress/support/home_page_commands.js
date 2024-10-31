/// <reference types="cypress"/>
Cypress.Commands.add('loginPage',()=>{
    
    cy.visit('/' + 'login')


    cy.get('.account_form > h3')
        .should('be.visible')
        
    cy.get('#btnLogin')
        .should('be.visible')

})

Cypress.Commands.add('accessRegistrerPage',()=>{
    
    cy.visit('/' + 'register')


    cy.get('.account_form')
        .should('be.visible')
        


})