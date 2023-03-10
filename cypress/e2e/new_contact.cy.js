import basic_information from '../fixtures/basic_information.json';
import custom_information from '../fixtures/custom_information.json';

const cool_website = "https://cool_website.cool";

describe('Creating a new contact', () => {
    it('contact type verification', () => {
        cy.visit(cool_website);
        cy.get('select').select('contact_type').should('have.text', custom_information.contact_type);
        // Assigned To and Agent Owner dropdowns should be ignored, as per the assessment requirements.
      })

    it('new user', () => {
      cy.visit(cool_website);
      cy.get('#customer_number').type(custom_information.customer_number);
      cy.get('#first_name').type(basic_information.first_name);
      cy.get('#last_name').type(basic_information.last_name);
      cy.get('#office_phone').type(basic_information.office_phone);
      cy.get('#mobile_phone').type(basic_information.mobile_phone);
      cy.get('#home_phone').type(basic_information.home_phone);
      cy.get('#department').type(basic_information.department);
      cy.get('#primary_email').type(basic_information.primary_email);
      cy.get('#secondary_email').type(basic_information.secondary_email);
    })
  })