/* @flow */
import React from 'react';
import {Field, reduxForm, filterProps} from 'redux-form/immutable';
import {Button, Form} from 'semantic-ui-react';


const renderField = props =>
    (
        <Form.Field>
            <label>{props.placeholder}</label>

            <input type={props.type} placeholder={props.placeholder} {...props.input}/>
            {props.meta.touched && props.error && <span>{props.meta.error}</span>}
        </Form.Field>
    );


let SignIn = (props) => {

    const {handleSubmit, pristine, submitting} = props;
    return (
        <Form onSubmit={ handleSubmit }>
            <Field name="email" component={renderField} placeholder="Email" type="email"/>
            <Field name="pwd" component={renderField} placeholder="Password" type="password"/>
            <div>
                <Button type="submit" disabled={submitting}>Login</Button>
            </div>
        </Form>
    );
};

// Decorate the form component
SignIn = reduxForm({
    form: 'signin',
})(SignIn);

export default SignIn;