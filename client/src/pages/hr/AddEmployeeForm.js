import React, { useState } from "react";
import { addEmployee } from "../../services/employeeService";

function AddEmployeeForm({ refreshEmployees }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    designation: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEmployee(form);

    setForm({
      name: "",
      email: "",
      department: "",
      designation: "",
    });

    refreshEmployees();
  };

  return (
    <div className="card">
      <h3>Add Employee</h3>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange}/>
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange}/>
        <input name="department" placeholder="Department" value={form.department} onChange={handleChange}/>
        <input name="designation" placeholder="Designation" value={form.designation} onChange={handleChange}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddEmployeeForm;
