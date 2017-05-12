// @flow
import React from 'react';
import Item from  './ItemOfList';
import { List } from 'semantic-ui-react';
import { generate } from 'shortid';


/**
 *
 */
type Props = {

    items: array<Object>,
    handleEdit: void,
    handleClick: void
};
/**
 *
 * @param items
 * @param handleEdit
 * @param handleClick
 */
export default ( { items, handleEdit, handleClick }: Props ) =>
    (
        <List verticalAlign='middle'>
            {items.map( item => <Item
                key={generate()}
                handleClick={ handleClick}
                handleEdit={handleEdit}
                {...item}
            /> )}
        </List>
    );
