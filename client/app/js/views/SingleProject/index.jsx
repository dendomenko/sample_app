import React, { PureComponent } from 'react';
import ProjectContainer  from './containers/ProjectContainer';
import { Container } from 'semantic-ui-react';
/**
 *
 */
export default class SingleProjectView extends React.PureComponent {

    render() {
        return (
            <Container>
                <ProjectContainer/>
            </Container>
        );
    }
}