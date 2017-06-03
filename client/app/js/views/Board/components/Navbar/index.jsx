import React from 'react';
import { Menu } from 'semantic-ui-react';


const BoardNavigation = () => (
    <Menu text>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item name='closest'/>
        <Menu.Item name='mostComments'/>
    </Menu>
);


export default BoardNavigation;