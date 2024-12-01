import React from 'react';
import NewsCard from './NewsCard';
import AdSlot from './ads/AdSlot';
import { newsData } from '../data/newsData';

const NewsList = () => {
  const featuredNews = newsData.filter(news => news.featured);
  const regularNews = newsData.filter(news => !news.featured);

  return (
    <div className="container px-4 py-8 mx-auto items-center">
      <section className="mb-16 w-[90%] mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
          Featured Stories
          <span className="ml-4 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredNews.map(news => (
            <NewsCard key={news.id} news={news} featured={true} />
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              Latest News
              <span className="ml-4 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map(news => (
                <NewsCard key={news.id} news={news} featured={false} />
              ))}
            </div>
          </section>
        </div>
        <div className="lg:col-span-1">
          <AdSlot type="sidebar" />
        </div>
      </div>
    </div>
  );
};

export default NewsList;