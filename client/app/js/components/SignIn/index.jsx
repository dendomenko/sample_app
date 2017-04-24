/* @flow */
import React from 'react';
import { Field, reduxForm } from 'redux-form';

let SignIn = ( { handleSubmit } ) => (
    <form onSubmit={ handleSubmit }>
        <div>
            <label htmlFor="login">Name</label>
            <Field name="name" component="input" type="text"/>
        </div>
        <div>
            <label htmlFor="Email">Email</label>
            <Field name="email" component="input" type="email"/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <Field name="pwd" component="input" type="password"/>
        </div>
        <div>
            <label htmlFor="password_confirmation">Repeat password</label>
            <Field name="confirm_pwd" component="input" type="password"/>
        </div>

        <button type="submit">Submit</button>
    </form>
);

// Decorate the form component
SignIn = reduxForm( {
    form: 'signin' // a unique name for this form
} )( SignIn );

export default SignIn;