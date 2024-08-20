describe('Get Elements', () => {
  
  it('Encontrar /Selecionar elementos', () => {
    cy.visit('/')
        .get('.header-logo')

      //para encontrar elementos por texto contains()
    cy.get('#top_header').as('cabecalho')
      .contains('Login')

    //find()
        cy.get('#top_header').find('.fa-user')
    
    //as() - alias
    //serve como atalhos para grandes comandos
    /*        cy.get('cabecalho')
              .find('.fa-user')*/
  })
})  