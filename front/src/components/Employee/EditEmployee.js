import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // For getting route parameters
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar"; // Import Sidebar
import "./AddEmployee.css"; // Reuse AddEmployee.css for consistent styling

const EditEmployee = () => {
    const { id } = useParams(); // Extract the 'id' from the route parameters
    const [formData, setFormData] = useState({
        nomE: "",
        prenomE: "",
        poste: "",
        salaire: "",
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetchEmployeeData();
    }, []);

    const fetchEmployeeData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/employee/${id}`);
            if (response.data.success) {
                setFormData(response.data.data);
            } else {
                setErrorMessage("Error: " + response.data.message);
            }
        } catch (error) {
            console.error("Error fetching employee data:", error);
            setErrorMessage(error.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await axios.put(`http://localhost:5000/api/employee/edit/${id}`, formData);

            if (response.data.success) {
                setSuccessMessage(response.data.message);
            } else {
                setErrorMessage("Error: " + response.data.message);
            }
        } catch (error) {
            console.error("Error updating employee:", error);
            const errorMessage =
                error.response?.data?.message || "An unexpected error occurred";
            setErrorMessage(errorMessage);
        }
    };

    return (
        <div className="main-content">
            <Sidebar />
            <div className="form-container">
                <h2>Edit Employee</h2>
                {successMessage && <div className="success-message">{successMessage}</div>}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-column">
                            <label>First Name:</label>
                            <input
                                type="text"
                                name="nomE"
                                value={formData.nomE}
                                onChange={handleChange}
                                required
                            />

                            <label>Last Name:</label>
                            <input
                                type="text"
                                name="prenomE"
                                value={formData.prenomE}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-column">
                            <label>Position:</label>
                            <input
                                type="text"
                                name="poste"
                                value={formData.poste}
                                onChange={handleChange}
                                required
                            />

                            <label>Salary:</label>
                            <input
                                type="number"
                                name="salaire"
                                value={formData.salaire}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="action-link">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default EditEmployee;
