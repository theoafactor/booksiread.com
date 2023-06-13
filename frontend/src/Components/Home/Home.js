import Navbar from "../Sections/Navbar";
import { useAuth } from "../../Auths/Auth/Auth";
import { useNavigate } from "react-router-dom";

function Home(){

    const auth = useAuth();
    // const navigate = useNavigate()

    // console.log("Get auth: ", auth);

    // auth.checkUserAuth().then(( check_user_auth) => {
    //     if(check_user_auth){
    //         //the user is still logged in ...
    //         //get the user data 
    //         console.log("From auth: ", check_user_auth)

    //         navigate("user")

            
    // }


    // })

    


    return <>
                <Navbar></Navbar>
                <div className="jumbotron">
                    <h3>Books I Read &gt; <small>A curated list of books all of us are currently reading ...</small></h3>
                    <hr></hr>
                    <p>
                        <button className="btn btn-lg btn-dark">Add Your Book Listing</button>
                    </p>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            
                        </div>
                    </div>
                </div>
            </>

}


export default Home;