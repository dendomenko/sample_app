import React, { PureComponent } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar  from './components/Navbar';

export default class BoardView extends React.PureComponent {

    render() {
        return (
            <Container>
                <NavBar/>
            </Container>

        );
    }
}