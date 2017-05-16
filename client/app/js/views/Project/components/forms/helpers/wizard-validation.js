export default   values => {
    const errors = {};

    if (!values.get( 'name' )) {
        errors.name = 'Required';
    }
    else
        if (values.get( 'name' ) &&
            ( values.get( 'name' ).length > 3 ) && values.get( 'name' ).length < 15) {
            errors.name = 'Should be more then 3 and less 15';
        }
    if (!values.get( 'task_name' )) {
        errors.task_name = 'Required';
    }
    else
        if (values.get( 'task_name' ) &&
            (values.get( 'task_name' ).length > 2) &&
            (values.get( 'task_name' ).length < 6 )) {
            errors.task_name = 'Should be more then 2 and less 6';
        }
    if (!values.get( 'team_name' )) {
        errors.team_name = 'Required';
    }
    if (
        values.get( 'team_name' )
        &&
        values.get( 'team_name' ).length < 3) {
        errors.team_name = 'Should be more 3 c';
    }

    return errors;
};