import '@4tw/cypress-drag-drop'
import { failEarly, iterateScreens, login, visitGamePage } from 'cypress-helper'

failEarly()

iterateScreens(() => {
  beforeEach(() => {
    login()
    visitGamePage('/game/collect-the-bottles')
  })

  describe('GAME 8: COLLECT THE BOTTLES', () => {
    // NEGATIVE TESTING
    it('UNFINISHED COLLECTING OF BOTTLES', () => {
      // PRE GAME INTRO

      cy.contains('Ngayon naman, mukhang kailangan ni Aling Nena ng tulong sa pagtabi ng empty bottles.').should('be.visible')
      cy.contains('Looks like Aling Nena needs help in putting away the empty bottles?').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Your task is to help Aling Nena collect the used bottles and put them in the correct bin or case.').should('be.visible')
      cy.contains('Your task is to help Aling Nena collect the used bottles and put them in the correct bin or case.').should('be.visible')
      cy.contains('>>').click()

      cy.clock(null, ['setInterval']) // Rig game timer
      cy.contains('Kailangan mo itong magawa within 30 seconds. Good luck!').should('be.visible')
      cy.contains('You only have 30 seconds. Good luck!').should('be.visible')
      cy.contains('START').click()

      // DRAG AND DROP
      cy.get('[data-name="rgb-1"]').drag('[data-type=pet-bottle]', { force: true })
      cy.get('[data-name="pet-1"]').drag('[data-type=rgb-bottle]', { force: true })

      // Fast forward 30 seconds
      cy.tick(30000)
      cy.clock().invoke('restore')
      // LOSE SFX

      // LOSE SPIEL
      cy.contains('Ayos lang yan, bawi tayo sa next delivery! Kung napansin mo sa game, may dalawang types tayo ng bottle:').should('be.visible')
      cy.contains('That’s okay, let’s make it up to her on the next delivery! As you may have noticed, we have two types of bottles:').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Ang RGBs ay reusable bottle naten na pwede ulit gamitin. We clean and refill them to be a bottle of happiness again.').should('be.visible')
      cy.contains('RGBs are reusable glass bottles that can be returned to us. We clean and refill them to reduce waste.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Ang PET Bottles naman ay lightweight at maaaring i-recycle na plastic bottles.').should('be.visible')
      cy.contains('PET Bottles are lightweight, transparent, and recyclable plastic bottles.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Tandaan na i-recycle ang mga PET bottles at ibalik ang mga RGBs.').should('be.visible')
      cy.contains('Remember to recycle PET bottles and return RGBs.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Now that we\'ve covered the whole journey of selling, making, and delivering our happiness bottle, what happens next? Where does our bottle go? Here\'s a peek into one of Coca-Cola\'s sustainability initiatives.').should('be.visible')
      cy.contains('WATCH LATER').click()

      cy.contains('Congratulations!').should('be.visible')
      cy.contains('You earned a badge!').should('be.visible')
      cy.contains('EARN MORE BADGE').click()

      cy.url({ timeout: 30000 }).should('include', '/game/function-roles')
    })

    // POSITIVE TESTING
    it('FINISHED COLLECTING OF BOTTLES', () => {
      // PRE GAME INTRO

      cy.contains('Ngayon naman, mukhang kailangan ni Aling Nena ng tulong sa pagtabi ng empty bottles.').should('be.visible')
      cy.contains('Looks like Aling Nena needs help in putting away the empty bottles?').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Your task is to help Aling Nena collect the used bottles and put them in the correct bin or case.').should('be.visible')
      cy.contains('Your task is to help Aling Nena collect the used bottles and put them in the correct bin or case.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Kailangan mo itong magawa within 30 seconds. Good luck!').should('be.visible')
      cy.contains('You only have 30 seconds. Good luck!').should('be.visible')
      cy.contains('START').click()

      // DRAG AND DROP
      cy.get('[data-name="pet-1"]').drag('[data-type=pet-bottle]', { force: true })
      cy.get('[data-name="pet-2"]').drag('[data-type=pet-bottle]', { force: true })
      cy.get('[data-name="pet-3"]').drag('[data-type=pet-bottle]', { force: true })

      cy.get('[data-name="rgb-1"]').drag('[data-type=rgb-bottle]', { force: true })
      cy.get('[data-name="rgb-2"]').drag('[data-type=rgb-bottle]', { force: true })
      cy.get('[data-name="rgb-3"]').drag('[data-type=rgb-bottle]', { force: true })
      // WIN SFX

      // WIN SPIEL
      cy.contains('Nice work! Kung napansin mo sa game, may dalawang types tayo ng bottle:').should('be.visible')
      cy.contains('Nice work! As you may have noticed, we have two types of bottles:').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Ang RGBs ay reusable bottle naten na pwede ulit gamitin. We clean and refill them to be a bottle of happiness again.').should('be.visible')
      cy.contains('RGBs are reusable glass bottles that can be returned to us. We clean and refill them to reduce waste.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Ang PET Bottles naman ay lightweight at maaaring i-recycle na plastic bottles.').should('be.visible')
      cy.contains('PET Bottles are lightweight, transparent, and recyclable plastic bottles.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Tandaan na i-recycle ang mga PET bottles at ibalik ang mga RGBs.').should('be.visible')
      cy.contains('Remember to recycle PET bottles and return RGBs.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Now that we\'ve covered the whole journey of selling, making, and delivering our happiness bottle, what happens next? Where does our bottle go? Here\'s a peek into one of Coca-Cola\'s sustainability initiatives.').should('be.visible')
      cy.contains('WATCH LATER').click()

      cy.contains('Congratulations!').should('be.visible')
      cy.contains('You earned a badge!').should('be.visible')
      cy.contains('EARN MORE BADGE').click()

      cy.url({ timeout: 30000 }).should('include', '/game/function-roles')
    })
  })
})
