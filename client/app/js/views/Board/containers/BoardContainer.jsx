import React, { Component } from 'react';
import { connect } from 'react-redux';
import Column from './../components/Columns';
import DnDGrid from './../components/DndLayout';
import Card from './../components/Card';


const cards = [ {
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


    render() {
        return (
            <DnDGrid>
                <Column/>
                <div>
                    {cards.map( ( card, i ) => (
                        <Card
                            key={card.id}
                            index={i}
                            id={card.id}
                            text={card.text}
                            moveCard={this.moveCard}
                        />
                    ) )}

                </div>
            </DnDGrid>

        );
    }
}


export default connect()( BoardContainer );