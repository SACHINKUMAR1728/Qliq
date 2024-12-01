import { create } from 'zustand';
import { ethers } from 'ethers';
import abi from '../../abi/web3.json'; // Replace with the correct ABI path

// Contract Address
const contractAddress = "0xf6bdb7b25e92b708fb7cc898aaf77b7e8a0a43ec";

// Zustand Store for Contract Interaction
const useContractStore = create((set,get) => {

  // Initialize the contract
  const initializeContract = async () => {
    try {
      console.log("Initializing contract...");
      set({ loading: true, error: null });

      const { ethereum } = window;

      if (!ethereum) {
        console.error("MetaMask is not installed!");
        throw new Error('MetaMask is not installed. Please install MetaMask and try again.');
      }

      // Request accounts and set the active account
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      console.log(`Connected account: ${account}`);

      // Initialize the provider
      const provider = new ethers.BrowserProvider(window.ethereum);

      const network = await provider.getNetwork();
      console.log("Connected to network:", network);

      // Initialize the signer
      const signer = provider.getSigner();
      console.log("Signer initialized");

      // Initialize the contract
      const contractWithSigner = new ethers.Contract(contractAddress, abi, signer);
      const contractWithProvider = new ethers.Contract(contractAddress, abi, provider); // For read-only operations
      console.log("Contract initialized:", contractWithSigner);

      // Listen for account changes
      ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          console.log("Account changed to:", accounts[0]);
          set({ account: accounts[0] });
        } else {
          console.log("Account disconnected");
          set({ account: 'not connected' });
        }
      });

      // Listen for chain changes
      ethereum.on('chainChanged', () => {
        console.log("Chain changed. Reloading...");
        window.location.reload();
      });

      // Update the state with initialized values
    //   set({ account, provider, signer, contract, network, loading: false, error: null });
      set({
        account,
        provider,
        signer,
        contract: contractWithSigner,
        contractForRead: contractWithProvider, // Add contract for read-only calls
        network,
        isInitialized: true,
        loading: false,
        error: null,
      });

    } catch (error) {
      console.error("Error during contract initialization:", error);
      set({ error: error.message, loading: false });
    }
  };

   initializeContract();

  return {
    account: 'not connected',
    contract: null,
    contractForRead: null,
    provider: null,
    signer: null,
    network: null,
    isInitialized: false,
    loading: false,
    error: null,
  // Contract function: createAdvertiser
  createAdvertiser: async (advertiser, cid) => {
    try {
      const { isInitialized,contract } = get();
      if (!isInitialized) throw new Error("Contract is not initialized yet.");
      const tx = await contract.createAdvertiser(advertiser, cid);
      console.log("Transaction sent:", tx.hash);
      await tx.wait();
      console.log("Transaction confirmed:", tx);
    } catch (error) {
      console.error("Error calling createAdvertiser:", error);
      set({ error: error.message });
    }
  },

  // Contract function: createPublisher
  createPublisher: async (publisher, cid) => {
    try {
      const {isInitialized, contract } = get();
      if (!isInitialized) throw new Error("Contract is not initialized yet.");
      const tx = await contract.createPublisher(publisher, cid);
      console.log("Transaction sent:", tx.hash);
      await tx.wait();
      console.log("Transaction confirmed:", tx);
    } catch (error) {
      console.error("Error calling createPublisher:", error);
      set({ error: error.message });
    }
  },

  // Contract function: deposit
  deposit: async (amount) => {
    try {
      const { isInitialized,contract } = get();
      if (!isInitialized) throw new Error("Contract is not initialized yet.");
      const tx = await contract.deposit({ value: ethers.utils.parseEther(amount.toString()) });
      console.log("Transaction sent:", tx.hash);
      await tx.wait();
      console.log("Transaction confirmed:", tx);
    } catch (error) {
      console.error("Error calling deposit:", error);
      set({ error: error.message });
    }
  },

  // Contract function: requestPayment
  requestPayment: async (amount) => {
    try {
      const { isInitialized,contract } = get();
      if (!isInitialized) throw new Error("Contract is not initialized yet.");
      const tx = await contract.requestPayment(amount);
      console.log("Transaction sent:", tx.hash);
      await tx.wait();
      console.log("Transaction confirmed:", tx);
    } catch (error) {
      console.error("Error calling requestPayment:", error);
      set({ error: error.message });
    }
  },

  // Contract function: transferPayment
  transferPayment: async (user, amount) => {
    try {
      const { isInitialized,contract } = get();
      if (!isInitialized) throw new Error("Contract is not initialized yet.");
      const tx = await contract.transferPayment(user, amount);
      console.log("Transaction sent:", tx.hash);
      await tx.wait();
      console.log("Transaction confirmed:", tx);
    } catch (error) {
      console.error("Error calling transferPayment:", error);
      set({ error: error.message });
    }
  },

  // Contract function: updateAdvertiserCid
  updateAdvertiserCid: async (advertiser, newCid) => {
    try {
      const { isInitialized,contract } = get();
      if (!isInitialized) throw new Error("Contract is not initialized yet.");
      const tx = await contract.updateAdvertiserCid(advertiser, newCid);
      console.log("Transaction sent:", tx.hash);
      await tx.wait();
      console.log("Transaction confirmed:", tx);
    } catch (error) {
      console.error("Error calling updateAdvertiserCid:", error);
      set({ error: error.message });
    }
  },

  // Contract function: updatePublisherCid
  updatePublisherCid: async (publisher, newCid) => {
    try {
      const { isInitialized,contract } = get();
      if (!isInitialized) throw new Error("Contract is not initialized yet.");
      const tx = await contract.updatePublisherCid(publisher, newCid);
      console.log("Transaction sent:", tx.hash);
      await tx.wait();
      console.log("Transaction confirmed:", tx);
    } catch (error) {
      console.error("Error calling updatePublisherCid:", error);
      set({ error: error.message });
    }
  },

  // Contract view function: getCidOfAdvertiser
  getCidOfAdvertiser: async (advertiser) => {
    try {
      const {isInitialized, contract } = get();
      if (!isInitialized) throw new Error("Contract is not initialized yet.");
      const cid = await contract.getCidOfAdvertiser(advertiser);
      console.log("CID of advertiser:", cid);
      return cid;
    } catch (error) {
      console.error("Error calling getCidOfAdvertiser:", error);
      set({ error: error.message });
    }
  },

  // Contract view function: getCidOfPublisher
  getCidOfPublisher: async (publisher) => {
    try {
      const { isInitialized,contract } = get();
      if (!isInitialized) throw new Error("Contract is not initialized yet.");
      const cid = await contract.getCidOfPublisher(publisher);
      console.log("CID of publisher:", cid);
      return cid;
    } catch (error) {
      console.error("Error calling getCidOfPublisher:", error);
      set({ error: error.message });
    }
  },
  isadvertiser: async (address) => {
    try {
      const { isInitialized,contractForRead } = get();
      if (!isInitialized) throw new Error("Contract is not initialized yet.");
      const isAdv = await contractForRead.isAdvertiser(address);
      console.log("isAdvertiser:", isAdv);
      return isAdv;
    } catch (error) {
      console.error("Error calling isAdvertiser:", error);
      set({ error: error.message });
    }
  },
  isPublisher: async (address) => {
    try {
      const { isInitialized,contractForRead } = get(); // Use read-only contract
      if (!isInitialized) throw new Error("Contract is not initialized yet.");
      if (!contractForRead) throw new Error("Contract is not initialized");
  
      const isPub = await contractForRead.isPublisher(address);
      console.log("isPublisher:", isPub);
      return isPub;
    } catch (error) {
      console.error("Error calling isPublisher:", error);
      set({ error: error.message });
      return false;
    }
  },
}
  
});

export default useContractStore;
