// @flow
import Api from 'api';
import { FailueRequest, SuccessRequest } from 'utils/handle-request';


type Props = {
    name: string,
    project_id: number,
    users: array<number>
}
const create = ( { name, project_id, users }: Props ) =>
    Api.post( '/teams', {
        name,
        project_id,
        users
    } )
        .then( SuccessRequest )
        .catch( FailueRequest );


const update = ( { name, project_id, users }: Props ) =>
    Api.put( '/team', { name, project_id, users } )
        .then( SuccessRequest )
        .catch( FailueRequest );


const add = ( { user_id, project_id, role } ) =>
    Api.post( `projects/${project_id}/add-user`, { user_id, project_id, role } )
        .then( SuccessRequest )
        .catch( FailueRequest );

/**
 *
 * @param user_id
 * @param role
 * @param project_id
 * @returns {*|Promise.<T>}
 */
const add_members = ( { user_id, role, project_id } ) => {
    debugger;
    return Api.post( `/projects/${project_id}/add-user`, { user_id, role, project_id } )
        .then( SuccessRequest )
        .catch( FailueRequest );
};
/**
 *
 */
const fetch = () => Api.get( '/teams' )
    .then( SuccessRequest )
    .catch( FailueRequest );


/**
 *
 * @type {{create: ((p1:Props)=>(*))}}
 */
export const apiTeam = {
    create    : create,
    fetch     : fetch,
    update    : update,
    addMember : add,
    addMembers: add_members
};

