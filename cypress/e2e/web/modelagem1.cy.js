/// <reference types="Cypress"/>

describe('cenário de testes de login e senha', () => {

    beforeEach(() => {
        
        cy.visit('/')
        
    });

    it('teste positivo de login e senha "CORRETO"', () => {
        
        // Digitiar E-mail
        cy.get('#Email')
             .clear()
                 .type('admin@yourstore.com')
        // Digitar a Senha         
        cy.get('#Password')
             .clear()
                 .type('admin')
        // Clicar no Botão Login         
        cy.get('.button-1').click()

        cy.get('.brand-image-xl.logo-xl')
             .should('have.attr', 'alt', 'logo.png')

    });
    
    it.only('teste negativo login e senha "ERRADO"', () => {
        
        // Digitar E-mail (errado)
        cy.get('#Email')
             .clear()
                 .type('admin@sobral.com.br')
        // Digitar a senha (errada)
        cy.get('#Password')
             .clear()
                 .type('wesley')
        // Clicar no Botão Login (não deverar entrar)
        cy.get('.button-1').click()
        
        cy.get('div.message-error.validation-summary-errors')
        .should('be.visible')
    });
});