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

      {/* Campaign List */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {campaigns.map((campaign, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-teal-700 bg-opacity-50 text-white rounded-lg shadow-lg hover:bg-teal-800 hover:bg-opacity-70 transition-colors duration-300 w-full h-48"
          >
            <div className="text-lg font-medium text-center">{campaign}</div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <button className="px-4 py-2 mt-5 text-white bg-teal-600 rounded-md hover:bg-teal-700">
        View All Campaigns
      </button>
    </div>
  );
};

export default Campaigns;
