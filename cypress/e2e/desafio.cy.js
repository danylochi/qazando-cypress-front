describe('Cadastro de usuário', () => {
   
    it('Validar campo nome vazio', () => {
    cy.visit('/'+'login')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').contains('E-mail inválido')   

    })

    it('Validar campo e-mail vazio', () => {
        cy.visit('/'+'login')
        
        cy.get('#user').type('12345@gmail.com')

        /*cy.get('#password')
            .type()*/

        cy.get('#btnLogin').click()

        cy.get('.invalid_input')
            .contains('Senha inválida')



    })

    it ('Validar campo senha inválido', () => {
        cy.visit('/'+'login')
        
        cy.get('#user').type('12345@gmail.com')

        cy.get('#password')
            .type('1')

        cy.get('#btnLogin').click()
        
        cy.get('.invalid_input')
            .contains('Senha inválida')


    })
    

    it ('Cadastro realizado com sucesso', () => {
        cy.visit('/'+'login')   

        cy.get('#user').type('12345@gmail.com')

        cy.get('#password')
        .type('123456@A')

        cy.get('#btnLogin').click()
       
        cy.clock()
        cy.get('#swal2-html-container').contains('12345@gmail.com')
        cy.tick(8000)
        
        cy.get('.swal2-confirm').click()

    })
})