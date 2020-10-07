import axios, { AxiosError } from 'axios';

async function GetDateFromElastic(reqBody : any) : Promise<any>{
     axios.post('http://localhost:8081/search', reqBody)
    // .then(res => {
    //   return res.data;
    // }).catch((error: AxiosError<Error>) => {
    //     return error;
    // });
}

async function AddEntityToArchive(entityId: string) : Promise<any>{
    axios.get(`http://localhost:8081/archive/d/${entityId}`)
//    .then(res => {
//      return res.data;
//    }).catch((error: AxiosError<Error>) => {
//        return error;
//    });
}

export { GetDateFromElastic, AddEntityToArchive }