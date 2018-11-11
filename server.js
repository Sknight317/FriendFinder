// Requiring express
var express = require("express");

//Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. 
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Points the server to these route files
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Starts listeing to start the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });