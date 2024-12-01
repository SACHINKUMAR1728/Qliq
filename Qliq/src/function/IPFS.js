import axios from "axios"
const createIPFS = async (jsonObject) => {
    const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
    const headers = {
        'Content-Type': 'application/json',
        pinata_api_key: "82b30dbc9d68727d64a0",
        pinata_secret_api_key: "7d0e537076ced5e182c31370ecb404ae9456d5b8c55533721c77915ea359c934",
    };

    try {
        const response = await axios.post(url, jsonObject, { headers });
        console.log('IPFS Hash:', response.data); // Logs the IPFS hash
        return response.data.IpfsHash; // Return the response data containing IPFS hash and more
    } catch (error) {
        console.error('Error uploading to IPFS:', error.response ? error.response.data : error.message);
        throw new Error('Failed to upload JSON to IPFS');
    }
};

export {createIPFS}