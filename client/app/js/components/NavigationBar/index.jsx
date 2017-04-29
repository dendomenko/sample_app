import React from 'react';
import { Session } from 'utils/Session';
import { NavLink, Link } from 'react-router-dom';

/**
 * TODO:
 */
export default( props ) => (
    <div>
        <ul>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <br/>
            <NavLink to="/about" activeClassName="Active">About</NavLink>
            <br/>
            <NavLink to="/help" activeClassName="active">FAQ</NavLink>
            <br/>
            <Link to="/signin">Login</Link>
            <br/>
            <Link to="/register">Register</Link>
        </ul>
        <br/>
        {Session.getToken() && <PrivateLinks />}
    </div>
);

/**
 *  Render private links
 * @constructor
 */
const PrivateLinks = () => (
    <ul>
        <li>
            <NavLink to="/projects" activeClassName="active">Projects</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard" activeClassName="active">Dashborad</NavLink>
        </li>
        <li>
            <NavLink to="/userprofile" activeClassName="active">Userprofile</NavLink>
        </li>
    </ul>
);