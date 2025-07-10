import React, { useState } from "react";
import "./shared.css";

// PUBLIC_INTERFACE
function ProjectForm({ user }) {
  const [form, setForm] = useState({ title: "", description: "", tags: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // TODO: Call backend API to save project
    window.alert("Project submitted (demo only).");
  }

  if (!user) {
    return <div>Please log in to submit a project.</div>;
  }

  return (
    <div className="projectform-container">
      <h2>Upload New Project</h2>
      <form onSubmit={handleSubmit} className="project-form">
        <label>
          Title
          <input name="title" value={form.title} onChange={handleChange} type="text" required />
        </label>
        <label>
          Description
          <textarea name="description" value={form.description} onChange={handleChange} required />
        </label>
        <label>
          Tags (comma separated)
          <input name="tags" value={form.tags} onChange={handleChange} type="text" />
        </label>
        {/* Optionally: file/image upload */}
        <button type="submit" className="form-btn">Submit</button>
      </form>
    </div>
  );
}

export default ProjectForm;
