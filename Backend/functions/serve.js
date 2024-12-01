import fetch from 'node-fetch';

async function serveAd(req, res) {
    const { websiteid, variable } = req.params;

    // CIDs for publisher data and active ads
    const publisherCid = 'QmPzPRD96jXUTaUE1m6mcPziGEmHmNyhJbKoMYK7RyPXWh';
    const activeAdsCid = 'QmUSNtMbxMWp3xBCe6jm4uuNxnFuiBF7ZLuZrARZCzGFMi';

    try {
        // Fetch publisher data
        const publisherResponse = await fetch(`https://ipfs.io/ipfs/${publisherCid}`);
        if (!publisherResponse.ok) {
            throw new Error(`Failed to fetch publisher data: ${publisherResponse.statusText}`);
        }
        const publisherData = await publisherResponse.json();
        const publisherTags = publisherData.Tags || [];

        // Fetch active ads data
        const adsResponse = await fetch(`https://ipfs.io/ipfs/${activeAdsCid}`);
        if (!adsResponse.ok) {
            throw new Error(`Failed to fetch active ads data: ${adsResponse.statusText}`);
        }
        const adsData = await adsResponse.json();
        const activeAssets = adsData.active_assets || [];

        // Function to calculate the number of matching tags
        const countMatchingTags = (adTags) => {
            return adTags.filter(tag => publisherTags.includes(tag)).length;
        };

        // Find the ad with the most matching tags
        let bestAd = null;
        let maxMatches = 0;

        for (const ad of activeAssets) {
            const adTags = ad.tags || [];
            const matches = countMatchingTags(adTags);

            if (matches > maxMatches) {
                maxMatches = matches;
                bestAd = ad;
            }
        }

        if (bestAd) {
            // Generate HTML response
            const htmlContent = `
                <div>
                    <img src="${bestAd.image_url}" alt="${bestAd.asset_name}" style="max-width:100%;height:auto;">
                    <p>Ad by Qliq</p>
                </div>
            `;
            res.send(htmlContent);
        } else {
            res.status(404).send('No matching advertisement found.');
        }
    } catch (error) {
        console.error('Error fetching data from IPFS:', error);
        res.status(500).send('Internal server error.');
    }
}

export { serveAd };
