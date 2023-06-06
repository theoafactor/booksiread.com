import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Auths/Auth/Auth";



function Dashnav(){

        const auth = useAuth();

        const navigate = useNavigate();


        const logoutUser = async (event) => {
                event.preventDefault();

                const logout_feedback = await auth.logoutUser();

                if(logout_feedback.code === "logged-out"){
                        //user has been logged out 
                        navigate("/login", { replace: true })
                }


        }

        return <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Books I Read!</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                                <Link to="/" className="nav-link" >
                                        Home
                                </Link>
                        </li>

                        <li className="nav-item">
                                <Link to="/about-us" className="nav-link" >
                                        Create Book Profile
                                </Link>
                        </li>

            
                        <li className="nav-item">
                                <Link to="/login" className="nav-link" >
                                        Your Book Profiles
                                </Link>
                        </li>
                    
                </ul>

                <span>Welcome { auth.user.firstname} | <a href="#" onClick={logoutUser}>Log out</a></span>
                </div>
         </nav>

}

export default Dashnav