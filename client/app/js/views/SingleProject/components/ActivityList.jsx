// @flow
import PropTypes from 'prop-types';
import React from 'react';
import { List } from 'semantic-ui-react';
import ActivityItem from './ActivityItem';
import { generate } from 'shortid';

/**
 *
 * @param items
 * @param rest
 * @constructor
 */
const ActivityList = ( { items, ...rest } ) => (
    <List {...rest}>
        {items.map( item => <ActivityItem
            key={generate()}
            {...item}/> )}
    </List>
);


export default ActivityList;
