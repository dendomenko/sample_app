// @flow
import React from 'react';
import Item from  './ItemOfList';
import { List } from 'semantic-ui-react';


/**
 *
 * @param props
 */
export default ( { items }: { items: Array } ) => (
    <List verticalAlign='middle'>
        {items.map( item => <Item {...item} /> )}
    </List>
);