import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';


const cardSource = {

    beginDrag( props ){

        const { data } = props;
        return {
            card: data
        };
    },

    endDrag ( props, monitor, ) {
        if (!monitor.didDrop()) {
            return;
        }
        const { newType, task } = monitor.getDropResult();
        const { onMoveTask, columnType } = props;

        console.log( '---- old =>>', columnType, '-------new =>>>', newType );

        onMoveTask( newType, columnType, task );

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

    render() {
        const { connectDragSource, isDragging, data, columnType } = this.props;


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
                ♘{` ${data.get( 'title' )}| ${columnType}`}
            </div>,
        );
    }


}