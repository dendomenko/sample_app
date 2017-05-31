import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { DragSource } from 'react-dnd';
import ItemTypes from './../../Item-types';
import { Card } from 'semantic-ui-react';


const cardSource = {

    // canDrag( props ) {
    //
    //     console.log( 'canDrag', props );
    //     // return props.isReady;
    // },
    isDragging( props, monitor ) {

        // If your component gets unmounted while dragged
        // (like a card in Kanban board dragged between lists)
        // you can implement something like this to keep its
        // appearance dragged:
        return monitor.getItem().id === props.id;
    },
    beginDrag( props ) {
        // Return the data describing the dragged item

        const item = { id: props.id };
        return item;
    },

    endDrag( props, monitor, component ) {

        console.log( 'card end drag', props, component, monitor );
        const { id } = props;

        return id;


        // This is a good place to call some Flux action
//        CardActions.moveCardToList( item.id, dropResult.listId );
    }

};

const collect = ( connect, monitor ) => {
    console.log( 'S', connect );
    return ({
        connectDragSource: connect.dragSource(),
        isDragging       : monitor.isDragging(),
    });
};

@DragSource( ItemTypes.CARD, cardSource, collect )
export default class DndCard extends Component {

    static propTypes = {
        connectDragSource: PropTypes.func.isRequired,
        // connectDropTarget: PropTypes.func,
        index            : PropTypes.number,
        isDragging       : PropTypes.bool,
        id               : PropTypes.any,
        text             : PropTypes.string
//        moveCard         : PropTypes.func.isRequired,
    };

    render () {
        const { id, isDragging, connectDragSource, connectDropTarget } = this.props;


        // console.log( 'CARD PROPS', this.props );

        return connectDragSource(
            <div style={
                {
                    border : '1px solid black',
                    margin : '20px',
                    padding: '20px',
                    display: 'inline-block'
                }}>
                <span>{id}</span>
                <div>HEllo</div>
            </div>,
        );
    }
}
