const express = require("express")
const { createCompletion } = require("./controllers")

const router = express.Router()

router.post("/completions", createCompletion)

module.exports = router