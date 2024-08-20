//// <reference types="cypress"/>

describe('Interações', () => {
  
  /*it('Login com sucesso', () => {
    cy.visit('/')
      .get('.header-logo')
    
    cy.get('.form-control')
      .type('dayanecristina@gmail.com') 

  })*/

  it('Click', () => {
    cy.visit('/')
      .get('.header-logo')

      //click normal
      /*cy.get('.fa-user').click()*/
      
        //click duplo
     // cy.get('.fa-user')
     //   .dblclick()

      //click direito
     // cy.get('.fa-user')
     //   .rightclick()

      //clickcoordenadas
      /*cy.get('.fa-user').click(200,200, {force:true})*/
      
      //apertar enter
      cy.get('.form-control')
      .type('dayanecristina@gmail.com{enter}') 

  })

  
  it('Click', () => {
    cy.visit('/')
      .get('.header-logo')

    cy.get('.footer_one_widget')
      .contains('Checkout View Two') 
      .click()
    
    cy.get('#country')
      .select('Algeria')
    

  })

})