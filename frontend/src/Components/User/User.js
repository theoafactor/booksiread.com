import Dashnav from "../Sections/Dashnav/Dashnav"
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../Auths/Auth/Auth"
import Login from "../Login/Login";

function User(){

        const auth = useAuth();
        const navigate = useNavigate();
        const location = useLocation()
   

        console.log("From User: ", auth)



        if(auth.user.is_user_logged_in === false){

        }


        function redirect_to_page(){

            console.log(location)
            location.pathname = "/login";

            Navigate({
                to: "/login",
                replace: true
            })

        

            return <Login><div className="alert alert-warning">You are seeing this page because you are not logged in. Please log in to continue</div></Login>

        }

            
   
    return <>
                {auth.user.is_user_logged_in === false ? redirect_to_page() :   
                
                <>
                    <Dashnav></Dashnav>

                        <>
                            <div className="jumbotron">
                                <h5>Welcome {auth.user.firstname} !</h5>
                                <h3>Books I Read &gt; <small>A curated list of books all of us are currently reading ...</small></h3>
                                <hr></hr>
                                <p>
                                    <button className="btn btn-lg btn-dark">Create Book Profile</button>
                                </p>
                            </div>

                            <div className="row">
                                <div className="col-md-8 m-auto">
                                        <div className="alert alert-warning">No Profile Created Yet</div>
                                        <div className="alert alert-dark"><button className="btn btn-sm btn-dark">Create Book Profile</button></div>
                                </div>

                            </div>
                        </>
                    </>
        }
        </>


}


export default User