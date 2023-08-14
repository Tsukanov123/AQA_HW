/// <reference types="Cypress" />

import { DropdownPage } from "../pages/Dropdown-Page";
import { dropdown1 } from "../test-data/dropdaown-values";
import { dropdown2 } from "../test-data/dropdaown-values";
import { dropdown3 } from "../test-data/dropdaown-values";
import { GeneralStep } from "../steps/general-step";

const dropdownPage = new DropdownPage()
const genStep = new GeneralStep()

describe ('Dropdown',()=>{
    
    beforeEach(()=>{dropdownPage.visit()})

    it.skip('general test', ()=>{
        genStep.testMainPageButton()
        genStep.testSecondaryPagesFooter()
    })

    it('Text test', ()=>
    {
        dropdownPage.getDivByTitle('Dropdown Menu(s)').should('exist')
        dropdownPage.getDivByTitle('Checkboxe(s)').should('exist')
        dropdownPage.getDivByTitle('Radio Button(s)').should('exist')
        dropdownPage.getDivByTitle('Selected & Disabled').should('exist')
    })

    it('Select dropdown', ()=>{
        dropdown1.forEach(value => {
            dropdownPage.getDropdownById(1).should('exist').select(value).invoke('val').should('eq',value)
        })
        dropdown2.forEach(value => {
            dropdownPage.getDropdownById(2).should('exist').select(value).invoke('val').should('eq',value)
        })
        dropdown3.forEach(value => {
            dropdownPage.getDropdownById(3).should('exist').select(value).invoke('val').should('eq',value)
        })


        
    })

    it('checkboxes are exist',()=>{
        dropdownPage.getOptionByID(1).should('exist')
        dropdownPage.getOptionByID(2).should('exist')
        dropdownPage.getOptionByID(3).should('exist')
        dropdownPage.getOptionByID(4).should('exist')
        
    })

    it('radio buttons')
})