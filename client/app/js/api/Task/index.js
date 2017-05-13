import Api from 'api';


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
const create = ( { id, name, description, status, executor_id } ) => Api.post( path( id ), {
    name,
    description,
    status,
    executor_id
} )
    .then( res => res.data )
    .catch( error => {
        throw  new Error( error );
    } );

/**
 *
 */
const update = () => Api.put()
    .then( res => res.data )
    .catch( error => {
        throw  new Error( error );
    } );

/**
 *
 * @param id
 */
const remove = ( id ) => Api.delete()
    .then( res => res.data )
    .catch( error => {
        throw  new Error( error );
    } );


export const apiTask = {
    create: create,
    update: update,
    remove: remove
};
