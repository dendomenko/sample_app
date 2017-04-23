import React from 'react';
import {NavLink, Link} from 'react-router-dom';

/**
 * TODO:
 */
export default(props) => (
    <div>
        <ul>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <br/>
            <NavLink to="/about" activeClassName="Active">About</NavLink>
            <br/>
            <NavLink to="/help" activeClassName="active">FAQ</NavLink>
            <br/>
            <Link to="/sigin">Login</Link>
        </ul>
    </div>
);