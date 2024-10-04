import { failEarly, iterateScreens, login, visitGamePage } from 'cypress-helper'
failEarly()

iterateScreens(() => {
  beforeEach(() => {
    login()
    visitGamePage('/game/bubble-hit?debugSeed=1&noAnimations=true')
  })

  describe('GAME 5: BUBBLE HIT', () => {
    it('BUBBLE HIT GAME PROPER', () => {
      // PRE GAME INTRO
      cy.contains('Ngayong alam mo na kung ano-ano ang mga products natin, it’s time you experience paano namin sila ginagawa.').should('be.visible')
      cy.contains('Now that you know all about our products, it’s time you experience how we make them!').should('be.visible')
      cy.contains('>>').click()

      cy.contains('I-match lang ang mga bola na may parehong color. Create groups of three or more, and watch them fall and fill up a bottle of happiness!').should('be.visible')
      cy.contains('Match and pop balls of the same color and flavor to earn points. Create groups of three or more, and watch them fall to fill up a bottle of happiness!').should('be.visible')
      cy.contains('START').click()

      // DISCLAIMER
      cy.contains('Disclaimer: This game is a simulation for entertainment only. All scenarios, characters, and events are fictional. The game does not endorse real-world actions, and players should distinguish between the virtual and actual environments.').should('be.visible')

      // BUBBLE HIT
      cy.wait(250)
      cy.get('image[data-index="70"]').click()
      cy.wait(250)
      cy.get('image[data-index="72"]').click()
      cy.wait(250)
      cy.get('image[data-index="64"]').click()
      cy.wait(250)
      cy.get('image[data-index="77"]').click()
      cy.wait(250)
      cy.get('image[data-index="64"]').click()
      cy.wait(250)
      cy.get('image[data-index="68"]').click()
      cy.wait(250)
      cy.get('image[data-index="67"]').click()
      cy.wait(250)
      cy.get('image[data-index="66"]').click()
      // WIN SFX

      cy.url({ timeout: 30_000 }).should('include', '/game/order-assembling')
    })
  })
})
