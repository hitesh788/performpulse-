import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("hr"); // default role
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ HR LOGIN
    if (
      email === "admin" &&
      password === "admin123" &&
      role === "hr"
    ) {
      localStorage.setItem("token", "dummyToken");
      localStorage.setItem("role", "hr");
      navigate("/hr");
      return;
    }

    // ✅ MANAGER LOGIN
    if (
      email === "manager" &&
      password === "manager123" &&
      role === "manager"
    ) {
      localStorage.setItem("token", "dummyToken");
      localStorage.setItem("role", "manager");
      navigate("/manager");
      return;
    }

    // ❌ INVALID
    setError("Invalid credentials");
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Performance Appraisal System</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* ✅ LOGIN AS SECTION */}
          <div className="login-role">
            <label>Login as:</label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="hr">HR</option>
              <option value="manager">Manager</option>
            </select>
          </div>

          <button type="submit">Login</button>
        </form>

      </div>
    </div>
  );
}

export default Login;
