# MentoriaQA - Projeto de Automação de Testes com Cypress

Este projeto contém testes automatizados usando Cypress, focando em testes de aplicações web.

## Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── pages/        # Page Objects (Objetos de Página)
│   │   └── loginPage.js
│   └── tests/        # Arquivos de Teste
│       └── login.cy.js
├── fixtures/         # Dados de Teste
├── results/          # Relatórios de Teste
└── support/          # Arquivos de Suporte e Comandos
```

## Pré-requisitos

- Node.js (Recomendada a versão LTS mais recente)
- npm (Gerenciador de Pacotes do Node)

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/AdriellyJuliao/MentoriaQA.git
```

2. Navegue até o diretório do projeto:
```bash
cd MentoriaQA
```

3. Instale as dependências:
```bash
npm install
```

## Executando os Testes

Para executar os testes, você pode usar os seguintes comandos:

- Abrir o Cypress Test Runner:
```bash
npx cypress open
```

- Executar testes em modo headless:
```bash
npx cypress run
```

## Relatórios de Teste

Os relatórios de teste são gerados usando Mochawesome e podem ser encontrados no diretório `cypress/results` após a execução dos testes.

## Detalhes da Estrutura do Projeto

- `cypress/e2e/pages/`: Contém arquivos de Page Objects
- `cypress/e2e/tests/`: Contém arquivos de especificação de testes
- `cypress/fixtures/`: Contém arquivos de dados de teste
- `cypress/support/`: Contém arquivos de suporte e comandos personalizados
- `cypress/results/`: Contém relatórios de execução de testes

## Como Contribuir

1. Faça um fork do repositório
2. Crie sua branch de feature (`git checkout -b feature/NovaFuncionalidade`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## Autora

- AdriellyJuliao

## Licença

Este projeto é privado e mantido por AdriellyJuliao.