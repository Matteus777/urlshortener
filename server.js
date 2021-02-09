var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),

Url = require('./api/models/urlShortenerModel'), //created model loading here
bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
try {mongoose.connect("mongodb+srv://urladmin:12369874@cluster0.j2wu7.mongodb.net/urlshortener?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true },
() => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/urlShortenerRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
