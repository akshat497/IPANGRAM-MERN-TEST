import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Context from '../../../context/Context';

const Profile = () => {
    const User=useSelector((state)=>state.fetchsingleuser.fetchsingleuser)
    const {isSidebarOpen}=useContext(Context);
  return (
    <div className={`content ${isSidebarOpen ? 'open' : ''}`}>
         <div className="profile-container">
      <div className="profile-header">
        <img
          src="https://your-profile-image-url.jpg"
          alt="Profile"
          className="profile-image"
        />
        <h1 className="profile-name"> Name</h1>
        <p className="profile-bio">{User?.data?.user?.name}</p>
      </div>

      <div className="profile-details">
        <div className="detail">
          <span className="detail-label">Email:</span>
          <span className="detail-value">{User?.data?.user?.email}</span>
        </div>
        <div className="detail">
          <span className="detail-label">Phone:</span>
          <span className="detail-value">{User?.data?.user?.phone}</span>
        </div>
        <div className="detail">
          <span className="detail-label">Location:</span>
          <span className="detail-value">{User?.data?.user?.location}</span>
        </div>
        <div className="detail">
          <span className="detail-label">You are a:</span>
          <span className="detail-value">{User?.data?.user?.role}</span>
        </div>
      </div>

      <div className="profile-bio-section">
        <h2>Bio</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>

      {/* Add more sections as needed, e.g., skills, education, experience, etc. */}

      {/* Add styles below or link an external stylesheet */}
     
    </div>
  
    </div>
  )
};

export default Profile;
