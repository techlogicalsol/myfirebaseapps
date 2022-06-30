import React from "react";

function StudentProfile(){
    return(
        <>

<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1>Student Profile</h1>
    <hr />
  </div>
</div>

<div className="container-fluid mt-5">
    <div className="row">
        <div className="col-md-12">
        <div className="table-responsive">
        <table class="table table-striped">
    <thead>
      <tr>
        <th>Roll Number</th>  
        <th>First name</th>
        <th>Last name</th>
        <th>Class</th>
        <th>Father's Name</th>
        <th>Contact Number</th>
        <th>Address</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    </div>
    </div>
        
        </>
    )
}

export default StudentProfile