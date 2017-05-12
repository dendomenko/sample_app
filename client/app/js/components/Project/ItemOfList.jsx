// @flow
import React from 'react';
import { Button, Image, List } from 'semantic-ui-react';


/**
 *
 */
type Props = {
    id: number,
    name: string,
    description: string,
    task_name: string,
    handleEdit: void,
    handleClick: void,
}
/**
 *
 * @param name
 * @param description
 * @param task_name
 * @param handleEdit
 * @param handleClick
 */
export default ( { id, name, description, task_name, handleEdit, handleClick }: Props ) => (
    <List.Item onClick={() => handleClick( id )}>
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