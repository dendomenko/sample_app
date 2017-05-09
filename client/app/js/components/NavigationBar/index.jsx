// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Session } from 'utils/Session';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Segment, Dropdown, Image } from 'semantic-ui-react';
import  { userLogout } from 'actions/user/';


const MainNavigation = ( props ) => {
    console.info( 'MENU', props );
    return (
        <Segment inverted>
            <Menu inverted pointing secondary>
                {Session.getToken() ? <PrivateNavigation /> : <PublicNavigation/>}
                {Session.getToken() && <UserDropdown
                    handleLogout={props.handleLogout}
                    username={props.username}/>}
            </Menu>
        </Segment>
    );
};

/**
 *  Render private links
 * @constructor
 */
const PrivateNavigation = () => (
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
const PublicNavigation = () => (
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
 * TODO: SHOULD ADD AVATAR OF USER
 * @param props
 * @constructor
 */

const UserDropdown = ( { username, handleLogout } ) => (
    <Menu.Menu position="right">
        <Dropdown text={username} pointing className='link item'>
            <Dropdown.Menu>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.item onClick={handleLogout}>Logout</Dropdown.item>
            </Dropdown.Menu>
        </Dropdown>
    </Menu.Menu>
);

const mapStateToProps = state => ({ username: state.getIn( [ 'user', 'name' ] ) });
const mapDispatchToProps = (dispatch) => {
    return {
        handleLogout: () => {
            dispatch({type:'USER_LOGOUT'});
        }
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( MainNavigation );
