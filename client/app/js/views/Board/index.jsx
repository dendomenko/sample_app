import React, { PureComponent } from 'react';
import { Container } from 'semantic-ui-react';
import { Filter } from './components/filter-navbar';
import BoardContainer from './containers/BoardContainer';
export default class BoardView extends React.PureComponent {


    render() {

        const { projectname } = this.props.match.params;
        return (
            <Container fluid>
                <Filter/>
                <BoardContainer slug={projectname}/>
            </Container>

        );
    }
}