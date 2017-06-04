import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Column extends Component {


    render() {
        const { children } = this.props;

        return (
            <div
                style={{
                    color : 'red',
                    width : '100%',
                    height: '100%',
                    border: '1px solid black'
                }}
            >
                {children}
            </div>
        );
    }
}