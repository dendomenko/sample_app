import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { DragSource } from 'react-dnd';
import ItemTypes from './../../Item-types';
import Card from './SimpleCard';


const cardSource = {

    isDragging( props, monitor ) {

        console.log( 'isDrag', monitor.getItem() );
        const { item } = monitor.getItem();
        return item.get( 'id' ) === props.item.get( 'id' );
    },

    beginDrag ( props ) {
        return props;
    },

    endDrag ( props, monitor, component ) {

        const { item } = props;
        console.log( 'end', props );
        console.log( 'end', monitor.getItem() );
        return item.get( 'id' );
    }

};

const collect = ( connect, monitor ) => {

    return ({
        connectDragSource: connect.dragSource(),
        isDragging       : monitor.isDragging(),

    });
};

@DragSource( ItemTypes.CARD, cardSource, collect )
export default class DndCard extends Component {

    static propTypes = {
        connectDragSource: PropTypes.func.isRequired,
        order            : PropTypes.number,
        isDragging       : PropTypes.bool,

    };

    render() {
        const { item, connectDragSource } = this.props;
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
