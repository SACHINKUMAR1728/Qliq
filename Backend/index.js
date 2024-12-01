import express from 'express';
import {serveAd} from './functions/serve.js';
const app = express();
const port = 3000;



 app.get('/:websiteid/serve/:variable', serveAd);

 app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
