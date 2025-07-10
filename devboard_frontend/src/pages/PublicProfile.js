import React from "react";
import { useParams } from "react-router-dom";
import "./shared.css";

// PUBLIC_INTERFACE
function PublicProfile() {
  const { username } = useParams();
  // Placeholder for user and projects
  const fakeProfile = { name: username, bio: "Software dev. Loves React!", email: `${username}@mail.com` };
  const fakeProjects = [
    { title: "X Project", id: 1 },
    { title: "Y Service", id: 2 },
  ];

  return (
    <div className="public-profile-container">
      <h2>{fakeProfile.name}'s Profile</h2>
      <p>
        <strong>Bio:</strong> {fakeProfile.bio}
      </p>
      <p>
        <strong>Email:</strong> {fakeProfile.email}
      </p>
      <h3>Projects</h3>
      <ul>
        {fakeProjects.map((p) => (
          <li key={p.id}>
            <a href={`/project/${p.id}`}>{p.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PublicProfile;
