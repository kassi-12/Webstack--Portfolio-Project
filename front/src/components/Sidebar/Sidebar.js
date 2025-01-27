import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="sidebar-card">
      <div className="logo">
        <h1>🍽️</h1> {/* Replace with restaurant logo if needed */}
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
            <span className="icon">&#127968;</span> Dashboard
          </NavLink>
        </li>
        <li className={`dropdown ${activeDropdown === "reservations" ? "active" : ""}`}>
          <a href="#" onClick={() => toggleDropdown("reservations")}>
            <span className="icon">&#128197;</span> Reservations
          </a>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/reservations/list">List Reservations</NavLink>
            </li>
            <li>
              <NavLink to="/reservations/add">Add Reservation</NavLink>
            </li>
          </ul>
        </li>
        <li className={`dropdown ${activeDropdown === "tables" ? "active" : ""}`}>
          <a href="#" onClick={() => toggleDropdown("tables")}>
            <span className="icon">&#127860;</span> Tables
          </a>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/tables/list">List Tables</NavLink>
            </li>
            <li>
              <NavLink to="/tables/add">Add Table</NavLink>
            </li>
          </ul>
        </li>
        <li className={`dropdown ${activeDropdown === "employees" ? "active" : ""}`}>
          <a href="#" onClick={() => toggleDropdown("employees")}>
            <span className="icon">&#128100;</span> Employees
          </a>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/employees/list">List Employees</NavLink>
            </li>
            <li>
              <NavLink to="/employees/add">Add Employee</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/menu">
            <span className="icon">&#127860;</span> Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders">
            <span className="icon">&#128717;</span> Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout">
            <span className="icon">&#128682;</span> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
