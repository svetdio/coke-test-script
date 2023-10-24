//fetech user name from back end
Cypress.Commands.add('getUserNameFromBackend', () => {
    return cy.request('GET', 'http://localhost:9030/user')
      .its('body.name'); // Assumes the response JSON has a "name" property
  })

//timer
import { startTimer } from '../../src/timer'; // Adjust the path as needed


describe('Game 1: Crown Game Test', () => {

    // opening of game 1 site
    it('visiting game 1 site', () => {
        cy.visit('put site here') // Replace with game 1 page URL
    })

    // name of user concatenation
    it('user name is correctly concatenated in a sentence', () => {
        cy.visit('put URL here'); // Replace with the actual URL

        cy.intercept('GET', 'http://localhost:9030/user', { fixture: 'user.json' }) // user.json contains the user's name

        cy.getUserNameFromBackend().then((userName) => { //getting name of user from backend
            
        cy.get('p').should('include.text', `Hi, ${userName}, I'm Lola, from Commercial. Nice to meet you! Congratulations dahil member ka na nang Coca-Cola family!`)
        })
    })

    // next button
    it('clicking next button', () => {
        cy.visit('put site here') // Replace with game 1 page URL

        cy.get('#next').click() //replace with next button id
    })

    // start button
    it('clicking start button', () => {
        cy.visit('put site here') // Replace with game 1 page URL

        cy.get('#start').click() //replace with start button id
    })

    // drag and drop
    it('simulation of drag and drop of the crown game', () => {
        cy.visit('put site here') // Replace with game 1 page URL

        // Select the source element (element to be dragged)
        cy.get('#draggable-element').trigger('mousedown')

        // Select the target element (where you want to drop the source element)
        cy.get('#droppable-element').trigger('mousemove').trigger('mouseup')

        // Assert that the drop was successful (check the result)
        cy.get('#droppable-element').should('have.text', 'Dropped!') // Replace with the actual result text
        })

    // 30-second timer
     it('should run a 30-second timer', () => {
        cy.visit('put URL here') // Replace with the actual URL

        // Stub the timer function
        cy.window().then((win) => {
        cy.stub(win, 'startTimer').as('startTimer'); // Replace 'startTimer' with the actual timer function name
        })

        // Start the game or perform any actions that start the timer
        cy.get('#start-game-button').click(); // Replace with the actual button selector

        // Wait for the timer to finish
        cy.wait(30000) // Wait for 30 seconds (adjust as needed)

        // Check that the timer function was called with the correct parameters
        cy.get('@startTimer').should('be.calledWith', 30, Cypress.sinon.match.func)
    });

})