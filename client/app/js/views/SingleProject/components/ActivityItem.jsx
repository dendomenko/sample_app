// @flow
import PropTypes from 'prop-types';
import React from 'react';
import { Image, List } from 'semantic-ui-react';

type Types = {
    created: string,
    text: string
};

const ActivityItem = ( { created, text }: Types ) => (
    <List.Item>
        <List.Content>
            <List.Header>{created}</List.Header>
            <List.Description>{text}</List.Description>
        </List.Content>
    </List.Item>
);


export default ActivityItem;
