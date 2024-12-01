import React from "react";

const Campaigns = () => {
  return (
    <div className="p-6 text-center rounded-lg shadow-lg bg-emerald-500">
      <h2 className="text-xl font-semibold text-white">Campaigns</h2>
      <p className="mt-2 text-gray-100">Manage and track your campaigns.</p>
      <button className="px-4 py-2 mt-4 text-white bg-teal-600 rounded-md hover:bg-teal-700">
        View Campaigns
      </button>
    </div>
  );
};

export default Campaigns;