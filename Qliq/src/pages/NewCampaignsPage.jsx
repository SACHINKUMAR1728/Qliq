import React from "react";

const CampaignForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C]">
      <div className="w-full max-w-md p-8 bg-[#0E403E] rounded-xl shadow-lg border border-teal-500/30">
        <form className="space-y-6">
          {/* Title Input */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-teal-400"
            >
              Campaign Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter campaign title"
              className="block w-full p-3 mt-2 text-gray-100 placeholder-gray-400 bg-gray-800 border rounded-lg shadow-sm border-teal-500/30 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          {/* Select Size */}
          <div>
            <label
              htmlFor="size"
              className="block text-sm font-medium text-teal-400"
            >
              Ad Size
            </label>
            <select
              id="size"
              className="block w-full p-3 mt-2 text-gray-100 bg-gray-800 border rounded-lg shadow-sm border-teal-500/30 focus:ring-teal-500 focus:border-teal-500"
            >
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>

          {/* Upload (IPFS) */}
          <div>
            <label
              htmlFor="upload"
              className="block text-sm font-medium text-teal-400"
            >
              Upload File (IPFS)
            </label>
            <input
              type="file"
              id="upload"
              className="block w-full p-3 mt-2 text-gray-100 bg-gray-800 border rounded-lg shadow-sm border-teal-500/30"
            />
          </div>

          {/* Targeting */}
          <div>
            <label
              htmlFor="targeting"
              className="block text-sm font-medium text-teal-400"
            >
              Target Audience
            </label>
            <textarea
              id="targeting"
              placeholder="Enter target audience details"
              className="block w-full p-3 mt-2 text-gray-100 placeholder-gray-400 bg-gray-800 border rounded-lg shadow-sm border-teal-500/30 focus:ring-teal-500 focus:border-teal-500"
              rows="3"
            ></textarea>
          </div>

          {/* Budget */}
          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-medium text-teal-400"
            >
              Budget (USD)
            </label>
            <input
              type="number"
              id="budget"
              placeholder="Enter budget amount"
              className="block w-full p-3 mt-2 text-gray-100 placeholder-gray-400 bg-gray-800 border rounded-lg shadow-sm border-teal-500/30 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          {/* Pay Button */}
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 text-white rounded-lg shadow-md bg-gradient-to-r from-teal-500 to-emerald-500 hover:opacity-90"
            >
              Pay & Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignForm;
