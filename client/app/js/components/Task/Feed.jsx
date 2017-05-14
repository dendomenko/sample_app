// @flow
import React from 'react';
import { Feed } from 'semantic-ui-react';


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


export default ( { title, name, description, assignee, reporter, priority, status, resolution }: Props ) => (
    <Feed.Event
        content={title}
        meta={name}
        summary={description}
        extraText={extraText}
    />

);


