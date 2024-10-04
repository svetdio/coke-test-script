import '@4tw/cypress-drag-drop'
import { failEarly, iterateScreens, login, visitGamePage } from 'cypress-helper'
failEarly()

iterateScreens(() => {
  beforeEach(() => {
    login()
    visitGamePage('/game/tindahan-aling-nena?noAnimations=true')
  })

  describe('Game 2: Tindahan ni Aling Nena Test', () => {
    // NEGATIVE TESTING
    it('ELEMENTS ARE IN WRONG PLACEMENT', () => {
      // INTRO
      cy.contains('Meet Juan! Isang masipag na empleyado at mabuting anak.').should('be.visible')
      cy.contains('Meet Juan! A diligent employee and a good son.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Part na ng bawat lunch breaks and moments of happiness niya ang Coca-Cola.').should('be.visible')
      cy.contains('Coca-Cola is already a part of his every lunch breaks and moments of happiness.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Hinahanap-hanap niya ang refreshing feeling with every sip. Kaya hindi niya maiwasan na mapa-isip...').should('be.visible')
      cy.contains("He's been craving for that refreshing feeling with every sip. That's also why is no surprise he often wonders....").should('be.visible')
      cy.contains('>>').click()

      // BEGIN JOURNEY
      cy.clock(null, ['setTimeout']) // Rig animation timeouts
      // BEGIN JOURNEY
      cy.contains('Hmm... Paano kaya nakakarating sakin ang bote na to?').should('be.visible')
      cy.contains('Begin Journey').click()

      cy.tick(2000)
      cy.tick(3000)
      cy.tick(2000)
      cy.tick(150)
      cy.tick(3000)
      cy.clock().invoke('restore')

      cy.url().should('include', '/game/tindahan-aling-nena/game')

      // PRE-GAME

      cy.contains('Hi! Ako nga pala si Mark from Commercial. Dito, we sell bottles of happiness and spread joy across the country.', { timeout: 30000 }).should('be.visible')
      cy.contains("Hi! I'm Mark from Commercial. Here we sell bottles of happiness and spread joy across the country.").should('be.visible')
      cy.contains('>>').click()

      cy.contains("Tara at i-explore natin ang iba't ibang channels at partner outlets. Meron tayong General Trade, Modern Trade, at Emerging Channels.").should('be.visible')
      cy.contains("Let's explore the different channels and partner outlets we have. This includes General Trade, Modern Trade, and Emerging Channels.").should('be.visible')
      cy.contains('>>').click()

      cy.contains('General Trade: Sa channel na ito kasama ang mga traditional na tindahan tulad ng sari-sari stores at carinderias.').should('be.visible')
      cy.contains('General Trade: This channel includes traditional retailers like sari-sari stores and carinderias.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Meet Aling Nena, may-ari ng sari-sari store. As one of our partner outlets, may mga collateral materials tayong binibigay sa kanya.').should('be.visible')
      cy.contains('Meet Aling Nena, a Sari-Sari store owner. As one of our concessionaires, we provide her with marketing collaterals to help promote our products.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Ang task mo ay tulungan siya sa paglalagay ng mga marketing collaterals.').should('be.visible')
      cy.contains('Your task is to help her by placing the marketing collaterals in their correct spots.').should('be.visible')
      cy.contains('>>').click()

      cy.clock(null, ['setInterval']) // Rig game timer
      cy.contains('I-drag at i-drop ang bawat collateral sa kani-kanilang tamang lugar and get a badge as a reward! Tandaan, attention to detail is key!').should('be.visible')
      cy.contains('Drag and drop each collateral to its proper place and earn your badge. Remember, attention to detail is key!').should('be.visible')
      cy.contains('START').click()

      cy.contains('COLLATERALS').should('be.visible')

      cy.get('[data-name=poster]').drag('[data-type=refrigerator]', { force: true })
      cy.get('[data-name=refrigerator]').drag('[data-type=poster]', { force: true })
      cy.get('[data-name=refrigerator]').drag('[data-type=refrigerator]', { force: true })
      cy.get('[data-name=tent-poster]').drag('[data-type=tent-poster]', { force: true })
      cy.get('[data-name=tent-poster]').drag('[data-type=refrigerator]', { force: true })
      cy.get('[data-name=tent-poster]').drag('[data-type=poster]', { force: true })

      // Fast forward 30 seconds
      cy.tick(30000)
      cy.clock().invoke('restore')
      // LOSE SFX

      // OUTRO
      cy.contains('Sayang! You missed a few! Still, okay lang yan dahil natulungan mo pa rin si Aling Nena ma-promote ang products natin.').should('be.visible')
      cy.contains('Oops! You miseed a few! Still, you did good helping Aling Nena promote our products.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('DAPATMALAMIG').should('be.visible')
      cy.contains('AVAILABLE ATALAM NA MERON').should('be.visible')
      cy.contains('AYOSANG PRESYO').should('be.visible')

      cy.contains('Ang Triple A+ o AAA+ ay mahalaga dahil ito ay isa sa mga strategies upang palakasin ang kamalayan ng target market.').should('be.visible')
      cy.contains('Triple A+ or AAA+ is important because it is one of the important strategy to strengthen the awareness of the target market.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('sa mga produkto habang pinananatili ang kalidad at abot-kayang presyo nito. Dapat itong palaging available at alam na meron o visible,').should('be.visible')
      cy.contains('to the products while maintaining its quality and affordability. It should be always available and alam na meron or visible,').should('be.visible')
      cy.contains('>>').click()

      cy.contains('ayos ang presyo, at palaging malamig upang mapanatili ang kanyang refreshing quality. Tara sa susunod na channel!').should('be.visible')
      cy.contains("must be price-compliant, and always cold to maintain its refreshing quality. Now, let's move on to the next channel!").should('be.visible')
      cy.contains('>>').click()

      cy.url().should('include', 'game/arrange-the-bottle')
    })

    // POSITIVE TESTING
    it('ELEMENTS ARE IN CORRECT PLACEMENT', () => {
      // INTRO
      cy.contains('Meet Juan! Isang masipag na empleyado at mabuting anak.').should('be.visible')
      cy.contains('Meet Juan! A diligent employee and a good son.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Part na ng bawat lunch breaks and moments of happiness niya ang Coca-Cola.').should('be.visible')
      cy.contains('Coca-Cola is already a part of his every lunch breaks and moments of happiness.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Hinahanap-hanap niya ang refreshing feeling with every sip. Kaya hindi niya maiwasan na mapa-isip...').should('be.visible')
      cy.contains("He's been craving for that refreshing feeling with every sip. That's also why is no surprise he often wonders....").should('be.visible')
      cy.contains('>>').click()

      cy.clock(null, ['setTimeout']) // Rig animation timeouts
      // BEGIN JOURNEY
      cy.contains('Hmm... Paano kaya nakakarating sakin ang bote na to?').should('be.visible')
      cy.contains('Begin Journey').click()

      cy.tick(2000)
      cy.tick(3000)
      cy.tick(2000)
      cy.tick(150)
      cy.tick(3000)
      cy.clock().invoke('restore')

      cy.url().should('include', '/game/tindahan-aling-nena/game')

      // PRE-GAME

      cy.contains('Hi! Ako nga pala si Mark from Commercial. Dito, we sell bottles of happiness and spread joy across the country.', { timeout: 30000 }).should('be.visible')
      cy.contains("Hi! I'm Mark from Commercial. Here we sell bottles of happiness and spread joy across the country.").should('be.visible')
      cy.contains('>>').click()

      cy.contains("Tara at i-explore natin ang iba't ibang channels at partner outlets. Meron tayong General Trade, Modern Trade, at Emerging Channels.").should('be.visible')
      cy.contains("Let's explore the different channels and partner outlets we have. This includes General Trade, Modern Trade, and Emerging Channels.").should('be.visible')
      cy.contains('>>').click()

      cy.contains('General Trade: Sa channel na ito kasama ang mga traditional na tindahan tulad ng sari-sari stores at carinderias.').should('be.visible')
      cy.contains('General Trade: This channel includes traditional retailers like sari-sari stores and carinderias.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Meet Aling Nena, may-ari ng sari-sari store. As one of our partner outlets, may mga collateral materials tayong binibigay sa kanya.').should('be.visible')
      cy.contains('Meet Aling Nena, a Sari-Sari store owner. As one of our concessionaires, we provide her with marketing collaterals to help promote our products.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Ang task mo ay tulungan siya sa paglalagay ng mga marketing collaterals.').should('be.visible')
      cy.contains('Your task is to help her by placing the marketing collaterals in their correct spots.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('I-drag at i-drop ang bawat collateral sa kani-kanilang tamang lugar and get a badge as a reward! Tandaan, attention to detail is key!').should('be.visible')
      cy.contains('Drag and drop each collateral to its proper place and earn your badge. Remember, attention to detail is key!').should('be.visible')
      cy.contains('START').click()

      cy.contains('COLLATERALS').should('be.visible')

      cy.get('[data-name=poster]').drag('[data-type=poster]', { force: true })
      cy.get('[data-name=refrigerator]').drag('[data-type=refrigerator]', { force: true })
      cy.get('[data-name=tent-poster]').drag('[data-type=tent-poster]', { force: true })
      // WIN SFX

      // OUTRO
      cy.contains('Great job, Juan! Thanks to your effort, maayos nang maipopromote ni Aling Nena ang ating mga produkto sa kanyang mga customers.').should('be.visible')
      cy.contains('Great job, Juan! Thanks to your efforts, Aling Nena can now effectively promote our products to her customers.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('DAPATMALAMIG').should('be.visible')
      cy.contains('AVAILABLE ATALAM NA MERON').should('be.visible')
      cy.contains('AYOSANG PRESYO').should('be.visible')

      cy.contains('Ang Triple A+ o AAA+ ay mahalaga dahil ito ay isa sa mga strategies upang palakasin ang kamalayan ng target market.').should('be.visible')
      cy.contains('Triple A+ or AAA+ is important because it is one of the important strategy to strengthen the awareness of the target market.').should('be.visible')
      cy.contains('>>').click()

      cy.contains('sa mga produkto habang pinananatili ang kalidad at abot-kayang presyo nito. Dapat itong palaging available at alam na meron o visible,').should('be.visible')
      cy.contains('to the products while maintaining its quality and affordability. It should be always available and alam na meron or visible,').should('be.visible')
      cy.contains('>>').click()

      cy.contains('ayos ang presyo, at palaging malamig upang mapanatili ang kanyang refreshing quality. Tara sa susunod na channel!').should('be.visible')
      cy.contains("must be price-compliant, and always cold to maintain its refreshing quality. Now, let's move on to the next channel!").should('be.visible')
      cy.contains('>>').click()

      cy.url().should('include', '/game/arrange-the-bottle')
    })
  })
})
