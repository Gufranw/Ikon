// components/Dashboard.js
import React from "react";
import DashboardCard from "./DashboardCard";
import RegionMap from "./RegionMap";
import Chart from "./Chart";

const Dashboard = () => {
  return (
    <div className="dashboard container-fluid">
      <div className="row my-3">
        <DashboardCard title="Subscribers" value="154,628" />
        <DashboardCard title="Revenue" value="$7.35M" />
        <DashboardCard title="Market Share" value="$2.34M" />
        <DashboardCard title="Churn Rate" value="4.67%" />
      </div>
      <div className="row">
        <div className="col-md-6">
          <RegionMap />
        </div>
        <div className="col-md-6">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
