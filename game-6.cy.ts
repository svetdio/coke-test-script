import { failEarly, iterateScreens, login, visitGamePage } from 'cypress-helper'

failEarly()

iterateScreens(() => {
  beforeEach(() => {
    login()
    visitGamePage('/game/order-assembling?noAnimation=true')
  })

  describe('GAME 6: ORDER ASSEMBLING & PACKING', () => {
    // NEGATIVE TESTING
    it('INCOMPLETE ORDER', () => {
      // PRE GAME INTRO
      cy.contains('Thank you, Juan! Bilang reward sa effort mo, let me tell you a secret. Alam mo ba kung ano ang secret ingredient ng bottle of happiness?').should('be.visible')
      cy.contains('Thank you, Juan! As a reward, let me share a secret with you. Do you know the secret ingredient in our bottle of happiness?').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Every bottle of Coca-Cola is crafted with care, pero ang tunay na nagpapa-special dito ay ang bawat tao na pinagdaanan ng isang bote ng coke.').should('be.visible')
      cy.contains("Every bottle of Coca-Cola is crafted with care, but it's the people who make it truly special.").should('be.visible')
      cy.contains('>>').click()

      cy.contains('Sila ang bumubuhay at nagbibigay ng kahalagahan sa Coca-Cola.').should('be.visible')
      cy.contains("It's the human touch that makes Coca-Cola extraordinary.").should('be.visible')
      cy.contains('>>').click()

      cy.contains('People from all walks of life come together to create this iconic beverage na naging part ng joyful moments ng iba’t ibang generations.').should('be.visible')
      cy.contains('People from all walks of life come together to create this iconic beverage that has been a part of joyful moments for generations.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('At ang energy, enthusiasm, at natatanging pananaw mo will add that special touch to every interaction and make the experience unforgettable.').should('be.visible')
      cy.contains('And YOUR energy, enthusiasm, and unique perspective will add that special touch to every interaction and make the experience unforgettable.').should('be.visible')
      cy.contains('>>').click()

      cy.wait(500)
      cy.contains('Tara na at i-share ang bottles of happiness. I-check ang order slips mula sa iba’t-ibang distribution channels natin.').should('be.visible')
      cy.contains('Let’s share bottles of happiness! Check the order slips from the different distribution channels.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Then click the products para makuha ng Picker natin.').should('be.visible')
      cy.contains('Then click the products so our Picker can get them.').should('be.visible')
      cy.contains('>>').click()

      cy.clock(null, ['setTimeout']) // Rig loading timer
      cy.contains('Kapag nakumpleto ang products sa order slip, i-click ang “LOAD” button para maisakay ng forklift sa delivery truck. Get a badge when you complete this task!').should('be.visible')
      cy.contains('When orders are complete, click “LOAD” and the forklift will automatically load the products in the delivery trucks. Get a badge when you complete this task!').should('be.visible')
      cy.contains('START').click()

      // ORDERS

      cy.get('#L3_RED').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)
      cy.get('#L2_GREEN').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)

      cy.get('#LOAD_BTN').click({ force: true })
      cy.contains('Current order slip has not been completed yet.').should('be.visible')

      cy.get('#L2_YELLOW_1').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)

      cy.get('#LOAD_BTN').click({ force: true })
      cy.tick(5000)
      cy.tick(5000)

      cy.get('#L1_RED_1').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)
      cy.get('#L1_GREEN').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)

      cy.get('#LOAD_BTN').click({ force: true })
      cy.contains('Current order slip has not been completed yet.').should('be.visible')

      cy.get('#L1_YELLOW').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)

      cy.get('#LOAD_BTN').click({ force: true })
      cy.tick(5000)
      cy.tick(5000)

      cy.clock().invoke('restore')
    })

    it('RE-CLICKING OF ORDER', () => {
      // PRE GAME INTRO
      cy.contains('Thank you, Juan! Bilang reward sa effort mo, let me tell you a secret. Alam mo ba kung ano ang secret ingredient ng bottle of happiness?').should('be.visible')
      cy.contains('Thank you, Juan! As a reward, let me share a secret with you. Do you know the secret ingredient in our bottle of happiness?').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Every bottle of Coca-Cola is crafted with care, pero ang tunay na nagpapa-special dito ay ang bawat tao na pinagdaanan ng isang bote ng coke.').should('be.visible')
      cy.contains("Every bottle of Coca-Cola is crafted with care, but it's the people who make it truly special.").should('be.visible')
      cy.contains('>>').click()

      cy.contains('Sila ang bumubuhay at nagbibigay ng kahalagahan sa Coca-Cola.').should('be.visible')
      cy.contains("It's the human touch that makes Coca-Cola extraordinary.").should('be.visible')
      cy.contains('>>').click()

      cy.contains('People from all walks of life come together to create this iconic beverage na naging part ng joyful moments ng iba’t ibang generations.').should('be.visible')
      cy.contains('People from all walks of life come together to create this iconic beverage that has been a part of joyful moments for generations.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('At ang energy, enthusiasm, at natatanging pananaw mo will add that special touch to every interaction and make the experience unforgettable.').should('be.visible')
      cy.contains('And YOUR energy, enthusiasm, and unique perspective will add that special touch to every interaction and make the experience unforgettable.').should('be.visible')
      cy.contains('>>').click()

      cy.wait(500)
      cy.contains('Tara na at i-share ang bottles of happiness. I-check ang order slips mula sa iba’t-ibang distribution channels natin.').should('be.visible')
      cy.contains('Let’s share bottles of happiness! Check the order slips from the different distribution channels.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Then click the products para makuha ng Picker natin.').should('be.visible')
      cy.contains('Then click the products so our Picker can get them.').should('be.visible')
      cy.contains('>>').click()

      cy.clock(null, ['setTimeout']) // Rig loading timer
      cy.contains('Kapag nakumpleto ang products sa order slip, i-click ang “LOAD” button para maisakay ng forklift sa delivery truck. Get a badge when you complete this task!').should('be.visible')
      cy.contains('When orders are complete, click “LOAD” and the forklift will automatically load the products in the delivery trucks. Get a badge when you complete this task!').should('be.visible')
      cy.contains('START').click()

      // ORDERS

      cy.get('#L3_RED').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)
      cy.get('#L2_GREEN').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)
      cy.get('#L2_YELLOW_1').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)

      cy.get('#L1_GREEN').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)
      cy.get('#L1_YELLOW').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)

      cy.get('#LOAD_BTN').click({ force: true })
      cy.tick(5000)
      cy.tick(5000)

      cy.clock().invoke('restore')
    })

    it('COMPLETED THE ORDER SLIP', () => {
      // PRE GAME INTRO
      cy.contains('Thank you, Juan! Bilang reward sa effort mo, let me tell you a secret. Alam mo ba kung ano ang secret ingredient ng bottle of happiness?').should('be.visible')
      cy.contains('Thank you, Juan! As a reward, let me share a secret with you. Do you know the secret ingredient in our bottle of happiness?').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Every bottle of Coca-Cola is crafted with care, pero ang tunay na nagpapa-special dito ay ang bawat tao na pinagdaanan ng isang bote ng coke.').should('be.visible')
      cy.contains("Every bottle of Coca-Cola is crafted with care, but it's the people who make it truly special.").should('be.visible')
      cy.contains('>>').click()

      cy.contains('Sila ang bumubuhay at nagbibigay ng kahalagahan sa Coca-Cola.').should('be.visible')
      cy.contains("It's the human touch that makes Coca-Cola extraordinary.").should('be.visible')
      cy.contains('>>').click()

      cy.contains('People from all walks of life come together to create this iconic beverage na naging part ng joyful moments ng iba’t ibang generations.').should('be.visible')
      cy.contains('People from all walks of life come together to create this iconic beverage that has been a part of joyful moments for generations.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('At ang energy, enthusiasm, at natatanging pananaw mo will add that special touch to every interaction and make the experience unforgettable.').should('be.visible')
      cy.contains('And YOUR energy, enthusiasm, and unique perspective will add that special touch to every interaction and make the experience unforgettable.').should('be.visible')
      cy.contains('>>').click()

      cy.wait(500)
      cy.contains('Tara na at i-share ang bottles of happiness. I-check ang order slips mula sa iba’t-ibang distribution channels natin.').should('be.visible')
      cy.contains('Let’s share bottles of happiness! Check the order slips from the different distribution channels.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Then click the products para makuha ng Picker natin.').should('be.visible')
      cy.contains('Then click the products so our Picker can get them.').should('be.visible')
      cy.contains('>>').click()

      cy.clock(null, ['setTimeout']) // Rig loading timer
      cy.contains('Kapag nakumpleto ang products sa order slip, i-click ang “LOAD” button para maisakay ng forklift sa delivery truck. Get a badge when you complete this task!').should('be.visible')
      cy.contains('When orders are complete, click “LOAD” and the forklift will automatically load the products in the delivery trucks. Get a badge when you complete this task!').should('be.visible')
      cy.contains('START').click()

      // ORDERS

      cy.get('#L3_RED').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)
      cy.get('#L2_GREEN').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)
      cy.get('#L2_YELLOW_1').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)

      cy.get('#LOAD_BTN').click({ force: true })
      cy.tick(5000)
      cy.tick(5000)

      cy.get('#L1_RED_1').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)
      cy.get('#L1_GREEN').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)
      cy.get('#L1_YELLOW').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)

      cy.get('#LOAD_BTN').click({ force: true })
      cy.tick(5000)
      cy.tick(5000)

      cy.get('#L1_RED_1').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)
      cy.get('#L2_GREEN').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)
      cy.get('#L2_YELLOW_1').click({ force: true })
      cy.tick(10000)
      cy.tick(10000)

      cy.get('#LOAD_BTN').click({ force: true })
      cy.tick(5000)
      cy.tick(5000)

      cy.clock().invoke('restore')
      // WIN SFX

      // OUTRO
      cy.contains('Thank you for helping, Juan! Ngayong na-load na ang mga products sa trucks, panoorin kung pano naman ito dinedeliver!').should('be.visible')
      cy.contains('Thank you for helping, Juan! Now that all products are loaded, watch how we deliver millions of cases of bottles of happiness!').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Curious about the behind-the-scenes magic at Coca-Cola Plant, blending Coca-Cola\'s secret magic? Discover the refreshing journey of crafting our bottle of happiness.').should('be.visible')
      cy.contains('WATCH LATER').click()

      cy.contains('Congratulations!').should('be.visible')
      cy.contains('You earned a badge!').should('be.visible')
      cy.contains('EARN MORE BADGE').click()

      cy.url({ timeout: 30000 }).should('include', '/game/delivery-to-partner-outlets')
    })
  })
})
