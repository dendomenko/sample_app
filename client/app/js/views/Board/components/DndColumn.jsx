import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { Segment, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Column from './Column';


/**
 * TODO: Should add hover effect;
 * @type {{canDrop: (()), drop: ((props, monitor))}}
 */
const columnTarget = {
    canDrop() {

        return true;
    },

    drop( props, monitor ) {

        const { colType } = props;
        const { card } = monitor.getItem();
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
        const {
                  connectDropTarget,
                  children,
                  colType,
                  sizeOf,
                  canDrop,
                  isOver
              } = this.props;

        const isActive = canDrop && isOver;


        return connectDropTarget(
            <div>

                <Header as="h1" textAlign="center">{colType}
                    <span>({sizeOf})</span>
                </Header>
                <Segment
                    className="height-1-1"
                    padded
                    secondary={isActive}>


                    {children}

                </Segment>
            </div>,
        );
    }
}
