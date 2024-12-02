import React from 'react';
import { motion } from 'framer-motion';

const AdSlot = ({ type = 'banner' }) => {
  const getAdSize = () => {
    switch (type) {
      case 'banner':
        return 'h-32 md:h-40';
      case 'sidebar':
        return 'h-[600px]';
      default:
        return 'h-32';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`bg-gray-800 rounded-xl overflow-hidden ${getAdSize()} mb-8 relative group`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-4">
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-4 uppercase tracking-wider">Advertisement Space</p>
          <div className="flex items-center justify-center space-x-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100" />
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-200" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdSlot;