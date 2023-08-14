import {errors} from "../test-data/errors"

class ContactUsPage {

    visit(){
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    }

    getFirtsName(){
        return cy.get('input[name="first_name"]');
    }

    getLastName(){
        return cy.get('input[name="last_name"]');
    }

    getEmail(){
        return cy.get('input[name="email"]');
    }

    getComment(){
        return cy.get('textarea[name="message"]');
    }

    getSubmitButton(){
        return cy.get('#form_buttons').contains('SUBMIT');
    }

    getResetButton(){
        return cy.get('#form_buttons').contains('RESET');
    }

    getContactUsHeader(){
        return cy.get('name="contactme"');
    }

    

      getSuccessSubmitMessage(){
          return cy.get('div#contact_reply > h1').contains('Thank You for your Message!');
      }

      getInvalidEmailError(){
        return cy.contains(errors.invalidEmail);
      }

      getAllFieldsAreRequiredError(){
        return cy.contains(errors.allFieldsAreRequired);
      }

}



export default ContactUsPage;