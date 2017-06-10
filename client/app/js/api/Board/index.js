import Api from 'api';
import { FailueRequest, SuccessRequest } from 'utils/handle-request';
import { Session } from './../../utils/Session';
/**
 *
 */

const path = ( project_id ) => (`/projects/${project_id}/tasks`);
const fetch = ( project_id, token ) => Api.get( path( project_id ), {
    headers: {
        Authorization: token || Session.getToken()
    }
} )
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