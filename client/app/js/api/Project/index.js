import Api from 'api';

const apiPath = '/projects';

/**
 *  GET ALL PROJECTS
 */
const fetchProjects = () => Api.get( apiPath )
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