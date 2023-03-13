import basic_information from '../fixtures/basic_information.json';
import custom_information from '../fixtures/custom_information.json';

const cool_website = "https://coolwebsite.cool";

let customer_number = custom_information[custom_information.customer_number];

describe('Creating a new contact', () => {
    it('should have Transferee as the selected contact type', () => {
        cy.visit(cool_website);
        cy.get('select#contact_type option:selected').should('have.text', custom_information.contact_type);
    })

    it('should create a new contact with specific information', () => {
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
      cy.get('button[class="save"]').click();
    })

    it('should have successfully created the new contact', () => {
        cy.request({
         url: cool_website + '/users',
         qs: {
          customer_number: custom_information.customer_number,
         },
        })
        .its('body')
        .should('be.an', 'array')
        .and('have.length', 1)
        .its(0)
        .should('have.property', 'primary_email')                                  // the only other property that I expect to be completely unique
        .and('contain', custom_information[customer_number].primary_email)
  });
});
