/// <reference types="Cypress" />
import {users} from "../test-data/users-test-data";
import ContactUsPage from "../pages/Contact-Us-Page";
import { ContactUsSteps } from "../steps/contact-us-steps";

const contactUsPage = new ContactUsPage();
const contactUsSteps = new ContactUsSteps();
const userWithValidData=users[0];
const userEmptyEmail=users[1];
const userEmptyFirstName=users[2];

describe('Contact US form', () => {

  it(`Open and fill in the Contact US form - with test case name ${userWithValidData.testName}`, () => {
      contactUsPage.visit();
      contactUsSteps.fillContactUsForm(userWithValidData);
      contactUsPage.getSuccessSubmitMessage().should('exist');
      contactUsPage.getAllFieldsAreRequiredError().should('not.exist');
      contactUsPage.getInvalidEmailError().should('not.exist');
  })

  it(`Open and fill in the Contact US form - with test case name ${userEmptyEmail.testName}`, () => {
    contactUsPage.visit();
    contactUsPage.fillContactUsForm(userEmptyEmail);
    contactUsPage.getInvalidEmailError().should('exist');
    contactUsPage.getAllFieldsAreRequiredError().should('exist');
})

it(`Open and fill in the Contact US form - with test case name ${userEmptyFirstName.testName}`, () => {
  contactUsPage.visit();
  contactUsPage.fillContactUsForm(userEmptyFirstName);
  contactUsPage.getAllFieldsAreRequiredError().should('exist');
  contactUsPage.getInvalidEmailError().should('not.exist');
})

})


