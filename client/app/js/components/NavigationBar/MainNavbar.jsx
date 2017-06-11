import React from 'react';
import { Menu, Segment, } from 'semantic-ui-react';


const NavBar = ( { LeftSide, RightMenu } ) => (
    <Menu color='black' fluid pointing secondary>
        <LeftSide/>
        <Menu.Menu position="right">
            <RightMenu/>
        </Menu.Menu>
    </Menu>
);

export default NavBar;