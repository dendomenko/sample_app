// @flow
import React from 'react';
import { Session } from 'utils/Session';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Dropdown, Image, Button } from 'semantic-ui-react';


const trigger = ( username: ?string, avatar: ?string ) => (
    <span>
        <Image avatar src={avatar}/>
        {username}
    </span>
);
const UserNavigation = ( { avatar, username, handleLogout }: { avatar: string, username: string, handleLogout: void; } ) => (

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

);


export default UserNavigation;