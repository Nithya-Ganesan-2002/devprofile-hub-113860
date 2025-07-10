import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProjectForm from "./pages/ProjectForm";
import ProjectDetail from "./pages/ProjectDetail";
import PublicProfile from "./pages/PublicProfile";

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState("light");
  // Placeholder for auth state (can use context/provider later)
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  // PUBLIC_INTERFACE
  function handleLogin(userObj) {
    setUser(userObj);
  }
  // PUBLIC_INTERFACE
  function handleLogout() {
    setUser(null);
  }

  return (
    <Router>
      <div className="main-layout">
        <Sidebar theme={theme} toggleTheme={toggleTheme} user={user} onLogout={handleLogout} />
        <div className="main-content-wrapper">
          <header className="main-header">
            <h1 className="logo">
              <span style={{ color: "#238636" }}>DevBoard</span>
            </h1>
            <nav>
              {user ? (
                <button className="header-btn" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <Link className="header-btn" to="/login">
                  Login
                </Link>
              )}
            </nav>
          </header>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile user={user} />} />
              <Route path="/project/new" element={<ProjectForm user={user} />} />
              <Route path="/project/:projectId" element={<ProjectDetail user={user} />} />
              <Route path="/profile/:username" element={<PublicProfile />} />
              {/* Default */}
              <Route path="*" element={<Feed />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
