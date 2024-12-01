import React from "react";

const Metrics = ({ title }) => {
  return (
    <div className="p-6 text-center bg-teal-500 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-lg font-medium text-gray-100">Value or Data</p>
    </div>
  );
};

export default Metrics;