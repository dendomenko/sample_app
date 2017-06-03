import React from 'react';
import { Menu } from 'semantic-ui-react';


export default BoardNavBar = () => (
    <Menu text>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item name='closest'/>
        <Menu.Item name='mostComments'/>
    </Menu>
);