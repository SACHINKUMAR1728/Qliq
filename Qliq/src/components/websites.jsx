import React, { useState } from "react";
import Sidebar from "./sidebar";

const WebsitesPage = () => {
  const [websites, setWebsites] = useState([
    "Website Details 1.",
    "Website Details 2.",
  ]);

  const handleAddWebsite = () => {
    setWebsites([...websites, `Website Details ${websites.length + 1}.`]);
  };

  return (
    <div className="flex h-screen bg-blue-50">
      <Sidebar
        title="Websites"
        links={["Home", "Websites", "Analytics", "Payment"]}
      />

      <div className="flex-1 p-6 overflow-auto">
        <header className="flex items-center justify-between p-6 bg-blue-100 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-blue-700">Websites</h1>
          <button
            onClick={handleAddWebsite}
            className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
        </header>

        <div className="mt-6">
          {websites.map((website, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 mb-4 bg-yellow-100 rounded-lg shadow-sm"
            >
              <span className="text-gray-700">{website}</span>
              <button className="font-medium text-blue-500 hover:text-blue-700">
                (Scripts)
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsitesPage;
