import React, { Component } from 'react';
import { connect } from 'react-redux';
import Column from './../components/Columns';
import DnDGrid from './../components/DndLayout';
import Card from './../components/Card';


const default_cards = [
    {
        id  : 1,
        text: 'Write a cool JS library',
    }, {
        id  : 2,
        text: 'Make it generic enough',
    }, {
        id  : 3,
        text: 'Write README',
    }, {
        id  : 4,
        text: 'Create some examples',
    }, {
        id  : 5,
        text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
    }, {
        id  : 6,
        text: '???',
    }, {
        id  : 7,
        text: 'PROFIT',
    }
];


export class BoardContainer extends React.Component {

    state = {
        cards: []
    };

    componentWillReceiveProps ( nextProps ) {

        console.log( 'main old PROPS', this.props );
        console.log( 'main new PROPS', nextProps );
        // const { id } = nextProps;
        if ( this.props.canDrop !== nextProps.canDrop ) {


            console.log( 'Render' );
            // this.setState( {
            //     cards: this.state.cards.concat( [ id ] )
            // } );
        }

    }

    render () {
        const { cards } = this.state;
        return (
            <DnDGrid>
                <Column cards={cards}/>
                <div>
                    {default_cards.map( ( card, i ) => (
                        <Card
                            key={card.id}
                            index={i}
                            id={card.id}
                        />
                    ) )}

                </div>
            </DnDGrid>

        );
    }
}


export default connect()( BoardContainer );