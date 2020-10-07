import express = require('express');
import { GetFullResponse } from './controllers/unionController'

var router = express.Router();

function CreateError(error : any)
{
    return {"error": error}
}

router.post('/search',(req, res) => {
    try {
        //GetFullResponse();
    } catch (error) {
        res.status(500).json(CreateError(error));
    }
});