class OurProducts
{
    visit()
    {
        cy.visit('https://www.webdriveruniversity.com/Page-Object-Model/products.html')
    }

    getSpecialOffersButton()
    {
        return cy.contains('Special Offers');
    }

    getCamerasButton()
    {
        return cy.contains('Cameras');
    }

    getNewLaptopsButton()
    {
        return cy.contains('New Laptops');
    }

    getPushUpMessage()
    {
        return cy.get('.modal-title');
    }

    getCloseButton()
    {
        return cy.contains('Close');
    }


    getSpecialOffersButton()
    {
        return cy.contains('Special Offers');
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
export default OurProducts