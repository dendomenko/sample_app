// @flow
import React from 'react';
import { Session } from 'utils/Session';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Dropdown, Image, Button } from 'semantic-ui-react';
/**
 *  Render private links
 * @constructor
 */
export const PrivateNavigation = () => (
    <Menu.Menu>
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
export const PublicNavigation = () => (
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
    </Menu.Menu>
);

/**
 *
 * */

const trigger = ( username: ?string, avatar: ?string ) => (
    <span>
        <Image avatar src={avatar}/>
        {username}
    </span>
);
export const UserDropdown = ( { avatar, username, handleLogout }: { avatar: string, username: string, handleLogout: void; } ) => (
    <Menu.Menu position="right">
        <Dropdown trigger={trigger( username, avatar )}>
            <Dropdown.Menu>
                <Dropdown.Item
                    as={NavLink} to="/userprofile">Profile</Dropdown.Item>
                {/*<Dropdown.Item as={NavLink} to="/userprofile">Settings</Dropdown.Item>*/}
                <Dropdown.Divider />
                <Dropdown.Item
                    as={Button}
                    onClick={ handleLogout }>
                    Logout
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </Menu.Menu>
);

