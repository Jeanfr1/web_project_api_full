web_project_api_full

Descrição

Este projeto consiste na criação de uma API utilizando Node.js e Express.js para suportar uma página web onde os usuários podem se registrar, fazer login, adicionar, remover e curtir fotos, além de editar informações e o avatar de seus perfis.

A biblioteca React foi utilizada para o desenvolvimento do front-end do aplicativo. O código do projeto foi refatorado e uma página de registro e login com rotas protegidas foi adicionada. Além disso, foi implementada uma API para gerenciar os dados e realizar as operações CRUD.

Funcionalidades

Estado e Contextos: Gerenciamento de estados e contexto para os botões de abertura e fechamento de popups, submit e like dos cartões.
Navegação: Utilização de Hooks como Route, Switch, withRouter e useHistory para a navegação entre páginas.
Rotas Protegidas: A página principal é protegida pelo componente ProtectedRoute, acessível apenas após o login.
Componentes Informativos: Uso do componente Infotooltip para notificar o usuário sobre sucesso ou falha no registro.
Autenticação: Implementação de autenticação via JWT, com login e registro através de POST, e persistência da sessão do usuário por meio de tokens.
Criação de API: Implementação de uma API RESTful com esquemas e modelos para gerenciamento de cartões e usuários, além de manipulação centralizada de erros.
Rotas e Controladores: Desenvolvimento de rotas para operações GET, POST, PUT, DELETE nos cartões e GET, PATCH para os usuários.
Tecnologias Utilizadas

Back-end
Node.js: Plataforma para o desenvolvimento de aplicações.
Express: Framework web para o Node.js.
MongoDB: Banco de dados NoSQL utilizado para armazenar os dados.
Celebrate: Middleware para validação de dados.
JWT: Para autenticação de usuários.

Front-end
HTML
CSS
JavaScript/JSX
React
Requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

Node.js (versão 14 ou superior)
npm (versão 6 ou superior)
MongoDB rodando localmente ou remotamente

Instalação

Siga os passos abaixo para rodar o projeto em sua máquina local.

1. Clone o repositório para o seu ambiente local:
   git clone https://github.com/seuusuario/sua-api.git

2. Navegue até o diretório do projeto:
   cd sua-api

3. Instale as dependências necessárias:
   npm install

4. Configure o arquivo .env:
   Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente

5. Inicie o MongoDB

6. Execute o servidor da API:
   O servidor será iniciado em http://localhost:3001.

Testando a API:
Você pode testar os endpoints da API utilizando ferramentas como Postman ou Insomnia. Exemplo de uma requisição POST para o endpoint de login:
POST http://localhost:3001/signin
Com o seguinte corpo da requisição:
{
"email": "seuemail@example.com",
"password": "suasenha"
}

Scripts Disponíveis

npm run dev: Inicia o servidor em modo de desenvolvimento com nodemon.
npm run lint: Executa o ESLint para verificar o estilo de código.
npm run lint -- --fix: Corrige automaticamente problemas de formatação com o ESLint.
