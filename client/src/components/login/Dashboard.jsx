// src/Dashboard.js

import React from "react";
import { useNavigate } from "react-router-dom";
import { fakeAuth } from "./auth";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    fakeAuth.logout(() => navigate("/"));
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, you are logged in!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
