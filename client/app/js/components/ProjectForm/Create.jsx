import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { SubmissionError, reset } from 'redux-form';
import { Button, Message, Form } from 'semantic-ui-react';
import { createProject } from './../../actions/project/all-projects';
import { InputField, TextareaField } from './../FormFileds';
import asyncSubmit from './../../utils/async-validate';


/**
 *
 * @param values
 * @param dispatch
 */
const syncSubmit = ( values, dispatch ) =>
    asyncSubmit( values, dispatch, createProject )
        .then( ( res ) => {
            dispatch( reset( 'ProjectCreate' ) );
        } ).catch( e => {
        console.log( e );
        throw new SubmissionError( e.errors );
    } );

/**
 *
 * @param error
 * @param handleSubmit
 * @param submitting
 * @returns {XML}
 * @constructor
 */
const CreateForm = ( { error, handleSubmit, submitting } ) => {

    return (
        <div>

            <Form className='attached fluid segment' onSubmit={handleSubmit( syncSubmit )}>
                <Field name="name" label="Name" component={InputField}/>
                <Field name="task_name" label="Task Name" component={InputField} required/>
                <Field name="description" label="Description" component={TextareaField}/>
                <Button fluid type="submit" inverted color='blue' loading={submitting}
                        disabled={submitting}>Submit</Button>
            </Form>

            {
                error && <Message attached='bottom' error>
                    {error}
                </Message>
            }
        </div>
    );
};


export default reduxForm( {
    form: 'ProjectCreate',
} )( CreateForm );