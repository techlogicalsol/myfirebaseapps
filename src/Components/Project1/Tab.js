import React, { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";


function Tab(){



    return(
        <>
            <div class="btn-group button_gp">
                        
     
        <Link to="/emprofile/add">
            <button className="btn btn-primary menubtn">
             Add Contact
          </button> 
          </Link>
     
   
        <Link to="/pro1About">
      
            <button className="btn btn-primary menubtn">
             About
          </button> 
        
        </Link>
            </div>
        </>
    )
}

export default Tab