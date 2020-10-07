import { GetDateFromElastic } from './elasticConnector'
import { GetAllPicturesOfEntities } from './s3Connector'
import axios, { AxiosError } from 'axios';

function GetFullResponse(reqBody: any, entities: string[]) {
    axios.all([
        axios.post('http://localhost:8081/search', reqBody),
        //axios.post('http://localhost:8082/getphotos', entities)
    ]).then(axios.spread((...responses) => {
            const responseOne = responses[0].data;
            //const responseTwo = responses[1];
            console.log(responseOne);
          //  console.log(responseTwo);
        })).catch((error: AxiosError<Error>) => {
            return error;
        });
}

export { GetFullResponse }

