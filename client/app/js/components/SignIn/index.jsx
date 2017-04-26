/* @flow */
import React from 'react';
import { Field, reduxForm, filterProps } from 'redux-form/immutable';


const renderField = props =>
    (
        <div>
            <label>{props.placeholder}</label>
            <div>
                <input type={props.type} placeholder={props.placeholder} {...props.input}/>
                {props.meta.touched && props.error && <span>{props.meta.error}</span>}
            </div>
        </div>
    );


let SignIn = ( props ) => {

    const { handleSubmit, pristine, submitting } = props;
    return (
        <form onSubmit={ handleSubmit }>
            <Field name="email" component={renderField} placeholder="Email" type="email"/>
            <Field name="pwd" component={renderField} placeholder="Password" type="password"/>
            <div>
                <button type="submit" disabled={submitting}>Login</button>
            </div>
        </form>
    );
};

// Decorate the form component
SignIn = reduxForm( {
    form: 'signin',
} )( SignIn );

export default SignIn;