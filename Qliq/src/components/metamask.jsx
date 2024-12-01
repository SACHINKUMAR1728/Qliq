import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const ConnectMetaMask = () => {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

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
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const buttonHoverStyle = {
    backgroundColor: '#E2761B',
    transform: 'scale(1.05)',
  };

  const [hover, setHover] = useState(false);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>MetaMask Connection</h1>
      {!account ? (
        <button
          onClick={connectWallet}
          style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Connect to MetaMask
        </button>
      ) : (
        <div>
          <p>
            <strong>Connected Account:</strong> {account}
          </p>
          <button
            onClick={getBalance}
            style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Show Balance
          </button>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ConnectMetaMask;
