import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { SubmissionError } from 'redux-form';
import { InputField } from './../FormFileds';
import { Segment, Form, Button, Message } from 'semantic-ui-react';
import  asyncSubmit from './../../utils/async-validate';
import  { updateUser } from './../../actions/user';

import Dropzone from 'react-dropzone';

const FILE_FIELD_NAME = 'avatar';
/**
 *
 * @param values
 * @param dispatch
 */

const ReduxFormDropzone = ( field ) => {
    const {
              input,
              meta,
              dropzoneOnDrop,
              ...props
          } = field;

    return (
        <Dropzone
            onDrop={( acceptedFiles, rejectedFiles, e ) => {
                field.input.onChange( acceptedFiles );
                field.dropzoneOnDrop && field.dropzoneOnDrop( acceptedFiles, rejectedFiles, e );
            }}
            {...props}
        />
    );
};

const renderDropzoneInput = ( field ) => {
    const files = field.input.value;
    return (
        <div>
            <Dropzone
                name={field.name}
                onDrop={( filesToUpload, e ) => field.input.onChange( filesToUpload )}
            >
                <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            {field.meta.touched &&
            field.meta.error &&
            <span className="error">{field.meta.error}</span>}
            {files && Array.isArray( files ) && (
                <ul>
                    { files.map( ( file, i ) => <li key={i}>{file.name}</li> ) }
                </ul>
            )}
        </div>
    );
};


const editSubmit = ( values, dispatch ) => {

    console.info( values );
    return asyncSubmit( values, dispatch, updateUser )
        .then( ( res ) => {
            console.log( 'RES', res );
        } ).catch( e => {
            console.log( e );
            throw new SubmissionError( e.errors );
        } );
};


const EditUserForm = ( { userProps, error, handleSubmit, submitting, handleCancel } ) => (
    <Segment color="green">
        <Form as="form" onSubmit={handleSubmit( editSubmit )}>
            <Field type="text" name="name" label="Name" component={InputField}/>
            <Field type="email" name="email" label="Email" component={InputField}/>
            <Field type="password" name="password" label="password" component={InputField}/>
            <Field name="avatar" component="input" type="file"/>
            <Button.Group>
                <Button type="submit" positive loading={submitting} disabled={submitting}>
                    Update
                </Button>
                <Button negative onClick={handleCancel}>
                    Cancel
                </Button>
            </Button.Group>
        </Form>
        {
            error && <Message attached='bottom' error>
                {error}
            </Message>
        }
    </Segment>
);

export default reduxForm( {
    form: 'EditUserDetail'
} )( EditUserForm );