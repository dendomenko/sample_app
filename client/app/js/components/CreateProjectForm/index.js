// @flow
import React from 'react';
import { Field, reduxForm, filterProps } from 'redux-form/immutable';
import { Button, Form, TextArea } from 'semantic-ui-react';

/**
 * TODO: should add validate;
 * @param props
 */
const renderField = props =>
    (
        <Form.Field>
            <label>{props.placeholder}</label>

            <input type={props.type} placeholder={props.placeholder} {...props.input}/>
            {props.meta.touched && props.error && <span>{props.meta.error}</span>}
        </Form.Field>
    );
const renderTextArea = props =>
    (
        <Form.Field>
            <label>{props.placeholder}</label>
            <TextArea placeholder={props.placeholder} autoHeight {...props.input}/>
            {props.meta.touched && props.error && <span>{props.meta.error}</span>}
        </Form.Field>
    );


let newProject = ( props ) => {

    const { handleSubmit, pristine, submitting } = props;
    return (
        <Form onSubmit={ handleSubmit }>
            <Field name="name" component={renderField} placeholder="Name of project" type="text"/>
            <Field name="task_name" component={renderField} placeholder="Task name" type="text"/>
            <Field name="description" component={renderTextArea} placeholder="Description"/>
            <div>
                <Button type="submit" disabled={submitting}>Create</Button>
            </div>
        </Form>
    );
};

// Decorate the form component
newProject = reduxForm( {
    form: 'newProject',
} )( newProject );

export default newProject;