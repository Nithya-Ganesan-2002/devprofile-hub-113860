import React, { useState } from "react";
import "./shared.css";

// PUBLIC_INTERFACE
function Login({ onLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // Placeholder: real API fetch here, sample shape:
      // const resp = await apiFetch("/auth/login", "POST", form);
      // onLogin(resp.user);
      onLogin({ username: form.username });
    } catch (err) {
      setError("Invalid username or password");
    }
  }

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <div role="alert" className="form-error">{error}</div>}
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Username
          <input name="username" value={form.username} onChange={handleChange} type="text" required />
        </label>
        <label>
          Password
          <input name="password" value={form.password} onChange={handleChange} type="password" required />
        </label>
        <button type="submit" className="form-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
