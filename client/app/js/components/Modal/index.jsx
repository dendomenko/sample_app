// @flow
import React from 'react';
import { Button, Header, Modal, Icon } from 'semantic-ui-react';

/**
 * TODO: NEEDS TO REVIEW
 * @param props
 * @returns {XML}
 */
export default ( props ) => {
//    console.info( props );
    return (
        <Modal
            open={props.isOpen}
            onClose={props.handleClose}
            basic
            size='small'
        >
            <Header icon='browser' content='Edit project [name]'/>
            <Modal.Content>
                {props.children}
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={props.handleClose} inverted>
                    <Icon name='close'/> Close
                </Button>
            </Modal.Actions>
        </Modal>
    );
};