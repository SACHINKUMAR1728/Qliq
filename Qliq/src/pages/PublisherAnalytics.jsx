import React from "react";
import Sidebar from "../components/sideBar";

const Metrics = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-[#0E403E] via-[#11222C] to-[#131321] rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-teal-400">Metrics</h3>
      <p className="mt-2 text-sm text-gray-400">Monitor campaign stats and key metrics.</p>
    </div>
  );
};

const Wallet = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-[#131321] rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-emerald-400">Wallet</h3>
      <p className="mt-2 text-sm text-gray-400">Manage wallet balance and transactions.</p>
    </div>
  );
};

const Graphs = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-[#11222C] via-gray-800 to-[#131321] rounded-xl shadow-md mt-8">
      <h3 className="text-lg font-semibold text-center text-teal-400">Graphical Analysis</h3>
      <p className="mt-2 text-sm text-center text-gray-400">Visualize performance trends.</p>
      <div className="flex items-center justify-center h-64 mt-6 bg-gray-900 rounded-lg shadow-inner">
        <span className="text-teal-400">Graph Placeholder</span>
      </div>
    </div>
  );
};

const AnalyticsPage = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C]">
      {/* Sidebar */}
      <Sidebar title="Analytics" links={["Home", "Campaigns", "Analytics", "Payments"]} />

      {/* Main Content */}
      <div className="flex-1 px-8 py-6 overflow-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text">
            Analytics Overview
          </h1>
          <p className="mt-2 text-sm text-gray-400">Track your campaign performance and wallet activities.</p>
        </header>

        {/* Metrics and Wallet Section */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Metrics />
          <Wallet />
        </div>

        {/* Graphs Section */}
        <Graphs />
      </div>
    </div>
  );
};

export default AnalyticsPage;
