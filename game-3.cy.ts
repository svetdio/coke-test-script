import '@4tw/cypress-drag-drop'
import { failEarly, iterateScreens, login, visitGamePage } from 'cypress-helper'

failEarly()

iterateScreens(() => {
  beforeEach(() => {
    login()
    visitGamePage('/game/arrange-the-bottle')
  })

  describe('GAME 3: ARRANGE THE BOTTLE', () => {
    // NEGATIVE TESTING
    it('BOTTLES ARE INCORRECTLY ARRANGED', () => {
      // INTRO
      cy.contains('Modern Trade: Ang Modern Trade ay mga malalaking tindahan tulad ng supermarkets, convenience stores, fast food chains, cafe, restaurants, schools and airports.').should('be.visible')
      cy.contains('Modern Trade: Modern Trade refers to larger retailers such as supermarkets, convenience stores, fast food chains, cafe, restaurants, schools and airports.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('BEVERAGES').should('be.visible')
      cy.contains('Sa next task mo, kailangan mong i-refill ang mga produkto sa shelf. Click next for the steps!').should('be.visible')
      cy.contains('Your next task is to replace the products on the shelf. Click next for the steps!').should('be.visible')
      cy.contains('>>').click()

      cy.contains('AFTER 2 MOS').should('be.visible')
      cy.contains('1. Tingnan ang expiration date ng bawat bottles sa pamamagitan ng pag-click sa produkto.').should('be.visible')
      cy.contains('1. Find each bottles’ expiration date by clicking on them.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('AFTER 2 MOS').should('be.visible')
      cy.contains('2. Alamin which one ang malapit nang ma-expire, lalo na ang mga may expiration date in the next 2 months.').should('be.visible')
      cy.contains('2. Identify which ones are nearly expired, specifically those with an expiration date in the next 2 months.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('AFTER 2 MOS').should('be.visible')
      cy.contains('3. Kunin ang mga products nearing expiration date at unahin ilagay sa 3rd layer.').should('be.visible')
      cy.contains('3. Take all the products nearing its expiration date and move it to the 3rd layer.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('AFTER 75 DAYS').should('be.visible')
      cy.contains('4. Ilagay naman ang may pinakamatagal na expiration date sa 2nd layer.').should('be.visible')
      cy.contains('4. While putting the new batch with the longer expiration date in the 2nd layer.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('AFTER 90 DAYS').should('be.visible')
      cy.contains('5. Kapag kulang na ang mga bottles sa shelf, kumuha sa new batch at mag-replenish.').should('be.visible')
      cy.contains('5. When there are not enough products on the shelf, get from the new batch and replenish.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Siguraduhin na ang mga products sa shelf ay may expiration date ng at least 2 months after the current date.').should('be.visible')
      cy.contains('Ensure that the new cans have expiration dates that are at least 2 months away from the current date.').should('be.visible')
      cy.contains('>>').click()

      cy.clock(null, ['setInterval']) // Rig game timer

      cy.contains('3RD LAYER').should('be.visible')
      cy.contains('2ND LAYER').should('be.visible')
      cy.contains('1ST LAYER').should('be.visible')

      cy.contains('Tandaan, ang goal ay to maintain the freshness and quality ng mga produkto sa shelf. Good luck, Juan!').should('be.visible')
      cy.contains('Remember, the goal is to maintain fresh and quality products on the shelf. Good luck, Juan!').should('be.visible')
      cy.contains('START').click()

      // DRAG AND DROP
      cy.get('g#SHELF_2 g[data-bottleIdx="9"]').drag('g#SHELF_1 g[data-bottleIdx="2"]', { force: true })
      cy.get('g#SHELF_2 g[data-bottleIdx="8"]').drag('g#SHELF_1 g[data-bottleIdx="5"]', { force: true })
      cy.get('g#SHELF_2 g[data-bottleIdx="12"]').drag('g#SHELF_1 g[data-bottleIdx="5"]', { force: true })

      // Fast forward 30 seconds
      cy.tick(30000)
      cy.clock().invoke('restore')
      // LOSE SFX

      // OUTRO
      cy.contains('Ang activity na ginawa mo just now ay tinatawag na First Expiry, First Out system. Ito ay sistema kung saan inaayos ang mga produkto ayon sa pinakamalapit na petsa ng expiration.').should('be.visible')
      cy.contains('The activity just now is called First Expiry, First Out system. This system organizes products according to the closest expiration date.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Sa sistemang ito, mas madaling i-prioritize for delivery sa mga tindahan at mamimili ang mga produktong malapit na ma-expire. Sinisigurado rin nito na laging fresh ang bawat bote na mabibili sa shelf.').should('be.visible')
      cy.contains('With this system we are able to prioritize delivery to retail stores and customers while ensuring every bottle is fresh on the shelf.').should('be.visible')
      cy.contains('>>').click()

      cy.url().should('include', '/game/find-the-coke-bottle')
    })

    // POSITIVE TESTING
    it('BOTTLES ARE CORRECTLY ARRANGED', () => {
      // INTRO
      cy.contains('Modern Trade: Ang Modern Trade ay mga malalaking tindahan tulad ng supermarkets, convenience stores, fast food chains, cafe, restaurants, schools and airports.').should('be.visible')
      cy.contains('Modern Trade: Modern Trade refers to larger retailers such as supermarkets, convenience stores, fast food chains, cafe, restaurants, schools and airports.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('BEVERAGES').should('be.visible')
      cy.contains('Sa next task mo, kailangan mong i-refill ang mga produkto sa shelf. Click next for the steps!').should('be.visible')
      cy.contains('Your next task is to replace the products on the shelf. Click next for the steps!').should('be.visible')
      cy.contains('>>').click()

      cy.contains('AFTER 2 MOS').should('be.visible')
      cy.contains('1. Tingnan ang expiration date ng bawat bottles sa pamamagitan ng pag-click sa produkto.').should('be.visible')
      cy.contains('1. Find each bottles’ expiration date by clicking on them.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('AFTER 2 MOS').should('be.visible')
      cy.contains('2. Alamin which one ang malapit nang ma-expire, lalo na ang mga may expiration date in the next 2 months.').should('be.visible')
      cy.contains('2. Identify which ones are nearly expired, specifically those with an expiration date in the next 2 months.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('AFTER 2 MOS').should('be.visible')
      cy.contains('3. Kunin ang mga products nearing expiration date at unahin ilagay sa 3rd layer.').should('be.visible')
      cy.contains('3. Take all the products nearing its expiration date and move it to the 3rd layer.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('AFTER 75 DAYS').should('be.visible')
      cy.contains('4. Ilagay naman ang may pinakamatagal na expiration date sa 2nd layer.').should('be.visible')
      cy.contains('4. While putting the new batch with the longer expiration date in the 2nd layer.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('AFTER 90 DAYS').should('be.visible')
      cy.contains('5. Kapag kulang na ang mga bottles sa shelf, kumuha sa new batch at mag-replenish.').should('be.visible')
      cy.contains('5. When there are not enough products on the shelf, get from the new batch and replenish.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Siguraduhin na ang mga products sa shelf ay may expiration date ng at least 2 months after the current date.').should('be.visible')
      cy.contains('Ensure that the new cans have expiration dates that are at least 2 months away from the current date.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('3RD LAYER').should('be.visible')
      cy.contains('2ND LAYER').should('be.visible')
      cy.contains('1ST LAYER').should('be.visible')

      cy.contains('Tandaan, ang goal ay to maintain the freshness and quality ng mga produkto sa shelf. Good luck, Juan!').should('be.visible')
      cy.contains('Remember, the goal is to maintain fresh and quality products on the shelf. Good luck, Juan!').should('be.visible')
      cy.contains('START').click()

      // DRAG AND DROP

      // 1ST LAYER
      cy.get('g#SHELF_2 g[data-bottleIdx="9"]').drag('g#SHELF_1 g[data-bottleIdx="2"]', { force: true })
      cy.get('g#SHELF_2 g[data-bottleIdx="14"]').drag('g#SHELF_1 g[data-bottleIdx="5"]', { force: true })

      // 2ND LAYER
      cy.get('g#SHELF_3 g[data-bottleIdx="18"]').drag('g#SHELF_2 g[data-bottleIdx="9"]', { force: true })
      cy.get('g#SHELF_3 g[data-bottleIdx="21"]').drag('g#SHELF_2 g[data-bottleIdx="14"]', { force: true })

      // 3RD LAYER
      cy.get('g#NEW_BATCH g[data-expiration="90"]').drag('g#SHELF_3 g[data-bottleIdx="18"]', { force: true })
      cy.get('g#NEW_BATCH g[data-expiration="90"]').drag('g#SHELF_3 g[data-bottleIdx="21"]', { force: true })

      // WIN SFX

      // OUTRO
      cy.contains('Ang activity na ginawa mo just now ay tinatawag na First Expiry, First Out system. Ito ay sistema kung saan inaayos ang mga produkto ayon sa pinakamalapit na petsa ng expiration.').should('be.visible')
      cy.contains('The activity just now is called First Expiry, First Out system. This system organizes products according to the closest expiration date.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Sa sistemang ito, mas madaling i-prioritize for delivery sa mga tindahan at mamimili ang mga produktong malapit na ma-expire. Sinisigurado rin nito na laging fresh ang bawat bote na mabibili sa shelf.').should('be.visible')
      cy.contains('With this system we are able to prioritize delivery to retail stores and customers while ensuring every bottle is fresh on the shelf.').should('be.visible')
      cy.contains('>>').click()

      cy.url().should('include', '/game/find-the-coke-bottle')
    })
  })
})
