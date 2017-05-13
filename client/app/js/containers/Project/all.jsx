/* @flow */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createProject, fetchProjects } from 'actions/project/all-projects';
import CreateProject from './../../components/ProjectForm/Create';
import ProjectList  from 'components/Project/List';
import PreloaderBlock from 'components/Preloader/Segment';
import Modal from 'components/Modal';
import bindFunc from 'utils/bind-functions';
/**
 *
 */


type State = {
    isOpenModal: boolean;
};

class Project extends React.PureComponent<State> {


    constructor() {
        super();
        this.state = {
            isOpenModal: false
        };
        /**
         *
         */
        bindFunc.call( this, [ 'handleEditProject', 'handleTriggerModal' ] );
    }

    componentWillMount() {
        const { fetchAll } = this.props;
        /**
         * Load all pages relate from user
         */
        fetchAll();
    }

    render() {


        const { isFetching, items } = this.props.projects.toObject();

        return (
            <div>
                <h1>'Projects Container'</h1>

                <PreloaderBlock active={!isFetching} preloadText="Preparing Files">
                    <ProjectList
                        items={items.toArray()}
                        handleEdit={this.handleTriggerModal}
                    />
                </PreloaderBlock>

                <CreateProject/>


                <Modal isOpen={this.state.isOpenModal}
                       handleClose={this.handleTriggerModal}>
                    <h1>close</h1>
                </Modal>
            </div>
        );
    }


    /**
     *
     * @param e
     */
    handleEditProject( e ) {
        e.preventDefault();
        /**
         * TODO: should to pass id and then give data
         */
        console.info( 'Edit' );
    }

    /**
     *
     * @param e
     */
    handleTriggerModal( e ) {
        e.preventDefault();
        this.setState( {
            isOpenModal: !this.state.isOpenModal
        } );
    }


}


/**
 *
 * @param state
 */
const mapStateToProps = state => {
    return {
        projects: state.get( 'projects' ),
    };
};
/**
 *
 * @param dispatch
 * @returns {{mapActions: (A|B|M|N)}}
 */
const mapDispatchToProps = ( dispatch ) =>
    ( {
        fetchAll: () => {
            dispatch( fetchProjects() );
        }

    });
/**
 *
 */

export  default connect( mapStateToProps, mapDispatchToProps )( Project );