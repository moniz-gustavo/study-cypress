describe('Cadastro', () => {
  it('Deve cadastrar um usuario', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click()
    cy.get('[data-test="input-name"]').type('Gustavo Moniz')
    cy.get('[data-test="input-email"]').type('visualmixgustavo@gmail.com')
    cy.get('[data-test="input-password"]').type('022000@Adota')
    cy.get('[data-test="input-confirm-password"]').type('022000@Adota')
    cy.get('[data-test="submit-button"]').click()
  })
})