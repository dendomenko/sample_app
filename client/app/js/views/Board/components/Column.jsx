import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridColumn } from 'semantic-ui-react';

export default class Column extends Component {


    render() {
        const { children } = this.props;

        return (
            <GridColumn>
                {children}
            </GridColumn>
        );
    }
}