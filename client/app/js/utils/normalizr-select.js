import { generate } from 'shortid';
export const normalizeUsers = ( { users }, exclude_id ) =>
    users
        .filter( item =>
        item.id !== exclude_id )
        .map( item => ({
            key  : generate(),
            text : item.name,
            value: item.id,
            image: item.avatar.thumb
        }) );


export const normalizeRoles = ( { roles } ) => roles.map( item => ({
    key  : generate(),
    name : item,
    value: item
}) );