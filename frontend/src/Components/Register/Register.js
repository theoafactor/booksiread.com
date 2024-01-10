import { Link } from "react-router-dom";
import Navbar from "../Sections/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

/**
 * - The registration form handles the user's registration
 * @returns 
 */
function Register(){

    const [currentState, setState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        password_confirm: "",
        form_errors: [],
        is_account_created: false,
        show_account_creation_info: <></>
    });




    const handleInputUpdate = (event) => {

        let type = event.target.name;
        let value = event.target.value.trim();

        switch(type){
            case "firstname":
                //this is the firstname field
                if(value.length !== 0){
                    setState({
                        ...currentState,
                        firstname: value
                    })
                }else{

                    setState({
                        ...currentState,
                        firstname: ""
                    })

                }
                
                break;

            case "lastname":
                //this is the lastname field
                if(value.length !== 0){
                    setState({
                        ...currentState,
                        lastname: value
                    })
                }else{

                    setState({
                        ...currentState,
                        lastname: ""
                    })
                }
                
                break;

            case "username":
                //this is the username field
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

            case "email_address":
                //this is the email field
                if(value.length !== 0){
                    setState({
                        ...currentState,
                        email: value
                    })
                }else{

                    setState({
                        ...currentState,
                        email: ""
                    })
                }
                        
                break;

            case "password":
                //this is the password field
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

            case "password_confirm":
                //this is the password confirm field
                if(value.length !== 0){
                    setState({
                        ...currentState,
                        password_confirm: value
                    })
                }else{

                    setState({
                        ...currentState,
                        password_confirm: ""
                    })
                }
                                
                break;

        }

    }



    const registerUser = async (event) => {
        //registers the user
        event.preventDefault();

        //validate the form
        const errors = [];

        if(currentState.firstname.length === 0){
            errors.push("First name is required")
        }

        if(currentState.lastname.length === 0){
            errors.push("Last name is required")
        }

        if(currentState.email.length === 0){
            errors.push("Email is required")
        }

        if(currentState.username.length === 0){
            errors.push("Username is required")
        }

        if(currentState.password.length === 0){
            errors.push("Password is required")
        }

        if(currentState.password_confirm.length === 0){
            errors.push("Password Confirmation is required")
        }

        if(currentState.password !== currentState.password_confirm){
            errors.push("Password do not match!")
        }

        //set the errors
        setState({
            ...currentState,
            form_errors: errors
        })



        
        if(errors.length === 0){
            //there are no errors
            //proceed to registering the user
            //make an API request

            //start the spinner ..
            //show a spinner
            setState({
                ...currentState,
                is_account_created: true,
                show_account_creation_info: 
                                            <div>
                                                <h5>Please wait while we create your account ...</h5>
                                                <div className="spinner-border" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            </div>
            })


            const registration_feedback = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register-account`, {
                firstname: currentState.firstname,
                lastname: currentState.lastname,
                username: currentState.username,
                email: currentState.email,
                password: currentState.password
            })

    

            if(registration_feedback.data.code === "success"){
                //account was created successfully!
                
                //replace the spinner with a nessage
                setState({
                    ...currentState,
                    firstname: "",
                    lastname: "", 
                    username: "",
                    email: "",
                    password: "",
                    password_confirm: "",
                    show_account_creation_info: <>
                                                    <hr/>
                                                    <div className="alert alert-success">
                                                        <h5>Account Created Successfully</h5>
                                                        <p>You may now <Link to="/login">Log in</Link></p>
                                                    </div>
                                                </>
                })
              

            }else{
                setState({
                    ...currentState,
                    password: "",
                    password_confirm: "",
                    is_account_created: false,
                    show_account_creation_info: <>
                                                    <hr />
                                                    <div className="alert alert-danger">
                                                        <h5>Account could not be created</h5>
                                                        <p>{registration_feedback.data.message}</p>
                                                    </div>
                                                 </>
                })

            }
        }
        
        else{
            //there are errors in form
          
        }
    }


    let display_errors;
    display_errors = currentState.form_errors.length > 0 ? currentState.form_errors.map((current_form_error, index) => {

        return <div className="alert alert-danger" key={index}>
                    {current_form_error}
              </div>

    }) : null




    return <>
    <Navbar></Navbar>
    <div className="container">
            
            <div className="row">
                <div className="col-md-8 mt-5 mx-auto">

                            <div className="card">
                                <div className="card-body">
                                    <h5>Create an Account</h5>
                                        {currentState.show_account_creation_info}
                                    <hr />
                                    {display_errors}
                                    <form className="form" method="POST" onSubmit={registerUser}>
                                    <div className="form-group">
                                            <label>First name</label>
                                            <input type="text" name="firstname" value={currentState.firstname} onChange={handleInputUpdate} className="form-control"></input>
                                        </div>
                                    <div className="form-group">
                                            <label>Last name</label>
                                            <input type="text" name="lastname" value={currentState.lastname} onChange={handleInputUpdate} className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                            <label>Email Address: </label>
                                            <input type="email" name="email_address" value={currentState.email} onChange={handleInputUpdate} className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                            <label>Username</label>
                                            <input type="text" name="username" value={currentState.username} onChange={handleInputUpdate} className="form-control"></input>
                                    </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" name="password" value={currentState.password} onChange={handleInputUpdate} className="form-control"></input>
                                        </div>

                                        <div className="form-group">
                                            <label>Confirm Password</label>
                                            <input type="password" name="password_confirm" value={currentState.password_confirm} onChange={handleInputUpdate} className="form-control"></input>
                                        </div>

                                        <div className="form-group">
                                            <button className="btn btn-md btn-primary">Create Account</button>
                                        </div>
                                        <hr />
                                        <h6>Already Created an Account? <Link to="/login">Sign In</Link></h6>
                                    </form>
                                </div>

                            </div>


                </div>
            </div>
        </div>
 </>


}


export default Register