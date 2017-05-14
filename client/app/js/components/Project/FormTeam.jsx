// @flow
import React from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form/immutable';
import { InputField } from './../FormFileds';
import asyncSubmit from './../../utils/async-validate';
import { Button, Message, Form } from 'semantic-ui-react';
import { handleRequest as createTeam } from './../../actions/common';
import { CREATE_TEAM } from './../../constants/Team';

const create = ( values ) => createTeam( CREATE_TEAM, values );

const createSubmit = ( values, dispatch ) => asyncSubmit( values, dispatch, create )
    .then()
    .catch();

const inviteSubmit = ( values, dispatch ) => asyncSubmit( values, dispatch, create )
    .then()
    .catch();


//values : {
//    name      : 'First TEAM',
//        project_id: 1,
//        users     : '[ 2,3,4,5]'
//},

const renderMembers = ( { fields, meta: { error, submitFailed } } ) => (

    <Form.Group widths='equal'>
        {fields.map( ( member, index ) =>

            <Form.Field key={index}>
                <Field
                    name={`${member}.firstName`}
                    type="text"
                    component={renderField}
                    label="First Name"
                />
                <Field
                    name={`${member}.lastName`}
                    type="text"
                    component={renderField}
                    label="Last Name"
                />
            </Form.Field>
        }


        <Form.Button>

        </Form.Button>
    </Form.Group>

//    <ul>
//        <li>
//            <button type="button" onClick={() => fields.push({})}>Add Member</button>
//            {submitFailed && error && <span>{error}</span>}
//        </li>
//        {fields.map((member, index) => (
//            <li key={index}>
//                <button
//                    type="button"
//                    title="Remove Member"
//                    onClick={() => fields.remove(index)}
//                />
//                <h4>Member #{index + 1}</h4>
//                <Field
//                    name={`${member}.firstName`}
//                    type="text"
//                    component={renderField}
//                    label="First Name"
//                />
//                <Field
//                    name={`${member}.lastName`}
//                    type="text"
//                    component={renderField}
//                    label="Last Name"
//                />
//                <FieldArray name={`${member}.hobbies`} component={renderHobbies} />
//            </li>
//        ))}
//    </ul>
)


const newTeamForm = ( { error, handleSubmit, submitting, initialize } ) => {
    initialize( {
//        id: project_id
    } );
    return (
        <div>

            <Form className='attached fluid segment' onSubmit={handleSubmit( syncSubmit )}>
                <Field name="name" label="Name" component={InputField}/>

                <Field name="project_id" type="hidden" component="input"/>
                <Button fluid type="submit" inverted color='blue' loading={submitting}
                        disabled={submitting}>Submit</Button>
            </Form>

            {
                error && <Message attached='bottom' error>
                    {error}
                </Message>
            }
        </div>
    );
};

