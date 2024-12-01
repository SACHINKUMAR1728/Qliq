import React from "react";

const ScriptsDisplay = () => {
  const scripts = [
    {
      title: "Script for Square",
      code: `
        // This is a dummy script for Square
        function calculateSquare(side) {
          return side * side;
        }
        console.log(calculateSquare(5));
      `,
    },
    {
      title: "Script for Rectangle",
      code: `
        // This is a dummy script for Rectangle
        function calculateRectangle(length, breadth) {
          return length * breadth;
        }
        console.log(calculateRectangle(5, 10));
      `,
    },
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
      <div className="w-full max-w-3xl space-y-6">
        {scripts.map((script, index) => (
          <div key={index} className="space-y-2">
            {/* Script Title */}
            <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">{script.title}</h3>
            </div>

            {/* Script Code */}
            <div className="p-6 bg-pink-100 rounded-lg shadow-md">
              <pre className="overflow-auto text-sm text-blue-700 whitespace-pre-wrap">
                {script.code}
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScriptsDisplay;