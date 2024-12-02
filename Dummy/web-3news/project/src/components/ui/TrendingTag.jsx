import React from 'react';
import { FiTrendingUp } from 'react-icons/fi';

const TrendingTag = () => {
  return (
    <div className="inline-flex items-center space-x-1 bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs font-medium animate-pulse">
      <FiTrendingUp className="w-3 h-3" />
      <span>Trending</span>
    </div>
  );
};

export default TrendingTag;