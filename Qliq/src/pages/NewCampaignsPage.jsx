import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import { v4 as uuidv4 } from 'uuid';
import useContractStore from "../context/Web3Context";
import { fetchJsonFromIpfs } from "../function/getcid.js";
import { createIPFS } from "../function/IPFS.js";
import { useNavigate } from 'react-router-dom';

const CampaignForm = () => {
  const { account, getCidOfAdvertiser, updateAdvertiserCid, deposit, getcidofactiveads, updateactiveadcid } = useContractStore();
  const [formData, setFormData] = useState({
    campaignName: "",
    budgetValue: "",
    assetImageUrl: "",
    adFormat: "",
    tags: [],
    adDescription: "",
  });
  const [ad, setAd] = useState(null);
  const [buttonText, setButtonText] = useState("Create Ad");
  const navigate = useNavigate();

  const tagOptions = [
    { label: "Gaming", value: "gaming" },
    { label: "Esports", value: "esports" },
    { label: "DAO", value: "dao" },
    { label: "DApp", value: "dapp" },
    // Add more tags as needed
  ];

  useEffect(() => {
    const fetchAdvertiserData = async () => {
      try {
        const cid = await getCidOfAdvertiser(account);
        const advertiserData = await fetchJsonFromIpfs(cid);
        setAd(advertiserData);
        setButtonText("Pay");
      } catch (error) {
        console.error("Error fetching advertiser data:", error);
      }
    };

    fetchAdvertiserData();
  }, [account, getCidOfAdvertiser]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleTagsChange = (selected) => {
    setFormData((prevData) => ({
      ...prevData,
      tags: selected,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Paying...");

    // Generate a UUID for asset_id
    const assetId = uuidv4();

    // Map selected tags to their values
    const selectedTags = formData.tags.map(tag => tag.value);

    // Create the new asset object
    const newAsset = {
      asset_id: assetId,
      asset_name: formData.campaignName,
      analytics: {
        impressions: 0,
        clicks: 0,
        conversions: 0,
        spend: {
          amount: parseFloat(formData.budgetValue),
          currency: "Sepolia ETH",
        },
        performance_by_date: [],
      },
      image_url: formData.assetImageUrl,
      ad_format: formData.adFormat,
      tags: selectedTags,
      description: formData.adDescription,
    };

    if (ad) {
      // Insert the new asset at the beginning of the assets array
      const updatedAssets = [newAsset, ...ad.assets];

      // Update the ad object with the new assets array
      const updatedAd = {
        ...ad,
        assets: updatedAssets,
      };

      try {
        await deposit(newAsset.analytics.spend.amount);
        setButtonText("Creating Ad...");

        // Update advertiser data on IPFS
        const newAdvertiserCid = await createIPFS(updatedAd);
        await updateAdvertiserCid(account, newAdvertiserCid);

        // Fetch current active ads data
        const activeAdsCid = await getcidofactiveads();
        const activeAdsData = await fetchJsonFromIpfs(activeAdsCid);

        // Append new asset to active ads
        const updatedActiveAds = {
          ...activeAdsData,
          assets: [newAsset, ...activeAdsData.assets],
        };

        // Upload updated active ads to IPFS
      //  const newActiveAdsCid = await createIPFS(updatedActiveAds);

        // Update active ads CID
      //  await updateactiveadcid(newActiveAdsCid);

        setButtonText("Ad Created");
        navigate("/dashboard/advertiser/list");
      } catch (error) {
        console.error("Error during ad creation process:", error);
        setButtonText("Error! Try Again");
      }
    } else {
      console.error("Advertiser data is not loaded yet.");
      setButtonText("Error! Try Again");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
      <div className="w-full max-w-md p-8 bg-green-100 rounded-lg shadow-lg">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Campaign Name */}
          <div>
            <label
              htmlFor="campaignName"
              className="block text-sm font-medium text-gray-700"
            >
              Campaign Name
            </label>
            <input
              type="text"
              id="campaignName"
              value={formData.campaignName}
              onChange={handleChange}
              placeholder="Enter campaign name"
              className="block w-full p-3 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Budget Value */}
          <div>
            <label
              htmlFor="budgetValue"
              className="block text-sm font-medium text-gray-700"
            >
              Budget Value
            </label>
            <input
              type="number"
              id="budgetValue"
              value={formData.budgetValue}
              onChange={handleChange}
              placeholder="Enter budget value"
              className="block w-full p-3 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Asset Image URL (via Cloudinary) */}
          <div>
            <label
              htmlFor="assetImageUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Asset Image URL (via Cloudinary)
            </label>
            <input
              type="text"
              id="assetImageUrl"
              value={formData.assetImageUrl}
              onChange={handleChange}
              placeholder="Enter asset image URL"
              className="block w-full p-3 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Ad Format */}
          <div>
            <label
              htmlFor="adFormat"
              className="block text-sm font-medium text-gray-700"
            >
              Ad Format
            </label>
            <select
              id="adFormat"
              value={formData.adFormat}
              onChange={handleChange}
              className="block w-full p-3 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select format</option>
              <option value="rectangle">Rectangle</option>
              <option value="square">Square</option>
            </select>
          </div>

          {/* Tags */}
          <div>
            <label
              htmlFor="tags"
              className="block text-sm font-medium text-gray-700"
            >
              Tags
            </label>
            <MultiSelect
              options={tagOptions}
              value={formData.tags}
              onChange={handleTagsChange}
              labelledBy="Select tags"
              className="mt-2"
            />
          </div>

          {/* Description About Ad */}
          <div>
            <label
              htmlFor="adDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Description About Ad
            </label>
            <textarea
              id="adDescription"
              value={formData.adDescription}
              onChange={handleChange}
              placeholder="Enter ad description"
              className="block w-full p-3 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            ></textarea>
          </div>

          {/* Pay Button */}
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600"
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignForm;
