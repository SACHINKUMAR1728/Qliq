async function fetchJsonFromIpfs(cid) {
    const url = `https://gateway.moralisipfs.com/ipfs/${cid}`; // Moralis IPFS gateway URL
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json(); // Parse the JSON data
      return data;
    } catch (error) {
      console.error('Error fetching JSON from IPFS:', error);
      throw error;
    }
  }
  
  export { fetchJsonFromIpfs };
  