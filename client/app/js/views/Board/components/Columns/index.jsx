import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { DropTarget, } from 'react-dnd';
import ItemTypes from './../../Item-types';
import Card from './../Card';
import { generate } from 'shortid';

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
    canDrop( props, monitor ) {
        console.log( 'COLUMN drop canDrop', props, monitor );
        // You can disallow drop based on props or item
        const item = monitor.getItem();
        return true;
        // return canMakeChessMove( item.fromPosition, props.position );
    },


    drop( props, monitor ) {
        console.log( 'Props', props );
        props.onDrop( monitor.getItem() );
    },

    // endDrag( props, monitor, component )
    // {
    //     console.log( 'endDrag card props', props );
    //     console.log( 'endDrag card component', component );
    //     console.log( 'endDrag card monitor', monitor );
    // }


};

function collect ( connect, monitor ) {

    console.log( 'T', connect );

    return {
        connectDropTarget: connect.dropTarget(),
        isOver           : monitor.isOver(),
        canDrop          : monitor.canDrop(),
    };

}
@DropTarget( ItemTypes.CARD, boxTarget, collect )
export default class Column extends Component {

    state = {
        cards: []
    };

    componentWillReceiveProps ( nextProps ) {

        console.log( 'old PROPS', this.props );
        console.log( 'new PROPS', nextProps );
        // const { id } = nextProps;
        if ( this.props.canDrop !== nextProps.canDrop ) {


            console.log( 'Render' );
            // this.setState( {
            //     cards: this.state.cards.concat( [ id ] )
            // } );
        }

    }

    static propTypes = {
        connectDropTarget: PropTypes.func.isRequired,
        isOver           : PropTypes.bool.isRequired,
        canDrop          : PropTypes.bool.isRequired,
        lastDroppedItem  : PropTypes.object
    };

    render () {

        const {
            accepts,
            position,
            canDrop,
            isOver,
            connectDropTarget,
            lastDroppedItem,
            cards
        } = this.props;


        const isActive = canDrop && isOver;


        console.log( 'Main props', this.props );


        return connectDropTarget(
            <div style={{ ...style }}>
                <Grid.Column>
                    {cards.map( id => <Card key={generate()} id={id}/> )}
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




