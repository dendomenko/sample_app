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
    drop: ( props, monitor ) => {
        if (monitor.didDrop())
            return;
    },

    canDrop: ( props, monitor ) => {


        const { item } = monitor.getItem();
        console.log( 'B', item.get( 'id' ) );
        return !item.get( 'id' );
    }
};

function collect( connect, monitor ) {
    console.log( 'M', monitor.getItem() );
//    const { item } = monitor.getItem();

    return {
        connectDropTarget: connect.dropTarget(),
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
        console.log( 'Constructor', props );
        this.state = {
            cards: props.items,
        };
        console.log( 'Constructor STATE', this.state );

    }


    componentWillReceiveProps( nextProps ) {

        if (this.props.isOver && !nextProps.isOver) {
            console.log( 'RECIVE', nextProps );
//            const { item: { id } } = nextProps;
//            this.setState( {
//                cards: this.state.cards.concat( [ id ] )
//            } );

        }

    }

    shouldComponentUpdate( nextProps, nextState ) {
//        console.log( 'should' );
//        console.log( nextProps );
//        console.log( this.props );
        return true;
    }


    render() {

        const {
                  canDrop,
                  isOver,
                  connectDropTarget,
                  type
              } = this.props;

        const { cards } = this.state;


        return connectDropTarget(
            <div>
                {cards.map( card => <DndCard key={generate()} item={card}/> )}
            </div>
        );
    }
}





