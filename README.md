# Tripleten web_project_around_express

Bootcamp Desenvolvimento Web - TripleTen

<p align="center">
  <img alt="Projeto Around - TripleTen" src=".github/thumbnail.jpg" width="100%">
</p>

## 🚀 Technologies

This project was developed using the following technologies:

- JavaScript
- Node
- Express
- MongoDB e Mongoose
- JWT
- Git e GitHub
- Deploy com VM Google Cloud

## 💻 Project Overview

This project was created during to consolidate learnings about building APIs with Node.js, Express.js, and MongoDB using Mongoose.

## 🧪 Potential Improvements

Some improvements that can be implemented:

- Add a GET route to retrieve cards by ID.
- Add a feature allowing users to delete their accounts.

## ⚙ ⚙ Instructions to Run Locally

First Clone the repository to your local machine:

Ensure Node.js (latest version) is installed. Navigate to the project directory and install all dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

If everything is set up correctly, the server will be ready to use.

URL Base: [http://localhost:3000](http://localhost:3000)

### 🚦 Routes

Faça requisições concatenando a URL base `http://localhost:3000` ou `https://api.around.herisonpereira.com.br`

#### Auth

- `POST /signup`
- `POST /signin`

#### users

- `GET /users`
- `GET /users/{userId}`
- `GET /users/me`
- `PATCH /users/me`
- `PATCH /users/me/avatar`

#### cards

- `GET /cards`
- `POST /cards`
- `DELETE /cards/{cardId}`
- `PUT /cards/{cardId}/likes`
- `DELETE /cards/{cardId}/likes`


