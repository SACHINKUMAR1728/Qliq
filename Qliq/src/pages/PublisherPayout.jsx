import React from "react";
import Sidebar from "../components/sideBar";

const PaymentsPage = () => {
  const payments = [
    { description: "Last Payment", status: "Pending" },
    { description: "Last Payment", status: "Completed" },
  ];

  return (
    <div className="flex h-screen bg-blue-50">
      {/* Sidebar */}
      <Sidebar
        title="Payments"
        links={["Home", "Websites", "Analytics", "Payment"]}
      />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <header className="flex items-center justify-between p-6 bg-blue-100 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-blue-700">Payments</h1>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            Request
          </button>
        </header>

        {/* Payment Details List */}
        <div className="mt-6">
          {payments.map((payment, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 mb-4 bg-yellow-100 rounded-lg shadow-sm"
            >
              <span className="text-gray-700">{payment.description}</span>
              <span
                className={`font-medium ${
                  payment.status === "Pending"
                    ? "text-red-500"
                    : "text-green-500"
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