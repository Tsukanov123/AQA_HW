import ContactUsPage from "../pages/Contact-Us-Page";    

export class ContactUsSteps{

    fillContactUsForm(user){ 
        if(user.first_name)
        {
            ContactUsPage.getFirtsName().type(user.first_name); 
        }
        if(user.last_name)
        {
            ContactUsPage.getLastName().type(user.last_name);
        }
        if(user.email)
        {
            ContactUsPage.getEmail().type(user.email);
        }
        if(user.comment)
        {
            ContactUsPage.getComment().type(user.comment);
        } 
        ContactUsPage.getSubmitButton().click();
      }
}

export default ContectUsSteps;