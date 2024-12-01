import React from "react";
import Sidebar from "./sidebar";

const Metrics = () => {
  return (
    <div className="p-6 text-center bg-yellow-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-orange-500">Metrics</h3>
      <p className="mt-2 text-gray-600">Metric Details</p>
    </div>
  );
};

const Wallet = () => {
  return (
    <div className="p-6 text-center bg-yellow-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-orange-500">Wallet</h3>
      <p className="mt-2 text-gray-600">Wallet Balance</p>
    </div>
  );
};

const Graphs = () => {
  return (
    <div className="p-6 text-center bg-blue-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-blue-700">Graphs</h3>
      <p className="mt-2 text-gray-600">Graphical Analysis</p>
    </div>
  );
};

const AnalyticsPage = () => {
  return (
    <div className="flex h-screen bg-blue-50">
      {/* Sidebar */}
      <Sidebar
        title="Analytics"
        links={["Home", "Campaigns", "Analytics", "Payment"]}
      />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Metrics */}
          <Metrics />

          {/* Wallet */}
          <Wallet />
        </div>

        {/* Graphs Section */}
        <div className="mt-6">
          <Graphs />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
