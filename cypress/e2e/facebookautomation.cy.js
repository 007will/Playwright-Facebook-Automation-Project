describe('Facebook Automation', () => {
  it('Automacao', () => {
    cy.visit('/', { failOnStatusCode: false })
    cy.get('#icon').click()
    cy.get('[data-testid="royal-email"]').type('willams@outlook.com.br')
    cy.get('[data-testid="royal-pass"]').type('t5T^%PL@J@gA*MeQm%5E4G))@F')
    cy.wait(3000)
    cy.get('[data-testid="royal-login-button"]').click()



  })
})

