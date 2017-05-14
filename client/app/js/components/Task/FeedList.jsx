// @flow
import React from 'react';
import Task  from './Feed';
import { Item } from 'semantic-ui-react';
import  { generate } from 'shortid';
type Props = {
    tasks: array<Object>,
};

export default ( { tasks }: { tasks: array<object> } ) => (
    <Item.Group relaxed divided link>
        { tasks.map( task => <Task key={generate()} {...task} /> ) }
    </Item.Group>
);
