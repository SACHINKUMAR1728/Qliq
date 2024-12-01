const axios = require('axios');

exports.handler = async (event) => {
    const jsonObject = event.body; // Ensure the event body contains the JSON object

    const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
    const headers = {
        'Content-Type': 'application/json',
        pinata_api_key: process.env.PINATA_API_KEY,
        pinata_secret_api_key: process.env.PINATA_API_SECRET,
    };

    try {
        const response = await axios.post(url, jsonObject, { headers });
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        return {
            statusCode: error.response ? error.response.status : 500,
            body: JSON.stringify({
                message: 'Failed to upload JSON',
                error: error.response ? error.response.data : error.message,
            }),
        };
    }
};
