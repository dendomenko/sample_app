/* @flow */
import React from 'react';
import { Field, reduxForm, } from 'redux-form/immutable';
import { SubmissionError } from 'redux-form';
import { Button, Form, Message, Header } from 'semantic-ui-react';
import { InputField } from './../FormFileds';
import asyncSubmit from 'utils/async-validate';
import { validate } from './Helper/validate';
import { registerUser } from "actions/user";

const registerSubmit = ( values, dispatch ) =>
    asyncSubmit( values, dispatch, registerUser )
        .catch( e => {
            throw new SubmissionError( e.errors );
        } );


let registerForm = ( { error, handleSubmit, pristine, reset, submitting } ) => (
    <div>
        <Header as='h2' textAlign='center'>
            <Header.Content>
                Register
            </Header.Content>
        </Header>
        <Form className='attached fluid segment' onSubmit={ handleSubmit( registerSubmit ) }>
            <Field name="name" component={InputField} label="Name" type="text"/>
            <Field name="email" component={InputField} label="Email" type="email"/>
            <Field name="password" component={InputField} label="Password" type="password"/>
            <Field name="confirm_pwd" component={InputField} label="Confirm password" type="password"/>

            <Button type="submit"
                    fluid
                    color="teal"
                    basic
                    loading={submitting}
                    disabled={submitting}>
                Register
            </Button>

        </Form>
        {
            error && <Message attached='bottom' error>
                {error}
            </Message>
        }
    </div>

);


// Decorate the form component
registerForm = reduxForm( {
    form: 'register',
} )( registerForm );

export default registerForm;