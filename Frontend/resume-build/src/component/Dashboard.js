
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to your Dashboard</h2>
      <p>You can now create and manage your resume.</p>
      <Link to="/resume">Create Resume</Link>
    </div>
  );
};

export default Dashboard;
