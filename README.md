# Syntax Wear App

Syntax Wear App e uma aplicacao web de e-commerce para uma loja de calcados. O projeto apresenta uma vitrine de produtos, listagem por categoria, pagina de detalhes do produto, calculo de frete por CEP, carrinho de compras persistido no navegador e telas basicas de login e cadastro.

O app foi construido com React, TypeScript, Vite, Tailwind CSS e TanStack Router. Os produtos e categorias usados na interface estao em arquivos mockados dentro do proprio projeto, entao nao e necessario configurar backend ou banco de dados para rodar localmente.

## Funcionalidades

- Home com banner, categorias e galeria.
- Catalogo de produtos em `/products`.
- Filtro por categoria em `/products/category/$category`.
- Detalhe de produto em `/products/$productId`.
- Carrinho de compras com adicionar, remover, incrementar e decrementar itens.
- Persistencia do carrinho em `localStorage`.
- Calculo de frete por CEP usando a API ViaCEP.
- Paginas institucionais: sobre a marca e nossas lojas.
- Telas de autenticacao: login e cadastro.
- Validacao de formularios com React Hook Form e Zod.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- TanStack Router
- React Hook Form
- Zod
- React Icons
- ESLint

## Estrutura do Projeto

```text
src/
  assets/             Imagens, icones, logo e fontes usadas pela interface
  components/         Componentes reutilizaveis da aplicacao
  contexts/           Contextos globais, como o carrinho de compras
  interfaces/         Tipos TypeScript compartilhados
  mocks/              Dados mockados de produtos e categorias
  pages/              Rotas da aplicacao com TanStack Router
  styles/             Estilos globais e configuracao do tema Tailwind
  utils/              Funcoes auxiliares
  App.tsx             Configura o router e o provider do carrinho
  main.tsx            Ponto de entrada da aplicacao React
  routes-tree-gen.ts  Arquivo gerado pelo TanStack Router
```

Arquivos importantes na raiz:

- `package.json`: scripts, dependencias e metadados do projeto.
- `vite.config.ts`: configuracao do Vite, Tailwind, alias `@` e TanStack Router.
- `index.html`: HTML base usado pelo Vite.
- `eslint.config.js`: configuracao do ESLint.

## Rotas Principais

As rotas ficam em `src/pages` e sao geradas pelo TanStack Router.

- `/`: pagina inicial.
- `/products`: lista de produtos.
- `/products/$productId`: detalhe de um produto.
- `/products/category/$category`: produtos filtrados por categoria.
- `/about`: pagina sobre a Syntax Wear.
- `/our-stores`: pagina de lojas.
- `/sign-in`: tela de login.
- `/sign-up`: tela de cadastro.

## Pre-requisitos

Antes de rodar o projeto, instale:

- Node.js 18 ou superior.
- npm, que normalmente ja vem com o Node.js.

## Como Rodar Localmente

Instale as dependencias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois abra a URL exibida no terminal. Em projetos Vite, normalmente sera:

```text
http://localhost:5173/
```

## Scripts Disponiveis

Rodar em desenvolvimento:

```bash
npm run dev
```

Gerar build de producao:

```bash
npm run build
```

Visualizar localmente o build de producao:

```bash
npm run preview
```

Executar o lint:

```bash
npm run lint
```

## Observacoes de Desenvolvimento

- O carrinho usa o contexto em `src/contexts/CartProvider.tsx`.
- Os dados de produtos ficam em `src/mocks/products.ts`.
- Os dados de categorias ficam em `src/mocks/categories.ts`.
- O calculo de frete consulta `https://viacep.com.br/ws/{cep}/json/`.
- O arquivo `src/routes-tree-gen.ts` e gerado automaticamente pelo TanStack Router a partir de `src/pages`.
- Se criar, remover ou renomear rotas, reinicie o servidor de desenvolvimento caso a arvore de rotas nao atualize.

## Build

Para validar se o projeto compila corretamente:

```bash
npm run build
```

O resultado da build fica na pasta `dist/`.
