/// <reference types="cypress"/>

//Elementos

const elements = {
    buttons:{
        register:'#btnLogin',
        ok:'.swal2-confirm'
    },
    fields: {        
        email:'#user',
        password:'#password'
    },
    messages:{
        error: '.invalid_input',
        sucessTitle: '#swal2-html-container',
        
    }
}

Cypress.Commands.add('saveRegistrer',()=>{    
    cy.get(elements.buttons.register)
        .click()

})

Cypress.Commands.add('fillEmail',(email)=>{    
    cy.get(elements.fields.email)
        .should('be.visible')
        .type(email)

})


Cypress.Commands.add('fillPassword',(password)=>{    
    cy.get(elements.fields.password)
        .should('be.visible')
        .type(password)          

})

Cypress.Commands.add('checkMessage',(message)=>{    
    cy.get(elements.messages.error)
        .should('contain.text', message)
    
})

Cypress.Commands.add('checkHelloMessage',(message)=>{    
    cy.get(elements.messages.sucessTitle,{timeout:1000})
        .should('contain.text', 'Olá')
    
})

Cypress.Commands.add('checkOkMessage',(message)=>{    
    cy.get(elements.buttons.ok)
        .should('be.visible' )
        .click() // Confirma a ação
})