import express from "express";
const app = express();

import { verifyCredentialsHandler } from "./verify.js";

app.use(
  express.json({
    limit: "50mb",
  })
); // for parsing application/json

app.post("/credentials/verify", verifyCredentialsHandler);

const port = 3000;
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
