import React from 'react';
import {Session} from 'utils/Session';
import {NavLink, Link} from 'react-router-dom';
import {Menu, Segment} from 'semantic-ui-react';

export default(props) => (
    <Segment inverted>
        <Menu inverted pointing secondary>
            <Menu.Item as={NavLink} to="/">
                Home
            </Menu.Item>
            <Menu.Item as={NavLink} to="/about">
                About
            </Menu.Item>
            <Menu.Item as={NavLink} to="/help">
                Help
            </Menu.Item>
            {Session.getToken() && <PrivateLinks />}
        </Menu>
    </Segment>
);

/**
 *  Render private links
 * @constructor
 */
const PrivateLinks = () => (
    <Menu.Menu position='right'>

        <Menu.Item as={NavLink} to="/projects">
            Projects
        </Menu.Item>
        <Menu.Item as={NavLink} to="/dashboard">
            Dashboard
        </Menu.Item>
        <Menu.Item as={NavLink} to="/userprofile">
            Userprofile
        </Menu.Item>

    </Menu.Menu>
);