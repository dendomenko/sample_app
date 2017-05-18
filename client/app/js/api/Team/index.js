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
    create: create,
    fetch : fetch,
    update: update
};

