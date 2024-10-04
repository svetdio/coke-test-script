import { failEarly, iterateScreens } from 'cypress-helper'
failEarly()

iterateScreens(() => {
  beforeEach(() => {
    cy.visit('/login')
  })

  describe('Login Test', () => {
    // NEGATIVE SCENARIO
    // it('INVALID CREDENTIALS W/O MISSING CHECKBOX', () => {
    //   cy.get('[data-cy="email-input"]').type('juan@email.com')
    //   cy.contains('Username').should('be.visible')
    //   cy.get('[data-cy="password-input"]').type('password')
    //   cy.contains('Password').should('be.visible')

    //   cy.get('[data-cy="checkbox-1"]').click()
    //   cy.get('[data-cy="checkbox-2"]').click()

    //   cy.get('[data-cy="login"]').click({ force: true })

    //   // Increase timeout to allow backend to start up
    //   cy.contains("The email address or password you've entered is incorrect.", { timeout: 30_000 }).should('be.visible')
    // })

    // it('INVALID CREDENTIALS W MISSING CHECKBOX', () => {
    //   cy.get('[data-cy="email-input"]').type('juan@email.com')
    //   cy.contains('Username').should('be.visible')
    //   cy.get('[data-cy="password-input"]').type('password')
    //   cy.contains('Password').should('be.visible')

    //   cy.get('[data-cy="login"]').click({ force: true })

    //   cy.contains('Kindly check Data Policy Statement and Confidentiality and Non-disclosure Agreement to proceed.').should('be.visible')

    //   cy.get('[data-cy="checkbox-1"]').click()
    //   cy.get('[data-cy="login"]').click({ force: true })
    //   cy.contains('Kindly check Data Policy Statement and Confidentiality and Non-disclosure Agreement to proceed.').should('be.visible')

    //   cy.get('[data-cy="checkbox-1"]').click()
    //   cy.get('[data-cy="checkbox-2"]').click()
    //   cy.get('[data-cy="login"]').click({ force: true })
    //   cy.contains('Kindly check Data Policy Statement and Confidentiality and Non-disclosure Agreement to proceed.').should('be.visible')

    //   cy.get('[data-cy="checkbox-1"]').click()
    //   cy.get('[data-cy="login"]').click({ force: true })
    //   // Increase timeout to allow backend to start up
    //   cy.contains("The email address or password you've entered is incorrect.", { timeout: 30_000 }).should('be.visible')
    // })

    // it('VALID CREDENTIALS W/ MISSING CHECKBOX', () => {
    //   cy.get('[data-cy="email-input"]').type('test@gmail.com')
    //   cy.contains('Username').should('be.visible')
    //   cy.get('[data-cy="password-input"]').type('password')
    //   cy.contains('Password').should('be.visible')

    //   cy.get('[data-cy="login"]').click({ force: true })

    //   cy.contains('Kindly check Data Policy Statement and Confidentiality and Non-disclosure Agreement to proceed.').should('be.visible')

    //   cy.get('[data-cy="checkbox-1"]').click()
    //   cy.get('[data-cy="login"]').click({ force: true })
    //   cy.contains('Kindly check Data Policy Statement and Confidentiality and Non-disclosure Agreement to proceed.').should('be.visible')

    //   cy.get('[data-cy="checkbox-1"]').click()
    //   cy.get('[data-cy="checkbox-2"]').click()
    //   cy.get('[data-cy="login"]').click({ force: true })
    //   cy.contains('Kindly check Data Policy Statement and Confidentiality and Non-disclosure Agreement to proceed.').should('be.visible')
    // })

    // // FORGOT & CHANGE PASSWORD
    // it('FORGOT PASSWORD', () => {
    //   cy.get('[data-cy="email-input"]').type('test@gmail.com')
    //   cy.contains('Username').should('be.visible')
    //   cy.get('[data-cy="password-input"]').type('word123')
    //   cy.contains('Password').should('be.visible')

    //   cy.get('[data-cy="checkbox-1"]').click()
    //   cy.get('[data-cy="checkbox-2"]').click()

    //   cy.get('[data-cy="login"]').click({ force: true })

    //   cy.contains("The email address or password you've entered is incorrect.").should('be.visible')
    //   cy.get('[data-cy="forgotpass"]').click({ force: true })
    //   cy.contains('FORGOT YOUR PASSWORD').should('be.visible')
    //   cy.contains('X').should('be.visible')
    // })

    // CHECKING CONFIDENTIALITY AND NON-DISCLOSURE AGREEMENT AND DATA POLICY STATEMENT
    it('CHECKING CNDA AND DATA POLICY STATEMENT', () => {
      cy.get('.text-underline:contains("Confidentiality and Non-disclosure Agreement")').click()
      cy.contains('I, of legal age, Filipino, understand and acknowledge that I will receive or have received highly confidential information, which may include legal, commercial, technical, financial customer or Company data or processes, relative to ongoing, closed or potential labor, civil, criminal or administrative cases against or in defense of Coca-Cola Beverages Philippines, Inc. (the “Company”) or its employees and affiliates or any of the Company’s existing or future structures, plans and/or activities, (the “Confidential Information”) for purposes of PURPOSE (the “Purpose”). I receive the Confidential Information as is, without warranties of any kind, and without the Company being liable for any damages arising from the use of the Confidential Information. I further acknowledge that all Confidential Information I may receive or come to know of in the course of preparing for, discussing or doing work in connection with the Project are of an extremely sensitive nature that any unauthorized disclosure, use or disposition of the Confidential Information may cause irreparable damage and significant injury to the Company. Accordingly, I hereby covenant and agree to (1) keep all Confidential Information, whether written or oral, strictly confidential at all times; (2) refrain, under any circumstances, from disclosing or discussing the content or the existence of any such Confidential Information to or with any individual or entity unless specifically authorized by the Company; (3) refrain from making copies of the Confidential Information without prior written authority of the Company; (4) use the Confidential Information only for the Purpose and disclose the same only to my employees, agents and representatives who need to know the same; (5) promptly destroy or return all of the Confidential Information to the Company upon the Company’s written request; (6) undertake all other reasonable measures needed to maintain the confidentiality of the Confidential Information; and (7) cause my employees, agents and representatives to comply with my covenants and obligations in this Undertaking. Further, should I be required under the law to disclose any Confidential Information, I shall provide the Company with prompt written notice of the requirement to make such disclosure to give the Company a reasonable opportunity to obtain a protective order or issue a written waiver of my compliance with this Undertaking. My aforementioned covenants and obligations shall not apply to any Confidential Information which (1) is in the public domain at the time of the disclosure or later becomes part of the public domain without any breach on my part; (2) was in my legitimate possession prior to the disclosure by the Company, which fact can be proven or verified by independent evidence; (3) was lawfully received by me from a third party authorized to disclose the same; (4) is independently developed by me, on my own or through persons who have not have direct or indirect access to or knowledge of such Confidential Information, which fact can be proven or verified by independent evidence; and (5) is permitted to be disclosed by the Company as evidenced by its prior written approval. I agree to fully indemnify the Company for any and all damages caused by my breach of any of my obligations in this Undertaking. I understand and agree that since monetary damages may not be a sufficient remedy for any breach of my covenants and obligations in this Undertaking, the Company shall, in addition to such monetary damages, be entitled to specific performance, injunctive relief and/or other equitable relief as a remedy for any such breach. My covenants and obligations in this Undertaking shall be continuing for five (5) years from the date hereof or until a definitive agreement is entered into regarding the Purpose, whichever is earlier. I make this undertaking with full knowledge and understanding of the contents and implications of this document, including the stringent consequences of a breach of these undertakings.').scrollIntoView()
      cy.contains('Please click “AGREE” if you understand and agree to the Confidentiality and Non-Disclosure Undertaking.').should('be.visible')
      cy.get('[data-cy="agree"]').click({ force: true })
      cy.contains('I have read and accepted the Confidentiality and Non-disclosure Agreement.').should('be.visible')

      // DATA POLICY STATEMENT
      cy.get('.text-underline:contains("Data Policy Statement")').click()
      cy.contains('COCA-COLA BEVERAGES PHILIPPINES, INC. (hereafter the ‘Company’) respects and values your privacy and employs reasonable measures to protect your personal information in accordance with the Data Privacy Act of 2012 (‘DPA’), its Implementing Rules and Regulations, and related issuances from the National Privacy Commission (‘NPC’).').should('be.visible')
      cy.get('div[data-cy="scroll_anchor"]').scrollIntoView({ easing: 'linear', offset: { top: 10000, left: 0 } })
      cy.contains('You hereby hold COCA-COLA BEVERAGES PHILIPPINES, INC., and its officers and directors free and harmless from all claims, suits, charges, damages, or liabilities arising from or connected with the collection, processing, and release or disclosure of your Information, including any claims, suits, charges, damages, or liabilities under the Data Privacy Law of 2012 and its Implementing Rules and Regulations.').should('be.visible')
      cy.contains('Please click “AGREE” if you understand and agree with the Data Policy.').should('be.visible')
      cy.get('[data-cy="agree"]').click({ force: true })
      cy.contains('I have read and understood the Data Policy Statement. I give my consent to CCBPI and CCBPI can collect, use, disclose and/or process my Personal Data related to this campaign.').should('be.visible')
    })

    // POSITIVE SCENARIO
    it('VALID CREDENTIALS W/ CHECKBOX', () => {
      cy.get('[data-cy="email-input"]').type('adamdcruz')
      cy.contains('Username').should('be.visible')

      cy.get('[data-cy="password-input"]').type('password')
      cy.contains('Password').should('be.visible')

      cy.get('[data-cy="checkbox-1"]').click()
      cy.get('[data-cy="checkbox-2"]').click()

      cy.get('[data-cy="login"]').click()

      cy.contains('Login successful').should('be.visible')

      cy.url({ timeout: 30_000 }).should('include', '/')
    })
  })
})
