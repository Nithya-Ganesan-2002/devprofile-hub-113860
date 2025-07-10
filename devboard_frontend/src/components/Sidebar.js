import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

// PUBLIC_INTERFACE
function Sidebar({ theme, toggleTheme, user, onLogout }) {
  const { pathname } = useLocation();
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-title">Menu</span>
      </div>
      <nav className="sidebar-nav">
        <Link className={pathname === "/" ? "active" : ""} to="/">
          Feed
        </Link>
        {user && (
          <>
            <Link className={pathname === "/profile" ? "active" : ""} to="/profile">
              My Profile
            </Link>
            <Link className={pathname === "/project/new" ? "active" : ""} to="/project/new">
              New Project
            </Link>
          </>
        )}
        {!user && (
          <>
            <Link className={pathname === "/login" ? "active" : ""} to="/login">
              Login
            </Link>
            <Link className={pathname === "/register" ? "active" : ""} to="/register">
              Register
            </Link>
          </>
        )}
      </nav>
      <div className="sidebar-footer">
        <button className="sidebar-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
