
import { DataTablesPage } from "../pages/Data-Tables-Page";
import { GeneralStep } from "./general-step";
import { headers } from "../test-data/data-tables-content";
import {drinks, fruits, vegetables, typesOfJobs } from "../test-data/data-tables-content";
const dataTablesPage = new DataTablesPage;

export class DataTablesSteps extends GeneralStep
{

    verifyTable(tableNum,table)
    {
        this.verifyTableTop(tableNum,table)
        this.verifyTextOfTableCells(tableNum,table)
    }

    verifyInputByName(name,testText)
    {
        dataTablesPage.getThumbnail1Form_TextField_input_by_name(name).should('exist').should('be.visible').should('be.empty')       
        let text= testText[this.getRandomInt(0,testText.length)]       
        dataTablesPage.getThumbnail1Form_TextField_input_by_name(name).type(text).should('have.value',text)      
    }

    getRandomInt(min, max)
    {
        return super.getRandomInt(min,max)
    }

    verifyTableTop(tableId,table)
    {
        dataTablesPage.getTableHeadingCell(`${tableId}`,1).should('have.text',table[0].c1)
        dataTablesPage.getTableHeadingCell(`${tableId}`,2).should('have.text',table[0].c2)
        dataTablesPage.getTableHeadingCell(`${tableId}`,3).should('have.text',table[0].c3)
    }

    verifyTableAreaTableTop(tableId,table)
    {
        dataTablesPage.getTableAreaTableHeadingCell(`${tableId}`,1).should('have.text',table[0].c1)
        dataTablesPage.getTableAreaTableHeadingCell(`${tableId}`,2).should('have.text',table[0].c2)
        dataTablesPage.getTableAreaTableHeadingCell(`${tableId}`,3).should('have.text',table[0].c3)
    }

    verifyTextOfTableCells(tableId, table)
    {
        for (let row=2; row<=table.length; row++)
            {
                let col=1
                dataTablesPage.getTableCell(`${tableId}`,row,col++).should('have.text',table[row-1].c1)
                dataTablesPage.getTableCell(`${tableId}`,row,col++).should('have.text',table[row-1].c2)
                dataTablesPage.getTableCell(`${tableId}`,row,col).should('have.text',table[row-1].c3)
            }
    }

    verifyTextOfTableAreaTableCells(tableId, table)
    {
        for (let row=1; row<table.length; row++)
            {
                let col=1
                dataTablesPage.getTableAreaTableCell(`${tableId}`,row,col++).should('have.text',table[row].c1)
                dataTablesPage.getTableCell(`${tableId}`,row,col++).should('have.text',table[row].c2)
                dataTablesPage.getTableCell(`${tableId}`,row,col).should('have.text',table[row].c3)
            }
    }

    verifyTextArea(testText)
    {
        dataTablesPage.getTextArea().should('exist').should('be.visible').clear().should('have.value','')
        dataTablesPage.getTextArea().type(testText)
        dataTablesPage.getTextArea().should('have.value',testText)
    }

    h2ExistingCheck(text)
    {
        return cy.xpath(`//div[@class='thumbnail']/h2`).contains(text).should('be.visible')
    }

    verifyAllHeaders2()
    {
     headers.forEach(h=>{
        this.h2ExistingCheck(h);
        })
    }

    verifyJobList()
    {
        dataTablesPage.getListByClassName('traversal-job-list').should('be.visible')
        typesOfJobs.forEach(job=>{
            dataTablesPage.getListItemText(job).should('be.visible')
        })
    }

    verifyFoodList()
    {
        dataTablesPage.getListByClassName('traversal-food-list').should('be.visible')
        fruits.forEach(fruit=>{
            dataTablesPage.getListItemText(fruit).should('be.visible')
        })
        vegetables.forEach(vegetable=>{
            dataTablesPage.getListItemText(vegetable).should('be.visible')
        })
    }

    verifyDrinksList()
    {
        dataTablesPage.getListByClassName('traversal-drinks-list').should('be.visible')               
        drinks.forEach(drink=>{
            dataTablesPage.getListItemText(drink).should('be.visible')
        })
    }
}