import React from "react";
import { Link } from "react-router-dom";

function Project1About(){
    return(
        <>
                 <div className="container">
                <div className="jumbotron">
                    <h3>Project 1 - About</h3>
                    <Link to={`/emprofile`}>
                    <button className="btn btn-success mt-5">GO BACK TO HOME</button>
                    </Link>
                </div>
            </div>
                           

            
        </>
    )
}

export default Project1About