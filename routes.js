const express = require("express")
const { 
    // CREATE
    createCompletion,
    
    // READ
    listModels,

    // UPDATE

    // DELETE

} = require("./controllers")

const router = express.Router()

// CREATE
router.post("/completions", createCompletion)

// READ
router.get("/models", listModels)

// UPDATE

// DELETE

module.exports = router