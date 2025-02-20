describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test.pfeifer-suite.info/')
    cy.get('input').first().type('pawel.wojtanowicz@pfeifer.pl')
    cy.get('input').eq(1).type('abc')
    cy.contains('Login').click()
    cy.wait(10000)
  })
})