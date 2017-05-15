// @flow
import React from 'react';
import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


type Props = {
    title: string,
    name: string,
    description: string,
    assignee: string,
    reporter: string,
    priority: string,
    status: string,
    resolution: string
};

/**
 *  TODO:SHOULD REWORK TO LINKED
 * @param title
 * @param name
 * @param description
 * @param time_do
 * @param assignee
 * @param reporter
 * @param priority
 * @param status
 * @param resolution
 */
export default ( {
                     title, name, description,
                     time_do, assignee, reporter,
                     priority, status, resolution
                 }: Props ) => (
    <Item as={Link} replace={true} to="">
        <Item.Content>
            <Item.Header>{title}</Item.Header>
            <Item.Meta>
                <div>{name}</div>
                <div>{time_do}</div>
            </Item.Meta>
            <Item.Description>{description}</Item.Description>
        </Item.Content>
    </Item>
);


