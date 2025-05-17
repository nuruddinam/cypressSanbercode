import loginPage from "../../support/pageObjects/loginPage";        
import loginData from "../../fixtures/loginData.json"

    describe('Scenario Login', () => {

    beforeEach(() => {
        loginPage.visit();
    // cy.visit('https://www.saucedemo.com/v1/index.html');
  });

        it('tc1-loginValid', () => {
            // cy.get('#user-name').clear().type('standard_user')
            // cy.get('#password').clear().type('secret_sauce')
            // cy.get('.btn_action').click()
            // cy.url().should("include","/inventory.html")
            loginPage.inputUsername (loginData.validUsername)
            loginPage.inputPassword (loginData.validPassword)
            loginPage.login_btn ()
            loginPage.verifyLoginSuccess ()
            
            
    })
        it('tc2-loginInvalidUsername', () => {
            // cy.get('[data-test="username"]').type('p')
            // cy.get('#password').clear().type('secret_sauce')
            // cy.get('.btn_action').click()
            // cy.xpath("//h3[@data-test='error']").should('contain.text','Epic sadface: Username and password do not match any user in this service')
            loginPage.inputUsername (loginData.invalidUsername)
            loginPage.inputPassword (loginData.validUsername)
            loginPage.login_btn ()
            loginPage.verifyUsernamePasswordError ()
    })

        it('tc3-loginInvalidPassword', () => {
            // cy.get('#user-name').type('standard_user')
            // cy.get('#password').clear().type('wrong_password')
            // cy.get('.btn_action').click()
            // cy.xpath("//h3[@data-test='error']").should('contain.text','Epic sadface: Username and password do not match any user in this service')
            loginPage.inputUsername (loginData.validUsername)
            loginPage.inputPassword (loginData.invalidPassword)
            loginPage.login_btn ()
            loginPage.verifyUsernamePasswordError ()
    })

        it('tc4-loginInvalidUsernamePassword', () => {
            // cy.get('#user-name').clear().type('p')
            // cy.xpath("//input[@id='password']").clear().type('p')
            loginPage.inputUsername (loginData.invalidUsername)
            loginPage.inputPassword (loginData.invalidPassword)
            // cy.get('.btn_action').should('be.visible')
            loginPage.visible_btn ()
            // cy.get('.btn_action').click()
            loginPage.login_btn ()
            // cy.xpath("//h3[@data-test='error']").should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
            loginPage.verifyUsernamePasswordError ()
    })

        it('tc5-loginInvalidUsernameZero', () => {
            // cy.get('#user-name').clear()
            // cy.xpath("//input[@id='password']").clear().type('p')
            loginPage.inputPassword (loginData.invalidPassword)
            // cy.get('.btn_action').should('be.visible')
            // cy.get('.btn_action').click()
            loginPage.visible_btn ()
            loginPage.login_btn ()
            // cy.xpath("//h3[@data-test='error']").should('contain.text', 'Epic sadface: Username is required')
            loginPage.verifyUsernameZero ()
    })
        it('tc6-loginInvalidPasswordZero', () => {
            // cy.get('#user-name').clear().type('p')
            loginPage.inputUsername (loginData.invalidUsername)
            // cy.xpath("//input[@id='password']").clear()
            // cy.get('.btn_action').should('be.visible')
            // cy.get('.btn_action').click()
            loginPage.visible_btn ()
            loginPage.login_btn ()
            // cy.xpath("//h3[@data-test='error']").should('contain.text', 'Epic sadface: Password is required')
            loginPage.verifyPasswordZero ()
    })
});
