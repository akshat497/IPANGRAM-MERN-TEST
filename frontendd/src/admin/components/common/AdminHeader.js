
import React, { useContext, useState } from 'react';
import Context from '../../../context/Context';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const AdminHeader = () => {
    const User=useSelector((state)=>state.fetchsingleuser.fetchsingleuser)
    const allDepartment = useSelector((state) => state.getdepartment.getdepartment);
  
    const [employeeDetails, setEmployeeDetails] = useState({});

    const {isSidebarOpen,setSidebarOpen}=useContext(Context);
  const toggleSidebar = () => {
    
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className='text-light'>{User?.data?.user?.role} Panel</h1>
      </header>

      <div className={`sidebar ${isSidebarOpen ? 'open ' : ''}`}>
        <a href="#">Dashboard</a>
        <Link to="/homepage">Users</Link>
        <Link to="/homepage/departments">Departments</Link>
        <Link to="/homepage/profile">Profile</Link>
        <a href="#">Settings</a>
        {/* Add more links based on your requirements */}
      </div>

      

      <div className="menu-btn" onClick={toggleSidebar}>
        ☰
      </div>
    </div>
  );
};

export default AdminHeader;
