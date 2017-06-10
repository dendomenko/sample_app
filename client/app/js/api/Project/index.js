import Api from 'api';
import { Session } from 'utils/Session';
const apiPath = '/projects';
import { FailueRequest, SuccessRequest } from 'utils/handle-request';

/**
 *  GET ALL PROJECTS
 */

/**
 *
 * @param config
 */
const fetchProjects = ( config ) => Api.get( apiPath, config )
    .then( SuccessRequest )
    .catch( FailueRequest );


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
    .then( SuccessRequest )
    .catch( FailueRequest );


const fetchSingleProject = ( slug ) =>
    Api.get( `${apiPath}/${slug}` )
        .then( SuccessRequest )
        .catch( FailueRequest );


const fetchUsers = () =>
    Api.get( '/users' )
        .then( SuccessRequest )
        .catch( FailueRequest );


const fetchRoles = () =>
    Api.get( '/roles' )
        .then( SuccessRequest )
        .catch( FailueRequest );


const activityPath = ( id ) => (`/projects/${id}/activity `);

const fetchActivity = ( id_project ) => Api.get(
    activityPath( id_project ) )
    .then( SuccessRequest )
    .catch( FailueRequest );


/**
 *
 * @type {{fetchALL: (()=>Promise.<T>), create: ((p1:{name?: *, task_name?: *, description?: *})=>(*)), remove: string}}
 */
export const apiProject = {
    fetchALL   : fetchProjects,
    create     : createProject,
    remove     : '',
    fetchSingle: fetchSingleProject,
    fetchActivity,
    members    : {
        getRoles: fetchRoles,
        getUsers: fetchUsers
    }
};