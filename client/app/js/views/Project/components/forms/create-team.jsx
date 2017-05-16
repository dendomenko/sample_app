// @flow
import React from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form/immutable';
//import { FieldArray } from 'redux-form';
import { InputField, SelectField } from 'components/FormFileds';
import asyncSubmit from 'utils/async-validate';
import { Button, Message, Form, Popup, Label } from 'semantic-ui-react';
import { handleRequest } from 'actions/common';
import { CREATE_TEAM } from 'constants/Team';
import validate  from './helpers/wizard-validation';


const create = ( values ) => handleRequest( CREATE_TEAM, values );

const createSubmit = ( values, dispatch ) => asyncSubmit( values, dispatch, create )
    .then()
    .catch();

const creates = ( values ) => {
    console.info( values );
};
const inviteSubmit = ( values, dispatch ) => asyncSubmit( values, dispatch, create )
    .then()
    .catch();


const members1 = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
];
const roles = [
    { key: 0, text: 'Developer', value: 1 },
    { key: 1, text: 'QA', value: 2 },
    { key: 2, text: 'SEO', value: 3 },
    { key: 3, text: 'Lead', value: 4 },
];
//            values : {
//                name      : 'First TEAM',
//                project_id: 1,
//                users     : '[ 2,3,4,5]'
//            },

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
        {fields.map( ( member, index ) => {

                console.log( member );
                return (
                    <Form.Group key={index}>
                        <Field
                            name={`${member}.id`}
                            component={SelectField}
                            options={members}
                            label="Member"/>

                        <Field
                            name={`${member}.role`}
                            component={SelectField}
                            options={roles}
                            label="Role"/>

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
                    </Form.Group>);
            }
        )}
    </div>

);


const TeamForm = ( props ) => {
    const {
              project_id,
              previousPage,
              handleSubmit,
              submitting,
              pristine,
              members,
          } = props;

//    members.map( ( member, index ) => ({
//        key  : member.id,
//        text : member.name,
//        value: member.id,
////                    image:
//    }) )
    return (
        <Form as="form" loading={submitting} onSubmit={handleSubmit}>
            <Field name="team_name" type="text" component={InputField} label="Team name"/>
            <FieldArray
                roles={roles}
                members={members1}
                name="users"
                component={renderMembers}/>

            <Form.Field>
                <Button.Group>
                    <Button onClick={previousPage} inverted color='blue'>Back</Button>
                    {/*<Button type="submit" loading={submitting} disabled={submitting}>Create</Button>*/}
                </Button.Group>

            </Form.Field>
        </Form>
    );
};


export default reduxForm( {
        form                    : 'projectWizard',
        destroyOnUnmount        : false,
        forceUnregisterOnUnmount: true,
        validate
    }
)( TeamForm );


