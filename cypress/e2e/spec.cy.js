describe('test suite with web security disabled', () => { 
  before(() => { 
    // disable web security before the test suite Cypress.config(‘chromeWebSecurity’, false) 
    Cypress.config('chromeWebSecurity', false)
  })
})

describe('test suite with CSP enabled', () => { 
  before(() => { 
    // enable CSP before the test suite cy.config(‘modifyObstructiveCode’, false)
    cy.config('modifyObstructiveCode', false) 
  })
})

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://ctas-qa.intranet.pajak.go.id', {failOnStatusCode: false})
    // cy.openWindow('http://ctas-qa.intranet.pajak.go.id')
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get('#username').type('admin')
    cy.get('#password').type('Pajak123')
    cy.get('.btn').click()
  })
})