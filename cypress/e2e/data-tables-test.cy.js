/// <reference types="Cypress" />

import { DataTablesPage } from "../pages/Data-Tables-Page";
import { DataTablesSteps } from "../steps/data-table-steps";
import { GeneralStep } from "../steps/general-step";
import { t01,t02,breadcrump,badges,paginationData,randText } from "../test-data/data-tables-content";
import { t03 } from "../test-data/data-tables-content";
import {firstName_testData, lastName_testData, lorem_ipsum_100} from "../test-data/text-field-test-data";

const dataTablesSteps = new DataTablesSteps
const dataTablesPage = new DataTablesPage
const generalStep = new GeneralStep

describe ('DataTables Page test',()=>{
beforeEach('',()=>{dataTablesPage.visit()})

it('All headers test', ()=>
{
    dataTablesPage.getTitle().should('exist').should('be.visible').should('have.text','Data, Tables & Button States')
    dataTablesSteps.verifyAllHeaders2()
})

it('tables and inputs test',()=>
{    
    dataTablesSteps.verifyTable(1,t01)
    dataTablesSteps.verifyTable(3,t02)    
    dataTablesPage.getThumbnail1Form_TextField().should('contain.text','First name:').should('contain.text','Last name:')
    dataTablesSteps.verifyInputByName('firstname',firstName_testData)
    dataTablesSteps.verifyInputByName('lastname',lastName_testData)
    dataTablesSteps.verifyTextArea(lorem_ipsum_100)
})

it('breadcrump test',()=>
{ 
    breadcrump.forEach(bcrmp=>{
        dataTablesPage.getBreadCrumpElByText(bcrmp).should('be.visible').click()
        cy.url().should('include','#')
        cy.go('back')
    })
})

it('badges test', ()=>
{   let i=1
    badges.forEach(bdg=>{
        
        dataTablesPage.getBadgeByNum(i++).should('contain.text',bdg.name)
        dataTablesPage.getBadgeLightByNum(bdg.number).should('be.visible')
    })    
})

it('pagination test',()=>
{
    dataTablesPage.getPagination().should('exist').should('be.visible')
    paginationData.forEach(pgn=>{
        dataTablesPage.getPaginationItemByName(pgn.name).should('be.visible').click()
        cy.url().should('include',pgn.ref)
        cy.go('back')
    })
    })

    it('Table test',()=>{    
    dataTablesSteps.verifyTableAreaTableTop(2,t03)
    dataTablesSteps.verifyTextOfTableAreaTableCells(2,t03)
})

    it('Random text test',()=>{
        dataTablesPage.getRandomTextAreaText().should('be.visible').should('have.text',randText.p)
        dataTablesPage.getTraversalMarkedText().should('be.visible').should('have.text',randText.marked)
        dataTablesPage.getBlockquote().should('be.visible').should('contain.text',randText.blockquote)
        dataTablesPage.getBlockquote().should('be.visible').should('contain.text',randText.footer)
        dataTablesPage.getBlockquoteFooter().should('be.visible').should('contain.text',randText.footer)
        dataTablesPage.getCiteText().should('be.visible').should('have.text',randText.cite)
    })

    it('Lists test',()=>{
        dataTablesSteps.verifyDrinksList()
        dataTablesSteps.verifyFoodList()
        dataTablesSteps.verifyJobList()       
    })

})
    



