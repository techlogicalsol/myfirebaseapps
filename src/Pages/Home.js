import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home(){

    const navigate = useNavigate()

    const handleEmpProfile = () =>{
        navigate('/emprofile')
    }

    const handleInstashare =()=>{
        navigate('/instashare')
    }


    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 bg-light">
                        <h1 className="text-center p-4">
                            <strong>DASHBOARD</strong>
                        </h1>
                    </div>

                    <div className="col-md-4 bg-info mt-3 p-2">
                        <h3 className="text-center">Employee Profile</h3>
                        <button className="btn btn-dark btn-block" onClick={handleEmpProfile}>
                            Launch Application
                        </button>
                    </div>

                    <div className="col-md-4 bg-primary mt-3 p-2">
                        <h3 className="text-center">Instashare PhotoApp</h3>
                        <button className="btn btn-dark btn-block" onClick={handleInstashare}>
                            Launch Application
                        </button>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Home