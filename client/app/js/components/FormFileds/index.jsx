import React from 'react';
import { TextArea, Form, Label, Dropdown } from 'semantic-ui-react';
/**
 * TODO: should add requered field
 * @param input
 * @param label
 * @param type
 * @param touched
 * @param error
 * @param warning
 * @constructor
 */
export const InputField = ( { input, required, label, type, meta: { touched, error, valid } } ) => (
    <Form.Field error={ !!error }>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {     error && <Label basic color='red' pointing>{error}</Label>
            }
        </div>
    </Form.Field>
);


/**
 *
 * @param input
 * @param label
 * @param type
 * @param touched
 * @param error
 * @param warning
 * @constructor
 */
export const TextareaField = ( { input, label, type, meta: { touched, error, warning } } ) => (
    <Form.Field>
        <label>{label}</label>
        <div>
            <TextArea {...input} placeholder={label} type={type}/>
            {     error && <Label basic color='red' pointing>{error}</Label> }
        </div>
    </Form.Field>
);


/**
 *
 * @param input
 * @param label
 * @param options
 * @param touched
 * @param error
 * @param warning
 */
export const SelectField = ( { input: { name }, label, options, meta: { touched, error, warning } } ) => {

    console.log( 'RRRRR', name );

    return (
        <Form.Field>
            <Dropdown
                error={ !!error }
                name={name}
                label={label}
                options={options}
                placeholder={label}/>
        </Form.Field>
    );
};