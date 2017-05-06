/* @flow */
import React from 'react';
import {Field, reduxForm, filterProps} from 'redux-form/immutable';
import {Button, Form} from 'semantic-ui-react';
import {validate} from './Helper/validate';

/**
 * TODO: should finish wtih validation
 */


/**
 * Helper
 * @param props
 */
const renderField = props =>
    (
        <Form.Field >
            <label>{props.placeholder}</label>
            <input type={props.type} placeholder={props.placeholder} {...props.input}/>
            {props.meta.touched && props.error && <span>{props.meta.error}</span>}
        </Form.Field>
    );

/**
 *
 * @param handleSubmit
 * @constructor
 */
let registerForm = (props) => {

    const {handleSubmit, pristine, reset, submitting} = props;
    return (
        <Form onSubmit={ handleSubmit }>
            <Field name="name" component={renderField} placeholder="Name" type="text"/>
            <Field name="email" component={renderField} placeholder="Email" type="email"/>
            <Field name="pwd" component={renderField} placeholder="Password" type="password"/>
            <Field name="confirm_pwd" component={renderField} placeholder="Confirm password" type="password"/>
            <div>
                <Button type="submit" disabled={submitting}>Register</Button>
                <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
            </div>
        </Form>
    );
};

// Decorate the form component
registerForm = reduxForm({
    form: 'register',
})(registerForm);

export default registerForm;