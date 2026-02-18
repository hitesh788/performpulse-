import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ManagerDashboard.css";

import TeamList from "./TeamList";
import ManagerStats from "./ManagerStats";
import { getEmployees } from "../../services/employeeService";

function ManagerDashboard() {

  const [employees, setEmployees] = useState([]);
  const [activePage, setActivePage] = useState("dashboard");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const fetchEmployees = async () => {
    try {
      const res = await getEmployees();
      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="manager-container">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>Manager Panel</h2>

        <ul>
          <li onClick={() => setActivePage("dashboard")}>
            Dashboard
          </li>

          <li onClick={() => setActivePage("team")}>
            My Team
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
            <h1>Manager Dashboard</h1>
            <ManagerStats employees={employees} />
          </>
        )}

        {activePage === "team" && (
          <>
            <h1>Team Members</h1>
            <TeamList employees={employees} />
          </>
        )}

      </div>
    </div>
  );
}

export default ManagerDashboard;
