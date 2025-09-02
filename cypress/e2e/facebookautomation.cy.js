describe('Facebook Automation', () => {
  it('Automacao', () => {
    cy.visit('/', { failOnStatusCode: false })
    cy.get('#icon').click()
  })
})