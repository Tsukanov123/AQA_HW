/// <reference types="Cypress" />
import OurProducts from "../pages/Our-Products-Page";

const ourProducts = new OurProducts;

describe ('Check text on Our Products Page', () => {
    beforeEach(()=>{ourProducts.visit()})

    it('Text check', ()=> {
        ourProducts.getMainPageButton().should('have.text','WebDriver (New Approach To Learning)');
        ourProducts.getOurProductsButton().should('have.text','Our Products')
        ourProducts.getContactUsButton().should('have.text','Contact Us');
        ourProducts.getHomeButton().should('have.text','Home');

    })

    it('Special Offers button test', ()=> {
        ourProducts.getSpecialOffersButton().should('have.text','Special Offers');
        ourProducts.getSpecialOffersButton().click();
        ourProducts.getPushUpMessage().should('include','SPECIAL OFFER!');
        ourProducts.getCloseButton().click();
    })

    it('Main page button test', ()=> {
        ourProducts.getMainPageButton().should('have.text','WebDriver (New Approach To Learning)');
        ourProducts.getMainPageButton().click();
        cy.url().should('eq','https://www.webdriveruniversity.com/index.html');        
    })

    it('Our Products button test', ()=>{
        ourProducts.getOurProductsButton().should('have.text','Our Products');
        ourProducts.getOurProductsButton().click();
        cy.url().should('include','Page-Object-Model/products.html');
    })

    it('Contact Us button test', ()=>{
        ourProducts.getContactUsButton().should('have.text','Contact Us');
        ourProducts.getContactUsButton().click();
        cy.url().should('include','Contact-Us');
    })

    it('Home button test', ()=> {
        ourProducts.getHomeButton().should('have.text','Home')//.and().should('have.class','active');
        //homePage.getHomeButton().should('have.class','active');
        ourProducts.getHomeButton().click();
        cy.url().should('eq','https://www.webdriveruniversity.com/Page-Object-Model/index.html');
    })

    
})