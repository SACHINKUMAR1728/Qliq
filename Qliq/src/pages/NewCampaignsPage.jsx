import React from "react";

const CampaignForm = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
      <div className="w-full max-w-md p-8 bg-green-100 rounded-lg shadow-lg">
        <form className="space-y-6">
          {/* Title Input */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter campaign title"
              className="block w-full p-3 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Select Size */}
          <div>
            <label
              htmlFor="size"
              className="block text-sm font-medium text-gray-700"
            >
              Select Size
            </label>
            <select
              id="size"
              className="block w-full p-3 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
              className="block text-sm font-medium text-gray-700"
            >
              Upload (IPFS)
            </label>
            <input
              type="file"
              id="upload"
              className="block w-full p-3 mt-2 bg-white border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Targeting */}
          <div>
            <label
              htmlFor="targeting"
              className="block text-sm font-medium text-gray-700"
            >
              Targeting
            </label>
            <textarea
              id="targeting"
              placeholder="Enter target audience"
              className="block w-full p-3 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            ></textarea>
          </div>

          {/* Budget */}
          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-medium text-gray-700"
            >
              Budget
            </label>
            <input
              type="number"
              id="budget"
              placeholder="Enter budget"
              className="block w-full p-3 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Pay Button */}
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignForm;