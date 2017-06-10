// @flow
import React from 'react';
import { Feed, Button, Popup } from 'semantic-ui-react';
//import { Link } from 'react-router-dom';

type Props = {
    id: number,
    avatar: string,
    name: string,
    role: string,
    email: string,
    handleRemove: void
};


export default ( { id, avatar, name, role, handleRemove }: Props ) => (
    <Feed.Event>
        <Feed.Label>
            <img src={avatar.thumb}/>
        </Feed.Label>
        <Feed.Content>
            {name}
        </Feed.Content>
        <Feed.Meta>
            {role}
        </Feed.Meta>


        { role !== 'author' &&
        <Feed.Extra>
            <Popup
                trigger={
                    <Button
                        size='tiny'
                        negative
                        circular
                        onClick={() => handleRemove( id )}
                        icon='remove circle'/>}
                content='Remove member'
            />
        </Feed.Extra>
        }

    </Feed.Event>
);

