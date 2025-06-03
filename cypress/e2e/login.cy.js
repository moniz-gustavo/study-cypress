describe('Cadastro', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app');
      cy.get('[data-test="login-button"]').click();
  })

  it('Deve cadastrar um usuario', () => {
    cy.get('[data-test="input-loginEmail"]').type('visualmixgustavo@gmail.com');
    cy.get('[data-test="input-loginPassword"]').type('022000@Cy');
    cy.get('[data-test="submit-button"]').click();
  })

    
})