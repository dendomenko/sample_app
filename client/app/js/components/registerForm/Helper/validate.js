/**
 *  // IMPORTANT: values is an Immutable.Map here!
 * @param values
 */
export const validate = values => {

    const errors = {};
    if ( !values.get( 'name' ) ) {
        errors.username = 'Required';
    } else if ( values.get( 'name' ).length > 15 ) {
        errors.username = 'Must be 15 characters or less';
    }
    if ( !values.get( 'email' ) ) {
        errors.email = 'Required';
    } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( values.get( 'email' ) ) ) {
        errors.email = 'Invalid email address';
    }
    if ( !values.get( 'pwd' ) ) {
        errors.pwd = 'Required';
    } else if ( ( values.get( 'pwd' ).length < 6 ) ) {
        errors.pwd = 'Must be 15 characters or more';
    }
    if ( !values.get( 'confirm_pwd' ) ) {
        errors.pwd = 'Required';
    } else if ( values.get( 'confirm_pwd' ) === values.get( 'pwd' ) ) {
        errors.pwd = 'Passwords do not match';
    }

    return errors;
};

