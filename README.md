# Tech Blog

This is a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts. It follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. The app is deployed on Heroku.

## Features

- Users can view the homepage with existing blog posts, navigation links for the homepage and the dashboard, and the option to log in.
- Users can sign up for an account by providing a username and password.
- Users can log in with their username and password.
- Users can view existing blog posts on the homepage, including post title and date created.
- Users can click on an existing blog post to view its contents, creator's username, and date created.
- Users can leave a comment on an existing blog post when signed in.
- Users can add a new blog post on the dashboard page, including a title and contents.
- Users can update or delete their existing blog posts on the dashboard page.
- Users can log out of their account.
- Users will be prompted to log in again if they are idle on the site for more than a set time.

## Technologies Used

- Model-View-Controller paradigm
- Handlebars.js
- Sequelize
- express-session npm package for authentication
- dotenv package for environment variables
- bcrypt package for password hashing
- connect-session-sequelize package for session storage
- MySQL2 package to connect to a MySQL database
- Express.js API for controllers

## Installation

1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Create a `.env` file in the root directory of the project and set the following variables:

```
DB_NAME='tech_blog_db'
DB_USER='root'
DB_PW='your_password'
```

4. Create the database using the schema located in the `db` folder.
5. Run `npm start` to start the server.
6. Visit `localhost:3001` in your web browser to view the application.

## Deployed Application

[https://tech-blog14.herokuapp.com/](https://tech-blog14.herokuapp.com/)
