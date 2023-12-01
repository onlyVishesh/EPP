// src/ProSidebar.js
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import "./Sidebar.css"; // Import your CSS file

const FacultySidebar = () => {
  const [isSidebarToggled, setSidebarToggled] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarToggled(!isSidebarToggled);
  };

  const handleDropdownClick = (event) => {
    const dropdown = event.target.parentNode;
    const isActive = dropdown.classList.contains("active");

    document.querySelectorAll(".sidebar-dropdown").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".sidebar-submenu").style.display = "none";
    });

    if (!isActive) {
      dropdown.classList.add("active");
      dropdown.querySelector(".sidebar-submenu").style.display = "block";
    }
  };

  return (
    <div
      className={`page-wrapper chiller-theme ${
        isSidebarToggled ? "toggled" : ""
      }`}
    >
      <a
        id="show-sidebar"
        className="btn btn-sm btn-dark"
        href="#"
        onClick={handleSidebarToggle}
      >
        <i className="fas fa-bars"></i>
      </a>

      <nav id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <a href="#">Event Permission Portal</a>
            <div id="close-sidebar" onClick={handleSidebarToggle}>
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="sidebar-header">
            <div className="user-pic" style={{ color: "#fff" }}>
              <i className="fa fa-user-circle fa-4x" aria-hidden="true"></i>
            </div>
            <div className="user-info">
              <span className="user-name">
                <strong>Vishesh</strong>
              </span>
              <span className="user-role">Club - GDSC</span>
              <span className="user-status">
                <i className="fa fa-circle"></i> <span>Online</span>
              </span>
            </div>
          </div>
          <div className="sidebar-search">
            <div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control search-menu"
                  placeholder="Search..."
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li className="header-menu">
                <span>General</span>
              </li>
              <li className="sidebar-dropdown" onClick={handleDropdownClick}>
                {/* <i className="fa fa-tachometer-alt"></i> */}
                <Link to="/faculty-home">Home</Link>
                {/* <span className="badge badge-pill badge-warning">New</span> */}
              </li>
              <li className="sidebar-dropdown" onClick={handleDropdownClick}>
                <Link to="/faculty-home/event">Create Event</Link>
              </li>
              <li className="sidebar-dropdown" onClick={handleDropdownClick}>
                <Link to="/faculty-home/member">Add Member</Link>
              </li>
              <li className="sidebar-dropdown" onClick={handleDropdownClick}>
                <Link to="/faculty-home/profile">Profile</Link>
              </li>
              {/* More list items and dropdowns can be added here */}
            </ul>
          </div>
        </div>
        <div className="sidebar-footer">
          <a href="#">
            <i className="fa fa-bell"></i>
            <span className="badge badge-pill badge-warning notification">
              3
            </span>
          </a>
          <a href="#">
            <i className="fa fa-envelope"></i>
            <span className="badge badge-pill badge-success notification">
              7
            </span>
          </a>
          <Link to="/faculty-home/profile">
            <i className="fa fa-cog"></i>
            <span className="badge-sonar"></span>
            </Link>
          <a href="#">
            <i className="fa fa-power-off"></i>
          </a>
        </div>
      </nav>

      <main className="page-content">
        <div className="container-fluid">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default FacultySidebar;
