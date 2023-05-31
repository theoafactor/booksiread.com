const express = require("express");
const cors = require("cors");
require("dotenv").config(); //for reading .env files



//create the application 
const server = express();



//middleware
server.use(cors()); 
server.use(express.json()) //to read json data


//routes

//login
server.post("/login", function(request, response){



});

//register
server.post("/register", (request, response) => {


});



