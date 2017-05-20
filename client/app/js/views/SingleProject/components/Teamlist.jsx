// @flow
import React from  'react';
import { Feed, Header, Icon, Divider } from 'semantic-ui-react';
import { generate } from 'shortid';
import Item from './TeamItem';
import ActionMembers from './ActionMembers';

type Props = {
    items: Array<Object>
};

/**
 *
 * @param items
 */
export  default ( { items }: Props ) => (

    <Feed>
        <Header as='h4' icon textAlign='center'>
            <Icon name='users' circular/>
            <Header.Content>
                Team
            </Header.Content>
            <Header.Subheader>
                Members which project
            </Header.Subheader>
        </Header>
        {
            items.map( item => <Item key={generate()}{...item}/> )
        }
        <Divider/>
        <ActionMembers/>

    </Feed>
);

