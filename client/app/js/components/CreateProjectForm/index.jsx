// @flow
import React from 'react';
import { Field, reduxForm, filterProps, SubmissionError } from 'redux-form/immutable';
import { Button, Form, TextArea } from 'semantic-ui-react';
import { createProject } from 'actions/project/all-projects';
import { validate } from './validate';
import asyncValidation from './../../utils/asyn-validate';
/**
 * TODO: should add validate;
 * @param props
 */
const renderField = ( { input, placeholder, type, meta: { touched, error } } ) => {
//    console.log( 'HAS EROROR', props );
    return (
        <Form.Field>
            <label>{placeholder}</label>

            <input type={type} placeholder={placeholder} {...input}/>
            {touched && error && <span>{error}</span>}
        </Form.Field>
    );
};
const renderTextArea = props =>
    (
        <Form.Field>
            <label>{props.placeholder}</label>
            <TextArea placeholder={props.placeholder} autoHeight {...props.input}/>
            {props.meta.touched && props.error && <span>{props.meta.error}</span>}
        </Form.Field>
    );


//For any field errors upon submission (i.e. not instant check)
const validateAndCreatePost = ( { name, task_name, description }, dispatch ) => {

    return new Promise( ( resolve, reject ) => {
        dispatch(
            {
                type: 'CREATE_PROJECT',
                name, task_name, description,
                resolve, reject
            } );
    } ).catch( error => {
        throw new SubmissionError( error );
    } );
};


let newProject = ( props ) => {

    console.info( props );
    const { error, handleSubmit, pristine, submitting } = props;
    return (
        <Form as='form' onSubmit={ handleSubmit( validateAndCreatePost ) }>
            {error && <strong>{error}</strong>}
            <Field name="name" component={renderField} placeholder="Name of project" type="text"/>
            <Field name="task_name" component={renderField} placeholder="Task name" type="text"/>
            <Field name="description" component={renderTextArea} placeholder="Description"/>
            <div>
                <Button type="submit">Create</Button>
            </div>
        </Form>
    );
};

// Decorate the form component
newProject = reduxForm( {
    form: 'newProject',
    validate
} )( newProject );

export default newProject;