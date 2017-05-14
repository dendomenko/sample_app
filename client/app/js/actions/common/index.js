import { Map } from 'immutable';
/**
 *
 * @param type
 * @param error
 */
export const handleRequestFailure = ( type, error ) => ({
    type   : type,
    payload: Map( {
        error: new Error( error )
    } )
});