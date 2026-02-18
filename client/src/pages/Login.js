import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/logo-bg.png";
import { toast } from "react-toastify";


import "../styles/Login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("hr");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // TEMP LOGIN
    if (email === "admin" && password === "admin123" && role === "hr") {
      localStorage.setItem("token", "dummy");
      localStorage.setItem("role", "hr");
      toast.success("HR Login Successful");
navigate("/hr");

      navigate("/hr");
      return;
    }

    if (email === "manager" && password === "manager123" && role === "manager") {
      localStorage.setItem("token", "dummy");
      localStorage.setItem("role", "manager");
      toast.success("Manager Login Successful");
navigate("/manager");

      navigate("/manager");
      return;
    }

    toast.error("Invalid credentials");

  };

  return (
    <div className="login-wrapper">

      {/* LEFT SIDE */}
      <div className="login-left">
        <div className="login-box">

          <h2>Welcome to PerformPulse</h2>
         
         <br>
         </br>

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

            <div className="login-role">
              <label>Login as</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="hr">HR</option>
                <option value="manager">Manager</option>
              </select>
            </div>

            <button type="submit">Login in</button>

          </form>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
  <img src={loginImage} draggable="false" alt="Login Visual" />
</div>


    </div>
  );
}

export default Login;
