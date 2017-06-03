import React, { Component } from 'react';
import { connect } from 'react-redux';

import DnDGrid from './../components/DndLayout';
import Card from './../components/Card';
import { generate } from 'shortid';


const default_cards = [
    {
        id    : 1,
        text  : 'Write a cool JS library',
        status: 'todo'
    }, {
        id    : 2,
        text  : 'Make it generic enough',
        status: 'todo'
    }, {
        id    : 3,
        text  : 'Write README',
        status: 'todo'
    }, {
        id    : 4,
        text  : 'Create some examples',
        status: 'todo'
    }, {
        id    : 5,
        text  : 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
        status: 'todo'
    }, {
        id    : 6,
        text  : '???',
        status: 'todo'
    }, {
        id    : 7,
        text  : 'PROFIT',
        status: 'todo'
    }
];

const columnsType = [ 'todo', 'onHold', 'inProgress', 'inReview', 'done' ];

export class BoardContainer extends React.Component {

    render() {

        const columns = columnsType.map( column => ({
                items: default_cards,
                type : column
            })
        );

        return <DnDGrid columns={columns}/>;
    }
}

/**
 *
 * @param state
 */
const mapStateToProps = state => state;
/**
 *
 * @param dispatch
 * @returns {{mapActions: (A|B|M|N)}}
 */
const mapDispatchToProps = ( dispatch ) =>
    ({ dispatch } );


export default connect()( BoardContainer );