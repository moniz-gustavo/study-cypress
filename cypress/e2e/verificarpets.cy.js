describe('Cadastro', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app');
  })

  it('Deve clicar em ver pets disponiveis', () => {
      cy.contains('a','Ver pets disponíveis para adoção').should('be.visible')
  })

    
})