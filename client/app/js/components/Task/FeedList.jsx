// @flow
import React from 'react';
import Task  from './Feed';
import { Item, Header } from 'semantic-ui-react';
import  { generate } from 'shortid';
type Props = {
    tasks: Array<Object>,
};

export default ( { tasks }: Props ) => {
    

    return (
        <Item.Group relaxed divided link>
            <Header as="h2" content='Recently activity' textAlign='center'/>
            { tasks.map( task => <Task key={generate()} {...task} /> ) }
        </Item.Group>
    );
};
