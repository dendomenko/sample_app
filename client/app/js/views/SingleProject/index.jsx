import React from  'react';
import ProjectContainer  from './containers/ProjectContainer';
import ActivityContainer from './containers/ActivityContainer';
import { Container, Grid } from 'semantic-ui-react';
/**
 *
 */
const SingleProjectView = (  ) => (
        <Grid relaxed>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <ProjectContainer/>
                </Grid.Column>
                <Grid.Column className="tm-scrolable">
                    <ActivityContainer/>
                </Grid.Column>
            </Grid.Row>
        </Grid>

    );



export  default SingleProjectView;