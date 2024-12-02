import express from 'express';
import {serveAd} from './functions/serve.js';
import {
  getCidOfAdvertiser,
  getCidOfPublisher,
  isAdvertiser,
  isPublisher,
  getOwner,
  createAdvertiser,
  createPublisher,
  deposit,
  requestPayment,
  transferPayment,
  updateAdvertiserCid,
  updatePublisherCid,
  withdrawReward
} from "./functions/contract.js"
const app = express();
const port = 3000;


 app.get('/:websiteid/serve/:walletaddress', serveAd);

 app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
