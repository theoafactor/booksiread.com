import { Link, useNavigate } from "react-router-dom"
import Navbar from "../Sections/Navbar"
import { useState } from "react"
import axios from "axios";
import { useAuth } from "../../Auths/Auth/Auth";

function Login(){

    const [currentState, setState] = useState({
        username: "",
        password: "",
        username_form_errors: '',
        password_form_errors: "",
        show_account_login_info: <></>
    });

    const use_auth = useAuth()


    const navigate = useNavigate()

    const handleInputUpdate = (event) => {
        let type = event.target.name;
        let value = event.target.value.trim();
        console.log(value);
        switch(type){
            case "username":
                if(value.length !== 0){
                    setState({
                        ...currentState,
                        username: value
                    })
                }else{
                    setState({
                        ...currentState,
                        username: ""
                    })

                }
                break;

            case "password":
                if(value.length !== 0){
                    setState({
                        ...currentState,
                        password: value
                    })
                }else{
                    setState({
                        ...currentState,
                        password: ""
                    })

                }

                break;

        }


    }

   

    const loginUser = async (event) => {
        event.preventDefault();
        

        let username_form_errors;
        let password_form_errors;

        if(currentState.username.length == 0){
            username_form_errors = "Username is required"
        }

        if(currentState.password.length == 0){
            password_form_errors = "Password is required"
        }


        if(currentState.username.length !== 0 && currentState.password.length !== 0){

                //start the spinner
                setState({
                    ...currentState,
                    show_account_login_info:  <div>
                                                <h5>Please wait while we sign you into your account ...</h5>
                                                <div className="spinner-border" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            </div>
                })
                

               //log in the user 
               let login_result = await use_auth.loginUser(currentState.username, currentState.password)


               if(login_result.data.code === "success"){
                    
                    setState({

                        ...currentState,
                        show_account_login_info: <div className="alert alert-success">You are logged in! Redirecting you to your dashboard ...</div>

                    })


                    setTimeout(function(){
                        //navigate or redirect the user after 3 seconds to their dashboard
                        
                        //navigate to the home page
                        //set the replace to be true
                        //this will prevent the user from being able to go back to home
                        navigate("/user", { replace: true });

                    }, 3000)


               }

                
        
               

        }else{

            setState({
                ...currentState,
                username_form_errors: username_form_errors,
                password_form_errors: password_form_errors
            })


        }


       


    }

    return <>
        <Navbar></Navbar>
        <div className="container">
                <div className="row">
                    <div className="col-md-8 mt-5 mx-auto">

                                <div className="card">
                                    <div className="card-body">
                                        <h5>Sign in</h5>
                                        <hr />
                                        {currentState.show_account_login_info}

                                        <form className="form" method="POST" onSubmit={loginUser}>
                                            <div className="form-group">
                                                <label>Username</label>
                                                <input type="text" name="username" value={currentState.username} onChange={handleInputUpdate} className="form-control" />
                                                <div><span class='text-danger'>{currentState.username_form_errors}</span></div>
                                            </div>
                                            

                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" name="password" value={currentState.password} onChange={handleInputUpdate} className="form-control" />
                                                <div>
                                                    <span class='text-danger'>{currentState.password_form_errors}</span>
                                                </div>
                                            </div>
                                            

                                            <div className="form-group">
                                                <button className="btn btn-md btn-primary">Sign in</button>
                                            </div>
                                            <hr />
                                            <h6>Not Created an Account? <Link to="/register">Register Now</Link></h6>
                                        </form>
                                    </div>

                                </div>


                    </div>
                </div>
            </div>
     </>
}

export default Login