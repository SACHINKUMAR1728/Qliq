import React from "react";
import Sidebar from "../components/sideBar";

const PaymentsPage = () => {
  const payments = [
    { description: "Last Payment", status: "Pending" },
    { description: "Last Payment", status: "Completed" },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C]">
      {/* Sidebar */}
      <Sidebar title="Payments" links={["Home", "Websites", "Analytics", "Payments"]} />

      {/* Main Content */}
      <div className="flex-1 px-8 py-6 overflow-auto">
        {/* Header */}
        <header className="flex items-center justify-between p-6 shadow-md bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl">
          <h1 className="text-2xl font-bold text-white">Payments</h1>
          <button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg hover:bg-teal-600">
            Request Payment
          </button>
        </header>

        {/* Payment Details List */}
        <div className="mt-8 space-y-4">
          {payments.map((payment, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-900 rounded-lg shadow-md"
            >
              <span className="text-sm font-medium text-gray-300">{payment.description}</span>
              <span
                className={`px-3 py-1 text-sm font-medium rounded-lg ${
                  payment.status === "Pending"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-green-500/20 text-green-400"
                }`}
              >
                {payment.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
