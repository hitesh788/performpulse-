import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HRDashboard.css";

import AddEmployeeForm from "./AddEmployeeForm";
import EmployeeTable from "./EmployeeTable";
import HRStats from "./HRStats";

import { getEmployees } from "../../services/employeeService";

function HRDashboard() {
  const [employees, setEmployees] = useState([]);
  const [activePage, setActivePage] = useState("dashboard");
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const fetchEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter(emp => {
    const matchSearch =
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase());

    const matchDept =
      department === "All" || emp.department === department;

    return matchSearch && matchDept;
  });

  return (
    <div className="hr-container">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>HR Panel</h2>

        <ul>
          <li onClick={() => setActivePage("dashboard")}>
            Dashboard
          </li>

          <li onClick={() => setActivePage("employees")}>
            Employees
          </li>
        </ul>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">

        {activePage === "dashboard" && (
          <>
            <h1>HR Dashboard</h1>
            <HRStats employees={employees} />
            <AddEmployeeForm refreshEmployees={fetchEmployees} />
          </>
        )}

        {activePage === "employees" && (
          <>
            <h1>Employee Management</h1>

            <div className="employee-header">
              <input
                type="text"
                placeholder="Search employee..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="All">All Departments</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
              </select>
            </div>

            <EmployeeTable
              employees={filteredEmployees}
              refreshEmployees={fetchEmployees}
            />
          </>
        )}

      </div>
    </div>
  );
}

export default HRDashboard;
