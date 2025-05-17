    
    describe('Scenario Login', () => {

    beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
  });

        it('tc1-loginValid', () => {
            cy.get('#user-name').clear().type('standard_user')
            cy.get('#user-name').type('standard_user')
            cy.get('#password').clear().type('secret_sauce')
            cy.get('.btn_action').click()
            cy.url().should("include","/inventory.html")
    })
        it('tc2-loginInvalidUsername', () => {
            cy.get('[data-test="username"]').type('p')
            cy.get('#password').clear().type('secret_sauce')
            cy.get('.btn_action').click()
            cy.xpath("//h3[@data-test='error']").should('contain.text','Epic sadface: Username and password do not match any user in this service')
    })

        it('tc3-loginInvalidPassword', () => {
            cy.get('#user-name').type('standard_user')
            cy.get('#password').clear().type('p')
            cy.get('.btn_action').click()
            cy.xpath("//h3[@data-test='error']").should('contain.text','Epic sadface: Username and password do not match any user in this service')
    })

        it('tc4-loginInvalidUsernamePassword', () => {
            cy.get('#user-name').clear().type('p')
            cy.xpath("//input[@id='password']").clear().type('p')
            cy.get('.btn_action').should('be.visible')
            cy.get('.btn_action').click()
            cy.xpath("//h3[@data-test='error']").should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    })

        it('tc5-loginInvalidUsernameZero', () => {
            cy.get('#user-name').clear()
            cy.xpath("//input[@id='password']").clear().type('p')
            cy.get('.btn_action').should('be.visible')
            cy.get('.btn_action').click()
            cy.xpath("//h3[@data-test='error']").should('contain.text', 'Epic sadface: Username is required');
    })
        it('tc6-loginInvalidPasswordZero', () => {
            cy.get('#user-name').clear().type('p')
            cy.xpath("//input[@id='password']").clear()
            cy.get('.btn_action').should('be.visible')
            cy.get('.btn_action').click()
            cy.xpath("//h3[@data-test='error']").should('contain.text', 'Epic sadface: Password is required');
    })
});
