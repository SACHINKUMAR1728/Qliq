import fetch from 'node-fetch';
import { fetchJsonFromIpfs } from '../functions/fetchcid.js';
import { getActiveAds } from './contract.js';

async function serveAd(req, res) {
    const { websiteid, walletaddress } = req.params;

    try {
        console.log('=== Advertisement Selection Process Started ===');

        // Retrieve Publisher CID and Active Ads CID
        console.log('Retrieving Publisher CID and Active Ads CID...');
        const publisherCid = websiteid;
        const activeAdsCid = await getActiveAds();

        console.log(`Publisher CID: ${publisherCid}`);
        console.log(`Active Ads CID: ${activeAdsCid}`);

        // Fetch publisher data
        console.log('Fetching Publisher Data from IPFS...');
        console.log(publisherCid)
        const publisherData = await fetchJsonFromIpfs(publisherCid);
        const publisherTags = Array.isArray(publisherData.Tags) ? publisherData.Tags : [];
        console.log('Publisher Tags:', publisherTags);

        // Fetch user's NFT data
        console.log(`Fetching NFT Data for Wallet Address: ${walletaddress}`);
        const nftResponse = await fetch('https://4biws7mm6gl27vlfl7n5mau2eu0msnyu.lambda-url.us-east-1.on.aws/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ walletAddress: walletaddress }),
        });

        if (!nftResponse.ok) {
            throw new Error(`Failed to fetch NFT data: ${nftResponse.statusText}`);
        }

        const nftData = await nftResponse.json();
        console.log('NFT Data:', nftData);

        // Extract tags directly from NFT data
        console.log('Extracting Tags from NFT Data...');
        const extractedTags = nftData.reduce((acc, nft) => {
            if (Array.isArray(nft.tags)) {
                acc.push(...nft.tags);
            }
            return acc;
        }, []);
        console.log('Extracted Tags:', extractedTags);

        // Combine publisher tags and user NFT tags
        const combinedTags = new Set([...publisherTags, ...extractedTags]);
        console.log('Combined Tags:', Array.from(combinedTags));

        // Fetch active ads data
        console.log('Fetching Active Ads Data from IPFS...');
        const adsData = await fetchJsonFromIpfs(activeAdsCid);
        const activeAssets = Array.isArray(adsData.active_assets) ? adsData.active_assets : [];
        console.log('Active Ads:', activeAssets);

        // Function to calculate the number of matching tags
        const countMatchingTags = (adTags) => {
            return adTags.filter(tag => combinedTags.has(tag)).length;
        };

        // Find the ad with the most matching tags
        console.log('Selecting the Best Ad...');
        let bestAd = null;
        let maxMatches = 0;

        for (const ad of activeAssets) {
            const adTags = Array.isArray(ad.tags) ? ad.tags : [];
            const matches = countMatchingTags(adTags);

            console.log(`Ad: ${ad.asset_name}, Matches: ${matches}`);
            if (matches > maxMatches) {
                maxMatches = matches;
                bestAd = ad;
            }
        }

        if (bestAd) {
            console.log('Best Ad Selected:', bestAd);

            // Generate HTML response
            const htmlContent = `
                <div style="text-align:center;">
                    <img src="${bestAd.image_url}" alt="${bestAd.asset_name}" style="max-width:100%; height:auto;">
                    <p>Ad by Qliq</p>
                </div>
            `;
            res.send(htmlContent);
        } else {
            console.log('No Matching Advertisement Found.');
            res.status(404).send('No matching advertisement found.');
        }

        console.log('=== Advertisement Selection Process Completed ===');
    } catch (error) {
        console.error('Error Processing Advertisement Selection:', error.message);
        res.status(500).send('Internal server error.');
    }
}

export { serveAd };
