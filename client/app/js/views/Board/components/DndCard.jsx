import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';


const cardSource = {

    beginDrag( props ){

        return {
            card: props
        };
    }
};


function collect( connect, monitor ) {
    return {
        connectDragSource : connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging        : monitor.isDragging(),
        card              : monitor.getItem()
    };
}

@DragSource( 'card', cardSource, collect )
export default class DndCard extends Component {

    componentDidMount() {
        console.log( 'card DID momo' );
    }

    render() {
        const { connectDragSource, isDragging, title } = this.props;
        return connectDragSource(
            <div
                style={{
                    fontSize  : 10,
                    fontWeight: 'bold',
                    cursor    : 'move',
                    margin    : '20px',
                    display   : 'block',
                    opacity   : isDragging ? 0.5 : 1,
                    border    : '1px solid grey'
                }}
            >
                ♘{title}
            </div>,
        );
    }


}