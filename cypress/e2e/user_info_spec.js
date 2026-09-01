describe('User Information Redux App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('renders the header', () => {
    cy.contains('h1', 'User Information');
  });

  it('renders name and email input fields', () => {
    cy.get('input[type="text"]').should('exist');
    cy.get('input[type="email"]').should('exist');
  });

  it('updates name field', () => {
    const name = 'Thomas Edward Stark';
    cy.get('input[type="text"]').type(name).should('have.value', name);
  });

  it('updates email field', () => {
    const email = 'tonystark@starkindustries.com';
    cy.get('input[type="email"]').type(email).should('have.value', email);
  });

  it('displays updated values in .output', () => {
    const name = 'Thomas Edward Stark';
    const email = 'tonystark@starkindustries.com';

    cy.get('input[type="text"]').type(name);
    cy.get('input[type="email"]').type(email);

    cy.get('.output').should('contain', `Name - ${name}`);
    cy.get('.output').should('contain', `Email - ${email}`);
  });
});
