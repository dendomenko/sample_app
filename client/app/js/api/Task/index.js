import Api from 'api';
import { FailueRequest, SuccessRequest } from 'utils/handle-request';

/**
 *
 */
const fetchAll = () => ({});

/**
 *
 * @param project_id
 */
const path = project_id => (`projects/${project_id}/tasks`);
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


/**
 *
 */
const update = () => Api.put()
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
    create: create,
    update: update,
    remove: remove,
};
