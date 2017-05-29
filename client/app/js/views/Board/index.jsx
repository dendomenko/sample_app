import React, { PureComponent } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar  from './components/Navbar';
import BoardContainer from './containers/BoardContainer';
export default class BoardView extends React.PureComponent {

    render() {
        return (
            <Container>
                <NavBar/>
                <BoardContainer/>
            </Container>

        );
    }
}