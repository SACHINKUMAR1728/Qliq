import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import useContractStore from "../context/Web3Context";

const ScriptsDisplay = () => {
  const { getCidOfPublisher, account } = useContractStore();
  const [publisherCid, setPublisherCid] = useState(null);

  useEffect(() => {
    const fetchPublisherCid = async () => {
      try {
        // Get the CID of the publisher
        const cid = await getCidOfPublisher(account);
        console.log(`Publisher CID: ${cid}`);
        setPublisherCid(cid);
      } catch (error) {
        console.error("Error fetching publisher CID:", error);
      }
    };

    if (account) {
      fetchPublisherCid();
    }
  }, [account, getCidOfPublisher]);

  const scripts = [
    {
      title: "Embed Ad Script",
      code: `
        // Save your wallet address in localStorage under the key 'QLIQ_NFT_WALLET'
        localStorage.setItem('QLIQ_NFT_WALLET', 'your-wallet-address-here');

        // Script to dynamically fetch and display ads
        (function () {
          const walletAddress = localStorage.getItem('QLIQ_NFT_WALLET');
          if (!walletAddress) {
            console.error('No wallet address found in localStorage. Please set QLIQ_NFT_WALLET.');
            return;
          }

          const publisherCid = '${publisherCid}'; // Publisher CID
          const apiUrl = \`http://3.110.178.91:3000/\${publisherCid}/serve/\${walletAddress}\`;

          // Fetch the ad content
          fetch(apiUrl)
            .then(response => {
              if (!response.ok) {
                throw new Error('Failed to fetch ad content');
              }
              return response.text();
            })
            .then(adHtml => {
              // Inject the ad content into the page
              const adContainer = document.getElementById('qliq-ad-container');
              if (adContainer) {
                adContainer.innerHTML = adHtml;
              } else {
                console.warn('Ad container element not found on the page.');
              }
            })
            .catch(error => {
              console.error('Error fetching ad content:', error);
            });
        })();
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
        ))}

        {/* Instructions */}
        <div className="p-4 mt-6 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500">
          <h3 className="text-lg font-semibold text-white">Instructions:</h3>
          <ul className="mt-2 text-gray-100 list-disc list-inside">
            <li>Save your wallet address in the browser's localStorage using the key <code>QLIQ_NFT_WALLET</code>.</li>
            <li>Add the provided script to your website inside a <code>&lt;script&gt;</code> tag.</li>
            <li>Create a <code>&lt;div&gt;</code> with the ID <code>qliq-ad-container</code> where the ad should be displayed.</li>
            <li>The script will dynamically fetch and display ads based on the publisher's CID and the user's wallet address.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScriptsDisplay;
