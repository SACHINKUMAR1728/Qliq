import React from "react";
import Sidebar from "../components/sideBar";
import Metrics from "../components/metrics";
import Campaigns from "../components/Campaigns";
import { faEye, faMousePointer, faChartLine } from '@fortawesome/free-solid-svg-icons';

const DashboardAdvertiser = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <header className="p-6 bg-[#104543] rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-white">Advertiser Dashboard</h1>
        </header>

        {/* Dashboard Content */}
        <main className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Metrics */}
          <Metrics
            title="Impressions"
            value="1,200"
            percentage={-5}
            icon={faEye} // FontAwesome Eye Icon
          />
          <Metrics
            title="Clicks"
            value="850"
            percentage={12}
            icon={faMousePointer} // FontAwesome Click Icon
          />
          <Metrics
            title="CTR"
            value="4.5%"
            percentage={3}
            icon={faChartLine} // FontAwesome Chart Icon
          />

          {/* Campaigns Component */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 max-w-screen-lg mx-auto">
          </div>
        </main>
            <Campaigns />
      </div>
    </div>
  );
};

export default DashboardAdvertiser;
