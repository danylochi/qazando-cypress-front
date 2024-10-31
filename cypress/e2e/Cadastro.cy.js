/// <reference types="cypress"/>
const user_data = require('../fixtures/user_create.json')


describe('Cadastro de usuário', () => {
    beforeEach('Acessandopagina de cadastro', () => {
        cy.accessRegistrerPage()
    })    

    it('Validar campo span de nome vazio', () => {
       cy.get('#btnRegister')
          .click()
        cy.get('#errorMessageFirstName')
            .should('have.text','O campo nome deve ser prenchido')
    })

    it('Validar o campo email vazio', () => {       
        cy.get('#user')
            .type(user_data.name)
            cy.get('#btnRegister')
              .click()
        cy.get('#errorMessageFirstName')
            .should('have.text','O campo e-mail deve ser prenchido corretamente')

    })

    it('Validar span campo senha tipo inválido', () => {
        cy.get('#user')
         .type(user_data.name)      

        
          cy.get('#email')
            .type(user_data.email)

        cy.get('#password')
            .type('1')

        cy.get('#btnRegister')
            .click()


    })


    it('Login realizado com sucesso', () => {
       
    })
})