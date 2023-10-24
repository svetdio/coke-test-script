describe('Login Test', () => {

    //opening of site
    it('visiting CCBPI site', () => {
        cy.visit('put site here') // Replace with login page URL
        // cy.title().should('eq',' ')
    })

    //negative scenario
    it('display an error message for invalid credentials', () => {
        cy.visit('put site here'); // Replace with login page URL
    
        cy.get('#email').type('invalid email') //replace with invalid email
        cy.get('#password').type('invalid password') //replace with invalid password

        cy.get('#your-checkbox-selector').check() //replace with checkbox id
        cy.get('#your-checkbox-selector').check() //replace with checkbox id

        cy.get('#your-checkbox-selector').should('be.checked') //replace with checkbox id 1
        cy.get('#your-checkbox-selector').should('be.checked') //replace with checkbox id 2

        cy.get('#log-in').click()
    
        cy.get('.error-message').should('be.visible')

        
    })
    
    //missing checkbox 1
    it ('display error message for missing checkbox 1', () => {
        cy.visit('put site here'); // Replace with login page URL

        cy.get('#email').type('valid email') //replace with valid email
        cy.get('#password').type('valid password') //replace with valid password

        cy.get('#your-checkbox-selector').should('be.checked') //replace with checkbox id 1

        cy.get('#log-in').click()

        cy.get('.error-message').should('be.visible')

        //cy.url().should('not.include', '/dashboard') //replace with URL


    })

    //missing checkbox 2
    it ('display error message for missing checkbox 2', () => { //missing checkbox 2
        cy.visit('put site here'); // Replace with login page URL

        cy.get('#email').type('valid email') //replace with valid email
        cy.get('#password').type('valid password') //replace with valid password

        cy.get('#your-checkbox-selector').should('be.checked') //replace with checkbox id 2

        cy.get('#log-in').click()

        cy.get('.error-message').should('be.visible')

        //cy.url().should('not.include', '/dashboard') //replace with URL


    })

    //positive scenario
    it('logging in with valid credentials', () => {
        cy.visit("put site here")  // Replace with login page URL

        cy.get('#cc-for-subtitle').click() //replace with subtitle id

        cy.get('#email').type('valid email') //replace with valid email
        cy.get('#password').type('valid password') //replace with valid password

        cy.get('#your-checkbox-selector').check() //replace with checkbox id 1
        cy.get('#your-checkbox-selector').check() //replace with checkbox id 2

        cy.get('#your-checkbox-selector').should('be.checked') //replace with checkbox id 1
        cy.get('#your-checkbox-selector').should('be.checked') //replace with checkbox id 2
        
        cy.get('#log-in').click()

        cy.url().should('include', '/dashboard') //replace with URL
    })

})