import express from 'express';
import {serveAd} from './functions/serve.js';
import { contract } from './functions/contract.js';
const app = express();
const port = 3000;

const result = await contract;

 app.get('/:websiteid/serve/:variable', serveAd);

 app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
