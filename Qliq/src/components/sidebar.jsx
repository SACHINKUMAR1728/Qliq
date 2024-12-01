import React from "react";
import { HomeIcon, ChartBarIcon, ChartPieIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full px-4 py-6 text-white bg-gray-800 shadow-lg">
      <h2 className="mb-8 text-2xl font-bold text-center text-yellow-400">Advertiser</h2>
      <nav className="flex-1">
        <ul className="space-y-4">
          <li className="flex items-center p-3 space-x-3 rounded-lg cursor-pointer hover:bg-gray-700">
            <HomeIcon className="w-6 h-6 text-yellow-400" />
            <span className="text-lg font-medium">Home</span>
          </li>
          <li className="flex items-center p-3 space-x-3 rounded-lg cursor-pointer hover:bg-gray-700">
            <ChartBarIcon className="w-6 h-6 text-yellow-400" />
            <span className="text-lg font-medium">Campaigns</span>
          </li>
          <li className="flex items-center p-3 space-x-3 rounded-lg cursor-pointer hover:bg-gray-700">
            <ChartPieIcon className="w-6 h-6 text-yellow-400" />
            <span className="text-lg font-medium">Analytics</span>
          </li>
        </ul>
      </nav>
      <footer className="mt-8">
        <p className="text-sm text-center text-gray-400">© 2024 Advertiser</p>
      </footer>
    </div>
  );
};

export default Sidebar;
