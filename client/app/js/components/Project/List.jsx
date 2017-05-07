// @flow
import React from 'react';
import Item from  './ItemOfList';
import { List } from 'semantic-ui-react';
import { generate } from 'shortid';


/**
 *
 * @param props
 */
export default ( { items }: { items: Array<Object> } ) =>
    (
        <List verticalAlign='middle'>
            {items.map( item => <Item key={generate()} {...item} /> )}
        </List>
    );
