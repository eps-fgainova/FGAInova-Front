import About from '../../src/components/About'

describe("<About />", () => {
  it('Componente deve ter o tópico "Plataforma de inovação para alunos da FGA"', () => {
    cy.mount(<About />);
    cy.get('h2').contains("Plataforma de inovação para alunos da FGA").should('be.visible');
  })

  it('Componente deve ter o tópico "Eficiência e Praticidade"', () => {
    cy.mount(<About />);
    cy.get('p').contains("Eficiência e Praticidade").should('be.visible');

  })

  it('Componente deve ter o tópico "Proximo investimento"', () => {
    cy.mount(<About />);
    cy.get('p').contains("Proximo investimento").should('be.visible');
  })

  it('Componente deve ter o tópico "Público Alvo"', () => {
    cy.mount(<About />);
    cy.get('p').contains("Público Alvo").should('be.visible');
  })
})
