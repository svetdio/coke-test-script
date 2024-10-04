import '@4tw/cypress-drag-drop'
import { failEarly, iterateScreens, login } from 'cypress-helper'
failEarly()

iterateScreens(() => {
  beforeEach(() => {
    login()
    cy.visit('/')
  })

  describe('Game 1: Crown Game Test', () => {
    // NEGATIVE TEST
    it('REMINDERS AND INTRODUCTION SPIEL', () => {
      // REMINDERS
      cy.contains('REMINDERS', { timeout: 30000 }).should('be.visible')
      cy.contains('Enhance your learning experience by switching to full-screen mode.').should('be.visible')
      cy.contains('Click CC for English subtitle.').should('be.visible')
      cy.contains('Please be advised that the activity described herein is only a simplified simulation and does not represent the exact actual or real events occurring in our site operations.').should('be.visible')
      cy.get('[data-cy="close"]').click()

      // INTRO DIALOGUE
      cy.contains('Hi Adam, I’m Lola, from Commercial. Nice to meet you! Congratulations dahil member ka na nang Coca-Cola family!', { timeout: 30000 }).should('be.visible')
      cy.contains('CC').click()
      cy.contains('Hi Adam, I’m Lola, from Commercial. Nice to meet you! Congratulations as you are now a member of Coca-Cola family!').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Tara, join us sa isang amazing journey ng CCBPI Value Chain at kung paano nakakarating ang bawat Bottle of Happiness to every Juan!').should('be.visible')
      cy.contains('Come and join us in an amazing journey to learn the CCBPI Value Chain and how each Bottle of Happiness reach every Juan!').should('be.visible')
      cy.contains('>>').click()

      cy.contains('>>').click()
      cy.url({ timeout: 30 * 1_000 }).should('include', '/game/crown-game')
    })
  })
})
