import { Link } from "react-router-dom"
import Navbar from "../Sections/Navbar"
import { useState } from "react"
import axios from "axios";

function Login(){

    const [currentState, setState] = useState({
        username: "",
        password: "",
        username_form_errors: '',
        password_form_errors: ""
    });

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
                }
                break;

            case "password":
                if(value.length !== 0){
                    setState({
                        ...currentState,
                        password: value
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

        
                
               const login_feedback = await axios.post("/login-user", {
                    username: currentState.username,
                    password: currentState.password
                }, 
                {
                    withCredentials: true
                }
                )



                console.log(login_feedback)

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