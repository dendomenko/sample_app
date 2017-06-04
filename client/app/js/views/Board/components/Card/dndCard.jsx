import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { DragSource } from 'react-dnd';
import ItemTypes from './../../Item-types';
import Card from './SimpleCard';


const cardSource = {

    canDrag( props ) {
        const { item } = props;
        return item.get( 'id' );
    },

    isDragging(props, monitor) {
        // If your component gets unmounted while dragged
        // (like a card in Kanban board dragged between lists)
        // you can implement something like this to keep its
        // appearance dragged:
        console.log('ssss');
        return monitor.getItem().id === props.id;
    },

    beginDrag ( props, monitor, component ) {

        console.log( 'begin', props );
        const { item } = props;
        return {
            id: item.get( 'id' )
        };

    },

    endDrag ( props, monitor, component ) {

        console.log( 'end', props );
        console.log( 'end', monitor.getItem() );
        if (!monitor.didDrop())
            return;

//        const { item } = props;

//        return item.get( 'id' );
    }

};

const collect = ( connect, monitor ) =>
    ({
        connectDragSource : connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging        : monitor.isDragging(),
    });

@DragSource( ItemTypes.CARD, cardSource, collect )
export default class DndCard extends Component {

    static propTypes = {
        connectDragSource: PropTypes.func.isRequired,
        order            : PropTypes.number,
        isDragging       : PropTypes.bool,

    };

    render() {
        const { item, isDragging, connectDragSource } = this.props;

        if (isDragging) {
            return false;
        }

        return connectDragSource(
            <div id={item.get( 'id' )}
                 style={{
                     marginTop   : '10px',
                     marginBottom: '10px'
                 }}>
                <Card {...item.toJS()}/>
            </div>
        );
    }
}
