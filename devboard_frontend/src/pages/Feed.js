import React, { useState } from "react";
import "./Feed.css";

// PUBLIC_INTERFACE
function Feed() {
  // Placeholder data
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "My First Portfolio",
      author: "alice",
      tags: ["react", "portfolio"],
      likes: 5,
      liked: false,
    },
    {
      id: 2,
      title: "Cool API Service",
      author: "bob",
      tags: ["fastapi", "cloud"],
      likes: 8,
      liked: true,
    },
  ]);
  const [selectedTag, setSelectedTag] = useState("");
  const tags = Array.from(new Set(projects.flatMap((p) => p.tags)));

  // PUBLIC_INTERFACE
  function handleLike(id) {
    setProjects((prev) =>
      prev.map((p) => p.id === id ? { ...p, likes: p.liked ? p.likes - 1 : p.likes + 1, liked: !p.liked } : p)
    );
  }

  // PUBLIC_INTERFACE
  function handleTag(tag) {
    setSelectedTag(tag === selectedTag ? "" : tag);
  }

  return (
    <div className="feed-container">
      <div className="feed-bar">
        <strong>Filter by tag:</strong>
        <div className="feed-tags">
          {tags.map((tag) => (
            <button
              key={tag}
              className={selectedTag === tag ? "tag-btn selected" : "tag-btn"}
              onClick={() => handleTag(tag)}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
      <div className="projects-list">
        {(selectedTag ? projects.filter((p) => p.tags.includes(selectedTag)) : projects).map((proj) => (
          <div className="project-card" key={proj.id}>
            <div className="card-header">
              <h3>{proj.title}</h3>
              <span className="author">
                by <a href={`/profile/${proj.author}`}>{proj.author}</a>
              </span>
            </div>
            <div className="card-tags">
              {proj.tags.map((t) => (
                <span className="tag" key={t}>#{t}</span>
              ))}
            </div>
            <div className="card-actions">
              <button
                className={proj.liked ? "like-btn liked" : "like-btn"}
                onClick={() => handleLike(proj.id)}
                aria-label={proj.liked ? "Unlike project" : "Like project"}
              >
                {proj.liked ? "❤️" : "🤍"} {proj.likes}
              </button>
              <a href={`/project/${proj.id}`} className="details-link">
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
