import React, {useEffect, useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import fireDb from '../Project1/firebase';
import Tab from "./Tab";



function EmpProfile(){

    const [search, setSearch] = useState("")
    const [data, setData] = useState({})
    const [sort, setSort] = useState(false)
    const [sortedData, setSortedData] = useState([])


    const navigate = useNavigate()

    useEffect(()=>{
        fireDb.child("contact-manager").on("value", (snapshot)=> {
            if(snapshot.val()!== null){
                setData({...snapshot.val()})
            }else{
                setData({})
            }
        });

        return ()=>{
            setData({})
        }
    },[])


    //sorting by names

    const handleChange = (e)=>{
        setSort(true)
        fireDb.child("contact-manager")
        .orderByChild(`${e.target.value}`)
        .on("value", (snapshot)=>{
            let sortedData = [];
            snapshot.forEach((snap)=>{
                sortedData.push(snap.val())
            });
            setSortedData(sortedData)
        })
    }

    //Reset

    const handleReset =()=>{
        setSort(false)

        fireDb.child("contact-manager").on("value", (snapshot)=> {
            if(snapshot.val()!== null){
                setData({...snapshot.val()})
            }else{
                setData({})
            }
        });
    }




   const filterData = (value)=>{
        fireDb.child("contact-manager").orderByChild("status").equalTo(value).on("value", (snapshot)=>{
            if(snapshot.val()){
                const data = snapshot.val();
                setData(data)
            }
        })
    }

    //search
    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate(`/search?name=${search}`)
        setSearch("")
    }

    //delete
    const onDelete = (id)=>{
        if(window.confirm('Are you sure you want to delete that contact?')){
            fireDb.child(`contact-manager/${id}`).remove((err)=>{
                if(err){
                    toast.error(err)
                
                }else{
                    toast.success("Contact deleted successfully")
                }
            })
        }
    }

    return(
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                    <Tab />
                    <div className="form-group">
                            <label>Sort By:</label>
                            <select className="form-control" onChange={handleChange}>
                                <option>Please Select</option>
                                <option value="fname">First Name</option>
                                <option value="lname">Last Name</option>
                                <option value="email">Email</option>
                                <option value="status">Status</option>
                            </select>
                            <button className="btn btn-dark mt-3 mr-2" onClick={handleReset}>Reset</button>
                            <button className="btn btn-success status mt-3 mr-2" onClick={()=> filterData("Active")}>Active</button>
                            <button className="btn btn-info mt-3" onClick={()=> filterData("Inactive")}>Inactive</button>
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                    <h1 className="text-center mb-5">
                           <strong>Employee Database</strong> 
                        </h1>
                        <form onSubmit={handleSubmit}>
                        <input 
                            className="searchInput"
                            type="text" 
                            name="search" 
                            placeholder="Search.."
                            onChange={(e)=> setSearch(e.target.value)}
                            value={search}
                        />
                        </form>

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
        <th>Status</th>
       {!sort &&(<th>Action</th>)} 
      </tr>
    </thead>

    {!sort && (

   
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
        <td>{data[id].status}</td>

        <td>
            <div className="all_btn">
            <Link to={`update/${id}`}>
            <button className="btn btn-warning">
            <i class="fas fa-edit"></i>
            </button>
            </Link>

            <button className="btn btn-danger" onClick={()=>onDelete(id)}>
            <i class="fas fa-trash"></i>
            </button>

            <Link to={`view/${id}`}>
                <button className="btn btn-primary">View</button>
            </Link>
            </div>
        </td>
        
      </tr>
      ))}
    </tbody>
     )}

     {sort &&(
         <tbody>
             {sortedData.map((item, index)=>(
                 <tr key={index}>
                 <th scope="row">{index + 1}</th>
                 <td>{item.empId}</td>
                 <td>{item.fname}</td>
                 <td>{item.lname}</td>
                 <td>{item.dept}</td>
                 <td>{item.mobile}</td>
                 <td>{item.homePhone}</td>
                 <td>{item.email}</td>
                 <td>{item.address}</td>
                 <td>{item.status}</td>
                 </tr>
             ))}
         </tbody>
     )}
  </table>
  </div>

                    </div>
                </div>
            </div>
            
        </>
    )
}

export default EmpProfile