export class DropdownPage{
    visit(){
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
    }

    getDivByTitle(title){
        return cy.xpath(`//div[@class='thumbnail']/*[contains(text(), '${title}')]`)
    }

    getDropdownById(id)
{
    return cy.xpath(`//div[@class='thumbnail']//*[contains(text(), 'Dropdown Menu(s)')]/..//select[@id='dropdowm-menu-${id}']`)
}

    verifyAllDropdownsOptions(arrayOfValues,dropdownID)
    {
        arrayOfValues.forEach(value=>{
            this.getDropdownById(dropdownID).should('exist').select(value).invoke('val').should('eq',value)
        })
    }

    getCheckboxDiv()
    {
        return cy.xpath(`//div[@id='checkboxes']`)
    }

    getOptionByID(id)
    {
        return cy.xpath(`//input[@value='option-${id}']`)
    }

    VerifyAllCheckBoxOptions()
    {
        
    }
   // getAllCheckboxes(){
   //     return cy.get
   // }

}