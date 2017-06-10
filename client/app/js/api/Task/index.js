import Api from 'api';
import { FailueRequest, SuccessRequest } from 'utils/handle-request';

/**
 *
 */


/**
 *
 * @param project_id
 */
const path = project_id => (`projects/${project_id}/tasks`);

/**
 *
 */
const fetchAll = ( project_id ) => Api.get( path( project_id ) )
    .then( SuccessRequest )
    .catch( FailueRequest );


/**
 *
 * @param id
 * @param name
 * @param description
 * @param status
 * @param executor_id
 */
const create = ( params ) => Api.post( path( params.project_id ), {
    ...params
} )
    .then( SuccessRequest )
    .catch( FailueRequest );


const updateTaskPath = ( id_project, id_task, ) => (`/projects/${id_project}/tasks/${id_task}`);


/**
 *
 */
const update = ( id_project, id_task, params ) => Api.put(
    updateTaskPath( id_project, id_task ), {
        ...params
    } )
    .then( SuccessRequest )
    .catch( FailueRequest );

/**
 *
 * @param id
 */
const remove = ( id ) => Api.delete()
    .then( SuccessRequest )
    .catch( FailueRequest );


export const apiTask = {
    fetchAll: fetchAll,
    create  : create,
    update  : update,
    remove  : remove,
};
