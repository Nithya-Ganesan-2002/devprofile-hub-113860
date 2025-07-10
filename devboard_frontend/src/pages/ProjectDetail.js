import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./shared.css";

// PUBLIC_INTERFACE
function ProjectDetail({ user }) {
  const { projectId } = useParams();
  // DEMO sample project:
  const [project, setProject] = useState({
    id: projectId,
    title: "Sample Project",
    author: "alice",
    description: "This is a sample project. Replace with API fetch.",
    tags: ["react", "portfolio"],
    likes: 7,
    liked: false,
  });

  function handleLike() {
    setProject((p) => ({
      ...p,
      likes: p.liked ? p.likes - 1 : p.likes + 1,
      liked: !p.liked,
    }));
  }

  return (
    <div className="project-detail-container">
      <h2>{project.title}</h2>
      <div className="meta">
        by <a href={`/profile/${project.author}`}>{project.author}</a>
      </div>
      <div className="tags">
        {project.tags.map((t) => (
          <span key={t} className="tag">#{t}</span>
        ))}
      </div>
      <div className="desc">{project.description}</div>
      <div className="actions">
        <button onClick={handleLike} className={project.liked ? "like-btn liked" : "like-btn"}>
          {project.liked ? "❤️" : "🤍"} {project.likes}
        </button>
      </div>
    </div>
  );
}

export default ProjectDetail;
