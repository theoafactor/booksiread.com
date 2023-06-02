const mongodb = require("mongodb");
require("dotenv").config(); //for reading .env files
const mongo_client = new mongodb.MongoClient(process.env.DB_URL);

User = (function(){

    /**
     * - Checks if a user exists already...
     * - does the checking by using their username
     * @param {*} username 
     */
    const checkUserExistsByUsername = async (username) => {

        const check_user = await mongo_client.db(process.DB_NAME).collection("users").findOne({"username": username})

        if(check_user){
                //done
                return {
                    message: "user exists already",
                    data: check_user,
                    code: "success"
                }
        }


        return {
            message: "invalid username",
            data: null,
            code: "error"
        }

    }


    /**
     * Creates a new account
     */
    const createNewAccount = (user) => {
        const {firstname, lastname, username, email, password } = user

        const create_account = mongo_client.db(process.DB_NAME).collection("users").insertOne({
            firstname, lastname, email, username, password
        })

        if(create_account){
            return {
                message: "Account created successfully!",
                code: "success",
                data: {
                    firstname,
                    lastname, 
                    email,
                    password
                },
            }
        }


        return {
            message: "Could not create an account",
            code: "error",
            data: null
        }

    }




    return {
        checkUserExistsByUsername: checkUserExistsByUsername,
        createNewAccount: createNewAccount
    }





})()



module.exports = User;