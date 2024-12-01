import React from 'react';
import { Twitter, Github, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#131321] border-t border-white/10">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text">
              QliQ
            </span>
            <p className="max-w-md mt-4 text-gray-400">
              Revolutionizing Web3 advertising through NFT-driven precision targeting and blockchain intelligence.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Analytics</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Documentation</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-12 border-t border-white/10">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} QliQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
