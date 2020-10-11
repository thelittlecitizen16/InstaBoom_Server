import express = require('express');
import { GetDateFromElastic, AddEntityToArchive } from './controllers/elasticConnector'

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

router.post(`/archive/:id`,async(req, res) => {
    try {
        AddEntityToArchive(req.params.id)
        .then((response)=>{
            res.json(response);
        });
    } catch (error) {
        res.status(500).json(CreateError(error));
    }
});

module.exports = router;