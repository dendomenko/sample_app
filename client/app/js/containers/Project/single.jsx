// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import FeedList from './../../components/Task/FeedList';
import Content from './../../components/Project/ItemOfList';
import TestForm from './../../components/Task/Create';
import { fetchProjectBySlug } from './../../actions/project/single';

type Props = {
    slug: string,
    project: object,
    project_id: number
}
class SingleProject extends React.PureComponent<Props> {

    componentDidMount() {
        const { slug, fetchProject } = this.props;
        fetchProject( slug );
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        console.info( this.props );
        const { project, project_id } = this.props;

        return (
            <Grid container doubling>
                <Grid.Row>
                    <Grid.Column>
                        <Content {...project.toObject()} />
                    </Grid.Column>
                    <Grid.Column>
                        list of tasks
                    </Grid.Column>
                </Grid.Row>
                <TestForm project_id={project_id}/>
            </Grid>
        );
    }
}

const mapStateToProps = ( state ) => ({
    project   : state.get( 'single' ),
    slug      : state.getIn( [ 'routing', 'last' ] ),
    project_id: state.getIn( [ 'single', 'id' ] )
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


