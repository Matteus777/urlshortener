'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/urlShortenerController');

  // Routes
  //Redirects to the url
  app.route('/urls/:id')
    
    ;

  //Inserts a new url in database
  app.route('/users/:userId/urls')
    .post(todoList.read_a_url);

  //Returns global system stats
  app.route('/stats')
  .get(todoList.read_a_url);

  //Returns user's system stats;
  app.route('/users/:userId/stats')
  .get(todoList.read_a_url);

  //Returns URL's stats
  app.route('/stats/:id')
  .get(todoList.read_a_url);

  //Deletes the URL;
  app.route('/urls/:id')
  .delete(todoList.read_a_url);

  //Creates a new user
  app.route('/users')
  .post(todoList.read_a_url); 

  //Deletes the user;
  app.route('/users/:userId')
  .get(todoList.read_a_url);

  
};