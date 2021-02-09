'use strict';
module.exports = function(app) {
  var urlController = require('../controllers/urlShortenerController');
  var userController = require('../controllers/userController.js');

  // Routes
  //Redirects to the url
  app.route('/urls/:id')
    
    ;

  //Inserts a new url in database
  app.route('/users/:userId/urls')
    .post(urlController.create_a_url);

  //Returns global system stats
  app.route('/stats')
  .get(urlController.read_a_url);

  //Returns user's system stats;
  app.route('/users/:userId/stats')
  .get(urlController.read_a_url);

  //Returns URL's stats
  app.route('/stats/:id')
  .get(urlController.read_a_url);

  //Deletes the URL;
  app.route('/urls/:id')
  .delete(urlController.read_a_url);

  //Creates a new user
  app.route('/users')
  .post(userController.create_a_user); 

  //Deletes the user;
  app.route('/users/:userId')
  .get(urlController.read_a_url);

  
};