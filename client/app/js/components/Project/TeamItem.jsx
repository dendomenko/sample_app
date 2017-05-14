// @flow
import React from 'react';
import { Feed } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

type Props = {
    id: number,
    avatar: string,
    name: string,
    role: string,
    email: string
};


export default ( { id, avatar, name, role }: Props ) => (
    <Feed.Event>
        <Feed.Label>
            <img src={avatar}/>
        </Feed.Label>
        <Feed.Content>
            {name}
        </Feed.Content>
        <Feed.Meta>
            {role}
        </Feed.Meta>
    </Feed.Event>
);

