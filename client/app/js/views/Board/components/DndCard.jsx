import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import TaskCard from './Card';

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


        if (columnType !== newType)
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
            <div className="tm-margin">
                <TaskCard {...data.toJS()}/>
            </div>,
        );
    }


}