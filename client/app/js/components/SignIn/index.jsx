/* @flow */
import React from 'react';
import { Field, reduxForm, filterProps } from 'redux-form/immutable';
import { SubmissionError } from 'redux-form';
import { Button, Form, Message, Header, Icon } from 'semantic-ui-react';
import { InputField } from './../FormFileds';
import asyncSubmit from 'utils/async-validate';
import { loginUser } from "actions/user";


const SignInSumbit = ( values, dispatch ) =>
    asyncSubmit( values, dispatch, loginUser )
        .catch( e => {
            throw new SubmissionError( e.errors );
        } );

const SignIn = ( { error, handleSubmit, pristine, reset, submitting } ) => (
    <div>
        <Header as='h2' textAlign='center'>
            <Icon name='sign in'/>
            <Header.Content>
                Sign in
            </Header.Content>
        </Header>
        <Form onSubmit={ handleSubmit( SignInSumbit ) }>
            <Field name="email" component={InputField} label="Email" type="email"/>
            <Field name="password" component={InputField} label="Password" type="password"/>
            <div>
                <Button type="submit"
                        fluid
                        basic
                        color="teal"
                        loading={submitting}
                        disabled={submitting}>Login</Button>
            </div>
        </Form>
        {
            error && <Message attached='bottom' error>
                {error}
            </Message>
        }
    </div>
);

// Decorate the form component

export default reduxForm( {
    form: 'Signin',
} )( SignIn );