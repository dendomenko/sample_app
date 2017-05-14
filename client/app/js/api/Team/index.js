// @flow
import Api from 'api';

type Props = {
    name: string,
    project_id: number,
    users: array<number>
}
const create = ( { name, project_id, users }: Props ) =>
    Api.post( '/teams', { name, project_id, users } )
        .then( res => res.data )
        .catch( e => {
            throw new Error( e );
        } );

const update = ( { name, project_id, users }: Props ) =>
    Api.put( '/team' )
        .then( res => res.data )
        .catch( e => {
            throw new Error( e );
        } );


export const apiTeam = {
    create: create
};