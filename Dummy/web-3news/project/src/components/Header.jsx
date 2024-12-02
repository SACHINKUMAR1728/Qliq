import React from 'react';
import NavLink from './navigation/NavLink';
import SearchBar from './navigation/SearchBar';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Web3 Daily
          </h1>
          <nav className="hidden md:flex space-x-6">
            <NavLink href="#">Latest</NavLink>
            <NavLink href="#">DeFi</NavLink>
            <NavLink href="#">NFTs</NavLink>
            <NavLink href="#">Technology</NavLink>
          </nav>
        </div>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;