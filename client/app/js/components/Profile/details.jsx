// @flow
import React from 'react';
import { Item, Button } from 'semantic-ui-react';


type Props = {
    avatar: string,
    name: string,
    email: string,
    role: string
};
export default ( { avatar, name, email, role, handleClick }: Props ) => (
    <Item onClick={handleClick}>
        <Item.Image size='tiny' src={avatar.get( 'medium' )}/>
        <Item.Content>
            <Item.Header>{name}</Item.Header>
            <Item.Meta>{email}</Item.Meta>
        </Item.Content>
    </Item>
);