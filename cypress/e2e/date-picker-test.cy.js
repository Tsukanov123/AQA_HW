
import { DatePickerPage } from "../pages/Date-Picker-Page";
import { DatePickerSteps } from "../steps/date-picker-steps";

const datePickerPage = new DatePickerPage()
const datePickerSteps = new DatePickerSteps()
const today = new Date()


describe('',()=>{
    beforeEach('',()=>{datePickerPage.visit()})

    it('verify datepicker',()=>
    {
        datePickerSteps.verifyDatePicker()
    })

    it('next day by today',()=>{
        datePickerPage.getDatePicker().click();
        datePickerPage.getElement(`[class='today day']`).should('have.text',`${today.getDate()}`)
        datePickerPage.getElement(`[class='today day']+td`).click()
        datePickerPage.getDatePicker().click();
        datePickerPage.getElement(`[class='today day']+td`).should('have.class','active day')
    })

    it('that day next month',()=>{
        datePickerSteps.moveToThatDayNextMonth(today)
        datePickerPage.getElement(`[class='active day']`).should('have.text',`${today.getDate()}`)
    })


    it('that day next year',()=>{
        datePickerSteps.moveToThatDayNextYear(today)        
        datePickerPage.getDatePicker().click();
        datePickerPage.getElement(`[class='active day']`).should('have.text',`${today.getDate()}`)
    })

    it('rand date by up',()=>{
        datePickerPage.getDatePicker().click()
        datePickerPage.getElement('div.datepicker-months').should('not.be.visible')
        datePickerSteps.clickOnTopMonthButton()
        datePickerPage.getElement('.datepicker-months').should('be.visible')
        datePickerSteps.clickOnTopYearButton()
        datePickerSteps.selectRandomYear()
        datePickerPage.getElement(`span.month:nth-child(${datePickerPage.getRandomInt(1,13)})`).click()
        datePickerPage.getElementXpath(`//tr[position()=${datePickerPage.getRandomInt(1,7)}]/td[position()=${datePickerPage.getRandomInt(1,8)}]`).click()
    })
})