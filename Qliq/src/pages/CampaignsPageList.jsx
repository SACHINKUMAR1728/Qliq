import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar.jsx";
import { Link } from "react-router-dom";
import useContractStore from "../context/Web3Context";
import { fetchJsonFromIpfs } from "../function/getcid.js";

const CampaignsPageList = () => {
  const { account, getCidOfAdvertiser } = useContractStore();
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const cid = await getCidOfAdvertiser(account);
        const advertiserData = await fetchJsonFromIpfs(cid);
        if (advertiserData && advertiserData.assets) {
          setAssets(advertiserData.assets);
        }
      } catch (error) {
        console.error("Error fetching advertiser data:", error);
      }
    };

    fetchAssets();
  }, [account, getCidOfAdvertiser]);

  return (
    <div className="flex h-screen bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C]">
      {/* Sidebar */}
      <Sidebar
        title="Campaigns"
        links={["Home", "Campaigns", "Analytics", "Payments"]}
      />

      {/* Main Content */}
      <div className="flex-1 px-8 py-6 overflow-auto">
        {/* Header */}
        <header className="flex items-center justify-between p-6 shadow-md bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl">
          <h1 className="text-2xl font-bold text-white">Campaigns</h1>
          <Link to="/dashboard/advertiser/list/new">
            <button className="px-6 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg hover:opacity-90">
              New Campaign
            </button>
          </Link>
        </header>

        {/* Campaign List */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {assets.map((asset, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={asset.image_url}
                alt={asset.asset_name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white">
                  {asset.asset_name}
                </h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {asset.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium text-gray-900 bg-teal-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignsPageList;
