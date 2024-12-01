// App.js
import React from "react";
import Sidebar from "./sidebar";

const Metrics = ({ title }) => {
  return (
    <div className="p-6 text-center bg-yellow-100 border border-gray-300 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-orange-500">{title}</h3>
      <p className="mt-2 text-gray-600">Numbered Metric</p>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="p-6 text-center bg-blue-100 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-blue-700">Campaigns</h2>
    </div>
  );
};

const Assets = () => {
  return (
    <div className="p-6 text-center bg-gray-100 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700">Assets</h2>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <header className="p-6 text-center bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-red-600">Dashboard Advertiser</h1>
        </header>

        <main className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Metrics */}
          <Metrics title="Metrics" />
          <Metrics title="Metrics" />

          {/* Main Sections */}
          <Campaigns />
          <Assets />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
