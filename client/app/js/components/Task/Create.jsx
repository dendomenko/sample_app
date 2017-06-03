import React, { PureComponent } from 'react';
import { reduxForm, Field, reset, SubmissionError } from 'redux-form/immutable';

import { Button, Message, Form } from 'semantic-ui-react';

import asyncSubmit from './../../utils/async-validate';
import { InputField, TextAreaField, SelectField } from './../FormFileds';

import { createRequest } from '../../actions/common';
import { CREATE_TASK } from '../../constants/Task';

const createTask = ( payload ) => createRequest( CREATE_TASK, payload );

/**
 * TODO: need to refactor nad review
 */

class CreateTaskForm extends React.PureComponent {


    componentDidMount() {

        const { initialize, project_id, author_id } = this.props;


        initialize( {
            project_id : project_id,
            status_id  : 1,
            executor_id: author_id,
            creator_id : author_id
        } );
    }

    syncSubmit = ( values, dispatch ) =>
        asyncSubmit( values, dispatch, createTask )
            .then( () => {
                dispatch( reset( 'createTask' ) );
            } )
            .catch( e => {
                throw SubmissionError( e.errors );
            } );


    render() {


        const { submitting, error, handleSubmit, executors, metaData: { priority, type } } = this.props;


        return (
            <div>

                <Form as="form"
                      loading={submitting}
                      className='attached fluid segment'
                      onSubmit={handleSubmit( this.syncSubmit.bind( this ) )}>

                    <Field name="title" label="Summary" component={InputField}/>
                    <Field name="executor_id" label="Executor" options={
                        executors.toJS().map( exec => ({
                            key  : exec.id,
                            value: exec.id,
                            text : exec.name,
                        }) ) }
                           component={SelectField}/>
                    <Field name="type_id" readOnly label="Type" options={type} component={SelectField}/>
                    <Field name="priority_id" readOnly label="Priority" options={priority} component={SelectField}/>
                    <Field name="time_do" readOnly label="Original Estimate" component={InputField}/>
                    <Field name="description" label="Description" component={TextAreaField}/>


                    <Field name="creator_id" type="hidden" component="input"/>
                    <Field name="project_id" type="hidden" component="input"/>
                    <Field name="status_id" type="hidden" component="input"/>

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
    }
}


const validate = values => {

    const errors = {};

    if (!values.get( 'name' )) {
        errors.name = 'Required';
    }
    if (!values.get( 'type_id' )) {
        errors.type_id = 'Required';
    }
    if (!values.get( 'priority_id' )) {
        errors.priority_id = 'Required';
    }


    return errors;
};
/**
 *
 */
export default reduxForm( {
        form: 'createTask',
        validate
    }
)( CreateTaskForm );
