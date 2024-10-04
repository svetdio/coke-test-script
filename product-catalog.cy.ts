import { failEarly, iterateScreens, login, visitGamePage } from 'cypress-helper'
failEarly()

iterateScreens(() => {
  beforeEach(() => {
    login()
    visitGamePage('/game/product-catalog')
  })

  describe('GAME 5: PRODUCT CATALOG', () => {
    it('CHECKING PRODUCT CATALOG', () => {
      // PRE GAME INTRO
      cy.contains("Welcome sa Coca-Cola Plant! I'm Jen. Today you'll see kung paano nga ba ginagawa at inihahanda for delivery ang bottle of happiness na dumarating sayo.").should('be.visible')
      cy.contains("Welcome to the Coca-Cola Plant! I'm Jen, today you'll see how we make each bottle of happiness.").should('be.visible')
      cy.contains('>>').click()

      cy.contains('Pwede mong makita ang lahat ng beverages we make dito sa COCA-COLA PRODUCT CATALOG. We have everything from sparkling, juices, stills, alcoholics, and more!').should('be.visible')
      cy.contains('You can check all the beverages we make here in our COCA-COLA PRODUCT CATALOG. We have everything from sparkling, juices, stills, alcoholics and more!').should('be.visible')
      cy.contains('>>').click()

      // PORTFOLIO
      cy.contains('Coca-Cola Brands').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Sparkling').should('be.visible')
      cy.contains('Coke Regular').should('be.visible')
      cy.contains('Coke Light').should('be.visible')
      cy.contains('Coke Zero').should('be.visible')
      cy.contains('Sprite').should('be.visible')
      cy.contains('Royal Tru-Orange').should('be.visible')
      cy.contains('Royal Tru-Lemon').should('be.visible')
      cy.contains('Royal Tru-Grape').should('be.visible')
      cy.contains('Sarsi').should('be.visible')
      cy.contains('Schweppes').should('be.visible')

      cy.contains('Stills').should('be.visible')
      cy.contains('(juice, dairy, water)').should('be.visible')
      cy.contains('Stills').click()
      cy.contains('Wilkins Distilled').should('be.visible')
      cy.contains('Wilkins Pure').should('be.visible')
      cy.contains('Viva').should('be.visible')
      cy.contains('Minute Maid').should('be.visible')
      cy.contains('Fuze Tea').should('be.visible')
      cy.contains('Nutriboost').should('be.visible')

      cy.contains('Alcohol').should('be.visible')
      cy.contains('Alcohol').click()
      cy.contains('Lemon-Dou').should('be.visible')
      cy.contains('Jack Daniels Coke').should('be.visible')

      cy.contains('Energy').should('be.visible')
      cy.contains('Energy').click()
      cy.contains('Powerade').should('be.visible')
      cy.contains('Monster').should('be.visible')

      cy.contains('Packaging Type').should('be.visible')
      cy.contains('Packaging Type').click()
      cy.contains('Glass').should('be.visible')
      cy.contains('PET').should('be.visible')
      cy.contains('Can').should('be.visible')
      cy.contains('Tetra').should('be.visible')

      cy.contains('Packaging Sizes').should('be.visible')
      cy.contains('Packaging Sizes').click()
      cy.contains('>>').click()

      cy.url({ timeout: 30_000 }).should('include', '/game/bubble-hit')
    })
  })
})
