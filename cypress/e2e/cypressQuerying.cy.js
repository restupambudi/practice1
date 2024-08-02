describe('template spec', () => {
  it('Visits the kitchen sink', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('get').click()


    // cy.get()
    cy.get('#query-btn').should('contain', 'Button')

    cy.get('[data-test-id="test-example"]').should('have.class', 'example')
    

    // cy.contains()
    cy.get('.query-list').contains('apples').should('have.class', 'first')
    cy.get('.query-button').contains('Save Form').should('have.class', 'btn')


    // .within()
    cy.get('.query-form').within(() => {
      cy.get('input:first').should('have.attr', 'placeholder', 'Email')
      cy.get('input:last').should('have.attr', 'placeholder', 'Password')
    })
  })
})