// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskForm from 'components/Task/Create';
import { createRequest } from 'actions/common';
import { GET_TASK_META } from 'constants/MetaData';
import { Loader } from 'semantic-ui-react';


/**
 * TODO: SHOULD REVIEW ID PROJECT
 */

class TaskFormContainer extends React.Component {

    componentWillMount() {
        const { fetchTaskMetaData } = this.props;
        /**
         *
         */
        fetchTaskMetaData();
    }

    render() {


        const { metaData, isFetching, author_id, project_id, executors } = this.props;

        /**
         *
         */
        if (!isFetching || (project_id === null))
            return <Loader active inline='centered' content="Loading"/>;
        else
            return <TaskForm
                author_id={author_id}
                executors={executors}
                project_id={project_id}
                metaData={metaData.toJS()}/>;


    }
}


const mapStateToProps = ( state ) => ({

    metaData   : state.getIn( [ 'meta', 'task' ] ),
    isFetching : state.getIn( [ 'meta', 'task', 'isFetching' ] ),
    project_id : state.getIn( [ 'single', 'id' ] ),
    executors  : state.getIn( [ 'single', 'team' ] ),
    author_id: state.getIn( [ 'user', 'uid' ] )
});

const mapDispatchToProps = ( dispatch ) =>
    ( {

        fetchTaskMetaData: () => {
            dispatch( createRequest( GET_TASK_META ) );
        }

    });

export default connect( mapStateToProps, mapDispatchToProps )( TaskFormContainer );