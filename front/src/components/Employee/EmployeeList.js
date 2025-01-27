import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import "./EmployeeList.css"; // Using shared dashboard styles

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  // Fetch employees on component mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/employee");
      setEmployees(response.data.data);
    } catch (error) {
      handleError(error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/employee/delete/${id}`);
      if (response.data.success) {
        setMessage({ type: "success", text: "Employee deleted successfully." });
        setEmployees(employees.filter((employee) => employee.idEmploye !== id));
      }
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    if (error.response && error.response.data) {
      setMessage({ type: "error", text: error.response.data.message || "An error occurred." });
    } else if (error.request) {
      setMessage({ type: "error", text: "Error connecting to the server." });
    } else {
      setMessage({ type: "error", text: error.message });
    }
  };

  return (
    <>
      <Sidebar />
      <div className="main-content">
     
        {message.text && (
          <div
            className={message.type === "success" ? "success-message" : "error-message"}
          >
            {message.text}
          </div>
        )}
        <table className="appointments-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <tr key={employee.idEmploye}>
                  <td>{employee.nomE}</td>
                  <td>{employee.prenomE}</td>
                  <td>{employee.poste}</td>
                  <td>{employee.salaire}</td>
                  <td>
                    <button
                      className="action-link"
                      onClick={() => navigate(`/employees/edit/${employee.idEmploye}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="action-link"
                      onClick={(e) => {
                        e.preventDefault();
                        if (window.confirm("Are you sure you want to delete?")) {
                          deleteEmployee(employee.idEmploye);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No employees found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeList;
