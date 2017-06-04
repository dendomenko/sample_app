import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { generate } from 'shortid';
import ItemTypes from './../../Item-types';
import { DndCard } from './../Card';
import { List } from  'immutable';

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
    border         : '1px solid black'
};
const boxTarget = {

    drop( props, monitor, component ) {
        if (monitor.didDrop()) {
            // If you want, you can check whether some nested
            // target already handled drop
            return;
        }

        const item = monitor.getItem();

        console.log( 'drop', item );
        console.log( 'drop', props );
    },

    canDrop: ( props, monitor ) => {
//        const { item } = monitor.getItem();
//        console.log( 'B', props );
//        console.log( 'B1', monitor.getItem() );
        return true;
    }
};

function collect( connect, monitor ) {


    return {
        connectDropTarget: connect.dropTarget(),
        itemType         : monitor.getItemType(),
        isOverCurrent    : monitor.isOver( { shallow: true } ),
        isOver           : monitor.isOver(),
        canDrop          : monitor.canDrop(),
        item             : monitor.getItem()
    };

}
@DropTarget( ItemTypes.CARD, boxTarget, collect )
export default class Column extends Component {

    static propTypes = {
        connectDropTarget: PropTypes.func.isRequired,
        isOver           : PropTypes.bool.isRequired,
        canDrop          : PropTypes.bool.isRequired,
        lastDroppedItem  : PropTypes.object,
        type             : PropTypes.string.isRequired
    };
    static defaultProps = {
        items: List( [] ),
        type : ''
    };

    constructor( props ) {
        super( props );
//        console.log( 'Constructor', props );
        this.state = {
            cards: props.items,
        };
//        console.log( 'Constructor STATE', this.state );

    }


    componentWillReceiveProps( nextProps ) {

        if (this.props.isOver && !nextProps.isOver) {
            console.log( 'RECIVE', nextProps );
            const { item: { id } } = nextProps;
            console.log( 'id', id );
//            this.setState( {
//                cards: this.state.cards.concat( [ id ] )
//            } );

        }

    }


    render() {

        const {
                  canDrop,
                  isOver,
                  connectDropTarget,
                  type
              } = this.props;

        const { cards } = this.state;

        console.log( type, cards );

        return connectDropTarget(
            <div>
                {cards.map( card => <DndCard key={generate()} item={card}/> )}
            </div>
        );
    }
}





