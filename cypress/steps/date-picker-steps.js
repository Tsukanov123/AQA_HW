import { DatePickerPage } from "../pages/Date-Picker-Page";
import { GeneralStep } from "./general-step";
const datePickerPage = new DatePickerPage()

export class DatePickerSteps extends GeneralStep
{
    moveToThatDayNextMonth(today)
    {
        datePickerPage.getDatePicker().click()
        datePickerPage.getElement('div.datepicker-days>table>thead>tr>th.next').click()
        datePickerPage.getDateDay(today.getDate()).click()
        datePickerPage.getDatePicker().click();
    }

    moveToThatDayNextYear(today)
    {
        datePickerPage.getDatePicker().click()
        this.clickOnTopMonthButton()
        datePickerPage.getNextYearButton().click()
        datePickerPage.getDateMonth(today.getMonth(today.getMonth())).click()        
        datePickerPage.getDateDay(today.getDate()).click()
        datePickerPage.getDatePicker().click();
    }

    clickOnTopMonthButton()
    {
        datePickerPage.getElementXpath(`//div[@class='datepicker-days']//th[@class='datepicker-switch']`).click()
    }

    clickOnTopYearButton()
    {
        datePickerPage.getElementXpath(`//div[@class='datepicker-months']//th[@class='datepicker-switch']`).click()
    }

    selectRandomYear()
    {
        let num=this.getRandomInt(1,13)
        //let tYear = datePickerPage.getElement(`span.year:nth-child(${num})`)
        datePickerPage.getElement(`span.year:nth-child(${num})`).click()
        //datePickerPage.getElementXpath(`//div[@class='datepicker-months']//th[@class='datepicker-switch']`).should('eq',datePickerPage.getElement(`span.year:nth-child(${num})`))
    }

    verifyDatePicker()
    {
        //let todayStr = toString(today.getDate())+'-'+toString(today.getMonth())+'-'+toString(today.getFullYear())
        datePickerPage.getDatePicker().should('exist').should('be.visible')//.should('have.text',`${todayStr}`)
        datePickerPage.getDatePickerDropdown().should('not.exist')
        datePickerPage.getDatePicker().click()
        datePickerPage.getDatePickerDropdown().should('exist').should('be.visible')
    }

}