# Portfólio Pessoal

Este repositório contém um portfólio pessoal construído com Vite + React. Inclui páginas e componentes para exibir perfil, habilidades, projetos, serviços e contato.

## Tecnologias usadas

- Node.js
- NPM
- Vite
- React (JSX)
- HTML
- CSS
- ESLint
- Git

## Pré-requisitos

- Node.js (recomendado >= 16)
- NPM (ou Yarn)

Verifique se estão instalados com:

```bash
node -v
npm -v
```

## Instalação

1. Clone o repositório:

```bash
git clone <url-do-repo>
cd New-portifolio
```

2. Instale as dependências:

```bash
npm install
```

## Scripts úteis

- `npm run dev` — roda o servidor de desenvolvimento (Vite).
- `npm run build` — gera a versão de produção em `dist/`.
- `npm run preview` — faz preview da build de produção localmente.
- `npm run lint` — (se configurado) roda o ESLint.

Exemplos:

```bash
npm run dev
```

## Uso / Desenvolvimento

- O código-fonte está em `src/`. Os principais arquivos/ componentes:
  - `src/main.jsx` — ponto de entrada.
  - `src/App.jsx` — componente raiz.
  - `src/NavegationBar.jsx`, `src/Profile.jsx`, `src/Projects.jsx`, `src/Services.jsx`, `src/Contato.jsx` — componentes principais.
  - `src/index.css`, `src/App.css` — estilos.
  - `src/Assets/` — imagens e ícones usados.

- Para alterar conteúdo, edite os componentes em `src/` e salve — o Vite recarrega automaticamente.

## Build & Deploy

1. Criar build de produção:

```bash
npm run build
```

2. O conteúdo otimizado ficará em `dist/`. Faça o deploy desse diretório na sua hospedagem (Netlify, Vercel, GitHub Pages, etc.).

## Estrutura do projeto (resumo)

- `index.html` — HTML principal
- `vite.config.js` — configuração do Vite
- `package.json` — scripts e dependências
- `src/` — código React e estilos
- `public/` — arquivos estáticos

## Contribuições

Contribuições são bem-vindas. Abra uma issue ou envie um pull request com alterações claras e pequenas.

## Contato

Se quiser falar sobre o projeto ou solicitar mudanças, deixe uma issue ou me contate pelo repositório.

---

Arquivo gerado automaticamente: README com instruções básicas para instalação, uso e tecnologias.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
