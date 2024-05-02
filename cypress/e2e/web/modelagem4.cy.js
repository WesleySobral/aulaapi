/// <reference types="Cypress"/>

describe('cenário de testes confirma e-mail de Fornecedores "Vendors" no botão "Vendors"', () => {
    
    beforeEach(() => {
        
        cy.visit('/')

    });
    
    it('Localizar o e-mail "vendor1email@gmail.com e confirma se está correto"', () => {
        
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
        
        // Verificar se está logado no sistema "NopCommerce" clicando no logo "NopCommerce"
        cy.get('.brand-image-xl.logo-xl')
             .should('have.attr', 'alt', 'logo.png')

        // CLicar no botão "Customers"
        cy.get(':nth-child(4) > [href="#"]').click()
            cy.contains('p', 'Customers').click()
            
        // Clicar no botão "Vendors"
        cy.get('.menu-is-opening > .nav > :nth-child(4) > .nav-link').click()

        // Clicar no botão "view" do e-mail "vendor1email@gmail.com"
        cy.xpath("//a[@href='Edit/1']").click({force: true})

        cy.get('#Email')
           .should('have.attr', 'value', 'vendor1email@gmail.com')
    });

});