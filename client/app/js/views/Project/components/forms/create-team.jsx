// @flow
import React, { PureComponent } from 'react';
import { reduxForm, Field, FieldArray, SubmissionError } from 'redux-form/immutable';
import { InputField, SelectField } from 'components/FormFileds';
import asyncSubmit from 'utils/async-validate';
import { Button, Message, Form, Popup, Label, Dropdown } from 'semantic-ui-react';
import { createRequest } from 'actions/common';
import { CREATE_PROJECT } from './../../constants';
import validate  from './helpers/wizard-validation';
import  { Map } from 'immutable';

const create = ( values ) => createRequest( CREATE_PROJECT, values );

const roles = [
    { key: 0, text: 'Developer', value: 'Developer' },
    { key: 1, text: 'QA', value: 'QA' },
    { key: 2, text: 'SEO', value: 'SEO' },
    { key: 3, text: 'Lead', value: 'LEAD' },
];


class CreateTeamForm extends React.PureComponent {

    state = { roles };

    handleAddition = ( e, { value } ) => {
        this.setState( {
            options: [ { text: value, value }, ...this.state.options ],
        } );
    };

    handleChange = ( e, { value } ) => this.setState( { currentValue: value } );

    onSubmit = ( values, dispatch ) => asyncSubmit( values, dispatch, create )
        .then( ( res ) => {
            console.info( 'Error', res );
//            dispatch( reset( 'ProjectCreate' ) );
        } ).catch( e => {
            console.log( e );
            throw new SubmissionError( e.errors );
        } );

    render() {
        const { members, submitting, handleSubmit, previousPage } = this.props;


        return (
            <Form as="form" loading={submitting} onSubmit={handleSubmit( this.onSubmit )}>

                <FieldArray
                    roles={roles}
                    members={members}
                    name="users"
                    component={this.renderMembers}/>

                <Form.Field>
                    <Button.Group>
                        <Button onClick={previousPage} inverted color='blue'>Back</Button>
                        <Button type="submit" loading={submitting} disabled={submitting}>Create</Button>
                    </Button.Group>

                </Form.Field>
            </Form>
        );
    }


    renderMembers = ( { roles, members, fields } ) => (
        <div>
            <Form.Field width={2}>


                <Button
                    icon='add user'
                    type="button"
                    positive
                    content="Add new member"
                    onClick={() => fields.push( Map( {} ) )}
                />
            </Form.Field>

            {fields.map( ( member, index ) => {

                    return (
                        <Form.Group widths='equal' key={index}>
                            <Field
                                name={`${member}.id`}
                                component={SelectField}
                                options={members}
                                label="Member"
                            />

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
                        </Form.Group>
                    )
                        ;
                }
            )}
        </div>

    );

    renderRoleField = ( { input, options, label, meta: { touched, error, warning } } ) => {


        return (
            <Form.Field>
                <Dropdown
                    error={ !!error }
                    search
                    allowAdditions
                    selection
                    options={options}
                    placeholder={label}
                    additionLabel={<i style={{ color: 'red' }}>Custom role: </i>}
                    onAddItem={this.handleAddition}
                    onChange={this.handleChange}
                    {...input}
                />

            </Form.Field>
        );
    };

}


//const create = ( values ) => handleRequest( CREATE_TEAM, values );
//
//const createSubmit = ( values, dispatch ) => asyncSubmit( values, dispatch, create )
//    .then()
//    .catch();
//
//const creates = ( values ) => {
//    console.info( values );
//};
//const inviteSubmit = ( values, dispatch ) => asyncSubmit( values, dispatch, create )
//    .then()
//    .catch();


//            values : {
//                name      : 'First TEAM',
//                project_id: 1,
//                users     : '[ 2,3,4,5]'
//            },


export default reduxForm( {
        form                    : 'projectWizard',
        destroyOnUnmount        : false,
        forceUnregisterOnUnmount: true,
        validate
    }
)( CreateTeamForm );


