import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const location = "http://localhost:8088/auth/login";

  const navigate = useNavigate();

  const LogIn = async (username, password) => {
    try {
      const response = await axios.post(location, {
        username: username,
        password: password,
      });

      const loginResponse = response.data;
      localStorage.setItem("token", loginResponse.jwt);

      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    LogIn(username, password);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-gradient">
      <div className="col-md-6">
        <form className="border p-4 shadow-sm" onSubmit={handleSubmit}>
          <h2 className="mb-4 text-center" style={{ color: "#6f42c1" }}>
            Log In
          </h2>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ backgroundColor: "#007bff" }}
          >
            Log In
          </button>
        </form>
        <p className="mt-3">
          Don't have an account? Click <a href="/register" className="text-primary">here</a>.
        </p>
      </div>
    </div>
  );
};

export default Login;
