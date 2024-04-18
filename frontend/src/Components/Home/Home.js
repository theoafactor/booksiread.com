import Navbar from "../Sections/Navbar";

function Home(){

    return <>
                <Navbar></Navbar>
                <div className="jumbotron">
                    <h3>Books I Love to Read &gt; <small>A curated list of books all of us are currently reading ...</small></h3>
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