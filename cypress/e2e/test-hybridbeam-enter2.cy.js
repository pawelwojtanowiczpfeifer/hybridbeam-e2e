describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test.pfeifer-suite.info/')
    cy.get('input').first().type('pawel.wojtanowicz@pfeifer.pl')
    cy.get('input').eq(1).type('abcd1234')
    cy.contains('Login').click()
    cy.contains('Hybridbeam').click()
    cy.contains('Fill in').click()
    cy.contains('Logout').click()
    //cy.contains('Fill in').click()
  })
})