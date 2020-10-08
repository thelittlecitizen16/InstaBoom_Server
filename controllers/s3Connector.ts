import axios, { AxiosError } from 'axios';

async function GetAllPicturesOfEntities(entities: string[], resData: any): Promise<any> {
    return await axios.post('http://localhost:8082/getphotos', { "entities": entities })
        .then(response => {
            let result = resData;
            result.hits.forEach((element: { _source: { [x: string]: string; }; }) => {
                let entityId = element._source.entityId;
                element._source["picture"] = response.data[entityId]
            });

            return result;
        }).catch((error: AxiosError<Error>) => {
        });
}

export { GetAllPicturesOfEntities }