export const SuccessRequest = ( response ) => response.data;
export const FailueRequest = ( error ) => {
    throw new Error( error.response.data.code.toString() );
};

