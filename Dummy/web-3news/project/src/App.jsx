import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import NewsList from './components/NewsList';
import AdSlot from './components/ads/AdSlot';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Banner />
      <NewsList />
      <div className="container mx-auto px-4 py-8">
        <AdSlot type="banner" />
      </div>
    </div>
  );
}

export default App;