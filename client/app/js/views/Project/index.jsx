import React, { PureComponent } from 'react';
import { Container } from 'semantic-ui-react';
import ListContainer  from './containers/ListContainer';

export default class ProjectView extends React.PureComponent {

    render() {
        return (
            <Container fluid>
                <ListContainer/>
            </Container>
        );
    }
}