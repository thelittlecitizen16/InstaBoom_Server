import express = require('express');
const app: express.Application = express();
const port = 9000
import { GetFullResponse } from './controllers/unionController'

app.use(express.json());
app.use(express.urlencoded());
//app.use(require('./router'));

let json = {"match":{"lpr":["6455196","2352432"],"sensorId":["122","66"]}, "fields":["image", "entityId", "metadata" ,"algorithmName","algorithmResults", "updatedAt"], 
"paging":{"from":0,"size":40}};
let entities = ["d3f537ff-8d6f-461f-b9f5-28a30717c4aa","f1e3f6c2-9fad-430f-82c2-00b0e20384f4"];

console.log("start")
GetFullResponse(json,entities);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



