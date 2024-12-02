import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search news..."
        className="w-64 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />
      <FiSearch className="absolute right-3 top-3 text-gray-400" />
    </div>
  );
};

export default SearchBar;