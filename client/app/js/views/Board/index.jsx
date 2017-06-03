import React, { PureComponent } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar  from './components/Navbar';
import BoardContainer from './containers/BoardContainer';
export default class BoardView extends React.PureComponent {

    constructor( props, context ) {
        super();
        console.log( 'CONTEXT', context );
    }

    render() {
        console.log( 'Views', this.props );
        return (
            <Container fluid>
                <NavBar/>
                <BoardContainer/>
            </Container>

        );
    }
}