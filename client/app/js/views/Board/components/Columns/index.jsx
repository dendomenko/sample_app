import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { DropTarget, } from 'react-dnd';
import ItemTypes from './../../Item-types';


const style = {
    height         : '12rem',
    width          : '350px',
    marginRight    : '1.5rem',
    marginBottom   : '1.5rem',
    color          : 'white',
    backgroundColor: 'grey',
    padding        : '1rem',
    textAlign      : 'center',
    fontSize       : '1rem',
    lineHeight     : 'normal',
    float          : 'left',
};
const boxTarget = {
    canDrop( props, monitor ) {
        console.log( 'canDrop', props, monitor );
        // You can disallow drop based on props or item
        const item = monitor.getItem();
        return canMakeChessMove( item.fromPosition, props.position );
    },

    hover( props, monitor, component ) {
        console.log( 'hover', props, monitor, component );
        // This is fired very often and lets you perform side effects
        // in response to the hover. You can't handle enter and leave
        // here—if you need them, put monitor.isOver() into collect() so you
        // can just use componentWillReceiveProps() to handle enter/leave.

        // You can access the coordinates if you need them
        const clientOffset = monitor.getClientOffset();
        const componentRect = findDOMNode( component ).getBoundingClientRect();

        // You can check whether we're over a nested drop target
        const isJustOverThisOne = monitor.isOver( { shallow: true } );

        // You will receive hover() even for items for which canDrop() is false
        const canDrop = monitor.canDrop();
    },

    drop( props, monitor, component ) {
        console.log( 'drop', props, monitor, component );
        if (monitor.didDrop()) {
            // If you want, you can check whether some nested
            // target already handled drop
            return;
        }

        // Obtain the dragged item
        const item = monitor.getItem();

        // You can do something with it
//        ChessActions.movePiece( item.fromPosition, props.position );

        // You can also do nothing and return a drop result,
        // which will be available as monitor.getDropResult()
        // in the drag source's endDrag() method
        return { moved: true };
    }
};

const collect = ( connect, monitor ) => ({
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver           : monitor.isOver(),
    isOverCurrent    : monitor.isOver( { shallow: true } ),
    canDrop          : monitor.canDrop(),
    itemType         : monitor.getItemType()
});

@DropTarget( ItemTypes.CARD, boxTarget, collect )


export default class Column extends Component {

    componentWillReceiveProps( nextProps ) {

        console.log( 'PROPS', nextProps );
        if (!this.props.isOver && nextProps.isOver) {
            // You can use this as enter handler
        }

        if (this.props.isOver && !nextProps.isOver) {
            // You can use this as leave handler
        }

        if (this.props.isOverCurrent && !nextProps.isOverCurrent) {
            // You can be more specific and track enter/leave
            // shallowly, not including nested targets
        }
    }

    static propTypes = {
        connectDropTarget: PropTypes.func.isRequired,
        isOver           : PropTypes.bool.isRequired,
        canDrop          : PropTypes.bool.isRequired,
        lastDroppedItem  : PropTypes.object
    };

    render() {

        const {
                  accepts,
                  position,
                  canDrop,
                  isOver,
                  connectDropTarget,
                  lastDroppedItem
              } = this.props;


        const isActive = canDrop && isOver;

        
        console.log( 'Main props', this.props );


        return connectDropTarget(
            <div style={{ ...style }}>
                <Grid.Column>
                    <div>asdasdsa</div>
                </Grid.Column>,
            </div>
        );
    }
}


//export const Column = ( { children, type } ) => (
//    <GridColumn >
//        <div type={type}>
//            {children}
//        </div>
//    </GridColumn>
//);
//
//
//export default Column;




