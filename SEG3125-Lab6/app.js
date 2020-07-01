// code inspired by https://www.youtube.com/watch?v=IgAH0NqsJso&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=34

var express = require("express");

//require controllermodule in app.js
var surveyCont = require("./controllers/surveyCont");

var app = express();

//set up template engine
app.set("view engine", "ejs");

//static files
app.use(express.static("./public"));

//fire controllers
surveyCont(app);

//localhost:3000/assets/styles.css

//listen to port
app.listen(3000);
console.log("You are listening to port 3000"); //log message to console