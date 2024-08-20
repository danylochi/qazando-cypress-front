# Qazando Cypress Frontend Automation

![Cypress](https://img.shields.io/badge/Cypress-Frontend%20Testing-brightgreen)

**[PT/BR] Projeto Cypress**  
*Criado por:* @danylochi

## Índice

- [Descrição](#descrição)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Comandos Disponíveis](#comandos-disponíveis)
- [Configuração](#configuração)
- [Estrutura dos Testes](#estrutura-dos-testes)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição

Este projeto contém uma suíte de testes automatizados usando [Cypress](https://www.cypress.io/) para validar funcionalidades de uma aplicação web. O foco é garantir a qualidade e integridade das interações de frontend, verificando desde a navegação básica até a validação de formulários e interações mais complexas.

## Estrutura do Projeto

- **`cypress.config.js`**: Arquivo de configuração do Cypress, que define a URL base da aplicação sob teste.
- **`commands.js`**: Contém comandos customizados do Cypress que podem ser reutilizados em diferentes testes.
- **`e2e.js`**: Arquivo de suporte carregado automaticamente antes dos testes, utilizado para configurações globais.
- **Testes**:
  - **`desafio.cy.js`**: Testes relacionados ao cadastro e validação de campos de login.
  - **`get_text.cy.js`**: Testes de manipulação e obtenção de texto de elementos da página.
  - **`get_elements.cy.js`**: Testes de seleção e manipulação de elementos específicos.
  - **`interacoes.cy.js`**: Testes de interações com cliques, entradas de texto e seleção de opções em formulários.

## Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado em sua máquina:

- Node.js (v14 ou superior)
- npm (v6 ou superior)

## Instalação

Clone o repositório e instale as dependências do projeto:

```bash
git clone https://github.com/danylochi/qazando-cypress-front.git
cd qazando-cypress-front
npm install
```

## Comandos Disponíveis

- **`npm test`**: Exibe uma mensagem padrão (pode ser customizado para rodar os testes diretamente).

## Configuração

A URL base da aplicação que está sendo testada é configurada no arquivo `cypress.config.js`. Certifique-se de que a URL correta esteja configurada:

```javascript
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
  },
});
```

## Estrutura dos Testes

Os testes estão organizados por funcionalidades. Aqui está um resumo dos principais testes:

- **Cadastro de usuário**: Valida campos vazios e credenciais incorretas durante o processo de login, além de simular um cadastro bem-sucedido.
- **Interações básicas**: Inclui testes de cliques, entradas de texto e seleção de opções.
- **Seleção de elementos**: Testa a capacidade de selecionar e manipular elementos na página usando métodos como `contains()`, `find()`, e `as()`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---