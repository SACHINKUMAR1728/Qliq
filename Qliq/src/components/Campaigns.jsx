import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useContractStore from "../context/Web3Context";
import { fetchJsonFromIpfs } from "../function/getcid.js";

const Campaigns = () => {
  const { account, getCidOfAdvertiser } = useContractStore();
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const cid = await getCidOfAdvertiser(account);
        const advertiserData = await fetchJsonFromIpfs(cid);
        if (advertiserData && advertiserData.assets) {
          setCampaigns(advertiserData.assets);
        }
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, [account, getCidOfAdvertiser]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C] p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-white">Campaigns</h2>
          <Link to="/dashboard/advertiser/list/new">
            <button className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700">
              New Campaign
            </button>
          </Link>
        </div>

        {/* Campaign List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <div
              key={campaign.asset_id}
              className="p-4 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-medium">{campaign.asset_name}</h3>
              <p className="mt-2 text-sm">
                Budget: {campaign.analytics.spend.amount}{" "}
                {campaign.analytics.spend.currency}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {campaign.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium text-gray-900 bg-teal-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <button className="px-4 py-2 mt-5 text-white bg-teal-600 rounded-md hover:bg-teal-700">
        View All Campaigns
      </button>
    </div>
  );
};

export default Campaigns;
