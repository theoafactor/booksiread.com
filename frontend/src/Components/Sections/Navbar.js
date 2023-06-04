import { Link } from "react-router-dom";

function Navbar(){

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
                                        About Us
                                </Link>
                        </li>

                        <li className="nav-item">
                                <Link to="/contact-us" className="nav-link" >
                                        Contact Us
                                </Link>
                        </li>

                        <li className="nav-item">
                                <Link to="/login" className="nav-link" >
                                        Sign in/Register
                                </Link>
                        </li>
                       
                        
                </ul>
                </div>
         </nav>

}

export default Navbar