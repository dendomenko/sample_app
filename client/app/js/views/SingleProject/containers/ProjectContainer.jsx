// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Divider } from 'semantic-ui-react';
import { fetchProjectBySlug } from './../actions';
import  TeamList  from './../components/Teamlist';
import Explore from './../components/ProjectExplore';
import CreateTask from 'containers/TaskForm';


/**
 *
 */
class ProjectContainer extends React.Component {


    componentWillMount() {

        const { slug, fetchProject } = this.props;

        fetchProject( slug );
    }



    render() {

        const { team, project } = this.props;
        return (
            <Grid relaxed divided doubling>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Explore {...project.toJS()}/>
                        <Divider/>
                        <TeamList items={team.toJS()}/>
                    </Grid.Column>
                    <Grid.Column>
                        <span>For card</span>
                        <CreateTask/>
                    </Grid.Column>
                </Grid.Row>

            </Grid>

        );
    }
}


const mapStateToProps = ( state ) => ({
    project: state.get( 'single' ),
    slug   : state.getIn( [ 'routing', 'last' ] ),
    tasks  : state.getIn( [ 'single', 'tasks' ] ),
    team   : state.getIn( [ 'single', 'team' ] ),
});

const mapDispatchToProps = ( dispatch ) =>
    ( {
        fetchProject: ( slug ) => {
            dispatch( fetchProjectBySlug( slug ) );
        }
    });


export default connect( mapStateToProps, mapDispatchToProps )( ProjectContainer );