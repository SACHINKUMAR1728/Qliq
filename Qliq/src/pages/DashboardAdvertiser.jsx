import React from "react";
import Sidebar from "../components/sideBar";
import Metrics from "../components/metrics";
import Campaigns from "../components/Campaigns";
import Assets from "../components/assets";

const DashboardAdvertiser = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <header className="p-6 bg-teal-500 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-white">Advertiser Dashboard</h1>
        </header>

        {/* Dashboard Content */}
        <main className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Metrics */}
          <Metrics title="Total Campaigns" />
          <Metrics title="Active Campaigns" />
          <Metrics title="Budget Utilization" />

          {/* Campaigns and Assets Sections */}
          <Campaigns />
          <Assets />
        </main>
      </div>
    </div>
  );
};

export default DashboardAdvertiser;