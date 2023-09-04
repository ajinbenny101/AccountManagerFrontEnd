import React from "react";


const Home = () => {
  return (
    <div className="p-3 container-sm">
      <h2 className="mb-4 text-center" style={{ color: "#6f42c1" }}>Account manager utility</h2>
      <hr />
      <p>
        An internal resource designed by members of Pod Charlie to help Account
        Managers with their job.
      </p>
      <br />
      <p>A log in is required to access the resoures provided</p>
      <a href="login">Log In</a>
    </div>
  );
};

export default Home;
