import React from "react";

const Campaigns = () => {
  const campaigns = [
    "Campaign Details 1",
    "Campaign Details 2",
    "Campaign Details 3",
  ];

  return (
    <div className="w-full max-w-screen-xl overflow-hidden p-6 text-center rounded-lg shadow-lg bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C]">
      <h2 className="text-2xl font-semibold text-white">Campaigns</h2>
      <p className="mt-2 text-gray-100">Manage and track your campaigns.</p>
      <button className="px-4 py-2 mt-4 text-white bg-teal-600 rounded-md hover:bg-teal-700">
        View Campaigns
      </button>

      {/* Campaign List */}
      <div className="mt-6 space-y-4">
        {campaigns.map((campaign, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-300  text-center"
          >
            <div className=" w-full text-lg font-medium text-center">{campaign}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
