import { failEarly, iterateScreens, login } from 'cypress-helper'

failEarly()

iterateScreens(() => {
  beforeEach(() => {
    login()
    cy.visit('/ending')
  })

  describe('ENDING', () => {
    it('ENDING', () => {
      cy.contains('LOADING...').should('be.visible')

      cy.contains('OMG! Lunch break is over na pala!', { timeout: 30 * 1_000 }).should('be.visible')

      cy.contains('CC', { timeout: 30 * 1_000 }).click()

      cy.contains('Congratulations! Natapos mo na ang lahat ng games, meaning, you get 4 badges that represent the Value Chain process. I couldn\'t be prouder of your accomplishments.', { timeout: 30 * 1_000 }).should('be.visible')
      cy.contains('Congratulations! You did it! You completed all the games and earned all four badges that represents the Value Chain process. I couldn\'t be prouder of your accomplishments.').should('be.visible')
      cy.contains('>>').click()
      // NOTE: <strong>4 badges that represent the Value Chain process.</strong>

      cy.contains('As a token of our appreciation sa achievements mo, at dahil nakuha mo ang lahat ng badges, here comes COCO to congratulate you!').should('be.visible')
      cy.contains('As a token of our appreciation for your achievements, and because you got all the badges, here comes COCO to congratulate you!').should('be.visible')
      cy.contains('>>').click()
      // NOTE: <strong>COCO Digital Plushie </strong>

      cy.clock(null, ['setTimeout']) // Rig animation timeouts
      cy.contains('Congratulations for completing the journey!').should('be.visible')
      cy.contains('>>').click()

      // Finish animation
      cy.tick(5000)
      cy.clock().invoke('restore')

      cy.contains('Welcome sa CCBPI, Adam! Ang iyong sipag, determinasyon, at tagumpay have already made a difference. Cheers to a bright and exciting future ahead!').should('be.visible')
      cy.contains('Welcome to CCBPI, Adam! Your hard work, determination, and achievements have already made a difference. Cheers to a bright and exciting future ahead!').should('be.visible')
      cy.contains('>>').click()
      // NOTE: Cheers is a next line

      cy.contains('Brought to you by:').should('be.visible')

      cy.contains('We Sell').should('be.visible')
      cy.contains('We Make').should('be.visible')
      cy.contains('We Deliver').should('be.visible')
      cy.contains('Coca-Cola Sustainability Initiative').should('be.visible')

      // Menu content
      cy.contains('Menu').click()

      cy.contains('HI Adam!').should('be.visible')
      cy.contains('CHANGE PASSWORD').should('be.visible')
      cy.contains('LOGOUT').should('be.visible')

      // logout
      cy.contains('LOGOUT').click()
      cy.url().should('include', '/login')
    })
  })
})
