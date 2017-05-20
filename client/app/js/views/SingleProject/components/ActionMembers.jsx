// @flow
import React, { PureComponent } from 'react';
import { Form,Button, Dropdown, Grid, Header } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form/immutable';
import _ from 'lodash';

const options = [
    { key: 'all', text: 'All', value: 'all' },
    { key: 'articles', text: 'Articles', value: 'articles' },
    { key: 'products', text: 'Products', value: 'products' },
];


const getOptions = () => _.times( 3, () => {
    const name = 'afdfdssfddfssdf';
    return { key: name, text: name, value: _.snakeCase( name ) };
} );

class MembersForm extends React.PureComponent {
    componentWillMount() {
        this.setState( {
            isFetching : false,
            multiple   : true,
            search     : true,
            searchQuery: null,
            value      : [],
            options    : getOptions(),
        } );
    }

    handleChange = ( e, { value } ) => this.setState( { value } );
    handleSearchChange = ( e, value ) => this.setState( { searchQuery: value } );

    fetchOptions = () => {
        this.setState( { isFetching: true } );

        setTimeout( () => {
            this.setState( { isFetching: false, options: getOptions() } );
            this.selectRandom();
        }, 500 );
    };

    selectRandom = () => {
        const { multiple, options } = this.state;
        const value = _.sample( options ).value;
        this.setState( { value: multiple ? [ value ] : value } );
    };

    toggleSearch = ( e ) => this.setState( { search: e.target.checked } );

    toggleMultiple = ( e ) => {
        const { value } = this.state;
        const multiple = e.target.checked;
        // convert the value to/from an array
        const newValue = multiple ? _.compact( [ value ] ) : _.head( value ) || '';
        this.setState( { multiple, value: newValue } );
    };

    render() {
        const { multiple, options, isFetching, search, value } = this.state;

        return (
            <Form >
                <Form.Group grouped inline>
                    <Field name="user_id"
                           options={options}
                           value={value}
                           isFetching={isFetching}
                           seacrh={search}
                           handleChange={this.handleChange}
                           onSearchChange={this.handleSearchChange}
                           component={dropField}/>

                    <Button type="submit">
                        ADD
                    </Button>
                </Form.Group>

            </Form>
        );
    }
}

const dropField = ( {
                        input, label, type,
                        value, options,
                        isFetching, search,
                        handleChange,
                        onSearchChange,
                        meta: { touched, error, warning }
                    } ) => {


    return (
        <Dropdown
            {...input}
            fluid
            selection
            search={search}
            options={options}
            value={value}
            placeholder='Add Users'
            onChange={handleChange}
            onSearchChange={ onSearchChange}
            disabled={isFetching}
            loading={isFetching}
        />
    );
};

//
//const validate = values => {
//
//    const errors = {};
//
//    if (!values.get( '' ))
//        };

export default reduxForm( {
    form: 'MembersForm',
} )( MembersForm );


