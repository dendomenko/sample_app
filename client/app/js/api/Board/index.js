import Api from 'api';
import { FailueRequest, SuccessRequest } from 'utils/handle-request';

/**
 * 
 */
const fetch = () => Api.get()
    .then( SuccessRequest )
    .catch( FailueRequest );


/**
 *
 */
const update = () => Api.get()
    .then( SuccessRequest )
    .catch( FailueRequest );


export const apiBoard = {
    update: update,
    fetch : fetch
};