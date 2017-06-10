import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Column from './Column';

const columnTarget = {
    canDrop( props, monitor ) {
//        console.log( 'column candrop', monitor.getItem() );
        return true;
    },

    drop( props, monitor ) {

        const { colType } = props;
        const { card } = monitor.getItem();
        console.log( 'cc', card );
        return {
            newType: colType,
            task   : card
        };

    },
};

function collect( connect, monitor ) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver           : monitor.isOver(),
        canDrop          : monitor.canDrop(),
        card             : monitor.getItem(),
    };
}


@DropTarget( 'card', columnTarget, collect )
export default class DndColumn extends Component {


    render() {
        const { connectDropTarget, isOver, canDrop, children, colType, sizeOf } = this.props;


        return connectDropTarget(
            <div>
                <Segment className="height-1-1" padded>
                    <h1>{colType}
                        <span>({sizeOf})</span>
                    </h1>
                    {children}
                </Segment>
            </div>,
        );
    }
}
