import React from 'react'

const Notfound = () => {
  return (

    <div className="relative min-h-screen bg-gradient-to-br from-teal-500 via-emerald-600 to-teal-800 flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://example.com/404-bg.jpg)' }}></div>
      <div className="z-10 text-center px-6 sm:px-12">
        <h1 className="text-9xl font-extrabold mb-6 tracking-tight">
          404
        </h1>
        <h2 className="text-3xl font-semibold mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg mb-8">
          The page you're looking for doesn't exist or might have been moved. But don't worry, we'll get you back on track.
        </p>

        <button
          onClick={goHome}
          className="px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:opacity-90 transition-all shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};


export default Notfound