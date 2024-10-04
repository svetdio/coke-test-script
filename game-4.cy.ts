import '@4tw/cypress-drag-drop'
import { failEarly, iterateScreens, login, visitGamePage } from 'cypress-helper'
failEarly()

iterateScreens(() => {
  beforeEach(() => {
    login()
    visitGamePage('/game/find-the-coke-bottle')
  })

  describe('GAME 4: FIND THE COKE BOTTLE', () => {
    // NEGATIVE TESTING
    it('SOME BOTTLES ARE NOT FOUND', () => {
      // INTRO
      cy.contains('Emerging Channels: Included dito ang mga non-traditional avenues tulad ng e-commerce, food delivery services, condominiums, hospitals, at vending machines.').should('be.visible')
      cy.contains('Emerging Channels: Emerging Channels encompass non-traditional avenues like e-commerce platforms, food delivery services, condominiums, hospitals houses at vending machines.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('QUICK FACT: 70% of our total volume ay galing from General Trade. Around 30% naman ay galing sa Modern Trade, kung saan kabilang ang Emerging Channels!').should('be.visible')
      cy.contains('QUICK FACT: 70% of our volume sales come from the General Trade. Around 30% comes from Modern Trade, where Emerging Channels are included!').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Sa bawat outlet na ito ay may sales people tayong naka-assign. Take note of this tip para sa susunod na game!').should('be.visible')
      cy.contains('We have sales people in charge in every emerging channels. Take note because this is also your clue in order for the next game!').should('be.visible')
      cy.contains('>>').click()

      cy.clock(null, ['setInterval']) // Rig game timer
      cy.contains('Hanapin lang ang mga coke bottles na nakatago around the city. Ready? Let’s go!').should('be.visible')
      cy.contains('We need your help finding coke bottles in the city. Are you ready? Let’s go!').should('be.visible')
      cy.contains('START').click()

      // CLICK
      cy.get('[data-cy="bottle-1"]').click()
      cy.get('[data-cy="bottle-2"]').click()

      // Fast forward 30 seconds
      cy.tick(30000)
      cy.clock().invoke('restore')
      // LOSE SFX

      // OUTRO
      cy.contains('How do we refresh the Philippines with a bottle of Coke?', { timeout: 30000 }).should('be.visible')
      cy.contains('WATCH LATER').click()

      cy.contains('Congratulations!').should('be.visible')
      cy.contains('You earned a badge!').should('be.visible')
      cy.contains('EARN MORE BADGE').click()

      cy.url({ timeout: 30000 }).should('include', '/game/product-catalog')
    })

    // POSITIVE TESTING
    it('ALL BOTTLES ARE FOUND', () => {
      // INTRO
      cy.contains('Emerging Channels: Included dito ang mga non-traditional avenues tulad ng e-commerce, food delivery services, condominiums, hospitals, at vending machines.').should('be.visible')
      cy.contains('Emerging Channels: Emerging Channels encompass non-traditional avenues like e-commerce platforms, food delivery services, condominiums, hospitals houses at vending machines.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('QUICK FACT: 70% of our total volume ay galing from General Trade. Around 30% naman ay galing sa Modern Trade, kung saan kabilang ang Emerging Channels!').should('be.visible')
      cy.contains('QUICK FACT: 70% of our volume sales come from the General Trade. Around 30% comes from Modern Trade, where Emerging Channels are included!').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Sa bawat outlet na ito ay may sales people tayong naka-assign. Take note of this tip para sa susunod na game!').should('be.visible')
      cy.contains('We have sales people in charge in every emerging channels. Take note because this is also your clue in order for the next game!').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Hanapin lang ang mga coke bottles na nakatago around the city. Ready? Let’s go!').should('be.visible')
      cy.contains('We need your help finding coke bottles in the city. Are you ready? Let’s go!').should('be.visible')
      cy.contains('START').click()

      // CLICK
      cy.get('[data-cy="bottle-1"]').click()
      cy.get('[data-cy="bottle-2"]').click()
      cy.get('[data-cy="bottle-3"]').click()
      // WIN SFX

      // OUTRO
      cy.contains('How do we refresh the Philippines with a bottle of Coke?', { timeout: 30000 }).should('be.visible')
      cy.contains('WATCH LATER').click()

      cy.contains('Congratulations!').should('be.visible')
      cy.contains('You earned a badge!').should('be.visible')
      cy.contains('EARN MORE BADGE').click()

      cy.url({ timeout: 30000 }).should('include', '/game/product-catalog')
    })
  })
})
