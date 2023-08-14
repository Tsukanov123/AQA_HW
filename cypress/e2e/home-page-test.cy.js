/// <reference types="Cypress" />
import HomePage from "../pages/Home-Page";



const homePage = new HomePage();

describe ('Check text on Home Page', () => {
    it('Text check', ()=>
    {
        homePage.visit();
        homePage.getWhoAreWeTitle().should('have.text', 'Who Are We?');
        homePage.getWhoAreWeText().should('have.text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Praesent sed velit odio. Ut massa arcu, suscipit viverra molestie at, aliquet a metus. Nullam sit amet tellus dui, ut tincidunt justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
        homePage.getGreatServiceTitle().should('have.text', 'GREAT SERVICE!');
        homePage.getFooterText().should('contain','Copyright © www.GianniBruno.com')
        homePage.getFindOutMorePopUp().should('have.text', 'Welcome to webdriveruniversity.com')
        homePage.getMainPageButton().should('have.text','WebdriverUniversity.com (Page Object Model)')
        homePage.getOurProductsButton().should('have.text','Our Products')
        homePage.getContactUsButton().should('have.text','Contact Us');
        homePage.getHomeButton().should('have.text','Home');
    })

    it('Find Out More btn check', () => {
        homePage.visit();
        homePage.getWhoAreWe_FindOutMoreButton().click();
        homePage.getFindOutMorePopUp().should('have.text', 'Welcome to webdriveruniversity.com')
        homePage.getWhoAreWe_CloseButton().click();
    })

    it('Carousel image indicators test', ()=>{
        homePage.visit();
        homePage.getImageIndicator0().should('have.class','active')
        homePage.getImageIndicator1().should('not.have.class','active')
        homePage.getImageIndicator2().should('not.have.class','active')

        homePage.getImageIndicator1().click();
        homePage.getImageIndicator0().should('not.have.class','active')
        homePage.getImageIndicator1().should('have.class','active')
        homePage.getImageIndicator2().should('not.have.class','active')

        homePage.getImageIndicator2().click();
        homePage.getImageIndicator0().should('not.have.class','active')
        homePage.getImageIndicator1().should('not.have.class','active')
        homePage.getImageIndicator2().should('have.class','active')

        homePage.getImageIndicator0().click();
        homePage.getImageIndicator0().should('have.class','active')
        homePage.getImageIndicator1().should('not.have.class','active')
        homePage.getImageIndicator2().should('not.have.class','active')

        homePage.getPreviousCarouselImageButton().click();
        homePage.getNextCarouselImageButton().click();
        
    })

    it('Carousel Next image button test', ()=>{
        homePage.visit();

        homePage.getImageIndicator0().should('have.class','active')
        homePage.getImageIndicator1().should('not.have.class','active')
        homePage.getImageIndicator2().should('not.have.class','active')

        homePage.getNextCarouselImageButton().click();
        homePage.getImageIndicator0().should('not.have.class','active')
        homePage.getImageIndicator1().should('have.class','active')
        homePage.getImageIndicator2().should('not.have.class','active')               
    })

    it('Carousel Prev image button test', ()=>{
        homePage.visit();

        homePage.getImageIndicator0().should('have.class','active')
        homePage.getImageIndicator1().should('not.have.class','active')
        homePage.getImageIndicator2().should('not.have.class','active')

        homePage.getPreviousCarouselImageButton().click();
        homePage.getImageIndicator0().should('not.have.class','active')
        homePage.getImageIndicator1().should('not.have.class','active')
        homePage.getImageIndicator2().should('have.class','active')               
    })

    it('Main page button test', ()=> {
        homePage.visit();
        homePage.getMainPageButton().should('have.text','WebdriverUniversity.com (Page Object Model)');
        homePage.getMainPageButton().click();
        cy.url().should('eq','https://www.webdriveruniversity.com/index.html');        
    })

    it('Our Products button test', ()=>{
        homePage.visit();
        homePage.getOurProductsButton().should('have.text','Our Products');
        homePage.getOurProductsButton().click();
        cy.url().should('include','Page-Object-Model/products.html');
    })

    it('Contact Us button test', ()=>{
        homePage.visit();
        homePage.getContactUsButton().should('have.text','Contact Us');
        homePage.getContactUsButton().click();
        cy.url().should('include','Contact-Us');
    })

    it('Home button test', ()=> {
        homePage.visit();
        homePage.getHomeButton().should('have.text','Home')//.and().should('have.class','active');
        //homePage.getHomeButton().should('have.class','active');
        homePage.getHomeButton().click();
        cy.url().should('eq','https://www.webdriveruniversity.com/Page-Object-Model/index.html');
    })


});