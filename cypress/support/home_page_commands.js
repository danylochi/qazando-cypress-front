/// <reference types="cypress"/>
Cypress.Commands.add('accessRegistrerPage',()=>{
    
    cy.visit('/' + 'login')


    cy.get('.account_form > h3')
        .should('be.visible')
        
    cy.get('#btnLogin')
        .should('be.visible')





})