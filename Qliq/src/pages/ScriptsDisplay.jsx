import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const ScriptsDisplay = () => {
  const scripts = [
    {
      title: "Script for Personalised Ads",
      code: `
        // This is a dummy script for Square
        function calculateSquare(side) {
          return side * side;
        }
        console.log(calculateSquare(5));
      `,
    },
    {
      title: "Script for Random Ads",
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C]">
      <div className="w-full max-w-4xl p-6 space-y-6 border border-teal-500 shadow-lg bg-white/10 backdrop-blur-lg rounded-xl">
        {scripts.map((script, index) => (
          <div key={index} className="space-y-4">
            {/* Script Title */}
            <div className="p-4 rounded-lg shadow-md bg-gradient-to-r from-teal-500 to-emerald-500">
              <h3 className="text-lg font-semibold text-white">{script.title}</h3>
            </div>

            {/* Script Code with Syntax Highlighting */}
            <div className="p-4 bg-gray-900 rounded-lg shadow-md">
              <SyntaxHighlighter
                language="javascript"
                style={vscDarkPlus}
                customStyle={{
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "#1e293b",
                  fontSize: "0.9rem",
                }}
              >
                {script.code}
              </SyntaxHighlighter>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScriptsDisplay;
