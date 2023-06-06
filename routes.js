const express = require("express")
const { 
    // CREATE
    createCompletion,
    
    // READ
    listModels,
    retrieveModel,

    // UPDATE

    // DELETE

} = require("./controllers")

const router = express.Router()

// CREATE
router.post("/completions", createCompletion)

// READ
router.get("/models", listModels)
router.get("/models/:model", retrieveModel)

// UPDATE

// DELETE

module.exports = router