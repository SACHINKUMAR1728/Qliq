import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import useContractStore from "../context/Web3Context";
import { fetchJsonFromIpfs } from "../function/getcid.js";

const ScriptsDisplay = () => {
  const { getCidOfPublisher, account } = useContractStore();
  const [scripts, setScripts] = useState([]);

  useEffect(() => {
    const fetchPublisherData = async () => {
      try {
        // Get CID of the publisher
        const cid = await getCidOfPublisher(account);
        console.log(`Publisher CID: ${cid}`);

        // Fetch data from IPFS using the CID
        const publisherData = await fetchJsonFromIpfs(cid);
        console.log(publisherData)
        // Set the scripts from the fetched data
        if (publisherData) {
          setScripts(publisherData);
        } else {
          console.warn("No scripts found in publisher data");
        }
      } catch (error) {
        console.error("Error fetching publisher data:", error);
      }
    };

    if (account) {
      fetchPublisherData();
    }
  }, [account, getCidOfPublisher]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C]">
      <div className="w-full max-w-4xl p-6 space-y-6 border border-teal-500 shadow-lg bg-white/10 backdrop-blur-lg rounded-xl">
        {scripts.length > 0 ? (
          scripts.map((script, index) => (
            <div key={index} className="space-y-4">
              {/* Script Title */}
              <div className="p-4 rounded-lg shadow-md bg-gradient-to-r from-teal-500 to-emerald-500">
                <h3 className="text-lg font-semibold text-white">
                  {script.title}
                </h3>
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
          ))
        ) : (
          <p className="text-gray-300">No scripts available to display.</p>
        )}
      </div>
    </div>
  );
};

export default ScriptsDisplay;
