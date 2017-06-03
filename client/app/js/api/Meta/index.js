import Api from 'api';
import { FailueRequest, SuccessRequest } from 'utils/handle-request';


const getTaskMeta = () =>
    Api.get( '/helper/task_meta' )
        .then( SuccessRequest )
        .catch( FailueRequest );


export const apiMetaData = {
    getTaskMeta: getTaskMeta
};
