import '@4tw/cypress-drag-drop'
import { failEarly, iterateScreens, login, visitGamePage } from 'cypress-helper'
failEarly()

iterateScreens(() => {
  beforeEach(() => {
    login()
    visitGamePage('/game/crown-game')
  })

  describe('Game 1: Crown Game Test', () => {
    // NEGATIVE TEST
    it('2 CROWNS ARE IN CORRECT PLACEMENT', () => {
      // INTRO DIALOGUE
      cy.contains('Lahat sa Coca-Cola has the same goal, but alam mo ba na magkaiba ang The Coca-Cola Company at ang Coca-Cola Beverages Philippines?').should('be.visible')
      cy.contains('Everyone at Coca-cola has the same goal, but did you know that The Coca-Cola Company and the Coca-Cola Beverages Philippines are different?').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Let’s play a mini game to know saan sila nagkakaiba!').should('be.visible')
      cy.contains('Let’s play a mini game to know their difference!').should('be.visible')
      cy.contains('>>').click()

      // START
      cy.clock(null, ['setInterval']) // Rig game timer
      cy.contains('HOW TO PLAY: Piliin ang mga responsibility stamps below at i-drag ito sa tamang system. Meron kang 30 seconds to complete the game. Ready?').should('be.visible')
      cy.contains('HOW TO PLAY: Select the tasks below and drag them to the corresponding system. You have 30 seconds to complete the game. Are you ready?').should('be.visible')
      cy.contains('START').click()

      // DRAG AND DROP
      cy.get('[data-name="crown-1"]').drag('[data-type="ccbi"][data-row="0"][data-col="0"]', { force: true })
      cy.get('[data-name="crown-2"]').drag('[data-type="ccci"][data-row="0"][data-col="0"]', { force: true })

      // Fast forward 30 seconds
      cy.tick(30000)
      cy.clock().invoke('restore')

      // LOSE SFX
      // CROWN LABLES
      cy.contains('License to usethe brand').should('be.visible')
      cy.contains('StrategicMarketing').should('be.visible')
      cy.contains('Owner of the brand').should('be.visible')
      cy.contains('Develop & MarketTCCC in PH').should('be.visible')
      cy.contains('Product QualityControl').should('be.visible')
      cy.contains('OperationalMarketing').should('be.visible')
      cy.contains('Makes & SellsConcentrate toGlobal Bottlers').should('be.visible')
      cy.contains('Labor Standards, Criteria & Norms for Bottles').should('be.visible')

      // OUTRO
      cy.contains('Okay lang yan! It’s a learning opportunity! Pag-usapan naman natin ang kahanga-hangang Coca-Cola Footprint.', { timeout: 30000 }).should('be.visible')
      cy.contains('It’s okay! It’s a learning opportunity! Now, let\'s talk about the amazing Coca-Cola Footprint.').should('be.visible')
      cy.contains('>>').click()

      cy.clock(null, ['setTimeout']) // Rig animation timeouts
      cy.contains('Our VISION is simple but powerful: Refresh the Philippines and make a difference.').should('be.visible')
      cy.contains('Our vision is simple but powerful: "Refresh the Philippines and make a difference."').should('be.visible')
      cy.contains('>>').click()

      // Finish animation
      cy.tick(2000)
      cy.tick(3000)
      cy.tick(2000)
      cy.tick(150)
      cy.tick(3000)
      cy.clock().invoke('restore')

      cy.contains('Kaya mula noon hanggang ngayon, milyon-milyong Pilipino ang dinadalhan natin ng bottle of happiness.', { timeout: 30000 }).should('be.visible')
      cy.contains('That\'s why from then until now, we have been delivering bottles of happiness to millions of Filipinos.').should('be.visible')
      cy.contains('>>').click()

      cy.contains("Adam, bilang new member ng Coca-Cola family, your enthusiasm, dedication, and passion are crucial in continuing CCBPI's mission.", { timeout: 30000 }).should('be.visible')
      cy.contains("Adam, as a new member of the Coca-Cola family, your enthusiasm, dedication, and passion are crucial in continuing CCBPI's mission.").should('be.visible')
      cy.contains('>>').click()

      cy.contains('Handa ka na bang i-refresh ang buong bansa and make a difference?').should('be.visible')
      cy.contains('Are you ready to bring happiness and change to the entire country?').should('be.visible')
      cy.contains('>>').click()

      cy.url().should('include', '/game/tindahan-aling-nena')
    })

    // NEGATIVE TEST
    it('5 CROWNS ARE IN CORRECT PLACEMENT', () => {
      // INTRO DIALOGUE
      cy.contains('Lahat sa Coca-Cola has the same goal, but alam mo ba na magkaiba ang The Coca-Cola Company at ang Coca-Cola Beverages Philippines?').should('be.visible')
      cy.contains('Everyone at Coca-cola has the same goal, but did you know that The Coca-Cola Company and the Coca-Cola Beverages Philippines are different?').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Let’s play a mini game to know saan sila nagkakaiba!').should('be.visible')
      cy.contains('Let’s play a mini game to know their difference!').should('be.visible')
      cy.contains('>>').click()

      // START
      cy.clock(null, ['setInterval']) // Rig game timer
      cy.contains('HOW TO PLAY: Piliin ang mga responsibility stamps below at i-drag ito sa tamang system. Meron kang 30 seconds to complete the game. Ready?').should('be.visible')
      cy.contains('HOW TO PLAY: Select the tasks below and drag them to the corresponding system. You have 30 seconds to complete the game. Are you ready?').should('be.visible')
      cy.contains('START').click()

      // DRAG AND DROP
      cy.get('[data-name="crown-1"]').drag('[data-type="ccbi"][data-row="0"][data-col="0"]', { force: true })
      cy.get('[data-name="crown-2"]').drag('[data-type="ccci"][data-row="0"][data-col="0"]', { force: true })
      cy.get('[data-name="crown-3"]').drag('[data-type="ccbi"][data-row="1"][data-col="0"]', { force: true })
      cy.get('[data-name="crown-4"]').drag('[data-type="ccci"][data-row="1"][data-col="0"]', { force: true })
      cy.get('[data-name="crown-5"]').drag('[data-type="ccbi"][data-row="0"][data-col="1"]', { force: true })

      // Fast forward 30 seconds
      cy.tick(30000)
      cy.clock().invoke('restore')

      // LOSE SFX

      // CROWN LABLES
      cy.contains('License to usethe brand').should('be.visible')
      cy.contains('StrategicMarketing').should('be.visible')
      cy.contains('Owner of the brand').should('be.visible')
      cy.contains('Develop & MarketTCCC in PH').should('be.visible')
      cy.contains('Product QualityControl').should('be.visible')
      cy.contains('OperationalMarketing').should('be.visible')
      cy.contains('Makes & SellsConcentrate toGlobal Bottlers').should('be.visible')
      cy.contains('Labor Standards, Criteria & Norms for Bottles').should('be.visible')

      // OUTRO
      cy.contains('Okay lang yan! It’s a learning opportunity! Pag-usapan naman natin ang kahanga-hangang Coca-Cola Footprint.', { timeout: 30000 }).should('be.visible')
      cy.contains('It’s okay! It’s a learning opportunity! Now, let\'s talk about the amazing Coca-Cola Footprint.').should('be.visible')
      cy.contains('>>').click()

      cy.clock(null, ['setTimeout']) // Rig animation timeouts
      cy.contains('Our VISION is simple but powerful: Refresh the Philippines and make a difference.').should('be.visible')
      cy.contains('Our vision is simple but powerful: "Refresh the Philippines and make a difference."').should('be.visible')
      cy.contains('>>').click()

      // Finish animation
      cy.tick(2000)
      cy.tick(3000)
      cy.tick(2000)
      cy.tick(150)
      cy.tick(3000)
      cy.clock().invoke('restore')

      cy.contains('Kaya mula noon hanggang ngayon, milyon-milyong Pilipino ang dinadalhan natin ng bottle of happiness.', { timeout: 30000 }).should('be.visible')
      cy.contains('That\'s why from then until now, we have been delivering bottles of happiness to millions of Filipinos.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Adam, bilang new member ng Coca-Cola family, your enthusiasm, dedication, and passion are crucial in continuing CCBPI\'s mission.').should('be.visible')
      cy.contains("Adam, as a new member of the Coca-Cola family, your enthusiasm, dedication, and passion are crucial in continuing CCBPI's mission.").should('be.visible')
      cy.contains('>>').click()

      cy.contains('Handa ka na bang i-refresh ang buong bansa and make a difference?').should('be.visible')
      cy.contains('Are you ready to bring happiness and change to the entire country?').should('be.visible')
      cy.contains('>>').click()

      cy.url().should('include', '/game/tindahan-aling-nena')
    })

    // NEGATIVE TEST
    it('7 CROWNS ARE IN CORRECT PLACEMENT', () => {
      // INTRO DIALOGUE
      cy.contains('Lahat sa Coca-Cola has the same goal, but alam mo ba na magkaiba ang The Coca-Cola Company at ang Coca-Cola Beverages Philippines?').should('be.visible')
      cy.contains('Everyone at Coca-cola has the same goal, but did you know that The Coca-Cola Company and the Coca-Cola Beverages Philippines are different?').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Let’s play a mini game to know saan sila nagkakaiba!').should('be.visible')
      cy.contains('Let’s play a mini game to know their difference!').should('be.visible')
      cy.contains('>>').click()

      // START
      cy.clock(null, ['setInterval']) // Rig game timer
      cy.contains('HOW TO PLAY: Piliin ang mga responsibility stamps below at i-drag ito sa tamang system. Meron kang 30 seconds to complete the game. Ready?').should('be.visible')
      cy.contains('HOW TO PLAY: Select the tasks below and drag them to the corresponding system. You have 30 seconds to complete the game. Are you ready?').should('be.visible')
      cy.contains('START').click()

      // DRAG AND DROP
      cy.get('[data-name="crown-1"]').drag('[data-type="ccbi"][data-row="0"][data-col="0"]', { force: true })
      cy.get('[data-name="crown-2"]').drag('[data-type="ccci"][data-row="0"][data-col="0"]', { force: true })
      cy.get('[data-name="crown-3"]').drag('[data-type="ccbi"][data-row="1"][data-col="0"]', { force: true })
      cy.get('[data-name="crown-4"]').drag('[data-type="ccci"][data-row="1"][data-col="0"]', { force: true })
      cy.get('[data-name="crown-5"]').drag('[data-type="ccbi"][data-row="0"][data-col="1"]', { force: true })
      cy.get('[data-name="crown-6"]').drag('[data-type="ccbi"][data-row="1"][data-col="1"]', { force: true })
      cy.get('[data-name="crown-7"]').drag('[data-type="ccci"][data-row="0"][data-col="1"]', { force: true })

      // Fast forward 30 seconds
      cy.tick(30000)
      cy.clock().invoke('restore')

      // LOSE SFX

      // CROWN LABLES
      cy.contains('License to usethe brand').should('be.visible')
      cy.contains('StrategicMarketing').should('be.visible')
      cy.contains('Owner of the brand').should('be.visible')
      cy.contains('Develop & MarketTCCC in PH').should('be.visible')
      cy.contains('Product QualityControl').should('be.visible')
      cy.contains('OperationalMarketing').should('be.visible')
      cy.contains('Makes & SellsConcentrate toGlobal Bottlers').should('be.visible')
      cy.contains('Labor Standards, Criteria & Norms for Bottles').should('be.visible')

      // OUTRO
      cy.contains('Okay lang yan! It’s a learning opportunity! Pag-usapan naman natin ang kahanga-hangang Coca-Cola Footprint.', { timeout: 30000 }).should('be.visible')
      cy.contains('It’s okay! It’s a learning opportunity! Now, let\'s talk about the amazing Coca-Cola Footprint.').should('be.visible')
      cy.contains('>>').click()

      cy.clock(null, ['setTimeout']) // Rig animation timeouts
      cy.contains('Our VISION is simple but powerful: Refresh the Philippines and make a difference.').should('be.visible')
      cy.contains('Our vision is simple but powerful: "Refresh the Philippines and make a difference."').should('be.visible')
      cy.contains('>>').click()

      // Finish animation
      cy.tick(2000)
      cy.tick(3000)
      cy.tick(2000)
      cy.tick(150)
      cy.tick(3000)
      cy.clock().invoke('restore')

      cy.contains('Kaya mula noon hanggang ngayon, milyon-milyong Pilipino ang dinadalhan natin ng bottle of happiness.', { timeout: 30000 }).should('be.visible')
      cy.contains('That\'s why from then until now, we have been delivering bottles of happiness to millions of Filipinos.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Adam, bilang new member ng Coca-Cola family, your enthusiasm, dedication, and passion are crucial in continuing CCBPI\'s mission.').should('be.visible')
      cy.contains("Adam, as a new member of the Coca-Cola family, your enthusiasm, dedication, and passion are crucial in continuing CCBPI's mission.").should('be.visible')
      cy.contains('>>').click()

      cy.contains('Handa ka na bang i-refresh ang buong bansa and make a difference?').should('be.visible')
      cy.contains('Are you ready to bring happiness and change to the entire country?').should('be.visible')
      cy.contains('>>').click()

      cy.url().should('include', '/game/tindahan-aling-nena')
    })

    // POSITIVE TEST
    it('ALL CROWNS ARE IN CORRECT PLACEMENT', () => {
      // INTRO DIALOGUE
      cy.contains('Lahat sa Coca-Cola has the same goal, but alam mo ba na magkaiba ang The Coca-Cola Company at ang Coca-Cola Beverages Philippines?').should('be.visible')
      cy.contains('Everyone at Coca-cola has the same goal, but did you know that The Coca-Cola Company and the Coca-Cola Beverages Philippines are different?').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Let’s play a mini game to know saan sila nagkakaiba!').should('be.visible')
      cy.contains('Let’s play a mini game to know their difference!').should('be.visible')
      cy.contains('>>').click()

      // START
      cy.contains('HOW TO PLAY: Piliin ang mga responsibility stamps below at i-drag ito sa tamang system. Meron kang 30 seconds to complete the game. Ready?').should('be.visible')
      cy.contains('HOW TO PLAY: Select the tasks below and drag them to the corresponding system. You have 30 seconds to complete the game. Are you ready?').should('be.visible')
      cy.contains('START').click()

      // DRAG AND DROP
      cy.get('[data-name="crown-1"]').drag('[data-type="ccbi"][data-row="0"][data-col="0"]', { force: true })
      cy.get('[data-name="crown-2"]').drag('[data-type="ccci"][data-row="0"][data-col="0"]', { force: true })
      cy.get('[data-name="crown-4"]').drag('[data-type="ccci"][data-row="1"][data-col="0"]', { force: true })
      cy.get('[data-name="crown-3"]').drag('[data-type="ccbi"][data-row="1"][data-col="0"]', { force: true })

      cy.get('[data-name="crown-5"]').drag('[data-type="ccbi"][data-row="0"][data-col="1"]', { force: true })
      cy.get('[data-name="crown-6"]').drag('[data-type="ccbi"][data-row="1"][data-col="1"]', { force: true })
      cy.get('[data-name="crown-7"]').drag('[data-type="ccci"][data-row="0"][data-col="1"]', { force: true })
      cy.get('[data-name="crown-8"]').drag('[data-type="ccci"][data-row="1"][data-col="1"]', { force: true })

      // WIN SFX

      // CROWN LABLES
      cy.contains('License to usethe brand').should('be.visible')
      cy.contains('StrategicMarketing').should('be.visible')
      cy.contains('Owner of the brand').should('be.visible')
      cy.contains('Develop & MarketTCCC in PH').should('be.visible')
      cy.contains('Product QualityControl').should('be.visible')
      cy.contains('OperationalMarketing').should('be.visible')
      cy.contains('Makes & SellsConcentrate toGlobal Bottlers').should('be.visible')
      cy.contains('Labor Standards, Criteria & Norms for Bottles').should('be.visible')

      // OUTRO
      cy.contains('Good job! Pag-usapan naman natin ang kahanga-hangang Coca-Cola Footprint.', { timeout: 30000 }).should('be.visible')
      cy.contains("Good job! Let's talk about the amazing Coca-Cola Footprint.").should('be.visible')
      cy.contains('>>').click()

      cy.contains('Our VISION is simple but powerful: Refresh the Philippines and make a difference.').should('be.visible')
      cy.contains('Our vision is simple but powerful: "Refresh the Philippines and make a difference."').should('be.visible')
      cy.contains('>>').click()

      cy.clock(null, ['setTimeout']) // Rig animation timeouts

      // Finish animation
      cy.tick(2000)
      cy.tick(3000)
      cy.tick(2000)
      cy.tick(150)
      cy.tick(3000)
      cy.clock().invoke('restore')

      cy.contains('Kaya mula noon hanggang ngayon, milyon-milyong Pilipino ang dinadalhan natin ng bottle of happiness.', { timeout: 30000 }).should('be.visible')
      cy.contains('That\'s why from then until now, we have been delivering bottles of happiness to millions of Filipinos.').should('be.visible')
      cy.contains('>>').click()

      cy.contains("Adam, bilang new member ng Coca-Cola family, your enthusiasm, dedication, and passion are crucial in continuing CCBPI's mission.", { timeout: 30000 }).should('be.visible')
      cy.contains("Adam, as a new member of the Coca-Cola family, your enthusiasm, dedication, and passion are crucial in continuing CCBPI's mission.").should('be.visible')
      cy.contains('>>').click()

      cy.contains('Handa ka na bang i-refresh ang buong bansa and make a difference?').should('be.visible')
      cy.contains('Are you ready to bring happiness and change to the entire country?').should('be.visible')
      cy.contains('>>').click()

      cy.url().should('include', '/game/tindahan-aling-nena')
    })
  })
})
