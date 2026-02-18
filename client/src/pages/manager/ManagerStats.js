import React from "react";

function ManagerStats({ employees }) {

  const totalTeam = employees.length;

  const departments = [
    ...new Set(employees.map(emp => emp.department))
  ].length;

  return (
    <div className="stats">
      <div className="card">
        <h3>Total Team Members</h3>
        <p>{totalTeam}</p>
      </div>

      <div className="card">
        <h3>Departments</h3>
        <p>{departments}</p>
      </div>
    </div>
  );
}

export default ManagerStats;
    