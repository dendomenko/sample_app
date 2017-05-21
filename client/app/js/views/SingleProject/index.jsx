import React, { PureComponent } from 'react';
import ProjectContainer  from './containers/ProjectContainer';
import TaskContainer from './containers/TaskContainer';
import { Container, Grid } from 'semantic-ui-react';
/**
 *
 */
export default class SingleProjectView extends React.PureComponent {

    render() {
        return (

            <Grid divided='horizontal'>

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
    }
}

{/*<Grid.Column className="tm-scrolable">*/
}

{/*<TaskList tasks={tasks}/>*/
}
{/*/!*<CreateTask/>*!/*/
}
{/*</Grid.Column>*/
}