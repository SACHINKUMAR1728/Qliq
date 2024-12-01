import React, { useState } from "react";

const RequestPaymentForm = () => {
  const [currentBalance, setCurrentBalance] = useState(1000); // Example balance
  const [requestedAmount, setRequestedAmount] = useState("");

  const handleRequest = (e) => {
    e.preventDefault();
    if (requestedAmount <= currentBalance && requestedAmount > 0) {
      alert(`Request for $${requestedAmount} has been submitted.`);
      setRequestedAmount("");
    } else {
      alert("Invalid amount. Please enter a valid amount within your balance.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
      <div className="w-full max-w-md p-8 bg-green-100 rounded-lg shadow-lg">
        <form className="space-y-6" onSubmit={handleRequest}>
          {/* Current Balance */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Current Balance
            </label>
            <div className="block w-full p-3 mt-2 text-lg font-semibold text-center text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm">
              ${currentBalance.toFixed(2)}
            </div>
          </div>

          {/* Requested Amount */}
          <div>
            <label
              htmlFor="requestedAmount"
              className="block text-sm font-medium text-gray-700"
            >
              Requested Amount
            </label>
            <input
              type="number"
              id="requestedAmount"
              placeholder="Enter amount"
              value={requestedAmount}
              onChange={(e) => setRequestedAmount(e.target.value)}
              className="block w-full p-3 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Request Button */}
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600"
            >
              Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestPaymentForm;
