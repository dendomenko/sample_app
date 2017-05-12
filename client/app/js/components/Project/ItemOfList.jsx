// @flow
import React from 'react';
import { Button, Image, Item } from 'semantic-ui-react';


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
    <Item onClick={() => handleClick( id )}>
        <Item.Content verticalAlign='middle'>
            <Item.Header>{name}</Item.Header>
            <Item.Meta>{task_name}</Item.Meta>
            <Item.Description>{description}</Item.Description>
            <Item.Extra>
                <Button floated='right' onClick={handleEdit}>
                    Edit
                </Button>
            </Item.Extra>
        </Item.Content>
    </Item>
);
