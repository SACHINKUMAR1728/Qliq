import React from "react";
import { FaHome, FaBullhorn, FaChartLine, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen px-6 py-8 text-white bg-gradient-to-b from-[#11222C] via-[#0E403E] to-[#131321] shadow-xl border border-teal-500/30 rounded-lg">
      {/* Sidebar Header */}
      <div className="pb-6 mb-12 text-center border-b border-teal-500/30">
        <h2 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text">
          Advertiser
        </h2>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-8">
          {/* Home */}
          <li className="flex items-center gap-4 p-4 transition-colors rounded-lg cursor-pointer group bg-gradient-to-r from-transparent to-gray-700/10 hover:bg-teal-500/20">
            <FaHome className="w-6 h-6 text-teal-400 transition-transform group-hover:scale-110" />
            <span className="text-lg font-medium transition-colors group-hover:text-white">
              Home
            </span>
          </li>
          {/* Campaigns */}
          <li className="flex items-center gap-4 p-4 transition-colors rounded-lg cursor-pointer group bg-gradient-to-r from-transparent to-gray-700/10 hover:bg-teal-500/20">
            <FaBullhorn className="w-6 h-6 text-teal-400 transition-transform group-hover:scale-110" />
            <span className="text-lg font-medium transition-colors group-hover:text-white">
              Campaigns
            </span>
          </li>
          {/* Analytics */}
          <li className="flex items-center gap-4 p-4 transition-colors rounded-lg cursor-pointer group bg-gradient-to-r from-transparent to-gray-700/10 hover:bg-teal-500/20">
            <FaChartLine className="w-6 h-6 text-teal-400 transition-transform group-hover:scale-110" />
            <span className="text-lg font-medium transition-colors group-hover:text-white">
              Analytics
            </span>
          </li>
          {/* Settings */}
          <li className="flex items-center gap-4 p-4 transition-colors rounded-lg cursor-pointer group bg-gradient-to-r from-transparent to-gray-700/10 hover:bg-teal-500/20">
            <FaCog className="w-6 h-6 text-teal-400 transition-transform group-hover:scale-110" />
            <span className="text-lg font-medium transition-colors group-hover:text-white">
              Settings
            </span>
          </li>
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <footer className="pt-6 mt-12 border-t border-teal-500/30">
        <p className="text-sm text-center text-gray-400">
          © {new Date().getFullYear()} Advertiser
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
