import { failEarly, iterateScreens, login, visitGamePage } from 'cypress-helper'
failEarly()

iterateScreens(() => {
  beforeEach(() => {
    login()
  })

  describe('Menu Navigation Test', () => {
    // MENU NAVIGATION TEST
    it('GAME 1', () => {
      visitGamePage('/game/crown-game')

      // Menu content
      cy.contains('Menu').click()

      cy.contains('HI Adam!').should('be.visible')
      cy.contains('CHANGE PASSWORD').should('be.visible')
      cy.contains('LOGOUT').should('be.visible')
    })

    it('GAME 2.1', () => {
      visitGamePage('/game/tindahan-aling-nena')

      // Menu content
      cy.contains('Menu').click()

      cy.contains('HI Adam!').should('be.visible')
      cy.contains('CHANGE PASSWORD').should('be.visible')
      cy.contains('LOGOUT').should('be.visible')
    })

    it('GAME 2.2', () => {
      cy.visit('/game/tindahan-aling-nena/')

      // Menu content
      cy.contains('Menu', { timeout: 30000 }).click()

      cy.contains('HI Adam!').should('be.visible')
      cy.contains('CHANGE PASSWORD').should('be.visible')
      cy.contains('LOGOUT').should('be.visible')
    })

    it('GAME 3', () => {
      visitGamePage('/game/arrange-the-bottle')

      // Menu content
      cy.contains('Menu').click()

      cy.contains('HI Adam!').should('be.visible')
      cy.contains('CHANGE PASSWORD').should('be.visible')
      cy.contains('LOGOUT').should('be.visible')
    })

    it('GAME 4', () => {
      visitGamePage('/game/find-the-coke-bottle')

      // Menu content
      cy.contains('Menu').click()

      cy.contains('HI Adam!').should('be.visible')
      cy.contains('CHANGE PASSWORD').should('be.visible')
      cy.contains('LOGOUT').should('be.visible')
    })

    it('PRODUCT CATALOG', () => {
      visitGamePage('/game/product-catalog')

      // Menu content
      cy.contains('Menu').click()

      cy.contains('HI Adam!').should('be.visible')
      cy.contains('CHANGE PASSWORD').should('be.visible')
      cy.contains('LOGOUT').should('be.visible')
    })

    it('GAME 5', () => {
      visitGamePage('/game/bubble-hit')

      // Menu content
      cy.contains('Menu').click()

      cy.contains('HI Adam!').should('be.visible')
      cy.contains('CHANGE PASSWORD').should('be.visible')
      cy.contains('LOGOUT').should('be.visible')
    })

    it('GAME 6', () => {
      visitGamePage('/game/order-assembling')

      // Menu content
      cy.contains('Menu').click()

      cy.contains('HI Adam!').should('be.visible')
      cy.contains('CHANGE PASSWORD').should('be.visible')
      cy.contains('LOGOUT').should('be.visible')
    })

    it('GAME 7', () => {
      visitGamePage('/game/delivery-to-partner-outlets')

      // Menu content
      cy.contains('Menu').click()

      cy.contains('HI Adam!').should('be.visible')
      cy.contains('CHANGE PASSWORD').should('be.visible')
      cy.contains('LOGOUT').should('be.visible')
    })

    it('GAME 8', () => {
      visitGamePage('/game/collect-the-bottles')

      // Menu content
      cy.contains('Menu').click()

      cy.contains('HI Adam!').should('be.visible')
      cy.contains('CHANGE PASSWORD').should('be.visible')
      cy.contains('LOGOUT').should('be.visible')
    })

    it('GAME 9', () => {
      visitGamePage('/game/function-roles?noAnimation=1')

      // Menu content
      cy.contains('Menu').click()

      cy.contains('HI Adam!').should('be.visible')
      cy.contains('CHANGE PASSWORD').should('be.visible')
      cy.contains('LOGOUT').should('be.visible')
    })

    it('ENDING', () => {
      cy.visit('/ending?videoCatalog=1')

      // Menu content
      cy.contains('Menu', { timeout: 30000 }).click()

      cy.contains('HI Adam!').should('be.visible')
      cy.contains('CHANGE PASSWORD').should('be.visible')
      cy.contains('LOGOUT').should('be.visible')
      cy.contains('LOGOUT').click()
      cy.url().should('include', '/login')
    })
  })
})
