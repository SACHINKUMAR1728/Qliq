import fetch from 'node-fetch';
import { fetchJsonFromIpfs } from '../functions/fetchcid.js';
import { getCidOfAdvertiser } from './contract.js';

async function serveAd(req, res) {
    const { websiteid, walletaddress } = req.params;

    try {
        console.log('=== Advertisement Selection Process Started ===');

        // Retrieve Publisher CID and Active Ads CID
        console.log('Retrieving Publisher CID and Active Ads CID...');
        const publisherCid = websiteid;
        const activeAdsCid = await getCidOfAdvertiser("0xc484FeAf91DE9Eb965c3C0B31425cA9ce8C744e9");

        console.log(`Publisher CID: ${publisherCid}`);
        console.log(`Active Ads CID: ${activeAdsCid}`);

        // Fetch publisher data
        console.log('Fetching Publisher Data from IPFS...');
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
        const activeAssets = Array.isArray(adsData.assets) ? adsData.assets : [];
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

        // If no matching ad is found, select a random ad
        if (!bestAd && activeAssets.length > 0) {
            console.log('No matching ad found. Selecting a random ad.');
            bestAd = activeAssets[Math.floor(Math.random() * activeAssets.length)];
        }

        if (bestAd) {
            console.log('Ad to be served:', bestAd);

            // Record impression for Publisher
            console.log('Recording Publisher Impression...');
            await fetch('https://c316tf2op8.execute-api.ap-south-1.amazonaws.com/hh', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    collection_name: "publisher",
                    websiteid: websiteid,
                    timestamp: new Date().toISOString(),
                    event_type: "impression",
                }),
            });

            // Record impression for Advertiser
            console.log('Recording Advertiser Impression...');
            await fetch('https://c316tf2op8.execute-api.ap-south-1.amazonaws.com/hh', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    collection_name: "advertiser",
                    advertiser: "0xc484FeAf91DE9Eb965c3C0B31425cA9ce8C744e9",
                    ad_id: bestAd.asset_id,
                    timestamp: new Date().toISOString(),
                    event_type: "impression",
                }),
            });

            // Generate HTML response
            const htmlContent = `
                <div style="text-align:center;">
                    <img src="${bestAd.image_url}" alt="${bestAd.asset_name}" style="max-width:100%; height:auto;">
                    <p>Ad by Qliq</p>
                </div>
            `;
            res.send(htmlContent);
        } else {
            console.log('No Ads Available to Serve.');
            res.status(404).send('No advertisements available.');
        }

        console.log('=== Advertisement Selection Process Completed ===');
    } catch (error) {
        console.error('Error Processing Advertisement Selection:', error.message);
        res.status(500).send('Internal server error.');
    }
}

export { serveAd };
