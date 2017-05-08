/* @flow */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createProject, fetchProjects } from 'actions/project/all-projects';
import CreateProjectForm  from './../../components/CreateProjectForm';
import ProjectList  from './../../components/Project/List';
import PreloaderBlock from './../../components/Preloader/Segment';
import bindFunc from './../../utils/bind-functions';
/**
 *
 */


class Project extends React.PureComponent {

    constructor() {
        super();
        bindFunc.call( this, [ 'handleCreateProject', 'handleEditProject' ] );
    }

    componentWillMount() {
        const { dispatch } = this.props;
        /**
         * Load all pages relate from user
         */
        dispatch( fetchProjects() );
    }

    render() {

        const { isFetching, items } = this.props.projects.toObject();

        return (
            <div>
                <h1>'Projects Container'</h1>

                <PreloaderBlock active={!isFetching} preloadText="Preparing Files">
                    <ProjectList
                        items={items.toArray()}
                        handleEdit={this.handleEditProject}
                    />
                </PreloaderBlock>
                <CreateProjectForm handleSubmit={this.handleCreateProject}/>
            </div>
        );
    }


    handleCreateProject( e ) {
        e.preventDefault();

        const { dispatch } = this.props;
        const { newProject } = this.props.form;
        /**
         *
         */

        dispatch( createProject( newProject.values ) );
    }

    handleEditProject( e ) {
        e.preventDefault();
        console.info( 'Edit' );

    }
}


/**
 *
 * @param state
 */
const mapStateToProps = state => {
    return {
        projects: state.get( 'projects' ),
        form    : state.get( 'form' )
    };
};
/**
 *
 * @param dispatch
 * @returns {{mapActions: (A|B|M|N)}}
 */
function mapDispatchToProps( dispatch ) {
    return { dispatch };
}
/**
 *
 */

export  default connect( mapStateToProps, mapDispatchToProps )( Project );