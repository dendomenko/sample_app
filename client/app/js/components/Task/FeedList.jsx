// @flow
import React from 'react';
import Task  from './Feed';
import { Feed } from 'semantic-ui-react';
import  { generate } from 'shortid';
type Props = {
    tasks: array<Object>,
};

export default ( { tasks }: { tasks: array<object> } ) => (
    <Feed>
        { tasks.map( task => <Task key={generate()} {...task} /> ) }
    </Feed>
);
