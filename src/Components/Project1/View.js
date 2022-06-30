import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import fireDb from "./firebase";

function View(){

    const [user, setUser] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        fireDb.child(`contact-manager/${id}`).get().then((snapshot)=>{
            if(snapshot.exists()){
                setUser({...snapshot.val()})
            
            }else{
                setUser({})
            }
        })
    },[id])

    console.log("user: ", user)

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <h3 className="text-center">Employee Detail</h3>

                        <div className="row">
                            <div className="col-md-8 mx-auto bg-secondary">
                            <div className="info_view">
                                <span>EmpID</span>
                                <span>{user.empId}</span>
                            </div>

                            <div className="info_view">
                                <span>First Name</span>
                                <span>{user.fname}</span>
                            </div>

                            <div className="info_view">
                                <span>Last Name</span>
                                <span>{user.lname}</span>
                            </div>

                            <div className="info_view">
                                <span>Department</span>
                                <span>{user.dept}</span>
                            </div>

                            <div className="info_view">
                                <span>Mobile</span>
                                <span>{user.mobile}</span>
                            </div>

                            <div className="info_view">
                                <span>Home Phone</span>
                                <span>{user.homePhone}</span>
                            </div>

                            <div className="info_view">
                                <span>Email</span>
                                <span>{user.email}</span>
                            </div>

                            <div className="info_view">
                                <span>Address</span>
                                <span>{user.address}</span>
                            </div>

                            <div className="info_view">
                                <span>Status</span>
                                <span>{user.status}</span>
                            </div>
                            <Link className="mylink" to={`/emprofile`}>
                            <button className="btn btn-outline-success btn-block mb-2">GO BACK TO HOME</button> 
                            </Link>
                        </div>
                            
                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default View