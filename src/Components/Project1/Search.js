import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import fireDb from '../Project1/firebase'

function Search(){

    const [data, setData] = useState({})

    const useQuery =()=>{
        return new URLSearchParams(useLocation().search)
    }

    let query = useQuery();
    let search = query.get("name")
    console.log("search", search)

    const searchData = ()=>{
        fireDb
        .child("contact-manager")
        .orderByChild("fname")
        .equalTo(search)
        .on("value", (snapshot)=>{
            if(snapshot.val()){
                const data = snapshot.val()
                setData(data)
            }
        })
    }

    useEffect(()=>{
        searchData()
    },[search])

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 bg-light">

                    <h2 className="text-center mb-3">Search Result</h2>
                    <Link to={"/emprofile"}>
                        <button className="btn btn-success">GO Home</button>
                    </Link>
       
        {Object.keys(data).length === 0 ?(
            <h2>No Search Found {query.get("name")}</h2>
        ) : (


            <div class="table-responsive">   
                    <table class="table table-striped table-condensed">
    <thead>
      <tr>
        <th>No.</th>  
        <th>EmpID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Department</th>
        <th>Mobile</th>
        <th>Home Phone</th>
        <th>Email</th>
        <th>Address</th>
    
      </tr>
    </thead>
    <tbody>
        {Object.keys(data).map((id, index)=>(
      <tr key={id}>
        <th scope="row">{index + 1}</th>
        <td>{data[id].empId}</td>
        <td>{data[id].fname}</td>
        <td>{data[id].lname}</td>
        <td>{data[id].dept}</td>
        <td>{data[id].mobile}</td>
        <td>{data[id].homePhone}</td>
        <td>{data[id].email}</td>
        <td>{data[id].address}</td>
       
        
      </tr>
      ))}
    </tbody>
  </table>
  </div>

        )}
             

  </div>
                </div>
            </div>
        </>
    )
}

export default Search