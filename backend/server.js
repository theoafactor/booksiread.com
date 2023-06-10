const express = require("express");
const express_session = require("express-session"); //bring in the session
const MongoDBSession = require("connect-mongodb-session")(express_session)
const mongodb = require("mongodb");
const cors = require("cors");
const User = require("./auth/User")
require("dotenv").config(); //for reading .env files



//create the application 
const server = express();

// const mongo_client = new mongodb.MongoClient(process.env.DB_URL);

// //create database
// try{
//     mongo_client.db(process.env.DB_NAME);
// }catch(e){
//     console.log("Could not create the database ...")
// }

//middleware
const mongo_db_session_store = new MongoDBSession({ 
    databaseName: process.env.DB_NAME,
    uri: process.env.DB_URL,
    collection: process.env.SESSION_STORE
})


//add the express session
server.use(express_session({
    resave: false,
    saveUninitialized: false,
    secret: "randomkeytosignsessionkey",
    store: mongo_db_session_store
}))


server.use(cors()); 
server.use(express.json()) //to read json data



//routes
server.get("/", (request, response) => {

    response.send({
        message: "Server works fine"
    })

});


//logout user
server.post("/logout-user", function(request, response){
    //get the session_id 
    const session_id = request.body.session_id;

    //if there is a session id .. 
    console.log("Delete Session ID: ", session_id)



});


//login
server.post("/login-user", async function(request, response){

    let username = request.body.username;
    let password = request.body.password;


    const login_feedback = await User.loginUser(username, password)


    if(login_feedback.code === "success"){
        
        //perform the actual logging in ..
        request.session.user = login_feedback.data;

        if(request.session.user){
            return response.status(200).send({
                message: "User may be logged in",
                code: "success",
                data: login_feedback.data
            })
        }

        //



    }


    return response.send({
        message: `Issues logging this account in. ${login_feedback.message}`,
        code: "error",
        data: null
    })
    



});

//register
server.post("/register-account", async (request, response) => {

    //register the user
    console.log(request.body)


    let firstname = request.body.firstname;
    let lastname = request.body.lastname;
    let username = request.body.username;
    let email = request.body.email;
    let password = request.body.password;



    //check if this user exists already
    const check_feedback = await User.checkUserExistsByUsername(username);
    const check_email_feedback = await User.checkUserExistsByEmail(email);



    if(check_feedback.code === "error" && check_email_feedback.code === "error"){
        //this user does not exist, create the account
        
        //create new Account
        const user = {
            firstname, 
            lastname, 
            username, 
            email, 
            password
        }
        const create_account_feedback = await User.createNewAccount(user)

        if(create_account_feedback.code === "success"){
            return response.status(201).send({
                message: "Account created successfully",
                code: "success",
                data: create_account_feedback.data,
                type: "create-new-account"
            })
        }


        return response.status(403).send({
            message: "We could not create an account",
            code: "error",
            data: null,
            type: "create-new-account"
        })

    }else{

        return response.status(200).send({
            message: "This user exists already",
            code: "user-exists-already",
            data: null,
            type: "check-user-exists-by-username"
        })

    }


});



server.listen(4343, () => console.log(`Server is listening on http://localhost:4343`))



