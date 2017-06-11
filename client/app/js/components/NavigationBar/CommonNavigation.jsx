// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const CommonNavigation = ( { children } ) => (
    <Menu.Menu>
        <Menu.Item as={NavLink} to="/">
            Home
        </Menu.Item>
        <Menu.Item as={NavLink} to="/about">
            About
        </Menu.Item>
        <Menu.Item as={NavLink} to="/help">
            Help
        </Menu.Item>
        {children}
    </Menu.Menu>
);


export default CommonNavigation;