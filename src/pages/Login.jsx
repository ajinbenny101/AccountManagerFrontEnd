import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

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
    <div className="add-post-container">
      <form className="addUserForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>
      <p>
        don't have an account click{" "}
        <span>
          <a class="nav-link" href="/register">
            here
          </a>
        </span>
      </p>
    </div>
  );
};

export default Login;
