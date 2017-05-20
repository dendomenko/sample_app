// @flow
import React from 'react';
import { Item, Header } from 'semantic-ui-react';

type Props = {
    description: string,
    id: number,
    name: string,
    task_name: string,
};


export default ( { name, description, task_name }: Props ) => (
    <Item>
        <Header as='h3' icon='info' content='About project' textAlign="left"/>
        <Item.Content>
            <Item.Header>{name}</Item.Header>
            <Item.Meta>
                <span>{task_name}</span>
            </Item.Meta>
            <Item.Description>{description}</Item.Description>
            <Item.Extra>
                <span>Should add action like edit,remove</span>
            </Item.Extra>
        </Item.Content>
    </Item>
);
