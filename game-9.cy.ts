import { failEarly, iterateScreens, login, visitGamePage } from 'cypress-helper'

failEarly()

iterateScreens(() => {
  beforeEach(() => {
    login()
    visitGamePage('/game/function-roles?noAnimation=1')
  })

  describe('GAME 9: FUNCTION ROLES', () => {
    // NEGATIVE TESTING
    it('ALL WRONG ANSWERS', () => {
      // PRE GAME INTRO
      cy.contains('Uy! Welcome sa office! I’m Kara. Kamusta ang journey mo so far? Nabalitaan ko na-complete mo na lahat ng games and earned badges! Great job!').should('be.visible')
      cy.contains('Hey! Welcome to the office! I’m Kara. How has your journey been so far? I heard you completed all the games and earned badges! Great job!').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Before we end this journey, gusto ko muna ipakilala sa’yo ang iba pang functions na bumubuo sa CCBPI. But, it’s not fun kapag kinwento ko lang, right?').should('be.visible')
      cy.contains("Before we end this journey, I want to introduce you to the different departments that make up CCBPI. But it won't be fun if I just tell you, right?").should('be.visible')
      cy.contains('>>').click()

      cy.contains('Let’s play! This is a 6 question quiz at ang gagawin mo lang ay piliin kung ano sa tingin mo ang tamang sagot.').should('be.visible')
      cy.contains("Let's play! This is a 6-question quiz, and all you have to do is choose what you think is the correct answer.").should('be.visible')
      cy.contains('>>').click()

      cy.contains('Bawat tamang sagot, you’ll get a piece of the badge. Complete the pieces and earn the badge! Dali lang ‘di ba? Let’s play!').should('be.visible')
      cy.contains("Every correct answer will earn you a piece of the badge. Complete all pieces to get the badge! Easy, right? Let's play!").should('be.visible')
      cy.contains('START').click()

      // CHOOSE THE CORRECT ANSWER

      // q1
      cy.contains('Question 1:').should('be.visible')
      cy.contains('Anong “enabling function” ang may critical role sa pagpapalaganap ng positive culture sa trabaho at pag-assign ng tamang tao ayon sa goal ng organization?').should('be.visible')
      cy.contains('Question 1: What enabling function plays a crucial role in fostering a positive work culture and aligning human resources with organizational goals?').should('be.visible')

      cy.contains('People').should('be.visible')
      cy.contains('Technology').should('be.visible')

      cy.contains('Technology').click()
      cy.contains('Nice try! Mukhang medyo challenging ito. Ang tamang sagot ay People').should('be.visible')
      cy.contains('Tandaan, Ang people function ay nakatuon sa pangangasiwa ng human capital ng kumpanya, sila rin ang nagsasanay sa mga empleyado while building relationship, benefits administration and ensuring labor law compliance. At sila rin ang may critical role sa pagpapalaganap ng positive culture sa trabaho at pag-assign ng tamang tao ayon sa goal ng organization.').should('be.visible')
      cy.contains('Continue lang, you can do it!').should('be.visible')
      cy.contains('Nice try! It seems this one posed a bit of a challenge. The correct answer is People. Remember, The People function oversees human capital, handling recruitment, training, employee relations, benefits administration, and ensuring labor law compliance. HR plays a vital role in shaping work culture and aligning resources with organizational goals. Keep going, you can do it!').should('be.visible')
      cy.contains('>>').click()

      // q2
      cy.contains('Question 2:').should('be.visible')
      cy.contains('Aling enabling function ang nagbibigay ng mga insight sa pinansiyal na epekto ng iba\'t ibang business initiatives?').should('be.visible')
      cy.contains('Question 2: Which enabling function provides insights into the financial implications of various business initiatives?').should('be.visible')

      cy.contains('Finance').should('be.visible')
      cy.contains('Technology').should('be.visible')

      cy.contains('Technology').click()
      cy.contains('Nice try! Mukhang medyo challenging ito. Ang tamang sagot ay Finance').should('be.visible')
      cy.contains('Tandaan, Ang finance function ang namamahala sa financial resources ng kumpanya, kabilang ang budgeting, planning, accounting, at reporting. Mahalaga ang papel nito sa strategic decision-making dahil sila ang nagbibigay ng kaalaman sa financial implications ng iba\'t ibang business initiatives.').should('be.visible')
      cy.contains('Continue lang, you can do it!').should('be.visible')
      cy.contains('Nice try! It seems this one posed a bit of a challenge. The correct answer is Finance. Remember, The finance function oversees financial resources, covering budgeting, planning, accounting, and reporting. It plays a crucial role in strategic decision-making by providing insights into the financial impact of business initiatives. Keep going, you can do it!').should('be.visible')
      cy.contains('>>').click()

      // q3
      cy.contains('Question 3:').should('be.visible')
      cy.contains('Aling enabling function ang mahalaga para matiyak ang mabisang operasyon at pagsuporta sa innovation ng kumpanya?').should('be.visible')
      cy.contains('Question 3: Which enabling function is essential for ensuring efficient business operations and supporting innovation?').should('be.visible')

      cy.contains('Technology').should('be.visible')
      cy.contains('Legal').should('be.visible')

      cy.contains('Legal').click()
      cy.contains('Nice try! Mukhang medyo challenging ito. Ang tamang sagot ay Technology').should('be.visible')
      cy.contains('Tandaan, Ang technology function ang namamahala sa IT infrastructure ng kumpanya, kabilang ang computer systems, networks, software, at cybersecurity. Ito ay mahalaga para sa mabisang operasyon ng negosyo at suporta sa inobasyon.').should('be.visible')
      cy.contains('Continue lang, you can do it!').should('be.visible')
      cy.contains('Nice try! It seems this one posed a bit of a challenge. The correct answer is Technology. Remember, The technology function manages IT infrastructure, including computer systems, networks, software, and cybersecurity. It\'s crucial for efficient business operations and innovation support. Keep going, you can do it!').should('be.visible')
      cy.contains('>>').click()

      // q4
      cy.contains('Question 4:').should('be.visible')
      cy.contains('Anong enabling function ang nasasangkot sa pagsunod sa mga batas at regulasyon, public relations, at pagtataguyod ng advocacy para sa kumpanya?').should('be.visible')
      cy.contains('Question 4: What enabling function involves compliance with laws and regulations, public relations, and advocacy on behalf of the company?').should('be.visible')

      cy.contains('Corporate Regulatory Affairs').should('be.visible')
      cy.contains('Legal').should('be.visible')

      cy.contains('Legal').click()
      cy.contains('Nice try! Mukhang medyo challenging ito. Ang tamang sagot ay Corporate Regulatory Affairs').should('be.visible')
      cy.contains('Tandaan, Ang Corporate and Regulatory Affairs o PACS (Public Affairs and Communications) function ang namamahala sa mga ugnayan ng kumpanya sa mga external stakeholders, kabilang ang mga ahensiyang pampamahalaan at ang publiko. Ito\'y may kinalaman sa pagsunod sa mga batas at regulasyon, public relations, at pagtataguyod ng advocacy para sa kumpanya.').should('be.visible')
      cy.contains('Continue lang, you can do it!').should('be.visible')
      cy.contains('Nice try! It seems this one posed a bit of a challenge. The correct answer is Corporate Regulatory Affairs. Remember, The Corporate and Regulatory Affairs or PACS function manages the company\'s external relationships, including government agencies and the public. It handles compliance, public relations, and company advocacy. Keep going, you can do it!').should('be.visible')
      cy.contains('>>').click()

      // q5
      cy.contains('Question 5:').should('be.visible')
      cy.contains('Anong enabling function ang may responsibilidad sa pagpapamahala ng mga legal na bagay at pagtitiyak na sumusunod ang kumpanya sa mga batas at regulasyon?').should('be.visible')
      cy.contains('Question 5: What enabling function is tasked with managing legal matters and ensuring the company\'s compliance with laws and regulations?').should('be.visible')

      cy.contains('Legal').should('be.visible')
      cy.contains('Corporate Regulatory Affairs').should('be.visible')

      cy.contains('Corporate Regulatory Affairs').click()
      cy.contains('Nice try! Mukhang medyo challenging ito. Ang tamang sagot ay Legal').should('be.visible')
      cy.contains('Tandaan, Ang legal function ang namamahala sa legal matters at nagtataguyod ng pagsunod ng kumpanya sa mga batas. Kasama dito ang contract negotiation, pagprotekta ng intellectual property, pamamahala sa litigation, at pagbibigay ng legal advice.').should('be.visible')
      cy.contains('Continue lang, you can do it!').should('be.visible')
      cy.contains('Nice try! It seems this one posed a bit of a challenge. The correct answer is Legal. Remember, The Legal function manages legal matters, ensuring the company complies with laws. It includes contract negotiation, intellectual property protection, litigation management, and providing legal advice. Keep going, you can do it!').should('be.visible')
      cy.contains('>>').click()

      // q6
      cy.contains('Question 6:').should('be.visible')
      cy.contains('Anong enabling function ang kasangkot sa pagsusuri ng market trends, pagtuklas ng mga oportunidad, at pagbuo ng mga paraan upang maabot ang mga layunin ng negosyo?').should('be.visible')
      cy.contains('Question 6: What enabling function involves analyzing market trends, identifying growth opportunities, and developing strategies to achieve business objectives?').should('be.visible')

      cy.contains('Strategic Planning and Business Transformation').should('be.visible')
      cy.contains('Corporate Regulatory Affairs').should('be.visible')

      cy.contains('Corporate Regulatory Affairs').click()
      cy.contains('Nice try! Mukhang medyo challenging ito. Ang tamang sagot ay Strategic Planning and Business Transformation').should('be.visible')
      cy.contains('Tandaan, Ang strategy function ay naghahanda ng pangmatagalang direksyon ng kumpanya, sumusuri ng trends, naghahanap ng oportunidad sa paglago, at bumubuo ng mga paraan para sa layunin ng negosyo, kabilang ang pag-adapt sa pagbabago ng merkado at pag-adopt ng mga bagong teknolohiya for efficiency.').should('be.visible')
      cy.contains('Continue lang, you can do it!').should('be.visible')
      cy.contains('Nice try! It seems this one posed a bit of a challenge. The correct answer is Strategic Planning and Business Transformation. Remember, The Strategy function plans the company\'s long-term direction, analyzing trends, identifying growth opportunities, and developing strategies for business objectives, including adapting to market changes and adopting new technologies for efficiency. Keep going, you can do it!').should('be.visible')
      cy.contains('>>').click()

      // WIN SFX

      // OUTRO
      cy.contains('Congratulations, Juan! Ngayon alam mo na and iba’t-ibang departments that make up CCBPI. Here’s the last badge!').should('be.visible')
      cy.contains('Congratulations Juan! You just learned about the different departments that make up CCBPI. Here’s the last badge!').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Congratulations for completing the journey!').should('be.visible')
      cy.contains('REDEEM REWARD').click()

      cy.url({ timeout: 30000 }).should('include', '/ending')
    })

    // NEGATIVE TESTING
    it('WITH WRONG ANSWERS', () => {
      // PRE GAME INTRO
      cy.contains('Uy! Welcome sa office! I’m Kara. Kamusta ang journey mo so far? Nabalitaan ko na-complete mo na lahat ng games and earned badges! Great job!').should('be.visible')
      cy.contains('Hey! Welcome to the office! I’m Kara. How has your journey been so far? I heard you completed all the games and earned badges! Great job!').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Before we end this journey, gusto ko muna ipakilala sa’yo ang iba pang functions na bumubuo sa CCBPI. But, it’s not fun kapag kinwento ko lang, right?').should('be.visible')
      cy.contains("Before we end this journey, I want to introduce you to the different departments that make up CCBPI. But it won't be fun if I just tell you, right?").should('be.visible')
      cy.contains('>>').click()

      cy.contains('Let’s play! This is a 6 question quiz at ang gagawin mo lang ay piliin kung ano sa tingin mo ang tamang sagot.').should('be.visible')
      cy.contains("Let's play! This is a 6-question quiz, and all you have to do is choose what you think is the correct answer.").should('be.visible')
      cy.contains('>>').click()

      cy.contains('Bawat tamang sagot, you’ll get a piece of the badge. Complete the pieces and earn the badge! Dali lang ‘di ba? Let’s play!').should('be.visible')
      cy.contains("Every correct answer will earn you a piece of the badge. Complete all pieces to get the badge! Easy, right? Let's play!").should('be.visible')
      cy.contains('START').click()

      // CHOOSE THE CORRECT ANSWER

      // q1
      cy.contains('Question 1:').should('be.visible')
      cy.contains('Anong “enabling function” ang may critical role sa pagpapalaganap ng positive culture sa trabaho at pag-assign ng tamang tao ayon sa goal ng organization?').should('be.visible')
      cy.contains('Question 1: What enabling function plays a crucial role in fostering a positive work culture and aligning human resources with organizational goals?').should('be.visible')

      cy.contains('People').should('be.visible')
      cy.contains('Technology').should('be.visible')

      cy.contains('People').click()
      cy.contains('Correct! You earned a piece of the badge! Ang people function ay nakatuon sa pangangasiwa ng human capital ng kumpanya, sila rin ang nagsasanay sa mga empleyado while building relationship, benefits administration and ensuring labor law compliance. At sila rin ang may critical role sa pagpapalaganap ng positive culture sa trabaho at pag-assign ng tamang tao ayon sa goal ng organization.').should('be.visible')
      cy.contains('The People function oversees human capital, handling recruitment, training, employee relations, benefits administration, and ensuring labor law compliance. HR plays a vital role in shaping work culture and aligning resources with organizational goals.').should('be.visible')
      cy.contains('>>').click()

      // q2
      cy.contains('Question 2:').should('be.visible')
      cy.contains('Aling enabling function ang nagbibigay ng mga insight sa pinansiyal na epekto ng iba\'t ibang business initiatives?').should('be.visible')
      cy.contains('Question 2: Which enabling function provides insights into the financial implications of various business initiatives?').should('be.visible')

      cy.contains('Finance').should('be.visible')
      cy.contains('Technology').should('be.visible')

      cy.contains('Finance').click()
      cy.contains('Correct! You earned a piece of the badge! Ang finance function ang namamahala sa financial resources ng kumpanya, kabilang ang budgeting, planning, accounting, at reporting. Mahalaga ang papel nito sa strategic decision-making dahil sila ang nagbibigay ng kaalaman sa financial implications ng iba\'t ibang business initiatives.').should('be.visible')
      cy.contains('The finance function oversees financial resources, covering budgeting, planning, accounting, and reporting. It plays a crucial role in strategic decision-making by providing insights into the financial impact of business initiatives.').should('be.visible')
      cy.contains('>>').click()

      // q3
      cy.contains('Question 3:').should('be.visible')
      cy.contains('Aling enabling function ang mahalaga para matiyak ang mabisang operasyon at pagsuporta sa innovation ng kumpanya?').should('be.visible')
      cy.contains('Question 3: Which enabling function is essential for ensuring efficient business operations and supporting innovation?').should('be.visible')

      cy.contains('Technology').should('be.visible')
      cy.contains('Legal').should('be.visible')

      cy.contains('Technology').click()
      cy.contains('Correct! You earned a piece of the badge! Ang technology function ang namamahala sa IT infrastructure ng kumpanya, kabilang ang computer systems, networks, software, at cybersecurity. Ito ay mahalaga para sa mabisang operasyon ng negosyo at suporta sa inobasyon.').should('be.visible')
      cy.contains('The technology function manages IT infrastructure, including computer systems, networks, software, and cybersecurity. It\'s crucial for efficient business operations and innovation support.').should('be.visible')
      cy.contains('>>').click()

      // q4
      cy.contains('Question 4:').should('be.visible')
      cy.contains('Anong enabling function ang nasasangkot sa pagsunod sa mga batas at regulasyon, public relations, at pagtataguyod ng advocacy para sa kumpanya?').should('be.visible')
      cy.contains('Question 4: What enabling function involves compliance with laws and regulations, public relations, and advocacy on behalf of the company?').should('be.visible')

      cy.contains('Corporate Regulatory Affairs').should('be.visible')
      cy.contains('Legal').should('be.visible')

      cy.contains('Legal').click()
      cy.contains('Nice try! Mukhang medyo challenging ito. Ang tamang sagot ay Corporate Regulatory Affairs').should('be.visible')
      cy.contains('Tandaan, Ang Corporate and Regulatory Affairs o PACS (Public Affairs and Communications) function ang namamahala sa mga ugnayan ng kumpanya sa mga external stakeholders, kabilang ang mga ahensiyang pampamahalaan at ang publiko. Ito\'y may kinalaman sa pagsunod sa mga batas at regulasyon, public relations, at pagtataguyod ng advocacy para sa kumpanya.').should('be.visible')
      cy.contains('Continue lang, you can do it!').should('be.visible')
      cy.contains('Nice try! It seems this one posed a bit of a challenge. The correct answer is Corporate Regulatory Affairs. Remember, The Corporate and Regulatory Affairs or PACS function manages the company\'s external relationships, including government agencies and the public. It handles compliance, public relations, and company advocacy. Keep going, you can do it!').should('be.visible')
      cy.contains('>>').click()

      // q5
      cy.contains('Question 5:').should('be.visible')
      cy.contains('Anong enabling function ang may responsibilidad sa pagpapamahala ng mga legal na bagay at pagtitiyak na sumusunod ang kumpanya sa mga batas at regulasyon?').should('be.visible')
      cy.contains('Question 5: What enabling function is tasked with managing legal matters and ensuring the company\'s compliance with laws and regulations?').should('be.visible')

      cy.contains('Legal').should('be.visible')
      cy.contains('Corporate Regulatory Affairs').should('be.visible')

      cy.contains('Corporate Regulatory Affairs').click()
      cy.contains('Nice try! Mukhang medyo challenging ito. Ang tamang sagot ay Legal').should('be.visible')
      cy.contains('Tandaan, Ang legal function ang namamahala sa legal matters at nagtataguyod ng pagsunod ng kumpanya sa mga batas. Kasama dito ang contract negotiation, pagprotekta ng intellectual property, pamamahala sa litigation, at pagbibigay ng legal advice.').should('be.visible')
      cy.contains('Continue lang, you can do it!').should('be.visible')
      cy.contains('Nice try! It seems this one posed a bit of a challenge. The correct answer is Legal. Remember, The Legal function manages legal matters, ensuring the company complies with laws. It includes contract negotiation, intellectual property protection, litigation management, and providing legal advice. Keep going, you can do it!').should('be.visible')
      cy.contains('>>').click()

      // q6
      cy.contains('Question 6:').should('be.visible')
      cy.contains('Anong enabling function ang kasangkot sa pagsusuri ng market trends, pagtuklas ng mga oportunidad, at pagbuo ng mga paraan upang maabot ang mga layunin ng negosyo?').should('be.visible')
      cy.contains('Question 6: What enabling function involves analyzing market trends, identifying growth opportunities, and developing strategies to achieve business objectives?').should('be.visible')

      cy.contains('Strategic Planning and Business Transformation').should('be.visible')
      cy.contains('Corporate Regulatory Affairs').should('be.visible')

      cy.contains('Corporate Regulatory Affairs').click()
      cy.contains('Nice try! Mukhang medyo challenging ito. Ang tamang sagot ay Strategic Planning and Business Transformation').should('be.visible')
      cy.contains('Tandaan, Ang strategy function ay naghahanda ng pangmatagalang direksyon ng kumpanya, sumusuri ng trends, naghahanap ng oportunidad sa paglago, at bumubuo ng mga paraan para sa layunin ng negosyo, kabilang ang pag-adapt sa pagbabago ng merkado at pag-adopt ng mga bagong teknolohiya for efficiency.').should('be.visible')
      cy.contains('Continue lang, you can do it!').should('be.visible')
      cy.contains('Nice try! It seems this one posed a bit of a challenge. The correct answer is Strategic Planning and Business Transformation. Remember, The Strategy function plans the company\'s long-term direction, analyzing trends, identifying growth opportunities, and developing strategies for business objectives, including adapting to market changes and adopting new technologies for efficiency. Keep going, you can do it!').should('be.visible')
      cy.contains('>>').click()
      // WIN SFX

      // OUTRO
      cy.contains('Congratulations, Juan! Ngayon alam mo na and iba’t-ibang departments that make up CCBPI. Here’s the last badge!').should('be.visible')
      cy.contains('Congratulations Juan! You just learned about the different departments that make up CCBPI. Here’s the last badge!').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Congratulations for completing the journey!').should('be.visible')
      cy.contains('REDEEM REWARD').click()

      cy.url({ timeout: 30000 }).should('include', '/ending')
    })

    // POSITIVE TESTING
    it('ALL CORRECT ANSWERS', () => {
      // PRE GAME INTRO
      cy.contains('Uy! Welcome sa office! I’m Kara. Kamusta ang journey mo so far? Nabalitaan ko na-complete mo na lahat ng games and earned badges! Great job!').should('be.visible')
      cy.contains('Hey! Welcome to the office! I’m Kara. How has your journey been so far? I heard you completed all the games and earned badges! Great job!').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Before we end this journey, gusto ko muna ipakilala sa’yo ang iba pang functions na bumubuo sa CCBPI. But, it’s not fun kapag kinwento ko lang, right?').should('be.visible')
      cy.contains("Before we end this journey, I want to introduce you to the different departments that make up CCBPI. But it won't be fun if I just tell you, right?").should('be.visible')
      cy.contains('>>').click()

      cy.contains('Let’s play! This is a 6 question quiz at ang gagawin mo lang ay piliin kung ano sa tingin mo ang tamang sagot.').should('be.visible')
      cy.contains("Let's play! This is a 6-question quiz, and all you have to do is choose what you think is the correct answer.").should('be.visible')
      cy.contains('>>').click()

      cy.contains('Bawat tamang sagot, you’ll get a piece of the badge. Complete the pieces and earn the badge! Dali lang ‘di ba? Let’s play!').should('be.visible')
      cy.contains("Every correct answer will earn you a piece of the badge. Complete all pieces to get the badge! Easy, right? Let's play!").should('be.visible')
      cy.contains('START').click()

      // CHOOSE THE CORRECT ANSWER

      // q1
      cy.contains('Question 1:').should('be.visible')
      cy.contains('Anong “enabling function” ang may critical role sa pagpapalaganap ng positive culture sa trabaho at pag-assign ng tamang tao ayon sa goal ng organization?').should('be.visible')
      cy.contains('Question 1: What enabling function plays a crucial role in fostering a positive work culture and aligning human resources with organizational goals?').should('be.visible')

      cy.contains('People').should('be.visible')
      cy.contains('Technology').should('be.visible')

      cy.contains('People').click()
      cy.contains('Correct! You earned a piece of the badge! Ang people function ay nakatuon sa pangangasiwa ng human capital ng kumpanya, sila rin ang nagsasanay sa mga empleyado while building relationship, benefits administration and ensuring labor law compliance. At sila rin ang may critical role sa pagpapalaganap ng positive culture sa trabaho at pag-assign ng tamang tao ayon sa goal ng organization.').should('be.visible')
      cy.contains('The People function oversees human capital, handling recruitment, training, employee relations, benefits administration, and ensuring labor law compliance. HR plays a vital role in shaping work culture and aligning resources with organizational goals.').should('be.visible')
      cy.contains('>>').click()

      // q2
      cy.contains('Question 2:').should('be.visible')
      cy.contains('Aling enabling function ang nagbibigay ng mga insight sa pinansiyal na epekto ng iba\'t ibang business initiatives?').should('be.visible')
      cy.contains('Question 2: Which enabling function provides insights into the financial implications of various business initiatives?').should('be.visible')

      cy.contains('Finance').should('be.visible')
      cy.contains('Technology').should('be.visible')

      cy.contains('Finance').click()
      cy.contains('Correct! You earned a piece of the badge! Ang finance function ang namamahala sa financial resources ng kumpanya, kabilang ang budgeting, planning, accounting, at reporting. Mahalaga ang papel nito sa strategic decision-making dahil sila ang nagbibigay ng kaalaman sa financial implications ng iba\'t ibang business initiatives.').should('be.visible')
      cy.contains('The finance function oversees financial resources, covering budgeting, planning, accounting, and reporting. It plays a crucial role in strategic decision-making by providing insights into the financial impact of business initiatives.').should('be.visible')
      cy.contains('>>').click()

      // q3
      cy.contains('Question 3:').should('be.visible')
      cy.contains('Aling enabling function ang mahalaga para matiyak ang mabisang operasyon at pagsuporta sa innovation ng kumpanya?').should('be.visible')
      cy.contains('Question 3: Which enabling function is essential for ensuring efficient business operations and supporting innovation?').should('be.visible')

      cy.contains('Technology').should('be.visible')
      cy.contains('Legal').should('be.visible')

      cy.contains('Technology').click()
      cy.contains('Correct! You earned a piece of the badge! Ang technology function ang namamahala sa IT infrastructure ng kumpanya, kabilang ang computer systems, networks, software, at cybersecurity. Ito ay mahalaga para sa mabisang operasyon ng negosyo at suporta sa inobasyon.').should('be.visible')
      cy.contains('The technology function manages IT infrastructure, including computer systems, networks, software, and cybersecurity. It\'s crucial for efficient business operations and innovation support.').should('be.visible')
      cy.contains('>>').click()

      // q4
      cy.contains('Question 4:').should('be.visible')
      cy.contains('Anong enabling function ang nasasangkot sa pagsunod sa mga batas at regulasyon, public relations, at pagtataguyod ng advocacy para sa kumpanya?').should('be.visible')
      cy.contains('Question 4: What enabling function involves compliance with laws and regulations, public relations, and advocacy on behalf of the company?').should('be.visible')

      cy.contains('Corporate Regulatory Affairs').should('be.visible')
      cy.contains('Legal').should('be.visible')

      cy.contains('Corporate Regulatory Affairs').click()
      cy.contains('Correct! You earned a piece of the badge! Ang Corporate and Regulatory Affairs o PACS (Public Affairs and Communications) function ang namamahala sa mga ugnayan ng kumpanya sa mga external stakeholders, kabilang ang mga ahensiyang pampamahalaan at ang publiko. Ito\'y may kinalaman sa pagsunod sa mga batas at regulasyon, public relations, at pagtataguyod ng advocacy para sa kumpanya.').should('be.visible')
      cy.contains('The Corporate and Regulatory Affairs or PACS function manages the company\'s external relationships, including government agencies and the public. It handles compliance, public relations, and company advocacy.').should('be.visible')
      cy.contains('>>').click()

      // q5
      cy.contains('Question 5:').should('be.visible')
      cy.contains('Anong enabling function ang may responsibilidad sa pagpapamahala ng mga legal na bagay at pagtitiyak na sumusunod ang kumpanya sa mga batas at regulasyon?').should('be.visible')
      cy.contains('Question 5: What enabling function is tasked with managing legal matters and ensuring the company\'s compliance with laws and regulations?').should('be.visible')

      cy.contains('Legal').should('be.visible')
      cy.contains('Corporate Regulatory Affairs').should('be.visible')

      cy.contains('Legal').click()
      cy.contains('Correct! You earned a piece of the badge! Ang legal function ang namamahala sa legal matters at nagtataguyod ng pagsunod ng kumpanya sa mga batas. Kasama dito ang contract negotiation, pagprotekta ng intellectual property, pamamahala sa litigation, at pagbibigay ng legal advice.').should('be.visible')
      cy.contains('The Legal function manages legal matters, ensuring the company complies with laws. It includes contract negotiation, intellectual property protection, litigation management, and providing legal advice.').should('be.visible')
      cy.contains('>>').click()

      // q6
      cy.contains('Question 6:').should('be.visible')
      cy.contains('Anong enabling function ang kasangkot sa pagsusuri ng market trends, pagtuklas ng mga oportunidad, at pagbuo ng mga paraan upang maabot ang mga layunin ng negosyo?').should('be.visible')
      cy.contains('Question 6: What enabling function involves analyzing market trends, identifying growth opportunities, and developing strategies to achieve business objectives?').should('be.visible')

      cy.contains('Strategic Planning and Business Transformation').should('be.visible')
      cy.contains('Corporate Regulatory Affairs').should('be.visible')

      cy.contains('Strategic Planning and Business Transformation').click()
      cy.contains('Correct! You earned a piece of the badge! Ang strategy function ay naghahanda ng pangmatagalang direksyon ng kumpanya, sumusuri ng trends, naghahanap ng oportunidad sa paglago, at bumubuo ng mga paraan para sa layunin ng negosyo, kabilang ang pag-adapt sa pagbabago ng merkado at pag-adopt ng mga bagong teknolohiya for efficiency.').should('be.visible')
      cy.contains('The Strategy function plans the company\'s long-term direction, analyzing trends, identifying growth opportunities, and developing strategies for business objectives, including adapting to market changes and adopting new technologies for efficiency.').should('be.visible')
      cy.contains('>>').click()

      // WIN SFX

      // OUTRO
      cy.contains('Congratulations, Juan! Ngayon alam mo na and iba’t-ibang departments that make up CCBPI. Here’s the last badge!').should('be.visible')
      cy.contains('Congratulations Juan! You just learned about the different departments that make up CCBPI. Here’s the last badge!').should('be.visible')
      cy.contains('>>').click()

      cy.contains('Congratulations for completing the journey!').should('be.visible')
      cy.contains('REDEEM REWARD').click()

      cy.url({ timeout: 30000 }).should('include', '/ending')
    })
  })
})
