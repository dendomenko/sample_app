import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { DragSource } from 'react-dnd';
import ItemTypes from './../../Item-types';
import Card from './SimpleCard';


const cardSource = {

    isDragging: ( props, monitor ) => monitor.getItem().id === props.id,

    beginDrag: ( props ) => props,

    endDrag: ( props, monitor, component ) => props.id

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
        index            : PropTypes.number,
        order            : PropTypes.number,
        isDragging       : PropTypes.bool,
        id               : PropTypes.any,
    };

    render() {
        const { id, text, connectDragSource } = this.props;


        return connectDragSource(
            <div style={{
                marginTop   : '10px',
                marginBottom: '10px'
            }}>
                <Card/>
            </div>
        );
    }
}
