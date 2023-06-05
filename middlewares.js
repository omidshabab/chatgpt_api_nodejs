const HTTP_STATUS = require("./status");

const verifyApiKey = async (req, res, next) => {
    try{
        let apikey = req.header("Authorization");

        if (!apikey) {
        return res.status(403).send("Send your OpenAI API Key through header");
        }

        //
        
        next()
    } catch (err) {
        res.status(500).json({
            status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
            data: err.message,
          });
    }
}

module.exports = {
    verifyApiKey,
}