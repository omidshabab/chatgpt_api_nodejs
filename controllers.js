const request = require("request");
const HTTP_STATUS = require("./status");
const dotenv = require("dotenv")

dotenv.config()

// CREATE
const createCompletion = async (req, res) => {
    try{
        const {} = req.query;

        // RESPONSE
        res.status(200).json({
            status: HTTP_STATUS.OK,
            data: response,
        })
    } catch(err) {
        res.status(500).json({
            status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
            data: err.message,
          });
    }
}

// READ
const listModels = async (req, res) => {
    try{
        url = `${process.env.OPENAI_API_URL}/models`

        const response = request.post(url)

        // RESPONSE
        res.status(200).json({
            status: HTTP_STATUS.OK,
            data: response,
        })
    } catch(err) {
        res.status(500).json({
            status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
            data: err.message,
          });
    }
}

// UPDATE

// DELETE

module.exports = {
    createCompletion,
    listModels,
}