import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActivityList from './../components/ActivityList';
import CreateTask from 'containers/TaskForm';
import { Loader, Button, Modal, Segment } from 'semantic-ui-react';


export class ActivityContainer extends Component {

    state = { open: false };
    triggerModal = () => () => this.setState( { open: !this.state.open } );


    render() {

        const { isFetching, activity } = this.props;
        const { open } = this.state;

        if (!isFetching)
            return <Loader
                active
                inline='centered'
                content='Loading activity'/>;

        else
            return ( <Segment>
                    <Segment attached='top'>
                        <Button
                            onClick={this.triggerModal()}
                            basic
                            color='teal'>
                            Create new task
                        </Button>
                    </Segment>

                    <ActivityList
                        items={activity.toJS()}
                        selection
                        verticalAlign='middle'/>

                    <Modal dimmer='blurring' open={open} onClose={this.triggerModal }>
                        <Modal.Header>Create task</Modal.Header>
                        <Modal.Content>
                            <CreateTask/>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button negative onClick={this.triggerModal }>
                                Close
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </Segment>
            );
    };
}

const mapStateToProps = state => ({
    isFetching: state.getIn( [ 'single', 'isFetching' ] ),
    activity  : state.getIn( [ 'single', 'activity' ] )
});


export default connect( mapStateToProps )( ActivityContainer );

