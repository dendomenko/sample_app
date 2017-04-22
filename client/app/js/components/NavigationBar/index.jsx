import React from 'react';
import {Link} from 'react-router';

const NavigationBar = () => (
    <div>
        <div>
            <Link activeOnlyWhenExact to="/">
                Home
            </Link>
            <Link to="/example">
                Example
            </Link>
            <Link to="/notfound">
                Not Found
            </Link>
        </div>
    </div>
);

export default NavigationBar;