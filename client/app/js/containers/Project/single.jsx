// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Divider, Container } from 'semantic-ui-react';
import FeedList from './../../components/Task/FeedList';
import Content from './../../components/Project/ItemOfList';
import TestForm from './../../components/Task/Create';
import { fetchProjectBySlug } from './../../actions/project/single';
import TeamList from  './../../components/Project/Teamlist';

/**
 * TODO: SHOULD TO REVIEW AND REFACTORING
 */
type Props = {
    slug: string,
    project: object,
    project_id: number
}
class SingleProject extends React.PureComponent<Props> {

    componentWillMount() {
        const { slug, fetchProject } = this.props;
        fetchProject( slug );

    }

    shouldComponentUpdate() {
        return true;
    }

    render() {

        const { project, project_id, tasks } = this.props;


        return (
            <Grid container doubling>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <Content {...project.toObject()} />
                        <Divider horizontal/>
                        <Container fluid>

                        </Container>
                    </Grid.Column>
                    <Grid.Column width={6} floated="right">
                        <FeedList tasks={tasks}/>
                    </Grid.Column>
                </Grid.Row>
                {/*{*/}
                {/*project_id && <TestForm project_id={project_id}/>*/}
                {/*}*/}

            </Grid>
        );
    }
}

const mapStateToProps = ( state ) => ({
    project   : state.get( 'single' ),
    slug      : state.getIn( [ 'routing', 'last' ] ),
    project_id: state.getIn( [ 'single', 'id' ] ),
    tasks     : state.getIn( [ 'single', 'tasks' ] )
});

const mapDispatchToProps = ( dispatch ) =>
    ( {
        fetchProject: ( slug ) => {
            dispatch( fetchProjectBySlug( slug ) );
        }

    });

/**
 *
 */
export default connect( mapStateToProps, mapDispatchToProps )( SingleProject );


