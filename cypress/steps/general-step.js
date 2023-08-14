export class GeneralStep
{
        getMainPageButton()
    {
        return cy.get('a#nav-title')
    }

    getFooterCopyrightText()
    {
        return cy.xpath(`//footer/div/div/p`);
    }

    testMainPageButton()
    {
        this.getMainPageButton().should('exist')
        .should('contain.text','WebDriver'/*||'WebdriverUniversity.com'*/)
        //.invoke('attr','href').should('eq','../index.html')
        this.getMainPageButton().click()
        cy.url().should('eq',mainPageURL)
        cy.go('back')
    }

    testSecondaryPagesFooter()
    {
        this.getFooterCopyrightText().should('exist')
        .should('have.text','Copyright © www.GianniBruno.com')
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
      }
}

export const mainPageURL='https://www.webdriveruniversity.com/index.html'
