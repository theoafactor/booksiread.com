import { createContext, useContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";



// 1. Create a Context for holding data here
export const AuthContext = createContext();

/**
 * The Auth.js contains an Auth provider..
 * This Auth Provider is in itself a Component
 */

// 2. Defines the AuthProvider component
//this AuthProvider will take the children ..
export function AuthProvider({ children }){

    const [ user, setUser ]  = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        is_user_logged_in: false
    })



    //handles checking if the user is still logged in
    const checkUserAuth = () => {
        
        //checks if there is a cookie set for this user at the moment 
        //Use the Cookie third-party library for this ..
        const get_session_id = Cookies.get("connect.sid")

        console.log(get_session_id);


        return get_session_id;


    }

    //handles when the user is logged in 
    const loginUser = async (username, password) => {

        const login_feedback = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login-user`, {

            username: username,
            password: password

        })

        //something here
    

        if(login_feedback.data.code === "success"){
            //this user has been logged in

            //update the state 
            const new_user = {
                ...user,
                firstname: login_feedback.data.data.data.firstname,
                lastname: login_feedback.data.data.data.lastname,
                username: login_feedback.data.data.data.username,
                email: login_feedback.data.data.data.email,
                is_user_logged_in: true
            }

            //set the user
            setUser(new_user);


            //return data to where this function/method was called
            return login_feedback;

        }else{


            //could not log in the user
            return null;
        }


    }




    //handles when the user is logged out
    const logoutUser = async () => {

        //perform some logic here, like unsetting the cookies...
        const session_id = Cookies.get("connect.sid");
        console.log(session_id)
        const logout_feedback = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/logout-user`, { session_id });


        //once successful ...
        //set the user to default
        setUser({
            ...user,
            username: "",
            password: "",
            email: "",
            show_account_login_info: <></>,
            is_user_logged_in: false

        })


        return {
            message: "logout successful",
            code: "logged-out"

        }

    }



    //this Auth
    return <AuthContext.Provider value={{ user, loginUser, logoutUser, checkUserAuth }}>{children}</AuthContext.Provider>

}


//3. expose a useAuth function
export const useAuth = () => {

    return useContext(AuthContext)

}





