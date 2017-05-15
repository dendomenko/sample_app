// @flow
import React from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form/immutable';
//import { FieldArray } from 'redux-form';
import { InputField, SelectField } from './../FormFileds';
import asyncSubmit from './../../utils/async-validate';
import { Button, Message, Form, Popup, Label } from 'semantic-ui-react';
import { handleRequest as createTeam } from './../../actions/common';
import { CREATE_TEAM } from './../../constants/Team';
import { fromJS } from 'immutable';


const create = ( values ) => createTeam( CREATE_TEAM, values );

const createSubmit = ( values, dispatch ) => asyncSubmit( values, dispatch, create )
    .then()
    .catch();

const inviteSubmit = ( values, dispatch ) => asyncSubmit( values, dispatch, create )
    .then()
    .catch();


const members = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
];
const roles = [
    { key: 0, text: 'Developer', value: 1 },
    { key: 1, text: 'QA', value: 2 },
    { key: 2, text: 'SEO', value: 3 },
    { key: 3, text: 'Lead', value: 4 },
];


const renderMembers = ( { roles, members, fields } ) => (
    <div>
        <Form.Field width="16">
            <Popup
                trigger={
                    <Button
                        circular
                        icon='add user'
                        type="button"
                        positive

                        onClick={() => fields.push( {} )}/>
                }
                content='Add new member'
            />

        </Form.Field>
        {fields.map( ( member, index ) =>
            <Form.Group key={index}>

                <Form.Field>
                    <Field
                        name={`${member}.member_id`}
                        component={SelectField}
                        options={members}
                        label="Member"/>
                </Form.Field>

                <Form.Field>

                    <Field
                        name={`${member}.role`}
                        component={SelectField}
                        options={roles}
                        label="Role"/>
                </Form.Field>


                <Form.Field>
                    <Popup
                        trigger={<Button
                            circular
                            icon='remove'
                            type="button"
                            negative
                            onClick={() => fields.remove( index )}/>}
                        content='Remove member'
                    />
                </Form.Field>
            </Form.Group>
        )}
    </div>

);


const TeamForm = ( props ) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <Form as="form" loading={submitting} onSubmit={handleSubmit}>
            <Field name="name" type="text" component={InputField} label="Team name"/>
            <FieldArray
                roles={roles}
                members={members}
                name="members"
                component={renderMembers}/>
            <div>
                <Button type="submit" loading={submitting} disabled={submitting}>Create</Button>
            </div>
        </Form>
    );
};


export default reduxForm( {
        form: 'Team',
    }
)( TeamForm );


