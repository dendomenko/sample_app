// @flow
import React from 'react';
import { Session } from 'utils/Session';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Segment, Dropdown, Image } from 'semantic-ui-react';

export default( { username }: { username: string } ) => {
    console.info( 'MENU', username );
    return (
        <Segment inverted>
            <Menu inverted pointing secondary>
                {/*{Session.getToken() ? <PrivateNavigation /> : <PublicNavigation/>}*/}
                {Session.getToken() && <UserDropdown username={username}/>}
            </Menu>
        </Segment>
    );
};

/**
 *  Render private links
 * @constructor
 */
const PrivateNavigation = () => (
    <Menu.Menu position='left'>
        <Menu.Item as={NavLink} to="/projects">
            Projects
        </Menu.Item>
        <Menu.Item as={NavLink} to="/dashboard">
            Dashboard
        </Menu.Item>
    </Menu.Menu>
);


/**
 *
 * @constructor
 */
const PublicNavigation = () => (
    <Menu.Menu position='right'>
        <Menu.Item as={NavLink} to="/">
            Home
        </Menu.Item>
        <Menu.Item as={NavLink} to="/about">
            About
        </Menu.Item>
        <Menu.Item as={NavLink} to="/help">
            Help
        </Menu.Item>
    </Menu.Menu>
);

/**
 * TODO: SHOULD ADD AVATAR OF USER
 * @param props
 * @constructor
 */

const UserDropdown = ( { username }: { username: string; } ) => (
    <Dropdown text={username} pointing className='link item'>
        <Dropdown.Menu>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Logout</Dropdown.Header>
        </Dropdown.Menu>
    </Dropdown>
);
