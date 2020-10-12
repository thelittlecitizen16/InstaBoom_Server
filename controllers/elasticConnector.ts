import axios, { AxiosError } from 'axios';
import { GetAllPicturesOfEntities } from './s3Connector'

async function GetDateFromElastic(reqBody: any) {
    return await axios.post('http://localhost:8081/search', reqBody)
        .then(async (res) => {
            let entities: string[] = new Array<string>();
            if (res.data.total?.value === 0) {
                return res.data;
            }
            entities = res.data.hits.map((d: { _source: { entityId: any; }; }) => d._source.entityId);
            return GetAllPicturesOfEntities(entities, res.data);
        }).catch((error: AxiosError<Error>) => {
            return error;
        });
}

async function AddEntityToArchive(entityId: string): Promise<any> {
    return axios.post(`http://localhost:8081/archive/${entityId}`)
        .then(res => {
            return res.data;
        }).catch((error: AxiosError<Error>) => {
            return error;
        });
}

export { GetDateFromElastic, AddEntityToArchive }