import React from "react";

function HRStats({ employees }) {

  const totalEmployees = employees.length;

  const departments = [
    ...new Set(employees.map(emp => emp.department))
  ].length;

  return (
    <div className="stats">
      <div className="card">
        <h3>Total Employees</h3>
        <p>{totalEmployees}</p>
      </div>

      <div className="card">
        <h3>Departments</h3>
        <p>{departments}</p>
      </div>
    </div>
  );
}

export default HRStats;
