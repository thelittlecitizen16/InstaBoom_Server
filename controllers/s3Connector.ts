import axios, { AxiosError } from 'axios';

async function GetAllPicturesOfEntities(entities : string[]) : Promise<any>{
    axios.post('http://localhost:8082/getphotos', entities)
   .then(res => {
     return res.data;
   }).catch((error: AxiosError<Error>) => {
       return error;
   });
}

export { GetAllPicturesOfEntities }