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

/**
 *  Common action for all requests
 * @param type
 * @param payload
 */
export const createRequest = ( type, payload = {} ) => ({
    type,
    payload
});