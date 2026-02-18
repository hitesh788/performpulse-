import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/employees",
});

// GET EMPLOYEES
export const getEmployees = () => {
  return API.get("/");
};

// ADD EMPLOYEE
export const addEmployee = (data) => {
  return API.post("/", data);
};

// DELETE EMPLOYEE
export const deleteEmployee = (id) => {
  return API.delete(`/${id}`);
};

// UPDATE EMPLOYEE
export const updateEmployee = (id, data) => {
  return API.put(`/${id}`, data);
};
