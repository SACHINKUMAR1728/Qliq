import React, { useState, useEffect } from 'react';

const NftShowcase = () => {
  const [nfts, setNfts] = useState([]);

  // Fetch placeholder NFT-like images
  useEffect(() => {
    const fetchNFTs = () => {
      const placeholderNFTs = [
        "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?semt=ais_hybrid",
        "https://img.freepik.com/free-vector/cute-cool-panda-listening-music-with-boombox-headphone-cartoon-vector-icon-illustration-animal_138676-5378.jpg?semt=ais_hybrid",
        "https://img.freepik.com/premium-photo/collection-diamond-animals-roaring-dinosaur-nature-animals-concept-low-poly-d-illustration_250994-3452.jpg?semt=ais_hybrid",
        "https://img.freepik.com/free-vector/cute-astronaut-investment-stock-bearish-graph-down-cartoon-vector-icon-illustration-science-finance_138676-5992.jpg?semt=ais_hybrid",
        "https://img.freepik.com/free-vector/representation-sadness_1196-905.jpg?semt=ais_hybrid",
        "https://img.freepik.com/free-vector/polygonal-face-with-headphones_23-2147507024.jpg?semt=ais_hybrid"
      ];
      setNfts(placeholderNFTs);
    };
    fetchNFTs();
  }, []);

  return (
    <div className="py-24 bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C] overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            NFT Showcase for{' '}
            <span className="text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text">
              Targeted Advertising
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Explore dynamic NFT collections in motion
          </p>
        </div>

        {/* Scrolling NFT Cards */}
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-scroll">
            {nfts.map((nft, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 mx-4 overflow-hidden w-72 h-72 rounded-2xl group"
              >
                <img
                  src={nft}
                  alt={`NFT ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-100 bg-black/40 group-hover:opacity-50"></div>
              </div>
            ))}
          </div>
          {/* Duplicate for Infinite Scroll */}
          <div className="flex animate-scroll">
            {nfts.map((nft, index) => (
              <div
                key={`dup-${index}`}
                className="relative flex-shrink-0 mx-4 overflow-hidden w-72 h-72 rounded-2xl group"
              >
                <img
                  src={nft}
                  alt={`NFT ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-100 bg-black/40 group-hover:opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftShowcase;
