import Api from 'api';


const fetch = () => Api.get()
    .then( res => res.data )
    .catch( error => {
        throw new Error( error );
    } );


const update = () => Api.get()
    .then( res => res.data )
    .catch( error => {
        throw new Error( error );
    } );


export const apiBoard = {
    update: update,
    fetch : fetch
};