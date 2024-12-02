import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AdSlot = ({ type = 'banner' }) => {
  const [adImage, setAdImage] = useState(null); // State for holding the ad image URL

  // Function to get a random number between 1 and 3 and set the ad image URL
  const getRandomAd = () => {
    const randomNum = Math.floor(Math.random() * 2) + 1;
    switch (randomNum) {
      case 1:
        return 'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/ckeditor/Fo46odWAAg3Vzq_20230215061229.jpg';
      
      case 2:
        return 'https://cxotoday.com/wp-content/uploads/2024/02/CoinDCX-Campaign-image.png';
      default:
        return ''; // In case something goes wrong
    }
  };

  // Set random ad image when component mounts
  useEffect(() => {
    setAdImage(getRandomAd());
  }, []); // Run once when the component mounts

  const getAdSize = () => {
    switch (type) {
      case 'banner':
        return 'h-32 md:h-40'; // Adjust height for banner
      case 'sidebar':
        return 'h-[600px]'; // Sidebar ad size
      default:
        return 'h-32'; // Default size
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`bg-gray-800 rounded-xl overflow-hidden ${getAdSize()} mb-8 relative group`}
    >
      {/* Gradient overlay for hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div
        className="w-full h-full flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-4"
        style={{
          backgroundImage: `url(${adImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
        }}
      >
        {/* Additional content can be added here */}
      </div>
    </motion.div>
  );
};

export default AdSlot;
