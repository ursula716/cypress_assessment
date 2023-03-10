import basic_information from '../fixtures/basic_information.json';
import custom_information from '../fixtures/custom_information.json';

const cool_website = "https://store.somethingawful.com/products/register.php";

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('Creating a new contact', () => {
  it('passes', () => {
    cy.visit(cool_website);
    cy.get('div[class="product_head"]').should('include.text', 'Register Account');
    cy.get('#username').type('dumb username');
    cy.get('#email_address').type(basic_information.primary_email);
    cy.get('#email_confirm').type(basic_information.primary_email);
    cy.get('#add_arch').click();
  })

  it('passes part deux', () => {
    cy.visit(cool_website);
    cy.get('div[class="product_head"]').should('include.text', 'Register Account');
    cy.get('#username').type('yeahtubamike');
    cy.get('#email_address').type(basic_information.secondary_email);
    cy.get('#email_confirm').type(basic_information.secondary_email);
    cy.get('#add_arch').click();
  })
})
