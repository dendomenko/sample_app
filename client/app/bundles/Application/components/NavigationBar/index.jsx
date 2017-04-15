// eslint-disable new-cap
import React from 'react';
import * as paths from '../../constants/paths';

const NavigationBar = (props) => {
    // const { pathname } = props;
    console.info('BAR', paths);

    /* eslint-disable new-cap */
    return (
        <nav className="navbar navbar-default" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    Navbar
                </div>
                <ul className="nav navbar-nav">
                    {Object.keys(paths).map(key => (
                        <li key={key}>
                            <a href={paths[key]}>`route ${key}`</a>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </nav>
    );
};


export default NavigationBar;