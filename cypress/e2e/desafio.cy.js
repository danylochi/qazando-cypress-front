/// <reference types="cypress"/>
const user_data = require('../fixtures/user_create.json')


describe('Login de usuário', () => {
    beforeEach('Acessandopagina de cadastro', () => {
        cy.accessRegistrerPage()
    })
    

    it('Validar campo span de email vazio', () => {

        cy.saveRegistrer()
        cy.checkMessage('E-mail inválido')     


    })

    it('Validar o campo senha invalida vazio', () => {
       
   
        cy.fillEmail(user_data.email)
        cy.saveRegistrer()
        cy.checkMessage('Senha inválida')          

    })

    it('Validar span campo senha tipo inválido', () => {


        cy.fillEmail(user_data.email)

        cy.fillPassword(1)

        cy.saveRegistrer()

        cy.checkMessage('Senha inválida')


    })


    it('Login realizado com sucesso', () => {


        cy.fillEmail(user_data.email)
        cy.fillPassword(user_data.password)

        cy.saveRegistrer()

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('contain.text', 'Olá', user_data.email)


        cy.get('.swal2-confirm')
            .should('be.visible')
            .click() // Confirma a ação

    })
})