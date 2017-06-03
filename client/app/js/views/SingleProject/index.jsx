import React from  'react';
import ProjectContainer  from './containers/ProjectContainer';
import TaskContainer from './containers/TaskContainer';
import { Container, Grid } from 'semantic-ui-react';
/**
 *
 */
const SingleProjectView = () =>
    (

        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <ProjectContainer/>
                </Grid.Column>
                <Grid.Column className="tm-scrolable">
                    <TaskContainer/>
                </Grid.Column>
            </Grid.Row>

        </Grid>

    );


export  default SingleProjectView;