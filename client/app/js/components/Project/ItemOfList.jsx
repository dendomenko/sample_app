// @flow
import React from 'react';
import { Button, Image, Item } from 'semantic-ui-react';
import  { Link } from 'react-router-dom';

/**
 *
 */
type Props = {
    slug: string,
    name: string,
    description: string,
    task_name: string,
    handleEdit: void
}
/**
 *
 * @param name
 * @param description
 * @param task_name
 * @param handleEdit
 * @param handleClick
 */
export default ( { slug, name, description, task_name, handleEdit, handleClick }: Props ) => (
    <Item as={Link} to={`projects/${slug}`}>
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
