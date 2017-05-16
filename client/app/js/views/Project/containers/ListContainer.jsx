// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRequest } from 'actions/common';
import  { CREATE_PROJECT, FETCH_PROJECTS } from './../constants';
import ProjectList from './../components/entity-list';
import { Loader } from 'semantic-ui-react';
//import CreateProject from './../../components/ProjectForm/Create';
//import ProjectList  from 'components/Project/List';
//import PreloaderBlock from 'components/Preloader/Segment';
//import Modal from 'components/Modal';
//import bindFunc from 'utils/bind-functions';


class ListContainer extends React.Component {


    componentDidMount() {
        const { fetchAll } = this.props;

        fetchAll();
    }

    render() {
        const { projects, isFetching } = this.props;

        if (!isFetching)
            return <Loader content="loading"/>;
        else
            return <ProjectList items={projects.toArray()}/>;

    }
}


/**
 *
 * @param state
 */
const mapStateToProps = state => {
    return {
        projects  : state.getIn( [ 'projects', 'items' ] ),
        isFetching: state.getIn( [ 'projects', 'isFetching' ] ),
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
            dispatch( createRequest( FETCH_PROJECTS ) );
        }

    });
/**
 *
 */

export  default connect( mapStateToProps, mapDispatchToProps )( ListContainer );