describe('Scenario Login', () => {

        it('tc1-loginValid', () => {

            cy.intercept ('GET', 'https://www.saucedemo.com/v1/img/SwagLabs_logo.png').as('swaglabsLogo')
            cy.visit('https://www.saucedemo.com/v1/index.html');

            cy.get('#user-name').clear().type('standard_user')
            cy.xpath("//input[@id='password']").clear().type('secret_sauce')

            
            cy.get('.btn_action').should('be.visible')
            cy.get('.btn_action').click()

            cy.wait ('@swaglabsLogo').its('response.statusCode').should('eq',200);
            cy.url().should('include','/inventory.html')
    })

})