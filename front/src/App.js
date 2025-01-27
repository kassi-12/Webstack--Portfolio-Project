import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import RestaurantDashboard from './components/Dashboard/RestaurantDashboard';
// import AddReservation from './components/Reservation/AddReservation';
// import ReservationList from './components/Reservation/ReservationList';
import AddEmployee from './components/Employee/AddEmployee';
import EmployeeList from './components/Employee/EmployeeList';
import EditEmployee from './components/Employee/EditEmployee'; // Import EditEmployee
// import TableList from './components/Table/TableList';
// import PlatList from './components/Plat/PlatList';
// import AddPlat from './components/Plat/AddPlat';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Login Route */}
                <Route path="/" element={<Login />} />

                {/* Dashboard */}
                <Route path="/dashboard" element={<RestaurantDashboard />} />

                {/* Reservation Routes */}
                {/* <Route path="/reservations/add" element={<AddReservation />} />
                <Route path="/reservations/list" element={<ReservationList />} /> */}

                {/* Employee Routes */}
                <Route path="/employees/add" element={<AddEmployee />} />
                <Route path="/employees/list" element={<EmployeeList />} />
                <Route path="/employees/edit/:id" element={<EditEmployee />} /> {/* Edit Employee Route */}

                {/* Table Routes */}
                {/* <Route path="/tables/list" element={<TableList />} /> */}

                {/* Plat Routes */}
                {/* <Route path="/plats/list" element={<PlatList />} />
                <Route path="/plats/add" element={<AddPlat />} /> */}

                {/* Catch-All Route (404 Page) */}
                <Route
                    path="*"
                    element={
                        <div style={{ textAlign: 'center', marginTop: '50px' }}>
                            <h2>404 - Page Not Found</h2>
                            <a
                                href="/"
                                style={{
                                    color: '#007bff',
                                    textDecoration: 'none',
                                }}
                            >
                                Go to Login
                            </a>
                        </div>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
