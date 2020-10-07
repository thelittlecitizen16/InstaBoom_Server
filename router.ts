import express = require('express');
import { GetDateFromElastic } from './controllers/elasticConnector'

var router = express.Router();

function CreateError(error : any)
{
    return {"error": error}
}
router.post('/search',async(req, res) => {
    try {
        GetDateFromElastic(req.body)
        .then((response)=>{
            res.json(response);
        });
    } catch (error) {
        res.status(500).json(CreateError(error));
    }
});

module.exports = router;