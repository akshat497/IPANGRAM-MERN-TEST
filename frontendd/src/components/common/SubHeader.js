import React from 'react'

export default function SubHeader() {
  return (
<nav>
  <div className="sidebar-button">
    <i className="bx bx-menu sidebarBtn" />
    <span className="dashboard">Dashboard</span>
  </div>
  <div className="sidebar_menu">
    <ul>
      <i className="bx bx-plus" style={{color: 'red'}} />
      <span className="dashboard">Add Account</span>
      <li><i className="bx bx-up-arrow-alt" />
        <span className="dashboard">Quick Pay</span></li>
      <i className="bx bx-plus" style={{color: 'red'}} />
      <span className="dashboard">Quick Collect</span>
    </ul>
  </div>
  {/* <div class="search-box">
  <input type="text" placeholder="Search...">
  <i class='bx bx-search' ></i>
</div> */}
  <div className="profile-details">
    <img src="./img/logout.png" alt />
    <span className="admin_name">Administrator</span>
    <i className="bx bx-chevron-down" />
  </div>
</nav>

  )
}
