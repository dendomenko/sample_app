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
import { createRequest } from './../../actions/common';
import { CREATE_TEAM } from './../../constants/Team';
import FormTeam from './../../components/Project/FormTeam';
import SelectTeamForm from './../../components/Project/SelectTeamForm';

/**
 * TODO: SHOULD TO REVIEW AND REFACTORING
 */
type Props = {
    slug: string,
    project: object,
    project_id: number
}

type State = {
    teamForm: string,
};


class SingleProject extends React.PureComponent<Props, State> {


    constructor() {
        super();

        this.state = {
            teamForm: null,
        };
        bindFunc.call( this, [ 'handleCreateTeam', 'handleSelectTeam' ] );
    }

    componentWillMount() {


        const { slug, fetchProject, fetchMembers } = this.props;
        fetchProject( slug );

        fetchMembers();

    }

    shouldComponentUpdate() {
        return true;
    }

    render() {

        const { project, project_id, tasks, team, members } = this.props;

        const { users } = team;

        console.log( 'RENDERRRRRR ========================' );
        return (
            <Grid container doubling>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <Content {...project.toObject()} />
                        <TeamActions
                            onCreate={this.handleCreateTeam}
                            onSelect={this.handleSelectTeam}/>

                        <Divider/>
                        {this.renderForm( this.state.teamForm )}
                        <Divider/>
                        <Container fluid>

                            {/*<FormTeam members={members.toArray()}/>*/}
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

        this.setState( {
            teamForm: 'create'
        } );
//        const { createTeam } = this.props;
//        const data = {
//            values : {
//                name      : 'First TEAM',
//                project_id: 1,
//                users     : '[ 2,3,4,5]'
//            },
//            resolve: () => ({}),
//            reject : () => ({}),
//        };
//        createTeam( data );
    }

    handleSelectTeam() {
        this.setState( {
            teamForm: 'select'
        } );
    }

    renderForm( type ) {
        switch ( type ) {
            case 'create':
                return <FormTeam/>;
            case 'select':
                return <SelectTeamForm/>;
            default:
                return false;
        }
    }


}

const mapStateToProps = ( state ) => ({
    project   : state.get( 'single' ),
    slug      : state.getIn( [ 'routing', 'last' ] ),
    project_id: state.getIn( [ 'single', 'id' ] ),
    tasks     : state.getIn( [ 'single', 'tasks' ] ),
    team      : state.getIn( [ 'single', 'team' ] ),
    members   : state.getIn( [ 'members', 'list' ] )
});

const mapDispatchToProps = ( dispatch ) =>
    ( {
        fetchProject: ( slug ) => {
            dispatch( fetchProjectBySlug( slug ) );
        },
        createTeam  : ( payload ) => {
            dispatch( createRequest( CREATE_TEAM, payload ) );
        },
        fetchMembers: () => {
            dispatch( createRequest( 'FETCH_USERS' ) );
        }

    });

/**
 *
 */
export default connect( mapStateToProps, mapDispatchToProps )( SingleProject );


