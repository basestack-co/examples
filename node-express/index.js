const express = require("express");
const dotenv = require("dotenv");
const FlagsJS = require("@basestack/flags-js-sdk").default;
const app = express();
const port = 3000;

dotenv.config({ path: "./.env" });

const sdk = new FlagsJS({
  apiUrl: process.env.BASESTACK_API_URL,
  projectKey: process.env.BASESTACK_PROJECT_KEY,
  envKey: process.env.BASESTACK_ENVIRONMENT_KEY,
});

app.get("/", async (req, res) => {
  try {
    const flags = await sdk.flagAsync("header");

    if (flags.enabled) {
      res.send("Header is enabled");
    } else {
      res.send("Header is disabled");
    }
  } catch (e) {
    res.send(e);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
