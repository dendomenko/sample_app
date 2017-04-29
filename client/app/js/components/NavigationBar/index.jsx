import React from 'react';
import { Session } from 'utils/Session';
import { NavLink, Link } from 'react-router-dom';


export default( props ) => (
    <div>
        <ul>
            <li>
                <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" activeClassName="Active">About</NavLink>
            </li>
            <li>
                <NavLink to="/help" activeClassName="active">FAQ</NavLink>
            </li>
            <li>
                <Link to="/signin">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
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