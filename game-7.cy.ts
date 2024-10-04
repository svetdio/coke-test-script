import '@4tw/cypress-drag-drop'
import { failEarly, iterateScreens, login, visitGamePage } from 'cypress-helper'
failEarly()

iterateScreens(() => {
  beforeEach(() => {
    login()
    visitGamePage('/game/delivery-to-partner-outlets?skipAnimation=true')
  })

  describe('GAME 7: DELIVERY TO PARTNER OUTLETS', () => {
    // NEGATIVE TESTING
    it('UNFINISHED DELIVERY', () => {
      // PRE GAME INTRO
      cy.contains("Ako si Carlo ng Logistics, part ng Supply Chain, at ipapakita ko sa 'yo kung paano namin idinedeliver sa buong Pilipinas ang milyon-milyong cases ng bottles of happiness.").should('be.visible')
      cy.contains('I am Carlo, from Logistics, part of the Supply Chain, and I will show you how we deliver millions of cases of bottles of happiness throughout the Philippines.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Mayroon kaming dedicated logistics team na nagpaplano, at nagko-coordinate ng operations to ensure arrival at the right place and at the right time.').should('be.visible')
      cy.contains('There is a dedicated logistics team that plans, coordinates, and executes distribution operations using the most cost-effective and efficient means to ensure arrival at the right place and at the right time.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('We have a number of CCBPI Plants and Distribution Centers sa buong Pilipinas!').should('be.visible')
      cy.contains('We have a number of CCBPI Plants and Distribution Centers across the Philippines.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Fun Fact: With thousands of delivery trucks na tumatakbo ng 55.8km on average daily, kaya nating ikutin ang mundo ng 3 beses!').should('be.visible')
      cy.contains('Fun Fact: With thousands of delivery trucks and an average of 55.8km run per truck we can circumnavigate the Earth 3 times in a single day.').should('be.visible')
      cy.contains('>>').click()

      // PRE GAME
      cy.contains('Pwede mo ba kaming tulungan? Pagpalitin lang ang position ng mga sasakyan at ilagay sa tamang daanan pra madeliver and orders ng mga outlets. Click “DELIVER” kapag sure ka na!').should('be.visible')
      cy.contains('Can you help us on the delivery? Switch the position of the vehicles and put them on the right path to deliver the orders of the outlets. Click “DELIVER” when you’re sure!').should('be.visible')
      cy.contains('>>').click()

      cy.clock(null, ['setInterval']) // Rig loading timer
      cy.contains('At huwag kalimutan, completing the games earn you badges. Let\'s get those deliveries rolling! The team is counting on you. Good luck!').should('be.visible')
      cy.contains('And don\'t forget, completing the games earns you badges. Show off your logistics skills and earn those badges! Let\'s get those deliveries rolling, Juan! The team is counting on you. Good luck!').should('be.visible')
      cy.contains('START').click()

      // DRAG AND DRORP

      cy.get('[data-truckName="truck-supermarket"]').drag('[data-truckName="truck-hospital"]', { force: true })
      cy.get('[data-truckName="truck-hospital"]').drag('[data-truckName="truck-tindahan"]', { force: true })
      cy.get('[data-truckName="truck-hospital"]').drag('[data-truckName="truck-supermarket"]', { force: true })
      cy.contains('DELIVER').click()

      cy.get('[data-truckName="truck-supermarket"]').drag('[data-truckName="truck-hospital"]', { force: true })
      cy.get('[data-truckName="truck-hospital"]').drag('[data-truckName="truck-tindahan"]', { force: true })
      cy.get('[data-truckName="truck-hospital"]').drag('[data-truckName="truck-supermarket"]', { force: true })
      cy.contains('DELIVER').click()

      // Fast forward 30 seconds
      cy.tick(30000)
      cy.clock().invoke('restore')
      // LOSE SFX

      // LOSE SPIEL
      cy.contains('Sayang, naubusan ka ng time! Don’t worry, back-up has arrived. Importante na ma-maintain ang mga accounts at madagdagan din.').should('be.visible')
      cy.contains('Too bad, you ran out of time! Don’t worry, back-up has arrived. It is important to maintain existing accounts and acquire new ones as well.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('May nakaka-excite na balita ako para sa’yo! Aling Nena just opened her karinderya! Ibig sabihin, more opportunities for us to spread happiness!!').should('be.visible')
      cy.contains("And with that, I've got some exciting news for you! Aling Nena just opened her carinderia! That means, more opportunities for us to spread happiness!!").should('be.visible')
      cy.contains('>>').click()

      cy.contains('Now that we’ve uncovered the secrets of how we sell and make our bottle of happiness, let’s delve into the next chapter. How do we sprinkle that joy to every Filipino? Get ready for the journey of delivering the bottle of happiness.').should('be.visible')
      cy.contains('WATCH LATER').click()

      cy.url().should('include', '/game/collect-the-bottles')
    })

    // POSITIVE TESTING
    it('FINISHED DELIVERY', () => {
      // PRE GAME INTRO
      cy.contains("Ako si Carlo ng Logistics, part ng Supply Chain, at ipapakita ko sa 'yo kung paano namin idinedeliver sa buong Pilipinas ang milyon-milyong cases ng bottles of happiness.").should('be.visible')
      cy.contains('I am Carlo, from Logistics, part of the Supply Chain, and I will show you how we deliver millions of cases of bottles of happiness throughout the Philippines.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Mayroon kaming dedicated logistics team na nagpaplano, at nagko-coordinate ng operations to ensure arrival at the right place and at the right time.').should('be.visible')
      cy.contains('There is a dedicated logistics team that plans, coordinates, and executes distribution operations using the most cost-effective and efficient means to ensure arrival at the right place and at the right time.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('We have a number of CCBPI Plants and Distribution Centers sa buong Pilipinas!').should('be.visible')
      cy.contains('We have a number of CCBPI Plants and Distribution Centers across the Philippines.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Fun Fact: With thousands of delivery trucks na tumatakbo ng 55.8km on average daily, kaya nating ikutin ang mundo ng 3 beses!').should('be.visible')
      cy.contains('Fun Fact: With thousands of delivery trucks and an average of 55.8km run per truck we can circumnavigate the Earth 3 times in a single day.').should('be.visible')
      cy.contains('>>').click()

      // PRE GAME
      cy.contains('Pwede mo ba kaming tulungan? Pagpalitin lang ang position ng mga sasakyan at ilagay sa tamang daanan pra madeliver and orders ng mga outlets. Click “DELIVER” kapag sure ka na!').should('be.visible')
      cy.contains('Can you help us on the delivery? Switch the position of the vehicles and put them on the right path to deliver the orders of the outlets. Click “DELIVER” when you’re sure!').should('be.visible')
      cy.contains('>>').click()

      cy.contains('At huwag kalimutan, completing the games earn you badges. Let\'s get those deliveries rolling! The team is counting on you. Good luck!').should('be.visible')
      cy.contains('And don\'t forget, completing the games earns you badges. Show off your logistics skills and earn those badges! Let\'s get those deliveries rolling, Juan! The team is counting on you. Good luck!').should('be.visible')
      cy.contains('START').click()

      // DRAG AND DRORP
      cy.get('[data-truckName="truck-supermarket"]').drag('[data-truckName="truck-hospital"]', { force: true })
      cy.get('[data-truckName="truck-hospital"]').drag('[data-truckName="truck-tindahan"]', { force: true })

      cy.contains('DELIVER').click()
      // WIN SFX

      // OUTRO
      cy.contains('Ayos! At dahil sa tulong mo, nakarating na ng maayos ang mga products sa kani-kanilang outlets. Thank you! Next.').should('be.visible')
      cy.contains('Nice! Thanks to your help, all our products reached their designated outlets safely.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('May nakaka-excite na balita ako para sa’yo! Aling Nena just opened her karinderya! Ibig sabihin, more opportunities for us to spread happiness!!').should('be.visible')
      cy.contains("And with that, I've got some exciting news for you! Aling Nena just opened her carinderia! That means, more opportunities for us to spread happiness!!").should('be.visible')
      cy.contains('>>').click()

      cy.contains('Now that we’ve uncovered the secrets of how we sell and make our bottle of happiness, let’s delve into the next chapter. How do we sprinkle that joy to every Filipino? Get ready for the journey of delivering the bottle of happiness.').should('be.visible')
      cy.contains('WATCH LATER').click()

      cy.url().should('include', '/game/collect-the-bottles')
    })
  })
})
