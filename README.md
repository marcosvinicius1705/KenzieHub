⚙️ KenzieHub -
Gerenciador de tecnologias pessoais, com autenticação completa e arquitetura baseada em contextos, desenvolvido em React.js. Este projeto simula uma aplicação de portfólio onde os usuários podem registrar, editar e excluir tecnologias que dominam.

📌 Sobre o Projeto -
Este é um projeto de CRUD (Create, Read, Update, Delete) com autenticação completa, desenvolvido como parte da formação da Kenzie Academy. O KenzieHub permite que os usuários cadastrem-se, façam login e gerenciem suas tecnologias por meio de uma interface intuitiva e interativa.

O foco principal desta versão do projeto é a refatoração da lógica para uma arquitetura baseada em contextos e o aprimoramento da autenticação para garantir segurança, persistência de sessão e boa organização do código.

✨ Funcionalidades
🧑‍💻 Autenticação de Usuário -
Cadastro e login

Logout

Autologin ao atualizar a página

Proteção de rotas com React Router DOM

🔄 Gerenciamento de Tecnologias (CRUD) -
Leitura: Lista dinâmica de tecnologias do usuário (obtida nas rotas de login/autologin)

Criação: Modal com formulário para adicionar novas tecnologias

Edição: Modal com formulário para editar tecnologias existentes

Exclusão: Remoção de tecnologias com clique em botão de delete

🧩 Arquitetura em Contextos -
UserContext: Responsável por autenticação, estado do usuário e gerenciamento de sessão

TechContext: Responsável pelo CRUD de tecnologias

 Estilização -
Estilização com SASS


🧱 Componentes Principais -
TechList e TechCard: Renderização de tecnologias

CreateTechModal: Modal para criação de tecnologias

EditTechModal: Modal para edição de tecnologias

Dashboard, Login, Register: Páginas principais da aplicação

🔒 Rotas Protegidas -
O acesso às rotas é condicionado ao estado de autenticação. Caso o usuário não esteja logado, é redirecionado automaticamente para a página de login.

🔧 Tecnologias Utilizadas -
React.js

React Router DOM

React Hook Form

Yup

Axios

SASS

Context API






# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
