// @flow
import React from 'react';
import ProjectItem from  './ItemOfList';
import { Item } from 'semantic-ui-react';
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
        <Item.Group relaxed>
            {items.map( item => <ProjectItem
                key={generate()}
                handleClick={ handleClick}
                handleEdit={handleEdit}
                {...item}
            /> )}
        </Item.Group>
    );
