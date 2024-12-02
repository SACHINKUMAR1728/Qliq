import React from 'react';
import CategoryBadge from './ui/CategoryBadge';
import TrendingTag from './ui/TrendingTag';
import { formatDate } from '../utils/dateFormatter';

const NewsCard = ({ news, featured }) => {
  return (
    <div className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl 
      transition-all duration-300 transform hover:-translate-y-2 ${featured ? 'col-span-2' : ''}`}>
      <div className="relative">
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-56 object-cover hover:opacity-80 transition-opacity"
        />
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <CategoryBadge category={news.category} />
          {news.trending && <TrendingTag />}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-400">{formatDate(news.date)}</span>
          <span className="text-sm text-gray-500">{news.readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-4 hover:text-blue-400 transition-colors line-clamp-2">
          {news.title}
        </h3>
        <p className="text-gray-400 mb-6 line-clamp-3">{news.summary}</p>
        <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center group">
          Read More 
          <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewsCard;