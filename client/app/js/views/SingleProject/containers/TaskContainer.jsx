import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateTask from 'containers/TaskForm';
import TaskList from './../../../components/Task/FeedList';
import { Loader } from 'semantic-ui-react';


class TaskContainer extends React.Component {


    render() {

        const { tasks, isFetching } = this.props;

        if (!isFetching)
            return <Loader
                active
                inline='centered'
                content='Loading tasks'/>;

        return (
            <TaskList tasks={tasks.toJS()}/>

        );
    }
}


/**
 *
 * @param state
 */
const mapStateToProps = state => ({
    tasks     : state.getIn( [ 'tasks', 'items' ] ),
    isFetching: state.getIn( [ 'tasks', 'isFetching' ] ),
});

/**
 *
 * @param dispatch
 * @returns {{mapActions: (A|B|M|N)}}
 */
//const mapDispatchToProps = ( dispatch ) =>
//    ( {
//        fetchAll: ( id_project ) => dispatch( fetchAll( id_project ) )
//
//
//    });


export default connect( mapStateToProps, null )( TaskContainer );