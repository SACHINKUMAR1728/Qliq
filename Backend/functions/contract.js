import ethers from "ethers"

const CONTRACT_ADDRESS = "0xFc4F6F2b7EC0935B7Bb7FAc81B015A2aD3AcDb0e";
const ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "newActiveAdsCid",
				"type": "string"
			}
		],
		"name": "ActiveAdsUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "advertiser",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "cid",
				"type": "string"
			}
		],
		"name": "AdvertiserCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "newCid",
				"type": "string"
			}
		],
		"name": "CidUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "advertiser",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "cid",
				"type": "string"
			}
		],
		"name": "createAdvertiser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "publisher",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "cid",
				"type": "string"
			}
		],
		"name": "createPublisher",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "PaymentRequested",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "PaymentTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "publisher",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "cid",
				"type": "string"
			}
		],
		"name": "PublisherCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "requestPayment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rewardAmount",
				"type": "uint256"
			}
		],
		"name": "RewardWithdrawn",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newActiveAdsCid",
				"type": "string"
			}
		],
		"name": "setActiveAds",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferPayment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "advertiser",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "newCid",
				"type": "string"
			}
		],
		"name": "updateAdvertiserCid",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "publisher",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "newCid",
				"type": "string"
			}
		],
		"name": "updatePublisherCid",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "getActiveAds",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "advertiser",
				"type": "address"
			}
		],
		"name": "getCidOfAdvertiser",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "publisher",
				"type": "address"
			}
		],
		"name": "getCidOfPublisher",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "isAdvertiser",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "isPublisher",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const provider = new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/7976187ac95f438fbba371d7e9ce487e");
const privateKey = "4ed69c3bd90e70270dd2e25189a94ab7666d8b0694b19008112febfdc721ce4d";
const wallet = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

console.log("Contract initialized");

export async function getCidOfAdvertiser(advertiserAddress) {
  try {
    return await contract.getCidOfAdvertiser(advertiserAddress);
  } catch (error) {
    console.error("Error getting CID of advertiser:", error);
    throw error;
  }
}

export async function getCidOfPublisher(publisherAddress) {
  try {
    return await contract.getCidOfPublisher(publisherAddress);
  } catch (error) {
    console.error("Error getting CID of publisher:", error);
    throw error;
  }
}

export async function isAdvertiser(userAddress) {
  try {
    return await contract.isAdvertiser(userAddress);
  } catch (error) {
    console.error("Error checking if user is an advertiser:", error);
    throw error;
  }
}

export async function isPublisher(userAddress) {
  try {
    return await contract.isPublisher(userAddress);
  } catch (error) {
    console.error("Error checking if user is a publisher:", error);
    throw error;
  }
}

export async function getOwner() {
  try {
    return await contract.owner();
  } catch (error) {
    console.error("Error fetching contract owner:", error);
    throw error;
  }
}

export async function createAdvertiser(advertiserAddress, cid) {
  try {
    const tx = await contract.createAdvertiser(advertiserAddress, cid);
    await tx.wait();
    return tx;
  } catch (error) {
    console.error("Error creating advertiser:", error);
    throw error;
  }
}

export async function createPublisher(publisherAddress, cid) {
  try {
    const tx = await contract.createPublisher(publisherAddress, cid);
    await tx.wait();
    return tx;
  } catch (error) {
    console.error("Error creating publisher:", error);
    throw error;
  }
}

export async function deposit(amount) {
  try {
    const tx = await contract.deposit({ value: ethers.utils.parseEther(amount.toString()) });
    await tx.wait();
    return tx;
  } catch (error) {
    console.error("Error depositing funds:", error);
    throw error;
  }
}

export async function requestPayment(amount) {
  try {
    const tx = await contract.requestPayment(amount);
    await tx.wait();
    return tx;
  } catch (error) {
    console.error("Error requesting payment:", error);
    throw error;
  }
}

export async function transferPayment(userAddress, amount) {
  try {
    const tx = await contract.transferPayment(userAddress, amount);
    await tx.wait();
    return tx;
  } catch (error) {
    console.error("Error transferring payment:", error);
    throw error;
  }
}

export async function updateAdvertiserCid(advertiserAddress, newCid) {
  try {
    const tx = await contract.updateAdvertiserCid(advertiserAddress, newCid);
    await tx.wait();
    return tx;
  } catch (error) {
    console.error("Error updating advertiser CID:", error);
    throw error;
  }
}

export async function updatePublisherCid(publisherAddress, newCid) {
  try {
    const tx = await contract.updatePublisherCid(publisherAddress, newCid);
    await tx.wait();
    return tx;
  } catch (error) {
    console.error("Error updating publisher CID:", error);
    throw error;
  }
}

export async function getActiveAds() {
  try {
    return await contract.getActiveAds();
  } catch (error) {
    console.error("Error fetching active ads CID:", error);
    throw error;
  }
}

export async function withdrawReward() {
  try {
    const tx = await contract.withdrawReward();
    await tx.wait();
    return tx;
  } catch (error) {
    console.error("Error withdrawing reward:", error);
    throw error;
  }
}
