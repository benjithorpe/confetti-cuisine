'use strict';

// Import modules
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');

const homeController = require('./controllers/homeController.js');

// Variables
const app = express();

// Middlewares
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/courses.html', homeController.showCourses);
app.get('/contact.html', homeController.showSignup);
app.post('/contact', homeController.showPostedSignUpForm);

app.listen(app.get('port'), () =>
  console.log(`Started on http://localhost:${app.get('port')}`),
);
