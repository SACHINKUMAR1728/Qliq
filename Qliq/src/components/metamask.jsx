import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const ConnectMetaMask = () => {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);
  const [hover, setHover] = useState(false);

  // Load wallet address from localStorage on component mount
  useEffect(() => {
    const savedAccount = localStorage.getItem('walletAddress');
    if (savedAccount) {
      setAccount(savedAccount);
    }
  }, []);

  // Function to connect to MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request accounts from MetaMask
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const walletAddress = accounts[0];
        setAccount(walletAddress); // Set the wallet address
        localStorage.setItem('walletAddress', walletAddress); // Save to localStorage
        console.log('Connected account:', walletAddress);
      } catch (err) {
        console.error('Error connecting to MetaMask:', err);
        setError('Failed to connect to MetaMask');
      }
    } else {
      setError('MetaMask is not installed. Please install MetaMask and try again.');
    }
  };

  // Function to fetch the connected account's balance
  const getBalance = async () => {
    if (account && window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        const formattedBalance = ethers.utils.formatEther(balance); // Convert balance to Ether
        console.log(`Balance of ${account}: ${formattedBalance} ETH`);
        alert(`Balance: ${formattedBalance} ETH`);
      } catch (err) {
        console.error('Error fetching balance:', err);
        setError('Failed to fetch balance');
      }
    }
  };

  // MetaMask-themed button styles
  const buttonStyle = {
    backgroundColor: '#F6851B',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const buttonHoverStyle = {
    backgroundColor: '#E2761B',
    transform: 'scale(1.05)',
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#131321] via-[#0E403E] to-[#11222C] overflow-hidden flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#0E403E] rounded-xl shadow-lg border border-teal-500/30 p-6 text-center">
        <img
          src="https://res.cloudinary.com/do5e8qwxk/image/upload/v1733082257/MetaMask_Fox.svg_lw0agx.webp"
          alt="MetaMask Logo"
          className="mx-auto mb-4 w-24 h-24"
        />
        <h1 className="text-4xl font-semibold text-white mb-6">Connect Your MetaMask Wallet</h1>
        <p className="text-lg text-white mb-8">
          Unlock the world of decentralized finance by connecting your MetaMask wallet. It's quick, easy, and secure!
        </p>
        
        {/* Connect Button */}
        {!account ? (
          <button
            onClick={connectWallet}
            style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="w-full flex items-center justify-center gap-3"
          >
            <img
              src="https://res.cloudinary.com/do5e8qwxk/image/upload/v1733082257/MetaMask_Fox.svg_lw0agx.webp"
              alt="MetaMask"
              className="w-6 h-6"
            />
            Connect to MetaMask
          </button>
        ) : (
          <div>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Connected Account:</strong> {account}
            </p>
            <button
              onClick={getBalance}
              style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="w-full flex items-center justify-center gap-3"
            >
              Show Balance
            </button>
          </div>
        )}

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default ConnectMetaMask;
