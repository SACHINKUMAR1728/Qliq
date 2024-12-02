import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
import Metrics from "../components/metrics";
import Campaigns from "../components/Campaigns";
import { faEye, faMousePointer, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { fetchJsonFromIpfs } from "../function/getcid.js";
import useContractStore from "../context/Web3Context";


const DashboardAdvertiser = () => {
  const { account, getCidOfAdvertiser } = useContractStore();
  const [metrics, setMetrics] = useState({
    impressions: null,
    clicks: null,
    ctr: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        if (!account) {
          throw new Error("Account not connected");
        }

        // Retrieve the CID associated with the advertiser's account
        const cid = await getCidOfAdvertiser(account);
        if (!cid) {
          throw new Error("No CID found for the advertiser");
        }

        // Fetch the JSON data from IPFS using the retrieved CID
        const data = await fetchJsonFromIpfs(cid);
        // Update the metrics state with the fetched data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, [account, getCidOfAdvertiser]);

  return (
    <div className="flex h-screen bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <header className="p-6 bg-[#104543] rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-white">Advertiser Dashboard</h1>
        </header>

        {/* Dashboard Content */}
        <main className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Metrics */}
          {loading ? (
            <p className="text-white">Loading metrics...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : (
            <>
              <Metrics
                title="Impressions"
                value={metrics.impressions}
                percentage={0} // Replace with actual percentage change if available
                icon={faEye} // FontAwesome Eye Icon
              />
              <Metrics
                title="Clicks"
                value={metrics.clicks}
                percentage={0} // Replace with actual percentage change if available
                icon={faMousePointer} // FontAwesome Click Icon
              />
              <Metrics
                title="Campaigns"
                value={`${metrics.ctr}%`}
                percentage={0} // Replace with actual percentage change if available
                icon={faChartLine} // FontAwesome Chart Icon
              />
            </>
          )}

          {/* Campaigns Component */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 max-w-screen-lg mx-auto">
            {/* Additional content can be added here */}
          </div>
        </main>
        <Campaigns />
      </div>
    </div>
  );
};

export default DashboardAdvertiser;
