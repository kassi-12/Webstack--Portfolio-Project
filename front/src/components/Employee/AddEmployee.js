import React, { useState } from "react";
import axios from "axios";
import "./AddEmployee.css";
import Sidebar from "../Sidebar/Sidebar";

const AddEmployee = () => {
    const [formData, setFormData] = useState({
        nomE: "",
        prenomE: "",
        poste: "",
        salaire: "",
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await axios.post("http://localhost:5000/api/employee/add", formData);

            if (response.data.success) {
                setSuccessMessage(
                    `Employee added successfully with ID: ${response.data.employeeId}`
                );
                setFormData({
                    nomE: "",
                    prenomE: "",
                    poste: "",
                    salaire: "",
                });
            } else {
                setErrorMessage("Error: " + response.data.message);
            }
        } catch (error) {
            console.error("Error during submission:", error);
            const errorMessage =
                error.response?.data?.message || "An unexpected error occurred";
            setErrorMessage(errorMessage);
        }
    };

    return (
        <div className="main-content">
            <Sidebar />
            <div className="form-container">
                <h2>Add Employee</h2>
                {successMessage && <div className="success-message">{successMessage}</div>}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-column">
                            <label>First Name:</label>
                            <input
                                type="text"
                                name="prenomE"
                                value={formData.prenomE}
                                onChange={handleChange}
                                required
                            />

                            <label>Last Name:</label>
                            <input
                                type="text"
                                name="nomE"
                                value={formData.nomE}
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

export default AddEmployee;
