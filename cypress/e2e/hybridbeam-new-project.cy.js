describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test.pfeifer-suite.info/')
    cy.get('input').first().type('pawel.wojtanowicz@pfeifer.pl')
    cy.get('input').eq(1).type('abcd1234')
    cy.wait(2000)
    cy.contains('Login').click()
    cy.wait(2000)
    cy.contains('Hybridbeam').click()
    cy.get('div[role="button"][title="New project"]').click();
    cy.wait(2000)
    cy.contains('Cancel').click()
  })
})