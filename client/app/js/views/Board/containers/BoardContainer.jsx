import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'semantic-ui-react';
import Column from './../components/Columns';

export class BoardContainer extends React.Component {


    render() {
        return (
            <Row>
                <Column />
            </Row>

        );
    }
}


export default connect()( BoardContainer );