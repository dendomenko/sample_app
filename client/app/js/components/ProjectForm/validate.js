export const validate = values => {
    const errors = {};
    console.warn( 'ERRROOOOO' );
    if (!values.get( 'name' )) {
        errors.name = 'Required';
    }
    if (!values.get( 'task_name' )) {
        errors.task_name = 'Required';
    }
    return errors;
};