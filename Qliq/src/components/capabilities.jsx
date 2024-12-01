import React from 'react';
import { Target, Coins, BarChart3, Users } from 'lucide-react';

const Capabilities = () => {
  return (
    <div className="py-24 bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Unlock the Power of{' '}
            <span className="text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text">
              Web3 Advertising
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Target Smarter, Earn More, Innovate Freely
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Feature Cards */}
          {[
            {
              title: 'NFT-Based Targeting',
              description: 'Target users based on their NFT collections and Web3 activities, ensuring your ads reach the right audience.',
              icon: <Target className="text-teal-400" size={28} />,
              bgColor: 'bg-teal-500/20',
              hoverBorder: 'hover:border-teal-500/70',
            },
            {
              title: 'Smart Monetization',
              description: 'Enable content creators and platforms to monetize their Web3 content while maintaining free access for users.',
              icon: <Coins className="text-emerald-400" size={28} />,
              bgColor: 'bg-emerald-500/20',
              hoverBorder: 'hover:border-emerald-500/70',
            },
            {
              title: 'Campaign Analytics',
              description: 'Detailed insights and performance metrics to optimize your advertising campaigns in real-time.',
              icon: <BarChart3 className="text-teal-400" size={28} />,
              bgColor: 'bg-teal-500/20',
              hoverBorder: 'hover:border-teal-500/70',
            },
            {
              title: 'Community-Driven',
              description: 'Connect with Web3-native audiences and build meaningful relationships within the blockchain ecosystem.',
              icon: <Users className="text-emerald-400" size={28} />,
              bgColor: 'bg-emerald-500/20',
              hoverBorder: 'hover:border-emerald-500/70',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-transform transform hover:-translate-y-2 ${feature.hoverBorder}`}
            >
              <div
                className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mb-6 shadow-lg`}
              >
                {feature.icon}
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
