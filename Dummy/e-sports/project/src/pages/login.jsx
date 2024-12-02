import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const MetaMaskLogin = () => {
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState(null);

  // Check if MetaMask is installed
  const checkMetaMaskInstalled = () => {
    if (typeof window.ethereum === "undefined") {
      alert("MetaMask is not installed! Please install it from https://metamask.io.");
      return false;
    }
    return true;
  };

  // Connect to MetaMask
  const connectMetaMask = async () => {
    if (!checkMetaMaskInstalled()) return;

    try {
      // Request account access
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

      // Set the first account
      const userAccount = accounts[0];
      setAccount(userAccount);

      // Set the provider (for interacting with Ethereum)
      const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(tempProvider);

      // Set connection status to true
      setIsConnected(true);

      // Optionally, listen to account changes (MetaMask network switching, etc.)
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleChainChanged);

      // Log user account for demo purposes
      console.log("Connected Account:", userAccount);
    } catch (error) {
      console.error("Error connecting MetaMask", error);
      alert("Failed to connect MetaMask");
    }
  };

  // Handle account change
  const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      alert("Please connect to MetaMask.");
    } else {
      setAccount(accounts[0]);
    }
  };

  // Handle network change
  const handleChainChanged = () => {
    window.location.reload();
  };

  // Disconnect MetaMask (optional)
  const disconnectMetaMask = () => {
    setAccount(null);
    setIsConnected(false);
    setProvider(null);
  };

  return (
    <div className="App">
      {!isConnected ? (
        <button
          onClick={connectMetaMask}
          className="px-4 py-2 mt-4 text-white bg-teal-600 rounded-md hover:bg-teal-700"
        >
          Connect MetaMask
        </button>
      ) : (
        <div>
          <p className="text-white">Connected Account: {account}</p>
          <button
            onClick={disconnectMetaMask}
            className="px-4 py-2 mt-4 text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Disconnect MetaMask
          </button>
        </div>
      )}
    </div>
  );
};

export default MetaMaskLogin;
