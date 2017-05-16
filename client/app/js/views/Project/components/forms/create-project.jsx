import React from 'react';
import { Field, reduxForm, } from 'redux-form';
import { SubmissionError, reset } from 'redux-form';
import { Button, Message, Form } from 'semantic-ui-react';
import  { createRequest } from 'actions/common';
import { CREATE_PROJECT } from './../../constants/';
import { InputField, TextareaField } from 'components/FormFileds';
import asyncSubmit from 'utils/async-validate';
import { fromJS } from 'immutable';

const createProject = ( payload ) => createRequest( CREATE_PROJECT, payload );
/**
 *
 * @param values
 * @param dispatch
 */
const syncSubmit = ( values, dispatch ) => {

//    console.log( 's', getFormSyncErrors( values ) );
    return asyncSubmit( values, dispatch, createProject )
        .then( ( res ) => {
            dispatch( reset( 'ProjectCreate' ) );
        } ).catch( e => {
            console.log( e );
            throw new SubmissionError( e.errors );
        } );
};

/**
 *
 * @param error
 * @param handleSubmit
 * @param submitting
 * @returns {XML}
 * @constructor
 */


const renderField = ( { input, label, type, meta: { touched, error } } ) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

const CreateForm = ( { error, handleSubmit } ) => {
    console.log( arguments );
    return (
        <div>

            <Form
                className='attached fluid segment'
                onSubmit={handleSubmit}>
                <Field name="name" label="Name" component={renderField}/>
                <Field name="task_name" label="Task Name" component={renderField}/>
                <Field name="description" label="Description" component={TextareaField}/>
                <Button fluid type="submit"
                        inverted color='blue'
                >
                    Next
                </Button>
            </Form>

            {
                error && <Message attached='bottom' error>
                    {error}
                </Message>
            }
        </div>
    );
};


const validate = ( values ) => {
    const errors = {};
    console.info( 'VALUES', values );
    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.task_name) {
        errors.task_name = 'Required';
    }


    return errors;
};

export default reduxForm( {
    form                    : 'projectWizard',
    destroyOnUnmount        : false,
    forceUnregisterOnUnmount: true,
    validate
} )( CreateForm );