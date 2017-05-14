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
};
/**
 *
 * @param items
 * @param handleEdit
 * @param handleClick
 */
export default ( { items, handleEdit }: Props ) =>
    (
        <Item.Group relaxed>
            {items.map( item => <ProjectItem
                key={generate()}
                handleEdit={handleEdit}
                {...item}
            /> )}
        </Item.Group>
    );
