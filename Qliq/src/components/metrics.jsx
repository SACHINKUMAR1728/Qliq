import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faMousePointer, faChartLine } from '@fortawesome/free-solid-svg-icons';

const Metrics = ({ title, value, percentage, icon }) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-6 bg-[#21419c]  overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:scale-105"
    >
      <div className="flex items-center mb-3">
        <FontAwesomeIcon icon={icon} className="w-8 h-8 mr-2 text-white" />
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      <p className="text-3xl font-bold text-white">{value}</p>
      {percentage && (
        <p
          className={`mt-2 text-lg ${percentage > 0 ? "text-green-500" : "text-red-500"}`}
        >
          {percentage > 0 ? "+" : ""}{percentage}% {percentage > 0 ? "Increase" : "Decrease"}
        </p>
      )}
    </div>
  );
};

export default Metrics;