import React from "react";
import { deleteEmployee } from "../../services/employeeService";

function EmployeeTable({ employees, refreshEmployees }) {

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    refreshEmployees();
  };

  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {employees.map(emp => (
          <tr key={emp._id}>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.department}</td>
            <td>{emp.designation}</td>
            <td>
              <button onClick={() => handleDelete(emp._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
