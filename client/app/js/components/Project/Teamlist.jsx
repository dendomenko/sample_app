// @flow
import React from  'react';
import { Feed } from 'semantic-ui-react';
import { generate } from 'shortid';
import Item from './TeamItem';

type Props = {
    items: array<object>
};

/**
 *
 * @param items
 */
export  default ( { items }: Props ) => (

    <Feed>
        {
            items.map( item => <Item {...item}/> )
        }
    </Feed>
);

