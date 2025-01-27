import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./RestaurantDashboard.css";

const RestaurantDashboard = () => {
  // Example data for reservations and orders (without IDs)
  const reservations = [
    { table: 5, date: "2025-01-12", time: "18:00", client: "John Doe", contact: "123-456-7890" },
    { table: 3, date: "2025-01-13", time: "20:00", client: "Jane Smith", contact: "987-654-3210" },
  ];

  const orders = [
    { table: 5, date: "2025-01-12", status: "Completed" },
    { table: 3, date: "2025-01-13", status: "Pending" },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        {/* Statistics Section */}
        <div className="stats-overview">
          <div className="stat-card">
            <h3>50</h3>
            <p>Reservations</p>
          </div>
          <div className="stat-card">
            <h3>35</h3>
            <p>Tables Available</p>
          </div>
          <div className="stat-card">
            <h3>10,000 MAD</h3>
            <p>Total Revenue</p>
          </div>
          <div className="stat-card">
            <h3>1,500 MAD</h3>
            <p>Today's Revenue</p>
          </div>
        </div>

        {/* Reservations Section */}
        <div className="reservations-section">
          <h2>Recent Reservations</h2>
          <table className="reservations-table">
            <thead>
              <tr>
                <th>Table #</th>
                <th>Date</th>
                <th>Time</th>
                <th>Client</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation, index) => (
                <tr key={index}>
                  <td>{reservation.table}</td>
                  <td>{reservation.date}</td>
                  <td>{reservation.time}</td>
                  <td>{reservation.client}</td>
                  <td>{reservation.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Orders Section */}
        <div className="orders-section">
          <h2>Recent Orders</h2>
          <table className="orders-table">
            <thead>
              <tr>
                <th>Table #</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.table}</td>
                  <td>{order.date}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDashboard;
