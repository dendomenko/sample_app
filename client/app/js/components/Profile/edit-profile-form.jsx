import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { InputField } from './../FormFileds';
import { Segment, Form, Button, Message } from 'semantic-ui-react';
import  asyncSubmit from './../../utils/async-validate';
import  { updateUser } from './../../actions/user';

/**
 *
 * @param values
 * @param dispatch
 */
const editSubmit = ( values, dispatch ) =>
    asyncSubmit( values, dispatch, updateUser )
        .then( ( res ) => {
            console.log( 'RES', res );
        } ).catch( e => {
        console.log( e );
        throw new SubmissionError( e.errors );
    } );


const EditUserForm = ( { userProps, error, handleSubmit, submitting, handleCancel } ) => (
    <Segment color="green">
        <Form as="form" onSubmit={handleSubmit( editSubmit )} encType="multipart/form-data">
            <Field type="text" name="name" label="Name" component={InputField}/>
            <Field type="email" name="email" label="Email" component={InputField}/>
            <Field type="password" name="label" label="password" component={InputField}/>
            <Field type="file" name="avatar" label="Avatar" component={InputField}/>
            <Button.Group>
                <Button type="submit" positive loading={submitting} disabled={submitting}>
                    Update
                </Button>
                <Button negative onClick={handleCancel}>
                    Cancel
                </Button>
            </Button.Group>
        </Form>
        {
            error && <Message attached='bottom' error>
                {error}
            </Message>
        }
    </Segment>
);

export default reduxForm( {
    form: 'EditUserDetail'
} )( EditUserForm );