const axios = require('axios');

exports.handler = async (event) => {
    const cid = event.cid; // Ensure the event contains the CID

    const gatewayUrl = process.env.IPFS_GATEWAY_URL;
    const url = `${gatewayUrl}/ipfs/${cid}`;

    try {
        const response = await axios.get(url);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        return {
            statusCode: error.response ? error.response.status : 500,
            body: JSON.stringify({
                message: 'Failed to retrieve data from IPFS',
                error: error.response ? error.response.data : error.message,
            }),
        };
    }
};
