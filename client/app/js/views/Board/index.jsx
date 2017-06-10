import React, { PureComponent } from 'react';
import { Container } from 'semantic-ui-react';
//import NavBar  from './components/Navbar';
import BoardContainer from './containers/BoardContainer';
export default class BoardView extends React.PureComponent {


    render() {
        
        const { projectname } = this.props.match.params;
        return (
            <Container fluid>
                {/*<NavBar/>*/}
                <BoardContainer slug={projectname}/>
            </Container>

        );
    }
}