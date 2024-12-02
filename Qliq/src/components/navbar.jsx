import React from 'react';
import { Menu, X, Wallet, ChevronDown } from 'lucide-react';
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-[#131321]/90 via-[#0E403E]/90 to-[#11222C]/90 backdrop-blur-md border-b border-white/10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-1">
            {/* Logo Image */}
            <img
              src="/logo.png" // Replace with the actual filename of your logo
              alt="Logo"
              className="w-14 h-14"
            />
            {/* Text Logo */}
            <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text">
              QliQ
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <div className="relative group">
                
                
              </div>
              <a href="#about" className="text-gray-300 transition-colors hover:text-white">
                About
              </a>
              <a href="#roadmap" className="text-gray-300 transition-colors hover:text-white">
                Roadmap
              </a>
              <Link to="/login">
                <button className="flex items-center gap-2 px-6 py-2 transition-opacity rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:opacity-90">
                  <Wallet size={20} />
                  <span>Connect Wallet</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-[#131321] border-t border-white/10">
          <div className="px-4 py-3 space-y-3">
            
          <Link to="/login">
                <button className="flex items-center gap-2 px-6 py-2 transition-opacity rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:opacity-90">
                  <Wallet size={20} />
                  <span>Connect Wallet</span>
                </button>
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
