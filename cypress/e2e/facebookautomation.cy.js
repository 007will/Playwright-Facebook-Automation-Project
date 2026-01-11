describe('Facebook Automation', () => {
  it('Automacao', () => {
    cy.visit('/', { failOnStatusCode: false })
    cy.get('#icon').click()
    cy.get('[data-testid="royal-email"]').type('willams@qualquer.com')
    cy.get('[data-testid="royal-pass"]').type('SenhaDemostrativa123')
    cy.wait(3000)
    cy.get('[data-testid="royal-login-button"]').click()



  })
})

