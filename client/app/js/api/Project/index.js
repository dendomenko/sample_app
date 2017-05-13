import Api from 'api';
import { Session } from 'utils/Session';
const apiPath = '/projects';

/**
 *  GET ALL PROJECTS
 */

/**
 *
 * @param config
 */
const fetchProjects = ( config ) => Api.get( apiPath, config )
    .then( res => res.data )
    .catch( error => {
        throw new Error( error );
    } );


/**
 * TODO: SHOULD add logo
 * @param name
 * @param task_name
 * @param description
 */
const createProject = ( { name, task_name, description } ) => Api.post( apiPath, {
    "name"       : name,
    "task_name"  : task_name,
    "description": description
} )
    .then( res => res.data )
    .catch( error => {
        throw new Error( error );
    } );


const fetchSingleProject = ( slug ) =>
    Api.get( `${apiPath}/${slug}` )
        .then( res => res.data )
        .catch( error => {
            throw new Error( error );
        } );

/**
 *
 * @type {{fetchALL: (()=>Promise.<T>), create: ((p1:{name?: *, task_name?: *, description?: *})=>(*)), remove: string}}
 */
export const apiProject = {
    fetchALL   : fetchProjects,
    create     : createProject,
    remove     : '',
    fetchSingle: fetchSingleProject
};