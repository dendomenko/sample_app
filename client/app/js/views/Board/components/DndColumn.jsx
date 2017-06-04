import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import Column from './Column';


const columnTarget = {
    canDrop( props, monitor ) {
        console.log( 'column candrop', monitor.getItem() );
        return true;
    },

    drop( props, monitor ) {
        console.log( 'column drop', monitor.getItem() );
    },
};

function collect( connect, monitor ) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver           : monitor.isOver(),
        canDrop          : monitor.canDrop(),
        card             : monitor.getItem()
    };
}

@DropTarget( 'card', columnTarget, collect )
export default class DndColumn extends Component {


    componentWillReceiveProps(nextProps) {
        if (!this.props.isOver && nextProps.isOver) {
            // You can use this as enter handler
            console.log('recive');
        }

        if (this.props.isOver && !nextProps.isOver) {
            // You can use this as leave handler
            console.log('recive 2 ');
        }


            // You can be more specific and track enter/leave
            // shallowly, not including nested targets
        }

    render() {
        const { connectDropTarget, isOver, canDrop, children, colType } = this.props;
        return connectDropTarget(
            <div
                style={{
                    width  : '350px',
                    height : '100vh',
                    margin : '10px',
                    display: 'inline-block',
                }}
            >
                <h1>{colType}</h1>
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
