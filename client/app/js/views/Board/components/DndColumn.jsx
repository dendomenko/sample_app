import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
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
            <div
                style={{
                    width  : '350px',
                    height : '100vh',
                    margin : '10px',
                    display: 'inline-block',
                }}
            >
                <h1>{colType} <span>({sizeOf})</span></h1>
                <Column>
                    {children}
                </Column>
                {isOver && !canDrop && this.renderOverlay( 'red' )}
                {!isOver && canDrop && this.renderOverlay( 'yellow' )}
                {isOver && canDrop && this.renderOverlay( 'green' )}
            </div>,
        );
    }

    renderOverlay( color ) {
        return (
            <div
                style={{
                    top            : 0,
                    left           : 0,
                    height         : '100%',
                    width          : '100%',
                    zIndex         : 1,
                    opacity        : 0.5,
                    backgroundColor: color,
                }}
            />
        );
    }
}
