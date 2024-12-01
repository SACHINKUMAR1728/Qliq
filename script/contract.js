const { ethers } = require("ethers");


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

async function main() {
    const provider = new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/7976187ac95f438fbba371d7e9ce487e");

    const privateKey = "4ed69c3bd90e70270dd2e25189a94ab7666d8b0694b19008112febfdc721ce4d";
    const wallet = new ethers.Wallet(privateKey, provider);

    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);
    console.log("Contract initialized");

    // Functions for contract interaction

    // Get CID of Advertiser
    async function getCidOfAdvertiser(advertiserAddress) {
        try {
            const cid = await contract.getCidOfAdvertiser(advertiserAddress);
            console.log(`CID of Advertiser: ${cid}`);
        } catch (error) {
            console.error("Error getting CID of advertiser:", error);
        }
    }

    // Get CID of Publisher
    async function getCidOfPublisher(publisherAddress) {
        try {
            const cid = await contract.getCidOfPublisher(publisherAddress);
            console.log(`CID of Publisher: ${cid}`);
        } catch (error) {
            console.error("Error getting CID of publisher:", error);
        }
    }

    // Check if user is an Advertiser
    async function isAdvertiser(userAddress) {
        try {
            const result = await contract.isAdvertiser(userAddress);
            console.log(`Is Advertiser: ${result}`);
        } catch (error) {
            console.error("Error checking advertiser:", error);
        }
    }

    // Check if user is a Publisher
    async function isPublisher(userAddress) {
        try {
            const result = await contract.isPublisher(userAddress);
            console.log(`Is Publisher: ${result}`);
        } catch (error) {
            console.error("Error checking publisher:", error);
        }
    }

    // Get contract owner
    async function getOwner() {
        try {
            const owner = await contract.owner();
            console.log(`Owner: ${owner}`);
        } catch (error) {
            console.error("Error getting owner:", error);
        }
    }

    // Create Advertiser
    async function createAdvertiser(advertiserAddress, cid) {
        try {
            const tx = await contract.createAdvertiser(advertiserAddress, cid);
            console.log(`Transaction hash: ${tx.hash}`);
            await tx.wait();
            console.log("Advertiser created successfully");
        } catch (error) {
            console.error("Error creating advertiser:", error);
        }
    }

    // Create Publisher
    async function createPublisher(publisherAddress, cid) {
        try {
            const tx = await contract.createPublisher(publisherAddress, cid);
            console.log(`Transaction hash: ${tx.hash}`);
            await tx.wait();
            console.log("Publisher created successfully");
        } catch (error) {
            console.error("Error creating publisher:", error);
        }
    }

    // Deposit funds
    async function deposit(amount) {
        try {
            const tx = await contract.deposit({ value: ethers.utils.parseEther(amount.toString()) });
            console.log(`Transaction hash: ${tx.hash}`);
            await tx.wait();
            console.log("Deposit successful");
        } catch (error) {
            console.error("Error depositing funds:", error);
        }
    }

    // Request Payment
    async function requestPayment(amount) {
        try {
            const tx = await contract.requestPayment(amount);
            console.log(`Transaction hash: ${tx.hash}`);
            await tx.wait();
            console.log("Payment requested successfully");
        } catch (error) {
            console.error("Error requesting payment:", error);
        }
    }

    // Transfer Payment
    async function transferPayment(userAddress, amount) {
        try {
            const tx = await contract.transferPayment(userAddress, amount);
            console.log(`Transaction hash: ${tx.hash}`);
            await tx.wait();
            console.log("Payment transferred successfully");
        } catch (error) {
            console.error("Error transferring payment:", error);
        }
    }

    // Update Advertiser CID
    async function updateAdvertiserCid(advertiserAddress, newCid) {
        try {
            const tx = await contract.updateAdvertiserCid(advertiserAddress, newCid);
            console.log(`Transaction hash: ${tx.hash}`);
            await tx.wait();
            console.log("Advertiser CID updated successfully");
        } catch (error) {
            console.error("Error updating advertiser CID:", error);
        }
    }

    // Update Publisher CID
    async function updatePublisherCid(publisherAddress, newCid) {
        try {
            const tx = await contract.updatePublisherCid(publisherAddress, newCid);
            console.log(`Transaction hash: ${tx.hash}`);
            await tx.wait();
            console.log("Publisher CID updated successfully");
        } catch (error) {
            console.error("Error updating publisher CID:", error);
        }
    }

    // Withdraw Reward
    async function withdrawReward() {
        try {
            const tx = await contract.withdrawReward();
            console.log(`Transaction hash: ${tx.hash}`);
            await tx.wait();
            console.log("Reward withdrawn successfully");
        } catch (error) {
            console.error("Error withdrawing reward:", error);
        }
    }

    // Test example usage
    const advertiserAddress = wallet.address;
    const cid = "exampleCID";
    await getOwner();
    await createAdvertiser(advertiserAddress, cid);
    await getCidOfAdvertiser(advertiserAddress);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
