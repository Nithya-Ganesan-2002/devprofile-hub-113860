import React, { useState } from "react";
import "./shared.css";

// PUBLIC_INTERFACE
function Register() {
  const [form, setForm] = useState({ username: "", password: "", email: "" });
  const [error, setError] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // TODO: real API fetch here
      // await apiFetch("/auth/register", "POST", form);
      window.alert("Registered! Now login.");
    } catch (err) {
      setError("Registration error. Try again.");
    }
  }

  return (
    <div className="auth-container">
      <h2>Register</h2>
      {error && <div role="alert" className="form-error">{error}</div>}
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Username
          <input name="username" value={form.username} onChange={handleChange} type="text" required />
        </label>
        <label>
          Email
          <input name="email" value={form.email} onChange={handleChange} type="email" required />
        </label>
        <label>
          Password
          <input name="password" value={form.password} onChange={handleChange} type="password" required />
        </label>
        <button type="submit" className="form-btn">Register</button>
      </form>
    </div>
  );
}

export default Register;
