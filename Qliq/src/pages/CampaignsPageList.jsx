import React from "react";
import Sidebar from "../components/sideBar";

const CampaignsPageList = () => {
  const campaigns = [
    "Campaign Details 1",
    "Campaign Details 2",
    "Campaign Details 3",
  ];

  return (
    <div className="flex h-screen bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C]">
      {/* Sidebar */}
      <Sidebar title="Campaigns" links={["Home", "Campaigns", "Analytics", "Payments"]} />

      {/* Main Content */}
      <div className="flex-1 px-8 py-6 overflow-auto">
        {/* Header */}
        <header className="flex items-center justify-between p-6 shadow-md bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl">
          <h1 className="text-2xl font-bold text-white">Campaigns</h1>
          <button className="px-6 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg hover:opacity-90">
            New Campaign
          </button>
        </header>

        {/* Campaign List */}
        <div className="mt-8 space-y-4">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-900 rounded-lg shadow-md"
            >
              <span className="text-sm font-medium text-gray-300">{campaign}</span>
              <button className="px-4 py-1 text-sm font-medium text-gray-100 bg-teal-500 rounded-md hover:bg-teal-600">
                Pause
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignsPageList;
