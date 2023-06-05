
const createCompletion = async (req, res) => {
    try{
        //
    } catch(err) {
        res.status(500).json({
            status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
            data: err.message,
          });
    }
}

module.exports = {
    createCompletion,
}