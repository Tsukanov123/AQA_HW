/// <reference types="Cypress" />



import { Accordion } from "../pages/accordion";
import { accordion1 } from "../test-data/accordion-texts";
import { GeneralStep } from "../steps/general-step";


const genStep = new GeneralStep()
const accordion=new Accordion()

describe ('Accordion',()=>{

    beforeEach('',()=>{accordion.visit()})

    it('general test', ()=>{
        genStep.testMainPageButton()        
        genStep.testSecondaryPagesFooter()
    })

    it('Buttons are exist', ()=>{
        accordion1.forEach(function(item,accordion1)
        {
            accordion.getButtonById(item.buttonId).should('exist').should('have.text',item.title)            
        })
    })

    it('Buttons are opening and closing description', ()=>{
        accordion1.forEach(function(item,accordion1)
        {
            accordion.getDescryptionById(item.descriprionId).invoke('attr','style').should('eq',undefined);
            accordion.getButtonById(item.buttonId).click();
            accordion.getDescryptionById(item.descriprionId).invoke('attr','style').should('not.eq',undefined);
            accordion.getButtonById(item.buttonId).click();   
            accordion.getDescryptionById(item.descriprionId).invoke('attr','style').should('be.empty');         
        })
    })

    it.only('Text and loading message test', ()=>{
        accordion.getTitle().should('have.text','Click on One of the Accordian Items Below!')
        accordion.getLoadingMessage().should('have.text','LOADING.. PLEASE WAIT..')
        accordion1.forEach(function(item,i,accordion1)
        {
            if (item.descriprionId==='timeout')
            {
                //accordion.delay();
                //setTimeout(()=>{},7000)
                accordion.getTimeOutDescryption.should('contain.text',item.descriptionText)
                accordion.getLoadingMessage().should('have.text','LOADING COMPLETE.')
            }
            else
                accordion.getDescryptionById(item.descriprionId).should('contain.text',item.descriptionText)
        })
    })

    


})