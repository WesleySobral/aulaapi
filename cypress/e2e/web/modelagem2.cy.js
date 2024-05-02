/// <reference types="Cypress"/>

describe('cenário de testes de localização de produtos (Products), no botão "Catalog"', () => {
    
    beforeEach(() => {
        
        cy.visit('/')

    });

      it.only('Localizar produto "Samsung Series 9 NP900X4C Premium Ultrabook" no campo "Product name"', () => {
      
      // Digitar e-mail no campo "E-mail"  
      cy.get('#Email')
           .clear()
               .type('admin@yourstore.com')
      // Digitar senha no campo "Password"         
      cy.get('#Password')
           .clear()
               .type('admin')
      // Clicar no botão "Login"
      cy.get('.button-1').click()

      // Verificar se está logando clicando no logo "NopCommerce"
      cy.get('.brand-image-xl.logo-xl')
             .should('have.attr', 'alt', 'logo.png')
      
      // Clicar sobre "Catalog"
     cy.get(':nth-child(2) > :nth-child(1) > p > .right').click()
        
     
        // Clicar no sobre "Products"
     cy.xpath("(//a[contains(.,'Products')])[1]").click()
        
         
        // Pesquisar o produto no campo ""
        cy.get('#SearchProductName')
            .clear()
                .type('Samsung Series 9 NP900X4C Premium Ultrabook')
                
                cy.get('#search-products').click()
                
        // Clicar em "Edit"
        cy.xpath("//a[@href='Edit/6']").click({force: true})
        
        // Clicar no campo "Vendor" e selecionar "Vendor 1"
        cy.get('select[data-val="true"]').eq(2).select('Vendor 1')

      });

      it('Campo "Manufacture" localizar a opção "HP" e selecionar o produto "HP Envy 6-1180ca 15.6-Inch Sleekbook" ', () => {
        
        cy.get('#Email')
           .clear()
               .type('admin@yourstore.com')
      // Digitar senha no campo "Password"         
      cy.get('#Password')
           .clear()
               .type('admin')
      // Clicar no botão (login)         
      cy.get('.button-1').click() 
      
      // Clicar no menu "Catalog"
      cy.get(':nth-child(2) > :nth-child(1) > p > .right')
            cy.contains('p', 'Catalog').click()
        
        // Clicar no menu     
        cy.contains('a', 'Products').click()
 
       cy.xpath("(//select[@data-val='true'])[2]").select('HP')
                 
             cy.get('#search-products').click()
 
                   cy.xpath("//a[@href='Edit/8']").click({force: true})
 
                        cy.get('#AvailableStartDateTimeUtc')
                            .type('2025-01-01T15:44')
        
      });

});