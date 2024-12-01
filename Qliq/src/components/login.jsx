import React, { useState } from "react";

const LoginForm = () => {
  const [selectedRole, setSelectedRole] = useState("advertiser"); // Default role is Advertiser

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C] px-4">
      <div className="w-full max-w-xl bg-[#0E403E] rounded-xl shadow-xl border border-teal-500/20 p-8">
        {/* Role Selection */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => handleRoleChange("advertiser")}
            className={`w-1/2 py-2 text-lg font-medium transition-all duration-300 ${
              selectedRole === "advertiser"
                ? "text-white bg-gradient-to-r from-teal-400 to-emerald-400 rounded-lg shadow-lg"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Advertiser
          </button>
          <button
            onClick={() => handleRoleChange("publisher")}
            className={`w-1/2 py-2 text-lg font-medium transition-all duration-300 ${
              selectedRole === "publisher"
                ? "text-white bg-gradient-to-r from-teal-400 to-emerald-400 rounded-lg shadow-lg"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Publisher
          </button>
        </div>

        {/* Form Fields */}
        <form className="space-y-6">
          {selectedRole === "advertiser" && (
            <>
              <div>
                <label className="block mb-2 text-gray-300">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 text-white bg-[#11222C] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300">Company Name</label>
                <input
                  type="text"
                  placeholder="Enter your company name"
                  className="w-full px-4 py-2 text-white bg-[#11222C] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
            </>
          )}

          {selectedRole === "publisher" && (
            <>
              <div>
                <label className="block mb-2 text-gray-300">Website Name</label>
                <input
                  type="text"
                  placeholder="Enter your website name"
                  className="w-full px-4 py-2 text-white bg-[#11222C] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300">Website URL</label>
                <input
                  type="url"
                  placeholder="Enter your website URL"
                  className="w-full px-4 py-2 text-white bg-[#11222C] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300">Website Tags</label>
                <input
                  type="text"
                  placeholder="Enter tags (comma-separated)"
                  className="w-full px-4 py-2 text-white bg-[#11222C] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300">Website Description</label>
                <textarea
                  placeholder="Enter a brief description"
                  className="w-full px-4 py-2 text-white bg-[#11222C] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                  rows="3"
                ></textarea>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white transition-all rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 hover:opacity-90"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
