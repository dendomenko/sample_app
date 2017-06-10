// @flow
import React, { PureComponent } from 'react';
import { Form, Button, Dropdown, Grid, Header } from 'semantic-ui-react';
import { Field, reduxForm, SubmissionError, reset, initialize, } from 'redux-form/immutable';
import { SelectField } from 'components/FormFileds';
import { generate } from 'shortid';
import asyncSubmit from 'utils/async-validate';
import { createRequest } from 'actions/common';
import { ADD_MEMBER } from './../constants';


const addMember = ( values ) => createRequest( ADD_MEMBER, values );
const onSubmit = ( values, dispatch ) => asyncSubmit( values, dispatch, addMember )
    .then( () =>
        dispatch( reset( 'MembersForm' ) )
    )
    .catch( ( e ) => {
            throw  new SubmissionError( e );
        }
    );


const roles = [
    { key: 0, text: 'Developer', value: 'Developer' },
    { key: 1, text: 'QA', value: 'QA' },
    { key: 2, text: 'SEO', value: 'SEO' },
    { key: 3, text: 'Lead', value: 'LEAD' },
];

const MembersForm = ( { members, submitting, handleSubmit } ) => {


    return (
        <Form loading={submitting} onSubmit={handleSubmit( onSubmit )}>
            <Form.Group inline>
                <Field name="user_id" label="Member name" options={members} component={SelectField}/>
                <Field name="role" label="Role" options={roles} component={SelectField}/>
                <Field name="project_id" type="hidden" component='input'/>
                <Button
                    basic
                    color='teal'
                    type="submit"
                    disabled={submitting}
                    loading={submitting}>
                    Add
                </Button>
            </Form.Group>
        </Form>
    );
};


//
const validate = values => {

    const errors = {};

    if (!values.get( 'user_id' )) {
        errors.user_id = 'Required';
    }
    if (typeof values.get( 'user_id' ) === 'undefined') {
        errors.user_id = 'Required';
    }
    if (!values.get( 'role' )) {

        errors.role = 'Required';
    }
    if (values.get( 'role' ) === 'author') {
        errors.role = 'role is not available';
    }


    return values;
};

export default reduxForm( {
    form: 'MembersForm',
    validate
} )( MembersForm );


