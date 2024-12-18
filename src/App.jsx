// App.js
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import "./App.css"; // For additional spacing or colors

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
