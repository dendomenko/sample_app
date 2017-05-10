export default function ( values, action ) {
    return new Promise( ( resolve, reject ) => {
        debugger;
        for ( let prop in values ) {
            if (values[ prop ]) {
                reject( new Error( `${prop} is undefined` ) );
            }
        }

        if (typeof action !== 'function') {
            reject( new Error( 'action is not a function' ) );
        }
        else
            resolve( action() );

    } );
}