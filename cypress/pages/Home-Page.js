import "cypress-xpath";

class HomePage {
    visit()
    {
        cy.visit("https://www.webdriveruniversity.com/Page-Object-Model/index.html")
    }

    getPageTitle()
    {
        return cy.xpath('//a[@id="nav-title"]')
    }

    getWhoAreWeTitle()
    {
        return cy.xpath(`//*[text()='Who Are We?']`);
    }

    getWhoAreWeText()
    {
        return cy.contains('Praesent sed velit odio.');
    }

    getGreatServiceTitle()
    {
        return cy.xpath(`//*[text()='GREAT SERVICE!']`);
    }

   // getGreatServiceText()
   // {
   //     return cy.contains('GREAT SERVICE!');
   // }

    getWhoAreWe_FindOutMoreButton()
    {
        return cy.get('#button-find-out-more');
    }

    getFindOutMorePopUp()
    {
        return cy.get('.modal-title');
    }

    getWhoAreWe_CloseButton()
    {
        return cy.contains('Close');
    }

    getNextCarouselImageButton()
    {
        return cy.get('a[class="right carousel-control"]');
    }

    getPreviousCarouselImageButton()
    {
        return cy.get('a[data-slide="prev"]');
    }

    getImageIndicator0()
    {
        return cy.get('li[data-slide-to="0"]');
    }

    getImageIndicator1()
    {
        return cy.get('li[data-slide-to="1"]');
    }

    getImageIndicator2()
    {
        return cy.get('li[data-slide-to="2"]');
    }

    getMainPageButton()
    {
        return cy.get('#nav-title');
    }

    getOurProductsButton()
    {
        return cy.contains('Our Products');
    }

    getContactUsButton()
    {
        return cy.contains('Contact Us');
    }

    getFooterText()
    {
        return cy.get('.col-lg-12');
    }

    getHomeButton()
    {
        return cy.contains('Home');
    }

}

export default HomePage