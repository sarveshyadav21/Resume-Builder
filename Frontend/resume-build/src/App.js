import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [activeForm, setActiveForm] = useState("login");

  return (
    <div className="container">
      <h1>Welcome to Resume Formatter</h1>
      {/* Form Switcher */}
      <div className="form-switcher">
        <button
          className={activeForm === "login" ? "active" : ""}
          onClick={() => setActiveForm("login")}
        >
          Login
        </button>
        <button
          className={activeForm === "signup" ? "active" : ""}
          onClick={() => setActiveForm("signup")}
        >
          Sign Up
        </button>
        <button
          className={activeForm === "forgot" ? "active" : ""}
          onClick={() => setActiveForm("forgot")}
        >
          Forgot Password
        </button>
      </div>

      {/* Render Form Based on Active State */}
      <div className="form-container">
        {activeForm === "login" && <LoginForm />}
        {activeForm === "signup" && <SignupForm />}
        {activeForm === "forgot" && <ForgotPasswordForm />}
      </div>
    </div>
  );
};

// Define Login Form as a Function
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add logic to handle login (e.g., API call)
    alert(`Login successful for email: ${email}`);
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

// Define Signup Form as a Function
function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Add logic to handle signup (e.g., API call)
    alert(`Account created for: ${name}, ${email}`);
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Sign Up</h2>
      <div className="input-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

// Define Forgot Password Form as a Function
function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Add logic to handle password reset (e.g., API call)
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <form onSubmit={handleForgotPassword}>
      <h2>Forgot Password</h2>
      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Reset Password</button>
    </form>
  );
}

export default App;
