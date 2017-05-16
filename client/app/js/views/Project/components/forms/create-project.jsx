import React from 'react';
import { Field, reduxForm, } from 'redux-form/immutable';
import { SubmissionError, reset } from 'redux-form';
import { Button, Message, Form } from 'semantic-ui-react';
import  { createRequest } from 'actions/common';
import { CREATE_PROJECT } from './../../constants/';
import { InputField, TextAreaField } from 'components/FormFileds';
import asyncSubmit from 'utils/async-validate';
import validate  from './helpers/wizard-validation';

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

const CreateForm = ( props ) => {
    console.log( 'form PROPS', props );
    return (
        <Form
            className='attached fluid segment'
            onSubmit={props.handleSubmit}>
            <Field name="name" label="Name" component={InputField}/>
            <Field name="task_name" label="Task Name" component={InputField}/>
            <Field name="description" label="Description" component={TextAreaField}/>
            <Button fluid type="submit"
                    inverted color='blue'
            >
                Next
            </Button>
        </Form>
    );
};


export default reduxForm( {
    form                    : 'projectWizard',
    destroyOnUnmount        : false,
    forceUnregisterOnUnmount: true,
    validate
} )( CreateForm );