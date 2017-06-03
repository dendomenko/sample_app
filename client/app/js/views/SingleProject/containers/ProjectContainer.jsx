// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Divider } from 'semantic-ui-react';
import { fetchProjectBySlug } from './../actions';
import  TeamList  from './../components/Teamlist';
import Explore from './../components/ProjectExplore';
import CreateTask from 'containers/TaskForm';
import TaskList from './../../../components/Task/FeedList';
import  ActionMemberForm from './../components/ActionMembers';
import { fetchMembers } from 'actions/members';
import { generate } from 'shortid';

/**
 * TODO should to rework members
 */
class ProjectContainer extends React.Component {


    componentWillMount() {

        const { slug, fetchProject, fetchMembers } = this.props;

        fetchProject( slug );
        fetchMembers();
    }


    render() {

        const { team, project, members, project_id } = this.props;

        console.log( 'PROJECT_ID', project_id );

        return (
            <Grid stackable relaxed divided doubling>
                <Grid.Column>
                    <Explore {...project.toJS()}/>
                    <Divider/>
                    {project_id !== null &&
                    <ActionMemberForm
                        initialValues={{
                            'project_id': project_id
                        }}
                        members={ members }
                    />
                    }
                    <Divider/>
                    <TeamList items={team.toJS()}/>
                </Grid.Column>

            </Grid>

        )
            ;
    }
}


const mapStateToProps = ( state ) => ({
    project   : state.get( 'single' ),
    project_id: state.getIn( [ 'single', 'id' ] ),
    slug      : state.getIn( [ 'routing', 'last' ] ),
    tasks     : state.getIn( [ 'single', 'tasks' ] ),
    team      : state.getIn( [ 'single', 'team' ] ),
    members   : state.getIn( [ 'members', 'list' ] )


});

const mapDispatchToProps = ( dispatch ) =>
    ( {
        fetchProject: ( slug ) => dispatch( fetchProjectBySlug( slug ) ),

        fetchMembers: () => dispatch( fetchMembers() )
    });


export default connect( mapStateToProps, mapDispatchToProps )( ProjectContainer );