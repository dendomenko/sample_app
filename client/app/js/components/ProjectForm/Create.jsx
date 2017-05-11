import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { SubmissionError } from 'redux-form';
import { Button, Message, Form } from 'semantic-ui-react';
import { createProject } from './../../actions/project/all-projects';
import { InputField, TextareaField } from './../FormFileds';
import asyncSubmit from './../../utils/async-validate';


/**
 * TODO: make reusable function
 * @param values
 * @param dispatch
 * @param reset
 */
const syncSubmit = ( values, dispatch, reset ) =>
    asyncSubmit( values, dispatch, reset ).then( ( res ) => {
        reset();
    } ).catch( e => {
        console.log( e );
        throw new SubmissionError( e.errors );
    } );

const CreateForm = ( props ) => {

    const { error, handleSubmit, submitting } = props;

    return (
        <div>

            <Form className='attached fluid segment' onSubmit={handleSubmit( syncSubmit )}>
                <Field name="name" label="Name" component={InputField}/>
                <Field name="task_name" label="Task Name" component={InputField} required/>
                <Field name="description" label="Description" component={TextareaField}/>
                <Button fluid type="submit" disabled={submitting}>Submit</Button>
            </Form>

            {error && <Message attached='bottom' error>
                {error}
            </Message>}
        </div>
    );
};


export default reduxForm( {
    form: 'ProjectCreate',
} )( CreateForm );