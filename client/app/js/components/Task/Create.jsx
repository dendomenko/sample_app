import React, { PureComponent } from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import  { SubmissionError, change } from  'redux-form';
import { Button, Message, Form } from 'semantic-ui-react';
import asyncSubmit from './../../utils/async-validate';
import { InputField, TextareaField } from './../FormFileds';
import { createTask } from './../../actions/Task';
const { DOM: { input } } = React;


/**
 * TODO: need to refactor nad review
 */

class CreateTaskForm extends React.PureComponent {


    componentDidMount() {

        const { initialize, project_id } = this.props;

        initialize( {
            id: project_id
        } );
    }

    syncSubmit = ( values, dispatch ) =>
        asyncSubmit( values, dispatch, createTask )
            .then( res => {
                console.info( 'RES', res );
            } )
            .catch( e => {
                throw SubmissionError( e.errors );
            } );


    render() {


        const { submitting, error, handleSubmit } = this.props;
        return (
            <div>

                <Form as="form"
                      className='attached fluid segment'
                      onSubmit={handleSubmit( this.syncSubmit.bind( this ) )}>

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
    }
}


/**
 *
 */
export default reduxForm( {
        form: 'createTask',
    }
)( CreateTaskForm );
