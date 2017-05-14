// @flow
import React from 'react';
import { Modal } from 'semantic-ui-react';
import EditForm from './edit-profile-form';

type Props = {
    isOpen: boolean,
    handleClose: void,
    userProps: object
};


export default ( { userProps, isOpen, handleClose }: Props ) => (
    <Modal
        open={isOpen}
        onClose={handleClose}
        basic
        size='small'
    >
        <Modal.Header>
            <h3>Edit Profile</h3>
        </Modal.Header>
        <Modal.Content>
            <EditForm userProps={userProps} handleCancel={handleClose}/>
        </Modal.Content>

    </Modal>
);