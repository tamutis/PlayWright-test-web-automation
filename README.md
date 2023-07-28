# Test Automation

Este arquivo README contém um boilerplate para criar um teste automatizado para o site https://todomvc.com/ usando a biblioteca Playwright em TypeScript.

## Pré-requisitos

Antes de executar o teste automatizado, você precisa ter instalado o Node.js e o gerenciador de pacotes npm (Node Package Manager) no seu sistema.

## Stack
- Playwright
- JavaScript

## Estrutura
projeto
├── node_modules
│   ├── (dependências do projeto)
│   └── ...
│
├── playwright-report
│   ├── index.html
│   └── ...
│
├── tests
│   ├── fixture
│   │   ├── task.model.ts
│   │   └── task.json
│   ├── spec
│   │   ├── tasks.spec.ts
│   │   └── ...
│   └── support
│       ├── pages
│       │   ├── tasksPages.ts
│       │   └── ...
│       ├── helpers.ts
│       └── ...
│
├── utils
│   ├── .env
│   └── ...
│
├── package-lock.json
├── package.json
├── README.md
└── playwright.config.ts

## Instalação

1. Clone o repositório ou crie um novo diretório para o projeto:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

```shell script
Install Node:
    npm install
Install PlayWright:
    npm init playwright@latest




