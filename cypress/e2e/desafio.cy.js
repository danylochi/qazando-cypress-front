describe('Cadastro de usuário', () => {
   
    it('Validar campo span de email vazio', () => {
    cy.visit('/'+'login')
    
    cy.get('.account_form > h3')
        .should('be.visible')
    
    cy.get('#btnLogin')
        .click()
    
    cy.get('.invalid_input')
        .should('contain.text', 'E-mail inválido')
        .and('be.visible');
      

    })

    it('Validar o campo senha invalida vazio', () => {
        // Visita a página de login
        cy.visit('/'+'login')
        
        // Digita um e-mail válido no campo de usuário
        cy.get('#user').type('12345@gmail.com')

        
        // Clica no botão de login
        cy.get('#btnLogin').click()
        
        // Verifica se a mensagem de erro "Senha inválida" é exibida
        cy.get('.invalid_input')
            .should('contain.text','Senha inválida')
            .and('be.visible')

    })

    it ('Validar span campo senha tipo inválido', () => {
        cy.visit('/'+'login')
        
        cy.get('#user')
            .should('be.visible')
            .type('12345@gmail.com')

        cy.get('#password')
            .should('be.visible')
            .type('1')

        cy.get('#btnLogin')
            .click()
        
        cy.get('.invalid_input')
            .should('have.text','Senha inválida.')


    })
    

    it ('Login realizado com sucesso', () => {
        cy.visit('/'+'login')   

        cy.get('#user')
            .should('be.visible')
            .type('12345@gmail.com')

        cy.get('#password')
            .should('be.visible')
            .type('123456@A')

        cy.get('#btnLogin')
            .should('be.visible')
            .click()
       

        
        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('contain.text','Olá, 12345@gmail.com')

        
        cy.get('.swal2-confirm')
            .should('be.visible')
            .click() // Confirma a ação

    })
})