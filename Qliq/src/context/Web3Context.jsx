// // /src/context/Web3Context.js
// import React, { createContext, useContext, useEffect, useState } from 'react';
// import Web3 from 'web3';
// import useContractStore from '../store/userContractStore';

// // Create Web3 Context
// const Web3Context = createContext();

// export const Web3Provider = ({ children }) => {
//   const [web3, setWeb3] = useState(null);

//   // Initialize web3 and contract once when app loads
//   useEffect(() => {
//     const initializeWeb3 = async () => {
//       if (window.ethereum) {
//         try {
//           const web3 = new Web3(window.ethereum);
//           await window.ethereum.request({ method: 'eth_requestAccounts' });
          
//           // Update Zustand store
//           useContractStore.getState().initialize(web3);
          
//           setWeb3(web3); // Set web3 in context
//         } catch (error) {
//           console.error('Error initializing Web3:', error);
//         }
//       } else {
//         console.error('Please install MetaMask!');
//       }
//     };

//     initializeWeb3();
//   }, []);

//   return (
//     <Web3Context.Provider value={{ web3 }}>
//       {children}
//     </Web3Context.Provider>
//   );
// };

// // Custom hook to access Web3 context
// export const useWeb3 = () => {
//   return useContext(Web3Context);
// };
