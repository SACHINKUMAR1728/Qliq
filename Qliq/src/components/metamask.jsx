import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';
import useContractStore from '../context/Web3Context.jsx';

const ConnectMetaMask = () => {
  const [account, setAccount] = useState(null);
  const { isPublisher, isadvertiser, isInitialized } = useContractStore();
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // To handle navigation
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const savedAccount = localStorage.getItem('walletAddress');
    if (savedAccount) {
      setAccount(savedAccount);
    }
  }, []);

  useEffect(() => {
    const checkAccountRole = async () => {
      if (account && isInitialized) {
        try {
          const publisher = await isPublisher(account);
          const advertiser = await isadvertiser(account);

          if (publisher) {
            console.log("Account is a publisher. Redirecting to /publisher...");
            navigate('/dashboard/publisher'); // Redirect to /publisher
          } else if (advertiser) {
            console.log("Account is an advertiser. Redirecting to /advertiser...");
            navigate('/dashboard/advertiser'); // Redirect to /advertiser
          } else {
            console.log("Account is neither a publisher nor an advertiser. Redirecting to /login/new...");
            navigate('/login/new'); // Redirect to /login/new
          }
        } catch (err) {
          console.error("Error checking account role:", err);
          setError('Failed to verify account role.');
        }
      }
    };

    checkAccountRole();
  }, [account, isPublisher, isadvertiser, isInitialized, navigate]);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const walletAddress = accounts[0];
        setAccount(walletAddress);
        localStorage.setItem('walletAddress', walletAddress);
        console.log('Connected account:', walletAddress);
      } catch (err) {
        console.error('Error connecting to MetaMask:', err);
        setError('Failed to connect to MetaMask');
      }
    } else {
      setError('MetaMask is not installed. Please install MetaMask and try again.');
    }
  };

  const getBalance = async () => {
    if (account && window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        const formattedBalance = ethers.utils.formatEther(balance);
        console.log(`Balance of ${account}: ${formattedBalance} ETH`);
        alert(`Balance: ${formattedBalance} ETH`);
      } catch (err) {
        console.error('Error fetching balance:', err);
        setError('Failed to fetch balance');
      }
    }
  };

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
