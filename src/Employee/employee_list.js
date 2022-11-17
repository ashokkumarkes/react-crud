import React from "react";
import Table from 'react-bootstrap/Table';
function Emp({employee}){
  const emp = employee.map((employee)=>
    <tr>
      <td value={employee.id}>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.mobile}</td>
      <td>{employee.skill}</td>
      <td><a href={employee.id}>Edit</a> | <a href={employee.id}>Delete</a></td>
    </tr>
    );
    return(
        <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Skill</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {emp}
              </tbody>
            </Table>
        </div>
    )
}
export default Emp;