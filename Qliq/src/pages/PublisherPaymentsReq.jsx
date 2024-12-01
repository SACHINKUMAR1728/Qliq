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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C]">
      <div className="w-full max-w-md p-8 bg-[#0E403E] rounded-xl shadow-lg border border-teal-500/30">
        <form className="space-y-6" onSubmit={handleRequest}>
          {/* Current Balance */}
          <div>
            <label className="block text-sm font-medium text-teal-400">
              Current Balance
            </label>
            <div className="block w-full p-4 mt-2 text-lg font-semibold text-center text-gray-100 bg-gray-900 rounded-lg shadow-inner">
              ${currentBalance.toFixed(2)}
            </div>
          </div>

          {/* Requested Amount */}
          <div>
            <label
              htmlFor="requestedAmount"
              className="block text-sm font-medium text-teal-400"
            >
              Requested Amount
            </label>
            <input
              type="number"
              id="requestedAmount"
              placeholder="Enter amount"
              value={requestedAmount}
              onChange={(e) => setRequestedAmount(e.target.value)}
              className="block w-full p-3 mt-2 text-gray-100 placeholder-gray-400 bg-gray-800 border rounded-lg shadow-sm border-teal-500/30 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          {/* Request Button */}
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-3 text-sm font-medium text-white rounded-lg shadow-md bg-gradient-to-r from-teal-500 to-emerald-500 hover:opacity-90"
            >
              Request Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestPaymentForm;
