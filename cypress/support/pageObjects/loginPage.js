import loginData from "../../fixtures/loginData.json"

class loginPage {
    visit () {
        //Buka Halaman Website Login
        cy.visit('/index.html')
    }

    inputUsername (username){
        cy.get('#user-name').clear().type(username)
    }

    inputPassword (password){
        cy.get('#password').clear().type(password)
    }
    
    login_btn (){
        cy.get('.btn_action').click()
    }
        
    visible_btn (){
        cy.get('.btn_action').should('be.visible')
    }

    verifyLoginSuccess (){
        cy.url().should("include","/inventory.html")
    }

    verifyUsernamePasswordError(){
        cy.xpath("//h3[@data-test='error']").should('contain.text','Epic sadface: Username and password do not match any user in this service')
    }

    verifyUsernameZero(){
        cy.xpath("//h3[@data-test='error']").should('contain.text', 'Epic sadface: Username is required')
    }

    verifyPasswordZero(){
        cy.xpath("//h3[@data-test='error']").should('contain.text', 'Epic sadface: Password is required')
    }

}

export default new loginPage()