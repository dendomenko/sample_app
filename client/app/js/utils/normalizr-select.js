// @flow
import { generate } from 'shortid';
/**
 *
 * @param users
 * @param exclude_id
 */
export const normalizeUsers = ( { users }: Array, exclude_id ?: number ): Array =>
    users
        .filter( item =>
        item.id !== exclude_id )
        .map( item => ({
            key  : generate(),
            text : item.name,
            value: item.id,
            image: item.avatar.thumb,
            id   : item.id
        }) );

/**
 *
 * @param roles
 */
export const normalizeRoles = ( { roles }: Array ): Array => roles.map( item => ({
    key  : generate(),
    name : item,
    value: item
}) );

/**
 *
 * @param data
 * @returns {{}}
 */
export const normalizeTaskMetaData = ( data: Object ): Array => {

    const normalize = {};

    for ( let prop in data ) {

        normalize[ prop ] = data[ prop ].map( item => ({
            key  : generate(),
            text : item.name,
            value: item.id
        }) );
    }

    return normalize;

};