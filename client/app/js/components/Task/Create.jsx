import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import  { SubmissionError, change } from  'redux-form';
import { Button, Message, Form } from 'semantic-ui-react';
import asyncSubmit from './../../utils/async-validate';
import { InputField, TextareaField } from './../FormFileds';
import { createTask } from './../../actions/Task';
const { DOM: { input } } = React;

const syncSubmit = ( values, dispatch ) => {


    return asyncSubmit( values, dispatch, createTask )
        .then( res => {
            console.info( 'RES', res );
        } )
        .catch( e => {
            throw SubmissionError( e.errors );
        } );
};

/**
 *
 * @param error
 * @param handleSubmit
 * @param submitting
 * @constructor
 */
const CreateTask = ( { project_id, error, handleSubmit, submitting } ) => (
    <div>

        <Form
            className='attached fluid segment'
            onSubmit={handleSubmit( syncSubmit )}>

            <Field name="title" label="Title" component={InputField}/>
            <Field name="description" label="Description" component={TextareaField}/>
            <Field name="id" type="hidden" component="input"/>

            <Button fluid type="submit" inverted color='blue' loading={submitting}
                    disabled={submitting}>Create</Button>
        </Form>

        {
            error && <Message attached='bottom' error>
                {error}
            </Message>
        }
    </div>
);


function mapStateToProps( state ) {
    return {
        initialValues: {
            id: state.getIn( [ 'single', 'id' ] )
        }
    };
}


/**
 *
 */
export default reduxForm( {
        form              : 'createTask',
        enableReinitialize: true
    }, mapStateToProps
)( CreateTask );
