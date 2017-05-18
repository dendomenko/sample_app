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
    Api.put( '/team' )
        .then( SuccessRequest )
        .catch( FailueRequest );


const add = ( { user_id, project_id, role } ) =>
    Api.post( `projects/${project_id}/adduser` )
        .then( SuccessRequest )
        .catch( FailueRequest );

const add_members = ( { user_id, project_id, role } ) =>
    Api.post( `projects/${project_id}/adduser` )
        .then( SuccessRequest )
        .catch( FailueRequest );
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

