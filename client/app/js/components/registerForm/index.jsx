/* @flow */
import React from 'react';
import { Field, reduxForm, filterProps } from 'redux-form/immutable';
import { validate } from './Helper/validate';

/**
 * TODO: should finish wtih validation
 */


/**
 * Helper
 * @param props
 */
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

/**
 *
 * @param handleSubmit
 * @constructor
 */
let registerForm = ( props ) => {

    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={ handleSubmit }>
            <Field name="name" component={renderField} placeholder="Name" type="text"/>
            <Field name="email" component={renderField} placeholder="Email" type="email"/>
            <Field name="pwd" component={renderField} placeholder="Password" type="password"/>
            <Field name="confirm_pwd" component={renderField} placeholder="Confirm password" type="password"/>
            <div>
                <button type="submit" disabled={submitting}>Register</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    );
};

// Decorate the form component
registerForm = reduxForm( {
    form: 'register',
} )( registerForm );

export default registerForm;