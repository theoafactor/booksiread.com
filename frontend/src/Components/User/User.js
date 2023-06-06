import Dashnav from "../Sections/Dashnav/Dashnav"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Auths/Auth/Auth"

function User(){

    const auth = useAuth();
    const navigate = useNavigate();
   
    return <>
            <Dashnav></Dashnav>
            { auth.checkUserAuth == null ? navigate("/login") : 
                <>
                    <div className="jumbotron">
                        <h5>Welcome {auth.user.firstname}!</h5>
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
}
        </>


}


export default User