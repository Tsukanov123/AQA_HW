import { accordion1 } from "../test-data/accordion-texts";

export class Accordion
{

    visit()
    {
        return cy.visit('https://www.webdriveruniversity.com/Accordion/index.html');
    }

    getButtonById(id)
    {
        return cy.get(`button#${id}`)
    }

    getDescryptionById(id)
    {
        return cy.get(`div#${id}`)
    }

    // delay(callback)
    // {
    //     setTimeout(callback,7000)
    // }

    getTimeOutDescryption()
    {
        return cy.get(`div#timeout`,{timeout:7000})
    }
    getLoadingMessage()
    {
        return cy.get('p#hidden-text')
    }

    getTitle()
    {
        return cy.get('div>h1')
    }

}