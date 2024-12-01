import React from 'react';
import { TrendingUp, Shield, Zap } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Market Analytics",
      description: "Real-time insights and analytics for better decision making in the NFT space.",
      icon: <TrendingUp className="text-teal-400" size={32} />,
      bgColor: "bg-teal-500/20",
      borderColor: "hover:border-teal-500/50",
    },
    {
      title: "Secure Platform",
      description: "Advanced security measures to protect your digital assets and transactions.",
      icon: <Shield className="text-emerald-400" size={32} />,
      bgColor: "bg-emerald-500/20",
      borderColor: "hover:border-emerald-500/50",
    },
    {
      title: "Fast Transactions",
      description: "Lightning-fast transaction processing with minimal gas fees.",
      icon: <Zap className="text-cyan-400" size={32} />,
      bgColor: "bg-cyan-500/20",
      borderColor: "hover:border-cyan-500/50",
    },
  ];

  return (
    <div className="text-center">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-transparent text-white bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text">
        What We Offer
      </h2>
      <p className="mt-2 text-gray-400">
        Explore the unique features that make our platform stand out.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-8 transition-colors border bg-white/5 backdrop-blur-lg rounded-2xl border-white/10 ${feature.borderColor}`}
          >
            <div
              className={`flex items-center justify-center w-16 h-16 mb-6 ${feature.bgColor} rounded-full`}
            >
              {feature.icon}
            </div>
            <h3 className="mb-4 text-xl font-semibold text-white">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
