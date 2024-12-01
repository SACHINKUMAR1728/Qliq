const axios = require('axios');

async function retrieveFromIPFS(cid, gatewayUrl) {
    const url = `${gatewayUrl}/ipfs/${cid}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to retrieve data: ${error.response ? error.response.data : error.message}`);
    }
}

// Usage example:
const cid = 'QmVQeqxtBRJkabEvP2Eo4DSxdYiVrEqep4UQDZnrJrZdfc';
const gatewayUrl = 'https://gateway.pinata.cloud'; // Replace with your preferred gateway URL

retrieveFromIPFS(cid, gatewayUrl)
    .then(data => console.log(data))
    .catch(error => console.error(error));
