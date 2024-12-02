import axios from 'axios';

/**
 * Fetches JSON data from IPFS using the provided CID.
 *
 * @param {string} cid - The Content Identifier (CID) of the IPFS resource.
 * @returns {Promise<Object>} - A promise that resolves to the JSON data.
 * @throws {Error} Throws an error if the request fails or the response is not valid JSON.
 */
async function fetchJsonFromIpfs(cid) {
  if (!cid || typeof cid !== 'string') {
    throw new Error('Invalid CID provided. CID must be a non-empty string.');
  }

  // Define the primary and fallback IPFS gateways
  const gateways = [
    `https://gateway.moralisipfs.com/ipfs/${cid}`,
    `https://ipfs.io/ipfs/${cid}`, // Fallback gateway
  ];

  let lastError = null;

  for (const gateway of gateways) {
    try {
      console.log(`Attempting to fetch data from IPFS gateway: ${gateway}`);
      const response = await axios.get(gateway, { timeout: 10000 }); // 10-second timeout

      if (response.data) {
        console.log('Data successfully fetched from IPFS:', response.data);
        return response.data;
      } else {
        throw new Error(`Empty response from IPFS gateway: ${gateway}`);
      }
    } catch (error) {
      console.error(`Error fetching from gateway ${gateway}:`, error.message);
      lastError = error;
    }
  }

  // If all gateways fail, throw the last encountered error
  throw new Error(`Failed to fetch JSON from IPFS after trying all gateways. Last error: ${lastError.message}`);
}

export { fetchJsonFromIpfs };
