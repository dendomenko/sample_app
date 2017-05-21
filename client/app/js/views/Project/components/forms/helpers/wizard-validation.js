export default   values => {
    const errors = {};

    if (!values.get( 'name' )) {
        errors.name = 'Required';
    }
    else
        if (values.get( 'name' ) &&
            ( values.get( 'name' ).length > 15 )
        ) {
            errors.name = 'Must be 15 characters or less';
        }
    if (!values.get( 'task_name' )) {
        errors.task_name = 'Required';
    }
    else
        if (values.get( 'task_name' ) &&
            (values.get( 'task_name' ).length < 2)
        ) {
            errors.task_name = 'Should be 2 characters or more';
        }
    if (!values.get( 'team_name' )) {
        errors.team_name = 'Required';
    }
    if (
        values.get( 'team_name' )
        &&
        values.get( 'team_name' ).length < 3) {
        errors.team_name = 'Should be more 3 characters or more';
    }

    return errors;
};