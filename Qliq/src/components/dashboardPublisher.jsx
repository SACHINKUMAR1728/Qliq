import React from "react";
 import Sidebarpub from "./sidebarpub";

const Metrics = ({ title }) => {
  return (
    <div className="p-6 text-center bg-yellow-100 border border-gray-300 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-orange-500">{title}</h3>
      <p className="mt-2 text-gray-600">Numbered Metric</p>
    </div>
  );
};

const Websites = () => {
  return (
    <div className="p-6 text-center bg-blue-100 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-blue-700">Websites</h2>
    </div>
  );
};

const Payout = () => {
  return (
    <div className="p-6 text-center bg-gray-100 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700">Payout</h2>
    </div>
  );
};

const PublisherDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebarpub
        title="Dashboard Publisher"
        links={["Home", "Websites", "Analytics", "Payment"]}
      />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <header className="p-6 text-center bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-red-600">Dashboard Publisher</h1>
        </header>

        <main className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Metrics */}
          <Metrics title="Metrics" />
          <Metrics title="Metrics" />

          {/* Main Sections */}
          <Websites />
          <Payout />
        </main>
      </div>
    </div>
  );
};

export default PublisherDashboard;
