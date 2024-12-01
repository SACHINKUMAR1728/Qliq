import React from "react";
import Sidebar from "../components/sideBar";

const CampaignsPageList = () => {
  const campaigns = [
    "Campaign Details.",
    "Campaign Details.",
    "Campaign Details.",
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        title="Campaigns"
        links={["Home", "Campaigns", "Analytics", "Payment"]}
      />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <header className="flex items-center justify-between p-6 bg-blue-100 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-blue-700">Campaigns</h1>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            New
          </button>
        </header>

        {/* Campaign List */}
        <div className="p-6 mt-6 rounded-lg shadow-md bg-blue-50">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 mb-4 bg-yellow-100 rounded-lg shadow-sm"
            >
              <span className="text-gray-700">{campaign}</span>
              <button className="font-medium text-blue-500 hover:text-blue-700">
                (Pause)
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignsPageList;