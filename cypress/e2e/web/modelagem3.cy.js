/// <reference types="Cypress"/>

describe('cenários de testes de localização de pedidos (Ordes) no botão "Sales"', () => {
    
    beforeEach(() => {
        
        cy.visit('/')
    });

    it('Localização dos pedidos "5,1 e 3" no botão "Sales"', () => {
        
        cy.get('#Email')
            .clear()
                .type('admin@yourstore.com')
        
        // Digitar senha no campo "Password"
        cy.get('#Password')
            .clear()
                .type('admin')
        
        // Clicar no botão "Login"
        cy.get('.button-1').click()

        // Verificar se está logado no sistema "NopCommerce" clicando no logo "NopCommerce"
        cy.get('.brand-image-xl.logo-xl')
             .should('have.attr', 'alt', 'logo.png')
        
        // Clicar no botão "Sales"
        cy.get(':nth-child(3) > [href="#"]').click()
           
         // Clicar no botão "Orders"
        cy.get('.menu-is-opening > .nav > :nth-child(1) > .nav-link')
           cy.contains('a', 'Orders').click()
           
           // Clicar no botão "View" do produto "5"
           cy.xpath("//a[@href='Edit/5']").click({force: true})
              cy.get('h1.float-left')
                    .should('have.class', 'float-left')
        // Retorna para tela "Orders"
        cy.get('.menu-open > .nav > :nth-child(1) > .nav-link')
            cy.contains('a', 'Orders').wait(3000).click()

        // Clicar no botão "View" do produto "1"
        cy.xpath("//a[@href='Edit/1']").click({force: true})
            cy.get('h1.float-left')
                    .should('have.class', 'float-left')

        // Retorna para tela "Orders"
        cy.get('.menu-open > .nav > :nth-child(1) > .nav-link')
            cy.contains('a', 'Orders').wait(3000).click()

        // Clicar no botão view do produto "3"
        cy.xpath("//a[@href='Edit/3']").click({force: true})
             cy.get('h1.float-left')
                    .should('have.class', 'float-left')
        

    });
});