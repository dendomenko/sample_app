import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskList from './../../../components/Task/FeedList';
import { Loader, Divider, Segment } from 'semantic-ui-react';
import { Button, Modal } from 'semantic-ui-react';
import CreateTask from 'containers/TaskForm';
class TaskContainer extends React.Component {

    state = { open: false };
    show = () => () => this.setState( { open: true } );
    close = () => this.setState( { open: false } );


    render() {

        const { tasks, isFetching } = this.props;
        const { open } = this.state;

        if (!isFetching)
            return <Loader
                active
                inline='centered'
                content='Loading tasks'/>;

        return (
            <div>
                <Segment tertiary>
                    <Button
                        onClick={this.show()}
                        basic
                        color='green'>
                        Create new task
                    </Button>
                </Segment>

                {/*<TaskList tasks={tasks.toJS()}/>*/}
                <Modal dimmer='blurring' open={open} onClose={this.close}>
                    <Modal.Header>Create task</Modal.Header>
                    <Modal.Content>
                        <CreateTask/>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative onClick={this.close}>
                            Close
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
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