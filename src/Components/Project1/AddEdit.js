import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import fireDb from '../Project1/firebase';

const initialState = {
    empId: "",
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    homePhone: "",
    address: "",
    dept: "",
    status: "",
}


function AddEdit(){



    const [state, setState] = useState(initialState)
    const [data, setData] = useState({})
    const navigate = useNavigate()

    const {id} = useParams()

    const {status, empId, fname, lname, email, mobile, homePhone, address, dept} = state;

    const handleInputChange = (e)=>{
        const {name, value} = e.target
        setState({...state, [name]: value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (!empId || !fname || !lname || !email || !mobile || !homePhone || !address || !dept || !status){
            toast.error("Please provide value to each input field")
        
        }else{
            if(!id){
                fireDb.child("contact-manager").push(state, (err)=> {
                    if(err){
                        toast.error(err)    
                    
                    }else{
                        toast.success("Contact added successfully....")
                    }
                });
            }else{
                fireDb.child(`contact-manager/${id}`).set(state, (err)=> {
                    if(err){
                        toast.error(err)
                    
                    }else{
                        toast.success("Contact updated successfully....")
                    }
                });
            }
            
            setTimeout(()=> navigate("/emprofile"), 500)
        }
    }

    useEffect(()=>{
        fireDb.child("contact-manager").on("value",(snapshot)=>{
            if(snapshot.val() !== null){
                setData({...snapshot.val()})
            
            }else{
                setData({})
            }
        });

        return ()=>{
            setData({})
        }
    },[id])

        //if we have an id that means user is performing edit operation

        useEffect(()=>{
            if(id){
                setState({...data[id]})
            
            }else{
                setState({...initialState})
            }
    
            //clean up function
            return ()=>{
                setState({...initialState})
            }
    
        },[id, data])

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-10 p-5 mx-auto">
                        <h3 className="text-center" style={{color: "#ddd"}}>
                        <strong>Add Employee Contact Info</strong>
                        </h3>
                        <form onSubmit={handleSubmit}>
                        <div className="row">
                           
                            <div className="col-md-6 bg-light p-3 mt-3">
                                <div className="form-group">
                                <label>EmpID</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="empId"
                                    value={empId || ""}
                                    onChange={handleInputChange}
                                />
                                </div>

                                <div className="form-group">
                                <label>First Name</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="fname"
                                    value={fname || ""}
                                    onChange={handleInputChange}
                                />
                                </div>

                                <div className="form-group">
                                <label>Last Name</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="lname"
                                    value={lname || ""}
                                    onChange={handleInputChange}
                                />
                                </div>

                                <div className="form-group">
                                <label>Department</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="dept"
                                    value={dept || ""}
                                    onChange={handleInputChange}
                                />
                                </div>
                                
                                <div className="form-group">
                                <label>Status</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="status"
                                    name="status"
                                    value={status || ""}
                                    onChange={handleInputChange}
                                />
                                </div>
                            </div>

                            <div className="col-md-6 bg-light p-3 mt-3">
                            <div className="form-group">
                                <label>Mobile</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="mobile"
                                    value={mobile || ""}
                                    onChange={handleInputChange}
                                />
                                </div>

                                <div className="form-group">
                                <label>Home Phone</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="homePhone"
                                    value={homePhone || ""}
                                    onChange={handleInputChange}
                                />
                                </div>

                                <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={email || ""}
                                    onChange={handleInputChange}
                                />
                                </div>

                                <div className="form-group">
                                <label>Address</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={address || ""}
                                    onChange={handleInputChange}
                                />
                                </div>

                             
                        <input type="submit" value={id ? "Update" : "Save"} className="btn btn-success btn-block btn-save" />
                            <Link className="mylink" to={`/emprofile`}>
                                <button className="btn btn-outline-success btn-block mt-2">GO BACK TO HOME</button> 
                            </Link>  
                         
                        </div>
                            
                        </div>
                        </form>
                        
                      
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEdit

// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import fireDb from '../Project1/firebase';


// const initialState = {
//     empId: "",
//     fname: "",
//     lname: "",
//     email: "",
//     mobile: "",
//     homePhone: "",
//     address: "",
//     dept: "",
//     status: "",
// }

// function AddEdit(){

//     const [state, setState] = useState(initialState);
//     const [data, setData] = useState({});
//     const navigate = useNavigate()

//     //De-structure:

//      const {status, empId, fname, lname, email, mobile, homePhone, address, dept} = state;

    
//      const handleInputChange = (e)=>{
//         const {name, value} = e.target
//         setState({...state, [name]: value})
//     }

//     //Before Update Function
//     // const handleSubmit = (e)=>{
//     //     e.preventDefault()
//     //     if (!empId || !fname || !lname || !email || !mobile || !homePhone || !address || !dept){
//     //         toast.error("Please provide value to each input field")
        
//     //     }else{
//     //         fireDb.child("contact-manager").push(state, (err)=> {
//     //             if(err){
//     //                 toast.error(err)
                
//     //             }else{
//     //                 toast.success("Contact added successfully....")
//     //             }
//     //         });
//     //         setTimeout(()=> navigate("/"), 500)
//     //     }
//     // }






//     //for capturing same value when click on edit, it shows the value on edit page. 
//     //useEffect won't run unless we have id


//     //After Update Function 

//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         if (!empId || !fname || !lname || !email || !mobile || !homePhone || !address || !dept || !status){
//             toast.error("Please provide value to each input field")
        
//         }else{
//             if(!id){
//                 fireDb.child("contact-manager").push(state, (err)=> {
//                     if(err){
//                         toast.error(err)    
                    
//                     }else{
//                         toast.success("Contact added successfully....")
//                     }
//                 });
//             }else{
//                 fireDb.child(`contact-manager/${id}`).set(state, (err)=> {
//                     if(err){
//                         toast.error(err)
                    
//                     }else{
//                         toast.success("Contact updated successfully....")
//                     }
//                 });
//             }
            
//             setTimeout(()=> navigate("/emprofile"), 500)
//         }
//     }

//     const {id} = useParams()

//     useEffect(()=>{
//         fireDb.child("contact-manager").on("value",(snapshot)=>{
//             if(snapshot.val() !== null){
//                 setData({...snapshot.val()})
            
//             }else{
//                 setData({})
//             }
//         });

//         return ()=>{
//             setData({})
//         }
//     },[id])


//     //if we have an id that means user is performing edit operation

//     useEffect(()=>{
//         if(id){
//             setState({...data[id]})
        
//         }else{
//             setState({...initialState})
//         }

//         //clean up function
//         return ()=>{
//             setState({...initialState})
//         }

//     },[id, data])

//     return(
//         <>
//             <div className="container mt-5">
//                 <div className="row">
//                     <div className="col-md-12 bg-light p-4">
//                         <h3 className="text-center">
//                             <strong>Add Employee Contact Info</strong>
//                         </h3>

//                         <div className="row">
//                             <div className="col-md-10 mt-4 mx-auto">
//                                 <form onSubmit={handleSubmit}>
//                                     <div className="row">
//                                         <div className="col-md-6">
//                                             <div className="form-group">
//                                             <label>Employee ID</label>
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="empId"
//                                                 value={empId || ""}
//                                                 onChange={handleInputChange}
//                                             />
//                                             </div>

//                                             <div className="form-group">
//                                             <label>First Name</label>
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="fname"
//                                                 value={fname || ""}
//                                                 onChange={handleInputChange}
//                                             />
//                                             </div>

//                                             <div className="form-group">
//                                             <label>Last Name</label>
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="lname"
//                                                 value={lname || ""}
//                                                 onChange={handleInputChange}
//                                             />
//                                             </div>

//                                             <div className="form-group">
//                                             <label>Department</label>
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="dept"
//                                                 value={dept || ""}
//                                                 onChange={handleInputChange}
//                                             />
//                                             </div>
//                                         </div>

//                                     <div className="col-md-6">                                       
//                                         <div className="form-group">
//                                             <label>Mobile</label>
//                                             <input
//                                                 type="tel"
//                                                 className="form-control"
//                                                 name="mobile"
//                                                 value={mobile || ""}
//                                                 onChange={handleInputChange}
//                                             />
//                                             </div>

//                                             <div className="form-group">
//                                             <label>Home Phone</label>
//                                             <input
//                                                 type="tel"
//                                                 className="form-control"
//                                                 name="homePhone"
//                                                 value={homePhone || ""}
//                                                 onChange={handleInputChange}
//                                             />
//                                             </div>

//                                             <div className="form-group">
//                                             <label>Email</label>
//                                             <input
//                                                 type="email"
//                                                 className="form-control"
//                                                 name="email"
//                                                 value={email || ""}
//                                                 onChange={handleInputChange}
//                                             />
//                                             </div>

//                                             <div className="form-group">
//                                             <label>Address</label>
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="address"
//                                                 value={address || ""}
//                                                 onChange={handleInputChange}
//                                             />
//                                             </div>

//                                             <div className="form-group">
//                                             <label>Status</label>
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 id="status"
//                                                 name="status"
//                                                 value={status || ""}
//                                                 onChange={handleInputChange}
//                                             />
//                                             </div>

//                                         </div>
//                                         </div>
                                        
                                            
                                            
                                            
//                                 <input type="submit" value={id ? "Update" : "Save"} className="btn btn-success btn-save" />
//                                 </form>
//                                     </div>
                                   
//                             </div>
                            

                            
//                         </div>
//                     </div>
        
//             </div>
        
//         </>
//     )
// }

// export default AddEdit


