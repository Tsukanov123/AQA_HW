export class DataTablesPage
{
    visit()
    {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
    }

    getTitle()
    {
        return cy.get('h1')
    }

    getTableById(id)
    {
        return cy.get(`table#${id}`)
    }

    getTextArea()
    {
        return cy.get(`textarea`)
    }

    getTableAreaTableHeadingCell(tableNum,col)
    {
        return cy.get(`table:nth-child(${tableNum})>thead>tr>th:nth-child(${col})`)
    }

    getTableHeadingCell(tableNum,col)
    {
        return cy.get(`table:nth-child(${tableNum})>tbody>tr:nth-child(1)>th:nth-child(${col})`)
    }
  
    getTableCell(tableNum,line,col)
    {
        return cy.get(`table:nth-child(${tableNum})>tbody>tr:nth-child(${line})>td:nth-child(${col})`)
    }
    getTableAreaTableCell(tableNum,line,col)
    {
        return cy.get(`table:nth-child(${tableNum})>tbody>tr:nth-child(${line})>th:nth-child(${col})`)
    }

    getThumbnail1Form_TextField()
    {
        return cy.get('form#form-textfield')
    }

    getThumbnail1Form_TextField_input_by_name(name)
    {
        return cy.get(`form#form-textfield>input[name='${name}']`)
    }
    
    getBreadCrumpElByText(text)
    {
        return cy.xpath(`//nav[@aria-label='breadcrumb']//ol//li/a[contains(text(),'${text}')]`)
    }

    getBadgeByNum(num)
    {
        return cy.xpath(`//ul[@class='list-group']/li[${num}]`)
    }

    getBadgeLightByNum(num)
    {
        return cy.xpath(`//ul[@class='list-group']/li/span[contains(text(),'${num}')]`)
    }

    getPagination()
    {
        return cy.xpath(`//ul[@class='pagination traversal-pagination']`)
    }


    getPaginationItemByName(name)
    {
        return cy.xpath(`//ul[@class='pagination traversal-pagination']/li/a[contains(text(),'${name}')]`)
    }


    getRandomTextAreaText()
    {
        return cy.xpath(`//div[@class='traversal-marked-text']/p`)
    }

    getTraversalMarkedText()
    {
        return cy.xpath(`//div[@class='traversal-marked-text']/p/mark`)
    }

    getBlockquote()
    {
        return cy.xpath(`//blockquote`)
    }

    getBlockquoteFooter()
    {
        return cy.xpath(`//blockquote/footer`)
    }

    getCiteText()
    {
        return cy.xpath(`//blockquote/footer/cite`)
    }

    getListByClassName(className)
    {
        return cy.xpath(`//ul[@class='${className}']`)
    }

    getListItemText(text)
    {
        return cy.xpath(`(//div[@class='thumbnail'])[8]//ul//li[contains(text(), '${text}')]`);
    }
}