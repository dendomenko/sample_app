export default function ( values, dispatch, action ) {
    return new Promise( ( resolve, reject ) => {
        dispatch( action( { values, resolve, reject } ) );
    } );
}