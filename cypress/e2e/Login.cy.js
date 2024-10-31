/// <reference types="cypress"/>
const user_data = require('../fixtures/user_create.json')


describe('Login de usuário', () => {
    beforeEach('Acessandopagina de cadastro', () => {
        cy.loginPage()
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
        cy.checkHelloMessage(user_data.email)    
        cy.checkOkMessage()      
    })
})