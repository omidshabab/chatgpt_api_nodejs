const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { verifyApiKey } = require("./middlewares");
const router = require("./routes")

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/v1", verifyApiKey, router)

app.listen(8800, () =>
  console.log("AI server started on http://localhost:8800")
);
