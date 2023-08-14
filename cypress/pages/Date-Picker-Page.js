export class DatePickerPage
{
    visit()
    {
        cy.visit('https://www.webdriveruniversity.com/Datepicker/index.html')
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
      }

    getHeader()
    {
        return cy.get('h1')
    }

    getDatePicker()
    {
        return cy.get('input')
    }

    getDatePickerDropdown()
    {
        return cy.get(`div[class='datepicker datepicker-dropdown dropdown-menu datepicker-orient-left datepicker-orient-top']`)
    }

    getElement(elClass)
    {
        return cy.get(`${elClass}`)
    }

    getElementXpath(xpath)
    {
        return cy.xpath(`${xpath}`);
    }

    getNextYearButton()
    {
        return cy.xpath(`//div[@class="datepicker-months"]//th[@class="next"]`)
    }

    getDateDay(day)
    {
        return cy.contains(`${day}`)
    }

    getDateYear(year)
    {
        return cy.contains(`${year}`) // zamenit
    }

    getDateMonth(month)
    {
        return cy.xpath(`//span[@class="month"][${month+1}]`) // zamenit
    }
}