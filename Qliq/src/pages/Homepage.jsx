import React, { useEffect, useState } from 'react';
import HeroSection from '../components/hero';
import useContractStore from '../context/Web3Context.jsx'; // Adjust the path if needed

export default function Homepage() {
  const { account, isPublisher, error, loading, isInitialized } = useContractStore();
  const [isPublisherAccount, setIsPublisherAccount] = useState(false);

  useEffect(() => {
    const setup = async () => {
      try {
        // Wait for initialization before proceeding
        if (!isInitialized) return;

        // Call isPublisher only after initialization
        const isPub = await isPublisher(account);
        setIsPublisherAccount(isPub);
      } catch (err) {
        console.error("Failed during setup:", err);
      }
    };

    setup();
  }, [isPublisher, account, isInitialized]);  

  return (
    <>
      <HeroSection />
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        {loading || !isInitialized ? (
          <p>Initializing contract... Please wait.</p>
        ) : error ? (
          <p style={{ color: 'red' }}>Error: {error}</p>
        ) : (
          <div>
            <p>Is Publisher: {isPublisherAccount ? 'Yes' : 'No'}</p>
          </div>
        )}
      </div>
    </>
  );
}
