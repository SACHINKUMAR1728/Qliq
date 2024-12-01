import React from 'react';
import { Wallet, Target, BarChart3, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Wallet className="text-teal-400" size={24} />,
      title: "Connect Wallet",
      description: "Link your Web3 wallet to access the platform's features and start your advertising journey."
    },
    {
      icon: <Target className="text-emerald-400" size={24} />,
      title: "Set Up Campaign",
      description: "Define your target audience based on NFT holdings and create compelling ad campaigns."
    },
    {
      icon: <BarChart3 className="text-teal-400" size={24} />,
      title: "Track Performance",
      description: "Monitor real-time analytics and optimize your campaigns for maximum engagement."
    },
    {
      icon: <Rocket className="text-emerald-400" size={24} />,
      title: "Scale & Grow",
      description: "Expand your reach and grow your presence in the Web3 ecosystem."
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            How It{' '}
            <span className="text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-300">Simple steps to start your Web3 advertising journey</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="h-full p-8 transition-colors border bg-white/5 backdrop-blur-lg rounded-2xl border-white/10 hover:border-teal-500/50">
                <div className="flex items-center justify-center w-12 h-12 mb-6 bg-white/5 rounded-xl">
                  {step.icon}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute hidden w-8 h-px md:block top-1/2 -right-4 bg-gradient-to-r from-teal-500 to-emerald-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;