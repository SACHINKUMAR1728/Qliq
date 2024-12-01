// import create from 'zustand/vanilla'; // Corrected import
// import Web3 from 'web3';

// // Zustand store for smart contract interactions
// const useContractStore = create((set) => ({
//   web3: null,
//   contract: null,
//   account: null,
//   data: null,

//   // Initialize the web3 provider and contract
//   initialize: async (web3) => {
//     try {
//       const accounts = await web3.eth.getAccounts();
//       const contractAddress = '0xYourContractAddress'; // Replace with your contract address
//       const abi = [
//         // Add your contract ABI here
//         {
//           "constant": true,
//           "inputs": [],
//           "name": "getRandomNumber",
//           "outputs": [
//             {
//               "name": "",
//               "type": "uint256"
//             }
//           ],
//           "payable": false,
//           "stateMutability": "view",
//           "type": "function"
//         },
//         {
//           "constant": false,
//           "inputs": [
//             {
//               "name": "_value",
//               "type": "uint256"
//             }
//           ],
//           "name": "setValue",
//           "outputs": [],
//           "payable": false,
//           "stateMutability": "nonpayable",
//           "type": "function"
//         }
//       ];

//       const contract = new web3.eth.Contract(abi, contractAddress);

//       set({
//         web3,
//         contract,
//         account: accounts[0],
//       });
//     } catch (error) {
//       console.error('Error initializing contract:', error);
//     }
//   },

//   // Function to get a random number from the contract
//   getRandomNumber: async () => {
//     const { contract } = useContractStore.getState();
//     if (contract) {
//       try {
//         const randomNumber = await contract.methods.getRandomNumber().call();
//         set({ data: randomNumber });
//       } catch (error) {
//         console.error('Error fetching random number:', error);
//       }
//     }
//   },

//   // Function to set a value in the contract
//   setValue: async (value) => {
//     const { contract, account, web3 } = useContractStore.getState();
//     if (contract && account) {
//       try {
//         const tx = await contract.methods.setValue(value).send({ from: account });
//         console.log('Transaction successful:', tx);
//       } catch (error) {
//         console.error('Error setting value in contract:', error);
//       }
//     }
//   },
// }));

// export default useContractStore;
