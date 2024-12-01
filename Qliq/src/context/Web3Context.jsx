import { create } from 'zustand';
import { ethers } from 'ethers';
import abi from '../../abi/unfold.json'; // Replace with correct ABI path

// const contractAddress = "0xf6bdb7b25e92b708fb7cc898aaf77b7e8a0a43ec"; // old
const contractAddress = "0xFc4F6F2b7EC0935B7Bb7FAc81B015A2aD3AcDb0e"; //new

const useContractStore = create((set, get) => ({
  account: 'not connected',
  contract: null,
  contractForRead: null,
  provider: null,
  signer: null,
  network: null,
  isInitialized: false,
  loading: false,
  error: null,

  // Initialize contract
  initializeContract: async (account) => {
    const { isInitialized } = get();
    if (isInitialized) {
      console.log("Contract is already initialized.");
      return; // Prevent re-initialization
    }

    try {
      console.log("Initializing contract...");
      set({ loading: true, error: null });

      const { ethereum } = window;
      if (!ethereum) {
        console.error("MetaMask is not installed!");
        throw new Error('MetaMask is not installed. Please install MetaMask and try again.');
      }

      // Use Web3Provider instead of BrowserProvider for MetaMask
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      console.log("Connected to network:", network);

      // Get the signer from the provider
      const signer = provider.getSigner();
      console.log("Signer initialized");

      // Connect contract with signer
      const contractWithSigner = new ethers.Contract(contractAddress, abi, signer);
      const contractWithProvider = new ethers.Contract(contractAddress, abi, provider); // For read-only operations
      console.log("Contract initialized:", contractWithSigner);

      // Listen for account and network changes
      ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          console.log("Account changed to:", accounts[0]);
          set({ account: accounts[0] });
        } else {
          console.log("Account disconnected");
          set({ account: 'not connected' });
        }
      });

      ethereum.on('chainChanged', () => {
        console.log("Chain changed. Reloading...");
        window.location.reload();
      });

      set({
        account,
        provider,
        signer,
        contract: contractWithSigner,
        contractForRead: contractWithProvider, // For read-only calls
        network,
        isInitialized: true,
        loading: false,
        error: null,
      });

    } catch (error) {
      console.error("Error during contract initialization:", error);
      set({ error: error.message, loading: false });
    }
  },

  // Contract function: createAdvertiser
  createAdvertiser: async (advertiser, cid) => {
    try {
      const { isInitialized, contract, provider, signer } = get();
    
      // Check if the contract and signer are properly initialized
      if (!isInitialized) throw new Error("Contract is not initialized yet.");
      if (!signer) throw new Error("Signer is not available.");
      if (!provider) throw new Error("Provider is not available.");
    
      // Create a contract instance with the signer
      const contractWithSigner = contract.connect(signer);
    
      // Send the transaction
      const tx = await contractWithSigner.createAdvertiser(advertiser, cid);
      console.log("Transaction sent:", tx.hash);
    
      // Wait for the transaction to be confirmed
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
      const { isInitialized, contract } = get();
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
      const { isInitialized, contract } = get();
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
      const { isInitialized, contract } = get();
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
      const { isInitialized, contract } = get();
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
      const { isInitialized, contract } = get();
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
      const { isInitialized, contract } = get();
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
      const { isInitialized, contract } = get();
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
      const { isInitialized, contract } = get();
      if (!isInitialized) throw new Error("Contract is not initialized yet.");
      const cid = await contract.getCidOfPublisher(publisher);
      console.log("CID of publisher:", cid);
      return cid;
    } catch (error) {
      console.error("Error calling getCidOfPublisher:", error);
      set({ error: error.message });
    }
  },

  // Check if address is advertiser
  isAdvertiser: async (address) => {
    try {
      const { isInitialized, contractForRead } = get();
      if (!isInitialized) throw new Error("Contract is not initialized yet.");
      const isAdv = await contractForRead.isAdvertiser(address);
      console.log("isAdvertiser:", isAdv);
      return isAdv;
    } catch (error) {
      console.error("Error calling isAdvertiser:", error);
      set({ error: error.message });
    }
  },

  // Check if address is publisher
  isPublisher: async (address) => {
    try {
      const { isInitialized, contractForRead } = get();
      if (!isInitialized) throw new Error("Contract is not initialized yet.");
      const isPub = await contractForRead.isPublisher(address);
      console.log("isPublisher:", isPub);
      return isPub;
    } catch (error) {
      console.error("Error calling isPublisher:", error);
      set({ error: error.message });
      return false;
    }
  },
  getcidofactiveads: async () => {
    try{
      const {isInitialized,contractForRead} = get();
      if(!isInitialized) throw new Error("Contract is not initialized yet.");
      const cid = await contractForRead.getActiveAds();
      console.log("CID of active ads:",cid);
      return cid;
    }
    catch (error) {
      console.error("Error calling isPublisher:", error);
      set({ error: error.message });
      return false;
    }
  },
  updateactiveadcid: async (cid) =>{
    try {
      const {isInitialized, contract} = get();
      if(!isInitialized) throw new Error("Contract is not initialized yet.");
      const tx = await contract.setActiveAds(cid);
      console.log("Transaction sent:", tx.hash);
      await tx.wait();
      console.log("Transaction confirmed:", tx);
      
    } catch (error) {
      console.error("Error updatingactive cids:", error);
      set({ error: error.message });
    }
  }
}));

export default useContractStore;
