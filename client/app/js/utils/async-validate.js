/**
 *
 * @param values
 * @param dispatch
 * @param action
 * @returns {Promise}
 */
export default function ( values, dispatch, action ) {
    return new Promise( ( resolve, reject ) => {
        const data = values.toJS();

        dispatch( action( {
            data,
            resolve,
            reject
        } ) );
    } );
}