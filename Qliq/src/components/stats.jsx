import React from 'react';

export const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C] py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text">
              $2.5B+
            </div>
            <div className="text-gray-400">Trading Volume</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text">
              2M+
            </div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text">
              150+
            </div>
            <div className="text-gray-400">Countries</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text">
              99.9%
            </div>
            <div className="text-gray-400">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
};