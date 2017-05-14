// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Divider, Container, Modal } from 'semantic-ui-react';
import FeedList from './../../components/Task/FeedList';
import Content from './../../components/Project/ItemOfList';
import TestForm from './../../components/Task/Create';
import { fetchProjectBySlug } from './../../actions/project/single';
import TeamList from  './../../components/Project/Teamlist';
import TeamActions from  './../../components/Project/HandleTeam';
import bindFunc from './../../utils/bind-functions';
import { handleRequest as createTeam } from './../../actions/common';
import { CREATE_TEAM } from './../../constants/Team';
/**
 * TODO: SHOULD TO REVIEW AND REFACTORING
 */
type Props = {
    slug: string,
    project: object,
    project_id: number
}
class SingleProject extends React.PureComponent<Props> {


    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            children   : null,
        };
        bindFunc.call( this, [ 'handleCreateTeam', 'handleSelectTeam' ] );
    }

    componentWillMount() {
        const { slug, fetchProject } = this.props;
        fetchProject( slug );

    }

    shouldComponentUpdate() {
        return true;
    }

    render() {

        const { project, project_id, tasks, team } = this.props;

        const { users } = team;
        return (
            <Grid container doubling>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <Content {...project.toObject()} />
                        <Divider horizontal/>
                        <Container fluid>
                            <TeamActions
                                onCreate={this.handleCreateTeam}
                                onSelect={this.handleSelectTeam}/>
                            <TeamList items={users || []}/>
                        </ Container >
                    </ Grid.Column >
                    < Grid.Column width={6} floated="right">
                        <FeedList tasks={tasks}/>
                    </Grid.Column>
                </Grid.Row>
                {/*{*/}
                {/*project_id && <TestForm project_id={project_id}/>*/}
                {/*}*/}


            </Grid>
        );
    }

    handleCreateTeam() {
        const { createTeam } = this.props;
        const data = {
            values : {
                name      : 'First TEAM',
                project_id: 1,
                users     : '[ 2,3,4,5]'
            },
            resolve: () => ({}),
            reject : () => ({}),
        };
        createTeam( data );
    }

    handleSelectTeam() {

    }

}

const mapStateToProps = ( state ) => ({
    project   : state.get( 'single' ),
    slug      : state.getIn( [ 'routing', 'last' ] ),
    project_id: state.getIn( [ 'single', 'id' ] ),
    tasks     : state.getIn( [ 'single', 'tasks' ] ),
    team      : state.getIn( [ 'single', 'team' ] )
});

const mapDispatchToProps = ( dispatch ) =>
    ( {
        fetchProject: ( slug ) => {
            dispatch( fetchProjectBySlug( slug ) );
        },
        createTeam  : ( payload ) => {
            dispatch( createTeam( CREATE_TEAM, payload ) );
        }

    });

/**
 *
 */
export default connect( mapStateToProps, mapDispatchToProps )( SingleProject );


