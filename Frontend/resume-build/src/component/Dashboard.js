
import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <p>Select a resume template to get started!</p>
      {/* Add Resume Templates */}
      <div className="templates">
        <div className="template">Template 1</div>
        <div className="template">Template 2</div>
        <div className="template">Template 3</div>
      </div>
    </div>
  );
};

export default Dashboard;
