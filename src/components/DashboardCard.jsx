// components/DashboardCard.js
import React from "react";

const DashboardCard = ({ title, value }) => {
  return (
    <div className="col-md-3">
      <div className="card shadow p-3">
        <h6>{title}</h6>
        <h4>{value}</h4>
      </div>
    </div>
  );
};

export default DashboardCard;
