import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as per your folder structure
import FeaturesSection from '../components/features'; // Adjust the path as per your folder structure
import HowItWorks from '../components/howItWorks'; // Adjust the path as per your folder structure
import Capabilities from './capabilities';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="relative bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 bg-teal-500 rounded-full -left-10 w-96 h-96 mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 rounded-full -right-10 w-96 h-96 bg-emerald-500 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute rounded-full -bottom-10 left-32 w-96 h-96 bg-cyan-500 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-8 text-5xl font-extrabold tracking-tight md:text-7xl">
              <span className="text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text">
                Transforming
              </span>
              <br />
              <span className="text-white">Digital Advertising</span>
            </h1>
            <p className="max-w-3xl mx-auto mb-12 text-lg text-gray-300 lg:text-xl">
              Unleashing the power of blockchain to bridge the gap between advertisers, platforms, and publishers.
              A new era of decentralized engagement.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <button className="flex items-center gap-2 px-8 py-4 text-lg font-semibold transition-opacity rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-emerald-500 hover:opacity-90">
                Get Started
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 text-lg font-semibold text-white transition-colors border rounded-full shadow-lg border-gray-300/20 hover:bg-gray-700/10">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="relative px-4 py-20 sm:px-6 lg:px-8">
          <Capabilities />
        </div>
        <div className="relative px-4 py-20 sm:px-6 lg:px-8">
          <FeaturesSection />
        </div>
        <div className="relative px-4 py-20 sm:px-6 lg:px-8">
          <HowItWorks />
        </div>
        <div className="relative px-4 py-20 sm:px-6 lg:px-8">
          <NftShowcase />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
