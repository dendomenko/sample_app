import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { DragSource } from 'react-dnd';
import ItemTypes from './../../Item-types';
import { Card } from 'semantic-ui-react';


const cardSource = {

    canDrag( props ) {

        console.log( 'canDrag', props );
        return props.isReady;
    },
    isDragging( props, monitor ) {

        console.log( 'isDragging', props, monitor );
        // If your component gets unmounted while dragged
        // (like a card in Kanban board dragged between lists)
        // you can implement something like this to keep its
        // appearance dragged:
        return monitor.getItem().id === props.id;
    },
    beginDrag( props, monitor, component ) {
        // Return the data describing the dragged item
        console.info( 'beginDrag', props );
        const item = { id: props.id };
        return item;
    },

    endDrag( props, monitor, component ) {

        console.log( 'endDrag props', props );
        console.log( 'endDrag monitor', monitor );
        console.log( 'endDrag component', component );
        if (!monitor.didDrop()) {
            // You can check whether the drop was successful
            // or if the drag ended but nobody handled the drop
            return;
        }

        // When dropped on a compatible target, do something.
        // Read the original dragged item from getItem():
        const item = monitor.getItem();

        // You may also read the drop result from the drop target
        // that handled the drop, if it returned an object from
        // its drop() method.
        const dropResult = monitor.getDropResult();

        // This is a good place to call some Flux action
//        CardActions.moveCardToList( item.id, dropResult.listId );
    }

};

const collect = ( connect, monitor ) => ({
    connectDragSource: connect.dragSource(),
    isDragging       : monitor.isDragging(),
});

@DragSource( ItemTypes.CARD, cardSource, collect )
export default class DndCard extends Component {

    static propTypes = {
        connectDragSource: PropTypes.func,
        connectDropTarget: PropTypes.func,
        index            : PropTypes.number,
        isDragging       : PropTypes.bool,
        id               : PropTypes.any,
        text             : PropTypes.string
//        moveCard         : PropTypes.func.isRequired,
    };

    render() {
        const { text, isDragging, connectDragSource, connectDropTarget } = this.props;


        console.log( 'CARD PROPS', this.props );
        return connectDragSource(
            <div>
                <Card color='red'>
                    <Card.Content>
                        <Card.Header>
                            {text}
                        </Card.Header>
                        <Card.Meta>
                            Friends of Elliot
                        </Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </div>,
        );
    }
}
