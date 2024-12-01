const { GoogleGenerativeAI } = require('@google/generative-ai');

// Secure API key retrieval
const apiKey = "AIzaSyBPRDjQ-Euzbg02taGXJv5MCmeTKoqPl-U";
if (!apiKey) {
  throw new Error('Google Generative AI API key is not set. Please set GOOGLE_GENERATIVE_AI_API_KEY environment variable.');
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
});

const generationConfig = {
  temperature: 0.7, // Slightly reduced for more consistent results
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

const extractTags = async (jsonArray, tagSet) => {
  const extractTagsWithRetry = async (item, retries = 2) => {
    const prompt = `Given the following NFT details:
    Name: ${item.name}
    Description: ${item.description}
    Identify which of the following tags are relevant: ${Array.from(tagSet).join(', ')}.
    List the relevant tags separated by commas. If no tags apply, return "None".`;

    try {
      const result = await model.generateContent({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig,
      });

      const response = await result.response;
      const text = response.text();

      // Process tags, handling "None" case
      const tags = text.toLowerCase().trim() === 'none' 
        ? [] 
        : text.split(',').map(tag => tag.trim()).filter(tag => tag);

      return {
        ...item,
        tags,
      };
    } catch (error) {
      console.error(`Error processing item ${item.name}:`, error);
      
      if (retries > 0) {
        console.log(`Retrying item ${item.name}...`);
        return extractTagsWithRetry(item, retries - 1);
      }
      
      return {
        ...item,
        tags: [],
        error: error.message,
      };
    }
  };

  // Use Promise.all for concurrent processing
  return Promise.all(jsonArray.map(extractTagsWithRetry));
};

// Example usage with error handling
const nftData = [
  {
    contractAddress: '0x877bc0ae1736aa9af975517151fb59aad52a9424',
    tokenId: '0x0000000000000000000000000000000000000000000000000000000000000001',
    name: 'ContribNFT - Beginner Git',
    description:
      "This NFT is awarded for making 50 contributions as a beginner in Git. It recognizes the recipient's first steps in contributing to open-source projects.",
    imageUrl:
      'https://ihhplayer.s3.ap-south-1.amazonaws.com/nftgitnft/images/Octopus+Mascot.webp',
  },
  {
    contractAddress: '0x079a1e0c6c4c943b31614119f5756ce2585b34c5',
    tokenId: '0x0000000000000000000000000000000000000000000000000000000000000000',
    name: 'Legendary Sword',
    description:
      'A rare sword for use in the Dragon Quest blockchain game.',
    imageUrl:
      'ipfs://QmcPC1gzbTfpWheD4CpWgf1UhP37eFPzS1W6J6RumGVx98/gaming%20nft.webp',
  },
];

const tagsToExtract = new Set(['Git', 'open-source', 'blockchain', 'game', 'NFT']);

const main = async () => {
  try {
    const results = await extractTags(nftData, tagsToExtract);
    console.log(JSON.stringify(results, null, 2));
  } catch (error) {
    console.error('Failed to extract tags:', error);
  }
};

main();