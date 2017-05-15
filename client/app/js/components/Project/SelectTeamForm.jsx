// @flow
import React from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form/immutable';
//import { FieldArray } from 'redux-form';
import { InputField, SelectField } from './../FormFileds';
import asyncSubmit from './../../utils/async-validate';
import { Button, Message, Form, Popup, Label } from 'semantic-ui-react';
import { createRequest } from './../../actions/common';
import { SELECT_TEAM } from './../../constants/Team';
import { fromJS } from 'immutable';


/**
 *
 * @param values
 */
const create = ( values ) => createTeam( SELECT_TEAM, values );

/**
 *
 * @param values
 * @param dispatch
 */
const createSubmit = ( values, dispatch ) => asyncSubmit( values, dispatch, create )
    .then()
    .catch();

const members1 = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
];


const SelectTeamForm = ( props ) => {
    const { project_id, initialize, initialized, handleSubmit, submitting, teams } = props;

    if (!initialized) {
        initialize( {
            'project_id': project_id
        } );
    }

    console.warn( members );
//    members.map( ( member, index ) => ({
//        key  : member.id,
//        text : member.name,
//        value: member.id,
////                    image:
//    }) )
    return (
        <Form as="form" loading={submitting} onSubmit={handleSubmit}>
            <Field name="name" type="text" component={SelectField} options={members1} label="Team name"/>
            <Field name="project_id" type="hidden" component="input"/>
            <Form.Field>
                <Button type="submit" loading={submitting} disabled={submitting}>Apply</Button>
            </Form.Field>
        </Form>
    );
};

/**
 *
 */
export default reduxForm( {
        form: 'selectTeam',
    }
)( SelectTeamForm );


