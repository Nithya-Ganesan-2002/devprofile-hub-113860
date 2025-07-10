import React, { useState } from "react";
import "./shared.css";

// PUBLIC_INTERFACE
function Profile({ user }) {
  // Placeholder for profile form
  const [profile, setProfile] = useState({ name: user?.username || "", bio: "", email: "" });

  function handleChange(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Save profile via API
    window.alert("Profile updated (demo only).");
  }

  return (
    <div className="profile-container">
      <h2>Edit Profile</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <label>
          Username
          <input value={profile.name} name="name" onChange={handleChange} type="text" disabled />
        </label>
        <label>
          Email
          <input value={profile.email} name="email" onChange={handleChange} type="email" />
        </label>
        <label>
          Bio
          <textarea value={profile.bio} name="bio" onChange={handleChange} />
        </label>
        <button type="submit" className="form-btn">Save</button>
      </form>
      <h3>Your Projects</h3>
      {/* Placeholder for projects list */}
      <ul>
        <li>
          Project One <a href="/project/101">Open</a>
        </li>
        <li>
          Project Two <a href="/project/102">Open</a>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
