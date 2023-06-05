const express = require("express");
const dotenv = require("dotenv");
const { verifyApiKey } = require("./middlewares");
const router = require("./routes")

dotenv.config();

const app = express();

app.use("/v1", verifyApiKey, router)

app.listen(8800, () =>
  console.log("AI server started on http://localhost:8800")
);
