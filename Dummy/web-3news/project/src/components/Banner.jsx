import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Banner = () => {
  return (
    <div className=" mx-20 my-10 rounded-xl bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white py-16 mb-8 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="mb-8 md:mb-0 md:w-2/3 px-9">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white"
            >
              Discover the Future of Web3
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-200 mb-8 leading-relaxed"
            >
              Stay ahead with exclusive insights, breaking news, and in-depth analysis 
              of the decentralized web. Join our community of Web3 enthusiasts.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-x-4"
            >
              <Button variant="primary" className="px-8 py-3">
                Subscribe Now
              </Button>
              <Button variant="outline" className="px-8 py-3">
                Learn More
              </Button>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="md:w-1/3"
          >
            <img 
              src="https://picsum.photos/500/300?random=banner" 
              alt="Web3 Banner" 
              className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-3xl" />
    </div>
  );
};

export default Banner;