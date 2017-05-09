// @flow
import React from 'react';
import { Button, Image, List } from 'semantic-ui-react';


/**
 *
 * @param props
 */
export default ( { name, description, task_name, handleEdit }: { name: string, description: string; task_name: string, handleEdit: void } ) =>
    (
        <List.Item>
            <List.Content floated='right'>
                <Button>Add</Button>
                <Button onClick={handleEdit}>Edit</Button>
            </List.Content>
            <List.Content>
                <List.Header>{name}</List.Header>
                <List.Content>{task_name} </List.Content>
                <List.Description> {description} </List.Description>
                {/*<Image avatar src='/assets/images/avatar/small/lena.png' />*/}

            </List.Content>
        </List.Item>
    );