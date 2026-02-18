import React from "react";

function TeamList({ employees }) {

  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Designation</th>
        </tr>
      </thead>

      <tbody>
        {employees.map(emp => (
          <tr key={emp._id}>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.department}</td>
            <td>{emp.designation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TeamList;
