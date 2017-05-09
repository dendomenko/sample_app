import Api from 'api';
import { Session } from 'utils/Session';
const apiPath = '/projects';

/**
 *  GET ALL PROJECTS
 */

const config = {
    headers: {
        'Authorization': Session.getToken()
    }
}
;
const fetchProjects = () => Api.get( apiPath, config )
    .then( res => res.data )
    .catch( error => {
        throw error;
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
        throw error;
    } );

/**
 *
 * @type {{fetchALL: (()=>Promise.<T>), create: ((p1:{name?: *, task_name?: *, description?: *})=>(*)), remove: string}}
 */
export const apiProject = {
    fetchALL: fetchProjects,
    create  : createProject,
    remove  : ''
};