📜 Description
This project focuses on developing a robust API using Node.js and Express.js to support a web application. 
The platform allows users to register, log in, add, delete, and like photos, as well as edit their profile information and avatar.

The front-end was built using React, with a fully refactored codebase that includes a polished registration and login page with protected routes. 
Additionally, the project integrates a RESTful API to manage data and perform CRUD operations efficiently.

✨ Features
State & Context Management: Efficient handling of states and context for popups, submissions, and card likes.

Navigation: Utilizes React Hooks like Route, Switch, withRouter, and useHistory for seamless page transitions.

Protected Routes: The main page is secured using the ProtectedRoute component, ensuring access is restricted to logged-in users.

User Notifications: Employs the Infotooltip component to provide feedback on registration success or failure.

Authentication: Implements JWT-based authentication with user registration and login via POST requests and session persistence through tokens.

API Development: RESTful API with centralized error handling, designed to manage users and cards with schemas and models.

Routes & Controllers: Comprehensive route structure for GET, POST, PUT, and DELETE operations on cards, as well as GET and PATCH for user profiles.
🚀 Technologies Used
Back-End

Node.js: For building the server-side application.

Express.js: Lightweight framework for handling routes and middleware.

MongoDB: NoSQL database for storing user and card data.

Celebrate: Middleware for request data validation.

JWT (JSON Web Token): For user authentication and session management.

Front-End

HTML
CSS
JavaScript/JSX
React

📋 Requirements

Before starting, make sure you have the following installed:

Node.js: Version 14 or higher.

npm: Version 6 or higher.

MongoDB: Running locally or on a remote server.

This project combines modern web development practices with a focus on user authentication, secure data handling, and intuitive navigation, making it a scalable and user-friendly solution.

🧪 Potential Enhancements

Here are some ideas for future improvements:

Add a GET route to fetch cards by ID.

Implement the ability for users to delete their accounts.


⚙ Local Setup Instructions

Clone the repository to your local machine:
git clone <repository-url>

Ensure you have the latest version of Node.js installed on your system.

Open your terminal, navigate to the project directory, and install all dependencies:

npm install

Once dependencies are installed, start the development server with:

npm run dev

If everything is set up correctly, the server will be ready to use.

Base URL: http://localhost:3000


🚦 API Routes

Make requests by appending the endpoints below to the base URL (http://localhost:3000).

Auth

POST /signup – Register a new user.

POST /signin – Log in an existing user.

Users


GET /users – Fetch all users.

GET /users/{userId} – Fetch a user by ID.

GET /users/me – Fetch the logged-in user’s details.

PATCH /users/me – Update the logged-in user’s profile.

PATCH /users/me/avatar – Update the logged-in user’s avatar.

Cards


GET /cards – Fetch all cards.

POST /cards – Create a new card.

DELETE /cards/{cardId} – Delete a card by ID.

PUT /cards/{cardId}/likes – Like a card.

DELETE /cards/{cardId}/likes – Unlike a card.


This API is live and ready to use. Feel free to explore its capabilities!

